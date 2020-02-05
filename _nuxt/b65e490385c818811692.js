(window.webpackJsonp=window.webpackJsonp||[]).push([[2,10,21,22],{173:function(e,t,n){"use strict";n.r(t);var o={props:{title:String,subtitle:String,isH2:Boolean,white:Boolean}},r=(n(397),n(3)),component=Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"container heading"},[n("div",{staticClass:"columns has-text-centered"},[n("div",{staticClass:"column"},[e.isH2?n("h2",{class:[e.white?"white-thin-heading":"thin-heading"],domProps:{innerHTML:e._s(e.title)}}):e._e(),e._v(" "),e.isH2?e._e():n("h3",{class:[e.white?"white":""],domProps:{innerHTML:e._s(e.title)}}),e._v(" "),n("p",{class:["subtitle",e.white?"white":""],domProps:{innerHTML:e._s(e.subtitle)}}),e._v(" "),e._m(0)])])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"has-text-centered"},[t("span",{staticClass:"flag"})])}],!1,null,null,null);t.default=component.exports},175:function(e,t,n){"use strict";n.r(t);var o={props:{image:Object,thumbnail:Object,name:String,company:String,twitter:String,bio:String},data:function(){return{showModal:!1}},methods:{toggle:function(){this.showModal=!this.showModal}}},r=(n(419),n(3)),component=Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("div",{staticClass:"card "},[n("div",{staticClass:"card-image front"},[n("figure",{staticClass:"image is-40x40"},[void 0!==e.image?n("img",{staticClass:"speaker",attrs:{width:"150",alt:e.name,src:"/siteimages/"+e.thumbnail.path}}):e._e()]),e._v(" "),n("div",{staticClass:"name"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-12 marginless paddingless"},[n("strong",[e._v("\n              "+e._s(e.name)+"\n              "),n("a",{staticClass:"icon",attrs:{href:"//twitter.com/"+e.twitter}},[n("em",{staticClass:"fa fa-twitter"})])]),e._v(" "),n("br"),e._v("\n            "+e._s(e.company)+"\n            "),n("br"),e._v(" "),n("a",{staticClass:"bioBtn",on:{click:function(t){return e.toggle()}}},[e._v("bio "),n("span",{class:"fa "+(e.showModal?"fa-minus":"fa-plus")})])])])])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showModal,expression:"showModal"}],staticClass:"media-content"},[n("div",{staticClass:"content"},[n("p",{domProps:{innerHTML:e._s(e.bio)}})])])])])},[],!1,null,"3fae86a9",null);t.default=component.exports},181:function(e,t,n){"use strict";n.r(t);var o=n(418),r=n(175),l=(n(403),{components:{Speaker:r.default},props:{speakers:Array},mixins:[o.a.VueScreenSizeMixin]}),c=(n(430),n(3)),component=Object(c.a)(l,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"column"},[t("div",{staticClass:"carouselWrap"},[t("VCarousel",{attrs:{autoplay:!0,perPage:1,centerMode:!0}},this._l(this.speakers,function(e){return t("Slide",{key:e.id},[t("Speaker",{attrs:{image:e.image,thumbnail:e.thumbnail,name:e.name,company:e.company,twitter:e.twitter,bio:e.bio}})],1)}),1)],1)])},[],!1,null,null,null);t.default=component.exports},205:function(e,t,n){"use strict";n.r(t);n(56),n(35),n(9),n(5),n(44);var o=n(24),r=n(443),l=n.n(r),h2=(n(403),n(173)),c=n(181),d=n(175),h=n(22);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable})),t.push.apply(t,n)}return t}var v={components:{"app-h2":h2.default,"speaker-carousel":c.default,speaker:d.default},mounted:function(){this.carousel=l.a.attach(),this.$store.dispatch("speakers/get")},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(source,!0).forEach(function(t){Object(o.a)(e,t,source[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(source).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))})}return e}({},Object(h.b)({speakers:"speakers/speakers"}),{isMobile:function(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},filteredSpeakers:function(){if(void 0!==this.speakers)return this.speakers.filter(function(e){return 2020===e.year}).sort(function(a,b){return a.order-b.order})}})},m=(n(472),n(3)),component=Object(m.a)(v,function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"section shallow"},[t("div",{staticClass:"testimonials has-text-centered"},[t("app-h2",{attrs:{title:"2020 Speakers",subtitle:"We are excited  to announce our selected Speakers <br/> for more information check our <a href='/speakers'>speakers</a> section","is-h2":!0}}),this._v(" "),t("div",{staticClass:"row is-hidden-desktop is-hidden-tablet"},[t("speaker-carousel",{attrs:{speakers:this.filteredSpeakers}})],1),this._v(" "),t("div",{staticClass:"row columns is-mobile is-multiline is-hidden-mobile"},this._l(this.filteredSpeakers,function(e){return t("div",{key:e._id,staticClass:"column is-3 is-paddingless"},[t("speaker",{attrs:{image:e.image,thumbnail:e.thumbnail,name:e.name,company:e.company,twitter:e.twitter,bio:e.bio}})],1)}),0)],1)])},[],!1,null,"09482b26",null);t.default=component.exports},396:function(e,t,n){var content=n(398);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("47349750",content,!0,{sourceMap:!1})},397:function(e,t,n){"use strict";var o=n(396);n.n(o).a},398:function(e,t,n){(e.exports=n(15)(!1)).push([e.i,'body{background:#000}.home{background:#fff}h2{font-size:35px;line-height:52px;text-transform:uppercase}h2,h3{font-weight:500}h3{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}h3 a,h3 a:hover{color:#fff}.heading{margin-bottom:20px}.white{color:#fff}.white-thin-heading:after{content:"";left:0;bottom:0;width:0;height:0;border-bottom:13px solid #fff;background-color:#fff;border-left:55px solid #fff;border-right:55px solid #fff;position:absolute;left:50%;margin-left:-55px}.white-thin-heading{padding:20px;color:#fff}.white-thin-heading .subtitle{font-weight:700;text-transform:capitalize}.thin-heading{padding:20px}.thin-heading .subtitle{font-weight:700;text-transform:capitalize}.thin-heading:after{content:"";left:0;bottom:0;width:0;height:0;border-bottom:13px solid rgba(255,48,48,.9);background-color:rgba(255,48,48,.9);border-left:55px solid rgba(255,48,48,.9);border-right:55px solid rgba(255,48,48,.9);position:absolute;left:50%;margin-left:-55px}',""])},402:function(e,t,n){var content=n(420);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("cd2cdf44",content,!0,{sourceMap:!1})},403:function(e,t,n){var content=n(407);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("78e674f4",content,!0,{sourceMap:!1})},407:function(e,t,n){(e.exports=n(15)(!1)).push([e.i,"@-webkit-keyframes spinAround{0%{transform:rotate(0)}to{transform:rotate(359deg)}}@keyframes spinAround{0%{transform:rotate(0)}to{transform:rotate(359deg)}}.carousel{position:relative;overflow:hidden}.carousel .carousel-container{width:100%;position:relative;border:none;display:flex;margin:0;padding:0;left:-100%;transform:translateX(100%)}.carousel .carousel-container .carousel-item{display:block;position:relative;flex:1 0 100%}.carousel .carousel-container .carousel-item.has-background .is-background{-o-object-fit:cover;object-fit:cover;-o-object-position:center center;object-position:center center;height:100%;width:100%}.carousel .carousel-container .carousel-item .title{position:absolute;left:0;right:0;bottom:0;padding:1.5em;margin:0;text-align:center;background:hsla(0,0%,100%,.6);font-size:.75rem}.carousel .carousel-navigation{display:flex;justify-content:space-around;width:100%;pointer-events:none}.carousel .carousel-navigation .carousel-nav-left,.carousel .carousel-navigation .carousel-nav-right{padding:1em;pointer-events:auto}.carousel .carousel-navigation.is-centered{justify-content:center}.carousel .carousel-navigation.is-overlay{top:50%;transform:perspective(1px) translateY(-50%);bottom:auto;left:auto;right:auto;align-items:center;justify-content:space-between;z-index:99}.carousel .carousel-navigation.is-overlay .carousel-nav-left,.carousel .carousel-navigation.is-overlay .carousel-nav-right{height:2.2em;width:2em;background:hsla(0,0%,100%,.7);display:flex;justify-content:center;align-items:center;color:#4a4a4a;position:absolute;left:0}.carousel .carousel-navigation.is-overlay .carousel-nav-left:hover,.carousel .carousel-navigation.is-overlay .carousel-nav-right:hover{cursor:pointer}.carousel .carousel-navigation.is-overlay .carousel-nav-right{left:auto;right:0}.carousel.is-reversing .carousel-container{transform:translateX(-100%)}.carousel[data-size]:not(.carousel-animate-fade) .carousel-container .carousel-item{padding:1em}.hero.has-carousel{position:relative}.hero.has-carousel+.hero-body,.hero.has-carousel+.hero-footer,.hero.has-carousel+.hero-head{z-index:1}.hero.has-carousel .hero-carousel{display:flex;position:absolute;top:0;left:0;bottom:0;right:0;height:auto;border:none;margin:auto;padding:0;z-index:0}.hero.has-carousel .hero-carousel .carousel-container{height:auto!important}.hero-carousel{position:relative;overflow:hidden}.hero-carousel .carousel-container{width:100%;position:relative;border:none;display:flex;margin:0;padding:0;left:-100%;transform:translateX(100%)}.hero-carousel .carousel-container .carousel-item{display:block;position:relative;flex:1 0 100%}.hero-carousel .carousel-container .carousel-item.has-background .is-background{-o-object-fit:cover;object-fit:cover;-o-object-position:center center;object-position:center center;height:100%;width:100%}.hero-carousel .carousel-container .carousel-item .title{position:absolute;left:0;right:0;bottom:0;padding:1.5em;margin:0;text-align:center;background:hsla(0,0%,100%,.6);font-size:.75rem}.hero-carousel .carousel-navigation{display:flex;justify-content:space-around;width:100%;pointer-events:none}.hero-carousel .carousel-navigation .carousel-nav-left,.hero-carousel .carousel-navigation .carousel-nav-right{padding:1em;pointer-events:auto}.hero-carousel .carousel-navigation.is-centered{justify-content:center}.hero-carousel .carousel-navigation.is-overlay{top:50%;transform:perspective(1px) translateY(-50%);bottom:auto;left:auto;right:auto;align-items:center;justify-content:space-between;z-index:99}.hero-carousel .carousel-navigation.is-overlay .carousel-nav-left,.hero-carousel .carousel-navigation.is-overlay .carousel-nav-right{height:2.2em;width:2em;background:hsla(0,0%,100%,.7);display:flex;justify-content:center;align-items:center;color:#4a4a4a;position:absolute;left:0}.hero-carousel .carousel-navigation.is-overlay .carousel-nav-left:hover,.hero-carousel .carousel-navigation.is-overlay .carousel-nav-right:hover{cursor:pointer}.hero-carousel .carousel-navigation.is-overlay .carousel-nav-right{left:auto;right:0}.hero-carousel.is-reversing .carousel-container{transform:translateX(-100%)}.carousel.carousel-animate-slide.carousel-animated .carousel-container,.hero-carousel.carousel-animate-slide.carousel-animated .carousel-container{transform:none!important;transition:transform .5s ease-in-out}.carousel.carousel-animate-fade .carousel-item,.hero-carousel.carousel-animate-fade .carousel-item{position:absolute;width:100%;height:100%;transition:opacity .5s ease-in-out}.carousel.carousel-animate-fade .carousel-item.is-active,.hero-carousel.carousel-animate-fade .carousel-item.is-active{opacity:1}.carousel.carousel-animate-fade .carousel-item:not(.is-active),.hero-carousel.carousel-animate-fade .carousel-item:not(.is-active){opacity:0}",""])},408:function(e,t,n){var content=n(431);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("7e5aa030",content,!0,{sourceMap:!1})},418:function(e,t,n){"use strict";var o=new(n(0).a)({data:function(){return{event:null,vssWidth:null,vssHeight:null}}}),r={computed:{$vssEvent:function(){return o.event},$vssWidth:function(){return o.vssWidth||this.getScreenWidth()},$vssHeight:function(){return o.vssHeight||this.getScreenHeight()}},methods:{getScreenWidth:function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},getScreenHeight:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},handleResize:function(e){o.event=e,o.vssWidth=this.getScreenWidth(),o.vssHeight=this.getScreenHeight()},$vssDestroyListener:function(){window.removeEventListener("resize",this.handleResize)}},mounted:function(){window.addEventListener("resize",this.handleResize)},destroyed:function(){window.removeEventListener("resize",this.handleResize)}},l={install:function(e){e.mixin(r)},VueScreenSizeMixin:r};t.a=l},419:function(e,t,n){"use strict";var o=n(402);n.n(o).a},420:function(e,t,n){(e.exports=n(15)(!1)).push([e.i,"body[data-v-3fae86a9]{background:#000}.home[data-v-3fae86a9]{background:#fff}h2[data-v-3fae86a9]{font-size:35px;line-height:52px;text-transform:uppercase}h2[data-v-3fae86a9],h3[data-v-3fae86a9]{font-weight:500}h3[data-v-3fae86a9]{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}h3 a[data-v-3fae86a9],h3 a[data-v-3fae86a9]:hover{color:#fff}.modal-mask[data-v-3fae86a9]{background-color:rgba(0,0,0,.5);transition:opacity .3s ease}.bioBtn[data-v-3fae86a9]{color:#333!important;background-color:#ddd;border:none;color:#000;padding:2px 10px;margin:4px 2px;cursor:pointer;position:absolute;top:0;right:0}.bioBtn[data-v-3fae86a9],.card[data-v-3fae86a9]{font-size:.9rem}.card[data-v-3fae86a9]{position:relative;display:block;height:40vh;min-height:10vh;height:55vh}@media screen and (max-width:767px){.card[data-v-3fae86a9]{height:50vh;overflow:scroll}}@media screen and (min-width:768px) and (max-width:1024px){.card[data-v-3fae86a9]{height:50vh;min-height:10vh}}.card-image[data-v-3fae86a9]{overflow:hidden}.position-absolute[data-v-3fae86a9]{position:absolute}.position-relative[data-v-3fae86a9]{position:relative;display:block;z-index:1000}.top-100[data-v-3fae86a9]{top:10px}.right-0[data-v-3fae86a9]{right:10px}.bg-blue[data-v-3fae86a9]{background:rgba(255,48,48,.9);color:#fff}.subtitle[data-v-3fae86a9],.title[data-v-3fae86a9]{margin:0!important}.label[data-v-3fae86a9]{width:50%;padding:20px}.name[data-v-3fae86a9]{position:absolute;bottom:0;left:3%;z-index:200;width:95%;background:#fff;text-align:left;padding-left:2%;padding-top:2%}.card-content[data-v-3fae86a9]{max-height:300px;position:relative;z-index:10;padding-top:0!important;display:block}.media-content[data-v-3fae86a9]{padding:2% 5% 5%;max-height:350px;overflow:auto;position:absolute;z-index:100;background:#fff}.front[data-v-3fae86a9]{z-index:2;transform:rotateY(0deg)}.back[data-v-3fae86a9]{transform:rotateY(180deg)}.back-logo img[data-v-3fae86a9]{top:0}.back-logo[data-v-3fae86a9]{width:30%;height:30%}.back-logo img[data-v-3fae86a9]{position:absolute;bottom:0;text-align:center;left:35%;border-radius:50%;width:30%}@media screen and (max-width:767px){.back-logo img[data-v-3fae86a9]{margin:0 auto;top:0}}.back-content[data-v-3fae86a9]{padding-top:40px;font-weight:700;color:#00304a;position:absolute;overflow:scroll;top:6vw;left:0;right:0;text-align:center;font-family:Courier;font-size:.75rem}@media screen and (max-width:767px){.back-content[data-v-3fae86a9]{font-size:.7rem;top:16vw}}.bio[data-v-3fae86a9]{color:#000;padding-top:5px;font-size:.8rem;font-weight:600}@media screen and (max-width:767px){.bio[data-v-3fae86a9]{height:110px;line-height:12px}}",""])},430:function(e,t,n){"use strict";var o=n(408);n.n(o).a},431:function(e,t,n){(e.exports=n(15)(!1)).push([e.i,"body{background:#000}.home{background:#fff}h2{font-size:35px;line-height:52px;text-transform:uppercase}h2,h3{font-weight:500}h3{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}h3 a,h3 a:hover{color:#fff}@media screen and (min-width:768px) and (max-width:1024px){.carouselWrap{margin:0 auto;width:50%}}",""])},443:function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){var i={};function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=n(2),r=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),l="carousel:slide:before",u="carousel:slide:after",c=Symbol("onSwipeStart"),d=Symbol("onSwipeMove"),h=Symbol("onSwipeEnd"),f=!1;try{var s=Object.defineProperty({},"passive",{get:function(){f=!0}});window.addEventListener("testPassive",null,s),window.removeEventListener("testPassive",null,s)}catch(e){}var v=function(e){function s(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}(this);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(s.__proto__||Object.getPrototypeOf(s)).call(this));if(n.element="string"==typeof e?document.querySelector(e):e,!n.element)throw new Error("An invalid selector or non-DOM node has been provided.");return n._clickEvents=["click"],n.options=Object.assign({},o.a,t),n.element.dataset.autoplay&&(n.options.autoplay=n.element.dataset.autoplay),n.element.dataset.delay&&(n.options.delay=n.element.dataset.delay),n.element.dataset.size&&!n.element.classList.contains("carousel-animate-fade")&&(n.options.size=n.element.dataset.size),n.element.classList.contains("carousel-animate-fade")&&(n.options.size=1),n.forceHiddenNavigation=!1,n[c]=n[c].bind(n),n[d]=n[d].bind(n),n[h]=n[h].bind(n),n.init(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(s,i.a),r(s,[{key:"init",value:function(){this.container=this.element.querySelector(".carousel-container"),this.items=this.element.querySelectorAll(".carousel-item"),this.currentItem={element:this.element,node:this.element.querySelector(".carousel-item.is-active"),pos:-1},this.currentItem.pos=this.currentItem.node?Array.from(this.items).indexOf(this.currentItem.node):-1,this.currentItem.node||(this.currentItem.node=this.items[0],this.currentItem.node.classList.add("is-active"),this.currentItem.pos=0),this.forceHiddenNavigation=this.items.length<=1;var e=this.element.querySelectorAll("img");[].forEach.call(e,function(e){e.setAttribute("draggable",!1)}),this._resize(),this._setOrder(),this._initNavigation(),this._bindEvents(),this.options.autoplay&&this._autoPlay(this.options.delay),this.emit("carousel:ready",this.currentItem)}},{key:"_resize",value:function(){var e=this,t=window.getComputedStyle(this.element),n=parseInt(t.getPropertyValue("width"),10);if(1<this.options.size&&(this.options.size>=Array.from(this.items).length?this.offset=0:this.offset=n/this.options.size,this.container.style.left=0-this.offset+"px",this.container.style.transform="translateX("+this.offset+"px)",[].forEach.call(this.items,function(t){t.style.flexBasis=e.offset+"px"})),this.element.classList.contains("carousel-animate-fade")&&this.items.length){var i=this.items[0].querySelector("img"),s=1;i.naturalWidth?(s=n/i.naturalWidth,this.container.style.height=i.naturalHeight*s+"px"):i.onload=function(){s=n/i.naturalWidth,e.container.style.height=i.naturalHeight*s+"px"}}}},{key:"_bindEvents",value:function(){var e=this;this.previousControl&&this._clickEvents.forEach(function(t){e.previousControl.addEventListener(t,function(t){f||t.preventDefault(),e._autoPlayInterval&&(clearInterval(e._autoPlayInterval),e._autoPlay(e.optionsdelay)),e._slide("previous")},!!f&&{passive:!0})}),this.nextControl&&this._clickEvents.forEach(function(t){e.nextControl.addEventListener(t,function(t){f||t.preventDefault(),e._autoPlayInterval&&(clearInterval(e._autoPlayInterval),e._autoPlay(e.options.delay)),e._slide("next")},!!f&&{passive:!0})}),this.element.addEventListener("touchstart",this[c],!!f&&{passive:!0}),this.element.addEventListener("mousedown",this[c],!!f&&{passive:!0}),this.element.addEventListener("touchmove",this[d],!!f&&{passive:!0}),this.element.addEventListener("mousemove",this[d],!!f&&{passive:!0}),this.element.addEventListener("touchend",this[h],!!f&&{passive:!0}),this.element.addEventListener("mouseup",this[h],!!f&&{passive:!0})}},{key:"destroy",value:function(){this.element.removeEventListener("touchstart",this[c],!!f&&{passive:!0}),this.element.removeEventListener("mousedown",this[c],!!f&&{passive:!0}),this.element.removeEventListener("touchmove",this[d],!!f&&{passive:!0}),this.element.removeEventListener("mousemove",this[d],!!f&&{passive:!0}),this.element.removeEventListener("touchend",this[h],!!f&&{passive:!0}),this.element.removeEventListener("mouseup",this[h],!!f&&{passive:!0})}},{key:c,value:function(e){f||e.preventDefault(),e="changedTouches"in(e=e||window.event)?e.changedTouches[0]:e,this._touch={start:{time:(new Date).getTime(),x:e.pageX,y:e.pageY},dist:{x:0,y:0}}}},{key:d,value:function(e){f||e.preventDefault()}},{key:h,value:function(e){f||e.preventDefault(),e="changedTouches"in(e=e||window.event)?e.changedTouches[0]:e,this._touch.dist={x:e.pageX-this._touch.start.x,y:e.pageY-this._touch.start.y},this._handleGesture()}},{key:"_handleGesture",value:function(){(new Date).getTime()-this._touch.start.time<=this.options.allowedTime&&Math.abs(this._touch.dist.x)>=this.options.threshold&&Math.abs(this._touch.dist.y)<=this.options.restraint&&(this._touch.dist.x<0?this._slide("next"):this._slide("previous"))}},{key:"_initNavigation",value:function(){this.previousControl=this.element.querySelector(".carousel-nav-left"),this.nextControl=this.element.querySelector(".carousel-nav-right"),(this.items.length<=1||this.forceHiddenNavigation)&&(this.container&&(this.container.style.left="0"),this.previousControl&&(this.previousControl.style.display="none"),this.nextControl&&(this.nextControl.style.display="none"))}},{key:"_setOrder",value:function(){this.currentItem.node.style.order="1",this.currentItem.node.style.zIndex="1";var e,t=this.currentItem.node,n=void 0,i=void 0;for(n=i=2,e=Array.from(this.items).length;2<=e?i<=e:e<=i;n=2<=e?++i:--i)(t=this._next(t)).style.order=""+n%Array.from(this.items).length,t.style.zIndex="0"}},{key:"_next",value:function(e){return e.nextElementSibling?e.nextElementSibling:this.items[0]}},{key:"_previous",value:function(e){return e.previousElementSibling?e.previousElementSibling:this.items[this.items.length-1]}},{key:"_slide",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"next";this.items.length&&(this.oldItemNode=this.currentItem.node,this.emit(l,this.currentItem),"previous"===t?(this.currentItem.node=this._previous(this.currentItem.node),this.element.classList.contains("carousel-animate-fade")||(this.element.classList.add("is-reversing"),this.container.style.transform="translateX("+-Math.abs(this.offset)+"px)")):(this.currentItem.node=this._next(this.currentItem.node),this.element.classList.remove("is-reversing"),this.container.style.transform="translateX("+Math.abs(this.offset)+"px)"),this.currentItem.node.classList.add("is-active"),this.oldItemNode.classList.remove("is-active"),this.element.classList.remove("carousel-animated"),setTimeout(function(){e.element.classList.add("carousel-animated")},50),this._setOrder(),this.emit(u,this.currentItem))}},{key:"_autoPlay",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:5e3;this._autoPlayInterval=setInterval(function(){e._slide("next")},t)}}],[{key:"attach",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".carousel, .hero-carousel",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=new Array,i=document.querySelectorAll(e);return[].forEach.call(i,function(e){setTimeout(function(){n.push(new s(e,t))},100)}),n}}]),s}();t.default=v},function(e,t,n){"use strict";var i=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),s=function(){function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._listeners=new Map(t),this._middlewares=new Map}return i(e,[{key:"listenerCount",value:function(e){return this._listeners.has(e)?this._listeners.get(e).length:0}},{key:"removeListeners",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,n=1<arguments.length&&void 0!==arguments[1]&&arguments[1];null!==t?Array.isArray(t)?name.forEach(function(t){return e.removeListeners(t,n)}):(this._listeners.delete(t),n&&this.removeMiddleware(t)):this._listeners=new Map}},{key:"middleware",value:function(e,t){var n=this;Array.isArray(e)?name.forEach(function(e){return n.middleware(e,t)}):(Array.isArray(this._middlewares.get(e))||this._middlewares.set(e,[]),this._middlewares.get(e).push(t))}},{key:"removeMiddleware",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;null!==t?Array.isArray(t)?name.forEach(function(t){return e.removeMiddleware(t)}):this._middlewares.delete(t):this._middlewares=new Map}},{key:"on",value:function(e,t){var n=this,i=2<arguments.length&&void 0!==arguments[2]&&arguments[2];if(Array.isArray(e))e.forEach(function(e){return n.on(e,t)});else{var s=(e=e.toString()).split(/,|, | /);1<s.length?s.forEach(function(e){return n.on(e,t)}):(Array.isArray(this._listeners.get(e))||this._listeners.set(e,[]),this._listeners.get(e).push({once:i,callback:t}))}}},{key:"once",value:function(e,t){this.on(e,t,!0)}},{key:"emit",value:function(e,i){var s=this,t=2<arguments.length&&void 0!==arguments[2]&&arguments[2];e=e.toString();var n=this._listeners.get(e),a=null,o=0,u=t;if(Array.isArray(n))for(n.forEach(function(r,l){t||(a=s._middlewares.get(e),Array.isArray(a)?(a.forEach(function(t){t(i,function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;null!==e&&(i=e),o++},e)}),o>=a.length&&(u=!0)):u=!0),u&&(r.once&&(n[l]=null),r.callback(i))});-1!==n.indexOf(null);)n.splice(n.indexOf(null),1)}}]),e}();t.a=s},function(e,t,n){"use strict";t.a={size:1,autoplay:!1,delay:5e3,threshold:50,restraint:100,allowedTime:500}}]).default},444:function(e,t,n){var content=n(473);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("7fbda120",content,!0,{sourceMap:!1})},472:function(e,t,n){"use strict";var o=n(444);n.n(o).a},473:function(e,t,n){(e.exports=n(15)(!1)).push([e.i,"body[data-v-09482b26]{background:#000}.home[data-v-09482b26]{background:#fff}h2[data-v-09482b26]{font-size:35px;line-height:52px;text-transform:uppercase}h2[data-v-09482b26],h3[data-v-09482b26]{font-weight:500}h3[data-v-09482b26]{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}h3 a[data-v-09482b26],h3 a[data-v-09482b26]:hover{color:#fff}.card[data-v-09482b26]{position:relative;display:block;max-height:720px;height:680px}.card-image[data-v-09482b26]{overflow:hidden}.position-absolute[data-v-09482b26]{position:absolute}.position-relative[data-v-09482b26]{position:relative;display:block;z-index:1000}.top-100[data-v-09482b26]{top:10px}.right-0[data-v-09482b26]{right:10px}.bg-blue[data-v-09482b26]{background:rgba(255,48,48,.9);color:#fff}.subtitle[data-v-09482b26],.title[data-v-09482b26]{margin:0!important}.label[data-v-09482b26]{width:50%;padding:20px}.name[data-v-09482b26]{position:absolute;bottom:-3px;left:3%;z-index:200;width:95%;background:#fff;text-align:left;padding-left:2%;padding-top:2%}.card-content[data-v-09482b26]{max-height:300px;position:relative;z-index:10;padding-top:0!important;display:block}.media-content[data-v-09482b26]{padding:5%;max-height:150px;overflow:auto}.front[data-v-09482b26]{z-index:2;transform:rotateY(0deg)}.back[data-v-09482b26]{transform:rotateY(180deg)}.back-logo img[data-v-09482b26]{top:0;eft:35%}.back-logo[data-v-09482b26]{width:30%;height:30%}.back-logo img[data-v-09482b26]{position:absolute;bottom:15px;text-align:center;left:35%;border-radius:50%;width:30%}@media screen and (max-width:767px){.back-logo img[data-v-09482b26]{margin:0 auto;top:0}}.back-content[data-v-09482b26]{padding-top:40px;font-weight:700;color:#00304a;position:absolute;overflow:scroll;top:6vw;left:0;right:0;text-align:center;font-family:Courier;font-size:.75rem}@media screen and (max-width:767px){.back-content[data-v-09482b26]{font-size:.7rem;top:16vw}}.bio[data-v-09482b26]{color:#000;padding-top:5px;font-size:.8rem;font-weight:600}@media screen and (max-width:767px){.bio[data-v-09482b26]{height:110px;line-height:12px}}",""])}}]);