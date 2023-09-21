import{d as p,r as o,b as h,k as l,w as t,aq as c,e as a,o as r,l as s}from"./style_icon.js";const d={class:"markdown-body"},j=c(`<h1>Comment 商品评论</h1><h3>介绍</h3><p>用于进行评论列表的展示。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Comment</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Comment</span>);
</code></pre><h3>评论图片单行展示</h3><p>默认情况下，单个商品的评论的图片是按照单行滑动进行展示的。</p>`,7),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-comment"),s(`
    `),a("span",{class:"hljs-attr"},":images"),s("="),a("span",{class:"hljs-string"},'"cmt.images"'),s(`
    `),a("span",{class:"hljs-attr"},":videos"),s("="),a("span",{class:"hljs-string"},'"cmt.videos"'),s(`
    `),a("span",{class:"hljs-attr"},":info"),s("="),a("span",{class:"hljs-string"},'"cmt.info"'),s(`
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleclick"'),s(`
    @`),a("span",{class:"hljs-attr"},"clickImages"),s("="),a("span",{class:"hljs-string"},'"clickImages"'),s(`
    `),a("span",{class:"hljs-attr"},":operation"),s("="),a("span",{class:"hljs-string"},`"['replay']"`),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"comment-labels"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(`
        `),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"height:15px;width:50px"'),s(`
        `),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://img11.360buyimg.com/imagetools/jfs/t1/211858/17/4258/12101/618e6f78Ed0edcadc/e83a673555edf59f.jpg"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-comment"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref, onMounted } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-title class_"},"Taro"),s(),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@tarojs/taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"let"),s(" cmt = "),a("span",{class:"hljs-title function_"},"ref"),s(`({});
      `),a("span",{class:"hljs-title function_"},"onMounted"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        `),a("span",{class:"hljs-title class_"},"Taro"),s("."),a("span",{class:"hljs-title function_"},"request"),s(`({
          `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://storage.360buyimg.com/cubui/3x/comment_data.json'"),s(", "),a("span",{class:"hljs-comment"},"//仅为示例，并非真实的接口地址"),s(`
          `),a("span",{class:"hljs-attr"},"success"),s(": "),a("span",{class:"hljs-keyword"},"function"),s(" ("),a("span",{class:"hljs-params"},"res"),s(`) {
            cmt.`),a("span",{class:"hljs-property"},"value"),s(" = res."),a("span",{class:"hljs-property"},"data"),s("."),a("span",{class:"hljs-property"},"Comment"),s(`;
          }
        });
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"handleclick"),s(" = ("),a("span",{class:"hljs-params"},"info: any"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'进行跳转'"),s(`, info);
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clickImages"),s(" = ("),a("span",{class:"hljs-params"},"imgs"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'进行图片展示'"),s(`, imgs);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        cmt,
        handleclick,
        clickImages
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),i=a("h3",null,"评论图片多行展示",-1),g=a("p",null,"通过 headerType 的值可以设置图片多行展示。",-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-comment"),s(`
    `),a("span",{class:"hljs-attr"},"headerType"),s("="),a("span",{class:"hljs-string"},'"complex"'),s(`
    `),a("span",{class:"hljs-attr"},"imagesRows"),s("="),a("span",{class:"hljs-string"},'"multi"'),s(`
    `),a("span",{class:"hljs-attr"},":images"),s("="),a("span",{class:"hljs-string"},'"cmt.images"'),s(`
    `),a("span",{class:"hljs-attr"},":videos"),s("="),a("span",{class:"hljs-string"},'"cmt.videos"'),s(`
    `),a("span",{class:"hljs-attr"},":info"),s("="),a("span",{class:"hljs-string"},'"cmt.info"'),s(`
    `),a("span",{class:"hljs-attr"},"ellipsis"),s("="),a("span",{class:"hljs-string"},'"6"'),s(`
    @`),a("span",{class:"hljs-attr"},"clickImages"),s("="),a("span",{class:"hljs-string"},'"clickImages"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"comment-labels"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(`
        `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-comment-header__labels--item"'),s(`
        `),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://storage.360buyimg.com/imgtools/78925d9440-f9e874d0-e93d-11eb-8e5c-0da9e18a13b1.png"'),s(`
        `),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"height: 12px"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"comment-shop-reply"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"view"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-comment-shop"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"display:inline-block"'),s(">")]),s(`京东美妆国际：</span
        >尊敬的客户您好，非常抱歉给您带来不愉快的购物体验，关于过敏，什么成分都不存在个别性和普遍性。
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"view"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-comment"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref, onMounted } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-title class_"},"Taro"),s(),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@tarojs/taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"let"),s(" cmt = "),a("span",{class:"hljs-title function_"},"ref"),s(`({});
      `),a("span",{class:"hljs-title function_"},"onMounted"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        `),a("span",{class:"hljs-title class_"},"Taro"),s("."),a("span",{class:"hljs-title function_"},"request"),s(`({
          `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://storage.360buyimg.com/cubui/3x/comment_data.json'"),s(", "),a("span",{class:"hljs-comment"},"//仅为示例，并非真实的接口地址"),s(`
          `),a("span",{class:"hljs-attr"},"success"),s(": "),a("span",{class:"hljs-keyword"},"function"),s(" ("),a("span",{class:"hljs-params"},"res"),s(`) {
            cmt.`),a("span",{class:"hljs-property"},"value"),s(" = res."),a("span",{class:"hljs-property"},"data"),s("."),a("span",{class:"hljs-property"},"Comment"),s(`;
          }
        });
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clickImages"),s(" = ("),a("span",{class:"hljs-params"},"imgs"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'进行图片展示'"),s(`, imgs);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        cmt,
        clickImages
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),y=a("h3",null,"追评展示",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-comment"),s(`
    `),a("span",{class:"hljs-attr"},"imagesRows"),s("="),a("span",{class:"hljs-string"},'"multi"'),s(`
    `),a("span",{class:"hljs-attr"},":images"),s("="),a("span",{class:"hljs-string"},'"cmt.images"'),s(`
    `),a("span",{class:"hljs-attr"},":videos"),s("="),a("span",{class:"hljs-string"},'"cmt.videos"'),s(`
    `),a("span",{class:"hljs-attr"},":info"),s("="),a("span",{class:"hljs-string"},'"cmt.info"'),s(`
    `),a("span",{class:"hljs-attr"},":follow"),s("="),a("span",{class:"hljs-string"},'"cmt.follow"'),s(`
    @`),a("span",{class:"hljs-attr"},"clickImages"),s("="),a("span",{class:"hljs-string"},'"clickImages"'),s(`
  >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-comment"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref, onMounted } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-title class_"},"Taro"),s(),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@tarojs/taro'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"let"),s(" cmt = "),a("span",{class:"hljs-title function_"},"ref"),s(`({});
      `),a("span",{class:"hljs-title function_"},"onMounted"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        `),a("span",{class:"hljs-title class_"},"Taro"),s("."),a("span",{class:"hljs-title function_"},"request"),s(`({
          `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://storage.360buyimg.com/cubui/3x/comment_data.json'"),s(", "),a("span",{class:"hljs-comment"},"//仅为示例，并非真实的接口地址"),s(`
          `),a("span",{class:"hljs-attr"},"success"),s(": "),a("span",{class:"hljs-keyword"},"function"),s(" ("),a("span",{class:"hljs-params"},"res"),s(`) {
            cmt.`),a("span",{class:"hljs-property"},"value"),s(" = res."),a("span",{class:"hljs-property"},"data"),s("."),a("span",{class:"hljs-property"},"Comment"),s(`;
          }
        });
      });
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clickImages"),s(" = ("),a("span",{class:"hljs-params"},"imgs"),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'进行图片展示'"),s(`, imgs);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        cmt,
        clickImages
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),f=c(`<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>header-type</td><td>头部样式展示类型，可选： <code class="">default</code>，<code class="">complex</code></td><td>string</td><td><code class="">default</code></td></tr><tr><td>images-rows</td><td>评论图片展示行数，可选： <code class="">one</code>，<code class="">multi</code></td><td>string</td><td><code class="">one</code></td></tr><tr><td>ellipsis</td><td>设置评论内容省略行数</td><td>string | number</td><td><code class="">2</code></td></tr><tr><td>videos</td><td>视频信息</td><td>Array</td><td><code class="">[]</code></td></tr><tr><td>images</td><td>图片信息</td><td>Array</td><td><code class="">[]</code></td></tr><tr><td>info</td><td>评论详情</td><td>object</td><td><code class="">{}</code></td></tr><tr><td>follow</td><td>追评内容</td><td>object</td><td><code class="">{}</code></td></tr><tr><td>operation</td><td>配置底部按钮</td><td>Array</td><td><code class="">[&quot;replay&quot;, &quot;like&quot;, &quot;more&quot;]</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click-operate</td><td>点击底部操作按钮回调函数</td><td><code class="">type</code></td></tr><tr><td>click</td><td>点击评论内容回调函数</td><td><code class="">type</code></td></tr><tr><td>click-images</td><td>点击图片或视频触发</td><td><code class="">{type,index,value}</code></td></tr></tbody></table><h3>Slots</h3><p><code class="">Comment</code> 组件在某些区域定义了插槽，可以按照需求进行替换。</p><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>comment-labels</td><td>评论用户的标签</td></tr><tr><td>comment-shop-reply</td><td>评论最底部，用于展示商家回复</td></tr></tbody></table><h3>images 数组</h3><p>images 数组中存放的是图片对象。</p><pre><code class="language-javascript"><span class="hljs-keyword">const</span> images = [
  {
    <span class="hljs-attr">smallImgUrl</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// 小图，列表展示时使用</span>
    <span class="hljs-attr">bigImgUrl</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// 大图，大图展示使用</span>
    <span class="hljs-attr">imgUrl</span>: <span class="hljs-string">&#39;&#39;</span> <span class="hljs-comment">// 兜底图</span>
  }
];
</code></pre><h3>videos 数组</h3><pre><code class="language-javascript"><span class="hljs-keyword">const</span> videos = [
  {
    <span class="hljs-attr">mainUrl</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// 视频遮罩图片</span>
    <span class="hljs-attr">videoUrl</span>: <span class="hljs-string">&#39;&#39;</span> <span class="hljs-comment">// 视频链接</span>
  }
];
</code></pre><h3>info 对象</h3><p>用于存放评论相关的信息。</p><pre><code class="language-javascript"><span class="hljs-keyword">const</span> info = {
  <span class="hljs-attr">content</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// 评论详情</span>
  <span class="hljs-attr">nickName</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// 评论人的姓名</span>
  <span class="hljs-attr">score</span>: <span class="hljs-number">5</span>, <span class="hljs-comment">// 评论星星数</span>
  <span class="hljs-attr">avatar</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// 评论人头像</span>
  <span class="hljs-attr">time</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// 评论时间</span>
  <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// 评论人购买的商品规格</span>
  <span class="hljs-attr">replay</span>: <span class="hljs-number">23</span>, <span class="hljs-comment">// 此评论的回复数</span>
  <span class="hljs-attr">like</span>: <span class="hljs-number">1</span> <span class="hljs-comment">// 此评论的点赞数</span>
};
</code></pre><h3>follow 对象</h3><p>用于存放追评相关的信息。</p><pre><code class="language-javascript"><span class="hljs-keyword">const</span> follow = {
  <span class="hljs-attr">days</span>: <span class="hljs-number">0</span>, <span class="hljs-comment">// 购买多少天后进行追评</span>
  <span class="hljs-attr">content</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// 追评内容</span>
  <span class="hljs-attr">images</span>: [] <span class="hljs-comment">// 追评图片</span>
};
</code></pre><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-comment-header-user-name-color</td><td><em>rgba(51, 51, 51, 1)</em></td></tr><tr><td>--cub-comment-header-time-color</td><td><em>rgba(153, 153, 153, 1)</em></td></tr><tr><td>--cub-comment-bottom-label-color</td><td><em>rgba(153, 153, 153, 1)</em></td></tr><tr><td>--cub-comment-shop-color</td><td><em>var(--cub-primary-color)</em></td></tr></tbody></table>`,23),x={},A="",Y=p({__name:"doc.taro",setup(k,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(v,w)=>{const n=o("demo-block");return r(),h("div",d,[j,l(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY29tbWVudAogICAgOmltYWdlcz0iY210LsYMIsYZdmlkZW/HGcYMxxlpbmZvxzBuZm/GFUBjbGljaz0iaGFuZGxlxQ3MGUnIZcoNx01vcGVyYXRpb249IlsncmVwbGF5J13EHOQAriAg6QC9ICPnALYtbGFiZWxzxh8gIDxpbWfHCyAgc3R5bGU9ImhlaWdodDoxNXB4O3dpZHRoOjUwcHjGccUncmM9Imh0dHBzOi8vaW1nMTEuMzYwYnV5aW1nLmNvbS/lAQh0b29scy9qZnMvdDEvMjExODU4LzE3LzQyxAgyMTAxLzYxOGU2Zjc4RWQwZWRjYWRjL2U4M2E2NzM1NTVlZGY1OWYuanBnyHgv5wDSL+0BkC/rAZE+CswdPHNjcmlwdCBsYW5nPSJ0cyLEMGltcG9ydCB7IHJlYWN0aXZlLCByZWYsIG9uTW91bnRlZCB9IGZyb20gJ3Z1ZSc7yjJUYXJvxxpAdGFyb2pzL8QHxSNleMUjZGVmYXVsdCB75QCoc2V0dXAoKccOICBsZXQgY210ID3EcSh7fSnEOsQByXsoKCkgPT7JMSDFdC5yZXF1ZXN0KMoXICB1cmw6ICfoAYJzdG9yYWdl7wGEY3VidWkvM3gv5wEdX2RhdGEuanNvbicsIC8v5LuF5Li656S65L6L77yM5bm26Z2e55yf5a6e55qE5o6l5Y+j5Zyw5Z2Ay3hzdWNjZXNzOiBmdW5j5AJ1IChyZXPqAOTGAeUC8WFsdWXlAOxzLsV5Q+YAhugA9cQBfckM6gENygpjb25zdCDrAxAgPSAo5AMxOiBhbnnvASrELW9sZS5sb2coJ+i/m+ihjOi3s+i9rCcsIMQ0ymDOX+sDUMVfbWdz31rooYzlm77niYflsZXnpLrEYMQ10WByZXR1cm7MSW10LMkN6wDXyhXrAI3OTuQBKX07Cjwv5gLSPgo="},{default:t(()=>[m]),_:1}),i,g,l(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY29tbWVudAogICAgaGVhZGVyVHlwZT0iY29tcGxleCLFGWltYWdlc1Jvd3M9Im11bHRpxhc6xhg9ImNtdC7GDMcZdmlkZW/HGcYMyDJuZm/HMG5mb8YVZWxsaXBzaXM9IjbGEUBjbGlja0nIXcoNxB/kALogIOkAySAj5wDCLWxhYmVsc8YfICA8aW1nxwsgIGNsYXPESuoA8C3mAOxfX8Y2LS1pdGVtxn7EAXNyYz0iaHR0cHM6Ly9zdG9yYWdlLjM2MGJ1eWltZy5jb20vaW1ndG9vbHMvNzg5MjVkOTQ0MC1mOWU4NzRkMC1lOTNkLTExZWItOGU1Yy0wZGE5ZTE4YTEzYjEucG5ny2l0eWxlPSJoZWlnaHQ6IDEycOcBcyAgL+cA6i/qAbT4APtzaG9wLXJlcGx5xjQgIDx2aWV39AD4xCsiyCYgIDxzcGFu6ACGZGlzcGxheTppbmxpbmUtYmxvY2siPuS6rOS4nOe+juWmhuWbvemZhe+8mjwvxDnJRz7lsIrmlaznmoTlrqLmiLfmgqjlpb3vvIzpnZ7luLjmirHmrYnnu5nEGLim5p2l5LiN5oSJ5b+r55qE6LSt54mp5L2T6aqM77yM5YWz5LqO6L+H5pWP77yM5LuA5LmI5oiQ5YiG6YO95LiN5a2Y5Zyo5Liq5Yir5oCn5ZKM5pmu6YGN5oCn44CC6AEBL+QBAvIBQ8QO6wEQPgrMHTxzY3JpcHQgbGFuZz0idHPlASlpbXBvcnQgeyByZWFjdGl2ZSwgcmVmLCBvbk1vdW50ZWQgfSBmcm9tICd2dWUnO8oyVGFyb8caQHRhcm9qcy/EB8UjZXjFI2RlZmF1bHQge+UAqHNldHVwKCnHDiAgbGV0IGNtdCA9xHEoe30pxDrEAcl7KCgpID0+yTEgxXQucmVxdWVzdCjKFyAgdXJsOiAn/gLTY3VidWkvM3gv5wEdX2RhdGEuanNvbicsIC8v5LuF5Li656S65L6L5AGoubbpnZ7nnJ/lrp7nmoTmjqXlj6PlnLDlnYDLeHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXPqAOTGAeUEKGFsdWXlAOxzLsV5Q+YAhugA9cQBfckM6gENygpjb25zdCDrBDAgPSAoaW1nc+8BJcQob2xlLmxvZygn6L+b6KGM5Zu+54mH5bGV56S6JywgxTXJYcgJcmV0dXJuzEltdCzKDcp4zjnkALV9Owo8L+YCXj4K"},{default:t(()=>[u]),_:1}),y,l(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY29tbWVudAogICAgaW1hZ2VzUm93cz0ibXVsdGkixRc6xhg9ImNtdC7GDMcZdmlkZW/HGcYMyDJuZm/HMG5mb8cVZm9sbG93xhfGDMYZQGNsaWNrSchlyg3EHz48L+sApz4KPC/qAMM8c2NyaXB0IGxhbmc9InRzIuQA1mltcG9ydCB7IHJlYWN0aXZlLCByZWYsIG9uTW91bnRlZCB9IGZyb20gJ3Z1ZSc7yjJUYXJvxxpAdGFyb2pzL8QHxSNleMUjZGVmYXVsdCB75QC4c2V0dXAoKccOICBsZXQgY210ID3EcSh7fSnEOsQByXsoKCkgPT7JMSDFdC5yZXF1ZXN0KMoXICB1cmw6ICdodHRwczovL3N0b3JhZ2UuMzYwYnV5aW1nLmNvbeQBGHVpLzN4L+cBHV9kYXRhLmpzb24nLCAvL+S7heS4uuekuuS+i++8jOW5tumdnuecn+WunueahOaOpeWPo+WcsOWdgMt4c3VjY2VzczogZnVuY3Rpb24gKHJlc+oA5MYB5QHwYWx1ZeUA7HMuxXlD5gCG6AD1xAF9yQzqAQ3KCmNvbnN0IOsB8CA9IChpbWdz7wElxChvbGUubG9nKCfov5vooYzlm77niYflsZXnpLonLCDFNclhyAlyZXR1cm7MSW10LMoNynjOOeQAtX07Cjwv5gJePgo="},{default:t(()=>[b]),_:1}),f])}}});export{Y as default,A as excerpt,x as frontmatter};
