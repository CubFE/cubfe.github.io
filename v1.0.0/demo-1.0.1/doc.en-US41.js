import{d as e,r,b as c,k as p,w as h,aq as t,o,e as a,l as s}from"./style_icon.js";const i={class:"markdown-body"},d=t(`<h1>Invoice</h1><h3>Intro</h3><p>Display the application invoice page.</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Invoice</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Invoice</span>);
</code></pre><h3>Basic Usage</h3>`,6),j=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-invoice"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(),a("span",{class:"hljs-attr"},":formValue"),s("="),a("span",{class:"hljs-string"},'"formValue"'),s(" @"),a("span",{class:"hljs-attr"},"onSubmit"),s("="),a("span",{class:"hljs-string"},'"submit"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-invoice"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-comment"},"// Promise 异步校验"),s(`
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"asyncValidator"),s(" = ("),a("span",{class:"hljs-params"},"val: string"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Promise"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"resolve"),s(") =>")]),s(` {
          showToast.`),a("span",{class:"hljs-title function_"},"loading"),s("("),a("span",{class:"hljs-string"},"'模拟异步验证中...'"),s(`);
          `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
            showToast.`),a("span",{class:"hljs-title function_"},"hide"),s(`();
            `),a("span",{class:"hljs-title function_"},"resolve"),s("("),a("span",{class:"hljs-regexp"},"/^400(-?)[0-9]{7}$|^1\\d{10}$|^0[0-9]{2,3}-[0-9]{7,8}$/"),s("."),a("span",{class:"hljs-title function_"},"test"),s(`(val));
          }, `),a("span",{class:"hljs-number"},"1000"),s(`);
        });
      };

      `),a("span",{class:"hljs-keyword"},"let"),s(),a("span",{class:"hljs-attr"},"data"),s(": any = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
        {
          `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'radio'"),s(`,
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'发票类型'"),s(`,

          `),a("span",{class:"hljs-attr"},"radioLabel"),s(`: [
            {
              `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'企业'"),s(`
            },
            {
              `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'个人或事业单位'"),s(`
            }
          ],
          `),a("span",{class:"hljs-attr"},"formItemProp"),s(": "),a("span",{class:"hljs-string"},"'type'"),s(`,
          `),a("span",{class:"hljs-attr"},"required"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'发票抬头'"),s(`,
          `),a("span",{class:"hljs-attr"},"placeholder"),s(": "),a("span",{class:"hljs-string"},"'请输入发票抬头'"),s(`,
          `),a("span",{class:"hljs-attr"},"formItemProp"),s(": "),a("span",{class:"hljs-string"},"'name'"),s(`,
          `),a("span",{class:"hljs-attr"},"rules"),s(": [{ "),a("span",{class:"hljs-attr"},"required"),s(": "),a("span",{class:"hljs-literal"},"true"),s(", "),a("span",{class:"hljs-attr"},"message"),s(": "),a("span",{class:"hljs-string"},"'请输入发票抬头'"),s(` }],
          `),a("span",{class:"hljs-attr"},"required"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'纳税人识别号'"),s(`,
          `),a("span",{class:"hljs-attr"},"placeholder"),s(": "),a("span",{class:"hljs-string"},"'请输入纳税人识别号'"),s(`,
          `),a("span",{class:"hljs-attr"},"formItemProp"),s(": "),a("span",{class:"hljs-string"},"'num'"),s(`,
          `),a("span",{class:"hljs-attr"},"rules"),s(": [{ "),a("span",{class:"hljs-attr"},"message"),s(": "),a("span",{class:"hljs-string"},"'请输入纳税人识别号'"),s(` }]
        },
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'注册地址'"),s(`,
          `),a("span",{class:"hljs-attr"},"placeholder"),s(": "),a("span",{class:"hljs-string"},"'请输入注册地址'"),s(`,
          `),a("span",{class:"hljs-attr"},"formItemProp"),s(": "),a("span",{class:"hljs-string"},"'adress'"),s(`,
          `),a("span",{class:"hljs-attr"},"rules"),s(": [{ "),a("span",{class:"hljs-attr"},"required"),s(": "),a("span",{class:"hljs-literal"},"true"),s(", "),a("span",{class:"hljs-attr"},"message"),s(": "),a("span",{class:"hljs-string"},"'请输入地址'"),s(` }],
          `),a("span",{class:"hljs-attr"},"required"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'注册电话'"),s(`,
          `),a("span",{class:"hljs-attr"},"placeholder"),s(": "),a("span",{class:"hljs-string"},"'请输入注册电话'"),s(`,
          `),a("span",{class:"hljs-attr"},"formItemProp"),s(": "),a("span",{class:"hljs-string"},"'tel'"),s(`,
          `),a("span",{class:"hljs-attr"},"rules"),s(`: [
            { `),a("span",{class:"hljs-attr"},"required"),s(": "),a("span",{class:"hljs-literal"},"true"),s(", "),a("span",{class:"hljs-attr"},"message"),s(": "),a("span",{class:"hljs-string"},"'请输入联系电话'"),s(` },
            { `),a("span",{class:"hljs-attr"},"validator"),s(": asyncValidator, "),a("span",{class:"hljs-attr"},"message"),s(": "),a("span",{class:"hljs-string"},"'电话格式不正确'"),s(` }
          ],
          `),a("span",{class:"hljs-attr"},"required"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'开户行'"),s(`,
          `),a("span",{class:"hljs-attr"},"placeholder"),s(": "),a("span",{class:"hljs-string"},"'请输入开户行'"),s(`,
          `),a("span",{class:"hljs-attr"},"formItemProp"),s(": "),a("span",{class:"hljs-string"},"'bank'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'银行账户'"),s(`,
          `),a("span",{class:"hljs-attr"},"placeholder"),s(": "),a("span",{class:"hljs-string"},"'请输入银行账户'"),s(`,
          `),a("span",{class:"hljs-attr"},"formItemProp"),s(": "),a("span",{class:"hljs-string"},"'account'"),s(`
        }
      ]);

      `),a("span",{class:"hljs-keyword"},"const"),s(" formValue = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'企业'"),s(`,
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"num"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"adress"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"tel"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"address"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"bank"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
        `),a("span",{class:"hljs-attr"},"account"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"submit"),s(" = ("),a("span",{class:"hljs-params"},"valid: boolean, errors: []"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"if"),s(` (valid) {
          `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'success'"),s(`, formValue);
        } `),a("span",{class:"hljs-keyword"},"else"),s(` {
          `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'error submit!!'"),s(`, errors);
        }
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        data,
        formValue,
        submit,
        asyncValidator
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),u=t('<h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>data</td><td>Invoice data</td><td>Array</td><td><code class="">[]</code></td></tr><tr><td>formValue</td><td>Form data object (required when using form verification)</td><td>object</td><td>-</td></tr><tr><td>submit</td><td>Whether to show the submit button</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>Data Structure of Data</h3><p>The optional attributes are as follows:</p><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>type</td><td>Type, eg <code class="">input</code>、<code class="">radio</code></td><td>string</td></tr><tr><td>label</td><td>Label</td><td>string</td></tr><tr><td>placeholder</td><td>Input placeholder</td><td>string</td></tr><tr><td>radio-label</td><td>Radio label</td><td>string</td></tr><tr><td>form-item-prop</td><td>The v-model field of the form field is required</td><td>string</td></tr><tr><td>rules</td><td>Selected rules，<a href="#/en-US/form">Refer to FormItem Rule data structure</a></td><td>Array</td></tr><tr><td>required</td><td>Is it a required field</td><td>boolean</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>on-submit</td><td>Method of submitting form for verification</td><td>Promise</td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-invoice-padding</td><td>_ 10px 10px 20px_</td></tr></tbody></table>',12),y={},A="",v=e({__name:"doc.en-US",setup(m,{expose:l}){return l({frontmatter:{},excerpt:void 0}),(g,b)=>{const n=r("demo-block");return o(),c("div",i,[d,p(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW52b2ljZSA6ZGF0YT0ixAYiIDpmb3JtVmFsdWU9IskLIiBAb25TdWJtaXQ9InPFCCI+IDwvy0Y+CjwvymI8c2NyaXB0IGxhbmc9InRzIsR1aW1wb3J0IHsgcmVmLCByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7zCdzaG93VG9hc3TJI0BjdWJ1acR3dWnMLM0ZL2Rpc3QvcGFja2FnZXMvdMRCL3N0eWzGX2V4xTNkZWZhdWx0IHsKICAgIHNldHVwKCnHDiAgLy8gUHJvbWlzZSDlvILmraXmoKHpqozHHmNvbnN0IGFzeW5jVmFsaWRhdG9yID0gKHZhbDogc3RyaW5nKSA9PslOICByZXR1cm4gbmV3yFgoKHJlc29sdmXPKiDqAPcubG9hZGluZygn5qih5ouf5gCK6aqM6K+B5LitLi4uJynkANLJOWV0VGltZW91dCgo0VbMWGhpZGUozTvkAKLlAI4oL140MDAoLT8pWzAtOV17N30kfF4xXGR7MTDECjDGFjIsM30txyEsOH0kLy50ZXN05AEAKc1XfSwgMTAwMMsUfckMfTsKxwpsZXQg5AJ9OiBhbnkgPeQCHyhbyTLsAMV0eXBlOiAncmFkaW8nLMsZbGFiZWw6ICflj5HnpajnsbvlnosnLMhhxAHFNEzGJ8pd0GHMTOS8geS4mifNHn3Mdds7uKrkurrmiJbkuovkuJrljZXkvY3PSssOXcxW5AN1SXRlbVByb3A6ICfkAPPtAOtyZXF1aXJlZDogdHJ1ZckZ6wCa7ACW7gEZ5oqs5aS0zU9wbGFjZWhvbGRlcjogJ+ivt+i+k+WFpdkw7wCfbmFt7wCfdWxlczogW+QD5uwAqSwgbWVzc2Fn5AHA1mYgfe0BCP8A6PcA6Oe6s+eojuS6uuivhuWIq+WPt/8A7uUAiN828AD0dW33APPzAOPTWyB9Xf8Az+kAz+azqOWGjOWcsOWdgP8AycVu2TDvAMNhZHJlc3P/Abn8AbnGYv8Bs/8A5O0A5OeUteivnf8A5OsA5NMw8AM6ZWz1AOHLEyDlBo3/AO6FpeiBlOezu8dy8QQEIHboBgQ67wYUzE3GPuagvOW8j+S4jeato+ehrif6BAf/AUz4A+e8gOaIt+ihjP8BSeYBxdUt7wFGYmFua+oEut9/6ZO26KGM6LSm5oj/A3jmAILZMPACr2Njb3VudOsAiMcKXSnpBkbmB5XpCLPlBkjmCGIo6gCr5wZB5wXbynLkBMc6ICfMEnVtzhHmAzPOFHTlAPbNJdMm5AFDzyfmANDEFccU5AcY7QDJ5glm5whWaWQ6IGJvb2xlYW4sIGVycm9y5ALJXe8H5Wlmxy3qCMjIUG9sZS5sb2coJ3N1Y2PlA/rqASrsB54gZWxzZdo+xXvnAJshISfoAIzMQscK6gfe5wj7ylTkB+vqAQvpAIfKE8ZgyhDuA1XKYchwfTsKPC/mCnE+Cg=="},{default:h(()=>[j]),_:1}),u])}}});export{v as default,A as excerpt,y as frontmatter};
