(window.webpackJsonp=window.webpackJsonp||[]).push([[15,21],{175:function(t,e,n){"use strict";n.r(e);var o={props:{title:String,subtitle:String,isH2:Boolean,white:Boolean}},r=(n(397),n(3)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"container heading"},[n("div",{staticClass:"columns has-text-centered"},[n("div",{staticClass:"column"},[t.isH2?n("h2",{class:[t.white?"white-thin-heading":"thin-heading"],domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t.isH2?t._e():n("h3",{class:[t.white?"white":""],domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("p",{class:["subtitle",t.white?"white":""],domProps:{innerHTML:t._s(t.subtitle)}}),t._v(" "),t._m(0)])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"has-text-centered"},[e("span",{staticClass:"flag"})])}],!1,null,null,null);e.default=component.exports},185:function(t,e,n){"use strict";n.r(e);var h2=n(175),o={props:{items:Array,level:String},components:{"app-h2":h2.default},computed:{TypedItems:function(){var t=this;return void 0!==this.items?this.items.filter(function(e){return e.level===t.level}):[]}}},r=(n(446),n(3)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.TypedItems.length>0?n("div",[n("h3",{staticClass:"uppercase"},[t._v(t._s(t.level))]),t._v(" "),n("section",{staticClass:"section"},[n("div",{},[n("div",{staticClass:"columns"},t._l(t.TypedItems,function(e){return n("div",{key:e._id,staticClass:" column  has-background is-active"},[n("a",{attrs:{href:""+e.url,tatget:"_blank"}},[n("figure",{staticClass:"sponsor"},[void 0!==e.image?n("img",{attrs:{alt:"sponsor",src:"/siteimages/"+e.image.path}}):t._e()])])])}),0)])])]):t._e()},[],!1,null,"2a525064",null);e.default=component.exports},396:function(t,e,n){var content=n(398);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("47349750",content,!0,{sourceMap:!1})},397:function(t,e,n){"use strict";var o=n(396);n.n(o).a},398:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,'body{background:#000}.home{background:#fff}h2{font-size:35px;line-height:52px;text-transform:uppercase}h2,h3{font-weight:500}h3{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}.heading{margin-bottom:20px}.white{color:#fff}.white-thin-heading:after{content:"";left:0;bottom:0;width:0;height:0;border-bottom:13px solid #fff;background-color:#fff;border-left:55px solid #fff;border-right:55px solid #fff;position:absolute;left:50%;margin-left:-55px}.white-thin-heading{padding:20px;color:#fff}.white-thin-heading .subtitle{font-weight:700;text-transform:capitalize}.thin-heading{padding:20px}.thin-heading .subtitle{font-weight:700;text-transform:capitalize}.thin-heading:after{content:"";left:0;bottom:0;width:0;height:0;border-bottom:13px solid rgba(255,48,48,.9);background-color:rgba(255,48,48,.9);border-left:55px solid rgba(255,48,48,.9);border-right:55px solid rgba(255,48,48,.9);position:absolute;left:50%;margin-left:-55px}',""])},413:function(t,e,n){var content=n(447);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("7aee85f6",content,!0,{sourceMap:!1})},446:function(t,e,n){"use strict";var o=n(413);n.n(o).a},447:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,"body[data-v-2a525064]{background:#000}.home[data-v-2a525064]{background:#fff}h2[data-v-2a525064]{font-size:35px;line-height:52px;text-transform:uppercase}h2[data-v-2a525064],h3[data-v-2a525064]{font-weight:500}h3[data-v-2a525064]{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}.uppercase[data-v-2a525064]{text-transform:uppercase}",""])}}]);