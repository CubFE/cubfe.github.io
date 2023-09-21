import{d as e,r,b as h,k as n,w as t,aq as c,e as a,o as j,l as s}from"./style_icon.js";const d={class:"markdown-body"},o=c(`<h1>Sku 商品规格选择</h1><h3>介绍</h3><p>常用于进行商品选择</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Sku</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Sku</span>);
</code></pre><h3>基础用法</h3>`,6),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},":title"),s("="),a("span",{class:"hljs-string"},'"`基础用法`"'),s(),a("span",{class:"hljs-attr"},"desc"),s("="),a("span",{class:"hljs-string"},'""'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"base = true"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
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
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-title class_"},"Taro"),s(),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@tarojs/taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" base = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" data = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"sku"),s(`: [],
        `),a("span",{class:"hljs-attr"},"goods"),s(`: {}
      });

      `),a("span",{class:"hljs-title function_"},"onMounted"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        `),a("span",{class:"hljs-title class_"},"Taro"),s("."),a("span",{class:"hljs-title function_"},"request"),s(`({
          `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://storage.360buyimg.com/cubui/3x/data.js'"),s(", "),a("span",{class:"hljs-comment"},"//仅为示例，并非真实的接口地址"),s(`
          `),a("span",{class:"hljs-attr"},"success"),s(": "),a("span",{class:"hljs-keyword"},"function"),s(" ("),a("span",{class:"hljs-params"},"res"),s(`) {
            `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("(res."),a("span",{class:"hljs-property"},"data"),s(`);
            `),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-title class_"},"Sku"),s(", "),a("span",{class:"hljs-title class_"},"Goods"),s(", imagePathMap } = res."),a("span",{class:"hljs-property"},"data"),s(`;
            data.`),a("span",{class:"hljs-property"},"sku"),s(" = "),a("span",{class:"hljs-title class_"},"Sku"),s(`;
            data.`),a("span",{class:"hljs-property"},"goods"),s(" = "),a("span",{class:"hljs-title class_"},"Goods"),s(`;
          }
        });
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
`)])],-1),u=a("h3",null,"不可售",-1),g=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"不可售"'),s(),a("span",{class:"hljs-attr"},"desc"),s("="),a("span",{class:"hljs-string"},'""'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"notSell = true"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
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
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"sku-operate-box"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"sku-operate-box-dis"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(">")]),s("查看相似商品"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"sku-operate-box-dis"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(">")]),s("到货通知"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-sku"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive, onMounted, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-title class_"},"Taro"),s(),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@tarojs/taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" notSell = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" data = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"sku"),s(`: [],
        `),a("span",{class:"hljs-attr"},"goods"),s(`: {}
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(" btnExtraText = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'抱歉，此商品在所选区域暂无存货'"),s(`);

      `),a("span",{class:"hljs-title function_"},"onMounted"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        `),a("span",{class:"hljs-title class_"},"Taro"),s("."),a("span",{class:"hljs-title function_"},"request"),s(`({
          `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://storage.360buyimg.com/cubui/3x/data.js'"),s(", "),a("span",{class:"hljs-comment"},"//仅为示例，并非真实的接口地址"),s(`
          `),a("span",{class:"hljs-attr"},"success"),s(": "),a("span",{class:"hljs-keyword"},"function"),s(" ("),a("span",{class:"hljs-params"},"res"),s(`) {
            `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("(res."),a("span",{class:"hljs-property"},"data"),s(`);
            `),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-title class_"},"Sku"),s(", "),a("span",{class:"hljs-title class_"},"Goods"),s(", imagePathMap } = res."),a("span",{class:"hljs-property"},"data"),s(`;
            data.`),a("span",{class:"hljs-property"},"sku"),s(" = "),a("span",{class:"hljs-title class_"},"Sku"),s(`;
            data.`),a("span",{class:"hljs-property"},"goods"),s(" = "),a("span",{class:"hljs-title class_"},"Goods"),s(`;
          }
        });
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
`)])],-1),m=a("h3",null,"自定义步进器",-1),b=a("p",null,"可以按照需求配置数字输入框的最大值、最小值、文案等",-1),k=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"自定义计步器"'),s(),a("span",{class:"hljs-attr"},"desc"),s("="),a("span",{class:"hljs-string"},'""'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"customStepper = true"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
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
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-title class_"},"Taro"),s(),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@tarojs/taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" customStepper = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" data = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"sku"),s(`: [],
        `),a("span",{class:"hljs-attr"},"goods"),s(`: {}
      });

      `),a("span",{class:"hljs-title function_"},"onMounted"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        `),a("span",{class:"hljs-title class_"},"Taro"),s("."),a("span",{class:"hljs-title function_"},"request"),s(`({
          `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://storage.360buyimg.com/cubui/3x/data.js'"),s(", "),a("span",{class:"hljs-comment"},"//仅为示例，并非真实的接口地址"),s(`
          `),a("span",{class:"hljs-attr"},"success"),s(": "),a("span",{class:"hljs-keyword"},"function"),s(" ("),a("span",{class:"hljs-params"},"res"),s(`) {
            `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("(res."),a("span",{class:"hljs-property"},"data"),s(`);
            `),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-title class_"},"Sku"),s(", "),a("span",{class:"hljs-title class_"},"Goods"),s(", imagePathMap } = res."),a("span",{class:"hljs-property"},"data"),s(`;
            data.`),a("span",{class:"hljs-property"},"sku"),s(" = "),a("span",{class:"hljs-title class_"},"Sku"),s(`;
            data.`),a("span",{class:"hljs-property"},"goods"),s(" = "),a("span",{class:"hljs-title class_"},"Goods"),s(`;
          }
        });
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"stepperExtraText"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},'`<view style="width:100%;text-align:right;color:#F00">2 件起售</view>`'),s(`;
      };
      `),a("span",{class:"hljs-comment"},"// inputNumber 更改"),s(`
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"changeStepper"),s(" = ("),a("span",{class:"hljs-params"},"count: number"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'购买数量'"),s(`, count);
      };

      `),a("span",{class:"hljs-comment"},"// inputNumber 极限值"),s(`
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"overLimit"),s(" = ("),a("span",{class:"hljs-params"},"val: any"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"if"),s(" (val."),a("span",{class:"hljs-property"},"action"),s(" == "),a("span",{class:"hljs-string"},"'reduce'"),s(`) {
          `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},[s("`至少买"),a("span",{class:"hljs-subst"},"${val.value}"),s("件哦`")]),s(`);
        } `),a("span",{class:"hljs-keyword"},"else"),s(` {
          `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},[s("`最多买"),a("span",{class:"hljs-subst"},"${val.value}"),s("件哦`")]),s(`);
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
`)])],-1),y=a("h3",null,"自定义插槽",-1),A=a("p",null,"Sku 组件默认划分为若干区域，这些区域都定义成了插槽，可以按照需求进行替换。",-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"通过插槽自定义设置"'),s(),a("span",{class:"hljs-attr"},"desc"),s("="),a("span",{class:"hljs-string"},'""'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"customBySlot = true"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
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
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-price"),s(),a("span",{class:"hljs-attr"},":price"),s("="),a("span",{class:"hljs-string"},'"goods.price"'),s(),a("span",{class:"hljs-attr"},":needSymbol"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},":thousands"),s("="),a("span",{class:"hljs-string"},'"false"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-price"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"tag"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-comment"},"<!-- 商品展示区，编号区域 -->"),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"sku-header-extra"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-sku-header-right-extra"'),s(">")]),s("重量：0.1kg 编号：{{skuId}} "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-comment"},"<!-- sku 展示区上方与商品信息展示区下方区域，无默认展示内容 -->"),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"sku-select-top"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"address"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(`
          `),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"box-shadow:none;padding:13px 0"'),s(`
          `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"送至"'),s(`
          `),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},'"addressDesc"'),s(`
          @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"showAddressPopup=true"'),s(`
        >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-comment"},"<!-- 底部按钮操作区 -->"),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"sku-operate"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"sku-operate-box"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"sku-operate-item"'),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"square"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(">")]),s("加入购物车"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"sku-operate-item"'),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"square"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("立即购买"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
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
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-title class_"},"Taro"),s(),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@tarojs/taro'"),s(`;
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
        `),a("span",{class:"hljs-title class_"},"Taro"),s("."),a("span",{class:"hljs-title function_"},"request"),s(`({
          `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://storage.360buyimg.com/cubui/3x/data.js'"),s(", "),a("span",{class:"hljs-comment"},"//仅为示例，并非真实的接口地址"),s(`
          `),a("span",{class:"hljs-attr"},"success"),s(": "),a("span",{class:"hljs-keyword"},"function"),s(" ("),a("span",{class:"hljs-params"},"res"),s(`) {
            `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("(res."),a("span",{class:"hljs-property"},"data"),s(`);
            `),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-title class_"},"Sku"),s(", "),a("span",{class:"hljs-title class_"},"Goods"),s(", imagePathMap } = res."),a("span",{class:"hljs-property"},"data"),s(`;
            data.`),a("span",{class:"hljs-property"},"sku"),s(" = "),a("span",{class:"hljs-title class_"},"Sku"),s(`;
            data.`),a("span",{class:"hljs-property"},"goods"),s(" = "),a("span",{class:"hljs-title class_"},"Goods"),s(`;
          }
        });
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
`)])],-1),x=c(`<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:visible</td><td>是否显示商品规格弹框</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>sku</td><td>商品 sku 数据</td><td>Array</td><td><code class="">[]</code></td></tr><tr><td>goods</td><td>商品信息</td><td>object</td><td>-</td></tr><tr><td>stepper-max</td><td>设置 inputNumber 最大值</td><td>string | number</td><td><code class="">99999</code></td></tr><tr><td>stepper-min</td><td>设置 inputNumber 最小值</td><td>string | number</td><td><code class="">1</code></td></tr><tr><td>btn-options</td><td>底部按钮设置。[<code class="">confirm</code>, <code class="">buy</code>, <code class="">cart</code>] 分别对应确定、立即购买、加入购物车</td><td>Array</td><td><code class="">[confirm]</code></td></tr><tr><td>btn-extra-text</td><td>按钮上部添加文案，默认为空，有值时显示</td><td>string</td><td>-</td></tr><tr><td>stepper-title</td><td>数量选择组件左侧文案</td><td>string</td><td><code class="">购买数量</code></td></tr><tr><td>stepper-extra-text</td><td>InputNumber 与标题之间的文案</td><td>Function | boolean</td><td><code class="">false</code></td></tr><tr><td>buy-text</td><td>立即购买按钮文案</td><td>string</td><td><code class="">立即购买</code></td></tr><tr><td>add-cart-text</td><td>加入购物车按钮文案</td><td>string</td><td><code class="">加入购物车 </code></td></tr><tr><td>confirm-text</td><td>确定按钮文案</td><td>string</td><td><code class="">确定</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>select-sku</td><td>切换规格类目时触发</td><td>{sku,skuIndex,parentSku,parentIndex}</td></tr><tr><td>add</td><td>InputNumber 点击增加按钮时触发</td><td>value</td></tr><tr><td>reduce</td><td>InputNumber 点击减少按钮时触发</td><td>value</td></tr><tr><td>overLimit</td><td>InputNumber 点击不可用的按钮时触发</td><td>value</td></tr><tr><td>change-stepper</td><td>购买变化时触发</td><td>value</td></tr><tr><td>click-btn-operate</td><td>点击底部按钮时触发</td><td>{type:&#39;confirm&#39;,value:&#39;inputNumber value&#39;}</td></tr><tr><td>click-close-icon</td><td>点击左上角关闭 icon 时触发</td><td>-</td></tr><tr><td>click-overlay</td><td>点击遮罩时触发</td><td>-</td></tr><tr><td>close</td><td>关闭弹层时触发</td><td>-</td></tr></tbody></table><h3>Slots</h3><p>Sku 组件默认划分为若干区域，这些区域都定义成了插槽，可以按照需求进行替换。</p><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>sku-header</td><td>商品信息展示区，包含商品图片、价格、编号</td></tr><tr><td>sku-header-price</td><td>商品信息展示区，价格区域展示</td></tr><tr><td>sku-header-extra</td><td>商品信息展示区，编号区域展示</td></tr><tr><td>sku-select-top</td><td>Sku 展示区上方与商品信息展示区下方区域，无默认展示内容</td></tr><tr><td>sku-select</td><td>Sku 展示区</td></tr><tr><td>sku-stepper</td><td>数量选择区</td></tr><tr><td>sku-stepper-bottom</td><td>数量选择区下方区域</td></tr><tr><td>sku-operate</td><td>底部按钮操作区域</td></tr></tbody></table><h3>goods 对象结构</h3><pre><code class="language-javascript"><span class="hljs-attr">goods</span>:{
    <span class="hljs-attr">skuId</span>:<span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// 商品信息展示区，商品编号</span>
    <span class="hljs-attr">price</span>: <span class="hljs-string">&quot;0&quot;</span>, <span class="hljs-comment">// 商品信息展示区，商品价格</span>
    <span class="hljs-attr">imagePath</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-comment">// 商品信息展示区，商品图</span>
}

