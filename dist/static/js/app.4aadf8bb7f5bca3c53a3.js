webpackJsonp([1],{"6YTq":function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"tabs-wrap"},[i("ul",{staticClass:"tab-wrap",style:t.transition,on:{click:t.handleClick}},t._l(t.list,function(n,e){return i("li",{class:{active:t.cur==e},attrs:{"data-index":e}},[t._v(t._s(n))])})),t._v(" "),i("div",{staticClass:"slider",style:"transform:translatex("+t.sliderX+"px) scale("+t.sliderScale+");width:"+t.sliderW+"px;"}),t._v(" "),i("ul",{staticClass:"content-wrap",style:"transform:translatex("+t.contentX+"px);width:"+t.list.length*t.containerW+"px;",on:{touchstart:t.handleTouchStart,touchmove:t.handleTouchMove,touchend:t.handleTouchEnd,touchcancel:t.handleTouchCancel}},[t._t("default")],2)])},a=[],s={render:e,staticRenderFns:a};n.a=s},BuLS:function(t,n){},"C++h":function(t,n,i){"use strict";function e(t){i("Uoes")}var a=i("goLt"),s=i("6YTq"),r=i("VU/8"),o=e,c=r(a.a,s.a,!1,o,"data-v-691def92",null);n.a=c.exports},M93x:function(t,n,i){"use strict";function e(t){i("BuLS")}var a=i("xJD8"),s=i("h4bK"),r=i("VU/8"),o=e,c=r(a.a,s.a,!1,o,null,null);n.a=c.exports},NHnr:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i("7+uW"),a=i("M93x");e.a.config.productionTip=!1,new e.a({el:"#app",template:"<App/>",components:{App:a.a}})},Uoes:function(t,n){},goLt:function(t,n,i){"use strict";var e=0,a=0,s=0,r=0,o=0,c=0,l=0,u=!1,d=0,h=0,f=null,v=!1;n.a={name:"Vue-Tabs",props:{list:{type:Array,required:!0},sliderW:{type:Number,default:100},callback:{type:Function,default:function(){}}},data:function(){return{containerW:window.screen.availWidth<300?360:window.screen.availWidth,cur:0,sliderCls:"",animateTime:0,transition:"",sliderX:0,contentX:0,sliderScale:1}},computed:{tabItemW:function(){return this.containerW/this.list.length},wRate:function(){return 1/this.list.length},sliderInitX:function(){return(this.tabItemW-this.sliderW)/2},halfContentW:function(){return this.containerW/2}},methods:{doAnimationFrame:function(t,n,i){var e=window.requestAnimationFrame||window.webkitRequestAnimationFrame,a=window.cancelAnimationFrame;f&&a(f);var s=window.performance.now(),r=0,o=function a(o){r=o-s,r<=t?(n(r,t),f=e(a)):(n(t,t),i(),f=null)};f=e(o)},handleClick:function(t){var n=this,i=parseInt(t.target.getAttribute("data-index"));if(!isNaN(i)&&i!==this.cur){var e=this.containerW*i-Math.abs(this.contentX),a=this.tabItemW*i-Math.abs(this.sliderX),s=this.sliderX,r=this.contentX;this.cur=i,this.callback(i),v=!0,this.doAnimationFrame(this.animateTime||200,function(t,i){var o=t/i,c=o*e;n.setContentX(r-c),n.setSliderX(s+o*a+n.sliderInitX),n.doSliderScale(c%n.containerW)},function(){v=!1})}},setSliderScale:function(t){this.sliderScale=t},setSliderX:function(t){this.sliderX=t},setContentX:function(t){this.contentX=t},reset:function(){u=!1,o=0,c=0,l=0},addEndAnimation:function(t){var n=this,i=this.sliderX,e=this.contentX;this.doAnimationFrame(this.animateTime||200,function(a,s){var r=a/s,o=e+r*t;n.setContentX(o),n.setSliderX(i-r*(t*n.wRate)),n.doSliderScale(o%n.containerW)},function(){v=!1})},doSliderScale:function(t){t=Math.abs(t);var n=1;n=this.halfContentW>t?1+t/this.halfContentW*.3:1.3-(t-this.halfContentW)/this.halfContentW*.3,this.setSliderScale(n)},doEndAnimate:function(t){0!==t&&(v=!0,Math.abs(t)>30?(t>0?(this.addEndAnimation(this.containerW-t),this.cur--):(this.addEndAnimation(-this.containerW-t),this.cur++),this.callback(this.cur)):this.addEndAnimation(-t))},doEnd:function(){this.doEndAnimate(l)},handleTouchStart:function(t){u=!0,e=t.touches[0].clientX,a=t.touches[0].clientY},handleTouchMove:function(t){if(u&&!v){var n=0===o&&0===c;if(d=t.touches[0].clientX,h=t.touches[0].clientY,o=d-(s||e),c=h-(r||a),s=d,r=h,n){if(Math.abs(o)<Math.abs(c))return void this.reset()}else{if(0===this.cur&&o>0||this.cur===this.list.length-1&&o<0)return;l+=o,this.setContentX(this.contentX+o),this.setSliderX(this.sliderX-o*this.wRate),this.doSliderScale(l)}t.preventDefault(),t.stopPropagation()}},handleTouchEnd:function(){u&&(this.doEnd(),this.reset())},handleTouchCancel:function(){u&&(this.doEnd(),this.reset())}},mounted:function(){this.setSliderX(this.sliderInitX)}}},h4bK:function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{attrs:{id:"app"}},[i("VueTabs",{attrs:{list:t.list,"slider-w":80}},[i("li",{staticClass:"red"},[t._v("\n      111111"),i("br"),t._v("\n      111111"),i("br"),t._v("\n      111111"),i("br"),t._v("\n      111111"),i("br"),t._v("\n      111111"),i("br"),t._v("\n      111111"),i("br"),t._v("\n      111111"),i("br"),t._v("\n      111111"),i("br")]),t._v(" "),i("li",{staticClass:"green"},[t._v("\n      222222"),i("br"),t._v("\n      222222"),i("br"),t._v("\n      222222"),i("br"),t._v("\n      222222"),i("br"),t._v("\n      222222"),i("br"),t._v("\n      222222"),i("br"),t._v("\n      222222"),i("br"),t._v("\n      222222"),i("br")]),t._v(" "),i("li",{staticClass:"blue"},[t._v("\n      333333"),i("br"),t._v("\n      333333"),i("br"),t._v("\n      333333"),i("br"),t._v("\n      333333"),i("br"),t._v("\n      333333"),i("br"),t._v("\n      333333"),i("br"),t._v("\n      333333"),i("br"),t._v("\n      333333"),i("br")])])],1)},a=[],s={render:e,staticRenderFns:a};n.a=s},xJD8:function(t,n,i){"use strict";var e=i("C++h");n.a={name:"app",data:function(){return{list:["全部","收入","支出"]}},components:{VueTabs:e.a}}}},["NHnr"]);
//# sourceMappingURL=app.4aadf8bb7f5bca3c53a3.js.map