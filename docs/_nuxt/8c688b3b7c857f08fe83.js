(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(t,e,n){t.exports=n(125)},125:function(t,e,n){"use strict";n.r(e),function(t){var e=n(20),r=(n(42),n(94),n(4),n(99),n(63),n(100),n(101),n(3),n(1),n(5),n(19),n(104),n(134),n(142),n(144),n(7)),o=n(120),c=n(83),l=n(8),f=n(34),d=n(68);r.default.component(d.a.name,d.a),r.default.component("NLink",d.a),t.fetch||(t.fetch=o.a);var h,m,x=[],v=window.__NUXT__||{};Object.assign(r.default.config,{silent:!0,performance:!1});var y=r.default.config.errorHandler||console.error;function w(t,e,n){var r=function(component){var t=function(component,t){if(!component||!component.options||!component.options[t])return{};var option=component.options[t];if("function"==typeof option){for(var e=arguments.length,n=new Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];return option.apply(void 0,n)}return option}(component,"transition",e,n)||{};return"string"==typeof t?{name:t}:t};return t.map((function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter((function(t){return o[t]&&t.toLowerCase().includes("leave")})).forEach((function(t){e[t]=o[t]}))}return e}))}function _(t,e,n){var r,o,c,f,d=this;return regeneratorRuntime.async((function(m){for(;;)switch(m.prev=m.next){case 0:if(this._pathChanged=Boolean(h.nuxt.err)||e.path!==t.path,this._queryChanged=JSON.stringify(t.query)!==JSON.stringify(e.query),this._diffQuery=this._queryChanged?Object(l.g)(t.query,e.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),m.prev=4,this._pathChanged||!this._queryChanged){m.next=11;break}return m.next=8,regeneratorRuntime.awrap(Object(l.n)(t,(function(t,e){return{Component:t,instance:e}})));case 8:r=m.sent,r.some((function(n){var r=n.Component,o=n.instance,c=r.options.watchQuery;return!0===c||(Array.isArray(c)?c.some((function(t){return d._diffQuery[t]})):"function"==typeof c&&c.apply(o,[t.query,e.query]))}))&&this.$loading.start&&!this.$loading.manual&&this.$loading.start();case 11:n(),m.next=25;break;case 14:if(m.prev=14,m.t0=m.catch(4),o=m.t0||{},c=o.statusCode||o.status||o.response&&o.response.status||500,f=o.message||"",!/^Loading( CSS)? chunk (\d)+ failed\./.test(f)){m.next=22;break}return window.location.reload(!0),m.abrupt("return");case 22:this.error({statusCode:c,message:f}),this.$nuxt.$emit("routeChanged",t,e,o),n();case 25:case"end":return m.stop()}}),null,this,[[4,14]])}function C(t,e){return v.serverRendered&&e&&Object(l.a)(t,e),t._Ctor=t,t}function k(t){var path=Object(l.d)(t.options.base,t.options.mode);return Object(l.c)(t.match(path),(function(t,e,n,r,o){var c;return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof t||t.options){e.next=4;break}return e.next=3,regeneratorRuntime.awrap(t());case 3:t=e.sent;case 4:return c=C(Object(l.o)(t),v.data?v.data[o]:null),n.components[r]=c,e.abrupt("return",c);case 7:case"end":return e.stop()}}))}))}function O(t,e,n){var r=this,o=[],f=!1;if(void 0!==n&&(o=[],(n=Object(l.o)(n)).options.middleware&&(o=o.concat(n.options.middleware)),t.forEach((function(t){t.options.middleware&&(o=o.concat(t.options.middleware))}))),o=o.map((function(t){return"function"==typeof t?t:("function"!=typeof c.a[t]&&(f=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),c.a[t])})),!f)return Object(l.k)(o,e)}function $(t,e,n){var r,o,c,d,m,v,y,_,C,k,$,j,R,E,T,S,P,N=this;return regeneratorRuntime.async((function(A){for(;;)switch(A.prev=A.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){A.next=2;break}return A.abrupt("return",n());case 2:return t===e?x=[]:(r=[],x=Object(l.e)(e,r).map((function(t,i){return Object(l.b)(e.matched[r[i]].path)(e.params)}))),o=!1,c=function(path){e.path===path.path&&N.$loading.finish&&N.$loading.finish(),e.path!==path.path&&N.$loading.pause&&N.$loading.pause(),o||(o=!0,n(path))},A.next=7,regeneratorRuntime.awrap(Object(l.p)(h,{route:t,from:e,next:c.bind(this)}));case 7:if(this._dateLastError=h.nuxt.dateErr,this._hadError=Boolean(h.nuxt.err),d=[],(m=Object(l.e)(t,d)).length){A.next=25;break}return A.next=14,regeneratorRuntime.awrap(O.call(this,m,h.context));case 14:if(!o){A.next=16;break}return A.abrupt("return");case 16:return A.next=18,regeneratorRuntime.awrap(this.loadLayout("function"==typeof f.a.layout?f.a.layout(h.context):f.a.layout));case 18:return v=A.sent,A.next=21,regeneratorRuntime.awrap(O.call(this,m,h.context,v));case 21:if(!o){A.next=23;break}return A.abrupt("return");case 23:return h.context.error({statusCode:404,message:"This page could not be found"}),A.abrupt("return",n());case 25:return m.forEach((function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)})),this.setTransitions(w(m,t,e)),A.prev=27,A.next=30,regeneratorRuntime.awrap(O.call(this,m,h.context));case 30:if(!o){A.next=32;break}return A.abrupt("return");case 32:if(!h.context._errored){A.next=34;break}return A.abrupt("return",n());case 34:return"function"==typeof(y=m[0].options.layout)&&(y=y(h.context)),A.next=38,regeneratorRuntime.awrap(this.loadLayout(y));case 38:return y=A.sent,A.next=41,regeneratorRuntime.awrap(O.call(this,m,h.context,y));case 41:if(!o){A.next=43;break}return A.abrupt("return");case 43:if(!h.context._errored){A.next=45;break}return A.abrupt("return",n());case 45:_=!0,A.prev=46,C=!0,k=!1,$=void 0,A.prev=50,j=m[Symbol.iterator]();case 52:if(C=(R=j.next()).done){A.next=64;break}if("function"==typeof(E=R.value).options.validate){A.next=56;break}return A.abrupt("continue",61);case 56:return A.next=58,regeneratorRuntime.awrap(E.options.validate(h.context));case 58:if(_=A.sent){A.next=61;break}return A.abrupt("break",64);case 61:C=!0,A.next=52;break;case 64:A.next=70;break;case 66:A.prev=66,A.t0=A.catch(50),k=!0,$=A.t0;case 70:A.prev=70,A.prev=71,C||null==j.return||j.return();case 73:if(A.prev=73,!k){A.next=76;break}throw $;case 76:return A.finish(73);case 77:return A.finish(70);case 78:A.next=84;break;case 80:return A.prev=80,A.t1=A.catch(46),this.error({statusCode:A.t1.statusCode||"500",message:A.t1.message}),A.abrupt("return",n());case 84:if(_){A.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),A.abrupt("return",n());case 87:return A.next=89,regeneratorRuntime.awrap(Promise.all(m.map((function(n,i){if(n._path=Object(l.b)(t.matched[d[i]].path)(t.params),n._dataRefresh=!1,N._pathChanged&&N._queryChanged||n._path!==x[i])n._dataRefresh=!0;else if(!N._pathChanged&&N._queryChanged){var r=n.options.watchQuery;!0===r?n._dataRefresh=!0:Array.isArray(r)?n._dataRefresh=r.some((function(t){return N._diffQuery[t]})):"function"==typeof r&&(T||(T=Object(l.f)(t)),n._dataRefresh=r.apply(T[i],[t.query,e.query]))}if(N._hadError||!N._isMounted||n._dataRefresh){var o=[],c=n.options.asyncData&&"function"==typeof n.options.asyncData,f=Boolean(n.options.fetch),m=c&&f?30:45;if(c){var v=Object(l.m)(n.options.asyncData,h.context).then((function(t){Object(l.a)(n,t),N.$loading.increase&&N.$loading.increase(m)}));o.push(v)}if(N.$loading.manual=!1===n.options.loading,f){var p=n.options.fetch(h.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then((function(t){N.$loading.increase&&N.$loading.increase(m)})),o.push(p)}return Promise.all(o)}}))));case 89:o||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),n()),A.next=106;break;case 92:if(A.prev=92,A.t2=A.catch(27),"ERR_REDIRECT"!==(S=A.t2||{}).message){A.next=97;break}return A.abrupt("return",this.$nuxt.$emit("routeChanged",t,e,S));case 97:return x=[],Object(l.i)(S),"function"==typeof(P=f.a.layout)&&(P=P(h.context)),A.next=103,regeneratorRuntime.awrap(this.loadLayout(P));case 103:this.error(S),this.$nuxt.$emit("routeChanged",t,e,S),n();case 106:case"end":return A.stop()}}),null,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}function j(t,n){Object(l.c)(t,(function(t,n,o,c){return"object"!==Object(e.a)(t)||t.options||((t=r.default.extend(t))._Ctor=t,o.components[c]=t),t}))}function R(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?f.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(h.context)),this.setLayout(e)}function E(t,e){var n=this;if(!1!==this._pathChanged||!1!==this._queryChanged){var o=Object(l.f)(t),c=Object(l.e)(t);r.default.nextTick((function(){o.forEach((function(t,i){if(t&&!t._isDestroyed&&t.constructor._dataRefresh&&c[i]===t.constructor&&!0!==t.$vnode.data.keepAlive&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var n in e)r.default.set(t.$data,n,e[n]);window.$nuxt.$nextTick((function(){window.$nuxt.$emit("triggerScroll")}))}})),R.call(n,t)}))}}function T(t){window.onNuxtReadyCbs.forEach((function(e){"function"==typeof e&&e(t)})),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),m.afterEach((function(e,n){r.default.nextTick((function(){return t.$nuxt.$emit("routeChanged",e,n)}))}))}Object(f.b)().then((function(t){var e,n,o,c,f;return regeneratorRuntime.async((function(d){for(;;)switch(d.prev=d.next){case 0:return h=t.app,m=t.router,e=new r.default(h),n=v.layout||"default",d.next=6,regeneratorRuntime.awrap(e.loadLayout(n));case 6:return e.setLayout(n),o=function(){e.$mount("#__nuxt"),m.afterEach(j),m.afterEach(E.bind(e)),r.default.nextTick((function(){T(e)}))},d.next=10,regeneratorRuntime.awrap(Promise.all(k(m)));case 10:if(c=d.sent,e.setTransitions=e.$options.nuxt.setTransitions.bind(e),c.length&&(e.setTransitions(w(c,m.currentRoute)),x=m.currentRoute.matched.map((function(t){return Object(l.b)(t.path)(m.currentRoute.params)}))),e.$loading={},v.error&&e.error(v.error),m.beforeEach(_.bind(e)),m.beforeEach($.bind(e)),!v.serverRendered){d.next=20;break}return o(),d.abrupt("return");case 20:f=function(){j(m.currentRoute,m.currentRoute),R.call(e,m.currentRoute),o()},$.call(e,m.currentRoute,m.currentRoute,(function(path){if(path){var t=m.afterEach((function(e,n){t(),f()}));m.push(path,void 0,(function(t){t&&y(t)}))}else f()}));case 22:case"end":return d.stop()}}))})).catch(y)}.call(this,n(36))},153:function(t,e,n){"use strict";var r=n(65);n.n(r).a},154:function(t,e,n){var r=n(40);(t.exports=r(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},155:function(t,e,n){"use strict";var r=n(66);n.n(r).a},156:function(t,e,n){var r=n(40);(t.exports=r(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;-webkit-transition:width .1s,opacity .4s;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{-webkit-transition:none;transition:none}.nuxt-progress-failed{background-color:red}",""])},161:function(t,e,n){"use strict";var r=n(67);n.n(r).a},162:function(t,e,n){var r=n(40);(t.exports=r(!1)).push([t.i,"html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}",""])},34:function(t,e,n){"use strict";n(6),n(4),n(3),n(5),n(1),n(63);var r=n(0),o=(n(19),n(7)),c=n(121),l=n(84),f=n.n(l),d=n(39),h=n.n(d),m=n(85),x=n(8);"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",(function(){window.history.scrollRestoration="auto"})),window.addEventListener("load",(function(){window.history.scrollRestoration="manual"})));o.default.use(m.a);var v={mode:"history",base:decodeURI("/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:function(t,e,n){var r=!1,o=Object(x.e)(t);o.length<2&&o.every((function(t){return!1!==t.options.scrollToTop}))?r={x:0,y:0}:o.some((function(t){return t.options.scrollToTop}))&&(r={x:0,y:0}),n&&(r=n);var c=window.$nuxt;return t.path===e.path&&t.hash!==e.hash&&c.$nextTick((function(){return c.$emit("triggerScroll")})),new Promise((function(e){c.$once("triggerScroll",(function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)}))}))},routes:[{path:"/about",component:function(){return Object(x.j)(n.e(4).then(n.bind(null,183)))},name:"about"},{path:"/contact",component:function(){return Object(x.j)(n.e(5).then(n.bind(null,182)))},name:"contact"},{path:"/Article/post1",component:function(){return Object(x.j)(n.e(2).then(n.bind(null,181)))},name:"Article-post1"},{path:"/Article/post2",component:function(){return Object(x.j)(n.e(3).then(n.bind(null,179)))},name:"Article-post2"},{path:"/",component:function(){return Object(x.j)(n.e(6).then(n.bind(null,180)))},name:"index"}],fallback:!1};var y={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render:function(t,e){var n=e.parent,data=e.data,r=e.props;data.nuxtChild=!0;for(var o=n,c=n.$nuxt.nuxt.transitions,l=n.$nuxt.nuxt.defaultTransition,f=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&f++,n=n.$parent;data.nuxtChildDepth=f;var d=c[f]||l,h={};w.forEach((function(t){void 0!==d[t]&&(h[t]=d[t])}));var m={};_.forEach((function(t){"function"==typeof d[t]&&(m[t]=d[t].bind(o))}));var x=m.beforeEnter;if(m.beforeEnter=function(t){if(window.$nuxt.$nextTick((function(){window.$nuxt.$emit("triggerScroll")})),x)return x.call(o,t)},!1===d.css){var v=m.leave;(!v||v.length<2)&&(m.leave=function(t,e){v&&v.call(o,t),o.$nextTick(e)})}var y=t("routerView",data);return r.keepAlive&&(y=t("keep-alive",{props:r.keepAliveProps},[y])),t("transition",{props:h,on:m},[y])}},w=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],_=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],C={name:"NuxtError",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},k=(n(153),n(35)),O=Object(k.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null).exports,$=(n(29),n(30),n(14),n(51)),j={name:"Nuxt",components:{NuxtChild:y,NuxtError:O},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},errorCaptured:function(t){this.displayingNuxtError&&(this.errorFromNuxtError=t,this.$forceUpdate())},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(x.b)(this.$route.matched[0].path)(this.$route.params);var t=Object($.a)(this.$route.matched,1)[0];if(!t)return this.$route.path;var e=t.components.default;if(e&&e.options){var n=e.options;if(n.key)return"function"==typeof n.key?n.key(this.$route):n.key}return/\/$/.test(t.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate:function(){o.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render:function(t){var e=this;return this.nuxt.err?this.errorFromNuxtError?(this.$nextTick((function(){return e.errorFromNuxtError=!1})),t("div",{},[t("h2","An error occured while showing the error page"),t("p","Unfortunately an error occured and while showing the error page another error occured"),t("p","Error details: ".concat(this.errorFromNuxtError.toString())),t("nuxt-link",{props:{to:"/"}},"Go back to home")])):(this.displayingNuxtError=!0,this.$nextTick((function(){return e.displayingNuxtError=!1})),t(O,{props:{error:this.nuxt.err}})):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},R=(n(42),{name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout((function(){return t.startTimer()}),this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout((function(){t.show=!1,t.$nextTick((function(){t.percent=0,t.reversed=!1}))}),500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval((function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))}),100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}}),E=(n(155),Object(k.a)(R,void 0,void 0,!1,null,null,null).exports),T=(n(157),n(159),n(161),{_default:Object(k.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt")],1)}),[],!1,null,null,null).exports}),S={head:{title:"jay",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"My solid Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render:function(t,e){var n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick((function(){window.$nuxt.$emit("triggerScroll")}))}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:function(){return{isOnline:!0,layout:null,layoutName:""}},beforeCreate:function(){o.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){o.default.prototype.$nuxt=this,window.$nuxt=this,this.refreshOnlineStatus(),window.addEventListener("online",this.refreshOnlineStatus),window.addEventListener("offline",this.refreshOnlineStatus),this.error=this.nuxt.error,this.context=this.$options.context},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline:function(){return!this.isOnline}},methods:{refreshOnlineStatus:function(){void 0===window.navigator.onLine?this.isOnline=!0:this.isOnline=window.navigator.onLine},refresh:function(){var t,e,n=this;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:if((t=Object(x.f)(this.$route)).length){r.next=3;break}return r.abrupt("return");case 3:return this.$loading.start(),e=t.map((function(t){var p=[];return t.$options.fetch&&p.push(Object(x.m)(t.$options.fetch,n.context)),t.$options.asyncData&&p.push(Object(x.m)(t.$options.asyncData,n.context).then((function(e){for(var n in e)o.default.set(t.$data,n,e[n])}))),Promise.all(p)})),r.prev=5,r.next=8,regeneratorRuntime.awrap(Promise.all(e));case 8:r.next=15;break;case 10:r.prev=10,r.t0=r.catch(5),this.$loading.fail(),Object(x.i)(r.t0),this.error(r.t0);case 15:this.$loading.finish();case 16:case"end":return r.stop()}}),null,this,[[5,10]])},errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&T["_"+t]||(t="default"),this.layoutName=t,this.layout=T["_"+t],this.layout},loadLayout:function(t){return t&&T["_"+t]||(t="default"),Promise.resolve(T["_"+t])}},components:{NuxtLoading:E}},P=n(123);function N(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function A(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?N(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):N(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}o.default.use(P.a,{}),n.d(e,"b",(function(){return L})),n.d(e,"a",(function(){return O})),o.default.component(f.a.name,f.a),o.default.component(h.a.name,A({},h.a,{render:function(t,e){return h.a._warned||(h.a._warned=!0,console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")),h.a.render(t,e)}})),o.default.component(y.name,y),o.default.component("NChild",y),o.default.component(j.name,j),o.default.use(c.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var D={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function L(t){var e,n,r,c,path;return regeneratorRuntime.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,regeneratorRuntime.awrap(new m.a(v));case 2:return e=l.sent,n=A({router:e,nuxt:{defaultTransition:D,transitions:[D],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map((function(t){return t=t?"string"==typeof t?Object.assign({},D,{name:t}):Object.assign({},D,t):D})),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(e){e=e||null,n.context._errored=Boolean(e),e=e?Object(x.l)(e):null;var r=this.nuxt||this.$options.nuxt;return r.dateErr=Date.now(),r.err=e,t&&(t.nuxt.error=e),e}}},S),r=t?t.next:function(t){return n.router.push(t)},t?c=e.resolve(t.url).route:(path=Object(x.d)(e.options.base),c=e.resolve(path).route),l.next=8,regeneratorRuntime.awrap(Object(x.p)(n,{route:c,next:r,error:n.nuxt.error.bind(n),payload:t?t.payload:void 0,req:t?t.req:void 0,res:t?t.res:void 0,beforeRenderFns:t?t.beforeRenderFns:void 0,ssrContext:t}));case 8:(function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");n[t="$"+t]=e;var r="__nuxt_"+t+"_installed__";o.default[r]||(o.default[r]=!0,o.default.use((function(){o.default.prototype.hasOwnProperty(t)||Object.defineProperty(o.default.prototype,t,{get:function(){return this.$root.$options[t]}})})))}),l.next=12;break;case 12:l.next=15;break;case 15:return l.abrupt("return",{app:n,router:e});case 16:case"end":return l.stop()}}))}},65:function(t,e,n){var content=n(154);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("72daabed",content,!0,{sourceMap:!1})},66:function(t,e,n){var content=n(156);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("3191d5ad",content,!0,{sourceMap:!1})},67:function(t,e,n){var content=n(162);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("932a8f60",content,!0,{sourceMap:!1})},68:function(t,e,n){"use strict";n(1),n(94),n(4),n(3),n(100),n(101);var r=n(7),o=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout((function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})}),1)},c=window.cancelIdleCallback||function(t){clearTimeout(t)},l=window.IntersectionObserver&&new window.IntersectionObserver((function(t){t.forEach((function(t){var e=t.intersectionRatio,link=t.target;e<=0||link.__prefetch()}))}));e.a={name:"NuxtLink",extends:r.default.component("RouterLink"),props:{prefetch:{type:Boolean,default:!0},noPrefetch:{type:Boolean,default:!1}},mounted:function(){this.prefetch&&!this.noPrefetch&&(this.handleId=o(this.observe,{timeout:2e3}))},beforeDestroy:function(){c(this.handleId),this.__observed&&(l.unobserve(this.$el),delete this.$el.__prefetch)},methods:{observe:function(){l&&this.shouldPrefetch()&&(this.$el.__prefetch=this.prefetchLink.bind(this),l.observe(this.$el),this.__observed=!0)},shouldPrefetch:function(){return this.getPrefetchComponents().length>0},canPrefetch:function(){var t=navigator.connection;return!(this.$nuxt.isOffline||t&&((t.effectiveType||"").includes("2g")||t.saveData))},getPrefetchComponents:function(){return this.$router.resolve(this.to,this.$route,this.append).resolved.matched.map((function(t){return t.components.default})).filter((function(t){return"function"==typeof t&&!t.options&&!t.__prefetched}))},prefetchLink:function(){if(this.canPrefetch()){l.unobserve(this.$el);var t=this.getPrefetchComponents(),e=!0,n=!1,r=void 0;try{for(var o,c=t[Symbol.iterator]();!(e=(o=c.next()).done);e=!0){var f=o.value,d=f();d instanceof Promise&&d.catch((function(){})),f.__prefetched=!0}}catch(t){n=!0,r=t}finally{try{e||null==c.return||c.return()}finally{if(n)throw r}}}}}}},8:function(t,e,n){"use strict";n.d(e,"i",(function(){return h})),n.d(e,"j",(function(){return m})),n.d(e,"a",(function(){return x})),n.d(e,"o",(function(){return v})),n.d(e,"e",(function(){return y})),n.d(e,"f",(function(){return w})),n.d(e,"c",(function(){return _})),n.d(e,"n",(function(){return C})),n.d(e,"h",(function(){return k})),n.d(e,"p",(function(){return O})),n.d(e,"k",(function(){return $})),n.d(e,"m",(function(){return j})),n.d(e,"d",(function(){return R})),n.d(e,"b",(function(){return E})),n.d(e,"g",(function(){return T})),n.d(e,"l",(function(){return S}));n(6),n(4),n(22),n(146),n(147),n(29),n(30),n(79),n(115);var r=n(51),o=(n(14),n(20)),c=(n(63),n(42),n(3),n(1),n(5),n(19),n(0)),l=n(7);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function h(t){l.default.config.errorHandler&&l.default.config.errorHandler(t)}function m(t){return t.then((function(t){return t.default||t}))}function x(t,e){if(e||!t.options.__hasNuxtData){var n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){var data=n.call(this,this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),d({},data,{},e)},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}}function v(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=l.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function y(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"components";return Array.prototype.concat.apply([],t.matched.map((function(t,r){return Object.keys(t[n]).map((function(o){return e&&e.push(r),t[n][o]}))})))}function w(t){return y(t,arguments.length>1&&void 0!==arguments[1]&&arguments[1],"instances")}function _(t,e){return Array.prototype.concat.apply([],t.matched.map((function(t,n){return Object.keys(t.components).reduce((function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r}),[])})))}function C(t,e){return Promise.all(_(t,(function(t,n,r,o){return regeneratorRuntime.async((function(c){for(;;)switch(c.prev=c.next){case 0:if("function"!=typeof t||t.options){c.next=4;break}return c.next=3,regeneratorRuntime.awrap(t());case 3:t=c.sent;case 4:return r.components[o]=t=v(t),c.abrupt("return","function"==typeof e?e(t,n,r,o):t);case 6:case"end":return c.stop()}}))})))}function k(t){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,regeneratorRuntime.awrap(C(t));case 4:return e.abrupt("return",d({},t,{meta:y(t).map((function(e,n){return d({},e.options.meta,{},(t.matched[n]||{}).meta)}))}));case 5:case"end":return e.stop()}}))}function O(t,e){var n,c,l,f;return regeneratorRuntime.async((function(d){for(;;)switch(d.prev=d.next){case 0:return t.context||(t.context={isStatic:!0,isDev:!1,isHMR:!1,app:t,payload:e.payload,error:e.error,base:"/",env:{}},e.req&&(t.context.req=e.req),e.res&&(t.context.res=e.res),e.ssrContext&&(t.context.ssrContext=e.ssrContext),t.context.redirect=function(e,path,n){if(e){t.context._redirected=!0;var r=Object(o.a)(path);if("number"==typeof e||"undefined"!==r&&"object"!==r||(n=path||{},path=e,r=Object(o.a)(path),e=302),"object"===r&&(path=t.router.resolve(path).route.fullPath),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))throw path=L(path,n),window.location.replace(path),new Error("ERR_REDIRECT");t.context.next({path:path,query:n,status:e})}},t.context.nuxtState=window.__NUXT__),d.next=3,regeneratorRuntime.awrap(Promise.all([k(e.route),k(e.from)]));case 3:n=d.sent,c=Object(r.a)(n,2),l=c[0],f=c[1],e.route&&(t.context.route=l),e.from&&(t.context.from=f),t.context.next=e.next,t.context._redirected=!1,t.context._errored=!1,t.context.isHMR=!1,t.context.params=t.context.route.params||{},t.context.query=t.context.route.query||{};case 15:case"end":return d.stop()}}))}function $(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():j(t[0],e).then((function(){return $(t.slice(1),e)}))}function j(t,e){var n;return(n=2===t.length?new Promise((function(n){t(e,(function(t,data){t&&e.error(t),n(data=data||{})}))})):t(e))&&n instanceof Promise&&"function"==typeof n.then?n:Promise.resolve(n)}function R(base,t){var path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}function E(t,e){return function(t){for(var e=new Array(t.length),i=0;i<t.length;i++)"object"===Object(o.a)(t[i])&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(n,r){for(var path="",data=n||{},o=(r||{}).pretty?N:encodeURIComponent,c=0;c<t.length;c++){var l=t[c];if("string"!=typeof l){var f=data[l.name||"pathMatch"],d=void 0;if(null==f){if(l.optional){l.partial&&(path+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(Array.isArray(f)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(d=o(f[h]),!e[c].test(d))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(d)+"`");path+=(0===h?l.prefix:l.delimiter)+d}}else{if(d=l.asterisk?N(f,!0):o(f),!e[c].test(d))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+d+'"');path+=l.prefix+d}}else path+=l}return path}}(function(t,e){var n,r=[],o=0,c=0,path="",l=e&&e.delimiter||"/";for(;null!=(n=P.exec(t));){var f=n[0],d=n[1],h=n.index;if(path+=t.slice(c,h),c=h+f.length,d)path+=d[1];else{var m=t[c],x=n[2],v=n[3],y=n[4],w=n[5],_=n[6],C=n[7];path&&(r.push(path),path="");var k=null!=x&&null!=m&&m!==x,O="+"===_||"*"===_,$="?"===_||"*"===_,j=n[2]||l,pattern=y||w;r.push({name:v||o++,prefix:x||"",delimiter:j,optional:$,repeat:O,partial:k,asterisk:Boolean(C),pattern:pattern?D(pattern):C?".*":"[^"+A(j)+"]+?"})}}c<t.length&&(path+=t.substr(c));path&&r.push(path);return r}(t,e))}function T(t,e){var n={},r=d({},t,{},e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function S(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return d({},t,{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var P=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function N(t,e){var n=e?/[?#]/g:/[/?#]/g;return encodeURI(t).replace(n,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function A(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function D(t){return t.replace(/([=!:$/()])/g,"\\$1")}function L(t,e){var n,o=t.indexOf("://");-1!==o?(n=t.substring(0,o),t=t.substring(o+3)):t.startsWith("//")&&(t=t.substring(2));var c,l=t.split("/"),f=(n?n+"://":"//")+l.shift(),path=l.filter(Boolean).join("/");if(2===(l=path.split("#")).length){var d=l,h=Object(r.a)(d,2);path=h[0],c=h[1]}return f+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(f+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map((function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map((function(t){return[e,"=",t].join("")})).join("&"):e+"="+n})).filter(Boolean).join("&")}(e)),f+=c?"#"+c:""}},83:function(t,e,n){"use strict";e.a={}}},[[124,7,1,8]]]);