import{d as h,r as e,b as r,k as n,w as t,aq as c,e as a,l as s,o as j}from"./style_icon.js";const o={class:"markdown-body"},d=c(`<h1>Radio 单选按钮</h1><h3>介绍</h3><p>用于在一组备选项中进行单选</p><h3>安装</h3><pre><code class="language-ts"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Radio</span>, <span class="hljs-title class_">RadioGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Radio</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">RadioGroup</span>);
</code></pre><h3>基础用法</h3><p>通过 <strong>v-model</strong> 绑定值当前选项的 <strong>label</strong> 。并且必须 <strong>cub-radio-group</strong> 和 <strong>cub-radio</strong> 相结合进行使用</p>`,7),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell-group"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"基础用法"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio-group"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"radioVal"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("选项1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"disabled"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("选项2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s("选项3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio-group"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio-group"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"radioVal"'),s(),a("span",{class:"hljs-attr"},"text-position"),s("="),a("span",{class:"hljs-string"},'"left"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("选项1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"disabled"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("选项2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s("选项3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio-group"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio-group"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"radioVal"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"button"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("选项1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"disabled"),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"button"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("选项2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"button"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s("选项3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio-group"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell-group"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"props"),s(`: {},
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" radioVal = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'1'"),s(`);
      `),a("span",{class:"hljs-keyword"},"return"),s(` { radioVal };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),g=a("h3",null,"水平使用",-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell-group"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"水平使用"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio-group"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"radioVal"'),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"horizontal"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("选项1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("选项2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s("选项3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio-group"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio-group"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"radioVal"'),s(),a("span",{class:"hljs-attr"},"text-position"),s("="),a("span",{class:"hljs-string"},'"left"'),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"horizontal"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("选项1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("选项2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s("选项3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio-group"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio-group"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"radioVal"'),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"horizontal"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"button"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("选项1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"button"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("选项2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"button"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s("选项3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio-group"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell-group"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"props"),s(`: {},
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" radioVal = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'1'"),s(`);
      `),a("span",{class:"hljs-keyword"},"return"),s(` { radioVal };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),u=a("h3",null,"自定义尺寸",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell-group"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"自定义尺寸"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio-group"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"radioVal"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"1"'),s(),a("span",{class:"hljs-attr"},"icon-size"),s("="),a("span",{class:"hljs-string"},'"12"'),s(">")]),s("自定义尺寸12"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"2"'),s(),a("span",{class:"hljs-attr"},"icon-size"),s("="),a("span",{class:"hljs-string"},'"12"'),s(">")]),s("自定义尺寸12"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio-group"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell-group"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"props"),s(`: {},
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" radioVal = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'1'"),s(`);
      `),a("span",{class:"hljs-keyword"},"return"),s(` { radioVal };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),y=a("h3",null,"自定义图标",-1),k=a("p",null,[s("通过 "),a("code",{class:""},"slot"),s(" 自定义图标，建议同时设置"),a("code",{class:""},"icon"),s("和"),a("code",{class:""},"checkedIcon"),s("两个插槽")],-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell-group"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Radio自定义图标"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio-group"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"radioVal"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s(`
          自定义图标
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Check"),s(" />")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"checkedIcon"),s(">")]),s(),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Check"),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"red"'),s(" />")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s(`
          自定义图标
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Check"),s(" />")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"checkedIcon"),s(">")]),s(),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Check"),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"red"'),s(" />")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio-group"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell-group"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Check"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue-taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(`: {
      `),a("span",{class:"hljs-title class_"},"Check"),s(`
    },
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" radioVal = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'1'"),s(`);
      `),a("span",{class:"hljs-keyword"},"return"),s(` { radioVal };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),I=a("h3",null,"触发 change 事件",-1),x=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell-group"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"触发事件"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio-group"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"radioVal"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("触发事件"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("触发事件"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio-group"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"当前选中值"'),s(),a("span",{class:"hljs-attr"},":desc"),s("="),a("span",{class:"hljs-string"},'"radioVal"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell-group"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"props"),s(`: {},
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" radioVal = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'1'"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"handleChange"),s(" = ("),a("span",{class:"hljs-params"},"value: any"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(value);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` { radioVal, handleChange };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),v=c('<h2>API</h2><h3>Radio Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>disabled</td><td>是否禁用选择</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>icon-size</td><td><a href="#/zh-CN/component/icon">图标尺寸</a></td><td>string | number</td><td><code class="">18</code></td></tr><tr><td>label</td><td>单选框标识</td><td>string | number | boolean</td><td>-</td></tr><tr><td>shape</td><td>形状，可选值为 button、round</td><td>string</td><td><code class="">round</code></td></tr></tbody></table><h3>Radio Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>icon</td><td>未选中时的图标</td></tr><tr><td>checkedIcon</td><td>选中时的图标</td></tr></tbody></table><h3>RadioGroup Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前选中项的标识符，与 <code class="">label</code> 值一致时呈选中状态</td><td>string | number | boolean</td><td>-</td></tr><tr><td>text-position</td><td>文本所在的位置，可选值：<code class="">left</code>,<code class="">right</code></td><td>string</td><td><code class="">right</code></td></tr><tr><td>direction</td><td>使用横纵方向 可选值 <code class="">horizontal、vertical </code></td><td>string</td><td><code class="">vertical</code></td></tr></tbody></table><h3>RadioGroup Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>值变化时触发</td><td>当前选中项值（label）【设置 label 后有值、默认为空】</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-radio-label-font-color</td><td><em>#1d1e1e</em></td></tr><tr><td>--cub-radio-label-font-active-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-radio-label-disable-color</td><td><em>#999</em></td></tr><tr><td>--cub-radio-icon-disable-color</td><td><em>#d6d6d6</em></td></tr><tr><td>--cub-radio-label-button-border-color</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-radio-label-button-background</td><td><em>var(--cub-primary-color)</em></td></tr><tr><td>--cub-radio-label-margin-left</td><td><em>15px</em></td></tr><tr><td>--cub-radio-button-border-radius</td><td><em>15px</em></td></tr><tr><td>--cub-radio-label-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-radio-button-font-size</td><td><em>12px</em></td></tr><tr><td>--cub-radio-button-padding</td><td><em>5px 18px</em></td></tr><tr><td>--cub-radio-icon-disable-color2</td><td><em>var(--cub-help-color)</em></td></tr></tbody></table>',13),_={},A="",R=h({__name:"doc.taro",setup(w,{expose:p}){return p({frontmatter:{},excerpt:void 0}),(C,V)=>{const l=e("demo-block");return j(),r("div",o,[d,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbC1ncm91cCB0aXRsZT0i5Z+656GA55So5rOVIsQoyyrGD8cRcmFkaW/HPHYtbW9kZWw9IsUVVmFsxzrOLSBsYWLEJTEiPumAiemhuTE8L8kd1TFkaXNhYmxlZMg6Msg6Mt86yDEzyDEz0zHLE+YAyMYZxhfqAPD/AP/1AP8gdGV4dC1wb3NpdGlvbj0ibGVmdP8BFP8BFP8BFP8BFP8BFP8BFP8BFP8BFP0CE3NoYXBlPSJidXR0b24i/wEO00DpAQ7WSf8BHf8Aif8BLP8BLOYBHcoOyCQ8L+oDhzxzY3JpcHQgbGFuZz0idHPlASVpbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnOwogIGV4xR1kZWZhdWx0IHvFc3Byb3BzOiB7fSzFD3NldHVwKCnHHSAgY29uc3Qg6AGJID3EWSgnMScpxFHEAXJldHVybsRyyCR9xht9CiDECzwv5gCoPgo="},{default:t(()=>[i]),_:1}),g,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbC1ncm91cCB0aXRsZT0i5rC05bmz5L2/55SoIsQoyyrGD8cRcmFkaW/HPHYtbW9kZWw9IsUVVmFsIiBkaXJlY3Rpb249Imhvcml6b250YWzHUc5EIGxhYsQ8MSI+6YCJ6aG5MTwvyR3cMTLIMTLfMcgxM8gxM9MxyxPmANbGGcYX6gD+/wEN9gENdGV4dC1wb3Np5gERbGVmdP8BIv8BIv8A8f8BItox/wEi/wEi/wEi/wIv/wENyEQgc2hhcGU9ImJ1dHRvbiL/ARzfQMpA/wEr30D/ATr/ATrmASvKDsgkPC/qA7E8c2NyaXB0IGxhbmc9InRz5QEcaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzsKICBleMUdZGVmYXVsdCB7xXNwcm9wczoge30sxQ9zZXR1cCgpxx0gIGNvbnN0IOgBlyA9xFkoJzEnKcRRxAFyZXR1cm7EcsgkfcYbfQogxAs8L+YAqD4K"},{default:t(()=>[m]),_:1}),u,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbC1ncm91cCB0aXRsZT0i6Ieq5a6a5LmJ5bC65a+4IsQryy3GD8cRcmFkaW/HP3YtbW9kZWw9IsUVVmFsxzrOLSBsYWLEJTEiIGljb24tc2l6ZT0iMTIiPs94MTI8L8k23Eoy30rWSssT5gDAxhnGF+gA6MoOyCQ8L+oBQjxzY3JpcHQgbGFuZz0idHPlAPBpbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnOwogIGV4xR1kZWZhdWx0IHvFc3Byb3BzOiB7fSzFD3NldHVwKCnHHSAgY29uc3Qg6AFUID3EWSgnMScpxFHEAXJldHVybsRyyCR9xht9CiDECzwv5gCoPgo="},{default:t(()=>[b]),_:1}),y,k,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbC1ncm91cCB0aXRsZT0iUmFkaW/oh6rlrprkuYnlm77moIcixDDLMsYPxxFyxDHHRHYtbW9kZWw9IsUVVmFsxzrOLSBsYWLEJTHLHiAgz3TLGukAtyAjaWNvbj4gPENoZWNrIC8+IDwvyBzMS8sxY8QqZWRJzDhjb2xvcj0icmVkIthEPC/pAK78AMIy/wDC/wDC2H7/AML/AML5AMLLE+YBsMYZxhfoAdjKDsgkzF48c2NyaXB0IGxhbmc9InRz5QEAaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzvMHeYAusgfQGN1YmZlL+QBDnMtdnVlLXRhcm/FMWV4xTFkZWZhdWx0IHvlAKRjb21wb25lbnRzOscSIMZRxQx9LMUHc2V0dXAoKckhxFx0IOgCiyA95ACgKCcxJynEZ8QBcmV0dXJu5AC5yCR9xht9CiDECzwv5gDvPgo="},{default:t(()=>[f]),_:1}),I,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY2VsbC1ncm91cCB0aXRsZT0i6Kem5Y+R5LqL5Lu2IsQoyyrGD8cRcmFkaW/HPHYtbW9kZWw9IsUVVmFsIiBAY2hhbmdlPSJoYW5kbGVDxQ7HUc5EIGxhYsQ8MSI+zH08L8ki3DYy3zYgIMsT5gCvxhnGF+oA1+kA5ugBCuW9k+WJjemAieS4reWAvCIgOmRlc2PrAOQ+zkPKDshnPC/qAXE8c2NyaXB0IGxhbmc9InRz5QELaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzsKICBleMUdZGVmYXVsdCB75QCmcHJvcHM6IHt9LMUPc2V0dXAoKccdICBjb25zdCDoAKIgPcRZKCcxJynEUcoh7AGUID0gKHZhbHVlOiBhbnkpID0+yU7GL29sZS5sb2fGJclJfcgJcmV0dXJu5ADEx3Yszl/HKX0KxTQ8L+YBCD4K"},{default:t(()=>[x]),_:1}),v])}}});export{R as default,A as excerpt,_ as frontmatter};
