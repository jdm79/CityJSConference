(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{409:function(t,e,r){var content=r(438);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("670d6ce9",content,!0,{sourceMap:!1})},437:function(t,e,r){"use strict";var n=r(409);r.n(n).a},438:function(t,e,r){(t.exports=r(14)(!1)).push([t.i,".home{display:flex;flex-direction:column}",""])},466:function(t,e,r){"use strict";r.r(e);r(55),r(35),r(8),r(44),r(191),r(192),r(7);var n=r(24),o=(r(16),r(2)),c=r(22);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,r)}return e}var h,l,d={data:function(){return{pagename:"Home"}},created:function(t){this.$store.dispatch("pages/get")},mounted:(l=Object(o.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:void 0!==(e=this.$route.params.page)&&(this.pagename=e);case 2:case"end":return t.stop()}},t,this)})),function(){return l.apply(this,arguments)}),computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(source,!0).forEach(function(e){Object(n.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(c.b)({pages:"pages/pages",widgets:"widgets/widgets"}),{page:function(){var t=this,e=this.pages.filter(function(e){var r=t.$route.params.page;return void 0===r&&(r="home"),e.url.toString()===r})[0];return this.$store.dispatch("pages/current",e),this.$store.dispatch("widgets/get",e),e},componentss:function(){return this.widgets}}),methods:{fetch:(h=Object(o.a)(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,t.next=3,r.dispatch("pages/get");case 3:case"end":return t.stop()}},t)})),function(t){return h.apply(this,arguments)})}},m=(r(437),r(3)),component=Object(m.a)(d,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{attrs:{id:"inner"}},[e("section",{staticClass:"hero"},[this.page&&this.componentss?e("div",{staticClass:"home"},[this._l(this.componentss,function(component,i){return[e(component.default,{key:i,tag:"component"})]})],2):this._e()])])])},[],!1,null,null,null);e.default=component.exports}}]);