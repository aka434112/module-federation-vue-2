/*! For license information please see 630.js.LICENSE.txt */
(self.webpackChunkproducts_catalog=self.webpackChunkproducts_catalog||[]).push([[630],{3230:function(t,e,n){(e=n(3645)(!1)).push([t.id,"\nh1[data-v-12d1fb62] {\n  margin-bottom: 20px;\n}\ndiv[data-v-12d1fb62] {\n  padding-top: 0px;\n  margin-top: 0px;\n}\n",""]),t.exports=e},3645:function(t){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n,r,o,i=t[1]||"",c=t[3];if(!c)return i;if(e&&"function"==typeof btoa){var s=(n=c,r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(o," */")),a=c.sources.map((function(t){return"/*# sourceURL=".concat(c.sourceRoot||"").concat(t," */")}));return[i].concat(a).concat([s]).join("\n")}return[i].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var s=0;s<t.length;s++){var a=[].concat(t[s]);r&&o[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),e.push(a))}},e}},3465:function(t,e,n){var r=n(3379),o=n(3230);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.id,o,""]]);r(o,{insert:"head",singleton:!1}),t.exports=o.locals||{}},3379:function(t,e,n){"use strict";var r,o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function c(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},r=[],o=0;o<t.length;o++){var s=t[o],a=e.base?s[0]+e.base:s[0],u=n[a]||0,f="".concat(a," ").concat(u);n[a]=u+1;var l=c(f),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==l?(i[l].references++,i[l].updater(p)):i.push({identifier:f,updater:m(p,e),references:1}),r.push(f)}return r}function a(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var c=o(t.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(e)}return e}var u,f=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function l(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),c=t.childNodes;c[e]&&t.removeChild(c[e]),c.length?t.insertBefore(i,c[e]):t.appendChild(i)}}function p(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,d=0;function m(t,e){var n,r,o;if(e.singleton){var i=d++;n=h||(h=a(e)),r=l.bind(null,n,i,!1),o=l.bind(null,n,i,!0)}else n=a(e),r=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var a=s(t,e),u=0;u<n.length;u++){var f=c(n[u]);0===i[f].references&&(i[f].updater(),i.splice(f,1))}n=a}}}},3582:function(t,e,n){"use strict";var r=n(153),o=n(5547),i=(0,n(1900).Z)(o.Z,r.s,r.x,!1,null,null,null);i.options.__file="src/components/catalog/search.vue",e.Z=i.exports},8537:function(t,e){"use strict";e.Z={name:"search",props:{placeholder:String},data:function(){return{searchTerm:""}}}},9630:function(t,e,n){"use strict";n.r(e);var r=n(6761),o=n(6688),i=(n(4766),(0,n(1900).Z)(o.Z,r.s,r.x,!1,null,"12d1fb62",null));i.options.__file="src/components/products/products.vue",e.default=i.exports},4317:function(t,e,n){"use strict";var r=n(3582),o=n(629);e.Z={name:"products",components:{search:r.Z},data:()=>({pageNumber:1,pageSize:5,totalRows:0,searchTerm:""}),async created(){await this.fetch_products(),this.totalRows=this.products.length},computed:{pageProducts:function(){const t=this.pageNumber-1,e=this.searchTerm.trim();let n=this.products.slice();return n=n.filter((t=>t.title.toUpperCase().includes(e.toUpperCase()))),this.totalRows=n.length,n.slice(t*this.pageSize,(t+1)*this.pageSize)},...(0,o.rn)(["cart","products"])},methods:{...(0,o.OI)(["ADD_TO_CART","REMOVE_FROM_CART"]),...(0,o.nv)(["fetch_products"])}}},4766:function(t,e,n){"use strict";n(3465)},5547:function(t,e,n){"use strict";var r=n(8537);e.Z=r.Z},153:function(t,e,n){"use strict";n.d(e,{s:function(){return r.s},x:function(){return r.x}});var r=n(5588)},6688:function(t,e,n){"use strict";var r=n(4317);e.Z=r.Z},6761:function(t,e,n){"use strict";n.d(e,{s:function(){return r.s},x:function(){return r.x}});var r=n(152)},5588:function(t,e,n){"use strict";n.d(e,{s:function(){return r},x:function(){return o}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group mb-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],staticClass:"form-control",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.searchTerm},on:{keyup:function(e){return t.$emit("search",t.searchTerm)},input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}}),t._v(" "),n("div",{staticClass:"input-group-append"},[n("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){return t.$emit("search",t.searchTerm)}}},[t._v("\n      Search\n    ")])])])},o=[];r._withStripped=!0},152:function(t,e,n){"use strict";n.d(e,{s:function(){return r},x:function(){return o}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Products")]),t._v(" "),n("search",{attrs:{placeholder:"Search products"},on:{search:function(e){t.searchTerm=e}}}),t._v(" "),n("table",{staticClass:"table table-bordered"},[t._m(0),t._v(" "),t.pageProducts.length?n("tbody",t._l(t.pageProducts,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.title))]),t._v(" "),n("td",[t._v(t._s(t._f("currency")(e.price,"€")))]),t._v(" "),n("td",[t.cart.includes(e.id)?n("b-icon-cart-dash",{attrs:{title:"Remove from Cart",role:"button"},on:{click:function(n){return t.REMOVE_FROM_CART(e.id)}}}):n("b-icon-cart-plus",{attrs:{title:"Add to Cart",role:"button"},on:{click:function(n){return t.ADD_TO_CART(e.id)}}})],1)])})),0):n("tbody",[t._m(1)])]),t._v(" "),n("b-pagination",{attrs:{align:"right",size:"md","total-rows":t.totalRows,"per-page":t.pageSize},model:{value:t.pageNumber,callback:function(e){t.pageNumber=e},expression:"pageNumber"}})],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Product")]),t._v(" "),n("th",[t._v("Price")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",{attrs:{colspan:"3"}},[t._v("No records found")])])}];r._withStripped=!0},1900:function(t,e,n){"use strict";function r(t,e,n,r,o,i,c,s){var a,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),c?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},u._ssrRegister=a):o&&(a=s?function(){o.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:o),a)if(u.functional){u._injectStyles=a;var f=u.render;u.render=function(t,e){return a.call(e),f(t,e)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,a):[a]}return{exports:t,options:u}}n.d(e,{Z:function(){return r}})},629:function(t,e,n){"use strict";n.d(e,{nv:function(){return w},OI:function(){return b},rn:function(){return y}});var r=("undefined"!=typeof window?window:void 0!==n.g?n.g:{}).__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function i(t){return null!==t&&"object"==typeof t}var c=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},s={namespaced:{configurable:!0}};s.namespaced.get=function(){return!!this._rawModule.namespaced},c.prototype.addChild=function(t,e){this._children[t]=e},c.prototype.removeChild=function(t){delete this._children[t]},c.prototype.getChild=function(t){return this._children[t]},c.prototype.hasChild=function(t){return t in this._children},c.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},c.prototype.forEachChild=function(t){o(this._children,t)},c.prototype.forEachGetter=function(t){this._rawModule.getters&&o(this._rawModule.getters,t)},c.prototype.forEachAction=function(t){this._rawModule.actions&&o(this._rawModule.actions,t)},c.prototype.forEachMutation=function(t){this._rawModule.mutations&&o(this._rawModule.mutations,t)},Object.defineProperties(c.prototype,s);var a,u=function(t){this.register([],t,!1)};function f(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;f(t.concat(r),e.getChild(r),n.modules[r])}}u.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},u.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return t+((e=e.getChild(n)).namespaced?n+"/":"")}),"")},u.prototype.update=function(t){f([],this.root,t)},u.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new c(e,n);0===t.length?this.root=i:this.get(t.slice(0,-1)).addChild(t[t.length-1],i),e.modules&&o(e.modules,(function(e,o){r.register(t.concat(o),e,n)}))},u.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},u.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var l=function(t){var e,n=this;void 0===t&&(t={}),!a&&"undefined"!=typeof window&&window.Vue&&(e=window.Vue,a&&e===a||function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:n});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[n].concat(t.init):n,e.call(this,t)}}function n(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}(a=e));var o=t.plugins;void 0===o&&(o=[]);var i=t.strict;void 0===i&&(i=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new u(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new a,this._makeLocalGettersCache=Object.create(null);var c=this,s=this.dispatch,f=this.commit;this.dispatch=function(t,e){return s.call(c,t,e)},this.commit=function(t,e,n){return f.call(c,t,e,n)},this.strict=i;var l=this._modules.root.state;v(this,l,[],this._modules.root),m(this,l),o.forEach((function(t){return t(n)})),(void 0!==t.devtools?t.devtools:a.config.devtools)&&function(t){r&&(t._devtoolHook=r,r.emit("vuex:init",t),r.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){r.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){r.emit("vuex:action",t,e)}),{prepend:!0}))}(this)},p={state:{configurable:!0}};function h(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function d(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;v(t,n,[],t._modules.root,!0),m(t,n,e)}function m(t,e,n){var r=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,c={};o(i,(function(e,n){c[n]=function(t,e){return function(){return t(e)}}(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var s=a.config.silent;a.config.silent=!0,t._vm=new a({data:{$$state:e},computed:c}),a.config.silent=s,t.strict&&function(t){t._vm.$watch((function(){return this._data.$$state}),(function(){}),{deep:!0,sync:!0})}(t),r&&(n&&t._withCommit((function(){r._data.$$state=null})),a.nextTick((function(){return r.$destroy()})))}function v(t,e,n,r,o){var i=!n.length,c=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[c],t._modulesNamespaceMap[c]=r),!i&&!o){var s=_(e,n.slice(0,-1)),u=n[n.length-1];t._withCommit((function(){a.set(s,u,r.state)}))}var f=r.context=function(t,e,n){var r=""===e,o={dispatch:r?t.dispatch:function(n,r,o){var i=g(n,r,o),c=i.payload,s=i.options,a=i.type;return s&&s.root||(a=e+a),t.dispatch(a,c)},commit:r?t.commit:function(n,r,o){var i=g(n,r,o),c=i.payload,s=i.options,a=i.type;s&&s.root||(a=e+a),t.commit(a,c,s)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return function(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(o){if(o.slice(0,r)===e){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[o]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}(t,e)}},state:{get:function(){return _(t.state,n)}}}),o}(t,c,n);r.forEachMutation((function(e,n){!function(t,e,n,r){(t._mutations[e]||(t._mutations[e]=[])).push((function(e){n.call(t,r.state,e)}))}(t,c+n,e,f)})),r.forEachAction((function(e,n){var r=e.root?n:c+n,o=e.handler||e;!function(t,e,n,r){(t._actions[e]||(t._actions[e]=[])).push((function(e){var o,i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return(o=i)&&"function"==typeof o.then||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}(t,r,o,f)})),r.forEachGetter((function(e,n){!function(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}(t,c+n,e,f)})),r.forEachChild((function(r,i){v(t,e,n.concat(i),r,o)}))}function _(t,e){return e.reduce((function(t,e){return t[e]}),t)}function g(t,e,n){return i(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}p.state.get=function(){return this._vm._data.$$state},p.state.set=function(t){},l.prototype.commit=function(t,e,n){var r=this,o=g(t,e,n),i=o.type,c=o.payload,s=(o.options,{type:i,payload:c}),a=this._mutations[i];a&&(this._withCommit((function(){a.forEach((function(t){t(c)}))})),this._subscribers.slice().forEach((function(t){return t(s,r.state)})))},l.prototype.dispatch=function(t,e){var n=this,r=g(t,e),o=r.type,i=r.payload,c={type:o,payload:i},s=this._actions[o];if(s){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(c,n.state)}))}catch(t){}var a=s.length>1?Promise.all(s.map((function(t){return t(i)}))):s[0](i);return new Promise((function(t,e){a.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(c,n.state)}))}catch(t){}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(c,n.state,t)}))}catch(t){}e(t)}))}))}},l.prototype.subscribe=function(t,e){return h(t,this._subscribers,e)},l.prototype.subscribeAction=function(t,e){return h("function"==typeof t?{before:t}:t,this._actionSubscribers,e)},l.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch((function(){return t(r.state,r.getters)}),e,n)},l.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},l.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),v(this,this.state,t,this._modules.get(t),n.preserveState),m(this,this.state)},l.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=_(e.state,t.slice(0,-1));a.delete(n,t[t.length-1])})),d(this)},l.prototype.hasModule=function(t){return"string"==typeof t&&(t=[t]),this._modules.isRegistered(t)},l.prototype.hotUpdate=function(t){this._modules.update(t),d(this,!0)},l.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(l.prototype,p);var y=x((function(t,e){var n={};return C(e).forEach((function(e){var r=e.key,o=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=$(this.$store,0,t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"==typeof o?o.call(this,e,n):e[o]},n[r].vuex=!0})),n})),b=x((function(t,e){var n={};return C(e).forEach((function(e){var r=e.key,o=e.val;n[r]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var r=this.$store.commit;if(t){var i=$(this.$store,0,t);if(!i)return;r=i.context.commit}return"function"==typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}})),n})),w=(x((function(t,e){var n={};return C(e).forEach((function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){if(!t||$(this.$store,0,t))return this.$store.getters[o]},n[r].vuex=!0})),n})),x((function(t,e){var n={};return C(e).forEach((function(e){var r=e.key,o=e.val;n[r]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var i=$(this.$store,0,t);if(!i)return;r=i.context.dispatch}return"function"==typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}})),n})));function C(t){return function(t){return Array.isArray(t)||i(t)}(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function x(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function $(t,e,n){return t._modulesNamespaceMap[n]}}}]);