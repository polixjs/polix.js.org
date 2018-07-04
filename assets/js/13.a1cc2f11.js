(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{149:function(t,s,e){t.exports={example:"example_2DuOfB6G"}},154:function(t,s,e){"use strict";var a=e(149),n=e.n(a);s.default=n.a},184:function(t,s,e){"use strict";e.r(s);var a={mounted:function(){document.querySelector(".".concat(this.$style.example)).textContent="This is rendered by inline script and styled by inline CSS"}},n=e(154),r=e(0);var i=Object(r.a)(a,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._m(1),e("p",[t._v("Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the "),e("a",{attrs:{href:"https://ssr.vuejs.org/en/universal.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("universal code requirements"),e("OutboundLink")],1),t._v(". In short, make sure to only access Browser / DOM APIs in "),e("code",[t._v("beforeMount")]),t._v(" or "),e("code",[t._v("mounted")]),t._v(" hooks.")]),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),e("div",{staticClass:"language-text"},[e("pre",[e("code",[t._v(t._s(2))])])]),t._m(12),e("p",[t._v("Directives also work:")]),t._m(13),t._m(14),t._m(15),e("div",{staticClass:"language-text"},[e("pre",[e("code",t._l(3,function(s){return e("span",[t._v(t._s(s)+" ")])}))])]),t._m(16),e("p",[t._v("The compiled component does not have any private data but does have access to the "),e("router-link",{attrs:{to:"./custom-themes.html#site-and-page-metadata"}},[t._v("site metadata")]),t._v(". For example:")],1),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),e("p",[t._v("Any "),e("code",[t._v("*.vue")]),t._v(" files found in "),e("code",[t._v(".vuepress/components")]),t._v(" are automatically registered as "),e("a",{attrs:{href:"https://vuejs.org/v2/guide/components-registration.html#Global-Registration",target:"_blank",rel:"noopener noreferrer"}},[t._v("global"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components",target:"_blank",rel:"noopener noreferrer"}},[t._v("async"),e("OutboundLink")],1),t._v(" components. For example:")]),t._m(28),e("p",[t._v("Inside any markdown file you can then directly use the components (names are inferred from filenames):")]),t._m(29),e("demo-1"),e("OtherComponent"),e("Foo-Bar"),t._m(30),t._m(31),t._m(32),t._m(33),e("p",[t._v("Now you can use the following in markdown and theme components:")]),t._m(34),t._m(35),t._m(36),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._m(37),e("p",[t._v("For pre-processors that do not have built-in webpack config support, you will need to "),e("router-link",{attrs:{to:"./../config/#configurewebpack"}},[t._v("extend the internal webpack config")]),t._v(" in addition to installing the necessary dependencies.")],1)]),t._m(38),t._m(39),e("p",{staticClass:"demo",class:t.$style.example}),t._m(40),e("h3",{attrs:{id:"outboundlink"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#outboundlink","aria-hidden":"true"}},[t._v("#")]),t._v(" OutboundLink "),e("Badge",{attrs:{text:"stable"}})],1),e("p",[t._v("It("),e("OutboundLink"),t._v(") is used to indicate that this is an external link. In VuePress this component have been followed by every external link.")],1),e("h3",{attrs:{id:"clientonly"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clientonly","aria-hidden":"true"}},[t._v("#")]),t._v(" ClientOnly "),e("Badge",{attrs:{text:"stable"}})],1),t._m(41),e("h3",{attrs:{id:"content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#content","aria-hidden":"true"}},[t._v("#")]),t._v(" Content "),e("Badge",{attrs:{text:"beta",type:"warn"}})],1),t._m(42),e("p",[t._v("The compiled content of the current "),e("code",[t._v(".md")]),t._v(" file being rendered. This will be very useful when you use "),e("router-link",{attrs:{to:"./../default-theme-config/#custom-layout-for-specific-pages"}},[t._v("Custom Layout")]),t._v(".")],1),t._m(43),t._m(44),e("ul",[e("li",[e("router-link",{attrs:{to:"./custom-themes.html#content-outlet"}},[t._v("Custom Themes > Content Outlet")])],1)]),e("h3",{attrs:{id:"badge"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#badge","aria-hidden":"true"}},[t._v("#")]),t._v(" Badge "),e("Badge",{attrs:{text:"beta",type:"warn"}}),e("Badge",{attrs:{text:"0.10.1+"}})],1),t._m(45),e("p",[t._v("You can use this component at the end of header text to add some status for some API:")]),t._m(46)],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"using-vue-in-markdown"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-vue-in-markdown","aria-hidden":"true"}},[this._v("#")]),this._v(" Using Vue in Markdown")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"browser-api-access-restrictions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#browser-api-access-restrictions","aria-hidden":"true"}},[this._v("#")]),this._v(" Browser API Access Restrictions")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in "),s("code",[this._v("<ClientOnly>")]),this._v(" component:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ClientOnly")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("NonSSRFriendlyComponent")]),e("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ClientOnly")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Note this does not fix components or libraries that access Browser APIs "),s("strong",[this._v("on import")]),this._v(" - in order to use code that assumes a browser environment on import, you need to dynamically import them in proper lifecycle hooks:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("import")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'./lib-that-access-window-on-import'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("then")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("module "),e("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{attrs:{class:"token comment"}},[t._v("// use code")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"templating"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#templating","aria-hidden":"true"}},[this._v("#")]),this._v(" Templating")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"interpolation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interpolation","aria-hidden":"true"}},[this._v("#")]),this._v(" Interpolation")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Each markdown file is first compiled into HTML and then passed on as a Vue component to "),s("code",[this._v("vue-loader")]),this._v(". This means you can use Vue-style interpolation in text:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Input")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[this._v("{{ 1 + 1 }}\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Output")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"directives"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#directives","aria-hidden":"true"}},[this._v("#")]),this._v(" Directives")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Input")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),e("span",{attrs:{class:"token attr-name"}},[t._v("v-for")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("i in 3"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ i }} "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Output")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"access-to-site-page-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#access-to-site-page-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Access to Site & Page Data")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Input")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[this._v("{{ $page }}\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Output")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"path"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"/using-vue.html"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"title"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Using Vue in Markdown"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"frontmatter"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"escaping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#escaping","aria-hidden":"true"}},[this._v("#")]),this._v(" Escaping")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("By default, fenced code blocks are automatically wrapped with "),s("code",[this._v("v-pre")]),this._v(". If you want to display raw mustaches or Vue-specific syntax inside inline code snippets or plain text, you need to wrap a paragraph with the "),s("code",[this._v("v-pre")]),this._v(" custom container:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Input")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[this._v("::: v-pre\n"),s("span",{attrs:{class:"token code keyword"}},[this._v("`{{ This will be displayed as-is }}`")]),this._v("\n:::\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Output")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{pre:!0},[s("p",[s("code",[this._v("{{ This will be displayed as-is }}")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"using-components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-components","aria-hidden":"true"}},[this._v("#")]),this._v(" Using Components")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(".\n└─ .vuepress\n   └─ components\n      ├─ demo-1.vue\n      ├─ OtherComponent.vue\n      └─ Foo\n         └─ Bar.vue\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("demo-1")]),e("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("OtherComponent")]),e("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Foo-Bar")]),e("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("IMPORTANT")]),s("p",[this._v("Make sure a custom component's name either contains a hyphen or is in PascalCase. Otherwise it will be treated as an inline element and wrapped inside a "),s("code",[this._v("<p>")]),this._v(" tag, which will lead to hydration mismatch because "),s("code",[this._v("<p>")]),this._v(" does not allow block elements to be placed inside it.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"using-pre-processors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-pre-processors","aria-hidden":"true"}},[this._v("#")]),this._v(" Using Pre-processors")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("VuePress has built-in webpack config for the following pre-processors: "),e("code",[t._v("sass")]),t._v(", "),e("code",[t._v("scss")]),t._v(", "),e("code",[t._v("less")]),t._v(", "),e("code",[t._v("stylus")]),t._v(" and "),e("code",[t._v("pug")]),t._v(". All you need to do is installing the corresponding dependencies. For example, to enable "),e("code",[t._v("sass")]),t._v(", install the following in your project:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("yarn add -D sass-loader node-sass\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),e("span",{attrs:{class:"token attr-name"}},[t._v("lang")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sass"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{attrs:{class:"token style language-css"}},[t._v("\n.title\n  "),e("span",{attrs:{class:"token property"}},[t._v("font-size")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px\n")]),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Using "),s("code",[this._v('<template lang="pug">')]),this._v(" requires installing "),s("code",[this._v("pug")]),this._v(" and "),s("code",[this._v("pug-plain-loader")]),this._v(":")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("yarn add -D pug pug-plain-loader\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If you are a Stylus user, you don't need to install "),s("code",[this._v("stylus")]),this._v(" and "),s("code",[this._v("stylus-loader")]),this._v(" in your project because VuePress uses Stylus internally.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"script-style-hoisting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#script-style-hoisting","aria-hidden":"true"}},[this._v("#")]),this._v(" Script & Style Hoisting")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("Sometimes you may need to apply some JavaScript or CSS only to the current page. In those cases you can directly write root-level "),e("code",[t._v("<script>")]),t._v(" or "),e("code",[t._v("<style>")]),t._v(" blocks in the markdown file, and they will be hoisted out of the compiled HTML and used as the "),e("code",[t._v("<script>")]),t._v(" and "),e("code",[t._v("<style>")]),t._v(" blocks for the resulting Vue single-file component.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"built-in-components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#built-in-components","aria-hidden":"true"}},[this._v("#")]),this._v(" Built-In Components")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("See "),s("a",{attrs:{href:"#browser-api-access-restrictions"}},[this._v("Browser API Access Restrictions")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[s("strong",[this._v("Props")]),this._v(":")]),s("ul",[s("li",[s("code",[this._v("custom")]),this._v(" - boolean")])])]),s("li",[s("p",[s("strong",[this._v("Usage")]),this._v("：")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("<")]),this._v("Content")]),s("span",{attrs:{class:"token punctuation"}},[this._v("/>")])]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Also see:")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("p",[e("strong",[t._v("Props")]),t._v(":")]),e("ul",[e("li",[e("code",[t._v("text")]),t._v(" - string")]),e("li",[e("code",[t._v("type")]),t._v(" - string, optional value: "),e("code",[t._v('"tip"|"warn"|"error"')]),t._v(", defaults to "),e("code",[t._v('"tip"')]),t._v(".")]),e("li",[e("code",[t._v("vertical")]),t._v(" - string, optional value: "),e("code",[t._v('"top"|"middle"')]),t._v(", defaults to "),e("code",[t._v('"top"')]),t._v(".")])])]),e("li",[e("p",[e("strong",[t._v("Usage")]),t._v(":")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{attrs:{class:"token title important"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("###")]),this._v(' Badge <Badge text="beta" type="warn"/> <Badge text="0.10.1+"/>')]),this._v("\n")])])])}],!1,function(t){this.$style=n.default.locals||n.default},null,null);s.default=i.exports}}]);