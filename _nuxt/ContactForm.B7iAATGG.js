import{_ as c,O as m,o as p,c as u,a as e,a0 as l,a1 as d,a2 as f,n as x,p as b,f as _,e as i}from"./entry.BKLso56_.js";const h=window.setInterval,g={props:{text:{type:String,default:""},source:{type:String,default:""}},data(){return{oid:"00D1U000000DI9i",lead_source:"Website",first_name:"",last_name:"",email:"",company:"",description:this.text,sitekey:m().public.sitekey,t:"",captchaSettings:""}},computed:{retUrl(){return typeof window>"u"?"":window.location.origin+"/thank_you"}},beforeMount(){this.captchaSettings={keyname:"reCAPTCHA",fallback:"true",orgId:"00D1U000000DI9i",ts:""};var o=document.createElement("script");o.src="https://www.google.com/recaptcha/api.js",document.head.appendChild(o)},mounted(){this.t=h(this.timestamp,500),window.recordSubmit=this.recordSubmit},beforeDestroy(){clearInterval(this.t)},methods:{buttonEnabled(){var o=this.first_name!==""&&this.last_name!==""&&this.company!==""&&this.email!==""&&this.description!=="";return o},recordSubmit(){this.$gtag("event","contact_form_submit",{event_category:"engagement",event_label:window.location.pathname+", "+this.source}),document.getElementById("contact_form").submit()},timestamp(){const o=document.getElementById("g-recaptcha-response");(o==null||o!==void 0&&o.value.trim()==="")&&(this.captchaSettings.ts=JSON.stringify(new Date().getTime()))}}},a=o=>(b("data-v-853eecee"),o=o(),_(),o),y={id:"contact_form",class:"bg-white rounded-lg pt-2 form-wrapper flex flex-col items-center"},w=a(()=>e("div",{class:"text-2xl xs:text-3xl"}," Contact Us ",-1)),v=a(()=>e("div",{class:"flex text-center px-2 xs:px-0 xs:w-2/3 justify-center my-4"},[e("p",null,[i(" Looking for free support of Security Onion or reporting an issue? "),e("span",{class:"text-so-blue cursor-pointer"},[e("a",{href:"https://securityonion.net/discuss"},"Click here")]),i(". ")])],-1)),k={id:"contact_form",action:"https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",method:"POST",class:"flex flex-col items-center px-2 xs:px-10 pt-3 xs:pt-2 pb-5 mb-4 w-full"},S={class:"block w-full"},U=["value"],I=a(()=>e("input",{type:"hidden",name:"oid",value:"00D1U000000DI9i"},null,-1)),D={class:"flex flex-row"},V={class:"w-1/2 block mr-3"},C=a(()=>e("label",{for:"first_name",class:"block text-gray-800 text-sm font-bold mb-2"},[i("First Name"),e("span",{class:"text-red-500"}," *")],-1)),E={class:"w-1/2 block"},T=a(()=>e("label",{for:"last_name",class:"block text-gray-800 text-sm font-bold mb-2"},[i("Last Name"),e("span",{class:"text-red-500"}," *")],-1)),N=a(()=>e("label",{for:"email",class:"block text-gray-800 text-sm font-bold mb-2"},[i("Email"),e("span",{class:"text-red-500"}," *")],-1)),z=a(()=>e("label",{for:"company",class:"block text-gray-800 text-sm font-bold mb-2"},[i("Company"),e("span",{class:"text-red-500"}," *")],-1)),B=a(()=>e("label",{for:"description",class:"block text-gray-800 text-sm font-bold mb-2"},[i("Description"),e("span",{class:"text-red-500"}," *")],-1)),O=a(()=>e("div",{class:"block text-red-500 text-sm font-bold mb-4 mt-1 ml-auto"}," * Required ",-1)),L=a(()=>e("option",{value:"Website"}," Website ",-1)),M=[L],W=["data-sitekey"],R=["disabled"];function j(o,t,A,F,s,r){return p(),u("div",y,[w,v,e("form",k,[e("div",S,[e("input",{type:"hidden",name:"captcha_settings",value:JSON.stringify(s.captchaSettings)},null,8,U),I,l(e("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>r.retUrl=n),type:"hidden",name:"retURL"},null,512),[[d,r.retUrl]]),e("div",D,[e("div",V,[C,l(e("input",{id:"first_name","onUpdate:modelValue":t[1]||(t[1]=n=>s.first_name=n),class:"shadow appearance-none border rounded w-full py-2 px-3 font-sans leading-tight focus:outline-none focus:shadow-outline text-sm xs:text-base mb-2",maxlength:"40",name:"first_name",size:"20",type:"text"},null,512),[[d,s.first_name]])]),e("div",E,[T,l(e("input",{id:"last_name","onUpdate:modelValue":t[2]||(t[2]=n=>s.last_name=n),class:"shadow appearance-none border rounded w-full py-2 px-3 font-sans leading-tight focus:outline-none focus:shadow-outline text-sm xs:text-base mb-2",maxlength:"80",name:"last_name",size:"20",type:"text"},null,512),[[d,s.last_name]])])]),N,l(e("input",{id:"email","onUpdate:modelValue":t[3]||(t[3]=n=>s.email=n),class:"shadow appearance-none border rounded w-full py-2 px-3 font-sans leading-tight focus:outline-none focus:shadow-outline text-sm xs:text-base mb-2",maxlength:"80",name:"email",size:"20",type:"text"},null,512),[[d,s.email]]),z,l(e("input",{id:"company","onUpdate:modelValue":t[4]||(t[4]=n=>s.company=n),class:"shadow appearance-none border rounded w-full py-2 px-3 font-sans leading-tight focus:outline-none focus:shadow-outline text-sm xs:text-base mb-2",maxlength:"40",name:"company",size:"20",type:"text"},null,512),[[d,s.company]]),B,l(e("textarea",{"onUpdate:modelValue":t[5]||(t[5]=n=>s.description=n),name:"description",placeholder:"...",rows:"5",class:"shadow appearance-none border rounded w-full py-2 px-3 font-sans leading-tight focus:outline-none focus:shadow-outline text-sm xs:text-base"},null,512),[[d,s.description]])]),O,l(e("select",{id:"lead_source","onUpdate:modelValue":t[6]||(t[6]=n=>s.lead_source=n),class:"hidden",name:"lead_source"},M,512),[[f,s.lead_source]]),e("div",{class:"g-recaptcha","data-sitekey":s.sitekey,"data-callback":"recordSubmit"},null,8,W),e("button",{id:"form_submit",class:x([r.buttonEnabled()?"enabled":"disabled"]),disabled:!r.buttonEnabled()}," Send Message ",10,R)])])}const P=c(g,[["render",j],["__scopeId","data-v-853eecee"]]);export{P as default};