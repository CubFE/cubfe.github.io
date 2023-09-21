import{d as p,r as h,b as r,k as t,w as n,aq as e,e as a,l as s,o}from"./style_icon.js";const d={class:"markdown-body"},i=e(`<h1>PullRefresh</h1><h3>Intro</h3><p>Used to provide interactive operations for pull-down refresh.</p><h3>Install</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">PullRefresh</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">PullRefresh</span>);
</code></pre><h3>Basic Usage</h3><p>The refresh event will be Emitted when pull refresh, you should set v-model to false to reset loading status after process refresh event.</p>`,7),j=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-pull-refresh"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"refresh"'),s(" @"),a("span",{class:"hljs-attr"},"refresh"),s("="),a("span",{class:"hljs-string"},'"refreshFun"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s("Try to pull down!"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"(item, index) in 24"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"test"'),s(">")]),s("{{ index }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-pull-refresh"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" refresh = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"refreshFun"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    refresh.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
  }, `),a("span",{class:"hljs-number"},"3000"),s(`);
};
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
`),a("span",{class:"hljs-selector-class"},".test"),s(` {
  `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"12px"),s(),a("span",{class:"hljs-number"},"0"),s(),a("span",{class:"hljs-number"},"12px"),s(),a("span",{class:"hljs-number"},"20px"),s(`;
  `),a("span",{class:"hljs-attribute"},"border-top"),s(": "),a("span",{class:"hljs-number"},"1px"),s(" solid "),a("span",{class:"hljs-number"},"#eee"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),g=a("h3",null,"Custom Tips",-1),u=a("p",null,[s("The pull-down refresh has four states:"),a("code",{class:""},"'loading' | 'loosing' | 'pulling' "),s("，respectively corresponding to the attribute "),a("code",{class:""},"pullingTxt、loosingTxt、loadingTxt"),s(" ，Complex styles can be implemented through slots。")],-1),m=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-pull-refresh"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"refresh2"'),s(),a("span",{class:"hljs-attr"},"loosing-txt"),s("="),a("span",{class:"hljs-string"},'"Relax"'),s(),a("span",{class:"hljs-attr"},"loading-txt"),s("="),a("span",{class:"hljs-string"},'"Desperate loading..."'),s(" @"),a("span",{class:"hljs-attr"},"refresh"),s("="),a("span",{class:"hljs-string"},'"refreshFun"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"pulling-txt"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s("Pull"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s("Try to pull down!"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"(item, index) in 24"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"test"'),s(">")]),s("{{ index }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-pull-refresh"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" refresh = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"refreshFun"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    refresh.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
  }, `),a("span",{class:"hljs-number"},"3000"),s(`);
};
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
`),a("span",{class:"hljs-selector-class"},".test"),s(` {
  `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"12px"),s(),a("span",{class:"hljs-number"},"0"),s(),a("span",{class:"hljs-number"},"12px"),s(),a("span",{class:"hljs-number"},"20px"),s(`;
  `),a("span",{class:"hljs-attribute"},"border-top"),s(": "),a("span",{class:"hljs-number"},"1px"),s(" solid "),a("span",{class:"hljs-number"},"#eee"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),b=a("h3",null,"Customize the listener",-1),f=a("p",null,[s("The trigger conditions for PullRefresh are: The parent position of the scroll bar at the top of the rolling Element, the parent of rolling Element to determine whether through the parent set "),a("code",{class:""},"overflowY: scroll | auto | overlay"),s(", if the parent Element for "),a("code",{class:""}),s(", trigger conditions for "),a("code",{class:""},"Element. The scrollTop"),s(" = = = 0.")],-1),I=a("pre",null,[a("code",{class:"language-vue"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"parentpage"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-pull-refresh"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"refresh"'),s(" @"),a("span",{class:"hljs-attr"},"refresh"),s("="),a("span",{class:"hljs-string"},'"refreshFun"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"(item, index) in 24"'),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"test"'),s(">")]),s("{{ index }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-pull-refresh"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"const"),s(" refresh = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
`),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"refreshFun"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    refresh.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
  }, `),a("span",{class:"hljs-number"},"3000"),s(`);
};
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
`),a("span",{class:"hljs-selector-class"},".test"),s(` {
  `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"12px"),s(),a("span",{class:"hljs-number"},"0"),s(),a("span",{class:"hljs-number"},"12px"),s(),a("span",{class:"hljs-number"},"20px"),s(`;
  `),a("span",{class:"hljs-attribute"},"border-top"),s(": "),a("span",{class:"hljs-number"},"1px"),s(" solid "),a("span",{class:"hljs-number"},"#eee"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),w=e('<h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>Loading status</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>pull-distance</td><td>The distance to trigger the pull refresh</td><td>number | string</td><td><code class="">50</code></td></tr><tr><td>head-height</td><td>Height of head</td><td>number | string</td><td><code class="">50</code></td></tr><tr><td>loading-icon</td><td>Loading icon</td><td>string</td><td><code class="">loading</code></td></tr><tr><td>pulling-txt</td><td>Text to show when pulling</td><td>string</td><td><code class="">Pull to refresh...</code></td></tr><tr><td>loosing-txt</td><td>Text to show when loosing</td><td>string</td><td><code class="">Loose to refresh...</code></td></tr><tr><td>loading-txt</td><td>Text to show when loading</td><td>string</td><td><code class="">Loading...</code></td></tr><tr><td>duration</td><td>Pull down animation duration</td><td>number</td><td><code class="">0.3</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>change</td><td>Emitted when draging or status changed</td><td>{status:string,distance:number}</td></tr><tr><td>refresh</td><td>Emitted after pulling refresh</td><td>-</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>pulling</td><td>Content of head when at pulling</td></tr><tr><td>loosing</td><td>Content of head when at loosing</td></tr><tr><td>loading</td><td>Content of head when at loading</td></tr><tr><td>default</td><td>Default slot</td></tr></tbody></table>',7),C={},R="",_=p({__name:"doc.en-US",setup(y,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(x,v)=>{const l=h("demo-block");return o(),r("div",d,[i,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcHVsbC1yZWZyZXNoIHYtbW9kZWw9IscRIiBAxwrJE0Z1biLEPSAgPGRpdj5UcnkgdG8gxEYgZG93biE8L8QXySEgdi1mb3I9IihpdGVtLCBpbmRleCkgaW4gMjQiIGNsYXNzPSJ0ZXN0Ij57e8YeIH19yUQ8L/AAoz4KPC/qAMQKPHNjcmlwdCBzZXR1cD4KaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzsKY29uc3TEGMRGID3ECihmYWxzZSnPHEZ1biA9ICgpID0+IHsKIMRbVGltZW91dCjKFSDILi52YWx1ZSA9IMVMOwogIH0sIDMwMDApOwp9Owo8L+YAoeUAq3R5bGU+Ci7kAO/FRXBhZGRpbmc6IDEycHggMMYHMjBweMRHYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7Cn3EWMZO"},{default:n(()=>[j]),_:1}),g,u,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItcHVsbC1yZWZyZXNoIHYtbW9kZWw9IscRMiIgbG9vc2luZy10eHQ9IlJlbGF4xBRhZMkURGVzcGVyYXRlyBcuLi4iIEDHQslLRnVuIsR1ICDpAIQgI8R9x0nGHCAgPGRpdj5QdWxsPC/ECsYyL8gzxxDEGlRyeSB0byDEQyBkb3duIcwxZGl2IHYtZm9yPSIoaXRlbSwgaW5kZXgpIGluIDI0IiBjbGFzcz0idGVzdCI+e3vGHiB9fclEPC/wAR0+CuwAhwo8c2NyaXB0IHNldHVwPgppbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnOwpjb25zdMQYxEYgPcQKKGZhbHNlKc8cRnVuID0gKCkgPT4gewogxFtUaW1lb3V0KMoVIMguLnZhbHVlID0gxUw7CiAgfSwgMzAwMCk7Cn07Cjwv5gCh5QCrdHlsZT4KLuQA78VFcGFk5AGqOiAxMnB4IDDGBzIwcHjER2JvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlOwp9xFjGTg=="},{default:n(()=>[m]),_:1}),b,f,t(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9InBhcmVudHBhZ2UixBsgIDxjdWItcHVsbC1yZWZyZXNoIHYtbW9kZWw9IscRIiBAxwrJE0Z1bsc/x152LWZvcj0iKGl0ZW0sIGluZGV4KSBpbiAyNCLIenRlc3QiPnt7xh4gfX08L2RpdsZGPC/wAIbEGMchPC/qAM0KPHNjcmlwdCBzZXR1cD4KaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJzsKY29uc3TEGMRPID3ECihmYWxzZSnPHEZ1biA9ICgpID0+IHsKIMRbVGltZW91dCjKFSDILi52YWx1ZSA9IMVMOwogIH0sIDMwMDApOwp9Owo8L+YAoeUAq3R5bGU+Ci7kAPrFRXBhZGRpbmc6IDEycHggMMYHMjBweMRHYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7Cn3EWMZO"},{default:n(()=>[I]),_:1}),w])}}});export{_ as default,R as excerpt,C as frontmatter};
