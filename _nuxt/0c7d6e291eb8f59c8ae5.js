(window.webpackJsonp=window.webpackJsonp||[]).push([[3,8,16,21],{174:function(t,e,n){"use strict";n.r(e);var o={props:{title:String,subtitle:String,isH2:Boolean,white:Boolean}},r=(n(398),n(3)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"container heading"},[n("div",{staticClass:"columns has-text-centered"},[n("div",{staticClass:"column"},[t.isH2?n("h2",{class:[t.white?"white-thin-heading":"thin-heading"],domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t.isH2?t._e():n("h3",{class:[t.white?"white":""],domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("p",{class:["subtitle",t.white?"white":""],domProps:{innerHTML:t._s(t.subtitle)}}),t._v(" "),t._m(0)])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"has-text-centered"},[e("span",{staticClass:"flag"})])}],!1,null,null,null);e.default=component.exports},175:function(t,e,n){"use strict";n.r(e);var h2=n(174),o={props:{talk:Object,open:Boolean},components:{"app-h2":h2.default}},r=(n(411),n(3)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.talk?n("div",{class:["columns talk"]},[n("div",{staticClass:"column is-three-quarters-desktop"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-content"},[n("div",{staticClass:"columns"},["standard"!==t.talk.type?n("div",{staticClass:"column is-3 "},[n("figure",{staticClass:"image is-128x128"},[t.talk.image?n("img",{attrs:{src:"siteimages/"+t.talk.image.path,alt:"Placeholder image"}}):t._e()])]):t._e(),t._v(" "),n("div",{staticClass:"column is-9"},[n("h2",[t._v(t._s(t.talk.title))]),t._v(" "),n("h3",[n("ul",t._l(t.talk.speakers,function(e,o){return n("li",{key:o},[t._v("\n                            "+t._s(e.display)+"\n                         ")])}),0)])])]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.talk.description)}})])])])]):t._e()},[],!1,null,"241f0919",null);e.default=component.exports},180:function(t,e,n){"use strict";n.r(e);n(9),n(5),n(89),n(436);var o=n(452),h2=n(174),r=n(175),c=n(422),l={data:function(){return{chosen:null,open:!1,date:{}}},props:{items:Array,day:String,location:String},components:{"app-h2":h2.default,"app-talk":r.default,accordion:c.BulmaAccordion,"accordion-item":c.BulmaAccordionItem},methods:{select:function(t){return this.chosen=t,this.open=!this.open,document.getElementById("schedule").scrollIntoView()},close:function(){this.open=!this.open}},watch:{day:function(t,e){t!==e&&(this.chosen=null,this.open=!1)}},computed:{groups:function(){var t=this;if(void 0!==this.items){var e=Object(o.a)(new Set(this.items.filter(function(e){return e.date===t.day}).map(function(t){return t.location}))),n=this.items.filter(function(e){return e.date===t.day}).sort(function(a,b){return a.order-b.order}),r=e.map(function(t){return{location:t,talks:n.filter(function(e){if(t===e.location)return e}),morning:n.filter(function(e){if(t===e.location&&"morning"===e.group)return e}),midday:n.filter(function(e){if(t===e.location&&"midday"===e.group)return e}),afternoon:n.filter(function(e){if(t===e.location&&"afternoon"===e.group)return e})}});return r}return[]},talk:function(){var t=this;if(void 0!==this.items){var e=this.items.filter(function(e){return e.date===t.day})[0];return null===this.chosen&&(this.chosen=e),this.chosen}}}},d=(n(437),n(3)),component=Object(d.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"bordered"},[n("div",{attrs:{id:"talk"}},[n("div",{staticClass:"columns"},[n("div",{class:["column is-4",{"is-hidden-mobile":!0===t.open}]},t._l(t.groups,function(e,o){return n("aside",{key:o,staticClass:"menu"},[n("p",{staticClass:"menu-label"},[t._v("\n            "+t._s(e.location)+"\n        ")]),t._v(" "),n("ul",{staticClass:"menulist"},t._l(e.talks,function(e,o){return n("li",{key:o},[n("a",{class:{"is-active":e===t.chosen},on:{click:function(n){return t.select(e)}}},["standard"!==e.type?n("div",[n("div",{staticClass:"columns talk "},[n("div",{staticClass:"column is-4"},[t._v("\n                                    "+t._s(e.time)+"      \n                                ")]),t._v(" "),n("div",{staticClass:"column is-8"},[t._v("\n                                    "+t._s(e.title)+" "),n("br"),t._v(" "),n("strong",t._l(e.speakers,function(e,o){return n("span",{key:o},[t._v("\n                                            "+t._s(e.display)+" "),n("br")])}),0)])])]):t._e(),t._v(" "),"standard"===e.type?n("div",[n("div",{staticClass:"columns talk "},[n("div",{staticClass:"column is-4"},[t._v("\n                            "+t._s(e.time)+"      \n                        ")]),t._v(" "),n("div",{staticClass:"column is-8"},[t._v("\n                           "+t._s(e.title)+"\n                        ")])])]):t._e()])])}),0)])}),0),t._v(" "),n("div",{class:["column is-8 scheduletlk",{"is-hidden-mobile":!1===t.open}]},[n("a",{class:["button  close closebtn",{closed:!1===t.open}],on:{click:function(e){return t.close()}}},[n("span",{staticClass:"icon is-small"},[t._v("\n            X\n        ")])]),t._v(" "),n("app-talk",{attrs:{talk:t.talk,open:t.open}})],1)])])])},[],!1,null,"be8c71a0",null);e.default=component.exports},198:function(t,e,n){"use strict";n.r(e);n(56),n(35),n(44),n(9),n(5),n(89),n(436);var o=n(452),r=n(24),h2=n(174),c=n(180),l=n(22);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,n)}return e}var f={data:function(){return{chosen:""}},props:{items:Array,speakers:Array},components:{"app-h2":h2.default,"app-day":c.default},methods:{select:function(t){this.chosen=t}},mounted:function(){this.$store.dispatch("schedule/get")},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(source,!0).forEach(function(e){Object(r.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(l.b)({schedule:"schedule/schedule"}),{Days:function(){return void 0!==this.schedule?Object(o.a)(new Set(this.schedule.map(function(t){return t.date}))).sort(function(a,b){return new Date(a)-new Date(b)}):[]},selectedDate:function(){if(void 0!==this.schedule)return""===this.chosen&&this.schedule.length>0&&(this.chosen=this.schedule[0].date),this.chosen}})},h=(n(469),n(3)),component=Object(h.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero schedule",attrs:{id:"schedule"}},[n("div",{},[n("div",{staticClass:"hero-body"},[n("div",[n("app-h2",{attrs:{title:"Schedule",subtitle:"3 days of JS Festivities around the center of London","is-h2":!0,white:!0}})],1),t._v(" "),n("div",{},[n("div",{staticClass:"container"},[n("div",{},[n("div",{staticClass:"tabs"},[n("ul",{},t._l(t.Days,function(e,o){return n("li",{key:e,class:{"is-active":e===t.chosen}},[n("a",{on:{click:function(n){return t.select(e)}}},[t._v("Day "+t._s(o+1))])])}),0)]),t._v(" "),n("app-day",{attrs:{items:t.schedule,speakers:t.speakers,day:t.selectedDate}})],1)])])])])])},[],!1,null,"17f7e975",null);e.default=component.exports},397:function(t,e,n){var content=n(399);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("47349750",content,!0,{sourceMap:!1})},398:function(t,e,n){"use strict";var o=n(397);n.n(o).a},399:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,'body{background:#000}.home{background:#fff}h2{font-size:35px;line-height:52px;text-transform:uppercase}h2,h3{font-weight:500}h3{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}h3 a,h3 a:hover{color:#fff}.heading{margin-bottom:20px}.white{color:#fff}.white-thin-heading:after{content:"";left:0;bottom:0;width:0;height:0;border-bottom:13px solid #fff;background-color:#fff;border-left:55px solid #fff;border-right:55px solid #fff;position:absolute;left:50%;margin-left:-55px}.white-thin-heading{padding:20px;color:#fff}.white-thin-heading .subtitle{font-weight:700;text-transform:capitalize}.thin-heading{padding:20px}.thin-heading .subtitle{font-weight:700;text-transform:capitalize}.thin-heading:after{content:"";left:0;bottom:0;width:0;height:0;border-bottom:13px solid rgba(255,48,48,.9);background-color:rgba(255,48,48,.9);border-left:55px solid rgba(255,48,48,.9);border-right:55px solid rgba(255,48,48,.9);position:absolute;left:50%;margin-left:-55px}',""])},400:function(t,e,n){var content=n(412);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("d414b9fa",content,!0,{sourceMap:!1})},411:function(t,e,n){"use strict";var o=n(400);n.n(o).a},412:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,"body[data-v-241f0919]{background:#000}.home[data-v-241f0919]{background:#fff}h2[data-v-241f0919]{font-size:35px;line-height:52px;text-transform:uppercase}h2[data-v-241f0919],h3[data-v-241f0919]{font-weight:500}h3[data-v-241f0919]{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}.card[data-v-241f0919],h3 a[data-v-241f0919],h3 a[data-v-241f0919]:hover{color:#fff}.card[data-v-241f0919]{background-color:transparent;border:none;box-shadow:none}.card-content[data-v-241f0919]{padding:5px}@media screen and (max-width:767px){.card-content[data-v-241f0919]{overflow-y:scroll;height:170vw}}.subtitle[data-v-241f0919],.title[data-v-241f0919]{color:#fff}figure[data-v-241f0919]{padding-right:20px}h2[data-v-241f0919]{font-size:32px;line-height:34px}h2[data-v-241f0919],h3[data-v-241f0919]{text-transform:unset;color:#fff}h3[data-v-241f0919]{font-size:16px;line-height:16px;padding:0;margin:10px 0}.talk[data-v-241f0919]{display:block;background:#c90000}@media screen and (max-width:767px){.talk[data-v-241f0919]{position:static;top:30%;left:0;background:#c90000;z-index:1000;width:100%;min-height:200vw;overflow-y:scroll}}.talk a[data-v-241f0919]{color:#fff}",""])},413:function(t,e,n){var content=n(438);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("13fb87c8",content,!0,{sourceMap:!1})},437:function(t,e,n){"use strict";var o=n(413);n.n(o).a},438:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,"body[data-v-be8c71a0]{background:#000}.home[data-v-be8c71a0]{background:#fff}h2[data-v-be8c71a0]{font-size:35px;line-height:52px;text-transform:uppercase}h2[data-v-be8c71a0],h3[data-v-be8c71a0]{font-weight:500}h3[data-v-be8c71a0]{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}h3 a[data-v-be8c71a0],h3 a[data-v-be8c71a0]:hover{color:#fff}.menu[data-v-be8c71a0]:last-child{border-bottom:20px solid #000}.menu-label[data-v-be8c71a0]{border-bottom:#fff;background:#c90000;color:#fff;height:2.3em;padding:10px 10px 30px 20px;border-left:3px solid #fff;font-weight:700}.scheduletlk[data-v-be8c71a0]{position:relative;display:block}@media screen and (max-width:767px){.scheduletlk[data-v-be8c71a0]{position:static}}.scheduletlk .close[data-v-be8c71a0]{position:absolute;top:10px;right:20px;display:none;z-index:1000000;background-color:transparent;color:#fff;display:block}.scheduletlk .closed[data-v-be8c71a0]{display:none}.menulist li[data-v-be8c71a0]{border-left:3px solid #333;padding-left:20px;margin-bottom:10px;min-height:40px;padding-top:5px;padding-bottom:5px}.menulist li a[data-v-be8c71a0]{color:#fff;opacity:.6}.menulist li a.is-active[data-v-be8c71a0]{opacity:1}.menulist .subtitle[data-v-be8c71a0],.menulist h3 a[data-v-be8c71a0]{color:#fff}",""])},442:function(t,e,n){var content=n(470);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("820f4110",content,!0,{sourceMap:!1})},469:function(t,e,n){"use strict";var o=n(442);n.n(o).a},470:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,"body[data-v-17f7e975]{background:#000}.home[data-v-17f7e975]{background:#fff}h2[data-v-17f7e975]{font-size:35px;line-height:52px;text-transform:uppercase}h2[data-v-17f7e975],h3[data-v-17f7e975]{font-weight:500}h3[data-v-17f7e975]{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}.schedule[data-v-17f7e975],h3 a[data-v-17f7e975],h3 a[data-v-17f7e975]:hover{color:#fff}.schedule[data-v-17f7e975]{background:rgba(255,48,48,.9)}.schedule .tabs li a[data-v-17f7e975]{background-color:transparent;border:none;color:#fff}.schedule .tabs li.is-active a[data-v-17f7e975]{background-color:#c90000;border:none}",""])}}]);