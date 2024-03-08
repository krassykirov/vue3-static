"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[700],{3700:function(e,a,t){t.r(a),t.d(a,{default:function(){return Z}});var r=t(6768),l=t(4232);const o=e=>((0,r.Qi)("data-v-6773960a"),e=e(),(0,r.jt)(),e),i={class:"container-fluid",style:{width:"100vw",position:"sticky",margin:"0",padding:"0","align-items":"center","text-align":"center"}},d={class:"navbar navbar-expand-lg bg-white sticky-top navbar-light shadow-lg",style:{height:"4em","margin-left":"0","margin-right":"0","align-items":"center","text-align":"center"}},s={class:"container",style:{"margin-top":"2%"}},n={key:0,class:"card"},c=["src"],m={class:"card-body"},p=["id"],f=o((()=>(0,r.Lk)("p",{class:"title"},"CEO & Founder, Birds",-1))),u={id:"card-email"},b={id:"card-phone"},v={id:"card-address"},h={key:0,class:"dropbtn","data-toggle":"modal","data-target":"#UpdateProfile",style:{padding:"15px"}},g={key:1,style:{"text-align":"center"}},k={key:2,class:"dropbtn","data-toggle":"modal","data-target":"#addProfile",style:{float:"left"}},y={class:"modal fade",id:"addProfile",tabindex:"-1",role:"dialog","aria-labelledby":"addProfileLabel","aria-hidden":"true","data-backdrop":"false"},L={class:"modal-dialog",role:"document"},P={class:"modal-content"},$=o((()=>(0,r.Lk)("div",{class:"modal-header"},[(0,r.Lk)("h5",{class:"modal-title",id:"addProfileLabel"},"Create Profile")],-1))),x={class:"modal-body"},A={id:"create-profile",enctype:"multipart/form-data","data-toggle":"validator"},E=(0,r.Fv)('<div class="form-group" data-v-6773960a><label for="email" class="col-form-label" data-v-6773960a>Secondary Email:</label><input type="email" name="email" id="email" placeholder="Email" required data-v-6773960a></div><div class="form-group" data-v-6773960a><label for="number" class="col-form-label" data-v-6773960a>Number:</label><input type="tel" name="number" id="tel-number" placeholder="Telephone number" required data-v-6773960a></div><div class="form-group" data-v-6773960a><label for="address" class="col-form-label" data-v-6773960a>Number:</label><input type="text" name="address" id="address" placeholder="Address" data-v-6773960a></div>',3),C=o((()=>(0,r.Lk)("div",{class:"form-group","form-group-file":""},[(0,r.Lk)("label",{for:"file",class:"col-form-label"},"Upload Avatar Photo:"),(0,r.Lk)("input",{type:"file",id:"file",name:"file",class:"form-control","data-filesize":"1000000","data-filesize-error":"File must be smaller then 1MB",accept:"image/*",required:""})],-1))),T=o((()=>(0,r.Lk)("button",{id:"Close-Profile",type:"button",class:"dropbtn","data-dismiss":"modal",style:{"margin-bottom":"5px","margin-top":"5px"}}," Close ",-1))),_={class:"modal fade",id:"UpdateProfile",role:"dialog","aria-labelledby":"UpdateProfileLabel","aria-hidden":"true","data-backdrop":"false"},U={class:"modal-dialog",role:"document"},w={class:"modal-content"},F=o((()=>(0,r.Lk)("div",{class:"modal-header"},[(0,r.Lk)("h5",{class:"modal-title",id:"UpdateProfileLabel"}," Update Profile ")],-1))),D={class:"modal-body"},B={id:"update-profile",enctype:"multipart/form-data","data-toggle":"validator"},S=(0,r.Fv)('<div class="form-group" data-v-6773960a><label for="email" class="col-form-label" data-v-6773960a>Email: </label><input type="email" name="email" id="email" placeholder="Email" data-v-6773960a></div><div class="form-group" data-v-6773960a><label for="number" class="col-form-label" data-v-6773960a>Number: </label><input type="tel" name="number" id="tel-number" placeholder="Telephone number" data-v-6773960a></div><div class="form-group" data-v-6773960a><label for="address" class="col-form-label" data-v-6773960a>Address: </label><input type="address" name="address" id="address" placeholder="Address" data-v-6773960a></div>',3),z=o((()=>(0,r.Lk)("div",{class:"form-group","form-group-file":""},[(0,r.Lk)("label",{for:"file",class:"col-form-label"},"Upload Avatar Photo: "),(0,r.Lk)("input",{type:"file",id:"file",name:"file",class:"form-control","data-filesize":"1000000","data-filesize-error":"File must be smaller then 1MB",accept:"image/*"})],-1))),I=o((()=>(0,r.Lk)("button",{id:"close-button",type:"button",class:"dropbtn","data-dismiss":"modal"}," Close ",-1))),N=o((()=>(0,r.Lk)("div",{class:"toast",id:"cartToast",role:"alert","aria-live":"assertive","aria-atomic":"true","data-bs-autohide":"false",style:{position:"fixed",top:"10%",right:"5%",transform:"translate(0, -50%)",width:"250px","z-index":"1000"}},[(0,r.Lk)("div",{class:"toast-body",id:"cartToastBody",style:{"font-weight":"900",font:"1.1em"}})],-1)));function Q(e,a,t,o,Q,X){const j=(0,r.g2)("NavBar"),q=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",i,[(0,r.Lk)("nav",d,[(0,r.bF)(j,{cart:t.cart,total:t.total,user:X.user,profile:t.profile,favorites:t.favorites},null,8,["cart","total","user","profile","favorites"])]),(0,r.Lk)("div",s,[t.profile?((0,r.uX)(),(0,r.CE)("div",n,[(0,r.Lk)("img",{src:`${Q.backendEndpoint}/static/img/${t.profile.primary_email}/profile/${t.profile.avatar}`,id:"avatar-image",style:{width:"100%"},class:"img-top"},null,8,c),(0,r.Lk)("div",m,[(0,r.Lk)("h4",{id:X.user},(0,l.v_)(X.user),9,p),f,(0,r.Lk)("p",u,"Secondary Email: "+(0,l.v_)(t.profile.email),1),(0,r.Lk)("p",b,"Phone: "+(0,l.v_)(t.profile.number),1),(0,r.Lk)("p",v,"Address: "+(0,l.v_)(t.profile.address),1),(0,r.Lk)("p",null,[t.profile?((0,r.uX)(),(0,r.CE)("button",h," Update Profile ")):(0,r.Q3)("",!0)])])])):(0,r.Q3)("",!0),t.profile?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("h5",g," No Profile yet, create one? ")),t.profile?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("button",k," Add Profile ")),(0,r.Lk)("div",y,[(0,r.Lk)("div",L,[(0,r.Lk)("div",P,[$,(0,r.Lk)("div",x,[(0,r.Lk)("form",A,[E,C,(0,r.Lk)("button",{id:"submit-button",onClick:a[0]||(a[0]=(...e)=>X.createProfile&&X.createProfile(...e)),class:"dropbtn"}," Submit "),T])])])])]),(0,r.Lk)("div",_,[(0,r.Lk)("div",U,[(0,r.Lk)("div",w,[F,(0,r.Lk)("div",D,[(0,r.Lk)("form",B,[S,z,(0,r.Lk)("button",{id:"submit-button",class:"dropbtn",style:{"margin-bottom":"5px","margin-top":"15px"},onClick:a[1]||(a[1]=(...e)=>X.updateProfile&&X.updateProfile(...e))}," Save "),I])])])])]),N]),(0,r.bF)(q)])}t(4114);var X=t(6587),j=t.n(X),q=t(9746),M=t(3755),O=t(9135),R=t(2169),G=t(4570),H=t.n(G),J=t(5068),K=t(1662),V={components:{NavBar:q.A,Footer:M.A},props:["cart","total","avatar","favorites","profile"],emits:["addToCart"],mixins:[O.A],data(){return{item:this.item,itemId:this.itemId,backendEndpoint:`${R.A.backendEndpoint}`}},computed:{user(){return this.$store.state.user},user_id(){return this.$store.state.user_id},accessToken(){return this.$store.state.accessToken}},created(){const e=H().get("access_token");if(e){const a=(0,J.s)(e).sub,t=(0,J.s)(e).user_id;this.$store.commit("UPDATE_USER",a),this.$store.commit("UPDATE_USER_ID",t)}else K.A.push("/login");this.$store.dispatch("getProfile")},methods:{addToCart(e){this.$store.dispatch("addToCart",e)},itemAlreadyInCart(e){return this.cart.some((a=>a.id===e.id))},showModal(){j()(document).ready((function(){j()("#global-modal").modal("show")}))},updateProfile(){j()("#update-profile").submit((e=>{e.preventDefault();const a=new FormData(e.target);j().ajax({url:`${R.A.backendEndpoint}/user/update_profile`,type:"POST",processData:!1,contentType:!1,headers:{Authorization:`Bearer ${this.$store.state.accessToken}`},data:a,success:e=>{j()("#UpdateProfile").modal("hide"),j()("#close-button").click();var a=this.$store.getters.user,t=`${R.A.backendEndpoint}/static/img/${a}/profile/${e.avatar}`;j()("#card-email").text(`Email: ${e.email}`),j()("#card-address").text(`Address: ${e.address}`),j()("#card-phone").text(`Address: ${e.number}`),j()("#avatar-image").attr("src",t)},error:function(e){404===e.status&&j()("#UpdateProfileLabel").text("Unable to process Profile update, please try again later!")}})}))},createProfile(){j()("#create-profile").submit((e=>{e.preventDefault();const a=new FormData(e.target);j().ajax({url:`${R.A.backendEndpoint}/create_profile`,type:"POST",processData:!1,contentType:!1,headers:{Authorization:`Bearer ${this.$store.state.accessToken}`},data:a,success:()=>{j()("#create-profile").modal("hide"),j()("#Close-Profile").click(),this.$store.dispatch("getProfile")},error:function(e){403===e.status&&j()("#error").text("Item with that name already exists!")}})}))}}},W=t(1241);const Y=(0,W.A)(V,[["render",Q],["__scopeId","data-v-6773960a"]]);var Z=Y}}]);
//# sourceMappingURL=700.0266b7cb.js.map