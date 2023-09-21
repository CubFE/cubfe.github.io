import{d as r,r as e,b as c,k as p,w as h,aq as l,o,e as a,l as s}from"./style_icon.js";const d={class:"markdown-body"},j=l(`<h1>Invoice 发票</h1><h3>介绍</h3><p>展示申请发票页面。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Invoice</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Invoice</span>);
</code></pre><h3>基础用法</h3>`,6),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-invoice"),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"data"'),s(),a("span",{class:"hljs-attr"},":formValue"),s("="),a("span",{class:"hljs-string"},'"formValue"'),s(" @"),a("span",{class:"hljs-attr"},"onSubmit"),s("="),a("span",{class:"hljs-string"},'"submit"'),s(">")]),s(),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-invoice"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-comment"},"// Promise 异步校验"),s(`
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"asyncValidator"),s(" = ("),a("span",{class:"hljs-params"},"val: string"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Promise"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"resolve"),s(") =>")]),s(` {
          `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'模拟异步验证中...'"),s(`);
          `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
            `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'验证完成'"),s(`);
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
`)])],-1),g=l('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>发票数据</td><td>Array</td><td>-</td></tr><tr><td>form-value</td><td>表单数据对象(使用表单校验时，<em>必填</em>)</td><td>object</td><td>-</td></tr><tr><td>submit</td><td>是否显示提交按钮</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>Data 数据结构</h3><p>可选属性如下:</p><table><thead><tr><th>键名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>type</td><td>类型，可选值有 <code class="">input</code>、<code class="">radio</code></td><td>string</td></tr><tr><td>label</td><td>表单项 <code class="">label</code></td><td>string</td></tr><tr><td>placeholder</td><td>输入框 <code class="">placeholder</code></td><td>string</td></tr><tr><td>radio-label</td><td>单选 <code class="">label</code></td><td>string</td></tr><tr><td>form-item-prop</td><td>表单域 <code class="">v-model</code> 字段， 在使用表单校验功能的情况下，该属性是必填的</td><td>string</td></tr><tr><td>rules</td><td>校验规则，<a href="#/zh-CN/form">可参考 FormItem Rule 数据结构</a></td><td>Array</td></tr><tr><td>required</td><td>是否显示必填字段的标签旁边的红色星号</td><td>boolean</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>on-submit</td><td>提交表单的方法</td><td>-</td><td>Promise</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-invoice-padding</td><td>_ 10px 10px 20px_</td></tr></tbody></table>',12),y={},A="",I=r({__name:"doc.taro",setup(m,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(u,b)=>{const n=e("demo-block");return o(),c("div",d,[j,p(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItaW52b2ljZSA6ZGF0YT0ixAYiIDpmb3JtVmFsdWU9IskLIiBAb25TdWJtaXQ9InPFCCI+IDwvy0Y+CjwvymI8c2NyaXB0IGxhbmc9InRzIsR1aW1wb3J0IHsgcmVmLCByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFJ2RlZmF1bHQgewogICAgc2V0dXAoKccOICAvLyBQcm9taXNlIOW8guatpeagoemqjMceY29uc3QgYXN5bmNWYWxpZGF0b3IgPSAodmFsOiBzdHJpbmcpID0+yU4gIHJldHVybiBuZXfIWCgocmVzb2x2Zc8qxl5vbGUubG9nKCfmqKHmi5/mAITpqozor4HkuK0uLi4nKeQAzMgBc2V0VGltZW91dCgo0VDPUsZG5a6M5oiQzkbkAKflAJMoL140MDAoLT8pWzAtOV17N30kfF4xXGR7MTDECjDGFjIsM30txyEsOH0kLy50ZXN05AEFKc1XfSwgMTAwMMsUfckMfTsKxwpsZXQg5AIjOiBhbnkgPeQBxShbyTLsANB0eXBlOiAncmFkaW8nLMsZbGFiZWw6ICflj5HnpajnsbvlnovNIcUzTMYmylzQYMxL5LyB5LiaJ80efcxT2zu4quS6uuaIluS6i+S4muWNleS9jc9Kyw5dzFbkAxpJdGVtUHJvcDogJ+QA8u4AyWVxdWlyZWQ6IHRydWXJGesAmuwAlu4BGOaKrOWktM1PcGxhY2Vob2xkZXI6ICfor7fovpPlhaXZMO8An25hbe8An3VsZXM6IFvkA4vsAKksIG1lc3NhZ+QBv9ZmIH3tAQj/AOj3AOjnurPnqI7kurror4bliKvlj7f/AO7lAIjfNvAA9HVt9wDz8wDj01sgfV3/AM/pAM/ms6jlhozlnLDlnYD/AMnFbtkw7wDDYWRyZXNz/wG5/AG5xmL/AbP/AOTtAOTnlLXor53/AOTrAOTTMPADOmVs9QDhyxMg5QYy/wDuhaXogZTns7vHcvEEBCB26AYIOu8GGMxNxj7moLzlvI/kuI3mraPnoa4n+gQH/wFM+APnvIDmiLfooYz/AUnmAcXVLe8BRmJhbmvqBLrff+mTtuihjOi0puaI/wN45gCC2TDwAq9jY291bnTrAIjHCl0p6QZF5geZ6QhY5QZH5ggHKOoAq+cGQOcF28py5ATHOiAnzBJ1bc4R5gMzzhR05QD2zSXTJuQBQ88n5gDQxBXHFOQHF+0AyeYJC+cIWmlkOiBib29sZWFuLCBlcnJvcuQCyV3vB+9pZsct6gjMyFDpCAJzdWNj5QP66gEq7AedIGVsc2XaPsV75wCbISEn6ACMzELHCuoH3ecI/8pU5Afq6gEL6QCHyhPGYMoQ7gNVymHIcH07Cjwv5goWPgo="},{default:h(()=>[i]),_:1}),g])}}});export{I as default,A as excerpt,y as frontmatter};
