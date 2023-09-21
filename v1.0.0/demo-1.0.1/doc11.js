import{d as p,r as d,b as h,k as t,w as l,aq as c,e as a,o as r,l as s}from"./style_icon.js";const o={class:"markdown-body"},j=c(`<h1>Barrage 弹幕</h1><h3>介绍</h3><p>用于话语和词组的轮播展示，适用于视频中或其他类似需求中。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Barrage</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Barrage</span>);
</code></pre><h3>基础用法</h3>`,6),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-barrage"),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"danmu"'),s(),a("span",{class:"hljs-attr"},":danmu"),s("="),a("span",{class:"hljs-string"},'"list"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-barrage"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"test"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"addDanmu"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"add cub-button--primary"'),s(">")]),s("随机添加"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"props"),s(`: {},
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" inputVal = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" danmu = "),a("span",{class:"hljs-title function_"},"ref"),s(`();
      `),a("span",{class:"hljs-keyword"},"let"),s(" list = "),a("span",{class:"hljs-title function_"},"ref"),s("(["),a("span",{class:"hljs-string"},"'画美不看'"),s(", "),a("span",{class:"hljs-string"},"'不明觉厉'"),s(", "),a("span",{class:"hljs-string"},"'喜大普奔'"),s(", "),a("span",{class:"hljs-string"},"'男默女泪'"),s(", "),a("span",{class:"hljs-string"},"'累觉不爱'"),s(", "),a("span",{class:"hljs-string"},"'爷青结-'"),s(`]);
      `),a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title function_"},"addDanmu"),s("("),a("span",{class:"hljs-params"}),s(`) {
        `),a("span",{class:"hljs-keyword"},"let"),s(" n = "),a("span",{class:"hljs-title class_"},"Math"),s("."),a("span",{class:"hljs-title function_"},"random"),s(`();
        danmu.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"add"),s("("),a("span",{class:"hljs-string"},"'随机——'"),s(" + "),a("span",{class:"hljs-title class_"},"String"),s("(n)."),a("span",{class:"hljs-title function_"},"substr"),s("("),a("span",{class:"hljs-number"},"2"),s(", "),a("span",{class:"hljs-number"},"10"),s(`));
      }
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        inputVal,
        danmu,
        list,
        addDanmu
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),i=a("h3",null,"slot 用法",-1),u=a("blockquote",null,[a("p",null,"使用插槽需要将滚动内容放在 html 标签内，小程序环境暂不支持")],-1),g=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-barrage"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),s("aaa"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),s("bbb"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),s("ccc"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),s("ddd"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-barrage"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),b=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>danmu</td><td>弹幕列表数据</td><td>Array</td><td><code class="">[]</code></td></tr><tr><td>frequency</td><td>可视区域内每个弹幕出现的时间间隔</td><td>number</td><td><code class="">500</code></td></tr><tr><td>speeds</td><td>每个弹幕的滚动时间</td><td>number</td><td><code class="">5000</code></td></tr><tr><td>rows</td><td>弹幕行数，分几行展示</td><td>number</td><td><code class="">3</code></td></tr><tr><td>top</td><td>弹幕垂直距离</td><td>number</td><td><code class="">10</code></td></tr><tr><td>loop</td><td>是否循环播放</td><td>boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>add</td><td>添加数据(通过 ref 实例使用)</td><td>-</td></tr></tbody></table>',5),w={},x="",v=p({__name:"doc",setup(_,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(y,f)=>{const n=d("demo-block");return r(),h("div",o,[j,t(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYmFycmFnZSByZWY9ImRhbm11IiA6xQg9Imxpc3QiPjwvyyjFOGRpdiBjbGFzcz0idGXEIwogICAgPGJ1dHRvbiBAY2xpY2s9ImFkZETGUMcsYWRkIMVLxSgtLXByaW1hcnkiPumaj+acuua3u+WKoDwvxh/FaS9kaXY+Cjwv6gC2PHNjcmlwdMQeaW1wb3J0IHvkALsgfSBmcm9tICd2dWUnOwogIGV4xR1kZWZhdWx0IHvlAKJwcm9wczoge30sxQ9zZXR1cCgpxx0gIGNvbnN0IGlucHV0VmFsID3EWSgnJynEUMog5QEcxx3JG2xldCDkAS7HGFsn55S7576O5LiN55yLJywgJ+S4jeaYjuinieWOicQQ5Zac5aSn5pmu5aWUxBDnlLfpu5jlpbPms6rFELSv6KeJxECIscUQiLfpnZLnu5MtJ13JdmZ1bmN0aW9uIOgBa+sAzeYAlG4gPSBNYXRoLnJhbmRvbeoAsSDmAMgudmFsdWUuYWRkKCfmAYbigJTigJQnICsgU3RyaW5nKG4pLnN1YnN0cigyLCAxMCnJQ33HCHJldHVybst56AFC5gFmyWzKD+QBKsoO6AC9yFfGYMRefTsKPC/oAfE="},{default:l(()=>[m]),_:1}),i,u,t(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYmFycmFnxRAgIDxzcGFuPmFhYTwvxQrLFWJiYtIVY2Nj0hVkZGTKFTwvzWU8L+oAgQ=="},{default:l(()=>[g]),_:1}),b])}}});export{v as default,x as excerpt,w as frontmatter};
