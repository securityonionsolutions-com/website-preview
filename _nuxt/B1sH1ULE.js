import{_ as M}from"./pk654FrO.js";import{_ as V}from"./ibiv5f_N.js";import C from"./DoIyH85R.js";import{S as j,_ as T}from"./KvK3aitp.js";import{s as B}from"./BORPHCCO.js";import{_ as G}from"./BlR97Qgt.js";import{F as H,a as I}from"./CZW4K3zH.js";import{_ as $,r,o as l,c as i,d as o,w as t,e as c,a as e,F as y,h as w,t as p,i as S,f as z,g as P}from"./BlWsdup3.js";import{A as L}from"./BN7qD9Bu.js";import{F as D}from"./CSMdYj8F.js";import{F as E}from"./-VOnLTyd.js";import{F as U}from"./C_9zNuOR.js";import"./DKzsDYrr.js";import"./CimkHswU.js";import"./BUFpH3nA.js";import"./DWmbSlpl.js";const W={components:{Footnotes:H},data:()=>({appliances:I}),methods:{thumbnail(n){return`/img/appliances/${n.img_front_thumb}`},handleClick(n){this.$router.push(`/hardware/${n.name.replace(" ","_")}`)}}},q={class:"w-full"},J={class:"mx-auto table-auto rounded-md border-separate border border-blue-400 bg-blue mb-12"},K=e("thead",null,[e("tr",{class:"bg-blue-400 text-left text-white"},[e("th",{class:"hidden md:table-cell px-2 truncate",style:{"min-width":"1.3em"}},[e("div",null," ")]),e("th",{class:"hidden md:table-cell px-2 truncate"}),e("th",{class:"truncate"},[e("div",null," "),e("div",null,"Model")]),e("th",{class:"hidden xl:table-cell px-2 truncate"},[e("div",null," "),e("div",null,"Use Case(s)")]),e("th",{class:"text-center px-2 truncate"},[e("div",null,"Forward Node"),e("div",null,"Throughput †")]),e("th",{class:"text-center px-2 truncate"},[e("div",null,"Max"),e("div",null,"Storage *")]),e("th",{class:"hidden sm:table-cell text-center px-2 truncate"},[e("div",null,"Form"),e("div",null,"Factor")])])],-1),Q=["onClick"],X=["textContent"],Y={key:1,class:"hidden md:table-cell border-t border-blue-400 text-white bg-white pl-1 pr-1 pt-2 truncate vert-header"},Z={class:"hidden md:table-cell border-t border-blue-400 truncate w-1/4"},ee=["src"],te={class:"text-right border-t border-blue-400 px-2 truncate"},oe={class:"flex flex-row"},ne={class:"hidden xl:table-cell border-t border-blue-400 px-2 truncate"},se=["textContent"],ae=["textContent"],re=["textContent"],le=["textContent"];function ie(n,d,k,F,N,h){const m=G,x=C,f=r("Footnotes");return l(),i("div",q,[o(m,{class:"mb-8"},{default:t(()=>[c(" Appliance Comparison ")]),_:1}),e("table",J,[K,e("tbody",null,[(l(!0),i(y,null,w(n.appliances,(s,u)=>(l(),i("tr",{key:u,class:"bg-white cursor-pointer",onClick:_=>h.handleClick(s)},[s.category=="Response Ready"?(l(),i("td",{key:0,class:"hidden md:table-cell border-t border-blue-400 text-white bg-blue-400 pl-1 pr-1 pt-2 truncate vert-header",textContent:p(s.category)},null,8,X)):S("",!0),s.category!="Response Ready"?(l(),i("td",Y)):S("",!0),e("td",Z,[e("img",{src:h.thumbnail(s)},null,8,ee)]),e("td",te,[e("div",oe,[c(p(s.name)+" ",1),o(x,{name:"fa6-solid:circle-info",class:"mx-2 mt-1 text-base"})])]),e("td",ne,[(l(!0),i(y,null,w(s.roles,(_,b)=>(l(),i("div",{key:b,textContent:p(_)},null,8,se))),128))]),e("td",{class:"text-right border-t border-blue-400 px-2 truncate",textContent:p(s.specs["Forward Node Throughput †"])},null,8,ae),e("td",{class:"text-right border-t border-blue-400 px-2 truncate",textContent:p(s.specs["Data Storage *"])},null,8,re),e("td",{class:"hidden sm:table-cell text-right border-t border-blue-400 px-2 truncate",textContent:p(s.specs["Form Factor"])},null,8,le)],8,Q))),128))])]),o(f)])}const ce=$(W,[["render",ie]]),de={scrollToTop:!0,components:{ApplianceGrid:ce,SubHero:j,ActionCallout:L,FeatureRight:D,FeatureLeft:E,FeatureLeftAction:U},data:()=>({sos:B,links:[{name:"Overview",id:"overview"},{name:"Comparison",id:"comparison"}]}),head(){return{title:"Security Onion Solutions"}}},a=n=>(z("data-v-0d68437b"),n=n(),P(),n),pe={class:"xs:px-12"},ue=a(()=>e("div",{class:"flex justify-center text-center"},[e("div",{class:"text-2xl"},[c(" Check out the "),e("a",{href:"/hardware/SNNV"},"SOS SNNV"),c("! "),e("br"),c(" SOS SNNV uses extremely fast Non-volatile Memory (NVMe) for data storage. ")])],-1)),_e={class:"flex justify-center"},he={class:"px-6 xs:px-12 lg:px-32"},me=a(()=>e("div",{class:"text-center xs:text-left"}," Official Hardware Appliances for Security Onion ",-1)),xe=a(()=>e("div",{class:"text-center xs:text-left"}," We know Security Onion's hardware needs, and our appliances are the perfect match for the platform. Leave the hardware research, testing, and support to us, so you can focus on what's important for your organization. ",-1)),fe=a(()=>e("div",{class:"text-center xs:text-left"}," Integration with Security Onion ",-1)),be=a(()=>e("div",{class:"text-left"}," Security Onion's SOC interface provides appliance-specific information directly in the user-interface. Use this information to monitor the appliance's health in realtime. Also view the appliance front and rear panels, useful for walking through connectivity discussions with personnel in the data center. Only official Security Onion Solutions appliances are supported with this integration. ",-1)),ve=a(()=>e("div",{class:"text-center xs:text-left"}," Support Security Onion ",-1)),ge=a(()=>e("div",{class:"text-center xs:text-left"}," Not only will you have confidence that your Security Onion deployment is running on the best-suited hardware, you will also be supporting future development and maintenance of the Security Onion project! ",-1)),ye=a(()=>e("div",{class:"text-3xl mb-6 text-left"}," Response-Ready Appliances ",-1)),we=a(()=>e("div",{class:"flex flex-col text-left"},[e("div",null," Our Response-Ready appliance provide rapidly deployable options for: "),e("ul",{class:"list-disc list-inside pl-1 -mr-1"},[e("li",null," Government, Military, or Commercial Applications "),e("li",null," Tactical Edge Enterprise Security Monitoring "),e("li",null," Deployable, Small Form Factor, and ATA-Compliant ")])],-1)),Se={class:"lg:-ml-4"},Ce={class:"flex flex-col items-center justify-center mx-1 xs:-mx-10 sm:mx-0"},$e={class:"px-6 xs:px-12 lg:px-32 -my-8"},ke=a(()=>e("div",{class:"text-3xl flex justify-center text-center md:text-left"},[e("div",null," Ready to purchase or need more information? ")],-1)),Fe=a(()=>e("div",{class:"text-lg my-1"}," Contact Us ",-1));function Ne(n,d,k,F,N,h){const m=M,x=r("ActionCallout"),f=r("SubHero"),s=V,u=r("feature-right"),_=r("feature-left"),b=C,O=r("feature-left-action"),v=T,A=r("ApplianceGrid"),R=r("action-callout");return l(),i("div",pe,[o(m,{"page-name":"Appliances",links:n.links},null,8,["links"]),o(f,{id:"download-before",class:"hero-hardware"},{header:t(()=>[c(" Have a need for speed? ")]),body:t(()=>[ue,e("div",_e,[o(x,{class:"mt-4",onButtonClick:d[0]||(d[0]=g=>n.sos.showContactModal({text:"Please contact me with more information about the SOS SNNV.",source:"hw_purchase"}))},{"button-text":t(()=>[c(" Purchase ")]),_:1})])]),_:1}),o(v,{id:"overview",alternate:!0},{default:t(()=>[e("div",he,[o(u,{class:"xs:mb-12","text-margin":!0},{header:t(()=>[me]),graphic:t(()=>[e("div",null,[o(s,{"file-name":"appliance.jpg",size:20})])]),body:t(()=>[xe]),_:1}),o(_,{class:"my-12"},{header:t(()=>[fe]),graphic:t(()=>[e("div",null,[o(s,{class:"shadow-xl rounded-md overflow-hidden",padding:!1,size:20,"file-name":"grid-thumb.jpg",clickable:!0})])]),body:t(()=>[be]),_:1}),o(u,{class:"xs:mb-20","text-margin":!0},{header:t(()=>[ve]),graphic:t(()=>[o(b,{name:"fa-solid:hands-helping",size:"10em"})]),body:t(()=>[ge]),_:1}),o(O,{alternate:!0,onButtonClick:d[1]||(d[1]=g=>n.sos.showContactModal({text:"Please contact me with more information about Response-Ready appliances.",source:"hw_r2_purchasing_info"}))},{header:t(()=>[ye]),body:t(()=>[we]),graphic:t(()=>[e("div",Se,[o(s,{class:"shadow-xl rounded-xl overflow-hidden",size:20,"file-name":"so-onion-camo.jpg"})])]),"button-text":t(()=>[c(" Get More Info ")]),_:1})])]),_:1}),o(v,{id:"comparison"},{default:t(()=>[e("div",Ce,[o(A)])]),_:1}),o(v,{id:"hardwarehelp",alternate:!0},{default:t(()=>[e("div",$e,[o(R,{alternate:!0,class:"my-12",onButtonClick:d[2]||(d[2]=g=>n.sos.showContactModal({text:"Please contact me with more information about Security Onion appliances.",source:"hw_purchasing_info"}))},{info:t(()=>[ke]),"button-text":t(()=>[Fe]),_:1})])]),_:1})])}const Ue=$(de,[["render",Ne],["__scopeId","data-v-0d68437b"]]);export{Ue as default};