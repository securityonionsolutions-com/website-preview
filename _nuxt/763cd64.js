(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{234:function(e){e.exports=JSON.parse('{"appliances":{"forward_nodes":[{"name":"SOS SFF","performance":{"Speed":10,"Retention":10},"specs":{"Throughput":"100Mbps","Available Storage":"1TB","Form Factor":"Standalone SFF"}},{"name":"SOS 500","performance":{"Speed":25,"Retention":25},"specs":{"Throughput":"500Mbps","Available Storage":"8TB","Management Ports":"2 x 1GbE RJ45","Monitoring Ports":"2x10/25GbE SFP28, 4x1GbE RJ45","Form Factor":"1U"}},{"name":"SOS 1000(F)","performance":{"Speed":50,"Retention":50},"specs":{"Throughput":"1Gbps","Available Storage":"24TB RAID 5","Management Ports":"2 x 1GbE RJ45","Monitoring Ports":"F: 2x1/10GbE SFP+, 2x10/25GbE SFP28\\nnon-F: 2x10/25GbE SFP28, 4x1GbE RJ45","Form Factor":"1U"}},{"name":"SOS 4000","performance":{"Speed":75,"Retention":50},"specs":{"Throughput":"4Gbps","Available Storage":"120TB RAID 6","Management Ports":"2 x 1GbE RJ45","Monitoring Ports":"4x10GbE SFP+, 2x10/25GbE SFP28, 4x1GbE RJ45","Form Factor":"2U"}},{"name":"SOS 10000","performance":{"Speed":100,"Retention":25},"specs":{"Throughput":"10Gbps","Available Storage":"7TB RAID 1","Management Ports":"2 x 1GbE RJ45","Monitoring Ports":"2x1/10GbE SFP+, 2x10/25GbE SFP28","Form Factor":"1U"}}],"manager_nodes":[{"name":"SOS MN","performance":{"Performance":100,"Retention":50},"specs":{"Throughput":"Spec Value","Available Storage":"Spec Value","Management Ports":"2x10/25GbE SFP28, 4x1GbE RJ45, 2 x 1GbE RJ45","Form Factor":"1U"}}],"search_nodes":[{"name":"SOS SN7200","performance":{"Performance":50,"Retention":100},"specs":{"Throughput":"Spec Value","Available Storage":"Spec Value","Management Ports":"4x10GbE SFP+, 2x10/25GbE SFP28,\\n4x1GbE RJ45, 2 x 1GbE RJ45","Form Factor":"2U"}},{"name":"SOS SNNV","performance":{"Performance":100,"Retention":75},"specs":{"Throughput":"Spec Value","Available Storage":"Spec Value","Management Ports":"2x1/10GbE SFP+, 2x10/25GbE SFP28, 2 x 1GbE RJ45","Form Factor":"1U"}}]}}')},326:function(e,n,t){"use strict";var r=t(6),o=t(327)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),r(r.P+r.F*c,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),t(90)("find")},327:function(e,n,t){var r=t(27),o=t(89),c=t(28),l=t(18),S=t(328);e.exports=function(e,n){var t=1==e,f=2==e,m=3==e,x=4==e,F=6==e,h=5==e||F,d=n||S;return function(n,S,v){for(var G,P,E=c(n),R=o(E),A=r(S,v,3),J=l(R.length),T=0,M=t?d(n,J):f?d(n,0):void 0;J>T;T++)if((h||T in R)&&(P=A(G=R[T],T,E),e))if(t)M[T]=P;else if(P)switch(e){case 3:return!0;case 5:return G;case 6:return T;case 2:M.push(G)}else if(x)return!1;return F?-1:m||x?x:M}}},328:function(e,n,t){var r=t(329);e.exports=function(e,n){return new(r(e))(n)}},329:function(e,n,t){var r=t(13),o=t(122),c=t(3)("species");e.exports=function(e){var n;return o(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!o(n.prototype)||(n=void 0),r(n)&&null===(n=n[c])&&(n=void 0)),void 0===n?Array:n}},352:function(e,n,t){"use strict";t.r(n);t(26),t(326),t(71),t(32);var r=t(4),o={scrollToTop:!0,asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function n(){var t,r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.params,console.log(t),n.next=4,t.appliance.replace("_"," ");case 4:return r=n.sent,n.next=7,t.category;case 7:return o=n.sent,n.abrupt("return",{applianceName:r,applianceCat:o});case 9:case"end":return n.stop()}}),n)})))()},computed:{appliance:function(){var e=this;return t(234).appliances[this.applianceCat].find((function(n){return n.name===e.applianceName}))}},head:function(){return{title:"Security Onion Solutions - ".concat(this.applianceName)}}},c=t(2),component=Object(c.a)(o,(function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"xs:px-12"},[n("div",{staticClass:"xs:-mx-12 mb-2"},[n("nuxt-link",{staticClass:"text-md xs:text-xl font-light w-full px-4 py-1 flex items-center nav-style bg-gray-100",attrs:{to:"/hardware"}},[this._v("\n      < Back to all appliances\n    ")])],1),this._v(" "),n("ApplianceDetails",{attrs:{appliance:this.appliance}})],1)}),[],!1,null,"297d8dd2",null);n.default=component.exports;installComponents(component,{ApplianceDetails:t(125).default})}}]);