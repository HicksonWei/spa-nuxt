webpackJsonp([0],{"/TYz":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("iEFF"),a=e("Pmg7"),o=!1;var s=function(t){o||(e("1LDR"),e("JBHn"))},r=e("VU/8")(n.a,a.a,!1,s,"data-v-1b011d9c",null);r.options.__file="pages\\index.vue",i.default=r.exports},"1LDR":function(t,i,e){var n=e("69Bg");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("496af71c",n,!1,{sourceMap:!1})},"69Bg":function(t,i,e){(t.exports=e("FZ+f")(!1)).push([t.i,".app,body,html{padding:0;margin:0;font-family:Arial;color:#123}",""])},"9uJD":function(t,i,e){var n=e("nS2V");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("6e204594",n,!1,{sourceMap:!1})},AAwP:function(t,i,e){"use strict";var n=e("YE5h"),a=e("XAzV"),o=!1;var s=function(t){o||e("9uJD")},r=e("VU/8")(n.a,a.a,!1,s,"data-v-704672e7",null);r.options.__file="components\\Menu.vue",i.a=r.exports},JBHn:function(t,i,e){var n=e("zDIU");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("54c008f2",n,!1,{sourceMap:!1})},Pmg7:function(t,i,e){"use strict";var n=function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"app"},[i("Menu"),i("div",{staticClass:"cover"}),i("div",{staticClass:"content"},[i("nuxt-child"),this.status?i("h2",[this._v("Please choose the upper items")]):this._e()],1),i("Footer")],1)};n._withStripped=!0;var a={render:n,staticRenderFns:[]};i.a=a},XAzV:function(t,i,e){"use strict";var n=function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"menu"},[i("div",{staticClass:"bind"},[i("h1",[this._v("SPA")]),i("div",{staticClass:"list",on:{click:this.toggle}})]),i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:this.popout,expression:"popout"}],staticClass:"link"},[i("nuxt-link",{attrs:{to:"/about"}},[this._v("About")]),i("nuxt-link",{attrs:{to:"/courses"}},[this._v("Courses")]),i("nuxt-link",{attrs:{to:"/booking"}},[this._v("Booking")])],1)])],1)};n._withStripped=!0;var a={render:n,staticRenderFns:[]};i.a=a},YE5h:function(t,i,e){"use strict";i.a={data:function(){return{popout:!1,screen:""}},mounted:function(){this.$nextTick(function(){this.screen=window.innerWidth,this.screen>700&&(this.popout=!0)});var t=this;window.onresize=function(){t.screen=window.innerWidth}},methods:{toggle:function(){return this.popout=!this.popout}},watch:{screen:function(t){if(t>700)return this.popout=!0}}}},f9Rx:function(t,i,e){"use strict";var n=function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n     Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus distinctio eligendi pariatur, blanditiis eaque fugiat aliquid cumque laudantium. Distinctio, ea?\n  ")])};n._withStripped=!0;var a={render:n,staticRenderFns:[]};i.a=a},iEFF:function(t,i,e){"use strict";var n=e("AAwP"),a=e("yqLL");i.a={data:function(){return{status:!1}},mounted:function(){var t=this.$route.name;console.log(t),"foul"!=t&&"index"!=t||(this.status=!0)},components:{Menu:n.a,Footer:a.a}}},k0ze:function(t,i,e){var n=e("xD58");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("30198eee",n,!1,{sourceMap:!1})},nS2V:function(t,i,e){(t.exports=e("FZ+f")(!1)).push([t.i,'h1[data-v-704672e7]{font-size:32px;font-size:2rem;font-family:monospace,Arial;color:#42b983}.menu[data-v-704672e7]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 80px;background-color:#fff;line-height:32px;line-height:2rem;height:80px}.list[data-v-704672e7]{display:none}a[data-v-704672e7]{display:inline-block;text-decoration:none;font-size:16px;font-size:1rem;padding:0 32px;padding:0 2rem;color:#42b983;line-height:80px;-webkit-box-sizing:border-box;box-sizing:border-box}a[data-v-704672e7]:hover{background-color:#42b983;color:#fff}a.router-link-active[data-v-704672e7]{text-shadow:1px 1px 2px #42b983}@media(max-width:700px){.list[data-v-704672e7]{display:block;background-image:url("/list.png");height:40px;width:40px;background-position:50%;background-size:cover;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;opacity:.5}.menu[data-v-704672e7]{display:block;padding:0}.bind[data-v-704672e7]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 20px}.link[data-v-704672e7]{position:absolute;top:80px;right:0}a[data-v-704672e7]{display:block;text-align:center;line-height:90px;background-color:#fff;opacity:.9}.fade-leave[data-v-704672e7]{opacity:1}.fade-leave-active[data-v-704672e7]{-webkit-transition:opacity .5s;transition:opacity .5s}.fade-enter[data-v-704672e7],.fade-leave-to[data-v-704672e7]{opacity:0}.fade-enter-active[data-v-704672e7]{-webkit-transition:opacity .5s;transition:opacity .5s}.fade-enter-to[data-v-704672e7]{opacity:1}}',""])},xD58:function(t,i,e){(t.exports=e("FZ+f")(!1)).push([t.i,"div[data-v-259cb923]{width:100%;padding:10px 80px;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:12px;font-size:.75rem;background-color:#42b983;color:#fff}@media(max-width:450px){div[data-v-259cb923]{padding:10px 40px}}",""])},yqLL:function(t,i,e){"use strict";var n=e("f9Rx"),a=!1;var o=function(t){a||e("k0ze")},s=e("VU/8")(null,n.a,!1,o,"data-v-259cb923",null);s.options.__file="components\\Footer.vue",i.a=s.exports},zDIU:function(t,i,e){(t.exports=e("FZ+f")(!1)).push([t.i,'.cover[data-v-1b011d9c]{width:100%;height:270px;background:url("/view.jpg") 50%;background-size:cover}.content[data-v-1b011d9c]{width:100%;padding:0 80px;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:calc(100vh - 422px)}@media(max-width:450px){.content[data-v-1b011d9c]{padding:0 40px}}',""])}});