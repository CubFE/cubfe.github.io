import{d as p,r as o,b as h,k as l,w as t,aq as e,e as a,l as s,o as r}from"./style_icon.js";const i={class:"markdown-body"},m=e(`<h1>Comment</h1><h3>Intro</h3><p>Used to display the comment list</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Comment</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Comment</span>);
</code></pre><h3>Single Line Image</h3><p>By default, images of reviews for individual items are displayed in a single slide</p>`,7),d=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
        `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-comment-header__labels--item"'),s(`
        `),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://img11.360buyimg.com/imagetools/jfs/t1/211858/17/4258/12101/618e6f78Ed0edcadc/e83a673555edf59f.jpg"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-comment"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref, onMounted } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"let"),s(" cmt = "),a("span",{class:"hljs-title function_"},"ref"),s(`({});
      `),a("span",{class:"hljs-title function_"},"onMounted"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        `),a("span",{class:"hljs-title function_"},"fetch"),s("("),a("span",{class:"hljs-string"},"'//storage.360buyimg.com/cubui/3x/comment_data.json'"),s(`)
          .`),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"response"),s(") =>")]),s(" response."),a("span",{class:"hljs-title function_"},"json"),s(`())
          .`),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"res"),s(") =>")]),s(` {
            cmt.`),a("span",{class:"hljs-property"},"value"),s(" = res."),a("span",{class:"hljs-property"},"Comment"),s(`;
          })
          .`),a("span",{class:"hljs-title function_"},"catch"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"err"),s(") =>")]),s(),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Oh, error'"),s(`, err));
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
`)])],-1),j=a("h3",null,"Multi Line Image",-1),g=a("p",null,[s("The value of "),a("code",{class:""},"headerType"),s(" allows you to set the image to be displayed in multiple lines")],-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-comment-shop"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`京东美妆国际：</span
        >尊敬的客户您好，非常抱歉给您带来不愉快的购物体验，关于过敏，什么成分都不存在个别性和普遍性。
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-comment"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref, onMounted } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"let"),s(" cmt = "),a("span",{class:"hljs-title function_"},"ref"),s(`({});
      `),a("span",{class:"hljs-title function_"},"onMounted"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        `),a("span",{class:"hljs-title function_"},"fetch"),s("("),a("span",{class:"hljs-string"},"'//storage.360buyimg.com/cubui/3x/comment_data.json'"),s(`)
          .`),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"response"),s(") =>")]),s(" response."),a("span",{class:"hljs-title function_"},"json"),s(`())
          .`),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"res"),s(") =>")]),s(` {
            cmt.`),a("span",{class:"hljs-property"},"value"),s(" = res."),a("span",{class:"hljs-property"},"Comment"),s(`;
          })
          .`),a("span",{class:"hljs-title function_"},"catch"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"err"),s(") =>")]),s(),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Oh, error'"),s(`, err));
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
`)])],-1),b=a("h3",null,"Additional Review",-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"let"),s(" cmt = "),a("span",{class:"hljs-title function_"},"ref"),s(`({});
      `),a("span",{class:"hljs-title function_"},"onMounted"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        `),a("span",{class:"hljs-title function_"},"fetch"),s("("),a("span",{class:"hljs-string"},"'//storage.360buyimg.com/cubui/3x/comment_data.json'"),s(`)
          .`),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"response"),s(") =>")]),s(" response."),a("span",{class:"hljs-title function_"},"json"),s(`())
          .`),a("span",{class:"hljs-title function_"},"then"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"res"),s(") =>")]),s(` {
            cmt.`),a("span",{class:"hljs-property"},"value"),s(" = res."),a("span",{class:"hljs-property"},"Comment"),s(`;
          })
          .`),a("span",{class:"hljs-title function_"},"catch"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"err"),s(") =>")]),s(),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'Oh, error'"),s(`, err));
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
`)])],-1),y=e(`<h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>header-type</td><td>Header type</td><td>string</td><td><code class="">default</code></td></tr><tr><td>images-rows</td><td>Comment picture shows type of lines</td><td>string</td><td><code class="">one</code></td></tr><tr><td>ellipsis</td><td>Ellipsis number</td><td>string | number</td><td><code class="">2</code></td></tr><tr><td>videos</td><td>Videos data</td><td>Array</td><td><code class="">[]</code></td></tr><tr><td>images</td><td>Images data</td><td>Array</td><td><code class="">[]</code></td></tr><tr><td>info</td><td>Comment data</td><td>object</td><td><code class="">{}</code></td></tr><tr><td>follow</td><td>Additional review data</td><td>object</td><td><code class="">{}</code></td></tr><tr><td>operation</td><td>Bottom button</td><td>Array</td><td><code class="">[&quot;replay&quot;, &quot;like&quot;, &quot;more&quot;]</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>click-operate</td><td>Emitted when to click bottom button</td><td><code class="">type</code></td></tr><tr><td>click</td><td>Emitted when to click comment</td><td><code class="">type</code></td></tr><tr><td>click-images</td><td>Emitted when to click images or videos</td><td><code class="">{type,index,value}</code></td></tr></tbody></table><h3>Slots</h3><p>Slots are defined in some areas and can be replaced as required</p><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>comment-labels</td><td>Comment user label</td></tr><tr><td>comment-shop-reply</td><td>At the bottom of the comment is the display of the merchant&#39;s response</td></tr></tbody></table><h3>images data</h3><pre><code class="language-javascript"><span class="hljs-keyword">const</span> images = [
  {
    <span class="hljs-attr">smallImgUrl</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// Small picture, used for table presentation</span>
    <span class="hljs-attr">bigImgUrl</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// Big picture, big picture display use</span>
    <span class="hljs-attr">imgUrl</span>: <span class="hljs-string">&#39;&#39;</span> <span class="hljs-comment">// Out figure</span>
  }
];
</code></pre><h3>videos data</h3><pre><code class="language-javascript"><span class="hljs-keyword">const</span> videos = [
  {
    <span class="hljs-attr">mainUrl</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// Video mask image</span>
    <span class="hljs-attr">videoUrl</span>: <span class="hljs-string">&#39;&#39;</span> <span class="hljs-comment">// Video url</span>
  }
];
</code></pre><h3>info data</h3><pre><code class="language-javascript"><span class="hljs-keyword">const</span> info = {
  <span class="hljs-attr">content</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// Comment on the details</span>
  <span class="hljs-attr">nickName</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// The name of the reviewer</span>
  <span class="hljs-attr">score</span>: <span class="hljs-number">5</span>, <span class="hljs-comment">// Number of comment stars</span>
  <span class="hljs-attr">avatar</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// The avatar of the reviewer</span>
  <span class="hljs-attr">time</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// Comment time</span>
  <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// Comment good size</span>
  <span class="hljs-attr">replay</span>: <span class="hljs-number">23</span>, <span class="hljs-comment">// Number of replies to this comment</span>
  <span class="hljs-attr">like</span>: <span class="hljs-number">1</span> <span class="hljs-comment">// Number of likes for this comment</span>
};
</code></pre><h3>follow data</h3><p>用于存放追评相关的信息。</p><pre><code class="language-javascript"><span class="hljs-keyword">const</span> follow = {
  <span class="hljs-attr">days</span>: <span class="hljs-number">0</span>, <span class="hljs-comment">// Review how many days after purchase</span>
  <span class="hljs-attr">content</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// Review content</span>
  <span class="hljs-attr">images</span>: [] <span class="hljs-comment">// Review images</span>
};
</code></pre><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-comment-header-user-name-color</td><td><em>rgba(51, 51, 51, 1)</em></td></tr><tr><td>--cub-comment-header-time-color</td><td><em>rgba(153, 153, 153, 1)</em></td></tr><tr><td>--cub-comment-bottom-label-color</td><td><em>rgba(153, 153, 153, 1)</em></td></tr><tr><td>--cub-comment-shop-color</td><td><em>var(--cub-primary-color)</em></td></tr></tbody></table>`,21),I={},C="",_=p({__name:"doc.en-US",setup(v,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(k,A)=>{const n=o("demo-block");return r(),h("div",i,[m,l(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY29tbWVudAogICAgOmltYWdlcz0iY210LsYMIsYZdmlkZW/HGcYMxxlpbmZvxzBuZm/GFUBjbGljaz0iaGFuZGxlxQ3MGUnIZcoNx01vcGVyYXRpb249IlsncmVwbGF5J13EHOQAriAg6QC9ICPnALYtbGFiZWxzxh8gIDxpbWfHCyAgY2xhc8Rm6gDkLWhlYWRlcl9fxjYtLWl0ZW3Ge8QBc3JjPSJodHRwczovL2ltZzExLjM2MGJ1eWltZy5jb20v5QESdG9vbHMvamZzL3QxLzIxMTg1OC8xNy80MsQIMjEwMS82MThlNmY3OEVkMGVkY2FkYy9lODNhNjczNTU1ZWRmNTlmLmpwZ8h4L+cA3C/tAZov6wC3PgrMHTxzY3JpcHQgbGFuZz0idHMixDBpbXBvcnQgeyByZWFjdGl2ZSwgcmVmLCBvbk1vdW50ZWQgfSBmcm9tICd2dWUnOwogIGV4xTJkZWZhdWx0IHvlAIVzZXR1cCgpxw4gIGxldCBjbXQgPcROKHt9KcQ6xAHJWCgoKSA9PskxICBmZXRjaCgnLy9zdG9yYWdl7wFDY3VidWkvM3gv5wDcX2RhdGEuanNvbicpyUQgIC50aGVuKChyZXNwb25zZcVkyA3FLigp1i/vAI7EAeUCs2FsdWXlAMdzLkPGeugAy8QBfc1NY2HkAMMoZXJyxU5jb25zb2xlLmxvZygnT2gsIGVycm9yJ8UIKekBEuoBHMQwdCDrAvwgPSAo5AMdOiBhbnnvAKHNXei/m+ihjOi3s+i9rCcsIMQ0ymDOX+sDPMVfbWfwAPvTWuWbvueJh+WxleekusRgxDXRYHJldHVybsxJbXQsyQ3rANfKFesAjc5OfQrFCzwv5gK0Pgo="},{default:t(()=>[d]),_:1}),j,g,l(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY29tbWVudAogICAgaGVhZGVyVHlwZT0iY29tcGxleCLFGWltYWdlc1Jvd3M9Im11bHRpxhc6xhg9ImNtdC7GDMcZdmlkZW/HGcYMyDJuZm/HMG5mb8YVZWxsaXBzaXM9IjbGEUBjbGlja0nIXcoNxB/kALogIOkAySAj5wDCLWxhYmVsc8YfICA8aW1nxwsgIGNsYXPESuoA8C3mAOxfX8Y2LS1pdGVtxn7EAXNyYz0iaHR0cHM6Ly9zdG9yYWdlLjM2MGJ1eWltZy5jb20vaW1ndG9vbHMvNzg5MjVkOTQ0MC1mOWU4NzRkMC1lOTNkLTExZWItOGU1Yy0wZGE5ZTE4YTEzYjEucG5ny2l0eWxlPSJoZWlnaHQ6IDEycOcBcyAgL+cA6i/qAbT4APtzaG9wLXJlcGx5xjQgIDxkaXb0APfEKiLIJSAgPHNwYW4+5Lqs5Lic576O5aaG5Zu96ZmF77yaPC/EHMkqPuWwiuaVrOeahOWuouaIt+aCqOWlve+8jOmdnuW4uOaKseatiee7mcQYuKbmnaXkuI3mhInlv6vnmoTotK3niankvZPpqozvvIzlhbPkuo7ov4fmlY/vvIzku4DkuYjmiJDliIbpg73kuI3lrZjlnKjkuKrliKvmgKflkozmma7pgY3mgKfjgILoAOMvZGl28gEkxA7rAPI+CswdPHNjcmlwdCBsYW5nPSJ0c+UBC2ltcG9ydCB7IHJlYWN0aXZlLCByZWYsIG9uTW91bnRlZCB9IGZyb20gJ3Z1ZSc7CiAgZXjFMmRlZmF1bHQge+UAhXNldHVwKCnHDiAgbGV0IGNtdCA9xE4oe30pxDrEAclYKCgpID0+yTEgIGZldGNoKCf4AnNjdWJ1aS8zeC/nANxfZGF0YS5qc29uJynJRCAgLnRoZW4oKHJlc3BvbnNlxWTIDcUuKCnWL+8AjsQB5QPBYWx1ZeUAx3MuQ8Z66ADLxAF9zU1jYeQAwyhlcnLFTmNvbnNvbGUubG9nKCdPaCwgZXJyb3InxQgp6QES6gEcxDB0IOsD8yA9IChpbWfwAJzNWOi/m+ihjOWbvueJh+WxleekuicsIMU1yWHICXJldHVybsxJbXQsyg3KeM45fQrFCzwv5gJAPgo="},{default:t(()=>[u]),_:1}),b,l(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY29tbWVudAogICAgaW1hZ2VzUm93cz0ibXVsdGkixRc6xhg9ImNtdC7GDMcZdmlkZW/HGcYMyDJuZm/HMG5mb8cVZm9sbG93xhfGDMYZQGNsaWNrSchlyg3EHz48L+sApz4KPC/qAMM8c2NyaXB0IGxhbmc9InRzIuQA1mltcG9ydCB7IHJlYWN0aXZlLCByZWYsIG9uTW91bnRlZCB9IGZyb20gJ3Z1ZSc7CiAgZXjFMmRlZmF1bHQge+UAlXNldHVwKCnHDiAgbGV0IGNtdCA9xE4oe30pxDrEAclYKCgpID0+yTEgIGZldGNoKCcvL3N0b3JhZ2UuMzYwYnV5aW1nLmNvbeQA13VpLzN4L+cA3F9kYXRhLmpzb24nKclEICAudGhlbigocmVzcG9uc2XFZMgNxS4oKdYv7wCOxAHlAahhbHVl5QDHcy5DxnroAMvEAX3NTWNh5ADDKGVycsVOY29uc29sZS5sb2coJ09oLCBlcnJvcifFCCnpARLqARzEMHQg6wHSID0gKGltZ/AAnM1Y6L+b6KGM5Zu+54mH5bGV56S6JywgxTXJYcgJcmV0dXJuzEltdCzKDcp4zjl9CsULPC/mAkA+Cg=="},{default:t(()=>[f]),_:1}),y])}}});export{_ as default,C as excerpt,I as frontmatter};
