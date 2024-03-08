"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[84],{1084:function(e,r,s){s.r(r),s.d(r,{default:function(){return V}});var t=s(6768),o=s(4232),a=s(5130);const n={class:"vh-100",style:{"background-color":"#eee"}},l={class:"container h-100"},i={class:"row d-flex justify-content-center align-items-center h-100"},c={class:"col-lg-12 col-xl-11"},d={class:"card-group text-black",style:{"border-radius":"25px"}},m={class:"card-body p-md-5"},p={class:"row justify-content-center"},u={class:"col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1"},b=(0,t.Lk)("p",{class:"text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"}," Login ",-1),g={class:"d-flex flex-row align-items-center mb-4"},k={class:"form-outline flex-fill mb-0"},f=(0,t.Lk)("label",{class:"form-label",for:"username"},"Your Name",-1),x={class:"d-flex flex-row align-items-center mb-4"},L={class:"form-outline flex-fill mb-0"},w=(0,t.Lk)("label",{class:"form-label",for:"password"},"Password",-1),h=(0,t.Lk)("label",{class:"form-check-label",for:"rememberMe"}," Remember Me ",-1),v={class:"d-flex justify-content-center mx-4 mb-3 mb-lg-4"},y=(0,t.Lk)("button",{class:"btn btn-info",style:{margin:"2px","margin-top":"15px"}}," Login ",-1),M={class:"col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"},S=["src"];function T(e,r,s,T,$,E){return(0,t.uX)(),(0,t.CE)("section",n,[(0,t.Lk)("div",l,[(0,t.Lk)("div",i,[(0,t.Lk)("div",c,[(0,t.Lk)("div",d,[(0,t.Lk)("div",m,[(0,t.Lk)("div",p,[(0,t.Lk)("div",u,[b,(0,t.Lk)("p",{ref:"error",id:"error",style:{"text-align":"center"}},(0,o.v_)(E.errorMessage),513),(0,t.Lk)("form",{class:"mx-1 mx-md-4",onSubmit:r[4]||(r[4]=(0,a.D$)(((...e)=>E.getToken&&E.getToken(...e)),["prevent"]))},[(0,t.Lk)("div",g,[(0,t.Lk)("div",k,[(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":r[0]||(r[0]=e=>$.username=e),type:"email",id:"username",name:"username",class:"form-control",required:""},null,512),[[a.Jo,$.username]]),f])]),(0,t.Lk)("div",x,[(0,t.Lk)("div",L,[(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":r[1]||(r[1]=e=>$.password=e),type:"password",id:"password",name:"password",class:"form-control",required:""},null,512),[[a.Jo,$.password]]),w])]),(0,t.Lk)("div",null,[h,(0,t.bo)((0,t.Lk)("input",{type:"checkbox",id:"rememberMe","onUpdate:modelValue":r[2]||(r[2]=e=>$.rememberMe=e),style:{"margin-left":"5px","margin-bottom":"1px"}},null,512),[[a.lH,$.rememberMe]])]),(0,t.Lk)("div",v,[y,(0,t.Lk)("button",{type:"button",class:"btn btn-primary",style:{margin:"2px","margin-top":"15px"},onClick:r[3]||(r[3]=(...e)=>E.redirectToSignup&&E.redirectToSignup(...e))}," Signup ")])],32)]),(0,t.Lk)("div",M,[(0,t.Lk)("img",{src:`${$.backendEndpoint}/static/img/draw1.webp`,class:"img-fluid",alt:"Sample image"},null,8,S)])])])])])])])])}s(4114);var $=s(1662),E=s(9135),U=s(2169),A={data(){return{username:"",password:"",rememberMe:"",backendEndpoint:`${U.A.backendEndpoint}`}},mixins:[E.A],watch:{errorMessage(e){this.errorMessage=e}},computed:{errorMessage(){return this.$store.getters.errorMessage}},methods:{async getToken(){try{await this.$store.dispatch("login",{username:this.username,password:this.password,rememberMe:this.rememberMe})}catch(e){e.response&&e.response.data&&"Username or password are incorrect!"===e.response.data.detail&&this.$store.dispatch("setErrorMessage","Username or password are incorrect!")}},redirectToSignup(){$.A.push("/signup")}}},C=s(1241);const j=(0,C.A)(A,[["render",T]]);var V=j}}]);
//# sourceMappingURL=84.2caef5a2.js.map