import{d as p,r as d,b as r,k as t,w as n,aq as e,e as a,o,l as s}from"./style_icon.js";const h={class:"markdown-body"},i=e(`<h1>Uploader</h1><h3>Intro</h3><p>Used to upload local pictures or files to the server.</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Uploader</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Uploader</span>);
</code></pre><h3>Basic Usage</h3>`,6),j=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-uploader"),s(),a("span",{class:"hljs-attr"},"url"),s("="),a("span",{class:"hljs-string"},'"https://xxxx"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-uploader"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),u=a("h3",null,"Upload status",-1),g=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-uploader"),s(),a("span",{class:"hljs-attr"},":url"),s("="),a("span",{class:"hljs-string"},'"uploadUrl"'),s(),a("span",{class:"hljs-attr"},"v-model:file-list"),s("="),a("span",{class:"hljs-string"},'"defaultFileList"'),s(),a("span",{class:"hljs-attr"},"maximum"),s("="),a("span",{class:"hljs-string"},'"3"'),s(),a("span",{class:"hljs-attr"},"multiple"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-uploader"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" uploadUrl = "),a("span",{class:"hljs-string"},"'https://xxxxx'"),s(`;
      `),a("span",{class:"hljs-keyword"},"const"),s(" defaultFileList = "),a("span",{class:"hljs-title function_"},"reactive"),s(`([
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'file 1.png'"),s(`,
          `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg'"),s(`,
          `),a("span",{class:"hljs-attr"},"status"),s(": "),a("span",{class:"hljs-string"},"'success'"),s(`,
          `),a("span",{class:"hljs-attr"},"message"),s(": "),a("span",{class:"hljs-string"},"'upload success'"),s(`,
          `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'image'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'file 2.png'"),s(`,
          `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg'"),s(`,
          `),a("span",{class:"hljs-attr"},"status"),s(": "),a("span",{class:"hljs-string"},"'error'"),s(`,
          `),a("span",{class:"hljs-attr"},"message"),s(": "),a("span",{class:"hljs-string"},"'upload error'"),s(`,
          `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'image'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'file 3.png'"),s(`,
          `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg'"),s(`,
          `),a("span",{class:"hljs-attr"},"status"),s(": "),a("span",{class:"hljs-string"},"'uploading'"),s(`,
          `),a("span",{class:"hljs-attr"},"message"),s(": "),a("span",{class:"hljs-string"},"'uploading...'"),s(`,
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
`)])],-1),m=a("h3",null,"Basic usage - upload list display",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-uploader"),s(),a("span",{class:"hljs-attr"},":url"),s("="),a("span",{class:"hljs-string"},'"uploadUrl"'),s(),a("span",{class:"hljs-attr"},"v-model:file-list"),s("="),a("span",{class:"hljs-string"},'"defaultFileList"'),s(),a("span",{class:"hljs-attr"},"maximum"),s("="),a("span",{class:"hljs-string"},'"10"'),s(),a("span",{class:"hljs-attr"},"multiple"),s(),a("span",{class:"hljs-attr"},"list-type"),s("="),a("span",{class:"hljs-string"},'"list"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(">")]),s("Upload files"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-uploader"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" uploadUrl = "),a("span",{class:"hljs-string"},"'https://xxxxx'"),s(`;
      `),a("span",{class:"hljs-keyword"},"const"),s(" defaultFileList = "),a("span",{class:"hljs-title function_"},"reactive"),s(`([
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'file 1.png'"),s(`,
          `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg'"),s(`,
          `),a("span",{class:"hljs-attr"},"status"),s(": "),a("span",{class:"hljs-string"},"'success'"),s(`,
          `),a("span",{class:"hljs-attr"},"message"),s(": "),a("span",{class:"hljs-string"},"'upload success'"),s(`,
          `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'image'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'file 2.png'"),s(`,
          `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg'"),s(`,
          `),a("span",{class:"hljs-attr"},"status"),s(": "),a("span",{class:"hljs-string"},"'error'"),s(`,
          `),a("span",{class:"hljs-attr"},"message"),s(": "),a("span",{class:"hljs-string"},"'upload error'"),s(`,
          `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'image'"),s(`
        },
        {
          `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'file 3.png'"),s(`,
          `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg'"),s(`,
          `),a("span",{class:"hljs-attr"},"status"),s(": "),a("span",{class:"hljs-string"},"'uploading'"),s(`,
          `),a("span",{class:"hljs-attr"},"message"),s(": "),a("span",{class:"hljs-string"},"'uploading...'"),s(`,
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
`)])],-1),y=a("h3",null,"Custom upload style",-1),f=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-uploader"),s(),a("span",{class:"hljs-attr"},"url"),s("="),a("span",{class:"hljs-string"},'"https://xxxx"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(">")]),s("Upload files"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-uploader"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),w=a("h3",null,"Custom upload uses default progress bar",-1),I=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-uploader"),s(),a("span",{class:"hljs-attr"},":url"),s("="),a("span",{class:"hljs-string"},'"uploadUrl"'),s(" @"),a("span",{class:"hljs-attr"},"progress"),s("="),a("span",{class:"hljs-string"},'"onProgress"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(">")]),s("Upload files"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
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
`)])],-1),x=a("h3",null,"Directly activate the camera (effective on the mobile terminal)",-1),k=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-uploader"),s(),a("span",{class:"hljs-attr"},"url"),s("="),a("span",{class:"hljs-string"},'"https://xxxx"'),s(),a("span",{class:"hljs-attr"},"capture"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-uploader"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),v=a("h3",null,"Limit the number of uploads to 5",-1),A=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-uploader"),s(),a("span",{class:"hljs-attr"},"url"),s("="),a("span",{class:"hljs-string"},'"https://xxxx"'),s(),a("span",{class:"hljs-attr"},"multiple"),s(),a("span",{class:"hljs-attr"},"maximum"),s("="),a("span",{class:"hljs-string"},'"5"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-uploader"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),X=a("h3",null,"Limit upload size (up to 50kb per file)",-1),C=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},"'oversize limit upload size (up to 50kb per file)'"),s(`);
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        uploadUrl,
        onOversize
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),Z=a("h3",null,"Image compression (handled in the beforeupload hook)",-1),_=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),z=a("h3",null,"Custom data FormData , headers",-1),H=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),R=a("h3",null,"Customize XHR upload(before-xhr-upload）",-1),G=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-comment"},"<!-- When the upload method is put, upload the source file stream directly -->"),s(`
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
`)])],-1),D=a("h3",null,"Once the file is selected, manually perform the upload via the button",-1),P=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-uploader"),s(),a("span",{class:"hljs-attr"},":url"),s("="),a("span",{class:"hljs-string"},'"uploadUrl"'),s(),a("span",{class:"hljs-attr"},"maximum"),s("="),a("span",{class:"hljs-string"},'"5"'),s(),a("span",{class:"hljs-attr"},":auto-upload"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"uploadRef"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-uploader"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"br"),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"submitUpload"'),s(">")]),s("Perform upload"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"danger"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"clearUpload"'),s(">")]),s("Clear upload"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
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
`)])],-1),W=a("h3",null,"Disabled state",-1),V=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-uploader"),s(),a("span",{class:"hljs-attr"},"disabled"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-uploader"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),U=e('<h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>auto-upload</td><td>Whether to upload the file immediately after selecting it, if false, you need to manually execute the ref submit method to upload</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>name</td><td>The name of the <code class="">input</code> tag <code class="">name</code>, the file parameter name sent to the background</td><td>string</td><td><code class="">&quot;file&quot;</code></td></tr><tr><td>url</td><td>The interface address of the upload server</td><td>string</td><td>-</td></tr><tr><td>v-model:file-list</td><td>List of uploaded files by default</td><td>FileItem[]</td><td><code class="">[]</code></td></tr><tr><td>is-preview</td><td>Whether to display the preview image after the upload is successful</td><td>boolean</td><td>true</td></tr><tr><td>is-deletable</td><td>Whether to display the delete button</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>method</td><td>The http method of upload request</td><td>string</td><td><code class="">&quot;post&quot;</code></td></tr><tr><td>list-type</td><td>Built-in stylesheets, support for three types: <code class="">picture</code>、<code class="">list</code></td><td>string</td><td>&quot;picture&quot;</td></tr><tr><td>capture</td><td>Capture, can be set to <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#htmlattrdefcapture">camera</a>，turn on the camera directly</td><td>string</td><td>false</td></tr><tr><td>maximize</td><td>You can set the maximum upload file size (bytes)</td><td>number | string</td><td><code class="">Number.MAX_VALUE</code></td></tr><tr><td>maximum</td><td>File upload limit</td><td>number | string</td><td><code class="">1</code></td></tr><tr><td>clear-input</td><td>Whether to clear the <code class="">input</code> content, set to <code class="">true</code> to support repeated selection and upload of the same file</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>accept</td><td>File types that can be accepted. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept">input accept Attribute</a></td><td>string</td><td>*</td></tr><tr><td>headers</td><td>Set request headers</td><td>object</td><td><code class="">{} </code></td></tr><tr><td>data</td><td>Uploading extra params or function which can return uploading extra params</td><td>object</td><td>{}</td></tr><tr><td>upload-icon-size</td><td>Upload area [icon size] (#/en-US/component/icon) size, such as <code class="">20px</code> <code class="">2em</code> <code class="">2rem</code></td><td>string | object</td><td>-</td></tr><tr><td>xhr-state</td><td>The success status (status) value of the interface response</td><td>number</td><td><code class="">200</code></td></tr><tr><td>with-credentials</td><td>The ajax upload with cookie sent</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>multiple</td><td>Whether to support multiple file selection</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>disabled</td><td>Whether to disable file upload</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>timeout</td><td>timeout, in milliseconds</td><td>number | string</td><td><code class="">1000 * 30 </code></td></tr><tr><td>before-upload</td><td>Hook before reading the file, return false to stop reading the file, can return Promise</td><td>Function</td><td><code class="">null</code></td></tr><tr><td>before-xhr-upload</td><td>Customize the method when uploading XHR</td><td>Function(xhr，option)</td><td><code class="">null</code></td></tr><tr><td>before-delete</td><td>Hook before delete the file, return false to stop reading the file, can return Promise</td><td>Function(file,fileList): boolean <code class="">丨Promise</code></td><td>-</td></tr></tbody></table><h3>FileItem</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td>status</td><td>File status value, optional <code class="">ready</code>,<code class="">uploading</code>,<code class="">success</code>,<code class="">error</code></td><td><code class="">ready</code></td></tr><tr><td>uid</td><td>Unique ID of the file</td><td><code class="">new Date().getTime().toString()</code></td></tr><tr><td>name</td><td>File name</td><td>-</td></tr><tr><td>url</td><td>File path</td><td>-</td></tr><tr><td>type</td><td>File type</td><td><code class="">&quot;image/jpeg&quot; </code></td></tr><tr><td>formData</td><td>Upload the required data</td><td><code class="">new FormData()</code></td></tr><tr><td>percentage</td><td>Upload percentage</td><td><code class="">0</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>start</td><td>File upload starts</td><td><code class="">options</code></td></tr><tr><td>progress</td><td>The progress of the file upload</td><td><code class="">{event,option,percentage}</code></td></tr><tr><td>oversize</td><td>Triggered when the file size exceeds the limit</td><td><code class="">files</code></td></tr><tr><td>success</td><td>Uploaded successfully</td><td><code class="">{responseText,option,fileItem}</code></td></tr><tr><td>failure</td><td>Upload failed</td><td><code class="">{responseText,option,fileItem}</code></td></tr><tr><td>change</td><td>The state when the uploaded file changes</td><td><code class="">{fileList,event}</code></td></tr><tr><td>delete</td><td>File delete event</td><td><code class="">{files,fileList,index}</code></td></tr><tr><td>file-item-click</td><td>Click to trigger after the file is uploaded successfully</td><td><code class="">{fileItem}</code></td></tr></tbody></table><h3>Uploader Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Default slot</td></tr><tr><td>upload-icon</td><td>Custom Uploader Button Center <code class="">icon</code></td></tr><tr><td>delete-icon</td><td>Custom Right Delete Button</td></tr></tbody></table><h3>Methods</h3><p>Use <a href="https://vuejs.org/guide/essentials/template-refs.html#template-refs">ref</a> to get Uploader instance and call instance methods.</p><table><thead><tr><th>Name</th><th>Description</th><th>Arguments</th><th>Return value</th></tr></thead><tbody><tr><td>submit</td><td>Manual upload mode, perform upload operation</td><td>-</td><td>-</td></tr><tr><td>clearUploadQueue</td><td>Empty the selected file queue (this method is generally used when uploading in manual mode)</td><td>index</td><td>-</td></tr></tbody></table><h2>Theming</h2><h3>CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/component/configprovider">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th></tr></thead><tbody><tr><td>--cub-uploader-picture-width</td><td><em>100px</em></td></tr><tr><td>--cub-uploader-picture-height</td><td><em>100px</em></td></tr><tr><td>--cub-uploader-background</td><td><em>#f7f8fa</em></td></tr></tbody></table>',16),J={},N="",M=p({__name:"doc.en-US",setup(B,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(F,Y)=>{const l=d("demo-block");return o(),r("div",h,[i,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdXBsb2FkZXIgdXJsPSJodHRwczovL3h4eHgiPjwvzCI+Cjwvyj8="},{default:n(()=>[j]),_:1}),u,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdXBsb2FkZXIgOnVybD0ixg9VcmwiIHYtbW9kZWw6ZmlsZS1saXN0PSJkZWZhdWx0RmlsZUxpc3QiIG1heGltdW09IjMiIG11bHRpcGxlPjwvzFk+CjwvynY8c2NyaXB0IGxhbmc9InRzIuQAiWltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUi5wCAIHsKICAgIHNldHVwKCnHDiAgY29uc3QgxnhVcmwgPSAnaHR0cHM6Ly94xAHFSsop7wDNID3JfyhbxykgyVzEAW5hbWU6ICfkARAgMS5wbmcnLMsedXJsOspxb3NzLm5ldGNvbmNlcHRzLmNuL3dlYnNpdGUvYXNzZXRzL21lZGlhL3dhcC9ibG9nLXdhcC1iZy0xLmpwzlhzdGF0dXM6ICdzdWNjZXNzzR1tZXNzYWfkAJbmAPcg1CV0eXDEImltYWdlJ8kYfcoj+ADlMv8A5f8A5f8A5fUA5WVycm9y/gDj0iP/AOH6AOEz/wDh/wDh/wDh9QDh5gDFac938ADlaW5nLi4u/wDlxAF9xwpdKegC3XJldHVybusA88ZSVXJsyk7vAvvHGH3GQ8RTfTsKPC/mA6s+Cg=="},{default:n(()=>[g]),_:1}),m,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdXBsb2FkZXIgOnVybD0ixg9VcmwiIHYtbW9kZWw6ZmlsZS1saXN0PSJkZWZhdWx0RmlsZUxpc3QiIG1heGltdW09IjEwIiBtdWx0aXBsZSDELS10eXBlPSLECyLEbcdvYnV0dG9uIMYdc3VjY2VzcyIgc2l6xA9tYWxsIj5V5QCDIMR3czwvyjXERsYQ6AC0Pgo8L+oA0TxzY3JpcHQgbGFuZz0idHPFd2ltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKICBleMUi5wDbIHvlAKxzZXR1cCgpxw4gIGNvbnN0IMZ4VXJsID0gJ2h0dHBzOi8veMQBxUrKKe8BKCA9yX8oW8cpIMlcxAFuYW1lOiAn5AD0IDEucG5nJyzLHnVybDrKcW9zcy5uZXRjb25jZXB0cy5jbi93ZWJzaXRlL2Fzc2V0cy9tZWRpYS93YXAvYmxvZy13YXAtYmctMS5qcM5Yc3RhdHVzOiAn5wGJzR1tZXNzYWfkAJbmAPcg1CXkAcg6ICdpbWFnZSfJGH3KI/gA5TL/AOX/AOX/AOX1AOVlcnJvcv4A49Ij/wDh+gDhM/8A4f8A4f8A4fUA4eYAxWnPd/AA5WluZy4uLv8A5cQBfccKXSnoAt1yZXR1cm7rAPPGUlVybMpO7wL7xxh9xkPEU307Cjwv5gOrPgo="},{default:n(()=>[b]),_:1}),y,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdXBsb2FkZXIgdXJsPSJodHRwczovL3h4eHgixCTHJmJ1dHRvbiB0eXBlPSJzdWNjZXNzIiBzaXrED21hbGwiPlXFSSBmaWxlczwvyjXFasUQyGs+Cjwv6gCI"},{default:n(()=>[f]),_:1}),w,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdXBsb2FkZXIgOnVybD0ixg9VcmwiIEBwcm9ncmVzcz0ib25QxwwixDnHO2J1dHRvbiB0eXBlPSJzdWNjxCAgc2l6xA9tYWxsIj5VxU8gZmlsZXM8L8o1xX/FEMZxZXLFEmJyIC/pAJrIf8VxOnBlcmNlbnRhZ2U9IsgaUMkUIsUlc3Ryb2tlLWNvbG9yPSJsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCByZ2JhKDE4LDEyNiwyNTUsMSkgMCUsxRYzMiwxNDfIFjMyLjgxNTYyNcceMTMsMjQyLDIwNMQeMTAwJSnGeDpzdGF0dXP0AJk9PTEwMD8nJzonYWN0aXZlJ8Qy6gD+yDE+Cjwv6gGbPHNjcmlwdCBsYW5nPSJ05gF1aW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzvMHXNob3dUb2FzdMkjQGN1YnVpxG51acwszRkvZGlzdC9wYWNrYWdlcy90xEIvc3R5bMZfZXjFM2RlZmF1bHQge+YBbmV0dXAoKccOICBjb25zdCDpAkEgPSAnaHR0cHM6Ly94xAHFSsop8gEsID3kANw8c3RyaW5nIHwgbnVtYmVyPigwKc466gKOID0gKHsgZXZlbnQsIG9wdGlvbnMsIOoCKyB9OiBhbnkpID0+6QCnINN6LnZhbHXkAIDKO8hzIOoBUy50ZXh0KCfIPyDkuovku7bop6blj5EnICvLPekAsX3ICXJldHVybusAhekBKCzJE+oA2MoU8gCszlp9CsULPC/mAjM+Cg=="},{default:n(()=>[I]),_:1}),x,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdXBsb2FkZXIgdXJsPSJodHRwczovL3h4eHgiIGNhcHR1cmU+PC/MKj4KPC/KRw=="},{default:n(()=>[k]),_:1}),v,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdXBsb2FkZXIgdXJsPSJodHRwczovL3h4eHgiIG11bHRpcGxlIG1heGltdW09IjUiPjwvzDc+CjwvylQ="},{default:n(()=>[A]),_:1}),X,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdXBsb2FkZXIgOnVybD0ixg9VcmwiIG11bHRpcGxlIDptYXhpbWl6ZT0iMTAyNCAqIDUwIiBAb3ZlcnPFFm9uT8cMIj48L8xWPgo8L8pzPHNjcmlwdCBsYW5nPSJ0cyLkAIZpbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnO8wdc2hvd1RvYXN0ySNAY3VidWnEbnVpzCzNGS9kaXN0L3BhY2thZ2VzL3TEQi9zdHlsxl9leMUzZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IOkBGSA9ICdodHRwczovL3jEAcVKyinqAQ0gPSAoZmlsZXM6IEZpbGVbXSkgPT7JVyDqANQudGV4dCgn6AFRIGxpbWnIciDFEih1cCB0byA1MGtiIHBlciDEVyknKch6fcgJcmV0dXJuy2TGRVVybCzJE+oAoc4+fQrFCzwv5gGmPgo="},{default:n(()=>[C]),_:1}),Z,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdXBsb2FkZXIgOnVybD0ixg9VcmwiIG11bHRpcGxlIDpiZWZvcmXHKz0ixg9VxQ4iPjwvzEc+CjwvymQ8c2NyaXB0IGxhbmc9InRzIsR3aW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzsKICBleMUdZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IMZzVXJsID0gJ2h0dHBzOi8veMQBxUrKKWZpbGVUb0RhdGFVUkwgPSAoxBE6IEJsb2IpOiBQcm9taXNlPGFueT4gPT7JZSAgcmV0dXJuIG5ld8glKChyZXNvbHZlKc4qyGpyZeUBSz3FNEZpbGVSxREoKegAkcZXxBQub27lATJuZOQAksZRx10oKGUudGFyZ2V0IGFzy0cpLnJlc3VsdNROxAdBc+cA5OUA4csmfckMfe4BGmTGMFRvSW1hZ2XkAInHEjogc3RyaW5n6wEgSFRNTMUnRWxlbWVudP8BLf8BLXN0IGltZ+cBKsVX7gElaW1n5wEi5ACW7QEeaW1n0StzcmMgPegAz/8A+cR8Y2FudmFzdG/kAV3EYcYQOiDkAOVDxQznAOYsIHR5cGXoAQ8sIHF1YWxpdHk6IG51bWJlcusBIOQCTyB8IG51bGz/ARvwARvGfS50b8RDKChi5AKY7ADxxRHmAInpAIEp+ADa7AOdID0gYXN5bmPoAvLkAO5bXe8Bj2xl5gMiTmFt5AELxAtbMF0ubmFtZcha7gE25AFpb2N15AEeLmNyZWF06AISKCfGISfrAZ/HOW9udGV4dCA9x0MuZ2V0Q8YUKCcyZCcp5ALp5gF4UmVuZGXkAWzHIDJE0E1iYXNlNjTkANx3YWnvA97lAOlbMF3xAILmAm3GMu4C9ijGUMwy5gCkd2lkdGggPcQ7xgzRImhlaWdo5ADWxCPGDTsKzHnkAMEuY2xlYXJSZWN0KDAsIDAsylDGC8Y4zH/HOGRyYXfmAKJpbWfFOts9yT7kAc/kAjHkAtbmAO/sAuznAuksICdpxFovanBlZycsIDAuNSnlAYTkAoI7IC8v6ALnMC415Y+v5qC55o2u5a6e6ZmF5oOF5Ya16K6h566X7wFkZukBYugE/yhb5ACLXSzpAmHrAOfnAxZbZl3xAsrHG+oCpOkF6yzJE+wC6M5AfQrFCzwv5gZ9Pgo="},{default:n(()=>[_]),_:1}),z,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdXBsb2FkZXIgOnVybD0ixg9VcmwiIDpkYXRhPSJmb3JtRGF0YSIgOmhlxCpzzRR3aXRoLWNyZWRlbnRpYWxzPSJ0cnVlIj48L8xePgo8L8p7PHNjcmlwdCBsYW5nPSJ0cyLkAI5pbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnOwogIGV4xR1kZWZhdWx0IHsKICAgIHNldHVwKCnHDiAgY29uc3QgxnNVcmwgPSAnaHR0cHM6Ly94xAHFSsop6ADFID3JQiAgY3VzdG9tOiAndGVzdCfHF33IOXJldHVybssvyW0syRPIV848fQrFCzwv5gD7Pgo="},{default:n(()=>[H]),_:1}),R,t(l,{"data-type":"vue","data-value":"PCEtLSBXaGVuIHRoZSB1cGxvYWQgbWV0aG9kIGlzIHB1dCzIFsQhc291cmNlIGZpbGUgc3RyZWFtIGRpcmVjdGx5IC0tPgo8dGVtcGxhdGU+CiAgPGN1Yi3GPWVyIHVybD0iaHR0cHM6Ly94eHh4IsdoPSJwdXQiIDpiZWZvcmUteGhyxzU9IsYTWGhyVcURIj48L8xUPgo8L8pxCjxzY3JpcHQgbGFuZz0idHMi5ACFaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzsKICBleMUdZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIC8v7QD36ADDZ2l0aHViLmNvbeQAlGZlxAZ1aS9ibG9iL3Y0L3NyYy9wYWNrYWdlcy92dWVDb21wb25lbnRzL+gAv8kJLnRzI0w1McdwY29uc3Qg7wD7ID0gKHhocjogWE1MSHR0cFJlcXVlc3QsIG9wdGlvbnM6IGFueSkgPT7pALcgIGlmICjHHy7mAWsudG9Mb3dlckNhc2UoKSA9PSAncHV0J+oA7MQBeGhyLnNlbmTJPOYA/kZpbGUp5AE1xgF9IGVsc2XeOWZvcm1EYXRhzDfHCn3IE3JldHVybstI7wD5zjDEP307Cjwv5gHrPgo="},{default:n(()=>[G]),_:1}),D,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdXBsb2FkZXIgOnVybD0ixg9VcmwiIG1heGltdW09IjUiIDphdXRvxyw9ImZhbHNlIiByZWbIMVJlZiI+PC/MUcViYnIgL8lrYnV0dG9uIHR5cGU9InN1Y2Nlc3MiIHNpesQPbWFsbCIgQGNsaWNrxB5ibWl0VcVLIj5QZXJmb3JtIMZbxmfGTdZcZGFuZ2Vy11tjbGVhcshaQ8QN1Vg8L+oBKzxzY3JpcHQgbGFuZz0idHMixHdpbXBvcnQge+QBByB9IGZyb20gJ3Z1ZSc7CiAgZXjFHWRlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdMd9VXJsID0gJ2h0dHBzOi8veMQBxUrQKVJlZiA9xHQ8YW55PihudWxsKc4o7AE8ID0gKCkgPT7JdCDKRy52YWx1ZS7GLyjJRX3OTusBL99NxE3LLlF1ZXVl01dyZXR1cm7RRFVybCzSV8oT7ADWyhbLcM5ofQrFCzwv5gG7Pgo="},{default:n(()=>[P]),_:1}),W,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdXBsb2FkZXIgZGlzYWJsZWQ+PC/MGD4KPC/KNQ=="},{default:n(()=>[V]),_:1}),U])}}});export{M as default,N as excerpt,J as frontmatter};
