import{d as r,r as p,b as h,k as t,w as n,aq as e,e as a,o as i,l as s}from"./style_icon.js";const o={class:"markdown-body"},j=e(`<h1>Form</h1><h3>Intro</h3><p>It is used for data entry and verification. It supports input box, radio box, check box, file upload and other types.</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Form</span>, <span class="hljs-title class_">FormItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Form</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">FormItem</span>);
</code></pre><h3>Basic Usage</h3>`,6),d=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Name"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"basicData.name"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-input-text"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Please enter your name"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Age"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"basicData.age"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-input-text"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Please enter age"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Tel"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"basicData.tel"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-input-text"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入联系电话"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Address"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"basicData.address"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-input-text"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Please enter address"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(" />")]),s(`
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
`)])],-1),m=a("h3",null,"Dynamic Form",-1),g=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form"),s(),a("span",{class:"hljs-attr"},":model-value"),s("="),a("span",{class:"hljs-string"},'"dynamicForm.state"'),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"dynamicRefForm"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Name"'),s(),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"name"'),s(),a("span",{class:"hljs-attr"},"required"),s(),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[{ required: true, message: 'Please enter your name' }]"`),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(`
        `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-input-text"'),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"dynamicForm.state.name"'),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Please enter your name"'),s(`
        `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(`
      `),a("span",{class:"hljs-attr"},":label"),s("="),a("span",{class:"hljs-string"},`"'Tel'+index"`),s(`
      `),a("span",{class:"hljs-attr"},":prop"),s("="),a("span",{class:"hljs-string"},`"'tels.' + index + '.value'"`),s(`
      `),a("span",{class:"hljs-attr"},"required"),s(`
      `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[{ required: true, message: 'Please enter tel'+index }]"`),s(`
      `),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"item.key"'),s(`
      `),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"(item,index) in dynamicForm.state.tels"'),s(`
    >`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-input-text"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"item.value"'),s(),a("span",{class:"hljs-attr"},":placeholder"),s("="),a("span",{class:"hljs-string"},`"'Please enter tel'+index"`),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-right: 10px"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"dynamicForm.methods.add"'),s(">")]),s("Add"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-right: 10px"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"dynamicForm.methods.remove"'),s(">")]),s("Remove"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-right: 10px"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"dynamicForm.methods.submit"'),s(`
        >`)]),s(`Submit</cub-button
      >
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"dynamicForm.methods.reset"'),s(">")]),s("Reset prompt status"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
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
                showToast.`),a("span",{class:"hljs-title function_"},"warn"),s("(errors["),a("span",{class:"hljs-number"},"0"),s("]."),a("span",{class:"hljs-property"},"message"),s(`);
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
`)])],-1),u=e('<h3>Validate Form</h3><p><code class="">4.1.0</code> adds Promise-based custom error message function:</p><p><code class="">validator</code> is a function, and the return value type is <code class="">boolean | Promise</code>. If <code class="">false</code> is returned or the Promise of <code class="">resolve(false)</code> is triggered, it means that the verification fails, and the prompt message set by <code class="">message</code> will be displayed. Returns the Promise that if <code class="">reject(error)</code> is triggered, the <code class="">error</code> is reserved as the prompt text, with a higher priority than <code class="">message</code>.</p>',3),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form"),s(`
    `),a("span",{class:"hljs-attr"},":model-value"),s("="),a("span",{class:"hljs-string"},'"formData"'),s(`
    `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"{name: [{
            message: 'Name should be at least two characters',
            validator: nameLengthValidator
          }]}"`),s(`
    `),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"ruleForm"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Name"'),s(),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"name"'),s(),a("span",{class:"hljs-attr"},"required"),s(),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[{ required: true, message: 'Please enter your name' }]"`),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(`
        `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-input-text"'),s(`
        @`),a("span",{class:"hljs-attr"},"blur"),s("="),a("span",{class:"hljs-string"},`"customBlurValidate('name')"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.name"'),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Please enter , blur event validate"'),s(`
        `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(`
      `),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Age"'),s(`
      `),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"age"'),s(`
      `),a("span",{class:"hljs-attr"},"required"),s(`
      `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[
      { required: true, message: 'Please enter age' },
      { validator: customValidator, message: 'You must enter a number' },
      { validator: customRulePropValidator, message: 'You must enter a number', reg: /^\\d+$/ },
      { regex: /^(\\d{1,2}|1\\d{2}|200)$/, message: 'The range 0-200 must be entered' }
    ]"`),s(`
    >`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(`
        `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-input-text"'),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.age"'),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Please enter the age, which must be numeric and in the range of 0-200"'),s(`
        `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(`
      `),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Tel"'),s(`
      `),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"tel"'),s(`
      `),a("span",{class:"hljs-attr"},"required"),s(`
      `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[
      { required: true, message: 'Please enter tel' },
      { validator: asyncValidator, message: 'Tel format is incorrect' }
    ]"`),s(`
    >`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-input-text"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.tel"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Async check tel format"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(`
      `),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Address"'),s(`
      `),a("span",{class:"hljs-attr"},"prop"),s("="),a("span",{class:"hljs-string"},'"address"'),s(`
      `),a("span",{class:"hljs-attr"},"required"),s(`
      `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[{ required: true, message: 'Please enter address' }]"`),s(`
    >`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-input-text"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.address"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Please enter address"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"text"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-right: 10px"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"submit"'),s(">")]),s("Submit"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"reset"'),s(">")]),s("Reset prompt status"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" formData = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"age"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"tel"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });
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
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"reset"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        ruleForm.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"reset"),s(`();
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"customBlurValidate"),s(" = ("),a("span",{class:"hljs-params"},"prop: string"),s(`) => {
        ruleForm.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"validate"),s("(prop)."),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"{ valid, errors }: any"),s(") =>")]),s(` {
          `),a("span",{class:"hljs-keyword"},"if"),s(` (valid) {
            `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'success'"),s(`, formData);
          } `),a("span",{class:"hljs-keyword"},"else"),s(` {
            `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'error submit!!'"),s(`, errors);
          }
        });
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"customValidator"),s(" = ("),a("span",{class:"hljs-params"},"val: string"),s(") => "),a("span",{class:"hljs-regexp"},"/^\\d+$/"),s("."),a("span",{class:"hljs-title function_"},"test"),s(`(val);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"customRulePropValidator"),s(" = ("),a("span",{class:"hljs-params"},"val: string, rule: FormItemRuleWithoutValidator"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"return"),s(" (rule?."),a("span",{class:"hljs-property"},"reg"),s(),a("span",{class:"hljs-keyword"},"as"),s(),a("span",{class:"hljs-title class_"},"RegExp"),s(")."),a("span",{class:"hljs-title function_"},"test"),s(`(val);
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"nameLengthValidator"),s(" = ("),a("span",{class:"hljs-params"},"val: string"),s(") => val?."),a("span",{class:"hljs-property"},"length"),s(" >= "),a("span",{class:"hljs-number"},"2"),s(`;
      `),a("span",{class:"hljs-comment"},"// Promise async validator"),s(`
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"asyncValidator"),s(" = ("),a("span",{class:"hljs-params"},"val: string"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Promise"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"resolve"),s(") =>")]),s(` {
          showToast.`),a("span",{class:"hljs-title function_"},"loading"),s("("),a("span",{class:"hljs-string"},"'Simulating asynchronous verification'"),s(`);
          `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
            showToast.`),a("span",{class:"hljs-title function_"},"hide"),s(`();
            `),a("span",{class:"hljs-title function_"},"resolve"),s("("),a("span",{class:"hljs-regexp"},"/^400(-?)[0-9]{7}$|^1\\d{10}$|^0[0-9]{2,3}-[0-9]{7,8}$/"),s("."),a("span",{class:"hljs-title function_"},"test"),s(`(val));
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
`)])],-1),f=a("h3",null,"Form Type",-1),y=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"switch"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-switch"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData2.switch"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-switch"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"checkbox"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData2.checkbox"'),s(">")]),s("checkbox"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-checkbox"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"radio"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio-group"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"horizontal"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData2.radio"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("Option 1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"disabled"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("Option 2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-radio"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s("Option 3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-radio-group"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Rate"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData2.rate"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Inputnumber"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input-number"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData2.number"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Range"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-range"),s(),a("span",{class:"hljs-attr"},"hidden-tag"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData2.range"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-range"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Upload file"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-uploader"),s(`
        `),a("span",{class:"hljs-attr"},"url"),s("="),a("span",{class:"hljs-string"},'"http://apiurl"'),s(`
        `),a("span",{class:"hljs-attr"},"accept"),s("="),a("span",{class:"hljs-string"},'"image/*"'),s(`
        `),a("span",{class:"hljs-attr"},"v-model:file-list"),s("="),a("span",{class:"hljs-string"},'"formData2.defaultFileList"'),s(`
        `),a("span",{class:"hljs-attr"},"maximum"),s("="),a("span",{class:"hljs-string"},'"3"'),s(`
        `),a("span",{class:"hljs-attr"},"multiple"),s(`
      >`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-uploader"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-form-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-form-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Address"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-input"),s(`
        `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-input-text"'),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData2.address"'),s(`
        @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"addressModule.methods.show"'),s(`
        `),a("span",{class:"hljs-attr"},"readonly"),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Please select an address"'),s(`
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
        `),a("span",{class:"hljs-attr"},"custom-address-title"),s("="),a("span",{class:"hljs-string"},'"Please select your region"'),s(`
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
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'file 1.png'"),s(`,
            `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg'"),s(`,
            `),a("span",{class:"hljs-attr"},"status"),s(": "),a("span",{class:"hljs-string"},"'success'"),s(`,
            `),a("span",{class:"hljs-attr"},"message"),s(": "),a("span",{class:"hljs-string"},"'Upload successful'"),s(`,
            `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'image'"),s(`
          },
          {
            `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'file 2.png'"),s(`,
            `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg'"),s(`,
            `),a("span",{class:"hljs-attr"},"status"),s(": "),a("span",{class:"hljs-string"},"'uploading'"),s(`,
            `),a("span",{class:"hljs-attr"},"message"),s(": "),a("span",{class:"hljs-string"},"'Uploading...'"),s(`,
            `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'image'"),s(`
          }
        ]
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(" addressModule = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"state"),s(`: {
          `),a("span",{class:"hljs-attr"},"show"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
          `),a("span",{class:"hljs-attr"},"province"),s(`: [
            { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Beijing'"),s(` },
            { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Guangxi'"),s(` },
            { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Jiangxi'"),s(` },
            { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Sichuan'"),s(` }
          ],
          `),a("span",{class:"hljs-attr"},"city"),s(`: [
            { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"7"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'C1'"),s(` },
            { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"8"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'C2'"),s(` },
            { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"9"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'C3'"),s(` },
            { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"6"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'C4'"),s(` }
          ],
          `),a("span",{class:"hljs-attr"},"country"),s(`: [
            { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'D5'"),s(` },
            { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"9"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'D6'"),s(` },
            { `),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(", "),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'D7'"),s(` }
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
`)])],-1),A=e(`<h2>API</h2><h3>Form Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>model-value</td><td>Form data object (required when using form verification)</td><td>object</td><td></td></tr><tr><td>rules</td><td>Unified configuration FormItem attr rules</td><td>{ prop: FormItemRule[] }</td><td><code class="">{}</code></td></tr></tbody></table><h3>Form Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>validate</td><td>Triggered after any single table item fails to be verified</td><td>The <code class="">prop</code> value of the form item to be verified, whether the verification is passed, and the error message (if any)</td></tr></tbody></table><h3>FormItem Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>required</td><td>Whether to display the red asterisk next to the label of the required field</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>prop</td><td>The v-model field of the form field is required when the form verification function is used</td><td>string</td><td>-</td></tr><tr><td>rules</td><td>Define validation rules</td><td>FormItemRule []</td><td>[]</td></tr><tr><td>label-width</td><td>The width of the form item label. The default unit is <code class="">px</code></td><td>number | string</td><td><code class="">90</code></td></tr><tr><td>label-align</td><td>Form item label alignment. The optional values are <code class="">center</code> <code class="">right</code></td><td>string</td><td><code class="">left</code></td></tr><tr><td>body-align</td><td>Default Solt box alignment. The optional values are <code class="">center</code> <code class="">right</code></td><td>string</td><td><code class="">left</code></td></tr><tr><td>error-message-align</td><td>Error prompt text alignment. The optional values are <code class="">center</code> and <code class="">right</code></td><td>string</td><td><code class="">left</code></td></tr><tr><td>show-error-line</td><td>Whether to mark the input box in red when the verification fails</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>show-error-message</td><td>Whether to display the error prompt under the input box when the verification fails</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>FormItemRule data structure</h3><p>Use the <code class="">rules</code> attribute of FormItem to define verification rules. The optional attributes are as follows:</p><table><thead><tr><th>Attribute</th><th>Default</th><th>Type</th></tr></thead><tbody><tr><td>required</td><td>Is it a required field</td><td>boolean</td></tr><tr><td>message</td><td>Error prompt copy</td><td>string</td></tr><tr><td>validator</td><td>Verification by function</td><td>(value:string,rule?:FormItemRule) =&gt; boolean | Promise</td></tr><tr><td>regex</td><td>Verification by regular expression</td><td>RegExp</td></tr></tbody></table><h3>FormItem Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Default slot</td></tr><tr><td>label</td><td>Custom <code class="">label</code> slot</td></tr></tbody></table><pre><code class="language-html">use slot
<span class="hljs-tag">&lt;<span class="hljs-name">cub-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:label</span>&gt;</span>slot label<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">cub-form-item</span>&gt;</span>
</code></pre><h3>Methods</h3><p>Use <a href="https://vuejs.org/guide/essentials/template-refs.html#template-refs">ref</a> to get Form instance and call instance methods.</p><table><thead><tr><th>Name</th><th>Description</th><th>Arguments</th><th>Return value</th></tr></thead><tbody><tr><td>submit</td><td>Method of submitting form for verification</td><td>-</td><td>-</td></tr><tr><td>reset</td><td>Clear verification results</td><td>-</td><td>-</td></tr><tr><td>validate</td><td>Active trigger verification is used to trigger when the user customizes the scene, such as blur and change events</td><td>Same as FormItem prop value</td><td>-</td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-form-item-error-line-color</td><td><em>var(--cub-required-color)</em></td></tr><tr><td>--cub-form-item-required-color</td><td><em>var(--cub-required-color)</em></td></tr><tr><td>--cub-form-item-error-message-color</td><td><em>var(--cub-required-color)</em></td></tr><tr><td>--cub-form-item-label-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-form-item-label-width</td><td><em>90px</em></td></tr><tr><td>--cub-form-item-label-margin-right</td><td><em>10px</em></td></tr><tr><td>--cub-form-item-label-text-align</td><td><em>left</em></td></tr><tr><td>--cub-form-item-required-margin-right</td><td><em>4px</em></td></tr><tr><td>--cub-form-item-body-font-size</td><td><em>14px</em></td></tr><tr><td>--cub-form-item-body-slots-text-align</td><td><em>left</em></td></tr><tr><td>--cub-form-item-body-input-text-align</td><td><em>left</em></td></tr><tr><td>--cub-form-item-tip-font-size</td><td><em>10px</em></td></tr><tr><td>--cub-form-item-tip-text-align</td><td><em>left</em></td></tr></tbody></table>`,20),k={},B="",F=r({__name:"doc.en-US",setup(v,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(w,I)=>{const l=p("demo-block");return i(),h("div",o,[j,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZm9ybcQNyw8taXRlbSBsYWJlbD0iTmFtZSLGIccjaW5wdXQgdi1tb2TEIWJhc2ljRGF0YS5uxCsgY2xhc3M9IskqLXRleHQiIHBsYWNlaG9sZGVyPSJQbGVhc2UgZW50ZXIgeW91ciDGPHR5cGU9IsYxL8Z1PC/tAJf8AKtBZ/8AqukAqmFn/wCp9QCpxTb/AKP/AKNUZWz/AKPoAKN0ZWz/AKPnAKPor7fovpPlhaXogZTns7vnlLXor53/AKj/AKg9IkFkZHJlc3P/AKzpAU/HLv8AsPQBU8g6/wCv/wCv5aSH5rOo7gCuxExhcmVh9wEuxzPfech5yhM+Cjwv6gNFPHNjcmlwdCBsYW5nPSJ05gExaW1wb3J0IHsgcmVmLCByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFJ2RlZmF1bHQge8V8c2V0dXAoKccOICBjb25zdCDpAWsgPclQKMgjIOUDPTogJycsyRJhZ88RdGVszyLmAXrEFccUfSnkAJbEAXJldHVybiB7y3h9xhx9CiDECzwv5gD4Pgo="},{default:n(()=>[d]),_:1}),m,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZm9ybSA6bW9kZWwtdmFsdWU9ImR5bmFtaWNGb3JtLnN0YXRlIiByZWbJGFJlZsQbIsRDy0UtaXRlbSBsYWJlbD0iTmFtZSIgcHJvcD0ibsUMcmVxdWlyZWQgOnJ1bGVzPSJbe8kUOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGVudGVyIHlvdXIgxEYnIH1dx3fHeWlucHV0xxEgIGNsYXNzPSLJGS10ZXh0Iskfdi3lAOfzAOEuxF7KKXBsYWNlaG9sZGVyPSL2AIvKLXR5cGU9IsxqL+cBGi/tARv0AS/HMTrnATYnVGVsJytpbmRleMhMOuYBRCd0ZWxzLicgKyDFHiArICcu5QGuJ8gp6AFMyDj/AWbyAWZ0yXzkAWbIR2tleT0i5ACrLmtlecgWduQAwj0iKMQYLMUzKSBpbiDyAVfkALbGNfIBtvcBruoBpsV25QDlIiA67QGT+AC5IuwBjf8Bh3ViLWNlbGztAJhidXR0b24gc2l6ZT0ic21hbGwiIHN0eWxlPSJtYXJnaW4tcmlnaHQ6IDEwcHgiIEBjbGlja+4CT21ldGhvZHMuYWRkIj5BZGTGfsZZ32zfbNpscmVtb3ZlIj5SxQjfcucBI3ByaW1hcnnddO0AnPwAgXN1Ym1p6wNpPlPFEewAiscc/wED3mdyZXNldOQA53NldOQEXG1wdCDkAmh1c8xq7AH26AHi6gIEPgo8L+oFBDxzY3JpcHQgbGFuZz0idHPlBF1pbXBvcnQg5AM5ZiwgcmVhY3RpdmUgfSBmcm9tICd2dWUnO8wnc2hvd1RvYXN0ySNAY3VidWnEdHVpzCzNGS9kaXN0L3BhY2thZ2VzL3TEQi/lAY7FM2V4xTNkZWZhdWx0IHvlANZzZXR1cCgpxw4gIGNvbnN06AN45wWYID3kALk8YW55PihudWxsKcRO0S3HKshJIOUBSWU66QDvKMoaIOUE8TogJycsyxTkA9s6IG5ldyBBcnJhec0wICBrZXk6IDHMMCAg5QPLxEfLFn0pyQ19KSwKyQ3nAfM66wChICDmAmfrAP/GAe4A/+YEMsQGaWRhdGUoKS50aGVuKCh75ACAaWQsIGVycm9ycyB9OiBhbnkpID0+z08gIGlmICjFLdBqxAHkAUZvbGUubG9nKCdzdWNjZXNzJyzsAVfpAXHIAX0gZWxzZdNM6QI6Lndhcm4o5gCaWzBdLucFo9FKz3/FMecBFyEhJ+gA3NE3fc0Qfc0gfewBpeUDYv8BYecBYccr20vkBI3YTO8GJC5zcGxpY2Uo1x5sZW5ndGggLSAxLCAx2nNhZGTRcGxldOQCpUnlBtg92H/GYcxZ+QCqcHVzaO8C7ecC70TEJG5vdygp7gL49gL68QGIyQzICn3IH3JldHVybusA2esAm8pr7gGmzkTEU307Cjwv5gTwPgo="},{default:n(()=>[g]),_:1}),u,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZm9ybQogICAgOm1vZGVsLXZhbHVlPSLEF0RhdGEixhxydWxlcz0ie25hbWU6IFt7xRbIAW1lc3NhZ2U6ICdOYW1lIHNob3VsZCBiZSBhdCBsZWFzdCB0d28gY2hhcmFjdGVycycszT92YWxpZGF0b3I6IMRfTGVuZ3RoVsgVyyt9XX3mAI9yZWY9IuQAk0Zvcm3EE+QAzusA0C1pdGVtIGxhYmVsPSLkAJQiIHByb3A9IsRgIiByZXF1aXJlZOkA11t7yRQ6IHRydWUs6wDUUOQAw2UgZW50ZXIgeW91cuUApicgfV0ixnfHeWlucHV0xxEgIGNsYXNzPSLJGS10ZXh05gC+xAFAYmx1csQfc3RvbUJsdXLnAPBlKCfFXinKK3Yt5QGZ6gGTLsQiyiBwbGFjZWhvbGRlcj0i7QCtLCDEZiBldmVudOgBZss5dHlwZT0i7ACYL+cBSC/tAUn0AV3HMecBY0FnyVfmAWhhyhHoAVnHD+kBc8cQ/wF66gDNYWfkAXToAjp77AI25gFG6QIyzENZb3UgbXVzdMhFIG51bWJlct5KUnVsZVByb3DfUs5SLCByZWc6IC9eXGQrJC/MYHJlZ2V4xBooXGR7MSwyfXwxXGR7Mn18MjAwKSQvzF1UaGUgcmFuZ2UgMC0yMDDGaWLnAQNlZCcgfcVWXeYBXf8Cf/sCf/ICVOsBsvwCU3RoZeQBiiwgd2hpY2jpAKBudW1lcmljIGFuZCBpbsUm5gDHb2bmAMr/AnbEB/8CdvICdlRlbO4CdnTKEf8Cdv8CdusA8GVs+AIsYXN5bmP1AiNUZWwg5AC0YXQgaXMgaW5jb3JyZWN0/wG+dXT3AbbzAa7kAOruAaZB5ACOIGNoZWNr5AC15wCAIuwBb/8BafsD32RkcmVzc+8D484V+AFx/wFq6wPgxlDlBVj/ASD/ASDkAs7GTe8BJNRw/wEi8AEiY2VsbO0AmWJ1dHRvbsdFcHJpbWFyeSIgc2l6ZT0ic21hbGwiIHN0eWxlPSJtYXJnaW4tcmlnaHQ6IDEwcHgiIEBjbGljaz0ic3VibWl0Ij5TxQjGf8Za1G3NXshDcmVzZXQiPlLEB+QBo21wdCBzdGF0dXPST8YS6ADM6gDuPgo8L+oIITxzY3JpcHQgbGFuZz0idHPlBu9pbXBvcnTlA0Fm5ATzYWN0aXZlIH0gZnJvbSAndnVlJzvMJ3Nob3dUb+QIBMgjQGN1YnVpxHR1acwszRkvZGlzdC9wYWNrYWdlcy90xEIv5QFJxTNleMUzZGVmYXVsdCDmCI9zZXR1cCgpxw4gIGNvbnN05QMJ5AIUID3pAK4oyCIg5QfLOiAn6wiS5gKbyxF0ZWzPIuYCOsQVxxR9KeQAlcp06AdsID0gKOQCQTogYW55KSA9PukAnMYqb2xlLmxvZ8UkyUN9zkzoCOflAMBmPGFueT4obnVsbCk7Cs0o5gJDxHLPachBLuUJ2sQG5ghpKS50aGVuKCjnBNUsIGVycm9ycyB99ACuICBpZiAoxSnqAWHyAMknc3VjY+QDxizpAXjpANjEAX0gZWxzZdxB5QCF5wDNISEn6ACWzkbJDOoBefABNuUDB/8BDWUuxScozEXNRvIJn8RT5AUAOiBzdHJpbmfeX+kBbMQz/wFw/wFwygH/AXD/AXD/AXD/AXDtAXDzASvpBw/kASh2YWztASfnCRsudGVzdMQd7wM19wl8z0os5QFkOiDkAWZJdGXFMFdpdGhvdXTJM/ABlWV0dXJuICjEOT8ucmVnIGFzIFJlZ0V45AGU8ACN7wJJ8wyS9ADcdmFsPy5sxSggPj0gMshFLy8gUHJvbWlzZeYIMOoIQc1m7ghM1GHxAM9uZXfIWygocmVzb2x2Zc8qIOoFfi5sb2FkaW5nKCdTaW11bGF0aW7kAQd5bmNocm9ub3VzIHZlcmlmaWNhdGlvbiftAf9zZXRUaW1lb3V0KPADT85kaGlkZeoDTcYB5wCaKC9eNDAwKC0/KVswLTldezd9JHxe5AsHMTDECjDGFjIsM30txyEsOH3sAizNV30sIDEwMDDLFPMECecBKPIDneoFyugDNMoS6AOyyhLwDF3PGfIMLMkh8wI7yh3vCj7PVuwEc8oc5gOmyhDlBL7uAPfkA6t9Owo8L+YHvD4K"},{default:n(()=>[b]),_:1}),f,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItZm9ybcQNyw8taXRlbSBsYWJlbD0ic3dpdGNoIsYjxyXGFCB2LW1vZMQkxDVEYXRhMi7ILjwvyijHXsUSyV/cc2NoZWNrYm94znXIFtR3yjLICsZvyA7/AIPyAINyYWRpb+4AgMUTLWdyb3VwIGRpcmVjdGlvbj0iaG9yaXpvbnRhbCL0AJrOScxLyGsxIj5PcMRMIDHmAKHFHtUyZGlzYWJsZWTIOzLJOzLfO8gyM8kyM9MyyxPmAOn/ATjyAThSYXRl8AE3dGX2ARl0ZSIgL99i0mJJbnB1dG51bWJlcs5pacQZLcYa1HHHNN9z1HNSYW5n8QDWbmdlIGhpZGRlbi10YWfUccUk6AMLxQ3fetJ6VXBsb2FkIGZpbO8AgHXFGWVyxxQgIHVybD0iaHR0cDovL2FwaXVybCLJHGFjY2VwdD0iaW1hZ2UvKsoZ5wC1OsRgLWxpc3TsAL9kZWZhdWx0RmlsZUxpc3TKNm1heGltdW3kAk3KFHVsdGlwbGXHEe4CUegArf8A//IA/0FkZHJlc3PzAejJeWNsYXNzPSLJGS10ZXjrAKzzAZdhx1XJJEBjbGljaz0ixxlNb2R1bGUubWV0aG9kcy5zaG93yixyZWFkb25seckRcGxhY2Vob2xkZXI9IlBsZWFzZSBzZWxlY3QgYW4g0Wx0eXBlPSLsAKTnAo8gIDwhLS0g5ADIxzUgLS3JG8sX8QG9dmlzaWJsZfAAwHN0YXRl7wC+OnByb3ZpbmPXLcgeyzFjaXR51i3EGswpb3VudHLYLMYdyy90b3du1izEGsopQGNo5AM50CvoAZ1vbkPFIMoxY3VzdG9t6AEtLXRpdOQBG+4BmXlvdXIgcmVnaW/JaucDpsc3+QKpyhM+Cjwv6gdMPHNjcmlwdCBsYW5nPSJ05gKyaW1wb3J0IHsgcmVmLOQCOmN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUn5wNvIHvFfHNldHVwKCnHDiAgY29uc3Qg6QLFID3JUCjIIyAg5gdvOiBmYWxzZSzJF+gHBdEZ5QXpOiAwyhLmBSTNE+QFqDogM8wRbmfEEssk5wE3OiAnJ8oV7wRAOiBbyRsg6QDYx3dhbWU6ICfkBIcgMS5wbmfLR8QBdXJsOiAn5ATeczovL29zcy5uZXRjb27kBNdzLmNuL3dlYnNpdGUvYXNzZXRzL21lZGlhL3dhcC9ibG9nLXdhcC1iZy0xLmpw0FrkAnR15AC5c3VjY2Vzc88fbWVzc2HkAO4n5wWKxydmdWzPKuQD2TogJ+UFYyfLGn3MJ/oA9jL/APb/APb/APb5APbmBZpp0XvwAPhpbmcuLi7/APPIAX3JDF3HCn0pOwrtAsntA873As3kBA467QEz5ATN8QLFICDoBLfuAmIgIHsgaWQ6IDEs6AFpQmVpauQA6+4BlMgoMskoR3Vhbmd4adcoM8koSmncKDTJKFNpY2h1YW4n6wEZICBdzDTkBUz2AL43yUZDMddpOMojMtcjOcojM9cjNsojNPwAquYFyvYAreoBG0Q112fqAIpENtcj6gE5RDf7AIrkBig6IFvoAmPtA2rnBh/yAj7rBVLGAfgHNCA9ICHYHOQFtcoBaWYgKNgq0G4g6gXC6AiHID0gJ+UGB8oB7ADz7QEi6AbuKHvnBucsIG5leHQsIHZhbHVlIH06IGFuedB00nIrPcYxLuQBZ8575gOexBggPfQBHFvEcF3ONOQBAcQyLmxlbmd0aCA8IDHyAPjTTOgBaOUD0PsBAskMyArkBE7GCnJldHVybiB76gDlLM5qIH3GK8Q7fTsKPC/mB6g+Cg=="},{default:n(()=>[y]),_:1}),A])}}});export{F as default,B as excerpt,k as frontmatter};
