(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{182:function(t,e,n){"use strict";n.r(e);n(13);var r,o=n(2),d={data:function(){return{timer:"",wordString:{day:"Days",hours:"Hrs",minutes:"Min",seconds:"Sec",expired:"Event has been expired.",running:"Till the end of event.",upcoming:"Till start of event.",status:{expired:"Expired",running:"Running",upcoming:"Future"}},start:"",end:"",interval:"",days:"",minutes:"",hours:"",seconds:"",message:"",statusType:"",statusText:""}},mounted:(r=Object(o.a)(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.start=new Date(this.starttime).getTime(),this.end=new Date(this.endtime).getTime(),this.timerCount(this.start,this.end),this.interval=setInterval(function(){e.timerCount(e.start,e.end)},1e3);case 4:case"end":return t.stop()}},t,this)})),function(){return r.apply(this,arguments)}),methods:{timerCount:function(t,e){var n=(new Date).getTime(),r=t-n,o=e-n;if(r<0&&o<0)return this.message=this.wordString.expired,this.statusType="expired",this.statusText=this.wordString.status.expired,void clearInterval(this.interval);r<0&&o>0?(this.calcTime(o),this.message=this.wordString.running,this.statusType="running",this.statusText=this.wordString.status.running):r>0&&o>0&&(this.calcTime(r),this.message=this.wordString.upcoming,this.statusType="upcoming",this.statusText=this.wordString.status.upcoming)},calcTime:function(t){this.days=Math.floor(t/864e5),this.hours=Math.floor(t%864e5/36e5),this.minutes=Math.floor(t%36e5/6e4),this.seconds=Math.floor(t%6e4/1e3)}},components:{},props:{starttime:String,endtime:String,trans:String}},c=(n(432),n(3)),component=Object(c.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"timer container"},[n("div",{staticClass:"columns"},[t._m(0),t._v(" "),n("div",{staticClass:"column is-4"},[n("div",{staticClass:"columns is-mobile is-8-desktop"},[n("div",{staticClass:"block column is-2-desktop is-3-mobile"},[n("span",[t._v(t._s(t.days))]),n("br"),t._v("\n            "+t._s(t.wordString.day)+"\n          ")]),t._v(" "),n("div",{staticClass:"block column is-2-desktop  is-3-mobile  is-offset-1-desktop"},[n("span",[t._v(t._s(t.hours))]),n("br"),t._v("\n            "+t._s(t.wordString.hours)+"\n          ")]),t._v(" "),n("div",{staticClass:"block column is-2-desktop  is-3-mobile is-offset-1-desktop"},[n("span",[t._v(t._s(t.minutes))]),n("br"),t._v("\n            "+t._s(t.wordString.minutes)+"\n          ")]),t._v(" "),n("div",{staticClass:"block column is-2-desktop is-3-mobile is-offset-1-desktop"},[n("span",[t._v(t._s(t.seconds))]),n("br"),t._v("\n            "+t._s(t.wordString.seconds)+"\n          ")])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column is-8"},[e("h2",[this._v(" \n            React, and GraphQL "),e("a",{attrs:{href:"/workshops"}},[this._v("Workshops")]),this._v(" "),e("br"),this._v("\n            11 International "),e("a",{attrs:{href:"/speakers"}},[this._v("Speakers")]),this._v(" "),e("br"),this._v("all about Frameworks, TypeScript, React, Vue, Testing, IoT, NodeJS "),e("br")])])}],!1,null,"2116cd80",null);e.default=component.exports},409:function(t,e,n){var content=n(433);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("9bbe77a4",content,!0,{sourceMap:!1})},432:function(t,e,n){"use strict";var r=n(409);n.n(r).a},433:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,"body[data-v-2116cd80]{background:#000}.home[data-v-2116cd80]{background:#fff}h2[data-v-2116cd80]{font-size:35px;line-height:52px;text-transform:uppercase}h2[data-v-2116cd80],h3[data-v-2116cd80]{font-weight:500}h3[data-v-2116cd80]{font-size:1.4rem;margin-bottom:1vw;margin-top:1vw}.timer[data-v-2116cd80]{color:#fff;text-transform:uppercase;text-align:center;font-size:.9rem;background:#fff;margin-top:-2.75rem;top:-50px}@media screen and (max-width:767px){.timer[data-v-2116cd80]{background:#fff;padding:20px;position:absolute;left:0;top:100vw;width:100%}}.timer a[data-v-2116cd80]{color:#c90000}.timer h2[data-v-2116cd80]{color:#000;font-size:1.675rem;line-height:2.75rem;text-transform:none;padding:20px}@media screen and (max-width:767px){.timer h2[data-v-2116cd80]{line-height:2rem;font-size:1.2rem;padding:10px}}.timer .block[data-v-2116cd80]{background-color:#000;height:20px;min-height:70px;margin-top:40px;font-size:1.1rem;font-weight:700}.timer .sec[data-v-2116cd80]{border-left:1px solid #000;display:inline-block;font-weight:500;text-align:center;margin:0 5px}.timer .sec .format[data-v-2116cd80]{font-weight:300;font-size:14px;opacity:.8;width:60px}.timer .sec .message[data-v-2116cd80]{font-size:14px;font-weight:400;margin-top:5px}.timer .sec .status-tag[data-v-2116cd80]{width:270px;margin:10px auto;padding:8px 0;font-weight:500;color:#000;text-align:center;border-radius:15px}.timer .sec .status-tag.upcoming[data-v-2116cd80]{background-color:#90ee90}.timer .sec .status-tag.running[data-v-2116cd80]{background-color:gold}.timer .sec .status-tag.expired[data-v-2116cd80]{background-color:silver}",""])}}]);