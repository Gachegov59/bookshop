(function(t){function a(a){for(var s,c,n=a[0],i=a[1],l=a[2],d=0,p=[];d<n.length;d++)c=n[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);u&&u(a);while(p.length)p.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,n=1;n<e.length;n++){var i=e[n];0!==o[i]&&(s=!1)}s&&(r.splice(a--,1),t=c(c.s=e[0]))}return t}var s={},o={app:0},r=[];function c(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=s,c.d=function(t,a,e){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)c.d(e,s,function(a){return t[a]}.bind(null,s));return e},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="/vue/dist/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],i=n.push.bind(n);n.push=a,n=n.slice();for(var l=0;l<n.length;l++)a(n[l]);var u=i;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},2922:function(t,a,e){"use strict";var s=e("78b8"),o=e.n(s);o.a},"2f61":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},r=[],c={name:"App",components:{}},n=c,i=(e("5c0b"),e("2877")),l=Object(i["a"])(n,o,r,!1,null,null,null),u=l.exports,d=(e("d81d"),e("a434"),e("2f62")),p=e("bc3a"),f=e.n(p),h=e("8aa5"),_=e.n(h),m={apiKey:"AIzaSyCGKRiQkezoErkEh3ErDtZWyDVRVAiXviA",authDomain:"bookshop-vue.firebaseapp.com",databaseURL:"https://bookshop-vue.firebaseio.com",projectId:"bookshop-vue",storageBucket:"bookshop-vue.appspot.com",messagingSenderId:"708577434205",appId:"1:708577434205:web:b7e90fda7314bc58ed4bb4",measurementId:"G-K565FZB08T"};_.a.initializeApp(m),_.a.analytics(),s["default"].use(d["a"]);var b=new d["a"].Store({state:{products:[],cart:[],cnt:0},mutations:{SET_PRODUCTS_TO_STATE:function(t,a){var e=a.data.data.books.map((function(t){var a=Object.assign({},t);return a.showDescription=!0,a.quantity=0,a}));s["default"].set(a,"q",1),t.products=e},SET_PRODUCTS_TO_STATE_FIREBASE:function(t,a){var e=a.map((function(t){var a=Object.assign({},t);return a.showDescription=!0,a.quantity=0,a}));s["default"].set(a,"q",1),t.products=e},SET_CART:function(t,a){if(t.cart.length){var e=!1;t.cart.map((function(t){t.id===a.id&&(e=!0,t.quantity++)})),e||(t.cart.push(a),t.cart[t.cart.length-1].quantity++)}else t.cart.push(a),t.cart[0].quantity++},DELETE_FROM_CART:function(t,a){for(var e=0;e<t.cart.length;e++)t.cart[e].id===a.id&&(t.cart[e].quantity<=1?(t.cart[e].quantity--,t.cart.splice(e,1)):t.cart[e].quantity--)}},actions:{GET_PRODUCTS_FROM_API:function(t){var a=t.commit;return f()("http://81.163.30.135/api/books",{method:"GET"}).then((function(t){return console.log("axios",t.data),a("SET_PRODUCTS_TO_STATE",t),t})).catch((function(t){return console.log(t),t}))},GET_PRODUCTS_FROM_FIREBASE:function(t){var a=t.commit,e=_.a.database(),s=e.ref("products");s.on("value",(function(t){var e=t.val();a("SET_PRODUCTS_TO_STATE_FIREBASE",e)}))},ADD_BOOK:function(t,a){var e=t.commit;e("SET_CART",a),console.log("addboock product",a.id)},REMOVE_BOOK:function(t,a){var e=t.commit;e("DELETE_FROM_CART",a)}},getters:{PRODUCTS:function(t){return t.products},CNT:function(t){return t.cnt},CART:function(t){return t.cart}},modules:{}}),v=e("8c4f"),g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"_flex-wrap"},[e("AppHeader"),e("AppContent"),e("AppFooter")],1)},C=[],O=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"header",class:t.letsScroll&&"_scrolled",on:{scroll:function(a){t.letsScroll=!0}}},[e("div",{staticClass:"container"},[e("div",{staticClass:"header__wrap"},[e("div",{staticClass:"header__wrap-block"},[e("div",{staticClass:"header__logo"},[e("router-link",{attrs:{to:{name:"catalog"}}},[e("svg",{attrs:{id:"Capa_1",width:"350",height:"200",viewBox:"0 0 600 440",xmlns:"http://www.w3.org/2000/svg"}},[e("g",[e("g",[e("path",{attrs:{d:"m494.783 60.298c1.42 0 2.571 1.151 2.571 2.571v375.921c0 1.42-1.151 2.57-2.571 2.57h-492.212c-1.42 0-2.571-1.151-2.571-2.57v-375.921c0-1.42 1.151-2.571 2.571-2.571z",fill:"#a6e7f0"}})]),e("g",[e("path",{attrs:{d:"m20.167 60.298v336.91c0 14.678 11.937 26.619 26.609 26.619h170.57c11.096 0 21.789-3.14 30.985-8.98 9.207 5.828 19.912 8.98 30.935 8.98h171.311c14.673 0 26.609-11.941 26.609-26.619v-336.91z",fill:"#6bd9e7"}}),e("path",{attrs:{d:"m246.707 48.457c-8.99-8.99-21.18-14.04-33.9-14.04h-166.03c-3.65 0-6.61 2.96-6.61 6.61v356.18c0 3.65 2.96 6.62 6.61 6.62h170.57c9.67 0 18.97-3.7 26-10.33l4.78-4.5 23.793-47.454v-270.646z",fill:"#efedef"}}),e("g",[e("g",[e("g",{attrs:{id:"XMLID_482_"}},[e("g",[e("path",{attrs:{d:"m457.187 41.028v356.18c0 3.65-2.96 6.62-6.61 6.62h-171.31c-9.22 0-18.13-3.37-25.05-9.47l-6.09-5.36.55-338.57 1.97-1.97c8.09-8.1 18.79-12.99 30.13-13.88l169.8-.16c3.65 0 6.61 2.96 6.61 6.61z",fill:"#f9f7f8"}})])])])]),e("path",{attrs:{d:"m354.982 469.994-20.313-9.569-20.313 9.569c-1.666.785-3.582-.431-3.582-2.272v-434.344c0-3.457 2.803-6.26 6.26-6.26h35.269c3.457 0 6.26 2.803 6.26 6.26v434.344c.001 1.841-1.915 3.057-3.581 2.272z",fill:"#fd8087"}}),e("g",[e("path",{attrs:{d:"m213.323 116.423h-136.233c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h136.233c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m213.323 161.484h-83.312c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h83.312c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m213.323 206.546h-136.233c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h136.233c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m213.323 251.608h-136.233c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h136.233c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m167.214 296.67h-90.124c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h90.124c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m213.323 341.731h-136.233c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h136.233c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m97.526 161.484h-20.436c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h20.436c4.143 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m213.323 296.67h-15.72c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h15.72c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m421.263 116.422h-30.192c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h30.192c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#efedef"}})]),e("g",[e("g",[e("path",{attrs:{d:"m421.263 161.483h-30.192c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h30.192c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#efedef"}})])]),e("g",[e("g",[e("path",{attrs:{d:"m421.263 206.546h-30.192c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h30.192c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#efedef"}})])]),e("g",[e("g",[e("path",{attrs:{d:"m421.263 251.607h-30.192c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h30.192c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#efedef"}})])]),e("g",[e("path",{attrs:{d:"m421.263 341.73h-30.192c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h30.192c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#efedef"}})]),e("g",[e("g",[e("path",{attrs:{d:"m421.263 296.669h-30.192c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h30.192c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#efedef"}})])])])])])]),e("div",{staticClass:"header__logo-content"},[e("h1",{staticClass:"header__title"},[e("span",[t._v("book")]),t._v("shop"),e("router-link",{attrs:{to:{name:"seller"}}},[e("span",{staticClass:"user"},[e("fa-icon",{attrs:{icon:"user-alt"}})],1)])],1),e("a",{staticClass:"header__phone",attrs:{href:"tel:+79128888888"}},[t._v("8912888888")])])],1)]),e("div",{staticClass:"header__wrap-block"},[t._v(t._s(t.route())),e("cart",{directives:[{name:"show",rawName:"v-show",value:"/vue/"===this.path||"/vue"===this.path||"/"===this.path,expression:"this.path === '/vue/' || this.path === '/vue' || this.path === '/'"}],attrs:{cart_data:t.CART}})],1)])])])},k=[],y=e("5530"),T=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cart"},[e("fa-layer",{staticClass:"cart__basket"},[e("fa-icon",{attrs:{icon:"shopping-cart"},on:{click:t.openCard}}),t.cart_data.length?e("span",[t._v(t._s(this.quantity)+" "+t._s(t.getSumm()))]):t._e()],1),t.cart_data.length?e("div",{staticClass:"cart__popup",class:{_isOpen:t.cardOpen}},[e("div",{staticClass:"cart__wrap scroll"},t._l(t.cart_data,(function(a,s){return e("cartPopupItem",{key:s,staticClass:"border-bottom",attrs:{cart_item:a},on:{removeBook:t.removeBook,addBook:t.addBook}})})),1),e("div",{staticClass:"cart__btns"},[e("div",{staticClass:"cart__btn"},[e("router-link",{attrs:{to:{name:"order",params:{cart_data:t.CART}}}},[e("btn",{staticClass:"btn _btn-outline"},[t._v("Купить: "),e("span",{staticClass:"cart__price"},[t._v(" "+t._s(this.sum)+" ")]),e("fa-icon",{attrs:{icon:"ruble-sign"}})],1)],1)],1),e("div",{staticClass:"cart__close",on:{click:t.openCard}},[e("btn",{staticClass:"btn _btn-outline"},[t._v(" Закрыть")])],1),e("example")],1)]):t._e()],1)},w=[],E=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{key:t.cart_item.id,staticClass:"cart__popup-item"},[e("img",{attrs:{src:t.cart_item.picture}}),e("div",{staticClass:"cart__popup-content"},[e("div",{staticClass:"cart__popup-title"},[t._v(" "+t._s(t.cart_item.title))]),e("div",{staticClass:"cart__popup-author"},[t._v(" "+t._s(t.cart_item.author))]),e("div",{staticClass:"cart__popup-price"},[t._v(" "+t._s(t.cart_item.price)),e("fa-icon",{attrs:{icon:"ruble-sign"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:t.cart_item.quantity>0,expression:"cart_item.quantity>0"}]},[t._v(" - "+t._s(t.cart_item.quantity)+" шт.")])],1),e("div",{staticClass:"cart__popup-controls"},[e("div",{staticClass:"cart__popup-btn"},[e("fa-icon",{attrs:{icon:"minus"},on:{click:t.removeInCart}})],1),e("div",{staticClass:"cart__popup-btn"},[e("fa-icon",{attrs:{icon:"plus"},on:{click:t.addInCart}})],1)])])])},A=[],B={name:"cartPopupItem",components:{},data:function(){return{}},props:{cart_item:{type:Object,default:function(){return[]}}},computed:{logStateProducts:function(){return console.log("state.products",this.$store.state.products)},logStateCartArr:function(){return console.log("state.artArr",this.$store.state.cartArr)}},methods:{removeInCart:function(){this.$emit("removeBook",this.cart_item,this.cart_item.id),console.log("this.cart_item.id",this.cart_item.id)},addInCart:function(){this.$emit("addBook",this.cart_item,this.cart_item.id)}},mounted:function(){}},R=B,S=(e("dffc"),Object(i["a"])(R,E,A,!1,null,null,null)),x=S.exports,j=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div")},z=[],D={name:"popupOrder"},P=D,$=Object(i["a"])(P,j,z,!1,null,"70525137",null),q=$.exports,I=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"btn"},[t._t("default",[t._v("Button")])],2)},M=[],K={name:"btn"},F=K,U=Object(i["a"])(F,I,M,!1,null,"7ea96b15",null),V=U.exports,G={name:"cart",components:{cartPopupItem:x,btn:V,example:q},data:function(){return{sum:0,quantity:0,cardOpen:!1}},props:{cart_data:{type:Array,default:function(){return[]}}},computed:Object(y["a"])(Object(y["a"])({},Object(d["c"])(["CART"])),{},{log:function(){return console.log("log",this.$store.state.cartArr)}}),methods:Object(y["a"])(Object(y["a"])({},Object(d["b"])(["ADD_BOOK","REMOVE_BOOK"])),{},{removeBook:function(t,a){this.REMOVE_BOOK(t,a)},addBook:function(t,a){this.ADD_BOOK(t,a)},getSumm:function(){for(var t=0,a=0,e=0;e<this.CART.length;e++)t+=this.CART[e].quantity,a+=this.CART[e].quantity*this.CART[e].price;this.quantity=t,this.sum=a},openCard:function(){return this.cardOpen=!this.cardOpen}})},H=G,L=(e("65e1"),Object(i["a"])(H,T,w,!1,null,null,null)),N=L.exports,X={components:{cart:N,btn:V},data:function(){return{path:"/vue/"}},computed:Object(y["a"])({},Object(d["c"])(["CART"])),methods:{route:function(){this.path=this.$route.path}}},J=X,W=(e("2922"),Object(i["a"])(J,O,k,!1,null,null,null)),Z=W.exports,Q=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",[e("div",{staticClass:"container py-0"},[e("filters",{on:{sort:t.sort}})],1),e("div",{staticClass:"container"},[e("div",{staticClass:"items"},t._l(t.filteredProduct,(function(a,s){return e("book",{key:s,attrs:{book_data:a},on:{addBook:t.addBook,removeBook:t.removeBook}})})),1)])])},Y=[],tt=(e("fb6a"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{key:t.book_data.id,staticClass:"card",class:{_active:t.book_data.quantity>0}},[e("div",{staticClass:"card__inner"},[e("img",{attrs:{src:t.book_data.picture}}),t.book_data.quantity>0?e("span",{staticClass:"card__btn-quantity"},[t._v(t._s(t.book_data.quantity))]):t._e(),e("div",{staticClass:"card__btn",class:{_show:t.book_data.quantity>0}},[t.book_data.quantity>0?e("div",{staticClass:"card__btn-block"},[e("span",{staticClass:"card__btn-remove"},[t.book_data.quantity?e("fa-icon",{attrs:{icon:"minus"},on:{click:t.removeInCart}}):t._e()],1)]):t._e(),e("div",{staticClass:"card__btn-block"},[t.book_data.quantity<1?e("span",{staticClass:"card__btn-add"},[e("fa-icon",{attrs:{icon:"cart-arrow-down"},on:{click:t.addInCart}})],1):e("span",{staticClass:"card__btn-add"},[e("fa-icon",{attrs:{icon:"cart-plus"},on:{click:t.addInCart}})],1)])])]),e("div",{staticClass:"card__content"},[e("div",{staticClass:"card__title",attrs:{title:t.book_data.title}},[t._v(t._s(t.book_data.title))]),e("div",{staticClass:"card__author",attrs:{title:t.book_data.author}},[t._v(t._s(t.book_data.author))])]),e("div",{staticClass:"card__price"},[e("div",{staticClass:"fa fa-rub"},[t._v(t._s(t.book_data.price))]),e("fa-icon",{staticClass:"ml-1",attrs:{icon:"ruble-sign"}})],1)])}),at=[],et={name:"book",data:function(){return{num:!0}},components:{},props:{book_data:{type:Object,default:function(){return{}}}},computed:{},methods:{addInCart:function(){this.$emit("addBook",this.book_data)},removeInCart:function(){this.$emit("removeBook",this.book_data,this.book_data.id)}}},st=et,ot=(e("ac73"),Object(i["a"])(st,tt,at,!1,null,"f7ce8d20",null)),rt=ot.exports,ct=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"filters"},[e("ul",{staticClass:"filters__list"},[e("li",{class:{_active:"all"===this.active},attrs:{title:t.all},on:{click:function(a){return t.sort("all")}}},[e("button",{staticClass:"btn btn-btn-light"},[t._v("По умолчанию")])]),e("li",{class:{_active:"low"===this.active},attrs:{title:t.low},on:{click:function(a){return t.sort("low")}}},[e("button",{staticClass:"btn btn-btn-light"},[t._v("Цена: "),e("fa-icon",{attrs:{icon:"long-arrow-alt-down"}})],1)]),e("li",{class:{_active:"high"===this.active},attrs:{title:t.high},on:{click:function(a){return t.sort("high")}}},[e("button",{staticClass:"btn btn-btn-light"},[t._v("Цена: "),e("fa-icon",{attrs:{icon:"long-arrow-alt-up"}})],1)])]),e("div",{staticClass:"filters__search"},[e("div",{staticClass:"input-group"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Введите название..","aria-label":"Amount (to the nearest dollar)"}}),e("div",{staticClass:"input-group-append"},[e("span",{staticClass:"input-group-text"},[e("fa-icon",{attrs:{icon:"search"}})],1)])])])])},nt=[],it={name:"filters",data:function(){return{low:"дешевле",high:"дороже",all:"всe",active:"all"}},components:{},methods:{sort:function(t){this.$emit("sort",t),this.active=t}}},lt=it,ut=(e("9f30"),Object(i["a"])(lt,ct,nt,!1,null,null,null)),dt=ut.exports,pt=e("6c42");s["default"].use(pt["a"],{transition:"Vue-Toastification__bounce",maxToasts:3,newestOnTop:!0,position:"top-right",timeout:2e3,closeOnClick:!0,pauseOnFocusLoss:!1,draggable:!0,pauseOnHover:!0,draggablePercent:.7,showCloseButtonOnHover:!1,hideProgressBar:!1,closeButton:"button",icon:!0,rtl:!1});var ft={data:function(){return{productSort:[]}},components:{book:rt,filters:dt,toastification:void 0},computed:Object(y["a"])(Object(y["a"])({},Object(d["c"])(["PRODUCTS","CART"])),{},{filteredProduct:function(){return this.productSort.length?this.productSort:this.PRODUCTS}}),methods:Object(y["a"])(Object(y["a"])({},Object(d["b"])(["GET_PRODUCTS_FROM_API","ADD_BOOK","REMOVE_BOOK"])),{},{addBook:function(t,a){var e=this;this.ADD_BOOK(t,a),f()("http://81.163.30.135/api/cart",{method:"PUT",body:{bookId:t.id,count:t.quantity}}).then((function(t){200===t.status?e.$toast.warning(t.data.message,{icon:"cart-plus"}):e.$toast.success(t.data.message,{icon:"cart-plus"}),console.log(t)})).catch((function(t){return console.log("error",t),t.response,t}))},removeBook:function(t,a){this.REMOVE_BOOK(t,a)},sort:function(t){var a=this.PRODUCTS.slice();"low"===t&&(this.productSort=a.sort((function(t,a){return t.price-a.price}))),"high"===t&&(this.productSort=a.sort((function(t,a){return a.price-t.price}))),"all"===t&&(this.productSort=this.PRODUCTS)},showToast:function(){this.$notify({group:"foo",text:"Wrong password, please try again later"})}}),mounted:function(){this.GET_PRODUCTS_FROM_API().then((function(t){}))}},ht=ft,_t=(e("75a5"),Object(i["a"])(ht,Q,Y,!1,null,null,null)),mt=_t.exports,bt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"footer__wrap"},[e("div",{staticClass:"footer__copyright"},[e("div",{staticClass:"footer__copyright-item"},[t._v("Frontend"),e("div",{staticClass:"footer__copyright-name"},[e("fa-icon",{staticClass:"icon alt text-success",attrs:{icon:["fab","vuejs"]}}),e("span",[t._v("Александр Гачегов")])],1)]),e("div",{staticClass:"footer__copyright-item"},[t._v("Backend"),e("div",{staticClass:"footer__copyright-name"},[e("fa-icon",{staticClass:"icon alt text-dark",attrs:{icon:["fab","node"]}}),e("span",[t._v("Игорь Матвиенко")])],1)])])])])])},vt=[],gt={name:"AppFooter"},Ct=gt,Ot=(e("f331"),Object(i["a"])(Ct,bt,vt,!1,null,"33433a08",null)),kt=Ot.exports,yt=e("3f08"),Tt={name:"catalog",data:function(){return{}},components:{AppHeader:Z,AppContent:mt,AppFooter:kt,Fragment:yt["a"]}},wt=Tt,Et=Object(i["a"])(wt,g,C,!1,null,"3878eddb",null),At=Et.exports,Bt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"row mt-2"},[e("div",{staticClass:"col-12 col-md-8"},[t.cart_data.length?e("h2",[t._v("Итог: "+t._s(this.sum)+" руб. "+t._s(t.getSumm()))]):t._e(),e("div",{staticClass:"cart__wrap _order"},t._l(t.cart_data,(function(a,s){return e("cartPopupItem",{key:s,staticClass:"border-bottom",attrs:{cart_item:a},on:{removeBook:t.removeBook,addBook:t.addBook}})})),1),e("router-link",{attrs:{to:{name:"catalog"}}},[e("btn",{staticClass:"btn _btn-outline mt-2"},[t._v("Назад")])],1)],1)])])},Rt=[],St={name:"order",components:{cartPopupItem:x,btn:V},data:function(){return{sum:0,quantity:0}},props:{cart_data:{type:Array,default:function(){return[]}}},computed:Object(y["a"])({},Object(d["c"])(["CART"])),methods:Object(y["a"])(Object(y["a"])({},Object(d["b"])(["ADD_BOOK","REMOVE_BOOK"])),{},{removeBook:function(t,a){this.REMOVE_BOOK(t,a),console.log("REMOVE_BOOK(i)",a)},addBook:function(t,a){this.ADD_BOOK(t,a)},getSumm:function(){for(var t=0,a=0,e=0;e<this.CART.length;e++)t+=this.CART[e].quantity,a+=this.CART[e].quantity*this.CART[e].price;this.quantity=t,this.sum=a},openCard:function(){return this.cardOpen=!this.cardOpen}})},xt=St,jt=Object(i["a"])(xt,Bt,Rt,!1,null,"24ba0df7",null),zt=jt.exports,Dt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("AppHeader"),e("div",{staticClass:"container mt-2"},[e("router-link",{attrs:{to:{name:"catalog"}}},[e("btn",{staticClass:"btn _btn-outline"},[t._v("В каталог")])],1)],1),e("pageEdditBooks")],1)},Pt=[],$t=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"container"},[e("h2",{staticClass:"mt-2"},[t._v("Книги")]),e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col-12 col-md-8"},[[e("div",{staticClass:"accordion",attrs:{role:"tablist"}},[e("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[e("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":!0}}],attrs:{block:""}},[t._v("Добавить книгу")])],1),e("b-collapse",{attrs:{id:"accordion-1",visible:"",accordion:"my-accordion",role:"tabpanel"}},[e("b-card-body",[e("b-card-text",[[e("b-form",{staticClass:"form",on:{submit:function(t){t.preventDefault()}}},[e("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Название книги","label-for":"title"},model:{value:t.title,callback:function(a){t.title=a},expression:"title"}},[e("b-form-input",{attrs:{id:"title"},model:{value:t.title,callback:function(a){t.title=a},expression:"title"}})],1),e("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Автор","label-for":"author"},model:{value:t.author,callback:function(a){t.author=a},expression:"author"}},[e("b-form-input",{attrs:{id:"author"},model:{value:t.author,callback:function(a){t.author=a},expression:"author"}})],1),e("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Цена","label-for":"price"},model:{value:t.price,callback:function(a){t.price=a},expression:"price"}},[e("b-form-input",{attrs:{id:"price"},model:{value:t.price,callback:function(a){t.price=a},expression:"price"}})],1),e("b-form-group",[e("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Путь картинки:","label-for":"url"},model:{value:t.url,callback:function(a){t.url=a},expression:"url"}},[e("b-form-input",{attrs:{id:"url"},model:{value:t.url,callback:function(a){t.url=a},expression:"url"}})],1),[e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-8"},[e("b-form-file",{attrs:{state:Boolean(t.file1),placeholder:"Выберите файл или перетащите сюда ....","drop-placeholder":"перетащите сюда..."},model:{value:t.file1,callback:function(a){t.file1=a},expression:"file1"}}),e("div",{staticClass:"mt-3"},[t._v("Selected file: "+t._s(t.file1?t.file1.name:""))])],1)])]),e("div",{staticClass:"mt-2"},[e("b-button",{staticClass:"btn _btn-outline mr-2",attrs:{type:"submit",variant:"primary"},on:{click:t.addbookAPI}},[t._v("Submit")]),e("b-button",{staticClass:"btn _btn-close",attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1)]],2)],1)]],2)],1)],1)],1),e("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[e("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-2",modifiers:{"accordion-2":!0}}],attrs:{block:""}},[t._v("Удалить книгу")])],1),e("b-collapse",{attrs:{id:"accordion-2",accordion:"my-accordion",role:"tabpanel"}},[e("b-card-body",[e("b-card-text",[e("b-form",{staticClass:"form",on:{submit:function(t){t.preventDefault()}}},[e("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"ID книги","label-for":"title"},model:{value:t.title,callback:function(a){t.title=a},expression:"title"}},[e("b-form-input",{attrs:{id:"title"},model:{value:t.id,callback:function(a){t.id=a},expression:"id"}}),e("div",{staticClass:"mt-2"},[e("b-button",{staticClass:"btn _btn-outline mr-2",attrs:{type:"submit",variant:"primary"},on:{click:t.deleteBoock}},[t._v("Submit")]),e("b-button",{staticClass:"btn _btn-close",attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1)],1)],1)],1)],1)],1)],1)],1)]],2)])])])},qt=[],It={name:"edditBooks",data:function(){return{title:"",author:"",url:"",price:null,file1:null,file2:null,id:null}},components:{toastification:void 0,AppFooter:kt},methods:{addbookAPI:function(){var t=this;f()("http://81.163.30.135/api/books",{method:"POST",data:{title:this.title,author:this.author,picture:this.url,price:this.price}}).then((function(a){200===a.status?t.$toast.warning(a.data.message,{icon:"cart-plus"}):t.$toast.success(a.data.message,{icon:"cart-plus"}),console.log(a)})).catch((function(a){return t.$toast.error(a,{icon:"cart-plus"}),console.log(a),a}))},deleteBoock:function(){var t=this;f.a.delete("http://81.163.30.135/api/books/".concat(this.id)).then((function(a){200===a.status?t.$toast.warning(a.data.message,{icon:"cart-plus"}):t.$toast.success(a.data.message,{icon:"cart-plus"}),console.log(a)})).catch((function(a){return t.$toast.error(a.data.message,{icon:"cart-plus"}),console.log(a),a}))}}},Mt=It,Kt=(e("cf31"),Object(i["a"])(Mt,$t,qt,!1,null,"32274614",null)),Ft=Kt.exports,Ut={name:"seller",components:{AppHeader:Z,AppContent:mt,pageEdditBooks:Ft,btn:V}},Vt=Ut,Gt=Object(i["a"])(Vt,Dt,Pt,!1,null,"27cb0ee4",null),Ht=Gt.exports,Lt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"page-home"},[e("router-link",{attrs:{to:{name:"catalog"}}},[e("svg",{attrs:{id:"Capa_1",width:"350",height:"200",viewBox:"0 0 600 440",xmlns:"http://www.w3.org/2000/svg"}},[e("g",[e("g",[e("path",{attrs:{d:"m494.783 60.298c1.42 0 2.571 1.151 2.571 2.571v375.921c0 1.42-1.151 2.57-2.571 2.57h-492.212c-1.42 0-2.571-1.151-2.571-2.57v-375.921c0-1.42 1.151-2.571 2.571-2.571z",fill:"#a6e7f0"}})]),e("g",[e("path",{attrs:{d:"m20.167 60.298v336.91c0 14.678 11.937 26.619 26.609 26.619h170.57c11.096 0 21.789-3.14 30.985-8.98 9.207 5.828 19.912 8.98 30.935 8.98h171.311c14.673 0 26.609-11.941 26.609-26.619v-336.91z",fill:"#6bd9e7"}}),e("path",{attrs:{d:"m246.707 48.457c-8.99-8.99-21.18-14.04-33.9-14.04h-166.03c-3.65 0-6.61 2.96-6.61 6.61v356.18c0 3.65 2.96 6.62 6.61 6.62h170.57c9.67 0 18.97-3.7 26-10.33l4.78-4.5 23.793-47.454v-270.646z",fill:"#efedef"}}),e("g",[e("g",[e("g",{attrs:{id:"XMLID_482_"}},[e("g",[e("path",{attrs:{d:"m457.187 41.028v356.18c0 3.65-2.96 6.62-6.61 6.62h-171.31c-9.22 0-18.13-3.37-25.05-9.47l-6.09-5.36.55-338.57 1.97-1.97c8.09-8.1 18.79-12.99 30.13-13.88l169.8-.16c3.65 0 6.61 2.96 6.61 6.61z",fill:"#f9f7f8"}})])])])]),e("path",{attrs:{d:"m354.982 469.994-20.313-9.569-20.313 9.569c-1.666.785-3.582-.431-3.582-2.272v-434.344c0-3.457 2.803-6.26 6.26-6.26h35.269c3.457 0 6.26 2.803 6.26 6.26v434.344c.001 1.841-1.915 3.057-3.581 2.272z",fill:"#fd8087"}}),e("g",[e("path",{attrs:{d:"m213.323 116.423h-136.233c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h136.233c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m213.323 161.484h-83.312c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h83.312c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m213.323 206.546h-136.233c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h136.233c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m213.323 251.608h-136.233c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h136.233c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m167.214 296.67h-90.124c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h90.124c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m213.323 341.731h-136.233c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h136.233c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m97.526 161.484h-20.436c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h20.436c4.143 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m213.323 296.67h-15.72c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h15.72c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m421.263 116.422h-30.192c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h30.192c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#efedef"}})]),e("g",[e("g",[e("path",{attrs:{d:"m421.263 161.483h-30.192c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h30.192c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#efedef"}})])]),e("g",[e("g",[e("path",{attrs:{d:"m421.263 206.546h-30.192c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h30.192c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#efedef"}})])]),e("g",[e("g",[e("path",{attrs:{d:"m421.263 251.607h-30.192c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h30.192c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#efedef"}})])]),e("g",[e("path",{attrs:{d:"m421.263 341.73h-30.192c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h30.192c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#efedef"}})]),e("g",[e("g",[e("path",{attrs:{d:"m421.263 296.669h-30.192c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h30.192c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#efedef"}})])])])])])])],1),t._m(0)])},Nt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-not"},[e("h1",[t._v("4"),e("span",[t._v("0")]),t._v("4")]),e("p",[t._v(" тут нет ничего")])])}],Xt={name:"404"},Jt=Xt,Wt=(e("60c4"),Object(i["a"])(Jt,Lt,Nt,!1,null,"184a4732",null)),Zt=Wt.exports;s["default"].use(v["a"]);var Qt=new v["a"]({mode:"history",routes:[{path:"*",component:Zt},{path:"/vue/",name:"catalog",component:At},{path:"/vue/order",name:"order",component:zt,props:!0},{path:"/vue/seller",name:"seller",component:Ht}]}),Yt=Qt,ta=e("ecee"),aa=e("ad3d"),ea=e("c074"),sa=e("f2d1");ta["c"].add(ea["q"],ea["m"],ea["j"],ea["c"],ea["o"],ea["n"],ea["d"],ea["e"],ea["k"],ea["f"],ea["g"],ea["l"],ea["h"],ea["a"],ea["b"],ea["p"],ea["i"],sa["a"],sa["b"],sa["c"]),s["default"].component("fa-icon",aa["a"]),s["default"].component("fab-icon",aa["a"]),s["default"].component("fa-layer",aa["b"]),s["default"].component("fa-layer-text",aa["c"]);var oa=e("5f5b"),ra=e("a7fe"),ca=e.n(ra),na=e("1881"),ia=e.n(na);s["default"].use(oa["a"],ca.a,yt["b"],ia.a),new s["default"]({store:b,router:Yt,render:function(t){return t(u)}}).$mount("#app"),s["default"].config.productionTip=!1},"5c0b":function(t,a,e){"use strict";var s=e("9c0c"),o=e.n(s);o.a},"5d05":function(t,a,e){},"60c4":function(t,a,e){"use strict";var s=e("5d05"),o=e.n(s);o.a},"65e1":function(t,a,e){"use strict";var s=e("e8f8"),o=e.n(s);o.a},"697f":function(t,a,e){},"75a5":function(t,a,e){"use strict";var s=e("d722"),o=e.n(s);o.a},"78b8":function(t,a,e){},8054:function(t,a,e){},"9c0c":function(t,a,e){},"9f30":function(t,a,e){"use strict";var s=e("2f61"),o=e.n(s);o.a},ac73:function(t,a,e){"use strict";var s=e("c35d"),o=e.n(s);o.a},c35d:function(t,a,e){},cf31:function(t,a,e){"use strict";var s=e("697f"),o=e.n(s);o.a},d722:function(t,a,e){},dfe1:function(t,a,e){},dffc:function(t,a,e){"use strict";var s=e("8054"),o=e.n(s);o.a},e8f8:function(t,a,e){},f331:function(t,a,e){"use strict";var s=e("dfe1"),o=e.n(s);o.a}});
//# sourceMappingURL=app.d0a6f61c.js.map