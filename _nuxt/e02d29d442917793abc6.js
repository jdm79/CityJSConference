(window.webpackJsonp=window.webpackJsonp||[]).push([[8,14,21],{175:function(t,e,r){"use strict";r.r(e);var n={props:{title:String,subtitle:String,isH2:Boolean,white:Boolean}},o=(r(389),r(3)),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("div",{staticClass:"container heading"},[r("div",{staticClass:"columns has-text-centered"},[r("div",{staticClass:"column"},[t.isH2?r("h2",{class:[t.white?"white-thin-heading":"thin-heading"],domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t.isH2?t._e():r("h3",{class:[t.white?"white":""],domProps:{innerHTML:t._s(t.title)}}),t._v(" "),r("p",{class:["subtitle",t.white?"white":""],domProps:{innerHTML:t._s(t.subtitle)}}),t._v(" "),t._m(0)])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"has-text-centered"},[e("span",{staticClass:"flag"})])}],!1,null,null,null);e.default=component.exports},181:function(t,e,r){"use strict";r.r(e);var h2=r(175),n={props:{items:Array,level:String},components:{"app-h2":h2.default},computed:{TypedItems:function(){var t=this;return void 0!==this.items?this.items.filter(function(e){return e.level===t.level}):[]}}},o=(r(431),r(3)),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.TypedItems.length>0?r("div",[r("h3",{staticClass:"uppercase"},[t._v(t._s(t.level))]),t._v(" "),r("section",{staticClass:"section"},[r("div",{},[r("div",{staticClass:"columns"},t._l(t.TypedItems,function(e){return r("div",{key:e._id,staticClass:" column  has-background is-active"},[r("a",{attrs:{href:""+e.url,tatget:"_blank"}},[r("figure",{staticClass:"sponsor"},[void 0!==e.image?r("img",{attrs:{alt:"sponsor",src:"/siteimages/"+e.image.path}}):t._e()])])])}),0)])])]):t._e()},[],!1,null,"2a525064",null);e.default=component.exports},203:function(t,e,r){"use strict";r.r(e);r(55),r(35),r(8),r(7),r(44),r(89),r(123);var n=r(24),o=r(181),h2=r(175),l=r(22);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,r)}return e}var d={props:{items:Array},components:{"app-sponsor":o.default,"app-h2":h2.default},created:function(t){this.$store.dispatch("sponsors/get")},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(source,!0).forEach(function(e){Object(n.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(l.b)({sponsors:"sponsors/sponsors",pages:"pages/current"}),{filteredSponsors:function(){var t=this;return this.sponsors.filter(function(e){return e.Year.includes(t.pages.year)})}})},f=(r(462),r(3)),component=Object(f.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sponsors"},[r("section",{staticClass:"hero columns"},[r("div",{staticClass:"hero-body"},[r("div",[r("app-h2",{attrs:{title:"Our Sponsors",subtitle:"CITYJS CONFERENCE WOULDN'T BE POSSIBLE WITHOUT OUR AMAZING SPONSORS","is-h2":!0}}),t._v(" "),r("div",{},[t._m(0),t._v(" "),r("div",{staticClass:"columns is-centered is-half"},[r("div",{staticClass:"column is-half has-text-centered"},[r("app-sponsor",{attrs:{items:t.filteredSponsors,level:"Platinum","is-h2":!1}})],1)]),t._v(" "),r("div",{staticClass:"columns is-centered is-half"},[r("div",{staticClass:"column is-10 has-text-centered"},[r("app-sponsor",{attrs:{items:t.filteredSponsors,level:"Gold","is-h2":!1}})],1)]),t._v(" "),r("div",{staticClass:"columns is-centered "},[r("div",{staticClass:"column is-10 has-text-centered"},[r("app-sponsor",{attrs:{items:t.filteredSponsors,level:"Silver","is-h2":!1}})],1)]),t._v(" "),r("div",{staticClass:"columns is-centered "},[r("div",{staticClass:"column is-10 has-text-centered"},[r("app-sponsor",{attrs:{items:t.filteredSponsors,level:"Bronze","is-h2":!1}})],1)]),t._v(" "),r("div",{staticClass:"columns is-centered is-half"},[r("div",{staticClass:"column is-10 has-text-centered"},[r("app-sponsor",{attrs:{items:t.filteredSponsors,level:"Video","is-h2":!1}})],1)]),t._v(" "),r("div",{staticClass:"columns is-centered is-half"},[r("div",{staticClass:"column is-one has-text-centered"},[r("app-sponsor",{attrs:{items:t.filteredSponsors,level:"Community","is-h2":!1}})],1)])])],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"columns is-centered is-half"},[e("div",{staticClass:"column is-half has-text-centered"},[e("br"),this._v("If you are thinking of sponsoring please "),e("a",{attrs:{href:"mailto:cityjsconf@gmail.com"}},[this._v("contact us")])])])}],!1,null,"41b7271e",null);e.default=component.exports},388:function(t,e,r){var content=r(390);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("47349750",content,!0,{sourceMap:!1})},389:function(t,e,r){"use strict";var n=r(388);r.n(n).a},390:function(t,e,r){(t.exports=r(14)(!1)).push([t.i,'body{background:#000}.home{background:#fff}h2{font-size:35px;line-height:52px;text-transform:uppercase}h2,h3{font-weight:500}h3{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}.heading{margin-bottom:20px}.white{color:#fff}.white-thin-heading:after{content:"";left:0;bottom:0;width:0;height:0;border-bottom:13px solid #fff;background-color:#fff;border-left:55px solid #fff;border-right:55px solid #fff;position:absolute;left:50%;margin-left:-55px}.white-thin-heading{padding:20px;color:#fff}.white-thin-heading .subtitle{font-weight:700;text-transform:capitalize}.thin-heading{padding:20px}.thin-heading .subtitle{font-weight:700;text-transform:capitalize}.thin-heading:after{content:"";left:0;bottom:0;width:0;height:0;border-bottom:13px solid rgba(255,48,48,.9);background-color:rgba(255,48,48,.9);border-left:55px solid rgba(255,48,48,.9);border-right:55px solid rgba(255,48,48,.9);position:absolute;left:50%;margin-left:-55px}',""])},401:function(t,e,r){var content=r(432);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("7aee85f6",content,!0,{sourceMap:!1})},431:function(t,e,r){"use strict";var n=r(401);r.n(n).a},432:function(t,e,r){(t.exports=r(14)(!1)).push([t.i,"body[data-v-2a525064]{background:#000}.home[data-v-2a525064]{background:#fff}h2[data-v-2a525064]{font-size:35px;line-height:52px;text-transform:uppercase}h2[data-v-2a525064],h3[data-v-2a525064]{font-weight:500}h3[data-v-2a525064]{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}.uppercase[data-v-2a525064]{text-transform:uppercase}",""])},433:function(t,e,r){var content=r(463);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("beeb09cc",content,!0,{sourceMap:!1})},462:function(t,e,r){"use strict";var n=r(433);r.n(n).a},463:function(t,e,r){(t.exports=r(14)(!1)).push([t.i,"body[data-v-41b7271e]{background:#000}.home[data-v-41b7271e]{background:#fff}h2[data-v-41b7271e]{font-size:35px;line-height:52px;text-transform:uppercase}h2[data-v-41b7271e],h3[data-v-41b7271e]{font-weight:500}h3[data-v-41b7271e]{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}",""])}}]);