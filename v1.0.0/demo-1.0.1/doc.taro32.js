import{d as r,r as p,b as h,k as n,w as t,aq as c,e as a,o as j,l as s}from"./style_icon.js";const o={class:"markdown-body"},i=c(`<h1>Form 表单</h1><h3>介绍</h3><p>用于数据录入、校验，支持输入框、单选框、复选框、文件上传等类型。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Form</span>, <span class="hljs-title class_">FormItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Form</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">FormItem</span>);
</code></pre><h3>基础用法</h3>`,6),d=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"姓名"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"basicData.name"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-input-text"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入姓名"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"年龄"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"basicData.age"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-input-text"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入年龄"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"联系电话"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"basicData.tel"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-input-text"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入联系电话"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"basicData.address"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"地址"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-input-text"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入地址"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"备注"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-textarea"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入备注"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" basicData = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"tel"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` { basicData };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),m=a("h3",null,"动态表单",-1),g=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form"),s(),a("span",{class:"hljs-attr"},":model-value"),s("="),a("span",{class:"hljs-string"},'"dynamicForm.state"'),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"dynamicRefForm"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"姓名"'),s(),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"name"'),s(),a("span",{class:"hljs-attr"},"required"),s(),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[{ required: true, message: '请填写姓名' }]"`),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-input-text"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"dynamicForm.state.name"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入姓名"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(`
      `),a("span",{class:"hljs-attr"},":label"),s("="),a("span",{class:"hljs-string"},`"'联系方式'+index"`),s(`
      `),a("span",{class:"hljs-attr"},":prop"),s("="),a("span",{class:"hljs-string"},`"'tels.' + index + '.value'"`),s(`
      `),a("span",{class:"hljs-attr"},"required"),s(`
      `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[{ required: true, message: '请填写联系方式'+index }]"`),s(`
      `),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"item.key"'),s(`
      `),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"(item,index) in dynamicForm.state.tels"'),s(`
    >`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-input-text"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"item.value"'),s(),a("span",{class:"hljs-attr"},":placeholder"),s("="),a("span",{class:"hljs-string"},`"'请输入联系方式'+index"`),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-right: 10px"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"dynamicForm.methods.add"'),s(">")]),s("添加"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-right: 10px"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"dynamicForm.methods.remove"'),s(">")]),s("删除"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-right: 10px"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"dynamicForm.methods.submit"'),s(`
        >`)]),s(`提交</cub-button
      >
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"dynamicForm.methods.reset"'),s(">")]),s("重置提示状态"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" dynamicRefForm = ref<any>("),a("span",{class:"hljs-literal"},"null"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(` dynamicForm = {
        `),a("span",{class:"hljs-attr"},"state"),s(": "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
          `),a("span",{class:"hljs-attr"},"tels"),s(": "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Array"),s(`({
            `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-number"},"1"),s(`,
            `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
          })
        }),

        `),a("span",{class:"hljs-attr"},"methods"),s(`: {
          `),a("span",{class:"hljs-title function_"},"submit"),s("("),a("span",{class:"hljs-params"}),s(`) {
            dynamicRefForm.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"validate"),s("()."),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"{ valid, errors }: any"),s(") =>")]),s(` {
              `),a("span",{class:"hljs-keyword"},"if"),s(` (valid) {
                `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'success'"),s(`, dynamicForm);
              } `),a("span",{class:"hljs-keyword"},"else"),s(` {
                `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("(errors["),a("span",{class:"hljs-number"},"0"),s("]."),a("span",{class:"hljs-property"},"message"),s(`);
                `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'error submit!!'"),s(`, errors);
              }
            });
          },
          `),a("span",{class:"hljs-title function_"},"reset"),s("("),a("span",{class:"hljs-params"}),s(`) {
            dynamicRefForm.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"reset"),s(`();
          },
          `),a("span",{class:"hljs-title function_"},"remove"),s("("),a("span",{class:"hljs-params"}),s(`) {
            dynamicForm.`),a("span",{class:"hljs-property"},"state"),s("."),a("span",{class:"hljs-property"},"tels"),s("."),a("span",{class:"hljs-title function_"},"splice"),s("(dynamicForm."),a("span",{class:"hljs-property"},"state"),s("."),a("span",{class:"hljs-property"},"tels"),s("."),a("span",{class:"hljs-property"},"length"),s(" - "),a("span",{class:"hljs-number"},"1"),s(", "),a("span",{class:"hljs-number"},"1"),s(`);
          },
          `),a("span",{class:"hljs-title function_"},"add"),s("("),a("span",{class:"hljs-params"}),s(`) {
            `),a("span",{class:"hljs-keyword"},"let"),s(" newIndex = dynamicForm."),a("span",{class:"hljs-property"},"state"),s("."),a("span",{class:"hljs-property"},"tels"),s("."),a("span",{class:"hljs-property"},"length"),s(`;
            dynamicForm.`),a("span",{class:"hljs-property"},"state"),s("."),a("span",{class:"hljs-property"},"tels"),s("."),a("span",{class:"hljs-title function_"},"push"),s(`({
              `),a("span",{class:"hljs-attr"},"key"),s(": "),a("span",{class:"hljs-title class_"},"Date"),s("."),a("span",{class:"hljs-title function_"},"now"),s(`(),
              `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
            });
          }
        }
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        dynamicForm,
        dynamicRefForm
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),u=c('<h3>表单校验</h3><p><code class="">4.1.0</code> 新增基于 Promise 的自定义错误提示功能：</p><p><code class="">validator</code> 为函数，返回值类型为 <code class="">boolean | Promise</code>。若返回 <code class="">false</code> 或者触发了 <code class="">resolve(false)</code> 的 Promise ，则表示校验失败，会展示 <code class="">message</code> 设置的提示信息。若返回触发了 <code class="">reject(error)</code> 的 Promise，则会将 <code class="">error</code> 作为提示文案，优先级高于 <code class="">message</code>。</p>',3),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form"),s(`
    `),a("span",{class:"hljs-attr"},":model-value"),s("="),a("span",{class:"hljs-string"},'"formData"'),s(`
    `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"{name: [{
            message: 'name 至少两个字符',
            validator: nameLengthValidator
          }]}"`),s(`
    `),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"ruleForm"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"姓名"'),s(),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"name"'),s(),a("span",{class:"hljs-attr"},"required"),s(),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[{ required: true, message: '请填写姓名' }]"`),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(`
        `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-input-text"'),s(`
        @`),a("span",{class:"hljs-attr"},"blur"),s("="),a("span",{class:"hljs-string"},`"customBlurValidate('name')"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.name"'),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入姓名，blur 事件校验"'),s(`
        `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(`
      `),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"年龄"'),s(`
      `),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"age"'),s(`
      `),a("span",{class:"hljs-attr"},"required"),s(`
      `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[
      { required: true, message: '请填写年龄' },
      { validator: customValidator, message: '必须输入数字' },
      { validator: customRulePropValidator, message: '必须输入数字', reg: /^\\d+$/ },
      { regex: /^(\\d{1,2}|1\\d{2}|200)$/, message: '必须输入0-200区间' }
    ]"`),s(`
    >`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(`
        `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-input-text"'),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.age"'),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入年龄，必须数字且0-200区间"'),s(`
        `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(`
      `),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"联系电话"'),s(`
      `),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"tel"'),s(`
      `),a("span",{class:"hljs-attr"},"required"),s(`
      `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[
      { required: true, message: '请填写联系电话' },
      { validator: asyncValidator, message: '电话格式不正确' }
    ]"`),s(`
    >`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(`
        `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-input-text"'),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.tel"'),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入联系电话，异步校验电话格式"'),s(`
        `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"地址"'),s(),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"address"'),s(),a("span",{class:"hljs-attr"},"required"),s(),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[{ required: true, message: '请填写地址' }]"`),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-input-text"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.address"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入地址"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-right: 10px"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"submit"'),s(">")]),s("提交"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"reset"'),s(">")]),s("重置提示状态"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" formData = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"tel"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"reset"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        ruleForm.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"reset"),s(`();
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"validate"),s(" = ("),a("span",{class:"hljs-params"},"item: any"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s(`(item);
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(" ruleForm = ref<any>("),a("span",{class:"hljs-literal"},"null"),s(`);

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"submit"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        ruleForm.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"validate"),s("()."),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"{ valid, errors }: any"),s(") =>")]),s(` {
          `),a("span",{class:"hljs-keyword"},"if"),s(` (valid) {
            `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'success'"),s(`, formData);
          } `),a("span",{class:"hljs-keyword"},"else"),s(` {
            `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'error submit!!'"),s(`, errors);
          }
        });
      };
      `),a("span",{class:"hljs-comment"},"// 失去焦点校验"),s(`
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"customBlurValidate"),s(" = ("),a("span",{class:"hljs-params"},"prop: string"),s(`) => {
        ruleForm.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"validate"),s("(prop)."),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"{ valid, errors }: any"),s(") =>")]),s(` {
          `),a("span",{class:"hljs-keyword"},"if"),s(` (valid) {
            `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'success'"),s(`, formData);
          } `),a("span",{class:"hljs-keyword"},"else"),s(` {
            `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'error submit!!'"),s(`, errors);
          }
        });
      };
      `),a("span",{class:"hljs-comment"},"// 函数校验"),s(`
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"customValidator"),s(" = ("),a("span",{class:"hljs-params"},"val: string"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"if"),s(" ("),a("span",{class:"hljs-regexp"},"/^\\d+$/"),s("."),a("span",{class:"hljs-title function_"},"test"),s(`(val)) {
          `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-title class_"},"Promise"),s("."),a("span",{class:"hljs-title function_"},"resolve"),s(`();
        } `),a("span",{class:"hljs-keyword"},"else"),s(` {
          `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-title class_"},"Promise"),s("."),a("span",{class:"hljs-title function_"},"reject"),s("("),a("span",{class:"hljs-string"},"'必须输入数字'"),s(`);
        }
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"customRulePropValidator"),s(" = ("),a("span",{class:"hljs-params"},"val: string, rule: FormItemRuleWithoutValidator"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"if"),s(" ((rule?."),a("span",{class:"hljs-property"},"reg"),s(),a("span",{class:"hljs-keyword"},"as"),s(),a("span",{class:"hljs-title class_"},"RegExp"),s(")."),a("span",{class:"hljs-title function_"},"test"),s(`(val)) {
          `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-title class_"},"Promise"),s("."),a("span",{class:"hljs-title function_"},"resolve"),s(`();
        } `),a("span",{class:"hljs-keyword"},"else"),s(` {
          `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-title class_"},"Promise"),s("."),a("span",{class:"hljs-title function_"},"reject"),s("("),a("span",{class:"hljs-string"},"'必须输入数字'"),s(`);
        }
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"nameLengthValidator"),s(" = ("),a("span",{class:"hljs-params"},"val: string"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"if"),s(" (val."),a("span",{class:"hljs-property"},"length"),s(" > "),a("span",{class:"hljs-number"},"2"),s(`) {
          `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-title class_"},"Promise"),s("."),a("span",{class:"hljs-title function_"},"resolve"),s(`();
        } `),a("span",{class:"hljs-keyword"},"else"),s(` {
          `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-title class_"},"Promise"),s("."),a("span",{class:"hljs-title function_"},"reject"),s("("),a("span",{class:"hljs-string"},"'名称两个字以上'"),s(`);
        }
      };
      `),a("span",{class:"hljs-comment"},"// Promise 异步校验"),s(`
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"asyncValidator"),s(" = ("),a("span",{class:"hljs-params"},"val: string"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"const"),s(" telReg = "),a("span",{class:"hljs-regexp"},"/^400(-?)[0-9]{7}$|^1\\d{10}$|^0[0-9]{2,3}-[0-9]{7,8}$/"),s(`;
        `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Promise"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"resolve, reject"),s(") =>")]),s(` {
          showToast.`),a("span",{class:"hljs-title function_"},"loading"),s("("),a("span",{class:"hljs-string"},"'模拟异步验证中...'"),s(`);
          `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
            showToast.`),a("span",{class:"hljs-title function_"},"hide"),s(`();
            `),a("span",{class:"hljs-keyword"},"if"),s(` (!val) {
              `),a("span",{class:"hljs-title function_"},"reject"),s("("),a("span",{class:"hljs-string"},"'请输入联系电话'"),s(`);
            } `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (!telReg."),a("span",{class:"hljs-title function_"},"test"),s(`(val)) {
              `),a("span",{class:"hljs-title function_"},"reject"),s("("),a("span",{class:"hljs-string"},"'联系电话格式不正确'"),s(`);
            } `),a("span",{class:"hljs-keyword"},"else"),s(` {
              `),a("span",{class:"hljs-title function_"},"resolve"),s("("),a("span",{class:"hljs-string"},"''"),s(`);
            }
          }, `),a("span",{class:"hljs-number"},"1000"),s(`);
        });
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ruleForm,
        formData,
        validate,
        customValidator,
        customRulePropValidator,
        nameLengthValidator,
        asyncValidator,
        customBlurValidate,
        submit,
        reset
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),y=a("h3",null,"表单类型",-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"开关"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-switch"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData2.switch"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-switch"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"复选框"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData2.checkbox"'),s(">")]),s("复选框"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"单选按钮"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio-group"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"horizontal"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData2.radio"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("选项1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"disabled"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("选项2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s("选项3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio-group"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"评分"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData2.rate"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"步进器"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input-number"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData2.number"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"滑块"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(),a("span",{class:"hljs-attr"},"hidden-tag"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData2.range"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"文件上传"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-uploader"),s(`
        `),a("span",{class:"hljs-attr"},"url"),s("="),a("span",{class:"hljs-string"},'"http://服务地址"'),s(`
        `),a("span",{class:"hljs-attr"},"accept"),s("="),a("span",{class:"hljs-string"},'"image/*"'),s(`
        `),a("span",{class:"hljs-attr"},"v-model:file-list"),s("="),a("span",{class:"hljs-string"},'"formData2.defaultFileList"'),s(`
        `),a("span",{class:"hljs-attr"},"maximum"),s("="),a("span",{class:"hljs-string"},'"3"'),s(`
        `),a("span",{class:"hljs-attr"},"multiple"),s(`
      >`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-uploader"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"地址"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(`
        `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-input-text"'),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData2.address"'),s(`
        @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"addressModule.methods.show"'),s(`
        `),a("span",{class:"hljs-attr"},"readonly"),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请选择地址"'),s(`
        `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(`
      />`)]),s(`
      `),a("span",{class:"hljs-comment"},"<!-- cub-address -->"),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-address"),s(`
        `),a("span",{class:"hljs-attr"},"v-model:visible"),s("="),a("span",{class:"hljs-string"},'"addressModule.state.show"'),s(`
        `),a("span",{class:"hljs-attr"},":province"),s("="),a("span",{class:"hljs-string"},'"addressModule.state.province"'),s(`
        `),a("span",{class:"hljs-attr"},":city"),s("="),a("span",{class:"hljs-string"},'"addressModule.state.city"'),s(`
        `),a("span",{class:"hljs-attr"},":country"),s("="),a("span",{class:"hljs-string"},'"addressModule.state.country"'),s(`
        `),a("span",{class:"hljs-attr"},":town"),s("="),a("span",{class:"hljs-string"},'"addressModule.state.town"'),s(`
        @`),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"addressModule.methods.onChange"'),s(`
        `),a("span",{class:"hljs-attr"},"custom-address-title"),s("="),a("span",{class:"hljs-string"},'"请选择所在地区"'),s(`
      >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-address"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" formData2 = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"switch"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"checkbox"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
        `),a("span",{class:"hljs-attr"},"radio"),s(": "),a("span",{class:"hljs-number"},"0"),s(`,
        `),a("span",{class:"hljs-attr"},"number"),s(": "),a("span",{class:"hljs-number"},"0"),s(`,
        `),a("span",{class:"hljs-attr"},"rate"),s(": "),a("span",{class:"hljs-number"},"3"),s(`,
        `),a("span",{class:"hljs-attr"},"range"),s(": "),a("span",{class:"hljs-number"},"30"),s(`,
        `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"defaultFileList"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'文件1.png'"),s(`,
            `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg'"),s(`,
            `),a("span",{class:"hljs-attr"},"status"),s(": "),a("span",{class:"hljs-string"},"'success'"),s(`,
            `),a("span",{class:"hljs-attr"},"message"),s(": "),a("span",{class:"hljs-string"},"'上传成功'"),s(`,
            `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'image'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'文件2.png'"),s(`,
            `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg'"),s(`,
            `),a("span",{class:"hljs-attr"},"status"),s(": "),a("span",{class:"hljs-string"},"'uploading'"),s(`,
            `),a("span",{class:"hljs-attr"},"message"),s(": "),a("span",{class:"hljs-string"},"'上传中...'"),s(`,
            `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'image'"),s(`
          }
        ]
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(" addressModule = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"state"),s(`: {
          `),a("span",{class:"hljs-attr"},"show"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
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
        },
        `),a("span",{class:"hljs-attr"},"methods"),s(`: {
          `),a("span",{class:"hljs-title function_"},"show"),s("("),a("span",{class:"hljs-params"}),s(`) {
            addressModule.`),a("span",{class:"hljs-property"},"state"),s("."),a("span",{class:"hljs-property"},"show"),s(" = !addressModule."),a("span",{class:"hljs-property"},"state"),s("."),a("span",{class:"hljs-property"},"show"),s(`;
            `),a("span",{class:"hljs-keyword"},"if"),s(" (addressModule."),a("span",{class:"hljs-property"},"state"),s("."),a("span",{class:"hljs-property"},"show"),s(`) {
              formData2.`),a("span",{class:"hljs-property"},"address"),s(" = "),a("span",{class:"hljs-string"},"''"),s(`;
            }
          },
          `),a("span",{class:"hljs-title function_"},"onChange"),s("("),a("span",{class:"hljs-params"},"{ custom, next, value }: any"),s(`) {
            formData2.`),a("span",{class:"hljs-property"},"address"),s(" += value."),a("span",{class:"hljs-property"},"name"),s(`;
            `),a("span",{class:"hljs-keyword"},"const"),s(" name = addressModule."),a("span",{class:"hljs-property"},"state"),s(`[next];
            `),a("span",{class:"hljs-keyword"},"if"),s(" (name."),a("span",{class:"hljs-property"},"length"),s(" < "),a("span",{class:"hljs-number"},"1"),s(`) {
              addressModule.`),a("span",{class:"hljs-property"},"state"),s("."),a("span",{class:"hljs-property"},"show"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
            }
          }
        }
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` { formData2, addressModule };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),A=c(`<h2>API</h2><h3>Form Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>model-value</td><td>表单数据对象(使用表单校验时，<em>必填</em>)</td><td>object</td><td></td></tr><tr><td>rules</td><td>统一配置每个 <code class="">FormItem</code> 的 <code class="">rules</code></td><td>{ prop: FormItemRule[] }</td><td><code class="">{}</code></td></tr></tbody></table><h3>Form Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>validate</td><td>任一表单项被校验失败后触发</td><td>被校验的表单项 <code class="">prop</code> 值，校验是否通过，错误消息（如果存在）</td></tr></tbody></table><h3>FormItem Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>required</td><td>是否显示必填字段的标签旁边的红色星号</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>prop</td><td>表单域 <code class="">v-model</code> 字段， 在使用表单校验功能的情况下，该属性是必填的</td><td>string</td><td><code class="">-</code></td></tr><tr><td>rules</td><td>定义校验规则</td><td>FormItemRule []</td><td><code class="">[]</code></td></tr><tr><td>label-width</td><td>表单项 <code class="">label</code> 宽度，默认单位为<code class="">px</code></td><td>number | string</td><td><code class="">90</code></td></tr><tr><td>label-align</td><td>表单项 <code class="">label</code> 对齐方式，可选值为 <code class="">center</code> <code class="">right</code></td><td>string</td><td><code class="">left</code></td></tr><tr><td>body-align</td><td>右侧插槽对齐方式，可选值为 <code class="">center</code> <code class="">right</code></td><td>string</td><td><code class="">left</code></td></tr><tr><td>error-message-align</td><td>错误提示文案对齐方式，可选值为 <code class="">center</code> <code class="">right</code></td><td>string</td><td><code class="">left</code></td></tr><tr><td>show-error-line</td><td>是否在校验不通过时标红输入框</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>show-error-message</td><td>是否在校验不通过时在输入框下方展示错误提示</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>FormItemRule 数据结构</h3><p>使用 FormItem 的<code class="">rules</code>属性可以定义校验规则，可选属性如下:</p><table><thead><tr><th>键名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>required</td><td>是否为必选字段</td><td>boolean</td></tr><tr><td>message</td><td>错误提示文案</td><td>string</td></tr><tr><td>validator</td><td>通过函数进行校验</td><td>(value:string, rule?:FormItemRule ) =&gt; boolean | Promise</td></tr><tr><td>regex</td><td>通过正则表达式进行校验</td><td>RegExp</td></tr></tbody></table><h3>FormItem Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义内容</td></tr><tr><td>label</td><td>自定义 <code class="">label</code> 区域</td></tr></tbody></table><pre><code class="language-html">插槽使用方式
<span class="hljs-tag">&lt;<span class="hljs-name">cub-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:label</span>&gt;</span>slot label<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">cub-form-item</span>&gt;</span>
</code></pre><h3>Methods</h3><p>通过 <a href="https://vuejs.org/guide/essentials/template-refs.html#template-refs">ref</a> 可以获取到 Form 实例并调用实例方法</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>submit</td><td>提交表单进行校验的方法</td><td>-</td><td>-</td></tr><tr><td>reset</td><td>清空校验结果</td><td>-</td><td>-</td></tr><tr><td>validate</td><td>用户主动触发校验，用于用户自定义场景时触发，例如 <code class="">blur</code>、<code class="">change</code> 事件</td><td>同 <code class="">FormItem prop</code> 值,不传值会校验全部 <code class="">Rule</code></td><td>-</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-form-item-error-line-color</td><td><em>var(--cub-required-color)</em></td></tr><tr><td>--cub-form-item-required-color</td><td><em>var(--cub-required-color)</em></td></tr><tr><td>--cub-form-item-error-message-color</td><td><em>var(--cub-required-color)</em></td></tr><tr><td>--cub-form-item-label-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-form-item-label-width</td><td><em>90px</em></td></tr><tr><td>--cub-form-item-label-margin-right</td><td><em>10px</em></td></tr><tr><td>--cub-form-item-label-text-align</td><td><em>left</em></td></tr><tr><td>--cub-form-item-required-margin-right</td><td><em>4px</em></td></tr><tr><td>--cub-form-item-body-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-form-item-body-slots-text-align</td><td><em>left</em></td></tr><tr><td>--cub-form-item-body-input-text-align</td><td><em>left</em></td></tr><tr><td>--cub-form-item-tip-font-size</td><td><em>10px</em></td></tr><tr><td>--cub-form-item-tip-text-align</td><td><em>left</em></td></tr></tbody></table>`,20),I={},B="",F=r({__name:"doc.taro",setup(v,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(w,k)=>{const l=p("demo-block");return j(),h("div",o,[i,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZm9ybcQNyw8taXRlbSBsYWJlbD0i5aeT5ZCNIsYjxyVpbnB1dCB2LW1vZMQjYmFzaWNEYXRhLm5hbWUiIGNsYXNzPSLJKi10ZXh0IiBwbGFjZWhvbGRlcj0i6K+36L6T5YWlx2AgdHlwZT0ixiovxm48L+0Akv0Aprm06b6E/wCm6ACmYWf/AKXyAKXGX/8Apf8ApSLogZTns7vnlLXor53/AKvoAKt0ZWz/AKvwAKvNZf8AsfkAsfQBNWRkcmVzcyLpAXKcsOWdgPQAx/8Ar+8BWsZH/wCp/wFaIuWkh+azqO4AjcRMYXJlYdh5xjPfech5yhM+Cjwv6gNFPHNjcmlwdCBsYW5nPSJ0c+UAg2ltcG9ydCB7IHJlZiwgcmVhY3RpdmUgfSBmcm9tICd2dWUnOwogIGV4xSdkZWZhdWx0IHvFfHNldHVwKCnHDiAgY29uc3Qg6QGHID3JUCjIIyAg5AN3OiAnJyzJEmFnzxF0ZWzPIuYB0MQVxxR9KeQAlsQBcmV0dXJuIHvLeH3GHH0KIMQLPC/mAPg+Cg=="},{default:t(()=>[d]),_:1}),m,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZm9ybSA6bW9kZWwtdmFsdWU9ImR5bmFtaWNGb3JtLnN0YXRlIiByZWbJGFJlZsQbIsRDy0UtaXRlbSBsYWJlbD0i5aeT5ZCNIiBwcm9wPSJuYW3FRHF1aXJlZCA6cnVsZXM9Ilt7yRQ6IHRydWUsIG1lc3NhZ2U6ICfor7floavlhpnGSycgfV3Hcsd0aW5wdXQgY2xhc3M9IskRLXRleHQiIHYt5QDS8wDMLuYAjXBsYWNlaG9sZGVyPSLor7fovpPlhaXGbCIgdHlwZT0ixksvxnY8L+0A6fQA/cUTICA65wEEJ+iBlOezu+aWueW8jycraW5kZXgiyCTmARkndGVscy4nICsgxR4gKyAnLuUBhSfIKegBIcg4/wE77gE78wCB5AFHyExrZXk9IuQAuS5rZXnIFnbkANA9IijEGCzFMykgaW4g8gFI5AC7xjX/AZf0AZfFduUA6iIgOu0BjOQAvuYBjfQBP/8Bmu8BmmNlbGztAJ1idXR0b24gc2l6ZT0ic21hbGwiIHN0eWxlPSJtYXJnaW4tcmlnaHQ6IDEwcHgiIEBjbGlja+4CRW1ldGhvZHMuYWRkIj7mt7vliqDmAIHGXN9v32/ab3JlbW92ZSI+5Yig6Zmk33LnASZwcmltYXJ53XTtAJz8AIFzdWJtaXToAiYgID7mj5Dkuu0Aiscc/wED3mdyZXNldCI+6YeN572u5o+Q56S654q25oCBzGnsAfjoAeTqAgY+Cjwv6gTnPHNjcmlwdCBsYW5nPSJ0c+UERWltcG9ydCDkA0VmLCByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFJ2RlZmF1bHQge8V3c2V0dXAoKccOICBjb25zdOgDIOcFHCA9xFo8YW55PihudWxsKcRO0S3HKshJICDlA1k66QCQKMoaICDkBLc6ICcnLMsU5AODOiBuZXcgQXJyYXnNMCAga2V5OiAxzDAgIOUDc8RHyxZ9KckNfSksCskN5wGTOusAoSAg5gIH6wD/xgHuAP/mA9rEBmlkYXRlKCkudGhlbigoe+QAgGlkLCBlcnJvcnMgfTogYW55KSA9Ps9PICBpZiAoxS3QasQB5AFGb2xlLmxvZygnc3VjY2Vzcycs7AFX6QFxyAF9IGVsc2XfTOYAl1swXS7nBU3RR898xTHnARQhISfoANnSfs0Qfc0gfewBouUC//8BXucBXscr20vkBDLYTO8FyS5zcGxpY2Uo1x5sZW5ndGggLSAxLCAx2nNhZGTRcGxldOQCoknlBn092H/GYcxZ+QCqcHVzaO8C6ucC7ETEJG5vdygp7gL19gL38QGIyQzICn3IH3JldHVybusA2esAm8pr7gGmzkTEU307Cjwv5gSOPgo="},{default:t(()=>[g]),_:1}),u,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZm9ybQogICAgOm1vZGVsLXZhbHVlPSLEF0RhdGEixhxydWxlcz0ie25hbWU6IFt7xRbIAW1lc3NhZ2U6ICfEHyDoh7PlsJHkuKTkuKrlrZfnrKYnLM0wdmFsaWRhdG9yOiDEMUxlbmd0aFbIFcsrfV195gCAcmVmPSLkAIRGb3JtxBPkAL/rAMEtaXRlbSBsYWJlbD0i5aeT5ZCNIiBwcm9wPSLEYiIgcmVxdWlyZWTpAMpbe8kUOiB0cnVlLOsAx+ivt+Whq+WGmcZLJyB9XSLGcsd0aW5wdXTHESAgY2xhc3M9IskZLXRleHTmALnEAUBibHVyxB9zdG9tQmx1cucA62Uo5QEwJynKK3Yt5QGF6gF/LsQiyiBwbGFjZWhvbGRlcj0i6K+36L6T5YWl5gCm77yMxGkg5LqL5Lu25qCh6aqMyjp0eXBlPSLsAJkv5wFEL+0BRfQBWccx6AFfubTpvoTIRuYBZWFn6QCl6AFWxw/pAXDHEP8Bd+cBd8VjJyB96AI4e+wCNOYBSekCMMxC5b+F6aG75gEW5pWw5a2X3kVSdWxlUHJvcN9NyU0sIHJlZzogL15cZCskL8xbcmVnZXjEGihcZHsxLDJ9fDFcZHsyfXwyMDApJC/YWDAtMjAw5Yy66Ze0JyB9xU5d5gFK/wJw+wJw8gJF6wGf+QJE5QFz77yM5gCe5gDw5LiU6wCh/wJNxAf/Ak3yAk3ogZTns7vnlLXor53uAlN0ZWz/AlP/AlPuAlPMafgCFGFzeW5j9QILxjjmoLzlvI/kuI3mraPnoa7/AbH/AbH9AbHrAP34AbHsANHkAbe8guatpeYD9uwArv8BtcQH/wG17QVbnLDlnYDoBVthZGRyZXNz/wVe+wPnxU73BV73ATX0At7oAIf3AtrFZiLsAQD/APp1Yi1jZWxs7QCUYnV0dG9ux0VwcmltYXJ5IiBzaXplPSJzbWFsbCIgc3R5bGU9Im1hcmdpbi1yaWdodDogMTBweCIgQGNsaWNrPSJzdWJtaXQiPuaPkOS6pMZ/xlrUbc1eyENyZXNldCI+6YeN572u5o+Q56S654q25oCB0k7GEugAy+oA7T4KPC/qCAg8c2NyaXB0IGxhbmc9InRz5QGMaW1wb3J05QNbZuQE9WFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFJ2RlZmF1bHQg5ggXc2V0dXAoKccOICBjb25zdCDoAa8gPclPKMgiIOUICDogJ+sIKeYCLMsRdGVszyLmAfjEFccUfSnkAJXKdOUBLCA9ICgpID0+6QCQICDoCEou5QjtLsUnKMk8fc5F5wQhZcRI5AImOiBhbnnPUcQqb2xlLmxvZ8Uk2EzIeeUBBWY8YW55PihudWxsKTsKzSjmAij/ALp1ZcQG5ghKKS50aGVuKCjnBNAsIGVycm9ycyB99ACuICBpZiAoxSnqAabyAMknc3VjY2Vzcycs6QG96QDYxAF9IGVsc2XcQeUAhecAzSEhJ+gAls5GyQzqAb7pATYvLyDlpLHljrvnhKbngrnmBN/tASryCVbkATbkBKA6IHN0cmluZ/8BQsc2xTP/AUb/AUb3AQX/AUb/AUb/AUbJRv8BRuWHveaVsPkBQOkG9eQBPXZhbPcBPOQA8ecI/C50ZXN0xCsp7gD9cmV0dXJuIFByb21pc+UDW29sdmXqA131APHRNWplY3Qo9AmBzEj2A2P3CdnvANks5QIIOiDkAgpJdGXFMFdpdGhvdXTJM/MA/SjENj8ucmVnIGFzIFJlZ0V45AI1/wEL/wEL3jX/AQv8AQvzDV3/AeDmAtEubMU1ID4gMv8A0v8A0tY15wDSkI3np7DpDibku6XkuIr9ANUvL8hFIOwI7u0A8+4Jw/4A7sYydGVsUmVnID0gL140MDAoLT8pWzAtOV17N30kfF7kC8QxMMQKMMYWMiwzfS3HISw4fSQv6gCw5wDobmV36ACnKCjnASLkB0LkAPbxBEJzaG93VG9hc3QubG9hZGluZygn5qih5ouf5gDh6aqM6K+B5LitLi4u7AEb5QdkVGltZW91dCjwBiPOWGhpZO0BocQB5AHnIeQCsM825ADE5gGd9Qpm7gCC6QHsxU7mAUb4AwrNW8tS8AtR1mHSSuYCdyfRMMsOfSwgMTAwMMsi8wUZ5wGz8gYd6ghl6AW0yhLoBjLKEvAOkc8Z8g5lySHzA6LKHe8Mj89W7AbzyhzmBibKEOUI2+4A9+QBJn07Cjwv5gn4Pgo="},{default:t(()=>[b]),_:1}),y,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZm9ybcQNyw8taXRlbSBsYWJlbD0i5byA5YWzIsYjxyVzd2l0Y2ggdi1tb2TEJMQ1RGF0YTIuxhoiPjwvyijHXsUSyV/dc6SN6YCJ5qGGznZjaGVja2JveNR4yBwiPsk9xnHIGf8AhfMAhY2VxEiMiemSru4AiHJhZGlvLWdyb3VwIGRpcmVjdGlvbj0iaG9yaXpvbnRhbCL0AKLFNslJzEvIcjEiPumAiemhuTHmAKfFHdUxZGlzYWJsZWTIOjLIOjLfOsgxM8gxM9MxyxPmAOb/ATzyATzor4TliO8BvnJhdGX2ARh0ZSIgL99k0mTmraXov5vlmajOZ2lucHV0LW51bWJlctRvxhrfcdZxu5HlnZfObnJhbmdlIGhpZGRlbi10YWfUcsUk6AMSxQ3fe9N7lofku7bkuIrkvKDuAIF1cGxvYWRlcscUICB1cmw9Imh0dHA6Ly/mnI3liqHlnLDlnYAiySJhY2NlcHQ9ImltYWdlLyrKGecAvDpmaWxlLWxpc3TsAMZkZWZhdWx0RmlsZUxpc3TKNm1heGltdW3kAlTKFHVsdGlwbGXHEe4CWegAs/8BBvMDkuYAyfIB78l4Y2xhc3M9IskZLXRleOsAq/MBnWFkZHJlc3PKJEBjbGljaz0ixxlNb2R1bGUubWV0aG9kcy5zaG93yixyZWFkb25seckRcGxhY2Vob2xkZXLkAwW35ARBi6nwAYF0eXBlPSLsAJvnAo0gIDwhLS0g5AC/x38gLS3JG8sX8QGzdmlzaWJsZfAAt3N0YXRl7wC1OnByb3ZpbmPXLcgeyzFjaXR51i3EGswpb3VudHLYLMYdyy90b3du1izEGsopQGNo5AM20CvoAZRvbkPFIMoxY3VzdG9t6AEtLXRpdOQBG+kBkOaJgOWcqOQBloy6yDXnA5/HM/kCm8oTPgo8L+oHTDxzY3JpcHQgbGFuZz0idHPlAqVpbXBvcnQgeyByZWYs5AItY3RpdmUgfSBmcm9tICd2dWUnOwogIGV4xSfnA2Ege8V8c2V0dXAoKccOICBjb25zdCDpArggPclQKMgjICDmB286IGZhbHNlLMkX6AcD0RnlBeM6IDDKEuYFHs0T5AWgOiAzzBFuZ8QSyyTnATc6ICcnyhXvBDI6IFvJGyDpANjHd2FtZTogJ+YE5zEucG5ny0jEAXVybDogJ+QE13M6Ly9vc3MubmV0Y29u5ATKcy5jbi93ZWJzaXRlL2Fzc2V0cy9tZWRpYS93YXAvYmxvZy13YXAtYmctMS5qcNBa5AJxdeQAunN1Y2Nlc3PPH21lc3Nh5ADvJ+YFfuaIkOWKn88l5APROiAn5QVRJ8safcwn+wDyMv8A8v8A8v8A8vkA8uYFiWnRe/AA9OS4rS4uLv8A9MgBfckMXccKfSk7Cu0Cxu0Dx/cCyuQEBzrtATTkBMbxAsIgIOgEsO4CXyAgeyBpZDogMSzoAWrljJfkuqwn7gGUyCcyyie5v+ilv9cnM8kn5rGf2ic0yk6bm+W3nSfrARUgIF3MM+QFQfYAujfKbJyd6Ziz5Yy61284ym+0h+aWh9oqOcpUmIzludtUNskq55+z5pmv5bGxxi35AMnmBd72AMzqATjlhavph4zluoTooZfpgZPXfuoAqOWMl+iLkdcn6wFouLjokKXkuaH7AKLkBlQ6IFvoApbtA57nBkvyAnHrBYLGAfgHYCA9ICHYHOQF5coBaWYgKNgq0G4g6gXy6AiqID0gJ+UGN8oB7ADz7QEp6AcaKHvnBxMsIG5leHQsIHZhbHVlIH06IGFuedB00nIrPcYxLuQBbs575gPRxBggPfQBHFvEcF3ONOQBAcQyLmxlbmd0aCA8IDHyAPjTTOgBaOUEA/sBAskMyArkBIHGCnJldHVybiB76gDlLM5qIH3GK8Q7fTsKPC/mB9g+Cg=="},{default:t(()=>[f]),_:1}),A])}}});export{F as default,B as excerpt,I as frontmatter};
