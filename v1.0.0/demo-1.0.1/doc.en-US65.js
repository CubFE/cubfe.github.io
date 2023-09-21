import{d as p,r,b as h,k as n,w as t,aq as c,e as a,o as j,l as s}from"./style_icon.js";const i={class:"markdown-body"},d=c(`<h1>Sku</h1><h3>Intro</h3><p>Often used for commodity selection</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Sku</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Sku</span>);
</code></pre><h3>Basic Usage</h3>`,6),o=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},'"Basic Usage"'),s(),a("span",{class:"hljs-attr"},"desc"),s("="),a("span",{class:"hljs-string"},'""'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"base = true"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-sku"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"base"'),s(`
    `),a("span",{class:"hljs-attr"},":sku"),s("="),a("span",{class:"hljs-string"},'"sku"'),s(`
    `),a("span",{class:"hljs-attr"},":goods"),s("="),a("span",{class:"hljs-string"},'"goods"'),s(`
    @`),a("span",{class:"hljs-attr"},"selectSku"),s("="),a("span",{class:"hljs-string"},'"selectSku"'),s(`
    @`),a("span",{class:"hljs-attr"},"clickBtnOperate"),s("="),a("span",{class:"hljs-string"},'"clickBtnOperate"'),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"close"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-sku"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive, onMounted, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" base = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" data = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"sku"),s(`: [],
        `),a("span",{class:"hljs-attr"},"goods"),s(`: {}
      });

      `),a("span",{class:"hljs-title function_"},"onMounted"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        `),a("span",{class:"hljs-title function_"},"fetch"),s("("),a("span",{class:"hljs-string"},"'https://storage.360buyimg.com/cubui/3x/data.js'"),s(`)
          .`),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"response"),s(") =>")]),s(" response."),a("span",{class:"hljs-title function_"},"json"),s(`())
          .`),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"res"),s(") =>")]),s(` {
            `),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-title class_"},"Sku"),s(", "),a("span",{class:"hljs-title class_"},"Goods"),s(`, imagePathMap } = res;
            data.`),a("span",{class:"hljs-property"},"sku"),s(" = "),a("span",{class:"hljs-title class_"},"Sku"),s(`;
            data.`),a("span",{class:"hljs-property"},"goods"),s(" = "),a("span",{class:"hljs-title class_"},"Goods"),s(`;
          }) `),a("span",{class:"hljs-comment"},"//执行结果是 resolve就调用then方法"),s(`
          .`),a("span",{class:"hljs-title function_"},"catch"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"err"),s(") =>")]),s(),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Oh, error'"),s(", err)); "),a("span",{class:"hljs-comment"},"//执行结果是 reject就调用catch方法"),s(`
      });
      `),a("span",{class:"hljs-comment"},"// 切换规格类目"),s(`
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"selectSku"),s(" = ("),a("span",{class:"hljs-params"},"ss: string"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"const"),s(` { sku, skuIndex, parentSku, parentIndex } = ss;
        `),a("span",{class:"hljs-keyword"},"if"),s(" (sku."),a("span",{class:"hljs-property"},"disable"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"false"),s(`;
        data.`),a("span",{class:"hljs-property"},"sku"),s("[parentIndex]."),a("span",{class:"hljs-property"},"list"),s("."),a("span",{class:"hljs-title function_"},"forEach"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"s"),s(") =>")]),s(` {
          s.`),a("span",{class:"hljs-property"},"active"),s(" = s."),a("span",{class:"hljs-property"},"id"),s(" == sku."),a("span",{class:"hljs-property"},"id"),s(`;
        });
        data.`),a("span",{class:"hljs-property"},"goods"),s(` = {
          `),a("span",{class:"hljs-attr"},"skuId"),s(": sku."),a("span",{class:"hljs-property"},"id"),s(`,
          `),a("span",{class:"hljs-attr"},"price"),s(": "),a("span",{class:"hljs-string"},"'4599.00'"),s(`,
          `),a("span",{class:"hljs-attr"},"imagePath"),s(": "),a("span",{class:"hljs-string"},"'//img14.360buyimg.com/n4/jfs/t1/215845/12/3788/221990/618a5c4dEc71cb4c7/7bd6eb8d17830991.jpg'"),s(`
        };
      };
      `),a("span",{class:"hljs-comment"},"// 底部操作按钮触发"),s(`
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clickBtnOperate"),s(" = ("),a("span",{class:"hljs-params"},"op: string"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'点击了操作按钮'"),s(`, op);
      };
      `),a("span",{class:"hljs-comment"},"// 关闭商品规格弹框"),s(`
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"close"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {};
      `),a("span",{class:"hljs-keyword"},"return"),s(" { base, selectSku, clickBtnOperate, close, ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(data) };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),u=a("h3",null,"Not Sell",-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Not Sell"'),s(),a("span",{class:"hljs-attr"},"desc"),s("="),a("span",{class:"hljs-string"},'""'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"notSell = true"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-sku"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"notSell"'),s(`
    `),a("span",{class:"hljs-attr"},":sku"),s("="),a("span",{class:"hljs-string"},'"sku"'),s(`
    `),a("span",{class:"hljs-attr"},":goods"),s("="),a("span",{class:"hljs-string"},'"goods"'),s(`
    `),a("span",{class:"hljs-attr"},":btnExtraText"),s("="),a("span",{class:"hljs-string"},'"btnExtraText"'),s(`
    @`),a("span",{class:"hljs-attr"},"changeStepper"),s("="),a("span",{class:"hljs-string"},'"changeStepper"'),s(`
    @`),a("span",{class:"hljs-attr"},"selectSku"),s("="),a("span",{class:"hljs-string"},'"selectSku"'),s(`
    `),a("span",{class:"hljs-attr"},":btnOptions"),s("="),a("span",{class:"hljs-string"},`"['buy', 'cart']"`),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"sku-operate"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"sku-operate-box"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"sku-operate-box-dis"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(">")]),s("查看相似商品"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"sku-operate-box-dis"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(">")]),s("到货通知"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-sku"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive, onMounted, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" notSell = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" data = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"sku"),s(`: [],
        `),a("span",{class:"hljs-attr"},"goods"),s(`: {}
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(" btnExtraText = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'抱歉，此商品在所选区域暂无存货'"),s(`);

      `),a("span",{class:"hljs-title function_"},"onMounted"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        `),a("span",{class:"hljs-title function_"},"fetch"),s("("),a("span",{class:"hljs-string"},"'https://storage.360buyimg.com/cubui/3x/data.js'"),s(`)
          .`),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"response"),s(") =>")]),s(" response."),a("span",{class:"hljs-title function_"},"json"),s(`())
          .`),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"res"),s(") =>")]),s(` {
            `),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-title class_"},"Sku"),s(", "),a("span",{class:"hljs-title class_"},"Goods"),s(`, imagePathMap } = res;
            data.`),a("span",{class:"hljs-property"},"sku"),s(" = "),a("span",{class:"hljs-title class_"},"Sku"),s(`;
            data.`),a("span",{class:"hljs-property"},"goods"),s(" = "),a("span",{class:"hljs-title class_"},"Goods"),s(`;
          }) `),a("span",{class:"hljs-comment"},"//执行结果是 resolve就调用then方法"),s(`
          .`),a("span",{class:"hljs-title function_"},"catch"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"err"),s(") =>")]),s(),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Oh, error'"),s(", err)); "),a("span",{class:"hljs-comment"},"//执行结果是 reject就调用catch方法"),s(`
      });

      `),a("span",{class:"hljs-comment"},"// inputNumber 更改"),s(`
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"changeStepper"),s(" = ("),a("span",{class:"hljs-params"},"count: number"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'购买数量'"),s(`, count);
      };

      `),a("span",{class:"hljs-comment"},"// 切换规格类目"),s(`
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"selectSku"),s(" = ("),a("span",{class:"hljs-params"},"ss: string"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"const"),s(` { sku, skuIndex, parentSku, parentIndex } = ss;
        `),a("span",{class:"hljs-keyword"},"if"),s(" (sku."),a("span",{class:"hljs-property"},"disable"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"false"),s(`;
        data.`),a("span",{class:"hljs-property"},"sku"),s("[parentIndex]."),a("span",{class:"hljs-property"},"list"),s("."),a("span",{class:"hljs-title function_"},"forEach"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"s"),s(") =>")]),s(` {
          s.`),a("span",{class:"hljs-property"},"active"),s(" = s."),a("span",{class:"hljs-property"},"id"),s(" == sku."),a("span",{class:"hljs-property"},"id"),s(`;
        });
        data.`),a("span",{class:"hljs-property"},"goods"),s(` = {
          `),a("span",{class:"hljs-attr"},"skuId"),s(": sku."),a("span",{class:"hljs-property"},"id"),s(`,
          `),a("span",{class:"hljs-attr"},"price"),s(": "),a("span",{class:"hljs-string"},"'4599.00'"),s(`,
          `),a("span",{class:"hljs-attr"},"imagePath"),s(": "),a("span",{class:"hljs-string"},"'//img14.360buyimg.com/n4/jfs/t1/216079/14/3895/201095/618a5c0cEe0b9e2ba/cf5b98fb6128a09e.jpg'"),s(`
        };
      };
      `),a("span",{class:"hljs-comment"},"// 底部操作按钮触发"),s(`
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clickBtnOperate"),s(" = ("),a("span",{class:"hljs-params"},"op: string"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'点击了操作按钮'"),s(`, op);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(" { notSell, changeStepper, selectSku, btnExtraText, ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(data) };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".sku-operate-box"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
    `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
    `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"8px"),s(),a("span",{class:"hljs-number"},"10px"),s(`;
    `),a("span",{class:"hljs-attribute"},"box-sizing"),s(`: border-box;
  }
  `),a("span",{class:"hljs-selector-class"},".sku-operate-box-dis"),s(` {
    `),a("span",{class:"hljs-attribute"},"flex"),s(": "),a("span",{class:"hljs-number"},"1"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".sku-operate-box-dis"),a("span",{class:"hljs-selector-pseudo"},":first"),s(`-child {
    `),a("span",{class:"hljs-attribute"},"margin-right"),s(": "),a("span",{class:"hljs-number"},"18px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),g=a("h3",null,"Custom Stepper",-1),b=a("p",null,"You can configure the maximum value and minimum value of the digital input box as required",-1),k=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Custom Stepper"'),s(),a("span",{class:"hljs-attr"},"desc"),s("="),a("span",{class:"hljs-string"},'""'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"customStepper = true"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-sku"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"customStepper"'),s(`
    `),a("span",{class:"hljs-attr"},":sku"),s("="),a("span",{class:"hljs-string"},'"sku"'),s(`
    `),a("span",{class:"hljs-attr"},":goods"),s("="),a("span",{class:"hljs-string"},'"goods"'),s(`
    `),a("span",{class:"hljs-attr"},":stepperMax"),s("="),a("span",{class:"hljs-string"},'"7"'),s(`
    `),a("span",{class:"hljs-attr"},":stepperMin"),s("="),a("span",{class:"hljs-string"},'"2"'),s(`
    `),a("span",{class:"hljs-attr"},":stepperExtraText"),s("="),a("span",{class:"hljs-string"},'"stepperExtraText"'),s(`
    @`),a("span",{class:"hljs-attr"},"changeStepper"),s("="),a("span",{class:"hljs-string"},'"changeStepper"'),s(`
    @`),a("span",{class:"hljs-attr"},"overLimit"),s("="),a("span",{class:"hljs-string"},'"overLimit"'),s(`
    `),a("span",{class:"hljs-attr"},":btnOptions"),s("="),a("span",{class:"hljs-string"},`"['buy', 'cart']"`),s(`
    @`),a("span",{class:"hljs-attr"},"selectSku"),s("="),a("span",{class:"hljs-string"},'"selectSku"'),s(`
    @`),a("span",{class:"hljs-attr"},"clickBtnOperate"),s("="),a("span",{class:"hljs-string"},'"clickBtnOperate"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-sku"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive, onMounted, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" customStepper = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" data = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"sku"),s(`: [],
        `),a("span",{class:"hljs-attr"},"goods"),s(`: {}
      });

      `),a("span",{class:"hljs-title function_"},"onMounted"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        `),a("span",{class:"hljs-title function_"},"fetch"),s("("),a("span",{class:"hljs-string"},"'https://storage.360buyimg.com/cubui/3x/data.js'"),s(`)
          .`),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"response"),s(") =>")]),s(" response."),a("span",{class:"hljs-title function_"},"json"),s(`())
          .`),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"res"),s(") =>")]),s(` {
            `),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-title class_"},"Sku"),s(", "),a("span",{class:"hljs-title class_"},"Goods"),s(`, imagePathMap } = res;
            data.`),a("span",{class:"hljs-property"},"sku"),s(" = "),a("span",{class:"hljs-title class_"},"Sku"),s(`;
            data.`),a("span",{class:"hljs-property"},"goods"),s(" = "),a("span",{class:"hljs-title class_"},"Goods"),s(`;
          }) `),a("span",{class:"hljs-comment"},"//执行结果是 resolve就调用then方法"),s(`
          .`),a("span",{class:"hljs-title function_"},"catch"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"err"),s(") =>")]),s(),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Oh, error'"),s(", err)); "),a("span",{class:"hljs-comment"},"//执行结果是 reject就调用catch方法"),s(`
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"stepperExtraText"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},'`<div style="width:100%;text-align:right;color:#F00">2 件起售</div>`'),s(`;
      };
      `),a("span",{class:"hljs-comment"},"// inputNumber 更改"),s(`
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"changeStepper"),s(" = ("),a("span",{class:"hljs-params"},"count: number"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'购买数量'"),s(`, count);
      };

      `),a("span",{class:"hljs-comment"},"// inputNumber 极限值"),s(`
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"overLimit"),s(" = ("),a("span",{class:"hljs-params"},"val: any"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"if"),s(" (val."),a("span",{class:"hljs-property"},"action"),s(" == "),a("span",{class:"hljs-string"},"'reduce'"),s(`) {
          showToast.`),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},[s("`至少买"),a("span",{class:"hljs-subst"},"${val.value}"),s("件哦`")]),s(`);
        } `),a("span",{class:"hljs-keyword"},"else"),s(` {
          showToast.`),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},[s("`最多买"),a("span",{class:"hljs-subst"},"${val.value}"),s("件哦`")]),s(`);
        }
      };
      `),a("span",{class:"hljs-comment"},"// 切换规格类目"),s(`
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"selectSku"),s(" = ("),a("span",{class:"hljs-params"},"ss: string"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"const"),s(` { sku, skuIndex, parentSku, parentIndex } = ss;
        `),a("span",{class:"hljs-keyword"},"if"),s(" (sku."),a("span",{class:"hljs-property"},"disable"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"false"),s(`;
        data.`),a("span",{class:"hljs-property"},"sku"),s("[parentIndex]."),a("span",{class:"hljs-property"},"list"),s("."),a("span",{class:"hljs-title function_"},"forEach"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"s"),s(") =>")]),s(` {
          s.`),a("span",{class:"hljs-property"},"active"),s(" = s."),a("span",{class:"hljs-property"},"id"),s(" == sku."),a("span",{class:"hljs-property"},"id"),s(`;
        });
        data.`),a("span",{class:"hljs-property"},"goods"),s(` = {
          `),a("span",{class:"hljs-attr"},"skuId"),s(": sku."),a("span",{class:"hljs-property"},"id"),s(`,
          `),a("span",{class:"hljs-attr"},"price"),s(": "),a("span",{class:"hljs-string"},"'4599.00'"),s(`,
          `),a("span",{class:"hljs-attr"},"imagePath"),s(": "),a("span",{class:"hljs-string"},"'//img14.360buyimg.com/n4/jfs/t1/215845/12/3788/221990/618a5c4dEc71cb4c7/7bd6eb8d17830991.jpg'"),s(`
        };
      };
      `),a("span",{class:"hljs-comment"},"// 底部操作按钮触发"),s(`
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clickBtnOperate"),s(" = ("),a("span",{class:"hljs-params"},"op: string"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'点击了操作按钮'"),s(`, op);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(" { customStepper, overLimit, changeStepper, selectSku, clickBtnOperate, stepperExtraText, ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(data) };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),y=a("h3",null,"Custom Slots",-1),A=a("p",null,"The default partition is divided into several areas, which are defined as slots that can be replaced as required",-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Custom Slots"'),s(),a("span",{class:"hljs-attr"},"desc"),s("="),a("span",{class:"hljs-string"},'""'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"customBySlot = true"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-sku"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"customBySlot"'),s(`
    `),a("span",{class:"hljs-attr"},":sku"),s("="),a("span",{class:"hljs-string"},'"sku"'),s(`
    `),a("span",{class:"hljs-attr"},":goods"),s("="),a("span",{class:"hljs-string"},'"goods"'),s(`
    `),a("span",{class:"hljs-attr"},":btnOptions"),s("="),a("span",{class:"hljs-string"},`"['buy', 'cart']"`),s(`
    @`),a("span",{class:"hljs-attr"},"selectSku"),s("="),a("span",{class:"hljs-string"},'"selectSku"'),s(`
    @`),a("span",{class:"hljs-attr"},"clickBtnOperate"),s("="),a("span",{class:"hljs-string"},'"clickBtnOperate"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-comment"},"<!-- 商品展示区，价格区域 -->"),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"sku-header-price"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-price"),s(),a("span",{class:"hljs-attr"},":price"),s("="),a("span",{class:"hljs-string"},'"goods.price"'),s(),a("span",{class:"hljs-attr"},":needSymbol"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},":thousands"),s("="),a("span",{class:"hljs-string"},'"false"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-price"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"tag"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-comment"},"<!-- 商品展示区，编号区域 -->"),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"sku-header-extra"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-sku-header-right-extra"'),s(">")]),s("重量：0.1kg 编号：{{skuId}} "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-comment"},"<!-- sku 展示区上方与商品信息展示区下方区域，无默认展示内容 -->"),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"sku-select-top"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"address"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(`
          `),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"box-shadow:none;padding:13px 0"'),s(`
          `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"送至"'),s(`
          `),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},'"addressDesc"'),s(`
          @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showAddressPopup=true"'),s(`
        >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-comment"},"<!-- 底部按钮操作区 -->"),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"sku-operate"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"sku-operate-box"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"sku-operate-item"'),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"square"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(">")]),s("加入购物车"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"sku-operate-item"'),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"square"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("立即购买"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-sku"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-address"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"showAddressPopup"'),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"exist"'),s(`
    `),a("span",{class:"hljs-attr"},":exist-address"),s("="),a("span",{class:"hljs-string"},'"existAddress"'),s(`
    `),a("span",{class:"hljs-attr"},":is-show-custom-address"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
    @`),a("span",{class:"hljs-attr"},"selected"),s("="),a("span",{class:"hljs-string"},'"selectedAddress"'),s(`
    `),a("span",{class:"hljs-attr"},"exist-address-title"),s("="),a("span",{class:"hljs-string"},'"配送至"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-address"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive, onMounted, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" customBySlot = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" showAddressPopup = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" data = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"sku"),s(`: [],
        `),a("span",{class:"hljs-attr"},"goods"),s(`: {}
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(" addressDesc = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'(配送地会影响库存，请先确认)'"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" existAddress = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
        {
          `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(`,
          `),a("span",{class:"hljs-attr"},"addressDetail"),s(": "),a("span",{class:"hljs-string"},"'th '"),s(`,
          `),a("span",{class:"hljs-attr"},"cityName"),s(": "),a("span",{class:"hljs-string"},"'石景山区'"),s(`,
          `),a("span",{class:"hljs-attr"},"countyName"),s(": "),a("span",{class:"hljs-string"},"'城区'"),s(`,
          `),a("span",{class:"hljs-attr"},"provinceName"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(`,
          `),a("span",{class:"hljs-attr"},"selectedAddress"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
          `),a("span",{class:"hljs-attr"},"townName"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
          `),a("span",{class:"hljs-attr"},"addressDetail"),s(": "),a("span",{class:"hljs-string"},"'12 '"),s(`,
          `),a("span",{class:"hljs-attr"},"cityName"),s(": "),a("span",{class:"hljs-string"},"'电饭锅'"),s(`,
          `),a("span",{class:"hljs-attr"},"countyName"),s(": "),a("span",{class:"hljs-string"},"'扶绥县'"),s(`,
          `),a("span",{class:"hljs-attr"},"provinceName"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(`,
          `),a("span",{class:"hljs-attr"},"selectedAddress"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
          `),a("span",{class:"hljs-attr"},"townName"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(`,
          `),a("span",{class:"hljs-attr"},"addressDetail"),s(": "),a("span",{class:"hljs-string"},"'发大水比 '"),s(`,
          `),a("span",{class:"hljs-attr"},"cityName"),s(": "),a("span",{class:"hljs-string"},"'放到'"),s(`,
          `),a("span",{class:"hljs-attr"},"countyName"),s(": "),a("span",{class:"hljs-string"},"'广宁街道'"),s(`,
          `),a("span",{class:"hljs-attr"},"provinceName"),s(": "),a("span",{class:"hljs-string"},"'钓鱼岛全区'"),s(`,
          `),a("span",{class:"hljs-attr"},"selectedAddress"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
          `),a("span",{class:"hljs-attr"},"townName"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(`,
          `),a("span",{class:"hljs-attr"},"addressDetail"),s(": "),a("span",{class:"hljs-string"},"'还是想吧百度吧 '"),s(`,
          `),a("span",{class:"hljs-attr"},"cityName"),s(": "),a("span",{class:"hljs-string"},"'研发'"),s(`,
          `),a("span",{class:"hljs-attr"},"countyName"),s(": "),a("span",{class:"hljs-string"},"'八里庄街道'"),s(`,
          `),a("span",{class:"hljs-attr"},"provinceName"),s(": "),a("span",{class:"hljs-string"},"'北京'"),s(`,
          `),a("span",{class:"hljs-attr"},"selectedAddress"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
          `),a("span",{class:"hljs-attr"},"townName"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
        }
      ]);

      `),a("span",{class:"hljs-title function_"},"onMounted"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        `),a("span",{class:"hljs-title function_"},"fetch"),s("("),a("span",{class:"hljs-string"},"'https://storage.360buyimg.com/cubui/3x/data.js'"),s(`)
          .`),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"response"),s(") =>")]),s(" response."),a("span",{class:"hljs-title function_"},"json"),s(`())
          .`),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"res"),s(") =>")]),s(` {
            `),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-title class_"},"Sku"),s(", "),a("span",{class:"hljs-title class_"},"Goods"),s(`, imagePathMap } = res;
            data.`),a("span",{class:"hljs-property"},"sku"),s(" = "),a("span",{class:"hljs-title class_"},"Sku"),s(`;
            data.`),a("span",{class:"hljs-property"},"goods"),s(" = "),a("span",{class:"hljs-title class_"},"Goods"),s(`;
          }) `),a("span",{class:"hljs-comment"},"//执行结果是 resolve就调用then方法"),s(`
          .`),a("span",{class:"hljs-title function_"},"catch"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"err"),s(") =>")]),s(),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Oh, error'"),s(", err)); "),a("span",{class:"hljs-comment"},"//执行结果是 reject就调用catch方法"),s(`
      });

      `),a("span",{class:"hljs-comment"},"// 切换规格类目"),s(`
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"selectSku"),s(" = ("),a("span",{class:"hljs-params"},"ss: string"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"const"),s(` { sku, skuIndex, parentSku, parentIndex } = ss;
        `),a("span",{class:"hljs-keyword"},"if"),s(" (sku."),a("span",{class:"hljs-property"},"disable"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"false"),s(`;
        data.`),a("span",{class:"hljs-property"},"sku"),s("[parentIndex]."),a("span",{class:"hljs-property"},"list"),s("."),a("span",{class:"hljs-title function_"},"forEach"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"s"),s(") =>")]),s(` {
          s.`),a("span",{class:"hljs-property"},"active"),s(" = s."),a("span",{class:"hljs-property"},"id"),s(" == sku."),a("span",{class:"hljs-property"},"id"),s(`;
        });
        data.`),a("span",{class:"hljs-property"},"goods"),s(` = {
          `),a("span",{class:"hljs-attr"},"skuId"),s(": sku."),a("span",{class:"hljs-property"},"id"),s(`,
          `),a("span",{class:"hljs-attr"},"price"),s(": "),a("span",{class:"hljs-string"},"'6002.10'"),s(`,
          `),a("span",{class:"hljs-attr"},"imagePath"),s(": "),a("span",{class:"hljs-string"},"'//img14.360buyimg.com/n4/jfs/t1/215845/12/3788/221990/618a5c4dEc71cb4c7/7bd6eb8d17830991.jpg'"),s(`
        };
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"selectedAddress"),s(" = ("),a("span",{class:"hljs-params"},"prevExistAdd: any, nowExistAdd: any"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"const"),s(` { provinceName, countyName, cityName } = nowExistAdd;
        addressDesc.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${provinceName}"),a("span",{class:"hljs-subst"},"${countyName}"),a("span",{class:"hljs-subst"},"${cityName}"),s("`")]),s(`;
      };
      `),a("span",{class:"hljs-comment"},"// 底部操作按钮触发"),s(`
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clickBtnOperate"),s(" = ("),a("span",{class:"hljs-params"},"op: string"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'点击了操作按钮'"),s(`, op);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(" { customBySlot, selectSku, clickBtnOperate, existAddress, addressDesc, selectedAddress, ..."),a("span",{class:"hljs-title function_"},"toRefs"),s(`(data) };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".sku-operate-box"),s(` {
    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
    `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
    `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"8px"),s(),a("span",{class:"hljs-number"},"10px"),s(`;
    `),a("span",{class:"hljs-attribute"},"box-sizing"),s(`: border-box;
  }
  `),a("span",{class:"hljs-selector-class"},".sku-operate-item"),s(` {
    `),a("span",{class:"hljs-attribute"},"flex"),s(": "),a("span",{class:"hljs-number"},"1"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".sku-operate-item"),a("span",{class:"hljs-selector-pseudo"},":first"),s(`-child {
    `),a("span",{class:"hljs-attribute"},"border-top-left-radius"),s(": "),a("span",{class:"hljs-number"},"20px"),s(`;
    `),a("span",{class:"hljs-attribute"},"border-bottom-left-radius"),s(": "),a("span",{class:"hljs-number"},"20px"),s(`;
  }
  `),a("span",{class:"hljs-selector-class"},".sku-operate-item"),a("span",{class:"hljs-selector-pseudo"},":last-child"),s(` {
    `),a("span",{class:"hljs-attribute"},"border-top-right-radius"),s(": "),a("span",{class:"hljs-number"},"20px"),s(`;
    `),a("span",{class:"hljs-attribute"},"border-bottom-right-radius"),s(": "),a("span",{class:"hljs-number"},"20px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),w=c(`<h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model:visible</td><td>Whether to open popup</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>sku</td><td>Sku data</td><td>Array</td><td><code class="">[]</code></td></tr><tr><td>goods</td><td>Product Info</td><td>object</td><td>-</td></tr><tr><td>stepper-max</td><td>Stepper max</td><td>string | number</td><td><code class="">99999</code></td></tr><tr><td>stepper-min</td><td>Stepper min</td><td>string | number</td><td><code class="">1</code></td></tr><tr><td>btn-options</td><td>Bottom button</td><td>Array</td><td><code class="">[confirm]</code></td></tr><tr><td>btn-extra-text</td><td>Add text above button</td><td>string</td><td>-</td></tr><tr><td>stepper-title</td><td>Stepper left text</td><td>string</td><td><code class="">Buy Num</code></td></tr><tr><td>stepper-extra-text</td><td>The text between the stepper and the headline</td><td>Function | boolean</td><td><code class="">false</code></td></tr><tr><td>buy-text</td><td>Buy button text</td><td>string</td><td><code class="">Buy It Now</code></td></tr><tr><td>add-cart-text</td><td>Add cart button text</td><td>string</td><td><code class="">Add To cart</code></td></tr><tr><td>confirm-text</td><td>Confirm button text</td><td>string</td><td><code class="">Confirm</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>select-sku</td><td>Emitted when select sku</td><td>{sku,skuIndex,parentSku,parentIndex}</td></tr><tr><td>add</td><td>Emitted when click stepper add button</td><td>value</td></tr><tr><td>reduce</td><td>Emitted when click stepper reduce button</td><td>value</td></tr><tr><td>overLimit</td><td>Emitted when click stepper disabled button</td><td>value</td></tr><tr><td>change-stepper</td><td>Emitted when click stepper change</td><td>value</td></tr><tr><td>click-btn-operate</td><td>Emitted when click bottom button</td><td>{type:&#39;confirm&#39;,value:&#39;inputNumber value&#39;}</td></tr><tr><td>click-close-icon</td><td>Emitted when click close button</td><td>-</td></tr><tr><td>click-overlay</td><td>Emitted when click mask</td><td>-</td></tr><tr><td>close</td><td>Emitted when popup close</td><td>-</td></tr></tbody></table><h3>Slots</h3><p>The default partition is divided into several areas, which are defined as slots that can be replaced as required。</p><table><thead><tr><th>Event</th><th>Description</th></tr></thead><tbody><tr><td>sku-header</td><td>Custom header</td></tr><tr><td>sku-header-price</td><td>Custom header price area</td></tr><tr><td>sku-header-extra</td><td>Extra header area</td></tr><tr><td>sku-select-top</td><td>Custom select top</td></tr><tr><td>sku-select</td><td>Custom sku</td></tr><tr><td>sku-stepper</td><td>Custom stepper</td></tr><tr><td>sku-stepper-bottom</td><td>Custom stepper bottom</td></tr><tr><td>sku-operate</td><td>Custom stepper bottom operation</td></tr></tbody></table><h3>goods Data Structure</h3><pre><code class="language-javascript"><span class="hljs-attr">goods</span>:{
    <span class="hljs-attr">skuId</span>:<span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// Product ID</span>
    <span class="hljs-attr">price</span>: <span class="hljs-string">&quot;0&quot;</span>, <span class="hljs-comment">// Product Price</span>
    <span class="hljs-attr">imagePath</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-comment">// Product Image</span>
}

</code></pre><h3>sku Data Structure</h3><p>Each array index represents a specification category。Where,<code class="">list</code> represents the category value under the specification category。Each category value object includes：<code class="">name</code>、<code class="">id</code>、<code class="">active</code>、<code class="">disable</code></p><pre><code class="language-javascript"><span class="hljs-attr">sku</span>: [
  {
    <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;颜色&#39;</span>,
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;亮黑色&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">100016015112</span>,
        <span class="hljs-attr">active</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">disable</span>: <span class="hljs-literal">false</span>
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;釉白色&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">100016015142</span>,
        <span class="hljs-attr">active</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">disable</span>: <span class="hljs-literal">false</span>
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;秘银色&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">100016015078</span>,
        <span class="hljs-attr">active</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">disable</span>: <span class="hljs-literal">false</span>
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;夏日胡杨&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">100009064831</span>,
        <span class="hljs-attr">active</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">disable</span>: <span class="hljs-literal">false</span>
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;秋日胡杨&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">100009064830</span>,
        <span class="hljs-attr">active</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">disable</span>: <span class="hljs-literal">false</span>
      }
    ]
  },
  {
    <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;版本&#39;</span>,
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;8GB+128GB&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">100016015102</span>,
        <span class="hljs-attr">active</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">disable</span>: <span class="hljs-literal">false</span>
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;8GB+256GB&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">100016015122</span>,
        <span class="hljs-attr">active</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">disable</span>: <span class="hljs-literal">false</span>
      }
    ]
  },
  {
    <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;版本&#39;</span>,
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;4G（有充版）&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">100016015103</span>,
        <span class="hljs-attr">active</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">disable</span>: <span class="hljs-literal">false</span>
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;5G（有充版）&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">100016015123</span>,
        <span class="hljs-attr">active</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">disable</span>: <span class="hljs-literal">false</span>
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;5G（无充版）&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">100016015104</span>,
        <span class="hljs-attr">active</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">disable</span>: <span class="hljs-literal">true</span>
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;5G（无充）质保换新版&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">100016015125</span>,
        <span class="hljs-attr">active</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">disable</span>: <span class="hljs-literal">false</span>
      }
    ]
  }
];
</code></pre><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-sku-item-border</td><td><em>1px solid var(--cub-primary-color)</em></td></tr><tr><td>--cub-sku-item-disable-line</td><td><em>line-through</em></td></tr><tr><td>--cub-sku-opetate-bg-default</td><td><em>linear-gradient(90deg, var(--cub-primary-color), var(--cub-primary-color-end) 100%)</em></td></tr><tr><td>--cub-sku-item-active-bg</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-sku-opetate-bg-buy</td><td><em>linear-gradient(135deg,rgba(255, 186, 13, 1) 0%,rgba(255, 195, 13, 1) 69%,rgba(255, 207, 13, 1) 100%)</em></td></tr><tr><td>--cub-sku-spec-height</td><td><em>30px</em></td></tr><tr><td>--cub-sku-spec-line-height</td><td><em>var(--cub-sku-spec-height)</em></td></tr><tr><td>--cub-sku-spec-font-size</td><td><em>11px</em></td></tr><tr><td>--cub-sku-spec-background</td><td><em>rgba(242, 242, 242, 1)</em></td></tr><tr><td>--cub-sku-spec-color</td><td><em>var(--cub-black)</em></td></tr><tr><td>--cub-sku-spec-margin-right</td><td><em>12px</em></td></tr><tr><td>--cub-sku-spec-padding</td><td><em>0 18px</em></td></tr><tr><td>--cub-sku-spec-title-font-weight</td><td><em>bold</em></td></tr><tr><td>--cub-sku-spec-title-font-size</td><td><em>13px</em></td></tr><tr><td>--cub-sku-spec-title-color</td><td><em>var(--cub-black)</em></td></tr><tr><td>--cub-sku-spec-title-margin-bottom</td><td><em>18px</em></td></tr><tr><td>--cub-sku-operate-btn-height</td><td><em>54px</em></td></tr><tr><td>--cub-sku-operate-btn-border-top</td><td><em>0</em></td></tr><tr><td>--cub-sku-operate-btn-item-height</td><td><em>40px</em></td></tr><tr><td>--cub-sku-operate-btn-item-line-height</td><td><em>var(--cub-sku-operate-btn-item-height)</em></td></tr><tr><td>--cub-sku-operate-btn-item-font-size</td><td><em>15px</em></td></tr><tr><td>--cub-sku-operate-btn-item-font-weight</td><td><em>normal</em></td></tr><tr><td>--cub-sku-product-img-width</td><td><em>100px</em></td></tr><tr><td>--cub-sku-product-img-height</td><td><em>var(--cub-sku-product-img-width)</em></td></tr><tr><td>--cub-sku-product-img-border-radius</td><td><em>0</em></td></tr></tbody></table>`,17),S={},z="",Z=p({__name:"doc.en-US",setup(v,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(x,I)=>{const l=r("demo-block");return j(),h("div",i,[d,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6dGl0bGU9IkJhc2ljIFVzYWdlIiBkZXNjPSIiIEBjbGljaz0iYmFzZSA9IHRydWUiPjwvyD3JSnNrdQogICAgdi1tb2RlbDp2aXNpYsRWxDkixRs6c2t1PSJza3XHD2dvb2RzPSLFB8YTQHNlbGVjdFPFKMgLxxvlAIhCdG5PcGVyYXRlPSLPEcknb3PFHW/Gd+cArHNrdT4KPC/qAQE8c2NyaXB0IGxhbmc9InRzIuQAymltcG9ydCB7IHJlZiwgcmVhY3RpdmUsIG9uTW91bnRlZCwgdG9SZWZzIH0gZnJvbSAndnVlJzsKICBleMU6ZGVmYXVsdCB75QCNc2V0dXAoKccOICBjb25zdCDnAUpyZWYoZmFsc2UpxEDKH2RhdGHFH8Z9KMg9ICBza3U6IFtdLMkR5QE6OiB7fccSfSk7CscL6QCyKCgpID0+6QCDICBmZXRjaCgnaHR0cHM6Ly9zdG9yYWdlLjM2MGJ1eWltZy5jb23kATN1aS8zeC/kAI4uanMnKclAICAudGhlbigocmVzcG9uc2XFYMgNLmpzb24oKdYv7wCK6gD0eyBTa3UsIEfkANAsIGltYWdlUGF0aE1hcCB95QEMc+gBJMYB5QCWc2t1ID3EOdMc5QEaID3GUswgfSkgLy/miafooYznu5PmnpzmmK/EYG9sdmXlsLHosIPnlKjkALHmlrnms5XLOi5jYeQBOShlcnLlAMjkALpvbGUubG9nKCdPaCwgZXJyb3InxQgpKTvVZ2plY3TJZsVQzWfkAcDGCi8vIOWIh+aNouinhOagvOexu+ebru0CJ+kDHyA9IChzczogc3RyaW5n7wFjxix75AI7LMQFSW5kZXgsIHBhcmVuxD3IC8UY5QFsc+sBL2lmIChza3UuZGlzYWJsZSkgcmV0dXJuIOUCt8on6AGOW8tMXS5saXN0LmZvckVh5AE28gH8cy7mAuHEdC5pZCA9PeQAoS5pZMpZ6gEQ7wHXzUhrdUlkOsc86gMcICBwcmljZTogJzQ1OTkuMDAnzBzpAmM6ICcvL2ltZzE07wMCbjQvamZzL3QxLzIxNTg0NS8xMi8zNzg4LzIyMTk5MC82MThhNWM0ZEVjNzFjYjRjNy83YmQ2ZWI4ZDE3ODMwOTkxLmpwZyfJdH3oAMvJCeQB5LqV6YOo5pON5L2c5oyJ6ZKu6Kem5Y+R7QHq7wTo5AHwb3D7AfDpApXngrnlh7vkuobMYScsIG9w6QFY7QCNhbPpl63llYblk4HmAnflvLnmoYbvAI1v5QS+5wRWyUDnAhp75QTeLOoCnizwAL/EEW/EIy4uLuYFTCjkAdsp6ACL5ATMfTsKPC/mBaA+Cg=="},{default:t(()=>[o]),_:1}),u,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0iTm90IFNlbGwiIGRlc2M9IiIgQGNsaWNrPSJub3TEGSA9IHRydWUiPjwvyDzJSXNrdQogICAgdi1tb2RlbDp2aXNpYsRWxzwixR46c2t1PSJza3XHD2dvb2RzPSLFB8cTYnRuRXh0cmFUZXh0PSLMDsYhQGNoYW5nZVN0ZXBwZXI9Is0PxyNzZWxlY3RTxWzIC8pfT3B0aW9ucz0iWydidXknLCAnY2FydCddxCLkANAgIOkBKCAjc2t1LW9wZXLnATXFHmRpdiBjbGFzc+UAy8gfLWJveCLIJOcBFmJ1dHRvbtctLWRpcyIgdHlwZT0id2FybmluZyI+5p+l55yL55u45Ly85ZWG5ZOB5gFtxkrfX9lfaW5mbyI+5Yiw6LSn6YCa55+l1FY8L2RpdsYNPC/tAivFLXNrdT4KzBk8c2NyaXB0IGxhbmc9InRz5QD+aW1wb3J0IHsgcmVmLCByZWFjdGl2ZSwgb25Nb3VudGVkLCB0b1JlZnMgfSBmcm9tICd2dWUnOwogIGV4xTpkZWZhdWx0IHvlAIlzZXR1cCgpxw4gIGNvbnN0IOoCkXJlZihmYWxzZSnEQ8oiZGF0YcUf5gCAKMhAICBza3U6IFtdLMkR5QJ+OiB7fccSfSk7Cs1M7AKFx3Mn5oqx5q2J77yM5q2k5gGo5Zyo5omA6YCJ5Yy65Z+f5pqC5peg5a2Y6LSnJ8pS6QEHKCgpID0+6QDYICBmZXRjaCgnaHR0cHM6Ly9zdG9yYWdlLjM2MGJ1eWltZy5jb23kAYh1aS8zeC/kAOAuanMnKclAICAudGhlbigocmVzcG9uc2XFYMgNLmpzb24oKdYv7wCK6gD6eyBTa3UsIEfkASIsIGltYWdlUGF0aE1hcCB95QEKc+gBdsYB5QCWc2t1ID3EOdMc5QFsID3GUswgfSkgLy/miafooYznu5PmnpzmmK/EYG9sdmXlsLHosIPnlKjkALHmlrnms5XLOi5jYeQBOShlcnLlAMjkALpvbGUubG9nKCdPaCwgZXJyb3InxQgpKTvVZ2plY3TJZsVQzWfrAhIvLyBpbnB1dE51bWJlciDmm7TmlLntAi7tBJEgPSAoY+QB8TogbsUy7wFr7QCt6LSt5Lmw5pWw6YePJywgxTjpAtd97ACD5YiH5o2i6KeE5qC857G755uu7QCD6QT1xH9zczogc3RyaW5n03zkAeNz5AHjc2t1SW5kZXgsIHBhcmVuxD3IC8UY5QHwc+sBs2lmIChza3UuZGlzYWJsZSkgcmV0dXJuIOUDjcon6AISW8tMXS5saXN0LmZvckVh5AG68gKAcy7mA7fEdC5pZCA9PeQAoS5pZMpZ5AGUzWXoAlvNSGt1SWQ6xzzqA/IgIHByaWNlOiAnNDU5OS4wMCfMHOkC5zogJy8vaW1nMTTvA4ZuNC9qZnMvdDEvMjE2MDc5LzE0LzM4OTUvMjAxMDk1LzYxOGE1YzBjRWUwYjllMmJhL2NmNWI5OGZiNjEyOGEwOWUuanBnJ8l0fesB5cYJ5AHkupXpg6jmk43kvZzmjInpkq7op6blj5HuAm3kB6FC5AbU5QX45AHwb3D7AfDpAmzngrnlh7vkuobMYScsIG9w7AJyxgnnAdp76AV3LO4C5CzqAnAs7QUsLCAuLi7mBe0o5AGjKchT5AVqfTsKPC/mBkHkBkp0eWzlBmvkAizsBsbnAMB3aWTkAZAxMDAlxkNkaXNwbGF5OiBmbGV4xhNwYWRkaW5nOiA4cHggMTBwxxfkBwtzaXrFGmJvcmRlcsRYxBzkAIfQcOQHNsd0xFo6IDHcKjpmaXJzdC1jaGlsZMc2bWFyZ2luLXJpZ2h0OiAxOOYAh33kAO3mAOQ="},{default:t(()=>[m]),_:1}),g,b,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0iQ3VzdG9tIFN0ZXBwZXIiIGRlc2M9IiIgQGNsaWNrPSJjxSDHHyA9IHRydWUiPjwvyEjJVXNrdQogICAgdi1tb2RlbDp2aXNpYsRizUIixSQ6c2t1PSJza3XHD2dvb2RzPSLFB8gixjBNYXg9IjfPFGluPSIyzhRFeHRyYVRleHQ9ItASxilAY2hhbmdl5wCHPSLND8cjb3ZlckxpbWl0PSLJC8dnYnRuT3B0aW9ucz0iWydidXknLCAnY2FydCddxz1zZWxlY3RT5QDZyAvIe+QBS0LEQmVyYXTkARPOEcQn5wFTc2t1Pgo8L+oBszxzY3JpcHQgbGFuZz0idHMi5AFxaW1wb3J0IHsgcmVmLCByZWFjdGl2ZSwgb25Nb3VudGVkLCB0b1JlZnMgfSBmcm9tICd2dWUnO8w6c2hvd1RvYXN0ySNAY3VidWnkAIZ1acwszRkvZGlzdC9wYWNrYWdlcy90xEIvc3R5bMZfZXjFM2RlZmF1bHQge+UBAHNldHVwKCnHDiAgY29uc3Qg8AJZcmVmKGZhbHNlKcRJyihkYXRhxR/mAOUoyEYgIHNrdTogW10syRHlAkA6IHt9xxJ9KTsKxwvpARooKCkgPT7pAIwgIGZldGNoKCdodHRwczovL3N0b3JhZ2UuMzYwYnV5aW1nLmNvbecA/DN4L+QAji5qcycpyUAgIC50aGVuKChyZXNwb25zZcVgyA0uanNvbigp1i/vAIrqAPR7IFNrdSwgR+QA0CwgaW1hZ2VQYXRoTWFwIH3lAQxz6AEkxgHlAJZza3UgPcQ50xzlARogPcZSzCB9KSAvL+aJp+ihjOe7k+aenOaYr8Rgb2x2ZeWwseiwg+eUqOQAseaWueazlcs6LmNh5AE5KGVycuUAyOQAum9sZS5sb2coJ09oLCBlcnJvcifFCCkpO9VnamVjdMlmxVDNZ+sBwMRedCDwA9sgPSDwAc9yZXR1cm4gYDxkaXYg5QKZPSJ3aWR0aDoxMDAlO3RleHQtYWxpZ246cmlnaHQ7Y29sb3I6I0YwMCI+MiDku7botbfllK48L2Rpdj5g6AErfcgJLy8gaW5wdXROdW1iZXIg5pu05pS57gLY7ARZ5AChY+QCeTogbsUy7wCu7QE16LSt5Lmw5pWw6YePJywgxTjpAw196QEL8ACDnoHpmZDlgLztAIbpBMDkAIJ2YWw6IGFuec99aWbFGy7kA1lvbiA9PSAncmVkdWNlJ+oDrMQB6QQrLuQBPihg6Iez5bCR5LmwJHvEP3ZhbHVlfeS7tuWTpmDpALAgIH0gZWxzZd1K5pyA5aSa30ogIOkD0MgTLy8g5YiH5o2i6KeE5qC857G755uu7gIq6AWD5AEAc3M6IHN0cmluZ/MBf+UFDeQDbnNrdUluZGV4LCBwYXJlbsQ9yAvFGOUDe3PrAz7kAUBza3UuZGlzYWJsZSnoAnzlBMbKJ+gDnVvLTF0ubGlzdC5mb3JFYeQDRfIEC3PlAZd2ZcR0Lmlk5AGexGxpZMpZ5AMfzWXoA+bNSGt1SWQ6xzzqBSsgIHByaWNlOiAnNDU5OS4wMCfMHOkEcjogJy8vaW1nMTTvBRFuNC9qZnMvdDEvMjE1ODQ1LzEyLzM3ODgvMjIxOTkwLzYxOGE1YzRkRWM3MWNiNGM3LzdiZDZlYjhkMTc4MzA5OTEuanBnJ8l06QHbyQnkAeS6lemDqOaTjeS9nOaMiemSruinpuWPke4DcO4HTOQB8G9w+wHw6QNv54K55Ye75LqGzGEnLCBvcOwDdcYJ5wHae+4GtizqA2cs7gP4LOoCgSzwAKIs8QTHLCAuLi7mB7Eo5AHJKch55AL5fTsKPC/mCAU+Cg=="},{default:t(()=>[k]),_:1}),y,A,n(l,{"data-type":"vue","data-value":"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"},{default:t(()=>[f]),_:1}),w])}}});export{Z as default,z as excerpt,S as frontmatter};
