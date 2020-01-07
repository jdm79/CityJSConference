(window.webpackJsonp=window.webpackJsonp||[]).push([[1,16,21],{174:function(t,e,n){"use strict";n.r(e);var r={props:{title:String,subtitle:String,isH2:Boolean,white:Boolean}},o=(n(388),n(3)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"container heading"},[n("div",{staticClass:"columns has-text-centered"},[n("div",{staticClass:"column"},[t.isH2?n("h2",{class:[t.white?"white-thin-heading":"thin-heading"],domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t.isH2?t._e():n("h3",{class:[t.white?"white":""],domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("p",{class:["subtitle",t.white?"white":""],domProps:{innerHTML:t._s(t.subtitle)}}),t._v(" "),t._m(0)])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"has-text-centered"},[e("span",{staticClass:"flag"})])}],!1,null,null,null);e.default=component.exports},176:function(t,e,n){"use strict";n.r(e);var h2=n(174),r={props:{talk:Object,open:Boolean},components:{"app-h2":h2.default}},o=(n(410),n(3)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.talk?n("div",{class:["columns talk",t.open?"":"is-hidden"]},[n("div",{staticClass:"column is-three-quarters-desktop is-mobile"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-content"},[n("div",{staticClass:"columns"},["standard"!==t.talk.type?n("div",{staticClass:"column is-3 "},[n("figure",{staticClass:"image is-128x128"},[t.talk.image?n("img",{attrs:{src:"//api.spiralthread.com/"+t.talk.image.path,alt:"Placeholder image"}}):t._e()])]):t._e(),t._v(" "),n("div",{staticClass:"column is-9"},[n("h2",[t._v(t._s(t.talk.title))]),t._v(" "),n("h3",[n("ul",t._l(t.talk.speakers,function(e,r){return n("li",{key:r},[t._v("\n                            "+t._s(e.display)+"\n                         ")])}),0)])])]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.talk.description)}})])])])]):t._e()},[],!1,null,"45fc32c2",null);e.default=component.exports},200:function(t,e,n){"use strict";n.r(e);var r=n(431),o=n.n(r),h2=(n(405),n(174)),l=n(176),c={data:function(){return{chosen:null,open:!1}},props:{items:{type:Array}},components:{"app-h2":h2.default,"app-talk":l.default},mounted:function(){this.carousel=o.a.attach(),this.chosen=this.speakers[0]},methods:{select:function(t){this.chosen=t,this.open=!this.open},close:function(){this.open=!this.open}},computed:{isMobile:function(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},speakers:function(){if(void 0!==this.items){var t=[];return t=this.items.filter(function(t){return 2019===t.year}),this.chosen=t[0],t.sort(function(a,b){return a.order-b.order})}return[]}}},d=(n(460),n(3)),component=Object(d.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("section",{staticClass:"section shallow is-centered"},[n("div",{staticClass:"testimonials is-text  "},[n("app-h2",{attrs:{title:"2019 Speakers",subtitle:"We are excited  to announce our talks for this year","is-h2":!0}}),t._v(" "),n("div",{staticClass:"columns  is-mobile is-multiline is-centered"},[t._l(t.speakers,function(e){return n("div",{key:e._id,staticClass:"column is-three-quarters-mobile is-two-thirds-tablet\n             is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"},[n("div",{staticClass:"is-one  "},[n("div",{staticClass:"card-image"},[n("a",{on:{click:function(n){return t.select(e)}}},[n("figure",{staticClass:"image is-92x92"},[void 0!==e.image?n("img",{staticClass:"speaker",attrs:{alt:e.name,src:"//api.spiralthread.com/"+e.thumbnail.path}}):t._e()])])]),t._v(" "),n("div",{staticClass:"card-content"},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-content has-text-centered"},[n("a",{staticClass:"titlebtn",on:{click:function(n){return t.select(e)}}},[n("h3",{staticClass:"small-title"},[t._v("\n                                        "+t._s(e.title)+"                                                                  \n                                    ")])]),t._v(" "),n("p",{staticClass:"subtitle is-6"},[t._v(t._s(e.name)+"  "),n("a",{staticClass:"icon",attrs:{href:"//twitter.com/"+e.twitter}},[n("i",{staticClass:"fa fa-twitter"})]),t._v(" "),n("br"),t._v("  "+t._s(e.company)+"\n                                 ")])])])])])])}),t._v(" "),this.chosen?n("div",{class:["column spekers-card-container modal-background",{closed:!1===t.open}]},[n("div",{staticClass:"card speaker-card"},[n("div",{staticClass:"card-content"},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-left"},[n("figure",{staticClass:"image is-48x48"},[void 0!==t.chosen.image?n("img",{staticClass:"speaker",attrs:{alt:t.chosen.name,src:"//api.spiralthread.com/"+t.chosen.thumbnail.path}}):t._e()]),t._v(" "),n("a",{class:["button  close closebtn",{closed:!1===t.open}],on:{click:function(e){return t.close()}}},[n("span",{staticClass:"icon is-small"},[t._v("\n                                X\n                            ")])])]),t._v(" "),n("div",{staticClass:"media-content"},[n("p",{staticClass:"title is-4"},[t._v(t._s(t.chosen.name))]),t._v(" "),n("p",{staticClass:"subtitle is-6"},[n("a",{attrs:{href:"//twitter.com/"+t.chosen.twitter}},[t._v("\n                                @"+t._s(t.chosen.twitter)+"\n                            ")]),n("br"),t._v("\n                            "+t._s(t.chosen.company)+"\n                        ")])])]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.chosen.talk)}})])])]):t._e()],2)],1)])])},[],!1,null,"bd42a02a",null);e.default=component.exports},387:function(t,e,n){var content=n(389);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("47349750",content,!0,{sourceMap:!1})},388:function(t,e,n){"use strict";var r=n(387);n.n(r).a},389:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,'body{background:#000}.home{background:#fff}h2{font-size:35px;line-height:52px;text-transform:uppercase}h2,h3{font-weight:500}h3{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}.heading{margin-bottom:20px}.white{color:#fff}.white-thin-heading:after{content:"";left:0;bottom:0;width:0;height:0;border-bottom:13px solid #fff;background-color:#fff;border-left:55px solid #fff;border-right:55px solid #fff;position:absolute;left:50%;margin-left:-55px}.white-thin-heading{padding:20px;color:#fff}.white-thin-heading .subtitle{font-weight:700;text-transform:capitalize}.thin-heading{padding:20px}.thin-heading .subtitle{font-weight:700;text-transform:capitalize}.thin-heading:after{content:"";left:0;bottom:0;width:0;height:0;border-bottom:13px solid rgba(255,48,48,.9);background-color:rgba(255,48,48,.9);border-left:55px solid rgba(255,48,48,.9);border-right:55px solid rgba(255,48,48,.9);position:absolute;left:50%;margin-left:-55px}',""])},392:function(t,e,n){var content=n(411);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("1ec3533f",content,!0,{sourceMap:!1})},410:function(t,e,n){"use strict";var r=n(392);n.n(r).a},411:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,"body[data-v-45fc32c2]{background:#000}.home[data-v-45fc32c2]{background:#fff}h2[data-v-45fc32c2]{font-size:35px;line-height:52px;text-transform:uppercase}h2[data-v-45fc32c2],h3[data-v-45fc32c2]{font-weight:500}h3[data-v-45fc32c2]{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}.card[data-v-45fc32c2]{background-color:transparent;color:#fff;border:none;box-shadow:none}.card-content[data-v-45fc32c2]{padding:5px}@media screen and (max-width:767px){.card-content[data-v-45fc32c2]{overflow-y:scroll;height:170vw}}.subtitle[data-v-45fc32c2],.title[data-v-45fc32c2]{color:#fff}figure[data-v-45fc32c2]{padding-right:20px}h2[data-v-45fc32c2]{font-size:32px;line-height:34px}h2[data-v-45fc32c2],h3[data-v-45fc32c2]{text-transform:unset;color:#fff}h3[data-v-45fc32c2]{font-size:16px;line-height:16px;padding:0;margin:10px 0}strong[data-v-45fc32c2]{color:#fff}.talk[data-v-45fc32c2]{display:block;background:#c90000}@media screen and (max-width:767px){.talk[data-v-45fc32c2]{position:static;top:20%;left:0;background:#c90000;z-index:1000;width:100%;min-height:200vw;overflow-y:scroll}}",""])},431:function(t,e,n){"undefined"!=typeof self&&self,t.exports=function(t){var i={};function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=n(2),o=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),l="carousel:slide:before",u="carousel:slide:after",c=Symbol("onSwipeStart"),d=Symbol("onSwipeMove"),h=Symbol("onSwipeEnd"),f=!1;try{var s=Object.defineProperty({},"passive",{get:function(){f=!0}});window.addEventListener("testPassive",null,s),window.removeEventListener("testPassive",null,s)}catch(t){}var v=function(t){function s(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}(this);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(s.__proto__||Object.getPrototypeOf(s)).call(this));if(n.element="string"==typeof t?document.querySelector(t):t,!n.element)throw new Error("An invalid selector or non-DOM node has been provided.");return n._clickEvents=["click"],n.options=Object.assign({},r.a,e),n.element.dataset.autoplay&&(n.options.autoplay=n.element.dataset.autoplay),n.element.dataset.delay&&(n.options.delay=n.element.dataset.delay),n.element.dataset.size&&!n.element.classList.contains("carousel-animate-fade")&&(n.options.size=n.element.dataset.size),n.element.classList.contains("carousel-animate-fade")&&(n.options.size=1),n.forceHiddenNavigation=!1,n[c]=n[c].bind(n),n[d]=n[d].bind(n),n[h]=n[h].bind(n),n.init(),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(s,i.a),o(s,[{key:"init",value:function(){this.container=this.element.querySelector(".carousel-container"),this.items=this.element.querySelectorAll(".carousel-item"),this.currentItem={element:this.element,node:this.element.querySelector(".carousel-item.is-active"),pos:-1},this.currentItem.pos=this.currentItem.node?Array.from(this.items).indexOf(this.currentItem.node):-1,this.currentItem.node||(this.currentItem.node=this.items[0],this.currentItem.node.classList.add("is-active"),this.currentItem.pos=0),this.forceHiddenNavigation=this.items.length<=1;var t=this.element.querySelectorAll("img");[].forEach.call(t,function(t){t.setAttribute("draggable",!1)}),this._resize(),this._setOrder(),this._initNavigation(),this._bindEvents(),this.options.autoplay&&this._autoPlay(this.options.delay),this.emit("carousel:ready",this.currentItem)}},{key:"_resize",value:function(){var t=this,e=window.getComputedStyle(this.element),n=parseInt(e.getPropertyValue("width"),10);if(1<this.options.size&&(this.options.size>=Array.from(this.items).length?this.offset=0:this.offset=n/this.options.size,this.container.style.left=0-this.offset+"px",this.container.style.transform="translateX("+this.offset+"px)",[].forEach.call(this.items,function(e){e.style.flexBasis=t.offset+"px"})),this.element.classList.contains("carousel-animate-fade")&&this.items.length){var i=this.items[0].querySelector("img"),s=1;i.naturalWidth?(s=n/i.naturalWidth,this.container.style.height=i.naturalHeight*s+"px"):i.onload=function(){s=n/i.naturalWidth,t.container.style.height=i.naturalHeight*s+"px"}}}},{key:"_bindEvents",value:function(){var t=this;this.previousControl&&this._clickEvents.forEach(function(e){t.previousControl.addEventListener(e,function(e){f||e.preventDefault(),t._autoPlayInterval&&(clearInterval(t._autoPlayInterval),t._autoPlay(t.optionsdelay)),t._slide("previous")},!!f&&{passive:!0})}),this.nextControl&&this._clickEvents.forEach(function(e){t.nextControl.addEventListener(e,function(e){f||e.preventDefault(),t._autoPlayInterval&&(clearInterval(t._autoPlayInterval),t._autoPlay(t.options.delay)),t._slide("next")},!!f&&{passive:!0})}),this.element.addEventListener("touchstart",this[c],!!f&&{passive:!0}),this.element.addEventListener("mousedown",this[c],!!f&&{passive:!0}),this.element.addEventListener("touchmove",this[d],!!f&&{passive:!0}),this.element.addEventListener("mousemove",this[d],!!f&&{passive:!0}),this.element.addEventListener("touchend",this[h],!!f&&{passive:!0}),this.element.addEventListener("mouseup",this[h],!!f&&{passive:!0})}},{key:"destroy",value:function(){this.element.removeEventListener("touchstart",this[c],!!f&&{passive:!0}),this.element.removeEventListener("mousedown",this[c],!!f&&{passive:!0}),this.element.removeEventListener("touchmove",this[d],!!f&&{passive:!0}),this.element.removeEventListener("mousemove",this[d],!!f&&{passive:!0}),this.element.removeEventListener("touchend",this[h],!!f&&{passive:!0}),this.element.removeEventListener("mouseup",this[h],!!f&&{passive:!0})}},{key:c,value:function(t){f||t.preventDefault(),t="changedTouches"in(t=t||window.event)?t.changedTouches[0]:t,this._touch={start:{time:(new Date).getTime(),x:t.pageX,y:t.pageY},dist:{x:0,y:0}}}},{key:d,value:function(t){f||t.preventDefault()}},{key:h,value:function(t){f||t.preventDefault(),t="changedTouches"in(t=t||window.event)?t.changedTouches[0]:t,this._touch.dist={x:t.pageX-this._touch.start.x,y:t.pageY-this._touch.start.y},this._handleGesture()}},{key:"_handleGesture",value:function(){(new Date).getTime()-this._touch.start.time<=this.options.allowedTime&&Math.abs(this._touch.dist.x)>=this.options.threshold&&Math.abs(this._touch.dist.y)<=this.options.restraint&&(this._touch.dist.x<0?this._slide("next"):this._slide("previous"))}},{key:"_initNavigation",value:function(){this.previousControl=this.element.querySelector(".carousel-nav-left"),this.nextControl=this.element.querySelector(".carousel-nav-right"),(this.items.length<=1||this.forceHiddenNavigation)&&(this.container&&(this.container.style.left="0"),this.previousControl&&(this.previousControl.style.display="none"),this.nextControl&&(this.nextControl.style.display="none"))}},{key:"_setOrder",value:function(){this.currentItem.node.style.order="1",this.currentItem.node.style.zIndex="1";var t,e=this.currentItem.node,n=void 0,i=void 0;for(n=i=2,t=Array.from(this.items).length;2<=t?i<=t:t<=i;n=2<=t?++i:--i)(e=this._next(e)).style.order=""+n%Array.from(this.items).length,e.style.zIndex="0"}},{key:"_next",value:function(t){return t.nextElementSibling?t.nextElementSibling:this.items[0]}},{key:"_previous",value:function(t){return t.previousElementSibling?t.previousElementSibling:this.items[this.items.length-1]}},{key:"_slide",value:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"next";this.items.length&&(this.oldItemNode=this.currentItem.node,this.emit(l,this.currentItem),"previous"===e?(this.currentItem.node=this._previous(this.currentItem.node),this.element.classList.contains("carousel-animate-fade")||(this.element.classList.add("is-reversing"),this.container.style.transform="translateX("+-Math.abs(this.offset)+"px)")):(this.currentItem.node=this._next(this.currentItem.node),this.element.classList.remove("is-reversing"),this.container.style.transform="translateX("+Math.abs(this.offset)+"px)"),this.currentItem.node.classList.add("is-active"),this.oldItemNode.classList.remove("is-active"),this.element.classList.remove("carousel-animated"),setTimeout(function(){t.element.classList.add("carousel-animated")},50),this._setOrder(),this.emit(u,this.currentItem))}},{key:"_autoPlay",value:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:5e3;this._autoPlayInterval=setInterval(function(){t._slide("next")},e)}}],[{key:"attach",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".carousel, .hero-carousel",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=new Array,i=document.querySelectorAll(t);return[].forEach.call(i,function(t){setTimeout(function(){n.push(new s(t,e))},100)}),n}}]),s}();e.default=v},function(t,e,n){"use strict";var i=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),s=function(){function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._listeners=new Map(e),this._middlewares=new Map}return i(t,[{key:"listenerCount",value:function(t){return this._listeners.has(t)?this._listeners.get(t).length:0}},{key:"removeListeners",value:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,n=1<arguments.length&&void 0!==arguments[1]&&arguments[1];null!==e?Array.isArray(e)?name.forEach(function(e){return t.removeListeners(e,n)}):(this._listeners.delete(e),n&&this.removeMiddleware(e)):this._listeners=new Map}},{key:"middleware",value:function(t,e){var n=this;Array.isArray(t)?name.forEach(function(t){return n.middleware(t,e)}):(Array.isArray(this._middlewares.get(t))||this._middlewares.set(t,[]),this._middlewares.get(t).push(e))}},{key:"removeMiddleware",value:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;null!==e?Array.isArray(e)?name.forEach(function(e){return t.removeMiddleware(e)}):this._middlewares.delete(e):this._middlewares=new Map}},{key:"on",value:function(t,e){var n=this,i=2<arguments.length&&void 0!==arguments[2]&&arguments[2];if(Array.isArray(t))t.forEach(function(t){return n.on(t,e)});else{var s=(t=t.toString()).split(/,|, | /);1<s.length?s.forEach(function(t){return n.on(t,e)}):(Array.isArray(this._listeners.get(t))||this._listeners.set(t,[]),this._listeners.get(t).push({once:i,callback:e}))}}},{key:"once",value:function(t,e){this.on(t,e,!0)}},{key:"emit",value:function(t,i){var s=this,e=2<arguments.length&&void 0!==arguments[2]&&arguments[2];t=t.toString();var n=this._listeners.get(t),a=null,r=0,u=e;if(Array.isArray(n))for(n.forEach(function(o,l){e||(a=s._middlewares.get(t),Array.isArray(a)?(a.forEach(function(e){e(i,function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;null!==t&&(i=t),r++},t)}),r>=a.length&&(u=!0)):u=!0),u&&(o.once&&(n[l]=null),o.callback(i))});-1!==n.indexOf(null);)n.splice(n.indexOf(null),1)}}]),t}();e.a=s},function(t,e,n){"use strict";e.a={size:1,autoplay:!1,delay:5e3,threshold:50,restraint:100,allowedTime:500}}]).default},447:function(t,e,n){var content=n(461);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("3698b64f",content,!0,{sourceMap:!1})},460:function(t,e,n){"use strict";var r=n(447);n.n(r).a},461:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,"body[data-v-bd42a02a]{background:#000}.home[data-v-bd42a02a]{background:#fff}h2[data-v-bd42a02a]{font-size:35px;line-height:52px;text-transform:uppercase}h2[data-v-bd42a02a],h3[data-v-bd42a02a]{font-weight:500}h3[data-v-bd42a02a]{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}a.titlebtn[data-v-bd42a02a]{color:#000}a.titlebtn h3[data-v-bd42a02a]{min-height:80px}.closed[data-v-bd42a02a]{display:none}img[data-v-bd42a02a]{text-align:center;left:30%;border-radius:50%;margin:0 auto;top:0}.spekers-card-container[data-v-bd42a02a]{position:fixed;top:0;left:0;z-index:1000;width:100%;margin:0 auto}@media screen and (max-width:767px){.spekers-card-container[data-v-bd42a02a]{top:55px;left:0;width:100%}}.spekers-card-container .speaker-card[data-v-bd42a02a]{position:absolute;top:20%;left:35%;width:40%;height:470px;display:block}@media screen and (max-width:767px){.spekers-card-container .speaker-card[data-v-bd42a02a]{top:0;left:0;width:100%;min-height:230vw}}.spekers-card-container .speaker-card .closebtn[data-v-bd42a02a]{display:block;position:absolute;top:10px;right:10px}.spekers-card-container .small-title[data-v-bd42a02a]{font-size:12px}",""])}}]);