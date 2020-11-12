(function(t){function a(a){for(var s,r,i=a[0],c=a[1],l=a[2],d=0,p=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(a);while(p.length)p.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,i=1;i<e.length;i++){var c=e[i];0!==o[c]&&(s=!1)}s&&(n.splice(a--,1),t=r(r.s=e[0]))}return t}var s={},o={app:0},n=[];function r(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)r.d(e,s,function(a){return t[a]}.bind(null,s));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var u=c;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0bbf":function(t,a,e){},2922:function(t,a,e){"use strict";var s=e("78b8"),o=e.n(s);o.a},"2f61":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},n=[],r={name:"App",components:{}},i=r,c=(e("5c0b"),e("2877")),l=Object(c["a"])(i,o,n,!1,null,null,null),u=l.exports,d=(e("d81d"),e("a434"),e("2f62")),p=e("bc3a"),f=e.n(p),h=e("8aa5"),_=e.n(h),m={apiKey:"AIzaSyCGKRiQkezoErkEh3ErDtZWyDVRVAiXviA",authDomain:"bookshop-vue.firebaseapp.com",databaseURL:"https://bookshop-vue.firebaseio.com",projectId:"bookshop-vue",storageBucket:"bookshop-vue.appspot.com",messagingSenderId:"708577434205",appId:"1:708577434205:web:b7e90fda7314bc58ed4bb4",measurementId:"G-K565FZB08T"};_.a.initializeApp(m),_.a.analytics(),s["default"].use(d["a"]);var v=new d["a"].Store({state:{products:[],cart:[],cnt:0},mutations:{SET_PRODUCTS_TO_STATE:function(t,a){console.log("products",a);var e=a.data.data.books.map((function(t){var a=Object.assign({},t);return a.showDescription=!0,a.quantity=0,a}));s["default"].set(a,"q",1),t.products=e},SET_PRODUCTS_TO_STATE_FIREBASE:function(t,a){var e=a.map((function(t){var a=Object.assign({},t);return a.showDescription=!0,a.quantity=0,a}));s["default"].set(a,"q",1),t.products=e},SET_CART:function(t,a){if(t.cart.length){var e=!1;t.cart.map((function(t){t.id===a.id&&(e=!0,t.quantity++)})),e||(t.cart.push(a),t.cart[t.cart.length-1].quantity++)}else t.cart.push(a),t.cart[0].quantity++},DELETE_FROM_CART:function(t,a){for(var e=0;e<t.cart.length;e++)t.cart[e].id===a.id&&(t.cart[e].quantity<=1?(t.cart[e].quantity--,t.cart.splice(e,1)):t.cart[e].quantity--)}},actions:{GET_PRODUCTS_FROM_API:function(t){var a=t.commit;return f()("http://81.163.30.135/api/books",{method:"GET"}).then((function(t){return console.log("axios",t.data),console.log(t),a("SET_PRODUCTS_TO_STATE",t),t})).catch((function(t){return console.log(t),t}))},GET_PRODUCTS_FROM_FIREBASE:function(t){var a=t.commit,e=_.a.database(),s=e.ref("products");s.on("value",(function(t){var e=t.val();a("SET_PRODUCTS_TO_STATE_FIREBASE",e)}))},ADD_BOOK:function(t,a){var e=t.commit;e("SET_CART",a),console.log("addboock product",a)},REMOVE_BOOK:function(t,a){var e=t.commit;e("DELETE_FROM_CART",a)}},getters:{PRODUCTS:function(t){return t.products},CNT:function(t){return t.cnt},CART:function(t){return t.cart}},modules:{}}),b=e("8c4f"),g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("AppHeader"),e("AppContent")],1)},C=[],O=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"header"},[e("div",{staticClass:"container"},[e("div",{staticClass:"header__wrap"},[e("div",{staticClass:"header__wrap-block"},[e("div",{staticClass:"header__logo"},[e("router-link",{attrs:{to:{name:"catalog"}}},[e("svg",{attrs:{id:"Capa_1",width:"350",height:"200",viewBox:"0 0 600 440",xmlns:"http://www.w3.org/2000/svg"}},[e("g",[e("g",[e("path",{attrs:{d:"m494.783 60.298c1.42 0 2.571 1.151 2.571 2.571v375.921c0 1.42-1.151 2.57-2.571 2.57h-492.212c-1.42 0-2.571-1.151-2.571-2.57v-375.921c0-1.42 1.151-2.571 2.571-2.571z",fill:"#a6e7f0"}})]),e("g",[e("path",{attrs:{d:"m20.167 60.298v336.91c0 14.678 11.937 26.619 26.609 26.619h170.57c11.096 0 21.789-3.14 30.985-8.98 9.207 5.828 19.912 8.98 30.935 8.98h171.311c14.673 0 26.609-11.941 26.609-26.619v-336.91z",fill:"#6bd9e7"}}),e("path",{attrs:{d:"m246.707 48.457c-8.99-8.99-21.18-14.04-33.9-14.04h-166.03c-3.65 0-6.61 2.96-6.61 6.61v356.18c0 3.65 2.96 6.62 6.61 6.62h170.57c9.67 0 18.97-3.7 26-10.33l4.78-4.5 23.793-47.454v-270.646z",fill:"#efedef"}}),e("g",[e("g",[e("g",{attrs:{id:"XMLID_482_"}},[e("g",[e("path",{attrs:{d:"m457.187 41.028v356.18c0 3.65-2.96 6.62-6.61 6.62h-171.31c-9.22 0-18.13-3.37-25.05-9.47l-6.09-5.36.55-338.57 1.97-1.97c8.09-8.1 18.79-12.99 30.13-13.88l169.8-.16c3.65 0 6.61 2.96 6.61 6.61z",fill:"#f9f7f8"}})])])])]),e("path",{attrs:{d:"m354.982 469.994-20.313-9.569-20.313 9.569c-1.666.785-3.582-.431-3.582-2.272v-434.344c0-3.457 2.803-6.26 6.26-6.26h35.269c3.457 0 6.26 2.803 6.26 6.26v434.344c.001 1.841-1.915 3.057-3.581 2.272z",fill:"#fd8087"}}),e("g",[e("path",{attrs:{d:"m213.323 116.423h-136.233c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h136.233c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m213.323 161.484h-83.312c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h83.312c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m213.323 206.546h-136.233c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h136.233c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m213.323 251.608h-136.233c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h136.233c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m167.214 296.67h-90.124c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h90.124c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m213.323 341.731h-136.233c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h136.233c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m97.526 161.484h-20.436c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h20.436c4.143 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m213.323 296.67h-15.72c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h15.72c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m421.263 116.422h-30.192c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h30.192c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#efedef"}})]),e("g",[e("g",[e("path",{attrs:{d:"m421.263 161.483h-30.192c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h30.192c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#efedef"}})])]),e("g",[e("g",[e("path",{attrs:{d:"m421.263 206.546h-30.192c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h30.192c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#efedef"}})])]),e("g",[e("g",[e("path",{attrs:{d:"m421.263 251.607h-30.192c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h30.192c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#efedef"}})])]),e("g",[e("path",{attrs:{d:"m421.263 341.73h-30.192c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h30.192c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#efedef"}})]),e("g",[e("g",[e("path",{attrs:{d:"m421.263 296.669h-30.192c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h30.192c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#efedef"}})])])])])])]),e("div",{staticClass:"header__logo-content"},[e("h1",{staticClass:"header__title"},[e("span",[t._v("book")]),t._v("shop"),e("router-link",{attrs:{to:{name:"seller"}}},[e("span",{staticClass:"user"},[e("fa-icon",{attrs:{icon:"user-alt"}})],1)])],1),e("a",{staticClass:"header__phone",attrs:{href:"tel:+79128888888"}},[t._v("8912888888")])])],1)]),e("div",{staticClass:"header__wrap-block"},[t._v(t._s(t.route())),e("cart",{directives:[{name:"show",rawName:"v-show",value:"/bookshop"===this.path||"/"===this.path,expression:"this.path === '/bookshop' || this.path === '/'"}],attrs:{cart_data:t.CART}})],1)])])])},k=[],y=e("5530"),T=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cart"},[e("fa-layer",{staticClass:"cart__basket"},[e("fa-icon",{attrs:{icon:"shopping-cart"},on:{click:t.openCard}}),t.cart_data.length?e("span",[t._v(t._s(this.quantity)+" "+t._s(t.getSumm()))]):t._e()],1),t.cart_data.length?e("div",{staticClass:"cart__popup",class:{_isOpen:t.cardOpen}},[e("div",{staticClass:"cart__wrap scroll"},t._l(t.cart_data,(function(a,s){return e("cartPopupItem",{key:s,staticClass:"border-bottom",attrs:{cart_item:a},on:{removeBook:t.removeBook,addBook:t.addBook}})})),1),e("div",{staticClass:"cart__btns"},[e("div",{staticClass:"cart__btn"},[e("router-link",{attrs:{to:{name:"order",params:{cart_data:t.CART}}}},[e("btn",{staticClass:"btn _btn-outline"},[t._v("Купить: "),e("span",{staticClass:"cart__price"},[t._v(" "+t._s(this.sum)+" ")]),e("fa-icon",{attrs:{icon:"ruble-sign"}})],1)],1)],1),e("div",{staticClass:"cart__close",on:{click:t.openCard}},[e("btn",{staticClass:"btn _btn-outline"},[t._v(" Закрыть")])],1)])]):t._e()],1)},w=[],E=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{key:t.cart_item.id,staticClass:"cart__popup-item"},[e("img",{attrs:{src:t.cart_item.picture}}),e("div",{staticClass:"cart__popup-content"},[e("div",{staticClass:"cart__popup-title"},[t._v(" "+t._s(t.cart_item.title))]),e("div",{staticClass:"cart__popup-author"},[t._v(" "+t._s(t.cart_item.author))]),e("div",{staticClass:"cart__popup-price"},[t._v(" "+t._s(t.cart_item.price)),e("fa-icon",{attrs:{icon:"ruble-sign"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:t.cart_item.quantity>0,expression:"cart_item.quantity>0"}]},[t._v(" - "+t._s(t.cart_item.quantity)+" шт.")])],1),e("div",{staticClass:"cart__popup-controls"},[e("div",{staticClass:"cart__popup-btn"},[e("fa-icon",{attrs:{icon:"minus"},on:{click:t.removeInCart}})],1),e("div",{staticClass:"cart__popup-btn"},[e("fa-icon",{attrs:{icon:"plus"},on:{click:t.addInCart}})],1)])])])},A=[],R={name:"cartPopupItem",components:{},data:function(){return{}},props:{cart_item:{type:Object,default:function(){return[]}}},computed:{logStateProducts:function(){return console.log("state.products",this.$store.state.products)},logStateCartArr:function(){return console.log("state.artArr",this.$store.state.cartArr)}},methods:{removeInCart:function(){this.$emit("removeBook",this.cart_item,this.cart_item.id),console.log("this.cart_item.id",this.cart_item.id)},addInCart:function(){this.$emit("addBook",this.cart_item,this.cart_item.id)}},mounted:function(){}},B=R,S=(e("dffc"),Object(c["a"])(B,E,A,!1,null,null,null)),j=S.exports,z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"btn"},[t._t("default",[t._v("Button")])],2)},x=[],P={name:"btn"},D=P,q=Object(c["a"])(D,z,x,!1,null,"7ea96b15",null),I=q.exports,$={name:"cart",components:{cartPopupItem:j,btn:I},data:function(){return{sum:0,quantity:0,cardOpen:!1}},props:{cart_data:{type:Array,default:function(){return[]}}},computed:Object(y["a"])(Object(y["a"])({},Object(d["c"])(["CART"])),{},{log:function(){return console.log("log",this.$store.state.cartArr)}}),methods:Object(y["a"])(Object(y["a"])({},Object(d["b"])(["ADD_BOOK","REMOVE_BOOK"])),{},{removeBook:function(t,a){this.REMOVE_BOOK(t,a)},addBook:function(t,a){this.ADD_BOOK(t,a)},getSumm:function(){for(var t=0,a=0,e=0;e<this.CART.length;e++)t+=this.CART[e].quantity,a+=this.CART[e].quantity*this.CART[e].price;this.quantity=t,this.sum=a},openCard:function(){return this.cardOpen=!this.cardOpen}})},M=$,K=(e("65e1"),Object(c["a"])(M,T,w,!1,null,null,null)),F=K.exports,U={components:{cart:F,btn:I},data:function(){return{path:"/bookshop/"}},computed:Object(y["a"])({},Object(d["c"])(["CART"])),methods:{route:function(){this.path=this.$route.path}}},V=U,G=(e("2922"),Object(c["a"])(V,O,k,!1,null,null,null)),H=G.exports,L=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",[e("div",{staticClass:"container py-0"},[e("filters",{on:{sort:t.sort}})],1),e("div",{staticClass:"container"},[e("div",{staticClass:"items"},[e("div",{staticClass:"row"},t._l(t.filteredProduct,(function(a,s){return e("book",{key:s,attrs:{book_data:a},on:{addBook:t.addBook,removeBook:t.removeBook}})})),1)])])])},N=[],X=(e("fb6a"),e("ee98")),J=e.n(X);s["default"].use(J.a);var W=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-6 col-sm-4 col-md-3 col-lg-2"},[e("div",{key:t.book_data.id,staticClass:"card",class:{_active:t.book_data.quantity>0}},[e("div",{staticClass:"card__inner"},[e("img",{attrs:{src:t.book_data.picture}}),t.book_data.quantity>0?e("span",{staticClass:"card__btn-quantity"},[t._v(t._s(t.book_data.quantity))]):t._e(),e("div",{staticClass:"card__btn",class:{_show:t.book_data.quantity>0}},[t.book_data.quantity>0?e("div",{staticClass:"card__btn-block"},[e("span",{staticClass:"card__btn-remove"},[t.book_data.quantity?e("fa-icon",{attrs:{icon:"minus"},on:{click:t.removeInCart}}):t._e()],1)]):t._e(),e("div",{staticClass:"card__btn-block"},[t.book_data.quantity<1?e("span",{staticClass:"card__btn-add"},[e("fa-icon",{attrs:{icon:"cart-arrow-down"},on:{click:t.addInCart}})],1):e("span",{staticClass:"card__btn-add"},[e("fa-icon",{attrs:{icon:"cart-plus"},on:{click:t.addInCart}})],1)])])]),e("div",{staticClass:"card__content"},[e("div",{staticClass:"card__title",attrs:{title:t.book_data.title}},[t._v(t._s(t.book_data.title))]),e("div",{staticClass:"card__author",attrs:{title:t.book_data.author}},[t._v(t._s(t.book_data.author))])]),e("div",{staticClass:"card__price"},[e("div",{staticClass:"fa fa-rub"},[t._v(t._s(t.book_data.price))]),e("fa-icon",{staticClass:"ml-1",attrs:{icon:"ruble-sign"}})],1)])])},Z=[],Q={name:"book",data:function(){return{num:!0}},components:{},props:{book_data:{type:Object,default:function(){return{}}}},computed:{},methods:{addInCart:function(){this.$emit("addBook",this.book_data)},removeInCart:function(){this.$emit("removeBook",this.book_data,this.book_data.id)}}},Y=Q,tt=(e("60b9"),Object(c["a"])(Y,W,Z,!1,null,"44c5ad48",null)),at=tt.exports,et=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"filters"},[e("ul",{staticClass:"filters__list"},[e("li",{class:{_active:"all"===this.active},attrs:{title:t.all},on:{click:function(a){return t.sort("all")}}},[e("button",{staticClass:"btn btn-btn-light"},[t._v("По умолчанию")])]),e("li",{class:{_active:"low"===this.active},attrs:{title:t.low},on:{click:function(a){return t.sort("low")}}},[e("button",{staticClass:"btn btn-btn-light"},[t._v("Цена: "),e("fa-icon",{attrs:{icon:"long-arrow-alt-down"}})],1)]),e("li",{class:{_active:"high"===this.active},attrs:{title:t.high},on:{click:function(a){return t.sort("high")}}},[e("button",{staticClass:"btn btn-btn-light"},[t._v("Цена: "),e("fa-icon",{attrs:{icon:"long-arrow-alt-up"}})],1)])]),e("div",{staticClass:"filters__search"},[e("div",{staticClass:"input-group"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Введите название..","aria-label":"Amount (to the nearest dollar)"}}),e("div",{staticClass:"input-group-append"},[e("span",{staticClass:"input-group-text"},[e("fa-icon",{attrs:{icon:"search"}})],1)])])])])},st=[],ot={name:"filters",data:function(){return{low:"дешевле",high:"дороже",all:"всe",active:"all"}},components:{},methods:{sort:function(t){this.$emit("sort",t),this.active=t}}},nt=ot,rt=(e("9f30"),Object(c["a"])(nt,et,st,!1,null,null,null)),it=rt.exports,ct={data:function(){return{productSort:[]}},components:{book:at,filters:it,notification:void 0},computed:Object(y["a"])(Object(y["a"])({},Object(d["c"])(["PRODUCTS","CART"])),{},{filteredProduct:function(){return this.productSort.length?this.productSort:this.PRODUCTS}}),methods:Object(y["a"])(Object(y["a"])({},Object(d["b"])(["GET_PRODUCTS_FROM_API","ADD_BOOK","REMOVE_BOOK"])),{},{addBook:function(t,a){this.ADD_BOOK(t,a)},removeBook:function(t,a){this.REMOVE_BOOK(t,a)},sort:function(t){var a=this.PRODUCTS.slice();"low"===t&&(this.productSort=a.sort((function(t,a){return t.price-a.price}))),"high"===t&&(this.productSort=a.sort((function(t,a){return a.price-t.price}))),"all"===t&&(this.productSort=this.PRODUCTS)},showToast:function(){this.$notify({group:"foo",text:"Wrong password, please try again later"})}}),mounted:function(){this.GET_PRODUCTS_FROM_API().then((function(t){t&&console.log("data пришла")}))}},lt=ct,ut=(e("75a5"),Object(c["a"])(lt,L,N,!1,null,null,null)),dt=ut.exports,pt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"footer__wrap"},[e("div",{staticClass:"footer__copyright"},[e("div",{staticClass:"footer__copyright-item"},[t._v("frontend Александр Гачегов"),e("fa-icon",{attrs:{icon:"shopping-cart"}})],1),e("div",{staticClass:"footer__copyright-item"},[t._v("backend Игорь Матвиенко")])])])])])},ft=[],ht={name:"AppFooter"},_t=ht,mt=(e("fff3"),Object(c["a"])(_t,pt,ft,!1,null,"1f8a0c6c",null)),vt=mt.exports,bt={name:"catalog",data:function(){return{}},components:{AppHeader:H,AppContent:dt,AppFooter:vt}},gt=bt,Ct=Object(c["a"])(gt,g,C,!1,null,"741b2c95",null),Ot=Ct.exports,kt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-8"},[t.cart_data.length?e("h4",[t._v("Итог: "+t._s(this.sum)+" руб.")]):t._e(),e("div",{staticClass:"cart__wrap _order"},t._l(t.cart_data,(function(a,s){return e("cartPopupItem",{key:s,staticClass:"border-bottom",attrs:{cart_item:a},on:{removeBook:t.removeBook}})})),1),e("router-link",{attrs:{to:{name:"catalog"}}},[e("btn",{staticClass:"btn _btn-outline mt-2"},[t._v("Назад")])],1)],1)])])},yt=[],Tt={name:"order",components:{cartPopupItem:j,btn:I},data:function(){return{sum:0,quantity:0}},props:{cart_data:{type:Array,default:function(){return[]}}},methods:Object(y["a"])(Object(y["a"])({},Object(d["b"])(["ADD_BOOK","REMOVE_BOOK"])),{},{removeBook:function(t,a){this.REMOVE_BOOK(t,a),console.log("REMOVE_BOOK(i)",a)},getSumm:function(){for(var t=0,a=0,e=0;e<this.CART.length;e++)t+=this.CART[e].quantity,a+=this.CART[e].quantity*this.CART[e].price;this.quantity=t,this.sum=a},openCard:function(){return this.cardOpen=!this.cardOpen}})},wt=Tt,Et=Object(c["a"])(wt,kt,yt,!1,null,"27dde982",null),At=Et.exports,Rt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("AppHeader"),e("div",{staticClass:"container mt-2"},[e("router-link",{attrs:{to:{name:"catalog"}}},[e("btn",{staticClass:"btn _btn-outline"},[t._v("В каталог")])],1)],1),e("pageEdditBooks")],1)},Bt=[],St=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"container"},[e("h2",{staticClass:"mt-2"},[t._v("Добовление книг")]),e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col-12 col-md-8"},[[e("div",[e("b-form",{staticClass:"form",on:{submit:function(t){t.preventDefault()}}},[e("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Название книги","label-for":"title"},model:{value:t.title,callback:function(a){t.title=a},expression:"title"}},[e("b-form-input",{attrs:{id:"title"},model:{value:t.title,callback:function(a){t.title=a},expression:"title"}})],1),e("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Автор","label-for":"author"},model:{value:t.author,callback:function(a){t.author=a},expression:"author"}},[e("b-form-input",{attrs:{id:"author"},model:{value:t.author,callback:function(a){t.author=a},expression:"author"}})],1),e("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Цена","label-for":"price"},model:{value:t.price,callback:function(a){t.price=a},expression:"price"}},[e("b-form-input",{attrs:{id:"price"},model:{value:t.price,callback:function(a){t.price=a},expression:"price"}})],1),e("b-form-group",[e("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Путь картинки:","label-for":"url"},model:{value:t.url,callback:function(a){t.url=a},expression:"url"}},[e("b-form-input",{attrs:{id:"url"},model:{value:t.url,callback:function(a){t.url=a},expression:"url"}})],1),[e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-8"},[e("b-form-file",{attrs:{state:Boolean(t.file1),placeholder:"Выберите файл или перетащите сюда ....","drop-placeholder":"перетащите сюда..."},model:{value:t.file1,callback:function(a){t.file1=a},expression:"file1"}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:this.file1,expression:"this.file1"}],staticClass:"col-4"},[e("div",{staticClass:"mt-3"},[t._v("Selected file: "+t._s(t.file1?t.file1.name:""))])])])])]],2),e("div",{staticClass:"pb-2"},[e("b-button",{staticClass:"btn _btn-outline mr-2",attrs:{type:"submit",variant:"primary"},on:{click:t.addbookAPI}},[t._v("Submit")]),e("b-button",{staticClass:"btn _btn-close",attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1)],1)],1)]],2),e("notifications",{attrs:{group:"foo"}})],1)])])},jt=[],zt=e("6c42");s["default"].use(zt["a"],{transition:"Vue-Toastification__bounce",maxToasts:3,newestOnTop:!0,position:"top-right",timeout:2e3,closeOnClick:!0,pauseOnFocusLoss:!1,draggable:!0,pauseOnHover:!0,draggablePercent:.7,showCloseButtonOnHover:!1,hideProgressBar:!1,closeButton:"button",icon:!0,rtl:!1});var xt={name:"edditBooks",data:function(){return{title:"",author:"",url:"",price:null,file1:null,file2:null}},components:{notification:void 0,toastification:void 0,AppFooter:vt},methods:{addbookAPI:function(){var t=this;f()("http://81.163.30.135/api/books",{method:"POST",data:{title:this.title,author:this.author,picture:this.url,price:this.price}}).then((function(a){200===a.status?t.$toast.warning(a.data.message,{icon:"cart-plus"}):t.$toast.success(a.data.message,{icon:"cart-plus"}),console.log(a)})).catch((function(t){return t}))}}},Pt=xt,Dt=Object(c["a"])(Pt,St,jt,!1,null,"e19301bc",null),qt=Dt.exports,It={name:"seller",components:{AppHeader:H,AppContent:dt,pageEdditBooks:qt,btn:I}},$t=It,Mt=Object(c["a"])($t,Rt,Bt,!1,null,"27cb0ee4",null),Kt=Mt.exports,Ft=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"page-home"},[e("router-link",{attrs:{to:{name:"catalog"}}},[e("svg",{attrs:{id:"Capa_1",width:"350",height:"200",viewBox:"0 0 600 440",xmlns:"http://www.w3.org/2000/svg"}},[e("g",[e("g",[e("path",{attrs:{d:"m494.783 60.298c1.42 0 2.571 1.151 2.571 2.571v375.921c0 1.42-1.151 2.57-2.571 2.57h-492.212c-1.42 0-2.571-1.151-2.571-2.57v-375.921c0-1.42 1.151-2.571 2.571-2.571z",fill:"#a6e7f0"}})]),e("g",[e("path",{attrs:{d:"m20.167 60.298v336.91c0 14.678 11.937 26.619 26.609 26.619h170.57c11.096 0 21.789-3.14 30.985-8.98 9.207 5.828 19.912 8.98 30.935 8.98h171.311c14.673 0 26.609-11.941 26.609-26.619v-336.91z",fill:"#6bd9e7"}}),e("path",{attrs:{d:"m246.707 48.457c-8.99-8.99-21.18-14.04-33.9-14.04h-166.03c-3.65 0-6.61 2.96-6.61 6.61v356.18c0 3.65 2.96 6.62 6.61 6.62h170.57c9.67 0 18.97-3.7 26-10.33l4.78-4.5 23.793-47.454v-270.646z",fill:"#efedef"}}),e("g",[e("g",[e("g",{attrs:{id:"XMLID_482_"}},[e("g",[e("path",{attrs:{d:"m457.187 41.028v356.18c0 3.65-2.96 6.62-6.61 6.62h-171.31c-9.22 0-18.13-3.37-25.05-9.47l-6.09-5.36.55-338.57 1.97-1.97c8.09-8.1 18.79-12.99 30.13-13.88l169.8-.16c3.65 0 6.61 2.96 6.61 6.61z",fill:"#f9f7f8"}})])])])]),e("path",{attrs:{d:"m354.982 469.994-20.313-9.569-20.313 9.569c-1.666.785-3.582-.431-3.582-2.272v-434.344c0-3.457 2.803-6.26 6.26-6.26h35.269c3.457 0 6.26 2.803 6.26 6.26v434.344c.001 1.841-1.915 3.057-3.581 2.272z",fill:"#fd8087"}}),e("g",[e("path",{attrs:{d:"m213.323 116.423h-136.233c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h136.233c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m213.323 161.484h-83.312c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h83.312c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m213.323 206.546h-136.233c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h136.233c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m213.323 251.608h-136.233c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h136.233c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m167.214 296.67h-90.124c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h90.124c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m213.323 341.731h-136.233c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h136.233c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m97.526 161.484h-20.436c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h20.436c4.143 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m213.323 296.67h-15.72c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h15.72c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#e5e1e5"}})]),e("g",[e("path",{attrs:{d:"m421.263 116.422h-30.192c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h30.192c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#efedef"}})]),e("g",[e("g",[e("path",{attrs:{d:"m421.263 161.483h-30.192c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h30.192c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#efedef"}})])]),e("g",[e("g",[e("path",{attrs:{d:"m421.263 206.546h-30.192c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h30.192c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#efedef"}})])]),e("g",[e("g",[e("path",{attrs:{d:"m421.263 251.607h-30.192c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h30.192c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#efedef"}})])]),e("g",[e("path",{attrs:{d:"m421.263 341.73h-30.192c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h30.192c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#efedef"}})]),e("g",[e("g",[e("path",{attrs:{d:"m421.263 296.669h-30.192c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h30.192c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z",fill:"#efedef"}})])])])])])])],1),t._m(0)])},Ut=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-not"},[e("h1",[t._v("4"),e("span",[t._v("0")]),t._v("4")]),e("p",[t._v(" тут нет ничего")])])}],Vt={name:"404"},Gt=Vt,Ht=(e("60c4"),Object(c["a"])(Gt,Ft,Ut,!1,null,"184a4732",null)),Lt=Ht.exports;s["default"].use(b["a"]);var Nt=new b["a"]({mode:"history",routes:[{path:"*",component:Lt},{path:"",name:"catalog",component:Ot},{path:"/order",name:"order",component:At,props:!0},{path:"/seller",name:"seller",component:Kt}]}),Xt=Nt,Jt=e("ecee"),Wt=e("ad3d"),Zt=e("c074");Jt["c"].add(Zt["q"],Zt["m"],Zt["j"],Zt["c"],Zt["o"],Zt["n"],Zt["d"],Zt["e"],Zt["k"],Zt["f"],Zt["g"],Zt["l"],Zt["h"],Zt["a"],Zt["b"],Zt["p"],Zt["i"]),s["default"].component("fa-icon",Wt["a"]),s["default"].component("fab-icon",Wt["a"]),s["default"].component("fa-layer",Wt["b"]),s["default"].component("fa-layer-text",Wt["c"]);var Qt=e("5f5b"),Yt=e("a7fe"),ta=e.n(Yt);s["default"].use(Qt["a"],ta.a),new s["default"]({store:v,router:Xt,render:function(t){return t(u)}}).$mount("#app"),s["default"].config.productionTip=!1},"5c0b":function(t,a,e){"use strict";var s=e("9c0c"),o=e.n(s);o.a},"5d05":function(t,a,e){},"60b9":function(t,a,e){"use strict";var s=e("dcf6"),o=e.n(s);o.a},"60c4":function(t,a,e){"use strict";var s=e("5d05"),o=e.n(s);o.a},"65e1":function(t,a,e){"use strict";var s=e("e8f8"),o=e.n(s);o.a},"75a5":function(t,a,e){"use strict";var s=e("d722"),o=e.n(s);o.a},"78b8":function(t,a,e){},8054:function(t,a,e){},"9c0c":function(t,a,e){},"9f30":function(t,a,e){"use strict";var s=e("2f61"),o=e.n(s);o.a},d722:function(t,a,e){},dcf6:function(t,a,e){},dffc:function(t,a,e){"use strict";var s=e("8054"),o=e.n(s);o.a},e8f8:function(t,a,e){},fff3:function(t,a,e){"use strict";var s=e("0bbf"),o=e.n(s);o.a}});
//# sourceMappingURL=app.b479d1d0.js.map