import{d as p,r,b as h,k as n,w as t,aq as c,e as a,o as d,l as s}from"./style_icon.js";const j={class:"markdown-body"},o=c(`<h1>Address</h1><h3>Intro</h3><p>Used for level four address selection</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Address</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Address</span>);
</code></pre><h3>Choose Custom Address</h3>`,6),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Choose Address"'),s(),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},'"text"'),s(),a("span",{class:"hljs-attr"},"is-link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showAddress"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-address"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"showPopup"'),s(`
    `),a("span",{class:"hljs-attr"},":province"),s("="),a("span",{class:"hljs-string"},'"province"'),s(`
    `),a("span",{class:"hljs-attr"},":city"),s("="),a("span",{class:"hljs-string"},'"city"'),s(`
    `),a("span",{class:"hljs-attr"},":country"),s("="),a("span",{class:"hljs-string"},'"country"'),s(`
    `),a("span",{class:"hljs-attr"},":town"),s("="),a("span",{class:"hljs-string"},'"town"'),s(`
    @`),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"close"'),s(`
    `),a("span",{class:"hljs-attr"},"custom-address-title"),s("="),a("span",{class:"hljs-string"},'"Choose Address"'),s(`
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

      `),a("span",{class:"hljs-keyword"},"const"),s(" text = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'Choose Address'"),s(`);

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
`)])],-1),g=a("h3",null,"Choose City",-1),m=a("p",null,"If you want to select a province, you need to set the region ID in the order of province City country town in the model-value, and ensure that the data of the corresponding province can be queried",-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Choose City"'),s(),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},'"text"'),s(),a("span",{class:"hljs-attr"},"is-link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showAddress"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-address"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"showPopup"'),s(`
    `),a("span",{class:"hljs-attr"},":province"),s("="),a("span",{class:"hljs-string"},'"province"'),s(`
    `),a("span",{class:"hljs-attr"},":city"),s("="),a("span",{class:"hljs-string"},'"city"'),s(`
    `),a("span",{class:"hljs-attr"},":country"),s("="),a("span",{class:"hljs-string"},'"country"'),s(`
    `),a("span",{class:"hljs-attr"},":town"),s("="),a("span",{class:"hljs-string"},'"town"'),s(`
    @`),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"onChange"'),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"close"'),s(`
    `),a("span",{class:"hljs-attr"},"custom-address-title"),s("="),a("span",{class:"hljs-string"},'"Choose City"'),s(`
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

      `),a("span",{class:"hljs-keyword"},"const"),s(" text = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'Balizhuang Street, Chaoyang District, Beijing'"),s(`);

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
`)])],-1),y=a("h3",null,"Choose Custom Address2",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Choose Address"'),s(),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},'"text"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"custom2"'),s(),a("span",{class:"hljs-attr"},"is-link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showAddress"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
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

      `),a("span",{class:"hljs-keyword"},"const"),s(" text = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'Balizhuang Street, Chaoyang District, Beijing'"),s(`);

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
`)])],-1),A=a("h3",null,"Choose Exist Address",-1),w=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Choose Address"'),s(),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},'"text"'),s(),a("span",{class:"hljs-attr"},"is-link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showAddressExist"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-address"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"showPopupExist"'),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"exist"'),s(`
    `),a("span",{class:"hljs-attr"},":exist-address"),s("="),a("span",{class:"hljs-string"},'"existAddress"'),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"close"'),s(`
    `),a("span",{class:"hljs-attr"},":is-show-custom-address"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
    @`),a("span",{class:"hljs-attr"},"selected"),s("="),a("span",{class:"hljs-string"},'"selected"'),s(`
    `),a("span",{class:"hljs-attr"},"exist-address-title"),s("="),a("span",{class:"hljs-string"},'"Delivery To"'),s(`
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

      `),a("span",{class:"hljs-keyword"},"const"),s(" text = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'Choose Address'"),s(`);

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
`)])],-1),v=a("h3",null,"Custom Icon",-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-address-custom-buttom"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"btn"'),s(">")]),s("自定义按钮"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-address"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"HeartFill"),s(", "),a("span",{class:"hljs-title class_"},"Heart"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
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

      `),a("span",{class:"hljs-keyword"},"const"),s(" text = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'Choose Address'"),s(`);

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
`)])],-1),C=a("h3",null,"Custom Or Exist",-1),x=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Choose Address"'),s(),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},'"text"'),s(),a("span",{class:"hljs-attr"},"is-link"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showAddressOther"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
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
    `),a("span",{class:"hljs-attr"},"custom-and-exist-title"),s("="),a("span",{class:"hljs-string"},'"Choose Other Address"'),s(`
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
      `),a("span",{class:"hljs-keyword"},"const"),s(" text = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'Choose Address'"),s(`);

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
`)])],-1),k=c('<h1>API</h1><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model:visible</td><td>Whether to open address</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>v-model:value</td><td>Default value</td><td>Array</td><td><code class="">[]</code></td></tr><tr><td>type</td><td>Choose type: <code class="">exist/custom/custom2</code></td><td>string</td><td><code class="">custom</code></td></tr><tr><td>province</td><td>Province data</td><td>Array</td><td><code class="">[]</code></td></tr><tr><td>city</td><td>City data</td><td>Array</td><td><code class="">[]</code></td></tr><tr><td>country</td><td>Country data</td><td>Array</td><td><code class="">[]</code></td></tr><tr><td>town</td><td>Town dta</td><td>Array</td><td><code class="">[]</code></td></tr><tr><td>height</td><td>Popup height</td><td>string | number</td><td><code class="">200px</code></td></tr><tr><td>exist-address</td><td>Exist address list data</td><td>Array</td><td><code class="">[]</code></td></tr><tr><td>is-show-custom-address</td><td>Whether to change custom address</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>custom-address-title</td><td>Custom address title</td><td>string</td><td><code class="">Select Region</code></td></tr><tr><td>exist-address-title</td><td>Exist address title</td><td>string</td><td><code class="">Delivery To</code></td></tr><tr><td>custom-and-exist-title</td><td>Custom address and existing address switch button copywriting</td><td>string</td><td><code class="">Choose Another Address</code></td></tr><tr><td>columns-placeholder</td><td>Columns placeholder text</td><td>string | Array</td><td><code class="">Select</code></td></tr><tr><td>lock-scroll</td><td>Whether the background is locked</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>change</td><td>Emitted when to selected custom address</td><td>reference <code class="">onChange</code></td></tr><tr><td>selected</td><td>Emitted when to selected exist address</td><td>reference <code class="">selected</code></td></tr><tr><td>close</td><td>Emitted when to close</td><td>reference <code class="">close</code></td></tr><tr><td>close-mask</td><td>Emitted when to close mask</td><td>{closeWay:&#39;mask&#39;/&#39;cross&#39;}</td></tr><tr><td>switch-module</td><td>Click to select another address or custom address to select the upper left corner of the return button triggered</td><td>{type:&#39;exist&#39;/&#39;custom&#39;/&#39;custom2&#39;}</td></tr></tbody></table><h2>change</h2><table><thead><tr><th>Attribute</th><th>Description</th><th>Options</th></tr></thead><tbody><tr><td>custom</td><td>The administrative region currently clicked</td><td><code class="">province / city / country / town</code></td></tr><tr><td>next</td><td>The next level of the administrative region currently clicked</td><td><code class="">province / city / country / town</code></td></tr><tr><td>value</td><td>The value of the currently clicked administrative region</td><td><code class="">{}</code></td></tr></tbody></table><h2>selected</h2><table><thead><tr><th>Attribute</th><th>Description</th><th>Options</th></tr></thead><tbody><tr><td>First Option（prevExistAdd）</td><td>Select the previously selected address</td><td><code class="">{}</code></td></tr><tr><td>Second Option（nowExistAdd）</td><td>Currently selected address</td><td><code class="">{}</code></td></tr><tr><td>Third Option（arr）</td><td>After selecting the existing address list</td><td><code class="">{}</code></td></tr></tbody></table><h2>close</h2><table><thead><tr><th>Attribute</th><th>Description</th><th>Options</th></tr></thead><tbody><tr><td>type</td><td>Selected Type</td><td><code class="">exist/custom/custom2</code></td></tr><tr><td>data</td><td>Selected Data</td><td><code class="">{}</code></td></tr></tbody></table><h2>Slot</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>bottom</td><td>Bottom slot</td></tr><tr><td>icon</td><td>Selected icon slot</td></tr><tr><td>unselected-icon</td><td>Unselected icon slot</td></tr><tr><td>close-icon</td><td>Close icon slot</td></tr><tr><td>back-icon</td><td>Change icon slot</td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-address-region-tab-line</td><td><em>linear-gradient(90deg, var(--cub-primary-color) 0%, rgba(#fa2c19, 0.15) 100%)</em></td></tr><tr><td>--cub-address-icon-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-address-header-title-font-size</td><td><em>18px</em></td></tr><tr><td>--cub-address-header-title-color</td><td><em>#262626</em></td></tr><tr><td>--cub-address-region-tab-font-size</td><td><em>13px</em></td></tr><tr><td>--cub-address-region-tab-color</td><td><em>#1d1e1e</em></td></tr><tr><td>--cub-address-region-tab-active-item-font-weight</td><td><em>bold</em></td></tr><tr><td>--cub-address-region-tab-line-border-radius</td><td><em>0</em></td></tr><tr><td>--cub-address-region-tab-line-opacity</td><td><em>1</em></td></tr><tr><td>--cub-address-region-item-color</td><td><em>#333</em></td></tr><tr><td>--cub-address-region-item-font-size</td><td><em>var(--cub-font-size-1)</em></td></tr><tr><td>--cub-address-item-margin-right</td><td><em>9px</em></td></tr></tbody></table>',16),J={},D="",E=p({__name:"doc.en-US",setup(I,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(B,Z)=>{const l=r("demo-block");return d(),h("div",j,[o,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0iQ2hvb3NlIEFkZHJlc3MiIDpkZXNjPSJ0ZXh0IiBpcy1saW5rIEBjbGljaz0ic2hvd8gqPjwvyEzJWWHGHAogICAgdi1tb2RlbDp2aXNpYsRqxD1Qb3B1cCLFIDpwcm92aW5jZT0iyArHGWNpdHk9IsQGyBFvdW50csQUxgnHF3Rvd249IsQGxhFAY2hhbmdlPSJvbkPFCsgXbG9zZT0ixQfGE2N1c3RvbegAry32AQsKICDnAOTHKD4KPC/qAUw8c2NyaXB05AD8aW1wb3J0IHsgcmVmLCByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUvZGVmYXVsdCB75QCTc2V0dXAoKccOICBjb25zdCDpATQgPcRdKGZhbHNlKcRFyiTnAJ7FIsZ6KMhFICDoAVs6IFvJFCAgeyBpZDogMSwgbmFtZTogJ+WMl+S6rCcgfSzRJTLKJbm/6KW/1SUzySXmsZ/YJTTKSpub5bedJyB9ySRdyi/kAfj0AK43ymScnemYs+WMutVnOMpntIfmlofYKDnKUJiM5bnZUDbJKOefs+aZr+WxscYr9QC95gKh9ADA6gEk5YWr6YeM5bqE6KGX6YGT1XbqAJ7ljJfoi5HVJesBUri46JCl5Lmh9wCY5AMlOiBbXccRfSk7Cu0CROQD7+cCYyfuAwcn0CvrBAQgPSAoKSA9PukCtSDqArEudmFsdWUgPSAhzxPoAr19z1joA7XEVWNhbM9YxiTkAO4gPegC8ltjYWwubmV4dF3IVCAgaWYgKCHFJ3x8xS8ubGVuZ3RoIDwgMeoDXfYAquUDXcpL6AFJfe4Db+UER+QApXbxAKXkAUbJTnZhbC5kYXRhLucArlN0cvIA+3JldHVybiB76gCOLMVGLOwBZyzpARwsxn4sIC4uLuYEXSjHXinoAKfkALZ9Owo8L+gEnw=="},{default:t(()=>[i]),_:1}),g,m,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0iQ2hvb3NlIENpdHkiIDpkZXNjPSJ0ZXh0IiBpcy1saW5rIEBjbGljaz0ic2hvd0FkZHJlc3MiPjwvyEnJVmHGHAogICAgdi1tb2RlbD0idmFsdWUizBQ6dmlzaWLEe8RRUG9wdXDGIDpwcm92aW5jZT0iyArHGWNpdHk9IsQGyBFvdW50csQUxgnHF3Rvd249IsQGxhFAY2hhbmdlPSJvbkPFCsgXbG9zZT0ixQfGE2N1c3RvbegAwy3zARwKICDnAPXHJT4KPC/qAVo8c2NyaXB05AENaW1wb3J0IHsgcmVmLCByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUvZGVmYXVsdCB75QCQc2V0dXAoKccOICBjb25zdCDpATEgPcRdKGZhbHNlKcRFyiTlAXHHIFsxLCA3LCAzXc8k5wDCxSbmAJ4oyGkgIOgBfDogW8kUICB7IGlkOiAxLCBuYW1lOiAn5YyX5LqsJyB9LNElMsolub/opb/VJTPJJeaxn9glNMpKm5vlt50nIH3JJF3KL+QCGfQArjfKZJyd6Ziz5Yy61Wc4yme0h+aWh9goOcpQmIzludlQNsko55+z5pmv5bGxxiv1AL3mAsL0AMDqASTlhavph4zluoTooZfpgZPVduoAnuWMl+iLkdUl6wFSuLjokKXkuaH3AJjkA0Y6IFtdxxF9KTsK7QJE5AQk5wJnJ0JhbGl6aHVhbmcgU3RyZWV0LCBDaGFvecQRRGlzdHJpY3QsIEJlaWppbmcn0ErrBFggPSAoKSA9PukC+CDqAvQu6ALaIc8T6ALcfc9Y6AP1xFVjYWzPWMYk5AENID3oAxFbY2FsLm5leHRdyFQgIGlmICghxSd8fMUvLmxlbmd0aCA8IDHqA6D2AKrlA6DKS+gBaH3uA47lBIfkAKV28QCl5AFlyU52YWwuZGF0YS7nAK5TdHLKXMUlyStbySzoA84uaWQsykLkAzLPEuYChy5pZOkA/OoBUHJldHVybiB76gDjLOUAmyzsAbws6QFxLOYA08VedWUsIC4uLuYE/CjnALop6AED5AESfTsKPC/oBT4="},{default:t(()=>[u]),_:1}),y,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0iQ2hvb3NlIEFkZHJlc3MiIDpkZXNjPSJ0ZXh0IiB0eXBlPSJjdXN0b20yIiBpcy1saW5rIEBjbGljaz0ic2hvd8g5PjwvyFvJaGHGHAogICAgdi1tb2RlbD0idmFsdWUizBQ6dmlzaWLkAI3EUVBvcHVwxiDOf8UTOnByb3ZpbmNlPSLICscZY2l0eT0ixAbIEW91bnRyxBTGCccXdG93bj0ixAbGEUBjaGFuZ2U9Im9uQ8UKyBdsb3PEfsQHxhNoZWlnaHQ9IjI3MHB4xBPnAPTnAOc+Cjwv6gFrPHNjcmlwdOQBDGltcG9ydCB7IHJlZiwgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFL2RlZmF1bHQge8V8c2V0dXAoKccOICBjb25zdCDpATAgPcRdKGZhbHNlKcRFyiTlAXDHIFsxLCA3LCAzXc8k5wDCxSbmAJ4oyGkgIOgBaDogW8kUICB7IGlkOiAxLCBuYW1lOiAn5YyX5LqsJyzmAlg6ICdCJyB9LNExMsoxub/opb/LMUfVMTPJMeaxn84xStUxNMpim5vlt53LMVPVMTXKYrWZ5rGfyzFaJyB9yTBdyjvkAmb0AQ83ykucnemYs+WMustOQ9V/OMk05bSH5paH3zTFNDnKaJiM5bnfaMY0Nsk055+z5pmv5bGxzjf2AR7qAYDlhavph4zluoTooZfpgZP/AevsAKXljJfoi5HPMfUBWOYDqvQBW/8AiP8AiPsAiP0CQri46JCl5LmhyzTkAV70ALzkBFI6IFtdxxF9KTsK7QNk5AVS5wOHJ0JhbGl6aHVhbmcgU3RyZWV0LCBDaGFvecQRRGlzdHJpY3QsIEJlaWppbmcn0ErrBXcgPSAoKSA9PukEGCDqBBQu6AP6Ic8T6AP8fc9Y6AUBxFVjYWzPWMYk5AEZID3oBDFbY2FsLm5leHRdyFQgIGlmICghxSd8fMUvLmxlbmd0aCA8IDHqBMD2AKrlBMDKS+gBaH3uBK7lBZPkAKV28QCl5AFlyU52YWwuZGF0YS7nAK5TdHLKXMUlyStbySzoBO4uaWQsykLkA/HPEuYCqy5pZOkA/OoBUHJldHVybiB76gDjLOUAmyzsAbws6QFxLOYA08VedWUsIC4uLuYGHCjnALop6AED5AESfTsKPC/oBl4="},{default:t(()=>[b]),_:1}),A,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0iQ2hvb3NlIEFkZHJlc3MiIDpkZXNjPSJ0ZXh0IiBpcy1saW5rIEBjbGljaz0ic2hvd8cqRXhpc3QiPjwvyFHJXmHGIQogICAgdi1tb2RlbDp2aXNpYsRvxEJQb3B1cMZAxSV0eXBlPSJlyhE6xQzISccbx3jGIkBjbG9zZT0ixQfHNWlzLcReLWN1c3Rvbco+ZmFsyCRAc2VsZWN0ZWQ9IsgKxhnNcS3nARtEZWxpdmVyeSBUb8Qm5wDsxyU+Cjwv6gFZPHNjcmlwdOQBBGltcG9ydCB7IHJlZiwgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CsR6xS9kZWZhdWx0IHvlAI9zZXR1cCgpxw4gIGNvbnN0IO4BPCA9xGIo5QDeKcRKyinsATDHJ1vHISDJVMQBaWQ6IDEsyxHnAN1EZXRhaWw6ICcnzB1jaXR5TmFtZTogJ+asoea4oOmVh84hb3VuySPpgJrlt57ljLrNI3Byb3ZpbmNlxyXljJfkuqzluILNJegBnOcAwzogdHJ1ZcwhdG93bsdCzTluxhTmjqLmjqLpsbzOe2hvbsQeMTgyKioqKjE3MTgnyR99yirwASEy/wEhyh3rASHpkpPpsbzlspvlhajwAQTtASf8AR7JRf4BHuUCA/8BH8UB/wEf/wEfxwHwAR8z/AEf5Lqs5Lic5aSn5Y6m+AErxB6FtP0BJeenkeWIm+WNgeS4gOihlzE45Y+36Zmi/wJa/wJa/wE8/wE8/wE87AE8xwpdKTsK7QOn5AVk5wOfJ+4FhyfQK/AFeSA9ICgpID0+6wGO7gQeLnZhbHVlID3lAzvoBB59z1blBT7ES3ZhbM9OaWbFFi7kBZwgPT0gJ+UEVCfqBJPKRnvtAXss6QHbLOsBxOQE/+YBWCzuAiQgfSA9IMRpZGF0YegAqMQB5AEd6QDFzGEgK8lixAvJYyAryWQgK85lylh9IGVsc2XtAMXNaegAii7HQFN0css99wFH6AJV5AFKcHJlduUBgUFkZCwgbm93yg1hcnLvAWXEP29sZS5sb2fNOekFz84jy07JIuoAjHJldHVybiB77wIJLO0GDizxAkos5QEBLOYCDCzqAMx9xmLkAPR9Owo8L+gG4Q=="},{default:t(()=>[w]),_:1}),v,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0i6YCJ5oup5Zyw5Z2AIiA6ZGVzYz0idGV4dCIgaXMtbGluayBAY2xpY2s9InNob3dDdXN0b21JbWciPjwvyEzJWWFkZHJlc3MKICAgIHYtbW9kZWw6dmlzaWLEasQ/UG9wdXDKRMUpdHlwZT0iZXhpc3TGETrFDMhNxxtBxg7GIkBjbG9zZT0ixQfHNWlzLcRiLWPFXso+ZmFsxiTkAKYgIOkBDiAjdW5zZWxlY3RlZC1pY29uxiAgIDxIZWFydCBzdHnkALZtYXJnaW4tcmlnaHQ6OHB45AD4xSHHTy/IUNFf0lRGaWxs2VggY29sb3I9IiNmMDDJZcQy32kgI2JvdHRvbclrZGl2IGNsYeQA/OsBlOgBGGJ1xC0iyC7OMGJ0biI+6Ieq5a6a5LmJ5oyJ6ZKuPC9kaXbJXcoN7gCR5gINx2w+CswdPHNjcmlw5QEwaW1wb3J0IHsgcmVmLCByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzvML+kBDCzGC8kqQGN1YmZlL+QBa3MtyDdleMU3ZGVmYXVsdCB75QCvY29tcG9uZW50czrVUSzFJnNldHVwKCnHNMQ2bnN0IPICuiA95ADDKOUCXCnEdMot7AKuxydbxyEgyVjEAWlkOiAxxnfGAecBPkRldGFpbDogJyfMHWNpdHlOYW1lOiAn5qyh5rig6ZWHziFvdW7JI+mAmuW3nuWMus0jcHJvdmluY2XHJeWMl+S6rOW4gs0l6AMU5wDDOiB0cnVlzCF0b3dux0LNOW7GFOaOouaOoumxvM57aG9uxB4xODIqKioqMTcxOCfJH+cBfcQB8AEhMv8BIcod6wEh6ZKT6bG85bKb5YWo8AEE7QEn/AEeyUX+AR7lAgP/AR/FAf8BH/8BH8cB8AEfM/wBH+S6rOS4nOWkp+WOpvgBK8QehbT9ASXnp5HliJvljYHkuIDooZcxOOWPt+mZov8CWv8CWv8BPP8BPP8BPOwBPMcKXSk7Cu0Dp+QG4+cDnydDaG9vc2Ug5wCYJ9Ar7Qb4ID0gKCkgPT7rAYvyBB8udmFsdWUgPeUDPOgEH33PV+UGvcRPdmFsz1JpZsUWLuQHGyA9PSAn5QRVJ+oEmMpGe+0BfCzpAdws6wHF5AVh5gFZLO4CJSB9ID0gxGlkYXRh6ACoxAHkAR7pAMXMYSAryWLEC8ljICvJZCArzmXKWH0gZWxzZe0Axc1p6ACKLsdAU3Ryyz33AUfoAlbkAUpwcmV2RecFgCwgbm93yg1hcnLvAWXEP29sZS5sb2fNOekF0M4jy07JIuoAjHJldHVybiB78wINLO0GEyzlAPMs7gJVLOYCDSzqAM19xmPkAPV9Owo8L+gHRDzlCD/kB0wu+Qfd5wDkd2lkdGg6IDEwMCXGTWhl5QhtIDU0cHjGEnBhZGRpbmc6IDZweCAwxATGGGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjLEAsQj5ACYLmJ0bs5rOdBqNDLIamxpbmUt0hfmCQY6IGF1dG/GEuQBHi1hbGlnbjogY2VudGXnAgNiYWNrZ3JvdW5kOsVNYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmEyYzE5IDAlxQw2NDE55QD/5wGw5wDWxDZ1czogMjHoAIZmb250LXNpemU6IDE1yBXlCY86IHdoaXTlA8N95AGG5gF9"},{default:t(()=>[f]),_:1}),C,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0iQ2hvb3NlIEFkZHJlc3MiIDpkZXNjPSJ0ZXh0IiBpcy1saW5rIEBjbGljaz0ic2hvd8cqT3RoZXIiPjwvyFHJXmHGIQogICAgdi1tb2RlbDp2aXNpYsRvxEJQb3B1cMZAxSV0eXBlPSJleGlzdMYROsUMyEnHG8d4xyJwcm92aW5jZT0iyArHGWNpdHk9IsQGyBFvdW50csQUxgnHF3Rvd249IsQGxhFAY2xvc2U9IsUHxxNzZWxlY3RlZD0iyArGGWN1c3RvbS1hbmQt5gCq7gFM5QDb6QFSx0t3aXRjaOQBDnXEKsYPTcUO7ACALW1hc2vnAIVNYXNryBxoYW5nZT0ib25DxQrEF+cBe+cBJT4KPC/qAeg8c2NyaXB05AGTaW1wb3J0IHsgcmVmLCByZWFjdGl2ZSwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMUvZGVmYXVsdCB75QCAc2V0dXAoKccOICBjb25zdCDuAcsgPcRiKGZhbHNlKcRKyinnAKPFIsZ/KMhKICDoAb86IFvJFCAgeyBpZDogMSwgbmFtZTogJ+WMl+S6rCcgfSzRJTLKJbm/6KW/1SUzySXmsZ/YJTTKSpub5bedJyB9ySRdyi/kAlz0AK43ymScnemYs+WMutVnOMpntIfmlofYKDnKUJiM5bnZUDbJKOefs+aZr+WxscYr9QC95gMF9ADA6gEk5YWr6YeM5bqE6KGX6YGT1XbqAJ7ljJfoi5HVJesBUri46JCl5Lmh9wCY5AOJOiBbXccRfe8CQ+wEAucCauoAweoCTSDFdjHKVyDoAn1EZXRhaWw6ICcnzB3kActO5wFkrKHmuKDplYfOIeQBL8gj6YCa5bee5AFczCPoAsHHJeYCquW4gs0l6ARA5wDDOiB0cnVlzCHkAQDHQs056AICjqLmjqLpsbzOe2hvbsQeMTgyKioqKjE3MTgnyR/rAY/wASEy/wEhyh3rASHpkpPpsbzlspvlhajwAQTtASf8AR7JRf4BHuUERv8BH8UB/wEf/wEfxwHwAR8z/AEf5Lqs5Lic5aSn5Y6m+AErxB6FtP0BJeenkeWIm+WNgeS4gOihlzE45Y+36Zmi/wJa/wJa/wE8/wE8/wE87AE8xwpd7wOmYmFja0J0bkljb27nA6UnbGVmdCfPJ+QIXMgg7gh/xCrNK/AIcSA9ICgpID0+6wG07gaHLnZhbHVlID3lA2HId33PVuUHX8RLdmFsz05pZsUWLuQIlCA9PSAn5QR6J+oG/MpGe+0BoSzpAgEs6wHq5Ado5gF+LO4CSiB9ID0gxGlkYXRh6ACoxAHkAR3pAMXMYSAryWLEC8ljICvJZCArzmXKWH0gZWxzZe0Axc1p6ACKLsdAU3Ryyz33AUfoAnvkAUpwcmV2RecFpSwgbm93yg1hcnLvAWXEP29sZS5sb2fNOekCKM4jy07JIvEAjOsJUeQAkGP1Adpj7AHa5gnG8wHbyHgn54K55Ye75LqG4oCc6YCJ5oup5YW25LuW5Zyw5Z2A4oCd5oyJ6ZKu6gLg9QFp1lPoh6rlrprkuYnGTeW3puS4iuinkueahOi/lOWbntNcxwp97gNP6AoV9gD3xiTkA+wgPegCHlvkAQhuZXh0Xcpd5AEfIcUnfHzFLy5sZW5ndGggPCAx7gEj9wNx5QR4/wI16AN85Arb9gOA7QEt5YWz6Zet5by55bGCJyzkAqXzAgByZXR1cm7LQ+gBEOoEz+4AssoY5AMDyg7sCGTOPOwEgssa6wJzyhbpAODPE8s45wM3yhLrBTjKFS4uLuYLpCjnAbYp7gH/5AFhfTsKPC/oC+w="},{default:t(()=>[x]),_:1}),k])}}});export{E as default,D as excerpt,J as frontmatter};
