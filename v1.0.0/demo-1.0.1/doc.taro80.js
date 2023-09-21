import{d as p,r as e,b as c,k as o,w as r,aq as t,o as d,e as a,l as s}from"./style_icon.js";const h={class:"markdown-body"},u=t(`<h1>Uploader 上传</h1><h3>介绍</h3><p>用于将本地的图片或文件上传至服务器。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Uploader</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Uploader</span>);
</code></pre><h3>基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cub-uploader</span> <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;uploadUrl&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cub-uploader</span>&gt;</span>
</code></pre><h3>上传状态</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cub-uploader</span> <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;uploadUrl&quot;</span> <span class="hljs-attr">v-model:file-list</span>=<span class="hljs-string">&quot;defaultFileList&quot;</span> <span class="hljs-attr">maximum</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">multiple</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cub-uploader</span>&gt;</span>
</code></pre><h3>基础用法-上传列表展示</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cub-uploader</span> <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;uploadUrl&quot;</span> <span class="hljs-attr">v-model:file-list</span>=<span class="hljs-string">&quot;defaultFileList&quot;</span> <span class="hljs-attr">maximum</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">multiple</span> <span class="hljs-attr">list-type</span>=<span class="hljs-string">&quot;list&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cub-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>上传文件<span class="hljs-tag">&lt;/<span class="hljs-name">cub-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">cub-uploader</span>&gt;</span>
</code></pre><h3>自定义上传样式</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cub-uploader</span> <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;uploadUrl&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cub-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>上传文件<span class="hljs-tag">&lt;/<span class="hljs-name">cub-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">cub-uploader</span>&gt;</span>
</code></pre><h3>自定义上传使用默认进度条</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cub-uploader</span> <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;uploadUrl&quot;</span> @<span class="hljs-attr">progress</span>=<span class="hljs-string">&quot;onProgress&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">cub-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>上传文件<span class="hljs-tag">&lt;/<span class="hljs-name">cub-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">cub-uploader</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">cub-progress</span>
  <span class="hljs-attr">:percentage</span>=<span class="hljs-string">&quot;progressPercentage&quot;</span>
  <span class="hljs-attr">stroke-color</span>=<span class="hljs-string">&quot;linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)&quot;</span>
  <span class="hljs-attr">:status</span>=<span class="hljs-string">&quot;progressPercentage==100?&#39;&#39;:&#39;active&#39;&quot;</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">cub-progress</span>&gt;</span>
</code></pre><h3>直接调起摄像头 camera</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cub-uploader</span> <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;uploadUrl&quot;</span> <span class="hljs-attr">:source-type</span>=<span class="hljs-string">&quot;[&#39;camera&#39;]&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cub-uploader</span>&gt;</span>
</code></pre><h3>使用前摄像头拍摄 3s 视频并上传(仅支持微信小程序)</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cub-uploader</span> <span class="hljs-attr">:max-duration</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">:source-type</span>=<span class="hljs-string">&quot;[&#39;camera&#39;]&quot;</span> <span class="hljs-attr">camera</span>=<span class="hljs-string">&quot;front&quot;</span> <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;uploadUrl&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cub-uploader</span>&gt;</span>
</code></pre><h3>限制上传数量 5 个</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cub-uploader</span> <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;uploadUrl&quot;</span> <span class="hljs-attr">multiple</span> <span class="hljs-attr">maximum</span>=<span class="hljs-string">&quot;5&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cub-uploader</span>&gt;</span>
</code></pre><h3>限制上传大小（每个文件最大不超过 50kb）</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cub-uploader</span> <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;uploadUrl&quot;</span> <span class="hljs-attr">multiple</span> <span class="hljs-attr">:maximize</span>=<span class="hljs-string">&quot;1024 * 50&quot;</span> @<span class="hljs-attr">oversize</span>=<span class="hljs-string">&quot;onOversize&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cub-uploader</span>&gt;</span>
</code></pre><h3>自定义数据 FormData headers</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cub-uploader</span> <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;uploadUrl&quot;</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">:headers</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">:with-Credentials</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cub-uploader</span>&gt;</span>
</code></pre><h3>自定义上传方式(before-xhr-upload)</h3>`,26),i=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-uploader"),s(),a("span",{class:"hljs-attr"},"url"),s("="),a("span",{class:"hljs-string"},'"https://xxxx"'),s(),a("span",{class:"hljs-attr"},":before-xhr-upload"),s("="),a("span",{class:"hljs-string"},'"beforeXhrUpload"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-uploader"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-comment"},"// source file https://github.com/cubfe/cubui/blob/v4/src/packages/vueComponents/uploader/uploader.ts#L6"),s(`
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"beforeXhrUpload"),s(" = ("),a("span",{class:"hljs-params"},"taroUploadFile: any, options: any"),s(`) => {
        `),a("span",{class:"hljs-comment"},"//taroUploadFile  是 Taro.uploadFile ， 你也可以自定义设置其它函数"),s(`
        `),a("span",{class:"hljs-keyword"},"const"),s(" uploadTask = "),a("span",{class:"hljs-title function_"},"taroUploadFile"),s(`({
          `),a("span",{class:"hljs-attr"},"url"),s(": options."),a("span",{class:"hljs-property"},"url"),s(`,
          `),a("span",{class:"hljs-attr"},"filePath"),s(": options."),a("span",{class:"hljs-property"},"taroFilePath"),s(`,
          `),a("span",{class:"hljs-attr"},"fileType"),s(": options."),a("span",{class:"hljs-property"},"fileType"),s(`,
          `),a("span",{class:"hljs-attr"},"header"),s(`: {
            `),a("span",{class:"hljs-string"},"'Content-Type'"),s(": "),a("span",{class:"hljs-string"},"'multipart/form-data'"),s(`,
            ...options.`),a("span",{class:"hljs-property"},"headers"),s(`
          }, `),a("span",{class:"hljs-comment"},"//"),s(`
          `),a("span",{class:"hljs-attr"},"formData"),s(": options."),a("span",{class:"hljs-property"},"formData"),s(`,
          `),a("span",{class:"hljs-attr"},"name"),s(": options."),a("span",{class:"hljs-property"},"name"),s(`,
          `),a("span",{class:"hljs-title function_"},"success"),s("("),a("span",{class:"hljs-params"},"response: { errMsg: any; statusCode: number; data: string }"),s(`) {
            `),a("span",{class:"hljs-keyword"},"if"),s(" (options."),a("span",{class:"hljs-property"},"xhrState"),s(" == response."),a("span",{class:"hljs-property"},"statusCode"),s(`) {
              options.`),a("span",{class:"hljs-property"},"onSuccess"),s(`?.(response, options);
            } `),a("span",{class:"hljs-keyword"},"else"),s(` {
              options.`),a("span",{class:"hljs-property"},"onFailure"),s(`?.(response, options);
            }
          },
          `),a("span",{class:"hljs-title function_"},"fail"),s("("),a("span",{class:"hljs-params"},"e: any"),s(`) {
            options.`),a("span",{class:"hljs-property"},"onFailure"),s(`?.(e, options);
          }
        });
        options.`),a("span",{class:"hljs-property"},"onStart"),s(`?.(options);
        uploadTask.`),a("span",{class:"hljs-title function_"},"progress"),s("("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"res: { progress: any; totalBytesSent: any; totalBytesExpectedToSend: any }"),s(") =>")]),s(` {
          options.`),a("span",{class:"hljs-property"},"onProgress"),s(`?.(res, options);
          `),a("span",{class:"hljs-comment"},"// console.log('上传进度', res.progress);"),s(`
          `),a("span",{class:"hljs-comment"},"// console.log('已经上传的数据长度', res.totalBytesSent);"),s(`
          `),a("span",{class:"hljs-comment"},"// console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend);"),s(`
        });
        `),a("span",{class:"hljs-comment"},"// uploadTask.abort(); // 取消上传任务"),s(`
      };
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        beforeXhrUpload
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),j=t(`<h3>选中文件后，通过按钮手动执行上传</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cub-uploader</span> <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;uploadUrl&quot;</span> <span class="hljs-attr">maximum</span>=<span class="hljs-string">&quot;5&quot;</span> <span class="hljs-attr">:auto-upload</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;uploadRef&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cub-uploader</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">cub-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submitUpload&quot;</span>&gt;</span>手动执行上传<span class="hljs-tag">&lt;/<span class="hljs-name">cub-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">cub-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;clearUpload&quot;</span>&gt;</span>手动清空上传<span class="hljs-tag">&lt;/<span class="hljs-name">cub-button</span>&gt;</span>
</code></pre><h3>禁用状态</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">cub-uploader</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">cub-uploader</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { ref,reactive } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> uploadUrl = <span class="hljs-string">&#39;http://服务器地址&#39;</span>;
  <span class="hljs-keyword">const</span> progressPercentage = ref&lt;string | number&gt;(<span class="hljs-number">0</span>);
  <span class="hljs-keyword">const</span> formData = {
    <span class="hljs-attr">custom</span>: <span class="hljs-string">&#39;test&#39;</span>
  };
  <span class="hljs-keyword">const</span> defaultFileList = <span class="hljs-title function_">reactive</span>([
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;文件1.png&#39;</span>,
      <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg&#39;</span>,
      <span class="hljs-attr">status</span>: <span class="hljs-string">&#39;success&#39;</span>,
      <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;上传成功&#39;</span>,
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;image&#39;</span>
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;文件2.png&#39;</span>,
      <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg&#39;</span>,
      <span class="hljs-attr">status</span>: <span class="hljs-string">&#39;error&#39;</span>,
      <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;上传失败&#39;</span>,
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;image&#39;</span>
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;文件3.png&#39;</span>,
      <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg&#39;</span>,
      <span class="hljs-attr">status</span>: <span class="hljs-string">&#39;uploading&#39;</span>,
      <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;上传中...&#39;</span>,
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;image&#39;</span>
    }
  ]);
  <span class="hljs-keyword">const</span> fileToDataURL = (<span class="hljs-attr">file</span>: <span class="hljs-title class_">Blob</span>): <span class="hljs-title class_">Promise</span>&lt;any&gt; =&gt; {
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {
      <span class="hljs-keyword">const</span> reader = <span class="hljs-keyword">new</span> <span class="hljs-title class_">FileReader</span>();
      reader.<span class="hljs-property">onloadend</span> = <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> <span class="hljs-title function_">resolve</span>((e.<span class="hljs-property">target</span> <span class="hljs-keyword">as</span> <span class="hljs-title class_">FileReader</span>).<span class="hljs-property">result</span>);
      reader.<span class="hljs-title function_">readAsDataURL</span>(file);
    });
  };
  <span class="hljs-keyword">const</span> dataURLToImage = (<span class="hljs-attr">dataURL</span>: string): <span class="hljs-title class_">Promise</span>&lt;<span class="hljs-title class_">HTMLImageElement</span>&gt; =&gt; {
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {
      <span class="hljs-keyword">const</span> img = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Image</span>();
      img.<span class="hljs-property">onload</span> = <span class="hljs-function">() =&gt;</span> <span class="hljs-title function_">resolve</span>(img);
      img.<span class="hljs-property">src</span> = dataURL;
    });
  };
  <span class="hljs-keyword">const</span> canvastoFile = (<span class="hljs-attr">canvas</span>: <span class="hljs-title class_">HTMLCanvasElement</span>, <span class="hljs-attr">type</span>: string, <span class="hljs-attr">quality</span>: number): <span class="hljs-title class_">Promise</span>&lt;<span class="hljs-title class_">Blob</span> | <span class="hljs-literal">null</span>&gt; =&gt; {
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> canvas.<span class="hljs-title function_">toBlob</span>(<span class="hljs-function">(<span class="hljs-params">blob</span>) =&gt;</span> <span class="hljs-title function_">resolve</span>(blob), type, quality));
  };
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onOversize</span> = (<span class="hljs-params">files: File[]</span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;oversize 触发 文件大小不能超过 50kb&#39;</span>, files);
  };
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onDelete</span> = (<span class="hljs-params">obj: any</span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;delete 事件触发&#39;</span>, obj);
  };
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onProgress</span> = (<span class="hljs-params">{ event, options, percentage }: any</span>) =&gt; {
    progressPercentage.<span class="hljs-property">value</span> = percentage;
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;progress 事件触发&#39;</span>, percentage);
  };
  <span class="hljs-keyword">const</span> uploadRef = ref&lt;any&gt;(<span class="hljs-literal">null</span>);
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">submitUpload</span> = (<span class="hljs-params"></span>) =&gt; {
    uploadRef.<span class="hljs-property">value</span>.<span class="hljs-title function_">submit</span>();
  };
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">clearUpload</span> = (<span class="hljs-params"></span>) =&gt; {
    uploadRef.<span class="hljs-property">value</span>.<span class="hljs-title function_">clearUploadQueue</span>();
  };
  <span class="hljs-keyword">return</span> {
    onOversize,
    onDelete,
    onProgress,
    progressPercentage,
    uploadUrl,
    defaultFileList,
    formData,
    uploadRef,
    submitUpload,
    clearUpload
  };
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>auto-upload</td><td>是否在选取文件后立即进行上传，<code class="">false</code> 时需要手动执行 ref submit 方法进行上传</td><td>Boolean</td><td><code class="">true</code></td></tr><tr><td>name</td><td>发到后台的文件参数名</td><td>String</td><td><code class="">file</code></td></tr><tr><td>url</td><td>上传服务器的接口地址</td><td>String</td><td><code class="">-</code></td></tr><tr><td>v-model:file-list</td><td>默认已经上传的文件列表</td><td>FileItem[]</td><td><code class="">[]</code></td></tr><tr><td>is-preview</td><td>是否上传成功后展示预览图</td><td>Boolean</td><td><code class="">true</code></td></tr><tr><td>is-deletable</td><td>是否展示删除按钮</td><td>Boolean</td><td><code class="">true</code></td></tr><tr><td>method</td><td>上传请求的 http method</td><td>String</td><td><code class="">post</code></td></tr><tr><td>list-type</td><td>上传列表的内建样式，支持两种基础样式 <code class="">picture</code>、<code class="">list</code></td><td>String</td><td><code class="">picture</code></td></tr><tr><td>maximize</td><td>可以设定最大上传文件的大小（字节）</td><td>Number | String</td><td><code class="">Number.MAX_VALUE</code></td></tr><tr><td>maximum</td><td>最多可以选择的文件个数，微信基础库 2.25.0 前，最多可支持 9 个文件，2.25.0 及以后最多可支持 20 个文件</td><td>Number | String</td><td><code class="">1</code></td></tr><tr><td>source-type</td><td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html">选择文件的来源</a></td><td>Array</td><td><code class="">[&#39;album&#39;,&#39;camera&#39;]</code></td></tr><tr><td>camera<code class="">仅支持WEAPP</code></td><td>仅在 <code class="">source-type</code> 为 <code class="">camera</code> 时生效，使用前置或后置摄像头</td><td>String</td><td><code class="">back</code></td></tr><tr><td>size-type</td><td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html">是否压缩所选文件</a></td><td>Array</td><td><code class="">[&#39;original&#39;,&#39;compressed&#39;]</code></td></tr><tr><td>media-type<code class="">仅支持WEAPP</code></td><td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html">选择文件类型</a></td><td>Array</td><td><code class="">[&#39;image&#39;, &#39;video&#39;, &#39;mix&#39;]</code></td></tr><tr><td>max-duration<code class="">仅支持WEAPP</code></td><td>拍摄视频最长拍摄时间，单位秒。时间范围为 3s 至 60s 之间。不限制相册。</td><td>Number</td><td>10</td></tr><tr><td>headers</td><td>设置上传的请求头部</td><td>object</td><td><code class="">{}</code></td></tr><tr><td>data</td><td>附加上传的信息 formData</td><td>object</td><td><code class="">{}</code></td></tr><tr><td>xhr-state</td><td>接口响应的成功状态（status）值</td><td>Number</td><td><code class="">200</code></td></tr><tr><td>disabled</td><td>是否禁用文件上传</td><td>Boolean</td><td><code class="">false</code></td></tr><tr><td>multiple</td><td>是否支持文件多选</td><td>Boolean</td><td><code class="">true</code></td></tr><tr><td>timeout</td><td>超时时间，单位为毫秒</td><td>Number | String</td><td><code class="">1000 * 30</code></td></tr><tr><td>before-xhr-upload</td><td>执行 <code class="">Taro.uploadFile</code> 上传时，自定义方式</td><td>Function(Taro.uploadFile，option)</td><td><code class="">null</code></td></tr><tr><td>mode<code class="">v4.1.1 仅支持小程序</code></td><td>预览图片的 mode 属性</td><td>string</td><td><code class="">aspectFit</code></td></tr></tbody></table><h3>FileItem</h3><table><thead><tr><th>名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>status</td><td>文件状态值，可选<code class="">ready</code>,<code class="">uploading</code>,<code class="">success</code>,<code class="">error</code></td><td><code class="">ready</code></td></tr><tr><td>uid</td><td>文件的唯一标识</td><td><code class="">new Date().getTime().toString()</code></td></tr><tr><td>name</td><td>文件名称</td><td>-</td></tr><tr><td>url</td><td>文件路径</td><td>-</td></tr><tr><td>formData</td><td>上传所需的 data</td><td><code class="">{}</code></td></tr><tr><td>percentage</td><td>上传百分比</td><td><code class="">0</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>start</td><td>文件上传开始</td><td><code class="">options</code></td></tr><tr><td>progress</td><td>文件上传的进度</td><td><code class="">{event,option,percentage}</code></td></tr><tr><td>oversize</td><td>文件大小超过限制时触发</td><td><code class="">files</code></td></tr><tr><td>success</td><td>上传成功</td><td><code class="">{data,option,fileItem}</code></td></tr><tr><td>failure</td><td>上传失败</td><td><code class="">{data,option,fileItem}</code></td></tr><tr><td>change</td><td>上传文件改变时的状态</td><td><code class="">{fileList,event}</code></td></tr><tr><td>delete</td><td>文件删除事件</td><td><code class="">{files,fileList,index}</code></td></tr><tr><td>file-item-click</td><td>文件上传成功后点击触发</td><td><code class="">{fileItem}</code></td></tr></tbody></table><h3>Uploader Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>默认插槽自定义内容</td></tr><tr><td>upload-icon</td><td>自定义上传按钮中间<code class="">icon</code>区域</td></tr><tr><td>delete-icon</td><td>自定义右上角删除按钮区域</td></tr></tbody></table><h3>Methods</h3><p>通过 <a href="https://vuejs.org/guide/essentials/template-refs.html#template-refs">ref</a> 可以获取到 Uploader 实例并调用实例方法</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>submit</td><td>手动上传模式，执行上传操作</td><td>-</td><td><code class="">-</code></td></tr><tr><td>chooseImage</td><td>调用选择文件的方法，效果等同于点击 cub-uploader 组件</td><td>-</td><td>-</td></tr><tr><td>clearUploadQueue</td><td>清空已选择的文件队列（该方法一般配合在手动模式上传时使用）</td><td>index</td><td><code class="">-</code></td></tr></tbody></table><h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/component/configprovider">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th></tr></thead><tbody><tr><td>--cub-uploader-picture-width</td><td><em>100px</em></td></tr><tr><td>--cub-uploader-picture-height</td><td><em>100px</em></td></tr><tr><td>--cub-uploader-background</td><td><em>#f7f8fa</em></td></tr></tbody></table>`,21),f={},q="",w=p({__name:"doc.taro",setup(g,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(m,b)=>{const l=e("demo-block");return d(),c("div",h,[u,o(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItdXBsb2FkZXIgdXJsPSJodHRwczovL3h4eHgiIDpiZWZvcmUteGhyxyg9IsYTWGhyVcURIj48L8xHPgo8L8pkCjxzY3JpcHQgbGFuZz0idHMixHhpbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnOwogIGV4xR1kZWZhdWx0IHsKICAgIHNldHVwKCnHDiAgLy8gc291cmNlIGZpbGUg6AC2Z2l0aHViLmNvbeQAlGZlxAZ1aS9ibG9iL3Y0L3NyYy9wYWNrYWdlcy92dWVDb21wb25lbnRzL+gAv8kJLnRzI0w2x29jb25zdCDvAPogPSAodGFyb8YORmlsZTogYW55LCBvcHRpb25zxQ4pID0+6QC25AC4zjIgIOaYryBUYXJvLsZ5xRXvvIwg5L2g5Lmf5Y+v5Lul6Ieq5a6a5LmJ6K6+572u5YW25a6D5Ye95pWwyVrmAKPGRVRhc2sgPSDOayjqAIYg5AHsOugAqC51cmwsyxzkAVJQYXRoyiHEScRDxBbQKlR5cGXKKsgSzCZoZeQBUDrrAQbEASdDb250ZW50LcQvJzogJ211bHRpcGFydC9mb3JtLWRhdGEnzEcgIC4uLshoxlRzyx99LCAvL8sQxEVEYXRh6wCcxxLMVW5hbesAvsQOzB5zdWNjZXNzKHJlc3BvbnNlOiB7IGVyck1zZ+UB3Dsgc3RhdHVzQ29kZTogbnVtYmVyOyDkALk6IHN0cmluZyB96gKzxgFpZiAoyG94aHJTdGF0ZSA9PSDIYy7KU9A7IOkAqG9uU+YAmj8u6QCc6QJ3KeQDRcoBfSBlbHNl20tGYWlsdXJl30vFS8sOfe0CCGFpbCjmAv7wALXUaNdhyl99yxjKQVN0YXJ0Py7oAT/LJOoC9i5wcm9ncuQBtOQAzuQBsMgR5wGydG90YWxCeXRlc1NlbnTRFUV4cGVjdGVkVG9TZW5kxR/kAcTtA8TsAJRQx17mAT72ANgvL+UDnW9sZS5sb2coJ+S4iuS8oOi/m+W6pics5AH66QC23Tjlt7Lnu4/GPueahOaVsOaNrumVv8pH7gDd3U3pooTmnJ/pnIDopoHPU+aAu9dW7gEey2DsAbEvL+wBkGFib3J0KCk7xBflj5bmtojGbuS7u+WKocc1fcg+cmV0dXJu6wFs7wVzzjDkAjF9Owo8L+YGZD4K"},{default:r(()=>[i]),_:1}),j])}}});export{w as default,q as excerpt,f as frontmatter};
