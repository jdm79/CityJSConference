(window.webpackJsonp=window.webpackJsonp||[]).push([[10,22],{177:function(e,t,o){"use strict";o.r(t);var n={props:{image:Object,thumbnail:Object,name:String,company:String,twitter:String,bio:String}},r=(o(419),o(3)),component=Object(r.a)(n,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"card"},[o("div",{staticClass:"card-image front"},[o("figure",{staticClass:"image is-40x40"},[void 0!==e.image?o("img",{staticClass:"speaker",attrs:{width:"150",alt:e.name,src:"/siteimages/"+e.thumbnail.path}}):e._e()]),e._v(" "),o("div",{staticClass:"name"},[o("div",{staticClass:"columns"},[o("div",{staticClass:"column marginless paddingless"},[o("strong",[e._v(e._s(e.name)+"      "),o("a",{staticClass:"icon",attrs:{href:"//twitter.com/"+e.twitter}},[o("i",{staticClass:"fa fa-twitter"})])]),o("br"),e._v("\n                      "+e._s(e.company)+"\n                  ")]),e._v(" "),o("div",{staticClass:"column"})])])]),e._v(" "),o("div",{staticClass:"media-content"},[o("div",{staticClass:"content"},[o("p",{domProps:{innerHTML:e._s(e.bio)}})])])])])},[],!1,null,"07cf8680",null);t.default=component.exports},184:function(e,t,o){"use strict";o.r(t);var n=o(418),r=o(177),c=(o(403),{components:{Speaker:r.default},props:{speakers:Array},mixins:[n.a.VueScreenSizeMixin]}),l=(o(430),o(3)),component=Object(l.a)(c,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"column"},[t("div",{staticClass:"carouselWrap"},[t("VCarousel",{attrs:{autoplay:!0,perPage:1,centerMode:!0}},this._l(this.speakers,function(e){return t("Slide",{key:e.id},[t("Speaker",{attrs:{image:e.image,thumbnail:e.thumbnail,name:e.name,company:e.company,twitter:e.twitter,bio:e.bio}})],1)}),1)],1)])},[],!1,null,null,null);t.default=component.exports},402:function(e,t,o){var content=o(420);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(16).default)("e0176dde",content,!0,{sourceMap:!1})},403:function(e,t,o){var content=o(407);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(16).default)("78e674f4",content,!0,{sourceMap:!1})},407:function(e,t,o){(e.exports=o(15)(!1)).push([e.i,"@-webkit-keyframes spinAround{0%{transform:rotate(0)}to{transform:rotate(359deg)}}@keyframes spinAround{0%{transform:rotate(0)}to{transform:rotate(359deg)}}.carousel{position:relative;overflow:hidden}.carousel .carousel-container{width:100%;position:relative;border:none;display:flex;margin:0;padding:0;left:-100%;transform:translateX(100%)}.carousel .carousel-container .carousel-item{display:block;position:relative;flex:1 0 100%}.carousel .carousel-container .carousel-item.has-background .is-background{-o-object-fit:cover;object-fit:cover;-o-object-position:center center;object-position:center center;height:100%;width:100%}.carousel .carousel-container .carousel-item .title{position:absolute;left:0;right:0;bottom:0;padding:1.5em;margin:0;text-align:center;background:hsla(0,0%,100%,.6);font-size:.75rem}.carousel .carousel-navigation{display:flex;justify-content:space-around;width:100%;pointer-events:none}.carousel .carousel-navigation .carousel-nav-left,.carousel .carousel-navigation .carousel-nav-right{padding:1em;pointer-events:auto}.carousel .carousel-navigation.is-centered{justify-content:center}.carousel .carousel-navigation.is-overlay{top:50%;transform:perspective(1px) translateY(-50%);bottom:auto;left:auto;right:auto;align-items:center;justify-content:space-between;z-index:99}.carousel .carousel-navigation.is-overlay .carousel-nav-left,.carousel .carousel-navigation.is-overlay .carousel-nav-right{height:2.2em;width:2em;background:hsla(0,0%,100%,.7);display:flex;justify-content:center;align-items:center;color:#4a4a4a;position:absolute;left:0}.carousel .carousel-navigation.is-overlay .carousel-nav-left:hover,.carousel .carousel-navigation.is-overlay .carousel-nav-right:hover{cursor:pointer}.carousel .carousel-navigation.is-overlay .carousel-nav-right{left:auto;right:0}.carousel.is-reversing .carousel-container{transform:translateX(-100%)}.carousel[data-size]:not(.carousel-animate-fade) .carousel-container .carousel-item{padding:1em}.hero.has-carousel{position:relative}.hero.has-carousel+.hero-body,.hero.has-carousel+.hero-footer,.hero.has-carousel+.hero-head{z-index:1}.hero.has-carousel .hero-carousel{display:flex;position:absolute;top:0;left:0;bottom:0;right:0;height:auto;border:none;margin:auto;padding:0;z-index:0}.hero.has-carousel .hero-carousel .carousel-container{height:auto!important}.hero-carousel{position:relative;overflow:hidden}.hero-carousel .carousel-container{width:100%;position:relative;border:none;display:flex;margin:0;padding:0;left:-100%;transform:translateX(100%)}.hero-carousel .carousel-container .carousel-item{display:block;position:relative;flex:1 0 100%}.hero-carousel .carousel-container .carousel-item.has-background .is-background{-o-object-fit:cover;object-fit:cover;-o-object-position:center center;object-position:center center;height:100%;width:100%}.hero-carousel .carousel-container .carousel-item .title{position:absolute;left:0;right:0;bottom:0;padding:1.5em;margin:0;text-align:center;background:hsla(0,0%,100%,.6);font-size:.75rem}.hero-carousel .carousel-navigation{display:flex;justify-content:space-around;width:100%;pointer-events:none}.hero-carousel .carousel-navigation .carousel-nav-left,.hero-carousel .carousel-navigation .carousel-nav-right{padding:1em;pointer-events:auto}.hero-carousel .carousel-navigation.is-centered{justify-content:center}.hero-carousel .carousel-navigation.is-overlay{top:50%;transform:perspective(1px) translateY(-50%);bottom:auto;left:auto;right:auto;align-items:center;justify-content:space-between;z-index:99}.hero-carousel .carousel-navigation.is-overlay .carousel-nav-left,.hero-carousel .carousel-navigation.is-overlay .carousel-nav-right{height:2.2em;width:2em;background:hsla(0,0%,100%,.7);display:flex;justify-content:center;align-items:center;color:#4a4a4a;position:absolute;left:0}.hero-carousel .carousel-navigation.is-overlay .carousel-nav-left:hover,.hero-carousel .carousel-navigation.is-overlay .carousel-nav-right:hover{cursor:pointer}.hero-carousel .carousel-navigation.is-overlay .carousel-nav-right{left:auto;right:0}.hero-carousel.is-reversing .carousel-container{transform:translateX(-100%)}.carousel.carousel-animate-slide.carousel-animated .carousel-container,.hero-carousel.carousel-animate-slide.carousel-animated .carousel-container{transform:none!important;transition:transform .5s ease-in-out}.carousel.carousel-animate-fade .carousel-item,.hero-carousel.carousel-animate-fade .carousel-item{position:absolute;width:100%;height:100%;transition:opacity .5s ease-in-out}.carousel.carousel-animate-fade .carousel-item.is-active,.hero-carousel.carousel-animate-fade .carousel-item.is-active{opacity:1}.carousel.carousel-animate-fade .carousel-item:not(.is-active),.hero-carousel.carousel-animate-fade .carousel-item:not(.is-active){opacity:0}",""])},408:function(e,t,o){var content=o(431);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(16).default)("7e5aa030",content,!0,{sourceMap:!1})},418:function(e,t,o){"use strict";var n=new(o(0).a)({data:function(){return{event:null,vssWidth:null,vssHeight:null}}}),r={computed:{$vssEvent:function(){return n.event},$vssWidth:function(){return n.vssWidth||this.getScreenWidth()},$vssHeight:function(){return n.vssHeight||this.getScreenHeight()}},methods:{getScreenWidth:function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},getScreenHeight:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},handleResize:function(e){n.event=e,n.vssWidth=this.getScreenWidth(),n.vssHeight=this.getScreenHeight()},$vssDestroyListener:function(){window.removeEventListener("resize",this.handleResize)}},mounted:function(){window.addEventListener("resize",this.handleResize)},destroyed:function(){window.removeEventListener("resize",this.handleResize)}},c={install:function(e){e.mixin(r)},VueScreenSizeMixin:r};t.a=c},419:function(e,t,o){"use strict";var n=o(402);o.n(n).a},420:function(e,t,o){(e.exports=o(15)(!1)).push([e.i,"body[data-v-07cf8680]{background:#000}.home[data-v-07cf8680]{background:#fff}h2[data-v-07cf8680]{font-size:35px;line-height:52px;text-transform:uppercase}h2[data-v-07cf8680],h3[data-v-07cf8680]{font-weight:500}h3[data-v-07cf8680]{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}.card[data-v-07cf8680]{position:relative;display:block;max-height:720px;height:680px}.card-image[data-v-07cf8680]{overflow:hidden}.position-absolute[data-v-07cf8680]{position:absolute}.position-relative[data-v-07cf8680]{position:relative;display:block;z-index:1000}.top-100[data-v-07cf8680]{top:10px}.right-0[data-v-07cf8680]{right:10px}.bg-blue[data-v-07cf8680]{background:rgba(255,48,48,.9);color:#fff}.subtitle[data-v-07cf8680],.title[data-v-07cf8680]{margin:0!important}.label[data-v-07cf8680]{width:50%;padding:20px}.name[data-v-07cf8680]{position:absolute;bottom:-3px;left:3%;z-index:200;width:95%;background:#fff;text-align:left;padding-left:2%;padding-top:2%}.card-content[data-v-07cf8680]{max-height:300px;position:relative;z-index:10;padding-top:0!important;display:block}.media-content[data-v-07cf8680]{padding:5%;max-height:350px;overflow:auto}.front[data-v-07cf8680]{z-index:2;transform:rotateY(0deg)}.back[data-v-07cf8680]{transform:rotateY(180deg)}.back-logo img[data-v-07cf8680]{top:0;eft:35%}.back-logo[data-v-07cf8680]{width:30%;height:30%}.back-logo img[data-v-07cf8680]{position:absolute;bottom:15px;text-align:center;left:35%;border-radius:50%;width:30%}@media screen and (max-width:767px){.back-logo img[data-v-07cf8680]{margin:0 auto;top:0}}.back-content[data-v-07cf8680]{padding-top:40px;font-weight:700;color:#00304a;position:absolute;overflow:scroll;top:6vw;left:0;right:0;text-align:center;font-family:Courier;font-size:.75rem}@media screen and (max-width:767px){.back-content[data-v-07cf8680]{font-size:.7rem;top:16vw}}.bio[data-v-07cf8680]{color:#000;padding-top:5px;font-size:.8rem;font-weight:600}@media screen and (max-width:767px){.bio[data-v-07cf8680]{height:110px;line-height:12px}}",""])},430:function(e,t,o){"use strict";var n=o(408);o.n(n).a},431:function(e,t,o){(e.exports=o(15)(!1)).push([e.i,"body{background:#000}.home{background:#fff}h2{font-size:35px;line-height:52px;text-transform:uppercase}h2,h3{font-weight:500}h3{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}@media screen and (min-width:768px) and (max-width:1024px){.carouselWrap{margin:0 auto;width:50%}}",""])}}]);