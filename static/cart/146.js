(self.webpackChunkproducts_catalog=self.webpackChunkproducts_catalog||[]).push([[146],{146:function(t,e,r){"use strict";r.r(e),r.d(e,{bootstrap:function(){return f},mount:function(){return h},unmount:function(){return m}});var n=r(103),u=r.n(n),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("table",{staticClass:"table table-bordered"},[t._m(0),t._v(" "),t.cart.length?r("tbody",t._l(t.cart,(function(e){return r("tr",{key:e},[r("td",[t._v(t._s(t.product_details[e].title))]),t._v(" "),r("td",[t._v(t._s(t._f("currency")(t.product_details[e].price,"€")))]),t._v(" "),r("td",[r("input",{attrs:{type:"number",min:"1",value:"1"}}),t._v(" "),r("b-icon-cart-dash",{attrs:{title:"Remove from Cart",role:"button"},on:{click:function(r){return t.REMOVE_FROM_CART(e)}}})],1)])})),0):r("tbody",[t._m(1)])])])};o._withStripped=!0;var c=r(629),s={computed:{...(0,c.rn)(["cart","products"]),product_details(){const t={};for(let e of this.products)this.cart.includes(e.id)&&(t[e.id]=e);return t}},methods:{...(0,c.OI)(["REMOVE_FROM_CART"])}},i=(0,r(900).Z)(s,o,[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Product")]),t._v(" "),r("th",[t._v("Price")]),t._v(" "),r("th",[t._v("Required Qty.")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",{attrs:{colspan:"3"}},[t._v("No items in the cart")])])}],!1,null,null,null);i.options.__file="src/App.vue";var a=i.exports,_=r(822),l=r(9),d=r(494),p=r.n(d);r(814),r(228),u().use(p()),u().use(_.XG7),u().use(l.X),u().config.productionTip=!1;const v=singleSpaVue({Vue:u(),appOptions:{render:t=>t(a),store:store}}),f=v.bootstrap,h=v.mount,m=v.unmount}}]);