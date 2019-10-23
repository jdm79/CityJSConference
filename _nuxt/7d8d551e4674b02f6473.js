(window.webpackJsonp=window.webpackJsonp||[]).push([[4,8,16,21],{174:function(t,e,n){"use strict";n.r(e);var o={props:{title:String,subtitle:String,isH2:Boolean,white:Boolean}},c=(n(388),n(3)),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"container heading"},[n("div",{staticClass:"columns has-text-centered"},[n("div",{staticClass:"column"},[t.isH2?n("h2",{class:[t.white?"white-thin-heading":"thin-heading"],domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t.isH2?t._e():n("h3",{class:[t.white?"white":""],domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("p",{class:["subtitle",t.white?"white":""],domProps:{innerHTML:t._s(t.subtitle)}}),t._v(" "),t._m(0)])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"has-text-centered"},[e("span",{staticClass:"flag"})])}],!1,null,null,null);e.default=component.exports},176:function(t,e,n){"use strict";n.r(e);var h2=n(174),o={props:{talk:Object,open:Boolean},components:{"app-h2":h2.default}},c=(n(410),n(3)),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.talk?n("div",{class:["columns talk",t.open?"":"is-hidden"]},[n("div",{staticClass:"column is-three-quarters-desktop is-mobile"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-content"},[n("div",{staticClass:"columns"},["standard"!==t.talk.type?n("div",{staticClass:"column is-3 "},[n("figure",{staticClass:"image is-128x128"},[t.talk.image?n("img",{attrs:{src:"//api.spiralthread.com/"+t.talk.image.path,alt:"Placeholder image"}}):t._e()])]):t._e(),t._v(" "),n("div",{staticClass:"column is-9"},[n("h2",[t._v(t._s(t.talk.title))]),t._v(" "),n("h3",[n("ul",t._l(t.talk.speakers,function(e,o){return n("li",{key:o},[t._v("\n                            "+t._s(e.display)+"\n                         ")])}),0)])])]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.talk.description)}})])])])]):t._e()},[],!1,null,"45fc32c2",null);e.default=component.exports},182:function(t,e,n){"use strict";n.r(e);n(8),n(7),n(88),n(427);var o=n(430),h2=n(174),c=n(176),r=n(415),l={data:function(){return{chosen:null,open:!1,date:{}}},props:{items:Array,day:String,location:String},components:{"app-h2":h2.default,"app-talk":c.default,accordion:r.BulmaAccordion,"accordion-item":r.BulmaAccordionItem},methods:{select:function(t){return this.chosen=t,this.open=!this.open,document.getElementById("schedule").scrollIntoView()},close:function(){this.open=!this.open}},watch:{day:function(t,e){t!==e&&(this.chosen=null,this.open=!1)}},computed:{groups:function(){var t=this;if(void 0!==this.items){var e=Object(o.a)(new Set(this.items.filter(function(e){return e.date===t.day}).map(function(t){return t.location}))),n=this.items.filter(function(e){return e.date===t.day}).sort(function(a,b){return a.order-b.order}),c=e.map(function(t){return{location:t,talks:n.filter(function(e){if(t===e.location)return e}),morning:n.filter(function(e){if(t===e.location&&"morning"===e.group)return e}),midday:n.filter(function(e){if(t===e.location&&"midday"===e.group)return e}),afternoon:n.filter(function(e){if(t===e.location&&"afternoon"===e.group)return e})}});return c}return[]},talk:function(){var t=this;if(void 0!==this.items){var e=this.items.filter(function(e){return e.date===t.day})[0];return null===this.chosen&&(this.chosen=e),this.chosen}}}},d=(n(428),n(3)),component=Object(d.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section bordered"},[n("div",{staticClass:"container",attrs:{id:"talk"}},[n("div",{staticClass:"columns"},[n("div",{class:["column is-8",{"is-hidden":!0===t.open}]},t._l(t.groups,function(e,o){return n("aside",{key:o,staticClass:"menu"},[n("p",{staticClass:"menu-label"},[t._v("\n            "+t._s(e.location)+"\n        ")]),t._v(" "),n("ul",{staticClass:"menulist"},t._l(e.talks,function(e,o){return n("li",{key:o},[n("a",{class:{"is-active":e===t.chosen},on:{click:function(n){return t.select(e)}}},["standard"!==e.type?n("div",[n("div",{staticClass:"columns talk "},[n("div",{staticClass:"column is-2"},[t._v("\n                                    "+t._s(e.time)+"      \n                                ")]),t._v(" "),n("div",{staticClass:"column is-6"},[t._v("\n                                    "+t._s(e.title)+" "),n("br"),t._v(" "),n("strong",t._l(e.speakers,function(e,o){return n("span",{key:o},[t._v("\n                                            "+t._s(e.display)+" "),n("br")])}),0)])])]):t._e(),t._v(" "),"standard"===e.type?n("div",[n("div",{staticClass:"columns talk "},[n("div",{staticClass:"column is-2"},[t._v("\n                            "+t._s(e.time)+"      \n                        ")]),t._v(" "),n("div",{staticClass:"column is-2"},[t._v("\n                           "+t._s(e.title)+"\n                        ")])])]):t._e()])])}),0)])}),0),t._v(" "),n("div",{staticClass:"column is-9 scheduletlk"},[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#talk",expression:"'#talk'"}],class:["button  close closebtn",{closed:!1===t.open}],on:{click:function(e){return t.close()}}},[n("span",{staticClass:"icon is-small"},[t._v("\n            X\n        ")])]),t._v(" "),n("app-talk",{attrs:{talk:t.talk,open:t.open}})],1)])])])},[],!1,null,"61b7c722",null);e.default=component.exports},185:function(t,e,n){"use strict";n.r(e);n(8),n(7),n(88),n(427);var o=n(430),h2=n(174),c=n(182),r={data:function(){return{chosen:""}},props:{items:Array,speakers:Array},components:{"app-h2":h2.default,"app-day":c.default},methods:{select:function(t){this.chosen=t}},computed:{Days:function(){return void 0!==this.items?Object(o.a)(new Set(this.items.map(function(t){return t.date}))):[]},selectedDate:function(){if(void 0!==this.items)return""===this.chosen&&this.items.length>0&&(this.chosen=this.items[0].date),this.chosen}}},l=(n(445),n(3)),component=Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero section schedule ",attrs:{id:"schedule"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"hero-body"},[n("div",[n("app-h2",{attrs:{title:"Schedule",subtitle:"3 days of JS Festivities around the center of London","is-h2":!0,white:!0}})],1),t._v(" "),n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column is-half-desktop"},[n("div",{staticClass:"column is-7 "},[n("div",{staticClass:"tabs is-toggle"},[n("ul",{},t._l(t.Days,function(e,o){return n("li",{key:e,class:{"is-active":e===t.chosen}},[n("a",{on:{click:function(n){return t.select(e)}}},[t._v("Day "+t._s(o+1))])])}),0)])]),t._v(" "),n("app-day",{attrs:{items:t.items,speakers:t.speakers,day:t.selectedDate}})],1)])])])])},[],!1,null,"b87f3c28",null);e.default=component.exports},387:function(t,e,n){var content=n(389);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("47349750",content,!0,{sourceMap:!1})},388:function(t,e,n){"use strict";var o=n(387);n.n(o).a},389:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,'body{background:#000}.home{background:#fff}h2{font-size:35px;line-height:52px;text-transform:uppercase}h2,h3{font-weight:500}h3{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}.heading{margin-bottom:20px}.white{color:#fff}.white-thin-heading:after{content:"";left:0;bottom:0;width:0;height:0;border-bottom:13px solid #fff;background-color:#fff;border-left:55px solid #fff;border-right:55px solid #fff;position:absolute;left:50%;margin-left:-55px}.white-thin-heading{padding:20px;color:#fff}.white-thin-heading .subtitle{font-weight:700;text-transform:capitalize}.thin-heading{padding:20px}.thin-heading .subtitle{font-weight:700;text-transform:capitalize}.thin-heading:after{content:"";left:0;bottom:0;width:0;height:0;border-bottom:13px solid rgba(255,48,48,.9);background-color:rgba(255,48,48,.9);border-left:55px solid rgba(255,48,48,.9);border-right:55px solid rgba(255,48,48,.9);position:absolute;left:50%;margin-left:-55px}',""])},392:function(t,e,n){var content=n(411);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("1ec3533f",content,!0,{sourceMap:!1})},398:function(t,e,n){var content=n(429);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("d949a956",content,!0,{sourceMap:!1})},410:function(t,e,n){"use strict";var o=n(392);n.n(o).a},411:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,"body[data-v-45fc32c2]{background:#000}.home[data-v-45fc32c2]{background:#fff}h2[data-v-45fc32c2]{font-size:35px;line-height:52px;text-transform:uppercase}h2[data-v-45fc32c2],h3[data-v-45fc32c2]{font-weight:500}h3[data-v-45fc32c2]{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}.card[data-v-45fc32c2]{background-color:transparent;color:#fff;border:none;box-shadow:none}.card-content[data-v-45fc32c2]{padding:5px}@media screen and (max-width:767px){.card-content[data-v-45fc32c2]{overflow-y:scroll;height:170vw}}.subtitle[data-v-45fc32c2],.title[data-v-45fc32c2]{color:#fff}figure[data-v-45fc32c2]{padding-right:20px}h2[data-v-45fc32c2]{font-size:32px;line-height:34px}h2[data-v-45fc32c2],h3[data-v-45fc32c2]{text-transform:unset;color:#fff}h3[data-v-45fc32c2]{font-size:16px;line-height:16px;padding:0;margin:10px 0}strong[data-v-45fc32c2]{color:#fff}.talk[data-v-45fc32c2]{display:block;background:#c90000}@media screen and (max-width:767px){.talk[data-v-45fc32c2]{position:static;top:20%;left:0;background:#c90000;z-index:1000;width:100%;min-height:200vw;overflow-y:scroll}}",""])},412:function(t,e,n){var content=n(446);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("c1599a74",content,!0,{sourceMap:!1})},428:function(t,e,n){"use strict";var o=n(398);n.n(o).a},429:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,"body[data-v-61b7c722]{background:#000}.home[data-v-61b7c722]{background:#fff}h2[data-v-61b7c722]{font-size:35px;line-height:52px;text-transform:uppercase}h2[data-v-61b7c722],h3[data-v-61b7c722]{font-weight:500}h3[data-v-61b7c722]{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}.menu[data-v-61b7c722]:last-child{border-bottom:20px solid #000}.menu-label[data-v-61b7c722]{border-bottom:#fff;background:#c90000;color:#fff;height:2.3em;padding:10px 10px 30px 20px;border-left:3px solid #fff;font-weight:700}.scheduletlk[data-v-61b7c722]{position:relative;display:block}@media screen and (max-width:767px){.scheduletlk[data-v-61b7c722]{position:static}}.scheduletlk .close[data-v-61b7c722]{position:absolute;top:10px;right:20px;display:none;z-index:1000000;background-color:transparent;color:#fff;display:block}.scheduletlk .closed[data-v-61b7c722]{display:none}.menulist li[data-v-61b7c722]{border-left:3px solid #333;padding-left:20px;margin-bottom:10px;min-height:40px;padding-top:5px;padding-bottom:5px}.menulist li a[data-v-61b7c722]{color:#fff;opacity:.6}.menulist li a.is-active[data-v-61b7c722]{opacity:1}.menulist .subtitle[data-v-61b7c722]{color:#fff}",""])},445:function(t,e,n){"use strict";var o=n(412);n.n(o).a},446:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,"body[data-v-b87f3c28]{background:#000}.home[data-v-b87f3c28]{background:#fff}h2[data-v-b87f3c28]{font-size:35px;line-height:52px;text-transform:uppercase}h2[data-v-b87f3c28],h3[data-v-b87f3c28]{font-weight:500}h3[data-v-b87f3c28]{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}.schedule[data-v-b87f3c28]{background:rgba(255,48,48,.9);color:#fff}.schedule .tabs li a[data-v-b87f3c28]{background-color:transparent;border:none;color:#fff}.schedule .tabs li.is-active a[data-v-b87f3c28]{background-color:#c90000;border:none}",""])}}]);