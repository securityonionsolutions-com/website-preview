(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{254:function(e){e.exports=JSON.parse('{"roles":[{"name":"Forward Nodes","sensor":true,"appliances":[{"name":"SOS 500","performance":{"Speed":25,"Retention":25},"img_front_thumb":"SOS1U-front-thumb.jpg","img_front":"SOS1U-front.jpg","img_back_thumb":"SOS1U-ethernet-back-thumb.jpg","img_back":"SOS1U-ethernet-back.jpg","specs":{"Throughput":"500 Mbps †","Available Storage":"8 TB *","Management Ports":"2 x 1GbE RJ45","Monitoring Ports":"2x10/25GbE SFP28, 4x1GbE RJ45","Form Factor":"1U"},"caveats":{"storageApproximated":true,"performanceDependsOnTraffic":true}},{"name":"SOS 1000","performance":{"Speed":50,"Retention":50},"img_front_thumb":"SOS1U-front-thumb.jpg","img_front":"SOS1U-front.jpg","img_back_thumb":"SOS1U-ethernet-back-thumb.jpg","img_back":"SOS1U-ethernet-back.jpg","specs":{"Throughput":"1 Gbps †","Available Storage":"24 TB *","Storage Type":"RAID 5","Management Ports":"2 x 1GbE RJ45","Monitoring Ports":"2x10/25GbE SFP28, 4x1GbE RJ45","Form Factor":"1U"},"caveats":{"storageApproximated":true,"performanceDependsOnTraffic":true}},{"name":"SOS 1000F","performance":{"Speed":50,"Retention":50},"img_front_thumb":"SOS1U-front-thumb.jpg","img_front":"SOS1U-front.jpg","img_back_thumb":"SOS1U-SFP-back-thumb.jpg","img_back":"SOS1U-SFP-back.jpg","specs":{"Throughput":"1 Gbps †","Available Storage":"24 TB *","Storage Type":"RAID 5","Management Ports":"2 x 1GbE RJ45","Monitoring Ports":"2x1/10GbE SFP+, 2x10/25GbE SFP28","Form Factor":"1U"},"caveats":{"storageApproximated":true,"performanceDependsOnTraffic":true}},{"name":"SOS 4000","performance":{"Speed":75,"Retention":50},"img_front_thumb":"SOS2U-front-thumb.jpg","img_front":"SOS2U-front.jpg","img_back_thumb":"SOS2U-back-thumb.jpg","img_back":"SOS2U-back.jpg","specs":{"Throughput":"4 Gbps †","Available Storage":"120 TB *","Storage Type":"RAID 6","Management Ports":"2 x 1GbE RJ45","Monitoring Ports":"4x10GbE SFP+, 2x10/25GbE SFP28, 4x1GbE RJ45","Form Factor":"2U"},"caveats":{"storageApproximated":true,"performanceDependsOnTraffic":true}},{"name":"SOS 10000","performance":{"Speed":100,"Retention":25},"img_front_thumb":"SOS1U-front-thumb.jpg","img_front":"SOS1U-front.jpg","img_back_thumb":"SOS1U-SFP-back-thumb.jpg","img_back":"SOS1U-SFP-back.jpg","specs":{"Throughput":"10 Gbps † ‡","Available Storage":"7 TB *","Storage Type":"RAID 1","Management Ports":"2 x 1GbE RJ45","Monitoring Ports":"2x1/10GbE SFP+, 2x10/25GbE SFP28","Form Factor":"1U"},"caveats":{"storageApproximated":true,"performanceDependsOnTraffic":true,"withoutPcap":true}}]},{"name":"Manager Nodes","sensor":false,"appliances":[{"name":"SOS MN","performance":{"Performance":100,"Retention":50},"img_front_thumb":"SOS1U-front-thumb.jpg","img_front":"SOS1U-front.jpg","img_back_thumb":"SOS1U-ethernet-back-thumb.jpg","img_back":"SOS1U-ethernet-back.jpg","specs":{"Available Storage":"15 TB *","Management Ports":"2x10/25GbE SFP28, 4x1GbE RJ45, 2 x 1GbE RJ45","Form Factor":"1U"},"caveats":{"storageApproximated":true}}]},{"name":"Search Nodes","sensor":false,"appliances":[{"name":"SOS SN7200","performance":{"Performance":50,"Retention":100},"img_front_thumb":"SOS2U-front-thumb.jpg","img_front":"SOS2U-front.jpg","img_back_thumb":"SOS2U-back-thumb.jpg","img_back":"SOS2U-back.jpg","specs":{"Available Storage":"72 TB *","Management Ports":"4x10GbE SFP+, 2x10/25GbE SFP28,\\n4x1GbE RJ45, 2 x 1GbE RJ45","Form Factor":"2U"},"caveats":{"storageApproximated":true}},{"name":"SOS SNNV","performance":{"Performance":100,"Retention":75},"img_front_thumb":"SOS1U-front-thumb.jpg","img_front":"SOS1U-front.jpg","img_back_thumb":"SOS1U-SFP-back-thumb.jpg","img_back":"SOS1U-SFP-back.jpg","specs":{"Available Storage":"30 TB *","Management Ports":"2x1/10GbE SFP+, 2x10/25GbE SFP28, 2 x 1GbE RJ45","Form Factor":"1U","Notes":"Non-Volatile Memory storage"},"caveats":{"storageApproximated":true}}]}]}')},345:function(e,t,r){"use strict";var n=r(6),o=r(346)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),n(n.P+n.F*c,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r(92)("find")},346:function(e,t,r){var n=r(27),o=r(91),c=r(28),m=r(18),S=r(347);e.exports=function(e,t){var r=1==e,f=2==e,l=3==e,h=4==e,_=6==e,x=5==e||_,O=t||S;return function(t,S,d){for(var U,v,F=c(t),k=o(F),P=n(S,d,3),j=m(k.length),G=0,E=r?O(t,j):f?O(t,0):void 0;j>G;G++)if((x||G in k)&&(v=P(U=k[G],G,F),e))if(r)E[G]=v;else if(v)switch(e){case 3:return!0;case 5:return U;case 6:return G;case 2:E.push(U)}else if(h)return!1;return _?-1:l||h?h:E}}},347:function(e,t,r){var n=r(348);e.exports=function(e,t){return new(n(e))(t)}},348:function(e,t,r){var n=r(13),o=r(127),c=r(4)("species");e.exports=function(e){var t;return o(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!o(t.prototype)||(t=void 0),n(t)&&null===(t=t[c])&&(t=void 0)),void 0===t?Array:t}},373:function(e,t,r){"use strict";r.r(t);r(26),r(345),r(74),r(29);var n=r(2),o={scrollToTop:!0,asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,t.next=3,r.appliance.replace("_"," ");case 3:return n=t.sent,t.next=6,r.category.replace("_"," ");case 6:return o=t.sent,t.abrupt("return",{applianceName:n,role:o});case 8:case"end":return t.stop()}}),t)})))()},computed:{appliance:function(){var e=this;return r(254).roles.find((function(t){return t.name.toLowerCase()===e.role})).appliances.find((function(t){return t.name===e.applianceName}))}},head:function(){return{title:"Security Onion Solutions"}}},c=r(3),component=Object(c.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"xs:px-12"},[t("div",{staticClass:"xs:-mx-12"},[t("nuxt-link",{staticClass:"text-md xs:text-xl font-light w-full px-3 py-1 flex items-center nav-style bg-gray-100",attrs:{to:"/hardware"}},[this._v("\n      < Back to all appliances\n    ")])],1),this._v(" "),t("ApplianceDetails",{attrs:{appliance:this.appliance}})],1)}),[],!1,null,"d45ab3c4",null);t.default=component.exports;installComponents(component,{ApplianceDetails:r(139).default})}}]);