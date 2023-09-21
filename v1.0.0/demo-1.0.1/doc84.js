import{d as p,r as d,b as r,k as t,w as n,aq as e,e as a,o,l as s}from"./style_icon.js";const h={class:"markdown-body"},j=e(`<h1>Uploader 上传</h1><h3>介绍</h3><p>用于将本地的图片或文件上传至服务器。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Uploader</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Uploader</span>);
</code></pre><h3>基础用法</h3>`,6),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-uploader"),s(),a("span",{class:"hljs-attr"},"url"),s("="),a("span",{class:"hljs-string"},'"https://xxxx"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-uploader"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),g=a("h3",null,"上传状态",-1),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-uploader"),s(),a("span",{class:"hljs-attr"},":url"),s("="),a("span",{class:"hljs-string"},'"uploadUrl"'),s(),a("span",{class:"hljs-attr"},"v-model:file-list"),s("="),a("span",{class:"hljs-string"},'"defaultFileList"'),s(),a("span",{class:"hljs-attr"},"maximum"),s("="),a("span",{class:"hljs-string"},'"3"'),s(),a("span",{class:"hljs-attr"},"multiple"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-uploader"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" uploadUrl = "),a("span",{class:"hljs-string"},"'https://xxxxx'"),s(`;
      `),a("span",{class:"hljs-keyword"},"const"),s(" defaultFileList = "),a("span",{class:"hljs-title function_"},"reactive"),s(`([
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
          `),a("span",{class:"hljs-attr"},"status"),s(": "),a("span",{class:"hljs-string"},"'error'"),s(`,
          `),a("span",{class:"hljs-attr"},"message"),s(": "),a("span",{class:"hljs-string"},"'上传失败'"),s(`,
          `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'image'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'文件3.png'"),s(`,
          `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg'"),s(`,
          `),a("span",{class:"hljs-attr"},"status"),s(": "),a("span",{class:"hljs-string"},"'uploading'"),s(`,
          `),a("span",{class:"hljs-attr"},"message"),s(": "),a("span",{class:"hljs-string"},"'上传中...'"),s(`,
          `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'image'"),s(`
        }
      ]);
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        uploadUrl,
        defaultFileList
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),m=a("h3",null,"基础用法-上传列表展示",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-uploader"),s(),a("span",{class:"hljs-attr"},":url"),s("="),a("span",{class:"hljs-string"},'"uploadUrl"'),s(),a("span",{class:"hljs-attr"},"v-model:file-list"),s("="),a("span",{class:"hljs-string"},'"defaultFileList"'),s(),a("span",{class:"hljs-attr"},"maximum"),s("="),a("span",{class:"hljs-string"},'"10"'),s(),a("span",{class:"hljs-attr"},"multiple"),s(),a("span",{class:"hljs-attr"},"list-type"),s("="),a("span",{class:"hljs-string"},'"list"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(">")]),s("上传文件"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-uploader"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" uploadUrl = "),a("span",{class:"hljs-string"},"'https://xxxxx'"),s(`;
      `),a("span",{class:"hljs-keyword"},"const"),s(" defaultFileList = "),a("span",{class:"hljs-title function_"},"reactive"),s(`([
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
          `),a("span",{class:"hljs-attr"},"status"),s(": "),a("span",{class:"hljs-string"},"'error'"),s(`,
          `),a("span",{class:"hljs-attr"},"message"),s(": "),a("span",{class:"hljs-string"},"'上传失败'"),s(`,
          `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'image'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'文件3.png'"),s(`,
          `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg'"),s(`,
          `),a("span",{class:"hljs-attr"},"status"),s(": "),a("span",{class:"hljs-string"},"'uploading'"),s(`,
          `),a("span",{class:"hljs-attr"},"message"),s(": "),a("span",{class:"hljs-string"},"'上传中...'"),s(`,
          `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'image'"),s(`
        }
      ]);
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        uploadUrl,
        defaultFileList
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),y=a("h3",null,"自定义上传样式",-1),w=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-uploader"),s(),a("span",{class:"hljs-attr"},"url"),s("="),a("span",{class:"hljs-string"},'"https://xxxx"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(">")]),s("上传文件"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-uploader"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),I=a("h3",null,"自定义上传使用默认进度条",-1),k=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-uploader"),s(),a("span",{class:"hljs-attr"},":url"),s("="),a("span",{class:"hljs-string"},'"uploadUrl"'),s(" @"),a("span",{class:"hljs-attr"},"progress"),s("="),a("span",{class:"hljs-string"},'"onProgress"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(">")]),s("上传文件"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-uploader"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-progress"),s(`
    `),a("span",{class:"hljs-attr"},":percentage"),s("="),a("span",{class:"hljs-string"},'"progressPercentage"'),s(`
    `),a("span",{class:"hljs-attr"},"stroke-color"),s("="),a("span",{class:"hljs-string"},'"linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"'),s(`
    `),a("span",{class:"hljs-attr"},":status"),s("="),a("span",{class:"hljs-string"},`"progressPercentage==100?'':'active'"`),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-progress"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" uploadUrl = "),a("span",{class:"hljs-string"},"'https://xxxxx'"),s(`;
      `),a("span",{class:"hljs-keyword"},"const"),s(" progressPercentage = ref<string | number>("),a("span",{class:"hljs-number"},"0"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onProgress"),s(" = ("),a("span",{class:"hljs-params"},"{ event, options, percentage }: any"),s(`) => {
        progressPercentage.`),a("span",{class:"hljs-property"},"value"),s(` = percentage;
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},"'progress 事件触发'"),s(` + percentage);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        uploadUrl,
        onProgress,
        progressPercentage
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),f=a("h3",null,"直接调起摄像头（移动端生效）",-1),x=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-uploader"),s(),a("span",{class:"hljs-attr"},"url"),s("="),a("span",{class:"hljs-string"},'"https://xxxx"'),s(),a("span",{class:"hljs-attr"},"capture"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-uploader"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),A=a("h3",null,"限制上传数量 5 个",-1),v=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-uploader"),s(),a("span",{class:"hljs-attr"},"url"),s("="),a("span",{class:"hljs-string"},'"https://xxxx"'),s(),a("span",{class:"hljs-attr"},"multiple"),s(),a("span",{class:"hljs-attr"},"maximum"),s("="),a("span",{class:"hljs-string"},'"5"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-uploader"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),X=a("h3",null,"限制上传大小（每个文件最大不超过 50kb）",-1),Z=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-uploader"),s(),a("span",{class:"hljs-attr"},":url"),s("="),a("span",{class:"hljs-string"},'"uploadUrl"'),s(),a("span",{class:"hljs-attr"},"multiple"),s(),a("span",{class:"hljs-attr"},":maximize"),s("="),a("span",{class:"hljs-string"},'"1024 * 50"'),s(" @"),a("span",{class:"hljs-attr"},"oversize"),s("="),a("span",{class:"hljs-string"},'"onOversize"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-uploader"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" uploadUrl = "),a("span",{class:"hljs-string"},"'https://xxxxx'"),s(`;
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"onOversize"),s(" = ("),a("span",{class:"hljs-params"},"files: File[]"),s(`) => {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},"'oversize 触发 文件大小不能超过 50kb'"),s(`);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        uploadUrl,
        onOversize
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),_=a("h3",null,"图片压缩（在 beforeupload 钩子中处理）",-1),R=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-uploader"),s(),a("span",{class:"hljs-attr"},":url"),s("="),a("span",{class:"hljs-string"},'"uploadUrl"'),s(),a("span",{class:"hljs-attr"},"multiple"),s(),a("span",{class:"hljs-attr"},":before-upload"),s("="),a("span",{class:"hljs-string"},'"beforeUpload"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-uploader"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" uploadUrl = "),a("span",{class:"hljs-string"},"'https://xxxxx'"),s(`;
      `),a("span",{class:"hljs-keyword"},"const"),s(" fileToDataURL = ("),a("span",{class:"hljs-attr"},"file"),s(": "),a("span",{class:"hljs-title class_"},"Blob"),s("): "),a("span",{class:"hljs-title class_"},"Promise"),s(`<any> => {
        `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Promise"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"resolve"),s(") =>")]),s(` {
          `),a("span",{class:"hljs-keyword"},"const"),s(" reader = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"FileReader"),s(`();
          reader.`),a("span",{class:"hljs-property"},"onloadend"),s(" = "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"e"),s(") =>")]),s(),a("span",{class:"hljs-title function_"},"resolve"),s("((e."),a("span",{class:"hljs-property"},"target"),s(),a("span",{class:"hljs-keyword"},"as"),s(),a("span",{class:"hljs-title class_"},"FileReader"),s(")."),a("span",{class:"hljs-property"},"result"),s(`);
          reader.`),a("span",{class:"hljs-title function_"},"readAsDataURL"),s(`(file);
        });
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(" dataURLToImage = ("),a("span",{class:"hljs-attr"},"dataURL"),s(": string): "),a("span",{class:"hljs-title class_"},"Promise"),s("<"),a("span",{class:"hljs-title class_"},"HTMLImageElement"),s(`> => {
        `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Promise"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"resolve"),s(") =>")]),s(` {
          `),a("span",{class:"hljs-keyword"},"const"),s(" img = "),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Image"),s(`();
          img.`),a("span",{class:"hljs-property"},"onload"),s(" = "),a("span",{class:"hljs-function"},"() =>"),s(),a("span",{class:"hljs-title function_"},"resolve"),s(`(img);
          img.`),a("span",{class:"hljs-property"},"src"),s(` = dataURL;
        });
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(" canvastoFile = ("),a("span",{class:"hljs-attr"},"canvas"),s(": "),a("span",{class:"hljs-title class_"},"HTMLCanvasElement"),s(", "),a("span",{class:"hljs-attr"},"type"),s(": string, "),a("span",{class:"hljs-attr"},"quality"),s(": number): "),a("span",{class:"hljs-title class_"},"Promise"),s("<"),a("span",{class:"hljs-title class_"},"Blob"),s(" | "),a("span",{class:"hljs-literal"},"null"),s(`> => {
        `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Promise"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"resolve"),s(") =>")]),s(" canvas."),a("span",{class:"hljs-title function_"},"toBlob"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"blob"),s(") =>")]),s(),a("span",{class:"hljs-title function_"},"resolve"),s(`(blob), type, quality));
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"beforeUpload"),s(" = "),a("span",{class:"hljs-keyword"},"async"),s(" ("),a("span",{class:"hljs-params"},"file: File[]"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"let"),s(" fileName = file["),a("span",{class:"hljs-number"},"0"),s("]."),a("span",{class:"hljs-property"},"name"),s(`;
        `),a("span",{class:"hljs-keyword"},"const"),s(" canvas = "),a("span",{class:"hljs-variable language_"},"document"),s("."),a("span",{class:"hljs-title function_"},"createElement"),s("("),a("span",{class:"hljs-string"},"'canvas'"),s(`);
        `),a("span",{class:"hljs-keyword"},"const"),s(" context = canvas."),a("span",{class:"hljs-title function_"},"getContext"),s("("),a("span",{class:"hljs-string"},"'2d'"),s(") "),a("span",{class:"hljs-keyword"},"as"),s(),a("span",{class:"hljs-title class_"},"CanvasRenderingContext2D"),s(`;
        `),a("span",{class:"hljs-keyword"},"const"),s(" base64 = "),a("span",{class:"hljs-keyword"},"await"),s(),a("span",{class:"hljs-title function_"},"fileToDataURL"),s("(file["),a("span",{class:"hljs-number"},"0"),s(`]);
        `),a("span",{class:"hljs-keyword"},"const"),s(" img = "),a("span",{class:"hljs-keyword"},"await"),s(),a("span",{class:"hljs-title function_"},"dataURLToImage"),s(`(base64);
        canvas.`),a("span",{class:"hljs-property"},"width"),s(" = img."),a("span",{class:"hljs-property"},"width"),s(`;
        canvas.`),a("span",{class:"hljs-property"},"height"),s(" = img."),a("span",{class:"hljs-property"},"height"),s(`;

        context.`),a("span",{class:"hljs-title function_"},"clearRect"),s("("),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"0"),s(", img."),a("span",{class:"hljs-property"},"width"),s(", img."),a("span",{class:"hljs-property"},"height"),s(`);
        context.`),a("span",{class:"hljs-title function_"},"drawImage"),s("(img, "),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"0"),s(", img."),a("span",{class:"hljs-property"},"width"),s(", img."),a("span",{class:"hljs-property"},"height"),s(`);

        `),a("span",{class:"hljs-keyword"},"let"),s(" blob = ("),a("span",{class:"hljs-keyword"},"await"),s(),a("span",{class:"hljs-title function_"},"canvastoFile"),s("(canvas, "),a("span",{class:"hljs-string"},"'image/jpeg'"),s(", "),a("span",{class:"hljs-number"},"0.5"),s(")) "),a("span",{class:"hljs-keyword"},"as"),s(),a("span",{class:"hljs-title class_"},"Blob"),s("; "),a("span",{class:"hljs-comment"},"//quality:0.5可根据实际情况计算"),s(`
        `),a("span",{class:"hljs-keyword"},"const"),s(" f = "),a("span",{class:"hljs-keyword"},"await"),s(),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"File"),s(`([blob], fileName);
        `),a("span",{class:"hljs-keyword"},"return"),s(` [f];
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        uploadUrl,
        beforeUpload
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),C=a("h3",null,"自定义 FormData headers",-1),H=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-uploader"),s(),a("span",{class:"hljs-attr"},":url"),s("="),a("span",{class:"hljs-string"},'"uploadUrl"'),s(),a("span",{class:"hljs-attr"},":data"),s("="),a("span",{class:"hljs-string"},'"formData"'),s(),a("span",{class:"hljs-attr"},":headers"),s("="),a("span",{class:"hljs-string"},'"formData"'),s(),a("span",{class:"hljs-attr"},":with-credentials"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-uploader"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" uploadUrl = "),a("span",{class:"hljs-string"},"'https://xxxxx'"),s(`;
      `),a("span",{class:"hljs-keyword"},"const"),s(` formData = {
        `),a("span",{class:"hljs-attr"},"custom"),s(": "),a("span",{class:"hljs-string"},"'test'"),s(`
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        uploadUrl,
        formData
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),P=a("h3",null,"自定义上传方式(before-xhr-upload)",-1),B=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-comment"},"<!-- 当上传方式为put时，直接上传源文件file流 -->"),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-uploader"),s(),a("span",{class:"hljs-attr"},"url"),s("="),a("span",{class:"hljs-string"},'"https://xxxx"'),s(),a("span",{class:"hljs-attr"},"method"),s("="),a("span",{class:"hljs-string"},'"put"'),s(),a("span",{class:"hljs-attr"},":before-xhr-upload"),s("="),a("span",{class:"hljs-string"},'"beforeXhrUpload"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-uploader"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-comment"},"// source file https://github.com/cubfe/cubui/blob/v4/src/packages/vueComponents/uploader/uploader.ts#L51"),s(`
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"beforeXhrUpload"),s(" = ("),a("span",{class:"hljs-params"},"xhr: XMLHttpRequest, options: any"),s(`) => {
        `),a("span",{class:"hljs-keyword"},"if"),s(" (options."),a("span",{class:"hljs-property"},"method"),s("."),a("span",{class:"hljs-title function_"},"toLowerCase"),s("() == "),a("span",{class:"hljs-string"},"'put'"),s(`) {
          xhr.`),a("span",{class:"hljs-title function_"},"send"),s("(options."),a("span",{class:"hljs-property"},"sourceFile"),s(`);
        } `),a("span",{class:"hljs-keyword"},"else"),s(` {
          xhr.`),a("span",{class:"hljs-title function_"},"send"),s("(options."),a("span",{class:"hljs-property"},"formData"),s(`);
        }
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        beforeXhrUpload
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),W=a("h3",null,"选中文件后，通过按钮手动执行上传",-1),z=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-uploader"),s(),a("span",{class:"hljs-attr"},":url"),s("="),a("span",{class:"hljs-string"},'"uploadUrl"'),s(),a("span",{class:"hljs-attr"},"maximum"),s("="),a("span",{class:"hljs-string"},'"5"'),s(),a("span",{class:"hljs-attr"},":auto-upload"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"uploadRef"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-uploader"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"submitUpload"'),s(">")]),s("手动执行上传"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"danger"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"clearUpload"'),s(">")]),s("手动清空上传"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" uploadUrl = "),a("span",{class:"hljs-string"},"'https://xxxxx'"),s(`;
      `),a("span",{class:"hljs-keyword"},"const"),s(" uploadRef = ref<any>("),a("span",{class:"hljs-literal"},"null"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"submitUpload"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        uploadRef.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"submit"),s(`();
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"clearUpload"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        uploadRef.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"clearUploadQueue"),s(`();
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        uploadUrl,
        uploadRef,
        submitUpload,
        clearUpload
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),D=a("h3",null,"禁用状态",-1),G=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-uploader"),s(),a("span",{class:"hljs-attr"},"disabled"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-uploader"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),L=e('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>auto-upload</td><td>是否在选取文件后立即进行上传，<code class="">false</code> 时需要手动执行 ref submit 方法进行上传</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>name</td><td><code class="">input</code> 标签 <code class="">name</code> 的名称，发到后台的文件参数名</td><td>string</td><td><code class="">&quot;file&quot;</code></td></tr><tr><td>url</td><td>上传服务器的接口地址</td><td>string</td><td>-</td></tr><tr><td>v-model:file-list</td><td>默认已经上传的文件列表</td><td>FileItem[]</td><td><code class="">[]</code></td></tr><tr><td>is-preview</td><td>是否上传成功后展示预览图</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>is-deletable</td><td>是否展示删除按钮</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>method</td><td>上传请求的 http method</td><td>string</td><td><code class="">&quot;post&quot;</code></td></tr><tr><td>list-type</td><td>上传列表的内建样式，支持两种基础样式 <code class="">picture</code>、<code class="">list</code></td><td>string</td><td><code class="">&quot;picture&quot;</code></td></tr><tr><td>capture</td><td>图片<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#htmlattrdefcapture">选取模式</a>，直接调起摄像头</td><td>string</td><td><code class="">false</code></td></tr><tr><td>maximize</td><td>可以设定最大上传文件的大小（字节）</td><td>number | string</td><td><code class="">Number.MAX_VALUE</code></td></tr><tr><td>maximum</td><td>文件上传数量限制</td><td>number | string</td><td><code class="">1</code></td></tr><tr><td>clear-input</td><td>是否需要清空<code class="">input</code>内容，设为<code class="">true</code>支持重复选择上传同一个文件</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>accept</td><td>允许上传的文件类型，<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file">详细说明</a></td><td>string</td><td><code class="">* </code></td></tr><tr><td>headers</td><td>设置上传的请求头部</td><td>object</td><td><code class="">{}</code></td></tr><tr><td>data</td><td>附加上传的信息 formData</td><td>object</td><td><code class="">{}</code></td></tr><tr><td>xhr-state</td><td>接口响应的成功状态（status）值</td><td>number</td><td><code class="">200</code></td></tr><tr><td>with-credentials</td><td>支持发送 cookie 凭证信息</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>multiple</td><td>是否支持文件多选</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>disabled</td><td>是否禁用文件上传</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>timeout</td><td>超时时间，单位为毫秒</td><td>number | string</td><td><code class="">1000 * 30</code></td></tr><tr><td>before-upload</td><td>上传前的函数需要返回一个<code class="">Promise</code>对象</td><td>Function</td><td><code class="">null</code></td></tr><tr><td>before-xhr-upload</td><td>执行 XHR 上传时，自定义方式</td><td>Function(xhr，option)</td><td><code class="">null</code></td></tr><tr><td>before-delete</td><td>除文件时的回调，返回值为 false 时不移除。支持返回一个 <code class="">Promise</code> 对象，<code class="">Promise</code> 对象 resolve(false) 或 reject 时不移除</td><td>Function(file,fileList): boolean <code class="">丨Promise</code></td><td>-</td></tr></tbody></table><blockquote><p>注意：accept、capture 和 multiple 为浏览器 input 标签的原生属性，移动端各种机型对这些属性的支持程度有所差异，因此在不同机型和 WebView 下可能出现一些兼容性问题。</p></blockquote><h3>FileItem</h3><table><thead><tr><th>名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>status</td><td>文件状态值，可选 <code class="">ready</code>,<code class="">uploading</code>,<code class="">success</code>,<code class="">error</code></td><td><code class="">ready</code></td></tr><tr><td>uid</td><td>文件的唯一标识</td><td><code class="">new Date().getTime().toString()</code></td></tr><tr><td>name</td><td>文件名称</td><td>-</td></tr><tr><td>url</td><td>文件路径</td><td>-</td></tr><tr><td>type</td><td>文件类型</td><td><code class="">&quot;image/jpeg&quot;</code></td></tr><tr><td>formData</td><td>上传所需的 data</td><td><code class="">new FormData() </code></td></tr><tr><td>percentage</td><td>上传百分比</td><td><code class="">0</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>start</td><td>文件上传开始</td><td><code class="">options</code></td></tr><tr><td>progress</td><td>文件上传的进度</td><td><code class="">{event,option,percentage}</code></td></tr><tr><td>oversize</td><td>文件大小超过限制时触发</td><td><code class="">files</code></td></tr><tr><td>success</td><td>上传成功</td><td><code class="">{responseText,option,fileItem}</code></td></tr><tr><td>failure</td><td>上传失败</td><td><code class="">{responseText,option,fileItem}</code></td></tr><tr><td>change</td><td>上传文件改变时的状态</td><td><code class="">{fileList,event}</code></td></tr><tr><td>delete</td><td>文件删除事件</td><td><code class="">{files,fileList,index}</code></td></tr><tr><td>file-item-click</td><td>文件上传成功后点击触发</td><td><code class="">{fileItem}</code></td></tr></tbody></table><h3>Uploader Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>默认插槽自定义内容</td></tr><tr><td>upload-icon</td><td>自定义上传按钮中间<code class="">icon</code>区域</td></tr><tr><td>delete-icon</td><td>自定义右上角删除按钮区域</td></tr></tbody></table><h3>Methods</h3><p>通过 <a href="https://vuejs.org/guide/essentials/template-refs.html#template-refs">ref</a> 可以获取到 Uploader 实例并调用实例方法</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>submit</td><td>手动上传模式，执行上传操作</td><td>-</td><td>-</td></tr><tr><td>clearUploadQueue</td><td>清空已选择的文件队列（该方法一般配合在手动模式上传时使用）</td><td>index</td><td>-</td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-uploader-picture-width</td><td><em>100px</em></td></tr><tr><td>--cub-uploader-picture-height</td><td><em>100px</em></td></tr><tr><td>--cub-uploader-background</td><td><em>#f7f8fa</em></td></tr></tbody></table>',17),U={},J="",S=p({__name:"doc",setup(Y,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(F,V)=>{const l=d("demo-block");return o(),r("div",h,[j,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdXBsb2FkZXIgdXJsPSJodHRwczovL3h4eHgiPjwvzCI+Cjwvyj8="},{default:n(()=>[i]),_:1}),g,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdXBsb2FkZXIgOnVybD0ixg9VcmwiIHYtbW9kZWw6ZmlsZS1saXN0PSJkZWZhdWx0RmlsZUxpc3QiIG1heGltdW09IjMiIG11bHRpcGxlPjwvzFk+CjwvynY8c2NyaXB0IGxhbmc9InRzIuQAiWltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUi5wCAIHsKICAgIHNldHVwKCnHDiAgY29uc3QgxnhVcmwgPSAnaHR0cHM6Ly94xAHFSsop7wDNID3JfyhbxykgyVzEAW5hbWU6ICfmlofku7YxLnBuZycsyx91cmw6ynJvc3MubmV0Y29uY2VwdHMuY24vd2Vic2l0ZS9hc3NldHMvbWVkaWEvd2FwL2Jsb2ctd2FwLWJnLTEuanDOWHN0YXR1czogJ3N1Y2Nlc3PNHW1lc3NhZ+QAl+S4iuS8oOaIkOWKn80jdHlwxCBpbWFnZSfJGH3KI/kA5DL/AOT/AOT/AOT1AORlcnJvcv0A4uWksei0pf8A4sQB/wDi5QDiM/8A4v8A4v8A4vUA4uYCoGnPd/AA5uS4rS4uLv8A5sQBfccKXSnoAt5yZXR1cm7rAPTGclVybMpO7wL8xxh9xkPEU307Cjwv5gOsPgo="},{default:n(()=>[u]),_:1}),m,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdXBsb2FkZXIgOnVybD0ixg9VcmwiIHYtbW9kZWw6ZmlsZS1saXN0PSJkZWZhdWx0RmlsZUxpc3QiIG1heGltdW09IjEwIiBtdWx0aXBsZSDELS10eXBlPSLECyLEbcdvYnV0dG9uIMYdc3VjY2VzcyIgc2l6xA9tYWxsIj7kuIrkvKDmlofku7Y8L8o1xEbGEOgAtD4KPC/qANE8c2NyaXB0IGxhbmc9InRzxXdpbXBvcnQgeyByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CiAgZXjFIucA2yB75QCsc2V0dXAoKccOICBjb25zdCDGeFVybCA9ICdodHRwczovL3jEAcVKyinvASggPcl/KFvHKSDJXMQBbmFtZTogJ+YA9TEucG5nJyzLH3VybDrKcm9zcy5uZXRjb25jZXB0cy5jbi93ZWJzaXRlL2Fzc2V0cy9tZWRpYS93YXAvYmxvZy13YXAtYmctMS5qcM5Yc3RhdHVzOiAn5wGKzR1tZXNzYWfkAJfnAZKIkOWKn80j5AHHOiAnaW1hZ2UnyRh9yiP5AOQy/wDk/wDk/wDk9QDkZXJyb3L9AOLlpLHotKX/AOLEAf8A4uUA4jP/AOL/AOL/AOL1AOLmAqBpz3fwAObkuK0uLi7/AObEAX3HCl0p6ALecmV0dXJu6wD0xnJVcmzKTu8C/McYfcZDxFN9Owo8L+YDrD4K"},{default:n(()=>[b]),_:1}),y,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdXBsb2FkZXIgdXJsPSJodHRwczovL3h4eHgixCTHJmJ1dHRvbiB0eXBlPSJzdWNjZXNzIiBzaXrED21hbGwiPuS4iuS8oOaWh+S7tjwvyjXFasUQyGs+Cjwv6gCI"},{default:n(()=>[w]),_:1}),I,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdXBsb2FkZXIgOnVybD0ixg9VcmwiIEBwcm9ncmVzcz0ib25QxwwixDnHO2J1dHRvbiB0eXBlPSJzdWNjxCAgc2l6xA9tYWxsIj7kuIrkvKDmlofku7Y8L8o1xX/FEMZxZXLFEmJyIC/pAJrIf8VxOnBlcmNlbnRhZ2U9IsgaUMkUIsUlc3Ryb2tlLWNvbG9yPSJsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCByZ2JhKDE4LDEyNiwyNTUsMSkgMCUsxRYzMiwxNDfIFjMyLjgxNTYyNcceMTMsMjQyLDIwNMQeMTAwJSnGeDpzdGF0dXP0AJk9PTEwMD8nJzonYWN0aXZlJ8Qy6gD+yDE+Cjwv6gGbPHNjcmlwdCBsYW5nPSJ05gF1aW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzvMHXNob3dUb2FzdMkjQGN1YnVpxG51acwszRkvZGlzdC9wYWNrYWdlcy90xEIvc3R5bMZfZXjFM2RlZmF1bHQge+YBbmV0dXAoKccOICBjb25zdCDpAkEgPSAnaHR0cHM6Ly94xAHFSsop8gEsID3kANw8c3RyaW5nIHwgbnVtYmVyPigwKc466gKOID0gKHsgZXZlbnQsIG9wdGlvbnMsIOoCKyB9OiBhbnkpID0+6QCnINN6LnZhbHXkAIDKO8hzIOoBUy50ZXh0KCfIPyDkuovku7bop6blj5EnICvLPekAsX3ICXJldHVybusAhekBKCzJE+oA2MoU8gCszlp9CsULPC/mAjM+Cg=="},{default:n(()=>[k]),_:1}),f,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdXBsb2FkZXIgdXJsPSJodHRwczovL3h4eHgiIGNhcHR1cmU+PC/MKj4KPC/KRw=="},{default:n(()=>[x]),_:1}),A,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdXBsb2FkZXIgdXJsPSJodHRwczovL3h4eHgiIG11bHRpcGxlIG1heGltdW09IjUiPjwvzDc+CjwvylQ="},{default:n(()=>[v]),_:1}),X,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdXBsb2FkZXIgOnVybD0ixg9VcmwiIG11bHRpcGxlIDptYXhpbWl6ZT0iMTAyNCAqIDUwIiBAb3ZlcnPFFm9uT8cMIj48L8xWPgo8L8pzPHNjcmlwdCBsYW5nPSJ0cyLkAIZpbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnO8wdc2hvd1RvYXN0ySNAY3VidWnEbnVpzCzNGS9kaXN0L3BhY2thZ2VzL3TEQi9zdHlsxl9leMUzZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IOkBGSA9ICdodHRwczovL3jEAcVKyinqAQ0gPSAoZmlsZXM6IEZpbGVbXSkgPT7JVyDqANQudGV4dCgn6AFRIOinpuWPkSDmlofku7blpKflsI/kuI3og73otoXov4cgNTBrYicpyHd9yAlyZXR1cm7LYekAtCzJE+oAns4+fQrFCzwv5gGjPgo="},{default:n(()=>[Z]),_:1}),_,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdXBsb2FkZXIgOnVybD0ixg9VcmwiIG11bHRpcGxlIDpiZWZvcmXHKz0ixg9VxQ4iPjwvzEc+CjwvymQ8c2NyaXB0IGxhbmc9InRzIsR3aW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzsKICBleMUdZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IMZzVXJsID0gJ2h0dHBzOi8veMQBxUrKKWZpbGVUb0RhdGFVUkwgPSAoxBE6IEJsb2IpOiBQcm9taXNlPGFueT4gPT7JZSAgcmV0dXJuIG5ld8glKChyZXNvbHZlKc4qyGpyZeUBSz3FNEZpbGVSxREoKegAkcZXxBQub27lATJuZOQAksZRx10oKGUudGFyZ2V0IGFzy0cpLnJlc3VsdNROxAdBc+cA5OUA4csmfckMfe4BGmTGMFRvSW1hZ2XkAInHEjogc3RyaW5n6wEgSFRNTMUnRWxlbWVudP8BLf8BLXN0IGltZ+cBKsVX7gElaW1n5wEi5ACW7QEeaW1n0StzcmMgPegAz/8A+cR8Y2FudmFzdG/kAV3EYcYQOiDkAOVDxQznAOYsIHR5cGXoAQ8sIHF1YWxpdHk6IG51bWJlcusBIOQCTyB8IG51bGz/ARvwARvGfS50b8RDKChi5AKY7ADxxRHmAInpAIEp+ADa7AOdID0gYXN5bmPoAvLkAO5bXe8Bj2xl5gMiTmFt5AELxAtbMF0ubmFtZcha7gE25AFpb2N15AEeLmNyZWF06AISKCfGISfrAZ/HOW9udGV4dCA9x0MuZ2V0Q8YUKCcyZCcp5ALp5gF4UmVuZGXkAWzHIDJE0E1iYXNlNjTkANx3YWnvA97lAOlbMF3xAILmAm3GMu4C9ijGUMwy5gCkd2lkdGggPcQ7xgzRImhlaWdo5ADWxCPGDTsKzHnkAMEuY2xlYXJSZWN0KDAsIDAsylDGC8Y4zH/HOGRyYXfmAKJpbWfFOts9yT7kAc/kAjHkAtbmAO/sAuznAuksICdpxFovanBlZycsIDAuNSnlAYTkAoI7IC8v6ALnMC415Y+v5qC55o2u5a6e6ZmF5oOF5Ya16K6h566X7wFkZukBYugE/yhb5ACLXSzpAmHrAOfnAxZbZl3xAsrHG+oCpOkF6yzJE+wC6M5AfQrFCzwv5gZ9Pgo="},{default:n(()=>[R]),_:1}),C,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdXBsb2FkZXIgOnVybD0ixg9VcmwiIDpkYXRhPSJmb3JtRGF0YSIgOmhlxCpzzRR3aXRoLWNyZWRlbnRpYWxzPSJ0cnVlIj48L8xePgo8L8p7PHNjcmlwdCBsYW5nPSJ0cyLkAI5pbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnOwogIGV4xR1kZWZhdWx0IHsKICAgIHNldHVwKCnHDiAgY29uc3QgxnNVcmwgPSAnaHR0cHM6Ly94xAHFSsop6ADFID3JQiAgY3VzdG9tOiAndGVzdCfHF33IOXJldHVybssvyW0syRPIV848fQrFCzwv5gD7Pgo="},{default:n(()=>[H]),_:1}),P,t(l,{"data-type":"vue","data-value":"PCEtLSDlvZPkuIrkvKDmlrnlvI/kuLpwdXTml7bvvIznm7TmjqXHHrqQ5paH5Lu2ZmlsZea1gSAtLT4KPHRlbXBsYXRlPgogIDxjdWItdXBsb2FkZXIgdXJsPSJodHRwczovL3h4eHgiIG1ldGhvZD0icHV0IiA6YmVmb3JlLXhocsc1PSLGE1hoclXFESI+PC/MVD4KPC/KcQo8c2NyaXB0IGxhbmc9InRzIuQAhWltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7CiAgZXjFHWRlZmF1bHQgewogICAgc2V0dXAoKccOICAvLyBzb3VyY2Ug5ADqIOgAw2dpdGh1Yi5jb23kAJRmZcQGdWkvYmxvYi92NC9zcmMvcGFja2FnZXMvdnVlQ29tcG9uZW50cy/oAL/JCS50cyNMNTHHcGNvbnN0IO8A+yA9ICh4aHI6IFhNTEh0dHBSZXF1ZXN0LCBvcHRpb25zOiBhbnkpID0+6QC3ICBpZiAoxx8u5gFrLnRvTG93ZXJDYXNlKCkgPT0gJ3B1dCfqAOzEAXhoci5zZW5kyTzmAP5GaWxlKeQBNcYBfSBlbHNl3jlmb3JtRGF0Ycw3xwp9yBNyZXR1cm7LSO8A+c4wxD99Owo8L+YB6z4K"},{default:n(()=>[B]),_:1}),W,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdXBsb2FkZXIgOnVybD0ixg9VcmwiIG1heGltdW09IjUiIDphdXRvxyw9ImZhbHNlIiByZWbIMVJlZiI+PC/MUcViYnIgL8lrYnV0dG9uIHR5cGU9InN1Y2Nlc3MiIHNpesQPbWFsbCIgQGNsaWNrxB5ibWl0VcVLIj7miYvliqjmiafooYzkuIrkvKDGa8ZR1mBkYW5nZXLXX2NsZWFyz164heeputRePC/qATU8c2NyaXB0IGxhbmc9InRzIsR9aW1wb3J0IHvkAREgfSBmcm9tICd2dWUnOwogIGV4xR1kZWZhdWx0IHsKICAgIHNldHVwKCnHDiAgY29uc3Qg6QF8ID0gJ2h0dHBzOi8veMQBxUrQKVJlZiA9xHQ8YW55PihudWxsKc4o7AFGID0gKCkgPT7JdCDKRy52YWx1ZS7GLyjJRX3OTusBNd9NxE3LLlF1ZXVl01dyZXR1cm7RRFVybCzSV8oT7ADWyhbLcM5ofQrFCzwv5gG7Pgo="},{default:n(()=>[z]),_:1}),D,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdXBsb2FkZXIgZGlzYWJsZWQ+PC/MGD4KPC/KNQ=="},{default:n(()=>[G]),_:1}),L])}}});export{S as default,J as excerpt,U as frontmatter};
