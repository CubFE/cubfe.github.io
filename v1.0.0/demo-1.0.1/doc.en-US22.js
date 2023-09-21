import{d as p,r,b as h,k as t,w as l,aq as c,e as a,o,l as s}from"./style_icon.js";const d={class:"markdown-body"},i=c(`<h1>Countup Digital scrolling</h1><h3>Intro</h3><p>Digital scrolling component, which is used to display the dynamic effect of digital</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Countup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Countup</span>);
</code></pre><h3>Basic Usage</h3>`,6),u=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-countup"),s(),a("span",{class:"hljs-attr"},":init-num"),s("="),a("span",{class:"hljs-string"},'"0"'),s(),a("span",{class:"hljs-attr"},":end-num"),s("="),a("span",{class:"hljs-string"},'"200"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-countup"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-countup"),s(),a("span",{class:"hljs-attr"},":init-num"),s("="),a("span",{class:"hljs-string"},'"150.00"'),s(),a("span",{class:"hljs-attr"},":end-num"),s("="),a("span",{class:"hljs-string"},'"0.00"'),s(),a("span",{class:"hljs-attr"},":speed"),s("="),a("span",{class:"hljs-string"},'"2.62"'),s(),a("span",{class:"hljs-attr"},":to-fixed"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-countup"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-countup"),s(),a("span",{class:"hljs-attr"},":init-num"),s("="),a("span",{class:"hljs-string"},'"1000.00"'),s(),a("span",{class:"hljs-attr"},":end-num"),s("="),a("span",{class:"hljs-string"},'"0.00"'),s(),a("span",{class:"hljs-attr"},":speed"),s("="),a("span",{class:"hljs-string"},'"50"'),s(),a("span",{class:"hljs-attr"},":to-fixed"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-countup"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),j=a("h3",null,"Custom scrolling picture display",-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-countup"),s(`
    `),a("span",{class:"hljs-attr"},":custom-change-num"),s("="),a("span",{class:"hljs-string"},'"customNumber"'),s(`
    `),a("span",{class:"hljs-attr"},":custom-bg-img"),s("="),a("span",{class:"hljs-string"},'"bgImage"'),s(`
    `),a("span",{class:"hljs-attr"},":custom-spac-num"),s("="),a("span",{class:"hljs-string"},'"11"'),s(`
    `),a("span",{class:"hljs-attr"},":num-width"),s("="),a("span",{class:"hljs-string"},'"33"'),s(`
    `),a("span",{class:"hljs-attr"},":num-height"),s("="),a("span",{class:"hljs-string"},'"47"'),s(`
    `),a("span",{class:"hljs-attr"},":during"),s("="),a("span",{class:"hljs-string"},'"5000"'),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-countup"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref, onMounted } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" customNumber = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"618"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" bgImage = "),a("span",{class:"hljs-title function_"},"ref"),s(`(
        `),a("span",{class:"hljs-string"},"'https://img10.360buyimg.com/imagetools/jfs/t1/133024/3/2251/2646/5ee7549aE8dc02d7e/de6901b6c72db396.png'"),s(`
      );
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"run"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-keyword"},"let"),s(" timer = "),a("span",{class:"hljs-literal"},"null"),s(`;
        timer = `),a("span",{class:"hljs-built_in"},"setInterval"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
          customNumber.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-title class_"},"Math"),s("."),a("span",{class:"hljs-title function_"},"floor"),s("("),a("span",{class:"hljs-title class_"},"Math"),s("."),a("span",{class:"hljs-title function_"},"random"),s("() * ("),a("span",{class:"hljs-number"},"700"),s(" - "),a("span",{class:"hljs-number"},"100"),s(" + "),a("span",{class:"hljs-number"},"1"),s(") + "),a("span",{class:"hljs-number"},"100"),s(`);
        }, `),a("span",{class:"hljs-number"},"5000"),s(`);
      };
      `),a("span",{class:"hljs-title function_"},"onMounted"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        `),a("span",{class:"hljs-title function_"},"run"),s(`();
      });
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        customNumber,
        bgImage
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),g=a("h3",null,"luck draw(simulated rolling draw)",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-countup"),s(`
    `),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"countupMachineDom"'),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"machine"'),s(`
    `),a("span",{class:"hljs-attr"},":machine-num"),s("="),a("span",{class:"hljs-string"},'"machineNum"'),s(`
    `),a("span",{class:"hljs-attr"},":machine-prize-num"),s("="),a("span",{class:"hljs-string"},'"5"'),s(`
    `),a("span",{class:"hljs-attr"},":machine-prize-level"),s("="),a("span",{class:"hljs-string"},'"prizeLevel"'),s(`
    `),a("span",{class:"hljs-attr"},":custom-bg-img"),s("="),a("span",{class:"hljs-string"},'"bgImage"'),s(`
    `),a("span",{class:"hljs-attr"},":num-width"),s("="),a("span",{class:"hljs-string"},'"100"'),s(`
    `),a("span",{class:"hljs-attr"},":num-height"),s("="),a("span",{class:"hljs-string"},'"100"'),s(`
    `),a("span",{class:"hljs-attr"},":during"),s("="),a("span",{class:"hljs-string"},'"3000"'),s(`
    @`),a("span",{class:"hljs-attr"},"scroll-end"),s("="),a("span",{class:"hljs-string"},'"scrollAniEnd"'),s(`
  >`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-countup"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"btnBtn"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"danger"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"startRole"'),s(),a("span",{class:"hljs-attr"},":disabled"),s("="),a("span",{class:"hljs-string"},'"startFlag"'),s(">")]),s(" 中奖 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"danger"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"startRole2"'),s(),a("span",{class:"hljs-attr"},":disabled"),s("="),a("span",{class:"hljs-string"},'"startFlag"'),s(">")]),s(" 不中奖 "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" countupMachineDom = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"null"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" startFlag = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" machineNum = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"3"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(" bgImage = "),a("span",{class:"hljs-title function_"},"ref"),s(`(
        `),a("span",{class:"hljs-string"},"'https://img10.360buyimg.com/imagetools/jfs/t1/121466/20/6784/28830/5f06e7f2Edbb8998c/9bdd9e7b24dff9fe.png'"),s(`
      );
      `),a("span",{class:"hljs-keyword"},"const"),s(" prizeLevel = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-number"},"0"),s(`);
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"startRole"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        prizeLevel.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-title class_"},"Math"),s("."),a("span",{class:"hljs-title function_"},"floor"),s("("),a("span",{class:"hljs-title class_"},"Math"),s("."),a("span",{class:"hljs-title function_"},"random"),s("() * "),a("span",{class:"hljs-number"},"5"),s(" + "),a("span",{class:"hljs-number"},"1"),s(`);
        startFlag.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
        countupMachineDom.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"machineLuck"),s(`();
      };
      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"startRole2"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        prizeLevel.`),a("span",{class:"hljs-property"},"value"),s(" = -"),a("span",{class:"hljs-number"},"1"),s(`;
        startFlag.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"true"),s(`;
        `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
          countupMachineDom.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"machineLuck"),s(`();
        }, `),a("span",{class:"hljs-number"},"500"),s(`);
      };

      `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"scrollAniEnd"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
        `),a("span",{class:"hljs-variable language_"},"console"),s("."),a("span",{class:"hljs-title function_"},"log"),s("("),a("span",{class:"hljs-string"},"'恭喜中奖！！！'"),s(`);
        `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
          startFlag.`),a("span",{class:"hljs-property"},"value"),s(" = "),a("span",{class:"hljs-literal"},"false"),s(`;
        }, `),a("span",{class:"hljs-number"},"300"),s(`);
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        countupMachineDom,
        startFlag,
        machineNum,
        bgImage,
        prizeLevel,
        startRole,
        startRole2,
        scrollAniEnd
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".btnBtn"),s(` {
    `),a("span",{class:"hljs-attribute"},"text-align"),s(`: center;
  }
  `),a("span",{class:"hljs-selector-class"},".cub-button"),s(` {
    `),a("span",{class:"hljs-attribute"},"margin-right"),s(": "),a("span",{class:"hljs-number"},"20px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),f=c('<h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>init-num</td><td>initial number</td><td>number</td><td><code class="">0</code></td></tr><tr><td>end-num</td><td>end number</td><td>number</td><td><code class="">0</code></td></tr><tr><td>speed</td><td>interval number, currently only supports basic usage</td><td>number</td><td><code class="">1</code></td></tr><tr><td>to-fixed</td><td>retain the number of decimal places</td><td>number</td><td><code class="">0</code></td></tr><tr><td>start-flag</td><td>flag to trigger number scrolling</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>during</td><td>rolling time to run</td><td>number</td><td><code class="">1000</code></td></tr><tr><td>num-width</td><td>Number width, often used to customize seamless scrolling</td><td>number</td><td><code class="">20</code></td></tr><tr><td>num-height</td><td>Number height, often used to customize seamless scrolling (required for lottery function)</td><td>number</td><td><code class="">20</code></td></tr><tr><td>custom-change-num</td><td>The number to change (for custom pictures, initNum and endNum are invalid here)</td><td>number</td><td><code class="">1</code></td></tr><tr><td>custom-bg-img</td><td>Custom image (it is recommended to use Sprite image, and Sprite image must be used to use the lottery function)</td><td>string</td><td>-</td></tr><tr><td>custom-spac-num</td><td>There may be space between numbers in the image</td><td>number</td><td><code class="">0</code></td></tr><tr><td>type</td><td>lottery function pass machine, the optional value is <code class="">machine</code> <code class="">&#39; &#39;</code></td><td>string</td><td><code class="">&#39;&#39;</code></td></tr><tr><td>machine-prize-num</td><td>Number of prizes, how many prizes in total, must be passed</td><td>number</td><td><code class="">0</code></td></tr><tr><td>machine-num</td><td>lottery position, that is, how many times to roll, must pass</td><td>number</td><td><code class="">3</code></td></tr><tr><td>machine-prize-level</td><td>The winning icon, the position of the icon in the sprite image</td><td>number</td><td><code class="">0</code></td></tr><tr><td>machine-turn-more</td><td>number of turns</td><td>number</td><td><code class="">0</code></td></tr></tbody></table><blockquote><p>Note: The lottery function needs to be calculated in conjunction with the position of the icon, so the height num-height of a single icon in the sprite image needs to be passed in; the winning prize is positioned according to the number of prizes in the sprite image, from 1 to N;</p></blockquote><h3>Events</h3><table><thead><tr><th>Event</th><th>description</th><th>callback parameter</th></tr></thead><tbody><tr><td>scroll-end</td><td>callback function after scrolling ends</td><td>-</td></tr></tbody></table>',6),A={},M="",_=p({__name:"doc.en-US",setup(y,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(w,I)=>{const n=r("demo-block");return o(),h("div",d,[i,t(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY291bnR1cCA6aW5pdC1udW09IjAiIDplbmTGDTIwMCI+PC/LK9w7MTUwLjDNQMcQc3BlZWQ9IjIuNjIiIDp0by1maXjFEd9dzV0wMN5eNcQM3Fw8L+oBAA=="},{default:l(()=>[u,j,t(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY291bnR1cAogICAgOmN1c3RvbS1jaGFuZ2UtbnVtPSLGE051bWJlciLNJmJnLWltZz0iYmdJbWFnZc4dc3BhY8ZBMTHHGm51bS13aWR0aD0iMzPLFGhlaWdodD0iNDfHFWR1cmluZz0iNTAwMMQT5QCsL+sArT4KPC/qAMk8c2NyaXB0xCZpbXBvcnQgeyByZWYsIG9uTcQwZWQgfSBmcm9tICd2dWUnOwoKICBleMUpZGVmYXVsdCB7xXlzZXR1cCgpxw4gIGNvbnN0IOwBASA9xFooNjE4KTvNJecBBMcgxxsgICdodHRwczovL2ltZzEwLjM2MGJ1eWltZy5jb20vacQydG9vbHMvamZzL3QxLzEzMzAyNC8zLzIyNTEvMjY0Ni81ZWU3NTQ5YUU4ZGMwMmQ3ZS9kZTY5MDFiNmM3MmRiMzk2LnBuZyfHcu8AlnJ1biA9ICgpID0+6QDVICBsZXQgdGlt5QDObnVsbMg0IMkWc2V0SW50ZXJ2YWwo0D4g7QERLnZhbHXkAPdNYXRoLmZsb29yKMULcmFuZG9tKCkgKiAoNzAwIC0gMTAwICsgMSnEBTAw6QCqICB9LCDkAerJEn3ICekBwPEAhXJ1bijKMMkKcmV0dXJuyyjsAKssyRbnAa3Ob30KxQs8L+gCTg=="},{default:l(()=>[m]),_:1})]),_:1}),g,t(n,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItY291bnR1cAogICAgcmVmPSLHEU1hY2hpbmVEb20ixRx0eXBlPSJtxhbGEzrHDi1udW3JG051xzHJHnByaXrHJDXVG2xldmVsPSLFDUzEDMcmY3VzdG9tLWJnLWltZz0iYmdJbWFnyHxudW0td2lkdGg9IjEwMMsVaGVpZ2h0zBZkdXJpbmc9IjMwyBNAc2Nyb2xsLWVuZD0ixgxBbmlFbmTEH+UBGy/rARzFEWRpdiBjbGFzcz0iYnRuQnRuIsQX5wFFYnV0dG9u5wEkZGFuZ2VyIiBAY2xpY2s9InN0YXJ0Um9sZSIgOmRpc2FibGXEdsQWRmxhZyI+IOS4reWllsd1xkzfXdJdMttejddhPC9kaXY+Cjwv6gIWPHNjcmlwdMQeaW1wb3J0IHvkAhcgfSBmcm9tICd2dWUnOwogIGV4xR1kZWZhdWx0IHvlAK9zZXR1cCgpxw4gIGNvbnN0IPECUSA9xFMobnVsbCnETMor6QC3xyNmYWxzZc8k6gJoxyUzzyHnAijHHscbICAnaHR0cHM6Ly9pbWcxMC4zNjBidXlpbWcuY29tL2nEMnRvb2xzL2pmcy90MS8xMjE0NjYvMjAvNjc4NC8yODgzMC81ZjA2ZTdmMkVkYmI4OTk4Yy85YmRkOWU3YjI0ZGZmOWZlLnBuZyfHdO8AmOoC4OcAmzDPIekBzCA9ICgpID0+6QFJIMs9LnZhbHXEI01hdGguZmxvb3IoxQtyYW5kb20oKSAqIDUgKyAxyV4g6gFYyT10cnVlyiDxAaPGKC7nAWxMdWNrKMlPffcAtjL/ALfHei0x/wCY6wCYc2V0VGltZW91dCjQWv8AtfAAtSAgfSwgNTDqAXN9OwruAMfrBAbzAMnEJW9sZS5sb2coJ+aBreWWnOYDVe+8gcYDJ8ts/QC48gD15QLnyj59LCAz9QCqcmV0dXJuy03xAQMs8gFbyhPqAzrKFOcDLcoR6gGyz0zkAePTEzLLFOsBQ+4CLH0KxQs8L+gEXgo8c3R5bOUGhi7mBU/nANZ0ZXh0LWFsaWduOiBjZW50ZXLEQsRALusFDMYsbWFyZ2luLXLkBfA6IDIwcHjGLDwvx10="},{default:l(()=>[b]),_:1}),f])}}});export{_ as default,M as excerpt,A as frontmatter};
