(self.webpackChunkproducts_catalog=self.webpackChunkproducts_catalog||[]).push([[646],{5646:function(t,e,n){"use strict";n.r(e),n.d(e,{bootstrap:function(){return z},mount:function(){return I},unmount:function(){return J}});var a=n(4103),o=n.n(a),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("app-header"),t._v(" "),n("app-body"),t._v(" "),n("app-footer")],1)};i._withStripped=!0;var r=function(){var t=this;t.$createElement;return t._self._c,t._m(0)};r._withStripped=!0;var s=(n(8258),n(1900)),p=(0,s.Z)({name:"appHeader"},r,[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"},[n("div",{staticClass:"container"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Module Federation with Vue")])])])}],!1,null,"744bb6f9",null);p.options.__file="src/components/layout/appHeader.vue";var l=p.exports,u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("app-sidebar",{staticClass:"col-sm-3"}),t._v(" "),n("app-body-content",{staticClass:"col-sm-9"})],1)])};u._withStripped=!0;var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"smallMargin"},[n("div",{staticClass:"list-group"},[n("router-link",{staticClass:"list-group-item",attrs:{to:"/products"}},[t._v("Products")]),t._v(" "),n("router-link",{staticClass:"list-group-item",attrs:{to:"/cart"}},[t._v("Cart ("+t._s(t.items_in_cart)+")")])],1)])};c._withStripped=!0;var d={name:"appSidebar",computed:{items_in_cart(){return this.$store.state.cart.length}}},v=(n(4958),(0,s.Z)(d,c,[],!1,null,"8e88ebc0",null));v.options.__file="src/components/layout/appSidebar.vue";var m=v.exports,_=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card"},[e("router-view")],1)};_._withStripped=!0;var f={name:"appBodyContent",components:{appSidebar:m}},h=(n(4418),(0,s.Z)(f,_,[],!1,null,"47ac5bbb",null));h.options.__file="src/components/layout/appBodyContent.vue";var g={name:"appBody",components:{appSidebar:m,appBodyContent:h.exports}},x=(n(4918),(0,s.Z)(g,u,[],!1,null,"58a1808e",null));x.options.__file="src/components/layout/appBody.vue";var b=x.exports,y=function(){var t=this;t.$createElement;return t._self._c,t._m(0)};y._withStripped=!0;var C=(n(5388),(0,s.Z)({name:"appFooter"},y,[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"py-1 bg-dark"},[n("div",{staticClass:"container"},[n("p",{staticClass:"m-0 text-center text-white"},[t._v("Copyright © Your Website 2017")])])])}],!1,null,"53195307",null));C.options.__file="src/components/layout/appFooter.vue";var w={name:"app",components:{appHeader:l,appBody:b,appFooter:C.exports}},S=(n(7987),(0,s.Z)(w,i,[],!1,null,null,null));S.options.__file="src/App.vue";var E=S.exports,$=n(6443),M=n.n($),Z=n(7015),k=n.n(Z),B=n(2621),q=n.n(B),F=n(5528),P=n.n(F),V=n(4615),j=n.n(V),H=function(){var t=this;t.$createElement;return t._self._c,t._m(0)};H._withStripped=!0;var A=(n(5330),(0,s.Z)({name:"home"},H,[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("Vue.js Demo")]),t._v(" "),n("p",[t._v("\n    This Single Page Application was built using Vue.js 2, together with vue-router and bootstrap-vue.\n  ")]),t._v(" "),n("p",[t._v("\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor \n    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis \n    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore \n    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt \n    in culpa qui officia deserunt mollit anim id est laborum.\n  ")])])}],!1,null,"7c66a6a2",null));A.options.__file="src/components/home/home.vue";const D=[{path:"/",component:A.exports},{path:"/products",component:()=>n.e(701).then(n.t.bind(n,1701,23))},{path:"/cart",component:()=>n.e(445).then(n.t.bind(n,445,23))}];var T=new(j())({mode:"history",routes:D}),X=n(629),G=n(6822),L=n(8483),O=n(4494),U=n.n(O),W=(n(2814),n(4228),n(4098));o().use(X.ZP),o().use(U()),o().use(j()),o().use(G.XG7),o().use(L.X),o().config.productionTip=!1,o().config.devtools=!0;const Y=(0,W.Z)({Vue:o(),appOptions:{render:t=>t(E),router:T,store:new X.ZP.Store({state:{...M()},actions:{...k()},mutations:{...q()},getters:{...P()}})}}),z=Y.bootstrap,I=Y.mount,J=Y.unmount},6721:function(t,e,n){(e=n(3645)(!1)).push([t.id,"\n#app {\n  text-align: center;\n  color: #2c3e50;\n  margin-top: 60px;\n}\n",""]),t.exports=e},3480:function(t,e,n){(e=n(3645)(!1)).push([t.id,"\nh1[data-v-7c66a6a2] {\n  margin-bottom: 30px;\n}\np[data-v-7c66a6a2] {\n  text-align: justify;\n}\n.container[data-v-7c66a6a2] {\n  padding-top: 0px;\n  margin-top: 0px;\n}\n",""]),t.exports=e},6058:function(t,e,n){(e=n(3645)(!1)).push([t.id,"\n.container[data-v-58a1808e] {\n  min-height: 400px;\n  margin: 10px 20px;\n}\n",""]),t.exports=e},2659:function(t,e,n){(e=n(3645)(!1)).push([t.id,"\ndiv[data-v-47ac5bbb] {\n  margin-top: 25px;\n  padding-top: 25px;\n}\n",""]),t.exports=e},1174:function(t,e,n){(e=n(3645)(!1)).push([t.id,"\nfooter[data-v-53195307] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\n",""]),t.exports=e},5165:function(t,e,n){(e=n(3645)(!1)).push([t.id,"\n.container[data-v-744bb6f9] {\n  padding-left: 0;\n  margin-left: 20px;\n}\n",""]),t.exports=e},2629:function(t,e,n){(e=n(3645)(!1)).push([t.id,"\n.smallMargin[data-v-8e88ebc0] {\n  margin-top: 25px;\n}\n",""]),t.exports=e},7987:function(t,e,n){var a=n(3379),o=n(6721);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.id,o,""]]);a(o,{insert:"head",singleton:!1}),t.exports=o.locals||{}},5330:function(t,e,n){var a=n(3379),o=n(3480);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.id,o,""]]);a(o,{insert:"head",singleton:!1}),t.exports=o.locals||{}},4918:function(t,e,n){var a=n(3379),o=n(6058);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.id,o,""]]);a(o,{insert:"head",singleton:!1}),t.exports=o.locals||{}},4418:function(t,e,n){var a=n(3379),o=n(2659);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.id,o,""]]);a(o,{insert:"head",singleton:!1}),t.exports=o.locals||{}},5388:function(t,e,n){var a=n(3379),o=n(1174);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.id,o,""]]);a(o,{insert:"head",singleton:!1}),t.exports=o.locals||{}},8258:function(t,e,n){var a=n(3379),o=n(5165);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.id,o,""]]);a(o,{insert:"head",singleton:!1}),t.exports=o.locals||{}},4958:function(t,e,n){var a=n(3379),o=n(2629);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.id,o,""]]);a(o,{insert:"head",singleton:!1}),t.exports=o.locals||{}}}]);