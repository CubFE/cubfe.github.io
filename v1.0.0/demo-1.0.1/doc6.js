import{d as e,r as h,b as o,k as n,w as t,aq as c,e as a,o as r,l as s}from"./style_icon.js";const j={class:"markdown-body"},d=c(`<h1>Audio 组件</h1><h3>介绍</h3><p>用于音频播放</p><h3>安装</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Audio</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Audio</span>);
</code></pre><h3>基础用法</h3>`,6),i=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-audio"),s(),a("span",{class:"hljs-attr"},"url"),s("="),a("span",{class:"hljs-string"},'"//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"'),s(),a("span",{class:"hljs-attr"},":loop"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"icon"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-audio"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),g=a("h3",null,"语音播放",-1),u=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-audio"),s(),a("span",{class:"hljs-attr"},"url"),s("="),a("span",{class:"hljs-string"},'"//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"'),s(),a("span",{class:"hljs-attr"},":loop"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"none"'),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"audioDemo"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-voice"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Voice"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Voice"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s('{{ duration }}"'),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-audio"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref, onMounted } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Voice"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" audioDemo = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"null"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(" duration = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"0"),s(`);
`),a("span",{class:"hljs-title function_"},"onMounted"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    duration.`),a("span",{class:"hljs-property"},"value"),s(" = audioDemo."),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-property"},"second"),s("."),a("span",{class:"hljs-title function_"},"toFixed"),s(`();
  }, `),a("span",{class:"hljs-number"},"500"),s(`);
});
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
`),a("span",{class:"hljs-selector-class"},".cub-voice"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: space-between;
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100px"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"20px"),s(`;
  `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"8px"),s(`;
  `),a("span",{class:"hljs-attribute"},"border"),s(": "),a("span",{class:"hljs-number"},"1px"),s(" solid "),a("span",{class:"hljs-built_in"},"rgba"),s("("),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"0.6"),s(`);
  `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"18px"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),m=a("h3",null,"进度条展示",-1),b=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-audio"),s(),a("span",{class:"hljs-attr"},"url"),s("="),a("span",{class:"hljs-string"},'"//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"'),s(),a("span",{class:"hljs-attr"},":loop"),s("="),a("span",{class:"hljs-string"},'"true"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"progress"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-audio-operate-group"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-audio-operate"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"back"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-audio-operate"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-audio-operate"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"play"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-audio-operate"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-audio-operate"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"forward"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-audio-operate"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-audio-operate"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"mute"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-audio-operate"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-audio"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y=a("h3",null,"自定义操作按钮",-1),v=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-audio"),s(`
    `),a("span",{class:"hljs-attr"},"url"),s("="),a("span",{class:"hljs-string"},'"//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"'),s(`
    `),a("span",{class:"hljs-attr"},":loop"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"progress"'),s(`
    @`),a("span",{class:"hljs-attr"},"forward"),s("="),a("span",{class:"hljs-string"},'"forward"'),s(`
    @`),a("span",{class:"hljs-attr"},"fastBack"),s("="),a("span",{class:"hljs-string"},'"fastBack"'),s(`
    @`),a("span",{class:"hljs-attr"},"play"),s("="),a("span",{class:"hljs-string"},'"changeStatus"'),s(`
    @`),a("span",{class:"hljs-attr"},"ended"),s("="),a("span",{class:"hljs-string"},'"ended"'),s(`
    @`),a("span",{class:"hljs-attr"},"changeProgress"),s("="),a("span",{class:"hljs-string"},'"changeProgress"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"cub-audio-operate-group"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-audio-operate"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"back"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"PlayDoubleBack"),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"35px"'),s(),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"35px"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"PlayDoubleBack"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-audio-operate"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-audio-operate"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"play"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"PlayStart"),s(),a("span",{class:"hljs-attr"},"v-if"),s("="),a("span",{class:"hljs-string"},'"!playing"'),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"35px"'),s(),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"35px"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"PlayStart"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"PlayStop"),s(),a("span",{class:"hljs-attr"},"v-else"),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"35px"'),s(),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"35px"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"PlayStop"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-audio-operate"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-audio-operate"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"forward"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"PlayDoubleForward"),s(),a("span",{class:"hljs-attr"},"width"),s("="),a("span",{class:"hljs-string"},'"35px"'),s(),a("span",{class:"hljs-attr"},"height"),s("="),a("span",{class:"hljs-string"},'"35px"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"PlayDoubleForward"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-audio-operate"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-audio"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"PlayDoubleBack"),s(", "),a("span",{class:"hljs-title class_"},"PlayDoubleForward"),s(", "),a("span",{class:"hljs-title class_"},"PlayStart"),s(", "),a("span",{class:"hljs-title class_"},"PlayStop"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" playing = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"fastBack"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'倒退'"),s(`);
};
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"forward"),s(" = ("),a("span",{class:"hljs-params"},"progress"),s(`) => {
  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'快进'"),s(", "),a("span",{class:"hljs-string"},"'当前时间'"),s(` + progress);
};
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"changeStatus"),s(" = ("),a("span",{class:"hljs-params"},"status"),s(`) => {
  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'当前播放状态'"),s(`, status);
  playing.`),a("span",{class:"hljs-property"},"value"),s(` = status;
};
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"ended"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'播放结束'"),s(`);
};
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"changeProgress"),s(" = ("),a("span",{class:"hljs-params"},"val"),s(`) => {
  `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'改变进度条'"),s(`, val);
};
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),w=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>url</td><td>语音播放的连接</td><td>string</td><td><code class="">&#39;&#39;</code></td></tr><tr><td>muted</td><td>是否静音</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>autoplay</td><td>是否自动播放</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>loop</td><td>是否循环播放</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>preload</td><td>是否预加载语音</td><td>string</td><td><code class="">auto</code></td></tr><tr><td>type</td><td>展示形式，可选值：<code class="">controls</code> 控制面板 <code class="">progress</code> 进度条 <code class="">icon</code> 图标 <code class="">none</code> 自定义</td><td>string</td><td><code class="">progress</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>fast-back</td><td>触发语音快退</td><td>返回当前播放时长（单位：毫秒）</td></tr><tr><td>forward</td><td>触发语音快进</td><td>返回当前播放时长（单位：毫秒）</td></tr><tr><td>play</td><td>触发播放/暂停语音</td><td>返回当前播放状态</td></tr><tr><td>ended</td><td>语音播放完成，当 <code class="">loop == false</code> 时生效</td><td>——</td></tr><tr><td>mute</td><td>触发静音</td><td>——</td></tr><tr><td>change-progress</td><td>当进度条改变时触发</td><td>返回当前播放时长（单位：毫秒）</td></tr><tr><td>can-play</td><td>当可以播放媒体文件时触发</td><td><code class="">event: Event</code></td></tr></tbody></table>',5),I={},k="",A=e({__name:"doc",setup(f,{expose:p}){return p({frontmatter:{},excerpt:void 0}),(P,x)=>{const l=h("demo-block");return r(),o("div",j,[d,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYXVkaW8gdXJsPSIvL3N0b3JhZ2UuMzYwYnV5aW1nLmNvbS9qZGNka2gvU01CL1ZDRzIzMTAyNDU2NC53YXYiIDpsb29wPSJ0cnVlIiB0eXBlPSJpY29uIj48L8lfPgo8L8p5"},{default:t(()=>[i]),_:1}),g,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYXVkaW8gdXJsPSIvL3N0b3JhZ2UuMzYwYnV5aW1nLmNvbS9qZGNka2gvU01CL1ZDRzIzMTAyNDU2NC53YXYiIDpsb29wPSJmYWxzZSIgdHlwZT0ibm9uZSIgcmVmPSLFX0RlbW8ixHIgIDxkaXYgY2xhc3M9IsR/dm9pY2XHHMYePjxWxBQ+PC/ICMQVzCF7eyBkdXJhdGlvbiB9fSLLIckLPC/pANw+Cjwv6gD2PHNjcmlwdCBzZXR1cD4KaW1wb3J0IHvkAK0sIG9uTW91bnRlZCB9IGZyb20gJ3Z1ZSc7yiblAJLJHUBjdWJmZS9pY29ucy3GKsQLdCDpAPUgPcRZKG51bGwpyB3pALvGHDApOwrJeCgoKSA9PiB7CiDkAKFUaW1lb3V0yxUgyT4udmFsdWUgPcpsxhIuc2Vjb25kLnRvRml4ZWQoKTsKICB9LCA1MMRpfSk7Cjwv5gEDPgoKPHN0eWxlPgou6QGKxWZkaXNwbGF5OiBmbGV4xEBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW7EIndpZHRoOiAxMDBwxTJoZWlnaHQ6IDLHEHBhZGRpbmc6IDjGEGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgxwMuNuUAusYoLXJhZGl1czogMcU/feQAxOYAug=="},{default:t(()=>[u]),_:1}),m,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYXVkaW8gdXJsPSIvL3N0b3JhZ2UuMzYwYnV5aW1nLmNvbS9qZGNka2gvU01CL1ZDRzIzMTAyNDU2NC53YXYiIDpsb29wPSJ0cnVlIiB0eXBlPSJwcm9ncmVzcyLEZSAgPGRpdiBjbGFzcz0iyXItb3BlcmF0ZS1ncm91cMcq7ACTyCHHVGJhY2siPjwv0SDfOj0icGxhed861zpmb3J3YXJk3z3XPW11dGXbOjwvZGl2xAvLIj4KPC/qAaA="},{default:t(()=>[b]),_:1}),y,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItYXVkaW8KICAgIHVybD0iLy9zdG9yYWdlLjM2MGJ1eWltZy5jb20vamRjZGtoL1NNQi9WQ0cyMzEwMjQ1NjQud2F2IsU+Omxvb3A9ImZhbHNlxhJ0eXBlPSJwcm9ncmVzc8YUQGZvcndhcmQ9IscJyBdhc3RCYWNrxEHGCscZcGxheT0iY2hhbmdlU3RhdHXISWVuZGVkPSLFB8cTxiZQx3HINsgQxCXkAPYgIDxkaXYgY2xhxSToAQMtb3BlcmF0ZS1ncm91cCLGKuwBJMgh5wDYYuQApMgmICA8UGxheURvdWJsZeQAviB3aWR0aD0iMzVweCIgaGVpZ2h0xw4+PC/OLMlrL9Fs/wCGPSLkAR/wAIZTdGFydCB2LWlmPSIhxCFpbmci/wCRyDfRS29wIHYtZWxzZd9Bxy3/AMz9AMzoAhL1AVVGxh3/AIbQL/8Aj8QZZGl2xAvLIj4KPC/qAyc8c2NyaXB0IHNldHVwPgppbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnO8ob7gHfLMsQ5wCXxhPlAXHIC29wyU5AY3ViZmUvaWNvbnMtxlvEC3Qg5wHMID3EfSjlA2opyBzoAzcgPSAoKSA9PiB7CiAgxBtvbGUubG9nKCflgJLpgIAnKTsKfck15wFVPSAo6AOn1zy/q+i/mycsICflvZPliY3ml7bpl7QnICsgyTjLV+wDrsRcc8UK11rGUJKt5pS+54q25oCBJywgxzE7CiDoAPQudmFsdWUgPccby23lBAH6APbHWruT5p2f7QD87gQdxEF2YWzXRJS55Y+Y6L+b5bqm5p2hJywgxCvFTDwv5gIfPgo="},{default:t(()=>[v]),_:1}),w])}}});export{A as default,k as excerpt,I as frontmatter};
