import{d as e,r as p,b as h,k as n,w as t,aq as r,e as a,o,l as s}from"./style_icon.js";const j={class:"markdown-body"},i=r(`<h1>Searchbar</h1><h3>Intro</h3><p>Search bar</p><h3>Install</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Searchbar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@cubui/cubui&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Searchbar</span>);
</code></pre><h3>Basic Usage</h3>`,6),g=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-searchbar"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"searchValue"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-searchbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, toRefs } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"searchValue"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),u=a("h3",null,"Search input shape",-1),m=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-searchbar"),s(),a("span",{class:"hljs-attr"},"shape"),s("="),a("span",{class:"hljs-string"},'"square"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-searchbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),d=a("h3",null,"Search event listening",-1),b=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-searchbar"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"searchValue"'),s(" @"),a("span",{class:"hljs-attr"},"search"),s("="),a("span",{class:"hljs-string"},'"search"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-searchbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { toRefs, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { showToast } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@cubui/cubui/dist/packages/toast/style'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"searchValue"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });

      `),a("span",{class:"hljs-keyword"},"const"),s(" search = "),a("span",{class:"hljs-keyword"},"function"),s(" ("),a("span",{class:"hljs-params"}),s(`) {
        showToast.`),a("span",{class:"hljs-title function_"},"text"),s("("),a("span",{class:"hljs-string"},"'Search trigger'"),s(`);
      };

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state),
        search
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),f=a("h3",null,"Display search Icon",-1),w=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-searchbar"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"searchValue"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:leftin"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Search2"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-searchbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { toRefs, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Search2"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"Search2"),s(` },
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"searchValue"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s("\n``` ::: ### Add search text to the right :::demo ```html\n"),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-searchbar"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"searchValue"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:rightout"),s(">")]),s(" Search "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-searchbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { toRefs, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"searchValue"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s("\n``` ::: ### Change the background style inside and outside the input box :::demo ```html\n"),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-searchbar"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"searchValue"'),s(),a("span",{class:"hljs-attr"},"background"),s("="),a("span",{class:"hljs-string"},'"linear-gradient(to right, #9866F0, #EB4D50)"'),s(),a("span",{class:"hljs-attr"},"input-background"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-searchbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { toRefs, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"searchValue"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s("\n``` ::: ### Custom Clear Button icon :::demo ```html\n"),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-searchbar"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"searchValue"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:clear-icon"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},":src"),s("="),a("span",{class:"hljs-string"},'"icon"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"width: 10px; height: 10px"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-searchbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { toRefs, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(` icon =
        `),a("span",{class:"hljs-string"},"'https://img10.360buyimg.com/imagetools/jfs/t1/170133/30/22902/10546/61833626E32d7ccde/a7c373ba30de9a89.png'"),s(`;
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"searchValue"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state),
        icon
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s("\n``` ::: ### Show all icons :::demo ```html\n"),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"cub-searchbar"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"searchValue"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:leftout"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Left"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:leftin"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Search2"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:rightin"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Photograph"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot:rightout"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Message"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"cub-searchbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { toRefs, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Search2"),s(", "),a("span",{class:"hljs-title class_"},"Left"),s(", "),a("span",{class:"hljs-title class_"},"Photograph"),s(", "),a("span",{class:"hljs-title class_"},"Message"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@cubfe/icons-vue'"),s(`;
  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
    `),a("span",{class:"hljs-attr"},"components"),s(": { "),a("span",{class:"hljs-title class_"},"Search2"),s(", "),a("span",{class:"hljs-title class_"},"Left"),s(", "),a("span",{class:"hljs-title class_"},"Photograph"),s(", "),a("span",{class:"hljs-title class_"},"Message"),s(` },
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
        `),a("span",{class:"hljs-attr"},"searchValue"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
      });

      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        ...`),a("span",{class:"hljs-title function_"},"toRefs"),s(`(state)
      };
    }
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s("\n``` ::: ## API ### Props | Parameter | Description | Type | Default | |--------------|----------------------------------\n|-------|------------------| | v-model | current input value | number /| string | `''` | | label| left text of search\nbox | string | `''` | | shape | search box shape, optional value is `square` `round` | string | `round` | | max-length |\nmaximum input length | number \\| string | `9999` | | input-type | input box type | string | `text` | | placeholder | The\ndefault dark pattern of the input box | string | `Please enter` | | clearable | whether to show clear button | boolean |\n`true` | | clear-icon | custom clear button icon (default use `@cubui/cubui-icons`) | Object | `CloseCircle` | |\nbackground | external background of the input box | string | `#fff` | | input-background | background of input box |\nstring | `#f7f7f7` | | autofocus | Whether to automatically focus | boolean | `false` | | focus-style | search box style\nwhen focused | Object | `-` | | disabled | Whether to disable the input box | boolean | `false` | | readonly| input\nfield is read only | boolean | `false` | | input-align| alignment, optional `left` `center` `right` | string | `left` |\n### Events | Event Name | Description | Callback Parameters | |--------|----------------|--------------| | change |\nfires when something is entered | `val, event` | | focus | fires on focus | `val, event` | | blur | Triggered when out\nof focus | `val, event` | | clear | Triggered when click clear | `val` | | search | fires when the ENTER key is pressed\n| `val, event` | | click-input| Fired when the input field is clicked | `event` | | click-left-icon| Fires when the left\nicon is clicked | `val, event` | | click-right-icon| Fires when the right icon is clicked | `val, event` | ### Slots |\nName | Description | |---------------|----------------------| |leftIn | left icon in the input box| |leftout | left Icon\noutside the input box| |rightin | right icon in the input box| |rightout | right icon outside the input box| ## Theming\n### CSS Variables The component provides the following CSS variables, which can be used to customize styles. Please\nrefer to [ConfigProvider component](#/en-US/component/configprovider). | Name | Default Value | |\n--------------------------------------- | -------------------------- | | --cub-searchbar-background| _var(--cub-white)_\n| | --cub-searchbar-right-out-color| _var(--cub-black)_ | | --cub-searchbar-padding| _9px 16px_ | |\n--cub-searchbar-width| _100%_ | | --cub-searchbar-input-background| _#f7f7f7_ | | --cub-searchbar-input-padding| _0 0 0\n13px_ | | --cub-searchbar-input-height| _32px_ | | --cub-searchbar-input-width| _100%_ | |\n--cub-searchbar-input-border-radius| _16px_ | | --cub-searchbar-input-box-shadow| _0 0 8px 0 rgba(0, 0, 0, 0.04)_ | |\n--cub-searchbar-input-bar-color| _inherit_ | | --cub-searchbar-input-bar-placeholder-color| _inherit_ |\n")])],-1),C={},A="",I=e({__name:"doc.en-US",setup(v,{expose:c}){return c({frontmatter:{},excerpt:void 0}),(y,k)=>{const l=p("demo-block");return o(),h("div",j,[i,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc2VhcmNoYmFyIHYtbW9kZWw9IsYTVmFsdWUiPjwvzSY+CjwvykQ8c2NyaXB0IGxhbmc9InRzIsRXaW1wb3J0IHsgcmVhY3RpdmUsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7CiAgZXjFKmRlZmF1bHQgewogICAgc2V0dXAoKccOICBjb25zdCBzdGF0ZSA9yVQoyB/EMekArzogJyfHGH0pOwrHC3JldHVybslRICAuLi7mAJIoxVcpyDPkAJQgIH0KxQs8L+YA3T4K"},{default:t(()=>[g]),_:1}),u,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc2VhcmNoYmFyIHNoYXBlPSJzcXVhcmUiPjwvzR8+Cjwvyj0="},{default:t(()=>[m]),_:1}),d,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc2VhcmNoYmFyIHYtbW9kZWw9IsYTVmFsdWUiIEDGDsgWIj48L803Pgo8L8pVPHNjcmlwdCBsYW5nPSJ0cyLEaGltcG9ydCB7IHRvUmVmcywgcmVhY3RpdmUgfSBmcm9tICd2dWUnO8wqc2hvd1RvYXN0ySNAY3VidWnEfHVpzCzNGS9kaXN0L3BhY2thZ2VzL3TEQi9zdHlsxl9leMUzZGVmYXVsdCB7CiAgICBzZXR1cCgpxw4gIGNvbnN0IHN0YXRlID3pAKsoyB/EMekBHzogJyfHGH0pOwrOQsUnID0gZnVuY3Rpb24gy2Ug6gDiLnRleHQoJ1PGL3RyaWdnZXInKeQAsMVYyVdyZXR1cm7LQy4uLuYBUijlAK4pLMpdxU3KQsUHCsULPC/mAaM+Cg=="},{default:t(()=>[b]),_:1}),f,n(l,{"data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxjdWItc2VhcmNoYmFyIHYtbW9kZWw9IsYTVmFsdWUixCggIMk3IHYtc2xvdDpsZWZ0aW7GHSAgPFPFMjIgL8cvL81nL81oPgrMHzxzY3JpcHQgbGFuZz0idHPFcWltcG9ydCB7IHRvUmVmcywgcmVhY3RpdmUgfSBmcm9tICd2dWUnO8wq6ACCyCFAY3ViZmUvaWNvbnMtyC5leMUuZGVmYXVsdCB75QCtY29tcG9uZW50czrMSCzFHXNldHVwKCnHK8QtbnN0IHN05AELPekAlyjIH8Qx6QE8OiAnJ8cYfSk7CscLcmV0dXJuyVEgIC4uLuYA5yjFVynIM+QAsSAgfQrFCzwv5gEoPgpgYGAgOjo6ICMjIyBBZGTHcSB0ZXh0IHRvIHRoZSByaWdodMQlZGVtbyBgYGBodG1sCv8B+/8B++oB+8Veb3V0PucBLP8B7v8B7v8B7u4B7vUBwP8Bo/8Bo/8Bo/8Bo/8BoyMjIENoYW5nZeUBl2JhY2tncm91bmQgc3R5bGUgaW5zaWRlIGFuZCBvdXTFDMQoaW5wdXQgYm94/wHD/wHD5AHDy3Q9ImxpbmVhci1ncmFkaWVudCh0b+YCKiwgIzk4NjZGMCwgI0VCNEQ1MCki5gCFLcw/I2ZmZuUBsP8B4v8B4v8B4v8B4v8B4v8B4v8B4v8B4vgB4nVzdG9tIENsZWFyIEJ1dHRvbiDkBHf/Ab7/Ab77A4FjxGotxGPGISAgPGltZyA6c3JjPSLEFyLmAmA9IndpZHRoOiAxMHB4OyBoZeQB7cYOIv8Fqv8B2v8B2v8B2v8B2nTmAT49xxMgICdodHRwczovL2ltZzEwLjM2MGJ1eWltZy5jb20vaW1hZ2V0b29scy9qZnMvdDEvMTcwMTMzLzMwLzIyOTAyLzEwNTQ2LzYxODMzNjI2RTMyZDdjY2RlL2E3YzM3M2JhMzBkZTlhODkucG5n5QCq6gCJ/wJj/wJj/wJj5gZhxAHkAPD/AnHsAnFTaG93IGFsbMU4c/8CZ/8CZ/8H4+QF5+gCZExlZnT2AjfXPf8IINw/5QSYy0BQaG90b2dyYXBo30PPQ+wAwE1lc3NhZ2XWQf8C+v8C+v8IpO8IpCwg5AFLLCDqANUsIOgAnf8Iv/8Iv99jx2P/CNr/AvL/AvL/BVXFM/8C5OQI2VBJ5QLrUHJvcHMgfCBQYXJhbWV0ZXIgfCBEZcYxaW9uIHwgVHlwZcUV5gEUfCB8Lc0Bzw/UAQrIJNMsfCB86AM1IHwgY3VycmVudOcHonbkAQsgfCBudW1iZXIgL3wgc3RyaW5nIHwgYCcnYOQAjCBsYWJlbHwg5AMP5gmjb2bnAUkK5Afh1DNzaGHlANPGJ+UICMUTLCBv5QD1YWzHemlzIGBzcXVhcmVgIGDlB6XEQcpRyRN8IG1heC1sZW5ndGggfAptYXhpbXVt5wDGyBfoAMdczEM5OTk5xkLFLS105gFu6giixxHKMuQA5cYycGxhY2Vob2xk5QG2VGhlCugCuWRhcmsgcGF0dGVybuQBEe4I9cxOUGxlYXNlIGVudGVyxlblBv1hYmzEdndoZXRoZXLkCvdz5AUUxRwgYuYHg3wgYm9vbGVhbiB8CmB0cnVly0DlBz3EDeYHu804xRso6ACrdXNlIGDkA411aeQEInVpxTtzYCkgfCBPYmplY+QCc2BDbG9zZUNpcmNsxmYK6wnrfCBleOQA6WFs7AoB/QD25Alq7AF2zU7ORctBCsxBN8QCxkRhdXRvZm9jdeQDSFfqATLEF21hdGljYWxseSDIIekBNCBgZmFsc+cBNcUeLeYKte4CmcQTCndoZW7GJGXkAKLqARgtxj9kaXPkAbLEHOsAgccW8QEI9gCDcmVhZG9ubHnnARQKZmllbGTkAwPEGSDEGtk7xTEtYWxpZ258IMUHbWVudOsDT2DkA59gIGBj5wJoYOUGPO4DTcYjfArkBJZFduQFbyB8xgkgTmFt5gSD7ASYQ2FsbOQBq+oEu8Qx6QRi8QRrzxHlAqvmDDt8CmZpcmVz5ALubiBzb21ldGjkAJRpc+YDF+UBV2B2YWwsIGXkAI/rAbLECMU7b+cBn9QqYmx15QOgcmlnZ8VOxWhvdXQKb2baNuYDM9E3Y2xpY2vJHcQ2xi/nAjPoAJDFLOQB+EVOVEVSIGtleeQAz3ByZXNzZWQK1W9pY2st5QHJfCBGaclw6gI86QIQxSvmARXRQeQBxeUDwcZF6wCJxBoKxBrPQ/YAieUCINZJxRvmBEXcSuUJyGxv5AJGCvUCQPACIdAQyBcgfOQAu0nEM8QJx3rsARpib3jHJm915AOWxSdJ5Apz9Q51fCB85wl+5AN26wDO0lToCWPOKddWIyPkBgRtaW5n5QNEQ1NTIFZhcmnkBANzxBrqCMkgcHJvdmlkZXPFQ2ZvbGxvd+QC8sQzdsgzLCB3aGljaCBjYW4gYmXkBahk5ARV5gXSaXpl5gSbcy4g5gZDCnJlZuYEd1tDb25maWdQxmRyynddKCMvZW4tVVMvyRMvY8Us5wCQcikuIHzqA+7mBiHlCRDlBfT2AaHRASB8IN0dxB/tCozrBf98IF92YXIoxiF3aGl0ZSlfCtQz5gKhb3V0LWNvbG9yzThibGFjaylf1WtwYWRkaW5nfCBfOXB4IDE2cHjFKArQKOUOWXwgXzEwMCXWSvAGunwgX+cGltww6gCAMCAwIDAKMTPnAILXMOYO1HwgXzMy3inxALHxANPGKGJvcmRlci3kESN1c8Qw6AED11hib3gtc2hhZG935wC0OHB4IDAgcmdiYSgwLCDHAy4wNOYBcdh2YXLpAalpbmhlcml03XXkAarqCV7TOwo="},{default:t(()=>[w]),_:1})])}}});export{I as default,A as excerpt,C as frontmatter};
