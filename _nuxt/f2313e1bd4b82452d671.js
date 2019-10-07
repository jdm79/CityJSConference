(window.webpackJsonp=window.webpackJsonp||[]).push([[7,14,19],{175:function(t,e,n){"use strict";n.r(e);var o={props:{title:String,subtitle:String,isH2:Boolean,white:Boolean}},r=(n(381),n(3)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"container heading"},[n("div",{staticClass:"columns has-text-centered"},[n("div",{staticClass:"column"},[t.isH2?n("h2",{class:[t.white?"white-thin-heading":"thin-heading"],domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t.isH2?t._e():n("h3",{class:[t.white?"white":""],domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("p",{class:["subtitle",t.white?"white":""],domProps:{innerHTML:t._s(t.subtitle)}}),t._v(" "),t._m(0)])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"has-text-centered"},[e("span",{staticClass:"flag"})])}],!1,null,null,null);e.default=component.exports},180:function(t,e,n){"use strict";n.r(e);var h2=n(175),o={props:{items:Array,level:String},components:{"app-h2":h2.default},computed:{TypedItems:function(){var t=this;return void 0!==this.items?this.items.filter(function(e){return e.level===t.level}):[]}}},r=(n(415),n(3)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.TypedItems.length>0?n("div",[n("h3",{staticClass:"uppercase"},[t._v(t._s(t.level))]),t._v(" "),n("section",{staticClass:"section"},[n("div",{},[n("div",{staticClass:"columns"},t._l(t.TypedItems,function(e){return n("div",{key:e._id,staticClass:" column  has-background is-active"},[n("a",{attrs:{href:""+e.url}},[n("figure",{staticClass:"sponsor"},[void 0!==e.image?n("img",{attrs:{alt:"sponsor",src:"//api.spiralthread.com/"+e.image.path}}):t._e()])])])}),0)])])]):t._e()},[],!1,null,"5148d9cb",null);e.default=component.exports},184:function(t,e,n){"use strict";n.r(e);n(87),n(44),n(12),n(8),n(55);var o=n(35),r=n(180),h2=n(175),c=n(22);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,n)}return e}var d={props:{items:Array},components:{"app-sponsor":r.default,"app-h2":h2.default},created:function(t){this.$store.dispatch("sponsors/get")},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(source,!0).forEach(function(e){Object(o.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(c.b)({sponsors:"sponsors/sponsors"}))},h=(n(432),n(3)),component=Object(h.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sponsors"},[n("section",{staticClass:"hero columns"},[n("div",{staticClass:"hero-body"},[n("div",[n("app-h2",{attrs:{title:"Our Sponsors",subtitle:"CITYJS CONFERENCE WOULDN'T BE POSSIBLE WITHOUT OUR AMAZING SPONSORS","is-h2":!0}}),t._v(" "),n("div",{},[t._m(0),t._v(" "),n("div",{staticClass:"columns is-centered is-half"},[n("div",{staticClass:"column is-half has-text-centered"},[n("app-sponsor",{attrs:{items:t.sponsors,level:"Platinum","is-h2":!1}})],1)]),t._v(" "),n("div",{staticClass:"columns is-centered is-half"},[n("div",{staticClass:"column is-10 has-text-centered"},[n("app-sponsor",{attrs:{items:t.sponsors,level:"Gold","is-h2":!1}})],1)]),t._v(" "),n("div",{staticClass:"columns is-centered "},[n("div",{staticClass:"column is-10 has-text-centered"},[n("app-sponsor",{attrs:{items:t.sponsors,level:"Silver","is-h2":!1}})],1)]),t._v(" "),n("div",{staticClass:"columns is-centered is-half"},[n("div",{staticClass:"column is-10 has-text-centered"},[n("app-sponsor",{attrs:{items:t.items,level:"Bronze","is-h2":!1}})],1)]),t._v(" "),n("div",{staticClass:"columns is-centered is-half"},[n("div",{staticClass:"column is-10 has-text-centered"},[n("app-sponsor",{attrs:{items:t.sponsors,level:"Video","is-h2":!1}})],1)]),t._v(" "),n("div",{staticClass:"columns is-centered is-half"},[n("div",{staticClass:"column is-one has-text-centered"},[n("app-sponsor",{attrs:{items:t.sponsors,level:"Community","is-h2":!1}})],1)])])],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"columns is-centered is-half"},[e("div",{staticClass:"column is-half has-text-centered"},[e("br"),this._v("If you are thinking of sponsoring please "),e("a",{attrs:{href:"mailto:cityjsconf@gmail.com"}},[this._v("contact us")])])])}],!1,null,"7dd1948c",null);e.default=component.exports},380:function(t,e,n){var content=n(382);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("47349750",content,!0,{sourceMap:!1})},381:function(t,e,n){"use strict";var o=n(380);n.n(o).a},382:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,'h2{font-size:35px;line-height:52px;text-transform:uppercase}h2,h3{font-weight:500}h3{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}.heading{margin-bottom:20px}.white{color:#fff}.white-thin-heading:after{content:"";left:0;bottom:0;width:0;height:0;border-bottom:13px solid #fff;background-color:#fff;border-left:55px solid #fff;border-right:55px solid #fff;position:absolute;left:50%;margin-left:-55px}.white-thin-heading{padding:20px;color:#fff}.white-thin-heading .subtitle{font-weight:700;text-transform:capitalize}.thin-heading{padding:20px}.thin-heading .subtitle{font-weight:700;text-transform:capitalize}.thin-heading:after{content:"";left:0;bottom:0;width:0;height:0;border-bottom:13px solid rgba(255,48,48,.9);background-color:rgba(255,48,48,.9);border-left:55px solid rgba(255,48,48,.9);border-right:55px solid rgba(255,48,48,.9);position:absolute;left:50%;margin-left:-55px}',""])},389:function(t,e,n){var content=n(416);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("63c00025",content,!0,{sourceMap:!1})},401:function(t,e,n){var content=n(433);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("71eae576",content,!0,{sourceMap:!1})},415:function(t,e,n){"use strict";var o=n(389);n.n(o).a},416:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,"h2[data-v-5148d9cb]{font-size:35px;line-height:52px;text-transform:uppercase}h2[data-v-5148d9cb],h3[data-v-5148d9cb]{font-weight:500}h3[data-v-5148d9cb]{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}.uppercase[data-v-5148d9cb]{text-transform:uppercase}",""])},432:function(t,e,n){"use strict";var o=n(401);n.n(o).a},433:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,"h2[data-v-7dd1948c]{font-size:35px;line-height:52px;text-transform:uppercase}h2[data-v-7dd1948c],h3[data-v-7dd1948c]{font-weight:500}h3[data-v-7dd1948c]{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}",""])}}]);