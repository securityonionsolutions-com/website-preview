(window.webpackJsonp=window.webpackJsonp||[]).push([[54,3,9,10,12,14,21,27,28,29,30,32,33,39],{276:function(t,e,n){"use strict";n.r(e);var r={props:{align:{type:String,default:"center"},showHeader:{type:Boolean,default:!0}},methods:{alignment:function(){switch(this.align){case"center":return"text-center";case"right":return"text-right";case"left":return"text-left";default:return"text-center"}}}},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.alignment()},[t.showHeader?n("header",{staticClass:"text-xl xs:text-2xl font-bold mb-2"},[t._t("header")],2):t._e(),t._v(" "),n("div",{staticClass:"text-sm xs:text-lg"},[t._t("body")],2)])}),[],!1,null,null,null);e.default=component.exports},277:function(t,e,n){"use strict";n.r(e);n(93),n(279);var r={props:{alternate:{type:Boolean,default:!1},link:{type:String,default:""}},computed:{external:function(){return!(!this.link.startsWith("http")&&!this.link.startsWith("https"))&&"_blank"}},methods:{baseType:function(){return""!==this.link?"a":"div"}}},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.baseType(),{tag:"component",attrs:{href:[""!==t.link&&t.link],target:t.external},on:{click:function(e){return t.$emit("click")}}},[n("button",{staticClass:"shadow-lg font-bold py-2 px-2 xs:px-4 rounded-full focus:outline-none focus:shadow-outline block",class:[t.alternate?"bg-white text-black hover:bg-gray-100":"bg-so-blue text-white hover:bg-blue-700"],attrs:{type:"button"}},[n("div",{staticClass:"mx-6"},[t._t("default",[t._v("\n        Button Text\n      ")])],2)])])}),[],!1,null,null,null);e.default=component.exports},278:function(t,e,n){"use strict";var r=n(5),l=n(28),o=n(29),c=n(135),d=n(75),f=n(10),x=n(55).f,m=n(56).f,v=n(14).f,h=n(281).trim,_="Number",y=r.Number,C=y,w=y.prototype,k=o(n(92)(w))==_,S="trim"in String.prototype,j=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,l,o=(e=S?e.trim():h(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+e}for(var code,c=e.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>l)return NaN;return parseInt(c,r)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(k?f((function(){w.valueOf.call(n)})):o(n)!=_)?c(new C(j(e)),n,y):j(e)};for(var O,T=n(8)?x(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;T.length>E;E++)l(C,O=T[E])&&!l(y,O)&&v(y,O,m(C,O));y.prototype=w,w.constructor=y,n(16)(r,_,y)}},279:function(t,e,n){"use strict";n(280)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},280:function(t,e,n){var r=n(4),l=n(10),o=n(35),c=/"/g,d=function(t,e,n,r){var l=String(o(t)),d="<"+e;return""!==n&&(d+=" "+n+'="'+String(r).replace(c,"&quot;")+'"'),d+">"+l+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(d),r(r.P+r.F*l((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},281:function(t,e,n){var r=n(4),l=n(35),o=n(10),c=n(282),d="["+c+"]",f=RegExp("^"+d+d+"*"),x=RegExp(d+d+"*$"),m=function(t,e,n){var l={},d=o((function(){return!!c[t]()||"​"!="​"[t]()})),f=l[t]=d?e(v):c[t];n&&(l[n]=f),r(r.P+r.F*d,"String",l)},v=m.trim=function(t,e){return t=String(l(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(x,"")),t};t.exports=m},282:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},283:function(t,e,n){var content=n(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("5b64a149",content,!0,{sourceMap:!1})},284:function(t,e,n){var content=n(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("376a1d54",content,!0,{sourceMap:!1})},285:function(t,e,n){var content=n(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("5f3fab1a",content,!0,{sourceMap:!1})},286:function(t,e,n){"use strict";n.r(e);var r={components:{SoButton:n(277).default},props:{alternate:{type:Boolean,default:!1},link:{type:String,default:""}}},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col xl:flex-row justify-between items-center xl:mx-12"},[n("div",{staticClass:"text-3xl xs:text-4xl xl:mr-6 mb-5 xl:mb-0 text-center xs:text-left"},[t._t("info")],2),t._v(" "),n("div",{staticClass:"block"},[n("so-button",{staticClass:"whitespace-no-wrap w-full",attrs:{alternate:t.alternate,link:t.link},nativeOn:{click:function(e){return t.$emit("button-click")}}},[t._t("button-text")],2)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SoButton:n(277).default})},287:function(t,e,n){"use strict";n.r(e);var r={props:{align:{type:String,default:"center"}},methods:{alignment:function(){switch(this.align){case"center":return"text-center";case"right":return"text-right";case"left":return"text-left";default:return"text-center"}}}},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"text-3xl xl:text-4xl font-semibold",class:t.alignment()},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},288:function(t,e,n){var map={"./1mil+_downloads.jpg":144,"./appliance.jpg":145,"./conference.jpg":137,"./copper.jpg":146,"./course.jpg":147,"./dots.jpg":148,"./github_sos.jpg":149,"./graph.jpg":138,"./grid-thumb.jpg":150,"./grid.jpg":151,"./grid_list.jpg":152,"./hardware.jpg":139,"./install.jpg":153,"./instructor.jpg":154,"./live.jpg":155,"./mike-speaking.jpg":156,"./new-team.jpg":157,"./old-server-mockup.jpg":158,"./peelback-half.jpg":140,"./security_onion_solutions_rings.jpg":159,"./soc.jpg":160,"./sos-site-header-2-square.jpg":161,"./squares.jpg":136,"./terms.jpg":141,"./training.jpg":142,"./training1.jpg":162,"./training2.jpg":163,"./workbook.jpg":164,"./world.jpg":143};function r(t){var e=l(t);return n(e)}function l(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=l,t.exports=r,r.id=288},289:function(t,e,n){"use strict";n(283)},290:function(t,e,n){var r=n(22)(!1);r.push([t.i,".herobase[data-v-6318ec5c]{height:400px}",""]),t.exports=r},291:function(t,e,n){"use strict";n(284)},292:function(t,e,n){var r=n(22)(!1);r.push([t.i,".size[data-v-2fa13c8a]{height:15rem;width:15rem;min-width:15rem}@media (min-width:480px){.size[data-v-2fa13c8a]{height:var(--size);width:var(--size);min-width:var(--size)}}",""]),t.exports=r},293:function(t,e,n){"use strict";n.r(e);n(278),n(37),n(36);var r={props:{size:{type:Number,default:20},padding:{type:Boolean,default:!0},fileName:{type:String,default:"",required:!0},clickable:{type:Boolean,default:!1}},computed:{sizeVar:function(){return{"--size":"".concat(this.size,"rem")}}},methods:{importImage:function(){return n(288)("./".concat(this.fileName))},handleClick:function(){if(this.clickable){var t=this.fileName.includes("-thumb")?"fullsize":"thumbnail";this.$nuxt.$emit("show-image-zoom",{imageName:this.fileName,imageType:t})}}}},l=(n(291),n(9)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-center items-center m-auto size",class:[t.padding?"bg-white rounded-full overflow-hidden":"xs:p-0",t.clickable?"transform hover:scale-105 transition duration-200 ease-in-out cursor-pointer":""],style:t.sizeVar,on:{click:function(e){return t.handleClick()}}},[n("img",{attrs:{src:t.importImage()}})])}),[],!1,null,"2fa13c8a",null);e.default=component.exports},294:function(t,e,n){"use strict";n.r(e);n(289);var r=n(9),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"herobase flex flex-row xs:-mx-12"},[n("div",{staticClass:"flex flex-col w-full md:w-1/2 h-full items-center bg-white bg-opacity-90 md:bg-opacity-100 pt-16 px-2 xs:px-8"},[n("header",{staticClass:"text-3xl xl:text-5xl font-bold text-center"},[t._t("header")],2),t._v(" "),n("div",{staticClass:"text-lg xl:text-2xl"},[t._t("body")],2)]),t._v(" "),n("div",{staticClass:"md:flex md:flex-col md:w-1/4 md:h-full md:bg-gradient-to-r md:from-white md:to-transparent"})])}),[],!1,null,"6318ec5c",null);e.default=component.exports},295:function(t,e,n){"use strict";n.r(e);var r={props:{alternate:{type:Boolean,default:!1}}},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex flex-col"},[n("div",{staticClass:"xs:-ml-12 xs:-mr-12",class:[t.alternate?"bg-so-blue":""],staticStyle:{height:"90px"}}),t._v(" "),t._t("default"),t._v(" "),n("div",{staticClass:"xs:-ml-12 xs:-mr-12",class:[t.alternate?"bg-so-blue":""],staticStyle:{height:"70px"}})],2)])}),[],!1,null,null,null);e.default=component.exports},296:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},297:function(t,e,n){"use strict";n(285)},298:function(t,e,n){var r=n(22)(!1);r.push([t.i,".nav-style{border-bottom:1px solid #d3d3d3}",""]),t.exports=r},299:function(t,e,n){"use strict";n.r(e);var r={props:{pageName:{type:String,default:""},links:{type:Array,default:function(){return[{name:"",id:""}]}}}},l=(n(297),n(9)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xs:-mx-12"},[n("div",{staticClass:"w-full px-2 xs:px-4 pt-1 flex flex-wrap justify-between items-center nav-style bg-gray-100"},[n("div",{staticClass:"text-md xs:text-xl font-light pb-1"},[t._v("\n      "+t._s(t.pageName)+"\n      "),n("noscript",[t._v("\n        Test\n      ")])]),t._v(" "),n("div",{staticClass:"flex flex-row -mx-2 content-center font-light pb-1 text-xs xs:text-base"},t._l(t.links,(function(link,e){return n("div",{key:link.name,staticClass:"flex flex-row"},[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#"+link.id,expression:"`#${link.id}`"}],staticClass:"px-2 hover:text-gray-700",attrs:{href:"#"}},[t._v("\n          "+t._s(link.name)+"\n        ")]),t._v(" "),e!==t.links.length-1?n("div",{staticClass:"xs:px-1"},[t._v("\n          •\n        ")]):t._e()])})),0)])])}),[],!1,null,null,null);e.default=component.exports},301:function(t,e,n){"use strict";n.r(e);var r={components:{DetailPara:n(276).default},props:{textMargin:{type:Boolean,default:!0}}},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col lg:flex-row lg:justify-start items-center"},[n("div",{staticClass:"mb-4 lg:mb-0"},[t._t("graphic")],2),t._v(" "),n("detail-para",{class:[t.textMargin?"lg:ml-12":"xs:pl-4"],scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"text-3xl"},[t._t("header")],2)]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-base xs:text-xl"},[t._t("body")],2)]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DetailPara:n(276).default})},302:function(t,e,n){"use strict";n.r(e);var r={components:{DetailPara:n(276).default},props:{textMargin:{type:Boolean,default:!0}}},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col lg:flex-row lg:justify-start items-center"},[n("detail-para",{staticClass:"order-2 lg:order-1",class:[t.textMargin?"lg:mr-12":"xs:pr-4"],scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"text-3xl"},[t._t("header")],2)]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-base xs:text-xl"},[t._t("body")],2)]},proxy:!0}],null,!0)}),t._v(" "),n("div",{staticClass:"order-1 lg:order-2 mb-4 lg:mb-0"},[t._t("graphic")],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DetailPara:n(276).default})},303:function(t,e,n){var content=n(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("350a7d5d",content,!0,{sourceMap:!1})},312:function(t,e,n){var content=n(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("99eb1886",content,!0,{sourceMap:!1})},313:function(t,e,n){"use strict";n(303)},314:function(t,e,n){var r=n(22)(!1);r.push([t.i,".name[data-v-9b386704]{right:-2%;bottom:-40%}",""]),t.exports=r},320:function(t,e,n){"use strict";n.r(e);var r={props:{alternate:{type:Boolean,default:!1}}},l=(n(313),n(9)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col items-center"},[n("div",{staticClass:"shadow-sm border font-bold p-4 xs:p-6 xl:py-4 xl:px-4 rounded-xl m-1 relative mx-2 lg:mx-12",class:[t.alternate?"bg-so-blue text-white":"bg-white text-black"]},[n("div",{staticClass:"mx-4 text-sm xs:text-base"},[t._t("text")],2)])])}),[],!1,null,"9b386704",null);e.default=component.exports},339:function(t,e,n){"use strict";n(312)},340:function(t,e,n){var r=n(22)(!1);r.push([t.i,".hooper{height:auto}",""]),t.exports=r},362:function(t,e,n){var content=n(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("42589c40",content,!0,{sourceMap:!1})},377:function(t,e,n){"use strict";n.r(e);n(19);var r={components:{},props:{scheduleList:{type:Array,default:function(){return[]}}},data:function(){return{dateTimeOptions:{day:"numeric",year:"numeric",month:"short",hour:"numeric",minute:"numeric",timeZoneName:"short"}}},methods:{recordRegisterClick:function(t){this.$gtag("event","register_click",{event_category:"engagement",event_label:t.name})}}},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-12"},[n("ul",t._l(t.scheduleList,(function(e,r){return n("li",{key:r,staticClass:"mb-6 hover:shadow-lg"},[n("a",{attrs:{href:e.register_link,target:"_blank"},on:{click:function(n){return t.recordRegisterClick(e)}}},[n("div",{staticClass:"bg-gray-200 bg-opacity-50 border rounded-md overflow-hidden"},[n("div",{staticClass:"flex h-auto p-2 bg-gray-400 bg-opacity-25"},[n("span",{staticClass:"font-semibold text-xl"},[t._v(t._s(e.name))])]),t._v(" "),n("div",{staticClass:"h-auto px-4 pt-2 pb-4"},[n("div",{staticClass:"mb-4"},[n("span",{staticClass:"font-normal text-lg"},[t._v(t._s(e.summary))])]),t._v(" "),n("div",{staticClass:"mb-1 font-light"},[t._v("\n              "+t._s(new Date(e.start).toLocaleString("en-US",t.dateTimeOptions))+" - "+t._s(new Date(e.end).toLocaleString("en-US",t.dateTimeOptions))+"\n            ")]),t._v(" "),n("div",{staticClass:"mb-1 font-light"},[t._v("\n              "+t._s(e.location)+"\n            ")])]),t._v(" "),n("div",{staticClass:"h-auto flex items-center justify-end bg-gray-400 bg-opacity-25 border-top border-dotted border-gray-800"},[n("div",{staticClass:"text-sm xs:text-xs text-so-blue xs:text-base px-4 py-2 flex items-center"},[n("div",{staticClass:"mr-2 font-semibold"},[t._v("Register")]),t._v(" "),n("fa",{attrs:{icon:["fas","external-link-alt"]}})],1)])])])])})),0)])}),[],!1,null,"c2d72c62",null);e.default=component.exports},378:function(t,e,n){"use strict";n.r(e);var r=n(363),l=(n(364),{components:{Hooper:r.a,Slide:r.b},props:{list:{type:Array,default:function(){return[]}},alternate:{type:Boolean,default:!1}},data:function(){return{settings:{mouseDrag:!1,touchDrag:!1,wheelControl:!1,keysControl:!1,autoPlay:!0,playSpeed:8e3,transition:800,trimWhiteSpace:!0,itemsToShow:1}}}}),o=(n(339),n(9)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hooper",{staticClass:"focus:outline-none",attrs:{tabindex:"-1",settings:t.settings}},t._l(t.list,(function(e,r){return n("slide",{key:r},[n("Testimonial",{attrs:{alternate:t.alternate},scopedSlots:t._u([{key:"text",fn:function(){return[t._v("\n          "+t._s(e)+"\n        ")]},proxy:!0}],null,!0)})],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Testimonial:n(320).default})},399:function(t){t.exports=JSON.parse('{"events":[{"name":"Security Onion 2 Fundamentals for Analysts & Admins - Virtual June 2021","summary":"Learn how to architect, manage, deploy, and effectively use Security Onion 2 in this 4-day course delivered virtually, June 7-10, 2021.","start":"2021-06-07T08:00:00","end":"2021-06-10T17:00:00","location":"Virtual","register_link":"https://www.eventbrite.com/e/security-onion-2-fundamentals-for-analysts-admins-virtual-june-2021-registration-143801962541"}]}')},400:function(t,e,n){"use strict";n(362)},401:function(t,e,n){var r=n(22),l=n(296),o=n(142),c=r(!1),d=l(o);c.push([t.i,'.graphic[data-v-0dddf8e4]{height:25rem;min-width:25rem}.video-container[data-v-0dddf8e4]{overflow:hidden;position:relative}.video-container[data-v-0dddf8e4]:after{padding-top:56.25%;display:block;content:""}.video-container iframe[data-v-0dddf8e4]{position:absolute;top:0;left:0;width:100%;height:100%}.hero-training[data-v-0dddf8e4]{background:100% 100% no-repeat url('+d+")}",""]),t.exports=c},430:function(t,e,n){"use strict";n.r(e);var r={scrollToTop:!0,components:{SectionHeader:n(287).default},data:function(){return{scheduleList:n(399).events,links:[{name:"Free",id:"free-training"},{name:"Premium",id:"premium-on-demand"},{name:"Instructor Led",id:"instructor-training"}],testimonialList:["I needed this class. This is the best instruction of SO and dedicated time to it that I have ever had.","One can tell they're not just instructors. They know the subject at an engineering level.","I've really been impressed by how this training event went. Outstanding job","It's very very rare that I get to be in a class with practitioners that are as awesome and knowledgeable as Security Onion Solutions.",'The labs were absolutely necessary and going through the case studies to "find evil" was the best.']}},head:function(){return{title:"Security Onion Solutions - Training"}}},l=(n(400),n(9)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xs:px-12"},[n("PageNav",{attrs:{"page-name":"Training",links:t.links}}),t._v(" "),n("SubHero",{staticClass:"hero-training text-center",scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n      Official Training\n    ")]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"justify-center"},[n("div",{staticClass:"flex flex-row text-2xl justify-center"},[t._v("\n          Security Onion Solutions is the only official training provider of the Security Onion software.\n        ")]),t._v(" "),n("div",{staticClass:"flex flex-row text-xl font-light justify-center mt-8"},[t._v("\n          Choose from On-Demand (Free and Premium) or Instructor Led training.\n        ")])])]},proxy:!0}])}),t._v(" "),n("ContentSection",{attrs:{id:"free-training",alternate:!0}},[n("div",{staticClass:"bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32"},[n("section-header",{staticClass:"mb-6"},[t._v("\n        Free On-Demand\n      ")]),t._v(" "),n("div",{staticClass:"text-center text-base xs:text-lg mb-16"},[n("p",[t._v("\n          Get started by taking the "),n("span",{staticClass:"italic"},[t._v("free")]),t._v(" "),n("span",{staticClass:"font-semibold"},[t._v("Security Onion 2 Essentials")]),t._v(" training.\n        ")]),t._v(" "),n("p",[t._v("\n          This course is a prerequisite to the premium on-demand courses.\n        ")])]),t._v(" "),n("div",{staticClass:"flex justify-center video-container"},[n("iframe",{attrs:{src:"https://www.youtube.com/embed/watch?v=5fxVaVO8-L8&list=PLljFlTO9rB155aYBjHw2InKkSMLuhWpxH",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1)]),t._v(" "),n("ContentSection",{attrs:{id:"premium-on-demand"}},[n("div",{staticClass:"xs:-mx-12 px-6 xs:px-12 lg:px-32"},[n("section-header",{staticClass:"mb-6"},[t._v("\n        Premium On-Demand\n      ")]),t._v(" "),n("div",{staticClass:"text-left text-xl"},[t._v("\n        We offer online training via on-demand training modules.\n        They are a cost-effective alternative to instructor led training, but do not include the in-depth, hands-on labs that our instructor led classes offer.\n      ")]),t._v(" "),n("feature-left",{staticClass:"my-12",scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"text-center xs:text-left"},[t._v("\n            Security Onion 2\n          ")])]},proxy:!0},{key:"graphic",fn:function(){return[n("Graphic",{staticClass:"shadow-xl",attrs:{padding:!1,"file-name":"training1.jpg",size:20}})]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-left"},[t._v("\n            Courses include:\n            "),n("ul",{staticClass:"list-disc ml-6 mb-6"},[n("li",{staticClass:"my-2"},[t._v("\n                Security Onion 2 in Production "),n("span",{staticClass:"bg-gray-200  text-sm text-blue-500 font-semibold py-1 px-2 rounded-md whitespace-no-wrap"},[n("a",{attrs:{href:"https://onlinetraining.securityonionsolutions.com/p/security-onion-in-production/"}},[t._v("\n                    Enroll\n                    "),n("fa",{attrs:{icon:"external-link-alt"}})],1)])]),t._v(" "),n("li",{staticClass:"my-2"},[t._v("\n                Developing Your Detection Playbook With Security Onion 2 "),n("span",{staticClass:"bg-gray-200 text-sm text-blue-500 font-semibold py-1 px-2 rounded-md whitespace-no-wrap"},[n("a",{attrs:{href:"https://onlinetraining.securityonionsolutions.com/p/developing-your-detection-playbook-with-security-onion-2/"}},[t._v("\n                    Enroll\n                    "),n("fa",{attrs:{icon:"external-link-alt"}})],1)])])])]),t._v(" "),n("div",{staticClass:"align-center hidden"},[n("action-callout",{staticClass:"my-12",attrs:{link:"https://onlinetraining.securityonionsolutions.com/"},scopedSlots:t._u([{key:"button-text",fn:function(){return[n("div",{staticClass:"text-lg my-1"},[t._v("\n                  Get Started\n                ")])]},proxy:!0}])})],1)]},proxy:!0}])}),t._v(" "),n("action-callout",{staticClass:"my-12",attrs:{link:"https://onlinetraining.securityonionsolutions.com/"},scopedSlots:t._u([{key:"info",fn:function(){return[n("div",[t._v("\n            Ready to check out the course details?\n          ")])]},proxy:!0},{key:"button-text",fn:function(){return[n("div",{staticClass:"text-lg my-1"},[t._v("\n            Get Started\n          ")])]},proxy:!0}])})],1)]),t._v(" "),n("ContentSection",{attrs:{id:"instructor-training",alternate:!0}},[n("div",{staticClass:"bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32"},[n("section-header",{staticClass:"mb-6"},[t._v("\n        Instructor Led Training\n      ")]),t._v(" "),n("feature-right",{staticClass:"xs:mb-12",attrs:{"text-margin":!0},scopedSlots:t._u([{key:"graphic",fn:function(){return[n("Graphic",{attrs:{"file-name":"live.jpg",size:20,padding:!1}})]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-center xs:text-left"},[t._v("\n            We offer multi-day comprehensive training classes with hands-on labs and real-world case studies for reinforcement!\n            Students receive printed course materials and a Certificate of Completion ready to make their adversaries cry!\n          ")]),t._v(" "),n("action-callout",{staticClass:"my-6",attrs:{alternate:!0},on:{"button-click":function(e){return t.$nuxt.$emit("show-contact-modal",{text:"Please contact me with more information about private training classes.",source:"training_private_contact_us"})}},scopedSlots:t._u([{key:"info",fn:function(){return[n("div",{staticClass:"text-xl"},[t._v("\n                Have at least 8 students and want private instructor-led training?\n              ")])]},proxy:!0},{key:"button-text",fn:function(){return[n("div",{staticClass:"text-lg my-1"},[t._v("\n                Find Out How\n              ")])]},proxy:!0}])})]},proxy:!0}])}),t._v(" "),n("DetailPara",{staticClass:"mb-16 mt-10",scopedSlots:t._u([{key:"body",fn:function(){return[t._v("\n          We are proud to offer GSA pricing through our partner IntelliGenesis!\n          Eligible organizations, please\n          "),n("span",{staticClass:"hover:text-gray-900 cursor-pointer underline",on:{click:function(e){return t.$nuxt.$emit("show-contact-modal",{text:"Please contact me with more information about GSA pricing.",source:"GSA_pricing_info"})}}},[t._v("contact us")]),t._v("\n          for more information.\n        ")]},proxy:!0}])})],1)]),t._v(" "),n("ContentSection",{attrs:{id:"public-training"}},[n("div",{staticClass:"xs:-mx-12 px-6 xs:px-12 lg:px-32"},[n("section-header",{staticClass:"mb-6"},[t._v("\n        Upcoming Instructor Led Training Events\n      ")]),t._v(" "),n("div",{staticClass:"flex justify-center"},[0!==t.scheduleList.length?n("training-table",{staticClass:"mx-2 xs:mx-12 lg:mx-24 xl:mx-32 w-full",attrs:{"schedule-list":t.scheduleList}}):t._e(),t._v(" "),0==t.scheduleList.length?n("div",{staticClass:"text-xl"},[t._v("\n          No classes are currently scheduled.\n        ")]):t._e()],1)],1)]),t._v(" "),n("ContentSection",{attrs:{id:"testimonials",alternate:!0}},[n("div",{staticClass:"bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32"},[n("SectionHeader",{staticClass:"mb-6"},[t._v("\n        Student Feedback\n      ")]),t._v(" "),n("client-only",[n("TestimonialList",{attrs:{list:t.testimonialList}})],1),t._v(" "),n("noscript",{inlineTemplate:{render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("Testimonial",{scopedSlots:t._u([{key:"text",fn:function(){return[t._v("\n        "+t._s(t.testimonialList[1])+"\n        ")]},proxy:!0}])})},staticRenderFns:[]}})],1)])],1)}),[],!1,null,"0dddf8e4",null);e.default=component.exports;installComponents(component,{PageNav:n(299).default,SubHero:n(294).default,SectionHeader:n(287).default,ContentSection:n(295).default,Graphic:n(293).default,ActionCallout:n(286).default,FeatureLeft:n(302).default,FeatureRight:n(301).default,DetailPara:n(276).default,TrainingTable:n(377).default,SectionHeader:n(287).default,TestimonialList:n(378).default,Testimonial:n(320).default})}}]);