(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{152:function(t,n,e){"use strict";var r=e(4),s=e(15),a=e(16),o=e(76),i=e(74),c=e(6),l=e(98).f,u=e(97).f,d=e(9).f,f=e(96).trim,v=r.Number,p=v,g=v.prototype,h="Number"==a(e(75)(g)),m="trim"in String.prototype,_=function(t){var n=i(t,!1);if("string"==typeof n&&n.length>2){var e,r,s,a=(n=m?n.trim():f(n,3)).charCodeAt(0);if(43===a||45===a){if(88===(e=n.charCodeAt(2))||120===e)return NaN}else if(48===a){switch(n.charCodeAt(1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+n}for(var o,c=n.slice(2),l=0,u=c.length;l<u;l++)if((o=c.charCodeAt(l))<48||o>s)return NaN;return parseInt(c,r)}}return+n};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof v&&(h?c((function(){g.valueOf.call(e)})):"Number"!=a(e))?o(new p(_(n)),e,v):_(n)};for(var C,w=e(8)?l(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;w.length>b;b++)s(p,C=w[b])&&!s(v,C)&&d(v,C,u(p,C));v.prototype=g,g.constructor=v,e(11)(r,"Number",v)}},156:function(t,n,e){},157:function(t,n,e){},167:function(t,n,e){"use strict";var r=e(156);e.n(r).a},168:function(t,n,e){"use strict";var r=e(3),s=e(77)(!0);r(r.P,"Array",{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),e(99)("includes")},169:function(t,n,e){"use strict";var r=e(3),s=e(170);r(r.P+r.F*e(171)("includes"),"String",{includes:function(t){return!!~s(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},170:function(t,n,e){var r=e(78),s=e(17);t.exports=function(t,n,e){if(r(n))throw TypeError("String#"+e+" doesn't accept regex!");return String(s(t))}},171:function(t,n,e){var r=e(2)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r]=!1,!"/./"[t](n)}catch(t){}}return!0}},172:function(t,n,e){"use strict";var r=e(157);e.n(r).a},180:function(t,n,e){"use strict";e(14),e(26),e(54),e(152);var r={name:"GuluRow",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach((function(n){n.gutter=t.gutter}))}},s=(e(167),e(1)),a=Object(s.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)}),[],!1,null,"f8b16736",null);n.a=a.exports},181:function(t,n,e){"use strict";var r=e(10),s=(e(152),e(168),e(169),e(26),e(14),e(20),e(27),function(t){var n=Object.keys(t),e=!0;return n.forEach((function(t){["span","offset"].includes(t)||(e=!1)})),e}),a={name:"GuluCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:s},narrowPc:{type:Object,validator:s},pc:{type:Object,validator:s},widePc:{type:Object,validator:s}},data:function(){return{gutter:0}},methods:{createClasses:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var e=[];return t.span&&e.push("col-".concat(n).concat(t.span)),t.offset&&e.push("offset-".concat(n).concat(t.offset)),e}},computed:{colClass:function(){var t=this.span,n=this.offset,e=this.ipad,s=this.narrowPc,a=this.pc,o=this.widePc,i=this.createClasses;return Object(r.a)(i({span:t,offset:n})).concat(Object(r.a)(i(e,"ipad-")),Object(r.a)(i(s,"narrow-pc-")),Object(r.a)(i(a,"pc-")),Object(r.a)(i(o,"wide-pc-")))},colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}}},o=(e(172),e(1)),i=Object(o.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)}),[],!1,null,"1f204e58",null);n.a=i.exports},189:function(t,n,e){},210:function(t,n,e){"use strict";var r=e(189);e.n(r).a},229:function(t,n,e){"use strict";e.r(n);e(25),e(95);var r=e(180),s=e(181),a={components:{GRow:r.a,GCol:s.a},data:function(){return{content:'\n        * {\n          box-sizing: border-box;\n        }\n        <g-row class="demoRow" gutter="10">\n          <g-col span="8">\n            <div class="demoCol">8</div>\n          </g-col>\n          <g-col span="8">\n            <div class="demoCol">8</div>\n          </g-col>\n          <g-col span="8">\n            <div class="demoCol">8</div>\n          </g-col>\n        </g-row>\n        <g-row class="demoRow" gutter="10">\n          <g-col span="6">\n            <div class="demoCol">6</div>\n          </g-col>\n          <g-col span="6">\n            <div class="demoCol">6</div>\n          </g-col>\n          <g-col span="6">\n            <div class="demoCol">6</div>\n          </g-col>\n          <g-col span="6">\n            <div class="demoCol">6</div>\n          </g-col>\n        </g-row>\n    '.replace(/^ {8}/gm,"").trim()}}},o=(e(210),e(1)),i=Object(o.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{"padding-top":"16px"}},[e("h2",[t._v("设置 gutter")]),t._v(" "),t._m(0),t._v(" "),e("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[e("g-col",{attrs:{span:"8"}},[e("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),e("g-col",{attrs:{span:"8"}},[e("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),e("g-col",{attrs:{span:"8"}},[e("div",{staticClass:"demoCol"},[t._v("8")])])],1),t._v(" "),e("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[e("g-col",{attrs:{span:"6"}},[e("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),e("g-col",{attrs:{span:"6"}},[e("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),e("g-col",{attrs:{span:"6"}},[e("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),e("g-col",{attrs:{span:"6"}},[e("div",{staticClass:"demoCol"},[t._v("6")])])],1),t._v(" "),t._m(1),t._v(" "),e("pre",[e("code",[t._v(t._s(t.content))])])],1)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("效果")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("代码")])])}],!1,null,"bcee5138",null);n.default=i.exports}}]);