(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{183:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),e("p",[t._v("参见 "),e("router-link",{attrs:{to:"./../config/"}},[t._v("配置")]),t._v(" 来查看所有可配置的选项。")],1),t._m(7),t._m(8),e("p",[t._v("一个 VuePress 主题应该负责整个网站的布局和交互细节。在 VuePress 中，目前自带了一个默认的主题（正是你现在所看到的），它是为技术文档而设计的。同时，默认主题提供了一些选项，让你可以去自定义导航栏（navbar）、 侧边栏（sidebar）和 首页（homepage） 等，详情请参见 "),e("router-link",{attrs:{to:"./../default-theme-config/"}},[t._v("默认主题")]),t._v(" 。")],1),e("p",[t._v("如果你想开发一个自定义主题，可以参考 "),e("router-link",{attrs:{to:"./custom-themes.html"}},[t._v("自定义主题")]),t._v("。")],1),t._m(9),t._m(10),t._m(11)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"基本配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 基本配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置文件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果没有任何配置，这个网站将会是非常局限的，用户也无法在你的网站上自由导航。为了更好地自定义你的网站，让我们首先在你的文档目录下创建一个 "),s("code",[this._v(".vuepress")]),this._v(" 目录，所有 VuePress 相关的文件都将会被放在这里。你的项目结构可能是这样：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(".\n├─ docs\n│  ├─ README.md\n│  └─ .vuepress\n│     └─ config.js\n└─ package.json\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("一个 VuePress 网站必要的配置文件是 "),s("code",[this._v(".vuepress/config.js")]),this._v("，它应该导出一个 JavaScript 对象：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'Hello VuePress'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  description"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'Just playing around'")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("对于上述的配置，如果你运行起 dev server，你应该能看到一个页面，它包含一个页头，里面包含一个标题和一个搜索框。VuePress 内置了基于 headers 的搜索 —— 它会自动为所有页面的标题、"),s("code",[this._v("h2")]),this._v(" 和 "),s("code",[this._v("h3")]),this._v(" 构建起一个简单的搜索索引。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("其他配置格式")]),s("p",[this._v("你也可以使用 YAML ("),s("code",[this._v(".vuepress/config.yml")]),this._v(") 或是 TOML ("),s("code",[this._v(".vuepress/config.toml")]),this._v(") 格式的配置文件。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"主题配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主题配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 主题配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"应用级别的配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用级别的配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 应用级别的配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("由于 VuePress 是一个标准的 Vue 应用，你可以通过创建一个 "),s("code",[this._v(".vuepress/enhanceApp.js")]),this._v(" 文件来做一些应用级别的配置，当该文件存在的时候，会被导入到应用内部。"),s("code",[this._v("enhanceApp.js")]),this._v(" 应该 "),s("code",[this._v("export default")]),this._v(" 一个钩子函数，并接受一个包含了一些应用级别属性的对象作为参数。你可以使用这个钩子来安装一些附加的 Vue 插件、注册全局组件，或者增加额外的路由钩子等：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Vue"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// VuePress 正在使用的 Vue 构造函数")]),t._v("\n  options"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// 附加到根实例的一些选项")]),t._v("\n  router"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// 当前应用的路由实例")]),t._v("\n  siteData "),e("span",{attrs:{class:"token comment"}},[t._v("// 站点元数据")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token comment"}},[t._v("// ...做一些其他的应用级别的优化")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);