</code></pre><h3>sku 数组结构</h3><p>sku 数组中，每一个数组索引代表一个规格类目。其中，<code class="">list</code> 代表该规格类目下的类目值。每个类目值对象包括：<code class="">name</code>、<code class="">id</code>、<code class="">active</code>(是否选中)、<code class="">disable</code>(是否可选)</p><pre><code class="language-javascript"><span class="hljs-attr">sku</span>: [
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
</code></pre><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-sku-item-border</td><td><em>1px solid var(--cub-primary-color)</em></td></tr><tr><td>--cub-sku-item-disable-line</td><td><em>line-through</em></td></tr><tr><td>--cub-sku-opetate-bg-default</td><td><em>linear-gradient(90deg, var(--cub-primary-color), var(--cub-primary-color-end) 100%)</em></td></tr><tr><td>--cub-sku-item-active-bg</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-sku-opetate-bg-buy</td><td><em>linear-gradient(135deg,rgba(255, 186, 13, 1) 0%,rgba(255, 195, 13, 1) 69%,rgba(255, 207, 13, 1) 100%)</em></td></tr><tr><td>--cub-sku-spec-height</td><td><em>30px</em></td></tr><tr><td>--cub-sku-spec-line-height</td><td><em>var(--cub-sku-spec-height)</em></td></tr><tr><td>--cub-sku-spec-font-size</td><td><em>11px</em></td></tr><tr><td>--cub-sku-spec-background</td><td><em>rgba(242, 242, 242, 1)</em></td></tr><tr><td>--cub-sku-spec-color</td><td><em>var(--cub-black)</em></td></tr><tr><td>--cub-sku-spec-margin-right</td><td><em>12px</em></td></tr><tr><td>--cub-sku-spec-padding</td><td><em>0 18px</em></td></tr><tr><td>--cub-sku-spec-title-font-weight</td><td><em>bold</em></td></tr><tr><td>--cub-sku-spec-title-font-size</td><td><em>13px</em></td></tr><tr><td>--cub-sku-spec-title-color</td><td><em>var(--cub-black)</em></td></tr><tr><td>--cub-sku-spec-title-margin-bottom</td><td><em>18px</em></td></tr><tr><td>--cub-sku-operate-btn-height</td><td><em>54px</em></td></tr><tr><td>--cub-sku-operate-btn-border-top</td><td><em>0</em></td></tr><tr><td>--cub-sku-operate-btn-item-height</td><td><em>40px</em></td></tr><tr><td>--cub-sku-operate-btn-item-line-height</td><td><em>var(--cub-sku-operate-btn-item-height)</em></td></tr><tr><td>--cub-sku-operate-btn-item-font-size</td><td><em>15px</em></td></tr><tr><td>--cub-sku-operate-btn-item-font-weight</td><td><em>normal</em></td></tr><tr><td>--cub-sku-product-img-width</td><td><em>100px</em></td></tr><tr><td>--cub-sku-product-img-height</td><td><em>var(--cub-sku-product-img-width)</em></td></tr><tr><td>--cub-sku-product-img-border-radius</td><td><em>0</em></td></tr></tbody></table>`,17),B={},Y="",C=e({__name:"doc.taro",setup(w,{expose:p}){return p({frontmatter:{},excerpt:void 0}),(I,v)=>{const l=r("demo-block");return j(),h("div",d,[o,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCA6dGl0bGU9ImDln7rnoYDnlKjms5VgIiBkZXNjPSIiIEBjbGljaz0iYmFzZSA9IHRydWUiPjwvyEDJTXNrdQogICAgdi1tb2RlbDp2aXNpYsRZxDkixRs6c2t1PSJza3XHD2dvb2RzPSLFB8YTQHNlbGVjdFPFKMgLxxvlAIhCdG5PcGVyYXRlPSLPEcknb3PFHW/Gd+cArHNrdT4KPC/qAQQ8c2NyaXB0IGxhbmc9InRzIuQAymltcG9ydCB7IHJlZiwgcmVhY3RpdmUsIG9uTW91bnRlZCwgdG9SZWZzIH0gZnJvbSAndnVlJzvKOlRhcm/HGkB0YXJvanMvxAfFI2V4xSNkZWZhdWx0IHvlALBzZXR1cCgpxw4gIGNvbnN0IOcBbXJlZihmYWxzZSnEQMofZGF0YcUf5gCgKMg9ICBza3U6IFtdLMkR5QFdOiB7fccSfSk7CscL6QDVKCgpID0+6QCDIOUAxi5yZXF1ZXN0y10gIHVybDogJ2h0dHBzOi8vc3RvcmFnZS4zNjBidXlpbWcuY29t5AFudWkvM3gv5ACmLmpzJywgLy/ku4XkuLrnpLrkvovvvIzlubbpnZ7nnJ/lrp7nmoTmjqXlj6PlnLDlnYDLbnN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXPqASzqARNvbGUubG9nxB8uxHfpATDKI+QB1lNrdSwgR+QBEiwgaW1hZ2VQYXRoTWFwIH3lAU7GPM47xBIuc2t1ID3EPtMc5QFhID3GV8wg6AFy5gF00AovLyDliIfmjaLop4TmoLznsbvnm67tAeXpAwAgPSAo5AEGc3RyaW5n7wGrxix75AH5LMQFSW5kZXgsIHBhcmVuxD3IC8UY5QDoc+sApmlmIChza3UuZGlzYWJsZSkgcmV0dXJuIOUCdcon6AEFW8tMXS5saXN0LmZvckVhY2goKHPvAJkgIHMu5gKfxHQuaWQgPT3kAKEuaWTKWeoBEO8BTs1Ia3VJZDrHPOoC2iAgcHJpY2U6ICc0NTk5LjAwJ8wc6QHfOiAnLy9pbWcxNO8CqG40L2pmcy90MS8yMTU4NDUvMTIvMzc4OC8yMjE5OTAvNjE4YTVjNGRFYzcxY2I0YzcvN2JkNmViOGQxNzgzMDk5MS5qcGcnyXR96QHlyAnkAeS6lemDqOaTjeS9nOaMiemSruinpuWPke0B6u8EyeQB8G9w+wHw6ALuJ+eCueWHu+S6hsxhJywgb3DqAnLICeQAjYWz6Zet5ZWG5ZOB5gJ35by55qGG7wCNb+UEfOcEFMlA5wIae+UEnCzqAp4s8AC/xBFvxCMuLi7mBS0o5QOT6ACL5AMYfTsKPC/mBYE+Cg=="},{default:t(()=>[i]),_:1}),u,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0i5LiN5Y+v5ZSuIiBkZXNjPSIiIEBjbGljaz0ibm90U8QqPSB0cnVlIj48L8g9yUpza3UKICAgIHYtbW9kZWw6dmlzaWLEV8c8IsUeOnNrdT0ic2t1xw9nb29kcz0ixQfHE2J0bkV4dHJhVGV4dD0izA7GIUBjaGFuZ2VTdGVwcGVyPSLND8cjc2VsZWN0U8VsyAvKX09wdGlvbnM9IlsnYnV5JywgJ2NhcnQnXcQi5ADQICDpASkgI3NrdS1vcGVy5wE2xR52aWV3IGNsYXNz5QDMyCAtYm94Isgl5wEXYnV0dG9u1y0tZGlzIiB0eXBlPSJ3YXJuaW5nIj7mn6XnnIvnm7jkvLzllYblk4HmAW7GSt9f2V9pbmZvIj7liLDotKfpgJrnn6XUVjwv5ADbxg48L+0CLsUuc2t1PgrMGTxzY3JpcHQgbGFuZz0idHPlAP9pbXBvcnQgeyByZWYsIHJlYWN0aXZlLCBvbk1vdW50ZWQsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7yjpUYXJvxxpAdGFyb2pzL8QHxSNleMUjZGVmYXVsdCB75QCsc2V0dXAoKccOICBjb25zdCDqArZyZWYoZmFsc2UpxEPKImRhdGHFH+YAoyjIQCAgc2t1OiBbXSzJEeUCozoge33HEn0pOwrNTOwCqsdzJ+aKseatie+8jOatpOYBzOWcqOaJgOmAieWMuuWfn+aaguaXoOWtmOi0pyfKUukBKigoKSA9PukA2CDlARsucmVxdWVzdOsAryAgdXJsOiAnaHR0cHM6Ly9zdG9yYWdlLjM2MGJ1eWltZy5jb23kAcN1aS8zeC/kAPguanMnLCAvL+S7heS4uuekuuS+i++8jOW5tumdnuecn+WunueahOaOpeWPo+WcsOWdgMtuc3VjY2VzczogZnVuY+QDTiAocmVz6gGB6gEZb2xlLmxvZ8QfLsR36QGCyiPkAitTa3UsIEfkAWQsIGltYWdlUGF0aE1hcCB95QFMxjzOO8QSLnNrdSA9xD7THOUBsyA9xlfMIOgBxOYBxsoKxwsvLyBpbnB1dE51bWJlciDmm7TmlLntAeztBHQgPSAoY+QBrzogbsUy7wGz7AEGJ+i0reS5sOaVsOmHjycsIMU46gCE7ACD5YiH5o2i6KeE5qC857G755uu7QCD6QTYxH/kAYpzdHJpbmfTfOQBX3PkAV9za3VJbmRleCwgcGFyZW7EPcgLxRjlAWxz6wEqaWYgKHNrdS5kaXNhYmxlKSByZXR1cm4g5QNLyifoAYlby0xdLmxpc3QuZm9yRWFjaCgoc+8AmSAgcy7mA3XEdC5pZCA9PeQAoS5pZMpZ6gGe7wHSzUhrdUlkOsc86gOwICBwcmljZTogJzQ1OTkuMDAnzBzpAmM6ICcvL2ltZzE07wMsbjQvamZzL3QxLzIxNjA3OS8xNC8zODk1LzIwMTA5NS82MThhNWMwY0VlMGI5ZTJiYS9jZjViOThmYjYxMjhhMDllLmpwZyfJdH3rAeXGCeQB5LqV6YOo5pON5L2c5oyJ6ZKu6Kem5Y+R7gJt5AeEQuQGt+UF2uQB8G9w+wHw6QJs54K55Ye75LqGzGEnLCBvcOwCcsYJ5wHae+gFNSzuAuQs6gJwLO0E6iwgLi4u5gXOKOUD38hT5ANkfTsKPC/mBiLkBit0eWzlBkzkAizsBqjnAMB3aWTkAZAxMDAlxkNkaXNwbGF5OiBmbGV4xhNwYWRkaW5nOiA4cHggMTBwxxfkBu1zaXrFGmJvcmRlcsRYxBzkAIfQcOQHGMd0xFo6IDHcKjpmaXJzdC1jaGlsZMc2bWFyZ2luLXJpZ2h0OiAxOOYAh33kAO3mAOQ="},{default:t(()=>[g]),_:1}),m,b,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbCB0aXRsZT0i6Ieq5a6a5LmJ6K6h5q2l5ZmoIiBkZXNjPSIiIEBjbGljaz0iY3VzdG9tU3RlcHBlciA9IHRydWUiPjwvyEzJWXNrdQogICAgdi1tb2RlbDp2aXNpYsRmzUIixSQ6c2t1PSJza3XHD2dvb2RzPSLFB8gixjBNYXg9IjfPFGluPSIyzhRFeHRyYVRleHQ9ItASxilAY2hhbmdl5wCHPSLND8cjb3ZlckxpbWl0PSLJC8dnYnRuT3B0aW9ucz0iWydidXknLCAnY2FydCddxz1zZWxlY3RT5QDZyAvIe+QBS0LEQmVyYXTkARPOEcQn5wFTc2t1Pgo8L+oBtzxzY3JpcHQgbGFuZz0idHMi5AFxaW1wb3J0IHsgcmVmLCByZWFjdGl2ZSwgb25Nb3VudGVkLCB0b1JlZnMgfSBmcm9tICd2dWUnO8o6VGFyb8caQHRhcm9qcy/EB8UjZXjFI2RlZmF1bHQge+UAxHNldHVwKCnHDiAgY29uc3Qg8AIdcmVmKGZhbHNlKcRJyihkYXRhxR/mAKkoyEYgIHNrdTogW10syRHlAgQ6IHt9xxJ9KTsKxwvpAN4oKCkgPT7pAIwg5QDPLnJlcXVlc3TLXSAgdXJsOiAnaHR0cHM6Ly9zdG9yYWdlLjM2MGJ1eWltZy5jb23kAXd1aS8zeC/kAKYuanMnLCAvL+S7heS4uuekuuS+i++8jOW5tumdnuecn+WunueahOaOpeWPo+WcsOWdgMtuc3VjY2VzczogZnVuY+QCLSAocmVz6gE16gETb2xlLmxvZ8QfLsR36QEwyiPkAd9Ta3UsIEfkARIsIGltYWdlUGF0aE1hcCB95QFOxjzOO8QSLnNrdSA9xD7THOUBYSA9xlfMIOgBcuYBdMoK7QHK8ANdID0g8AGNcmV0dXJuIGA8dmlldyBzdHnkBAV3aWR0aDoxMDAlO3RleHQtYWxpZ246cmlnaHQ7Y29sb3I6I0YwMCI+MiDku7botbfllK48L8RBPmDpAIzICS8vIGlucHV0TnVtYmVyIOabtOaUue4CmOwD3eQAo2PkAjk6IG7FMu8AsOwBkCfotK3kubDmlbDph48nLCDFOOoBDukBDfAAg56B6ZmQ5YC87QCG6QRE5ACCdmFsOiBhbnnPfWlmxRsu5AMZb24gPT0gJ3JlZHVjZSfuAjfsAKVg6Iez5bCR5LmwJHvEPHZhbHVlfeS7tuWTpmDrAkp9IGVsc2XaR+acgOWkmt9H6gIY7AGA5YiH5o2i6KeE5qC857G755uu7gIm6AUB5AD65AMRc3RyaW5n8wF55ALmc+QC5nNrdUluZGV4LCBwYXJlbsQ9yAvFGOUC83PrArHkATpza3UuZGlzYWJsZSnoAnjlBIDKJ+gDEFvLTF0ubGlzdC5mb3JFYWNoKChz7wCZICBz5QGRdmXEdC5pZOQBmMRsaWTKWeoDJe8DWc1Ia3VJZDrHPOoE5SAgcHJpY2U6ICc0NTk5LjAwJ8wc6QPqOiAnLy9pbWcxNO8Es240L2pmcy90MS8yMTU4NDUvMTIvMzc4OC8yMjE5OTAvNjE4YTVjNGRFYzcxY2I0YzcvN2JkNmViOGQxNzgzMDk5MS5qcGcnyXTpAdvJCeQB5LqV6YOo5pON5L2c5oyJ6ZKu6Kem5Y+R7gNq7gbK5AHwb3D7AfDpA2nngrnlh7vkuobMYScsIG9w7ANvxgnnAdp77gZwLOoDYSzuA/Is6gKBLPAAoizxBMMsIC4uLuYHLyjlBYzIeeQC+X07Cjwv5geDPgo="},{default:t(()=>[k]),_:1}),y,A,n(l,{"data-type":"vue","data-value":"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"},{default:t(()=>[f]),_:1}),x])}}});export{C as default,Y as excerpt,B as frontmatter};
