(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{102:function(e,a){},108:function(e,a,t){"use strict";t.d(a,"a",function(){return c});var A=t(15),n=t(16),r=t(19),l=t(17),s=t(18),i=t(0),o=t.n(i),c=function(e){function a(e){var t;return Object(A.a)(this,a),(t=Object(r.a)(this,Object(l.a)(a).call(this,e))).state={url:""},t}return Object(s.a)(a,e),Object(n.a)(a,[{key:"preview",value:function(e){this.setState({url:URL.createObjectURL(e.target.files[0])}),this.props.setFile(this.props.name,e.target.files[0])}},{key:"render",value:function(){var e=this,a=this.state.url,t=this.props,A=t.label,n=t.oldUrl,r=t.type,l=t.isEditing,s="image"===r?"image/png,image/jpeg,image/jpg":"document"===r?".docx, .pptx, .pdf":"video/*";return o.a.createElement(i.Fragment,null,o.a.createElement("button",{disabled:l,type:"button",className:"btn btn-dark mb-2",onClick:function(){return e.inputElement.click()}},A," "),o.a.createElement("input",{style:{visibility:"hidden"},accept:s,onChange:function(a){return e.preview(a)},ref:function(a){return e.inputElement=a},type:"file"}),o.a.createElement("div",{className:"ibox"},o.a.createElement("div",{className:"ibox-content product-box active"},o.a.createElement("div",{className:a||n?"":"product-imitation"},"",(a||n)&&"image"===r?o.a.createElement("img",{src:a||n,accept:s,alt:"",style:{width:"100%"}}):"",(a||n)&&"document"===r?o.a.createElement("iframe",{src:a||n||"",projectName:"Funnel PDF",align:"top",width:"100%",frameBorder:"0",title:"Doc",target:"Message"},o.a.createElement("p",null,"Your browser doesn't support Iframe. Here is a ",o.a.createElement("a",{href:a||n},"link to the document")," instead.")," "):"",(a||n)&&"video"===r?o.a.createElement("video",{src:a||n||"",width:"100%",controls:!0},o.a.createElement("p",null,"Your browser doesn't support HTML5 video. Here is a ",o.a.createElement("a",{href:a||n},"link to the video")," instead.")," "):""))))}}]),a}(i.Component)},439:function(e,a){e.exports="data:image/png;base64,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"},440:function(e,a,t){},539:function(e,a,t){"use strict";t.r(a);var A=t(13),n=t(15),r=t(16),l=t(19),s=t(17),i=t(18),o=t(0),c=t.n(o),m=t(20),u=t(9),d=t.n(u),p=t(95),h=t(29),g=t(108),f=t(30),E=t(439),v=t.n(E),y=(t(440),function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(i)))).state={user:null,email:"",password:"",name:"",tel:"",isTyping:!1,isTyping2:!1,formErrors:{email:"",password:"",name:""},emailValid:!1,nameValid:!1,formValid:!1,location:"",loading:!1,successReset:!1,successModify:!1,error:"",error2:"",password1:"",newpassword1:"",newpassword2:"",newpassword1Valid:!1,passwordValid:!1,passwordMatch:!1,changingPassword:!1},t.handleInputChange=function(e){e.preventDefault();var a=e.target.name,n=e.target.value;t.setState(Object(A.a)({},a,n),function(){t.validateField(a,n)})},t.handleSubmit=function(e){if(e.preventDefault(),t.setState({isTyping:!0}),t.state.formValid){t.setState({loading:!0});var a=t.state,A=a.name,n=a.email,r=a.tel,l=a.location,s=a.profileImage,i="/api/user/"+t.props.user._id;if(s&&s.type){var o=new FormData;o.append("name",A),o.append("email",n),o.append("location",l.trim().length<0?"":l),o.append("tel",r.length<0?"":r),o.append("profileImage",s);i="/api/user/"+t.props.user._id+"/image",d.a.patch(i,o,{headers:{"content-type":"multipart/form-data"}}).then(function(e){t.setState({loading:!1,successModify:!0,profileImage:""})}).catch(function(e){t.setState({error:"Une \xe9rreur s'est produite",loading:!1})})}else d.a.patch(i,{name:A,email:n,tel:r&&r.length<0?"":r,location:l.trim().length<0?"":l}).then(function(e){t.setState({loading:!1,successModify:!0})}).catch(function(e){t.setState({error:"Une \xe9rreur s'est produite",loading:!1})})}},t.handleSubmit2=function(e){if(e.preventDefault(),t.setState({isTyping2:!0}),t.state.passwordMatch){t.setState({changingPassword:!0});var a=t.state,A=a.password1,n=a.newpassword1;d.a.patch("/api/user/"+t.props.user._id+"/password/update",{password:A,newpassword:n}).then(function(e){t.setState({changingPassword:!1,successReset:!0,error2:""})}).catch(function(e){"WRONG_PASSWORD"===e.response.data.message?t.setState({error2:"Mot de Passe non reconnue.",changingPassword:!1}):t.setState({error2:"Une erreur s'est produite, Veuillez re\xe9ssayer.",changingPassword:!1})})}},t.setFile=function(e,a){var n;t.setState((n={},Object(A.a)(n,e,a),Object(A.a)(n,"imageValid",!0),Object(A.a)(n,"error",""),n),t.validateForm)},t}return Object(i.a)(a,e),Object(r.a)(a,[{key:"componentDidUpdate",value:function(e){if(this.props.user!==e.user){var a=this.props.user,t=a.name,A=a.email,n=a.location,r=a.tel;this.setState({name:t,email:A,location:n,tel:null===r?"":r,formValid:!(!t||!A),nameValid:!!t,emailValid:!!A,user:this.props.user})}}},{key:"validateField",value:function(e,a){var t=this.state.formErrors,A=this.state.emailValid,n=this.state.passwordValid,r=this.state.nameValid,l=this.state.newpassword1Valid;switch(e){case"email":A=a.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),t.email=A?"":" is invalid";break;case"name":r=a.trim().length>=6,t.name=r?"":" is too short";break;case"newpassword1":l=a.trim().length>=6;break;case"password1":n=a.trim().length>=6}this.setState({formErrors:t,emailValid:A,passwordValid:n,nameValid:r,newpassword1Valid:l},this.validateForm)}},{key:"validateForm",value:function(){this.setState({formValid:this.state.emailValid&&this.state.nameValid,passwordMatch:this.state.passwordValid&&this.state.newpassword1Valid&&this.state.newpassword2===this.state.newpassword1})}},{key:"render",value:function(){var e=this,a=this.state,t=a.isTyping,A=a.isTyping2,n=a.emailValid,r=a.passwordValid,l=a.nameValid,s=a.name,i=a.email,m=a.tel,u=a.passwordMatch,d=a.loading,E=a.user,y=a.error2,N=a.changingPassword,w=a.password1,b=a.newpassword1,U=a.newpassword2,S=a.location,F=a.profileImage,k=a.error,C=a.successReset,R=a.successModify;return c.a.createElement(o.Fragment,null,c.a.createElement(p.a,null),c.a.createElement("section",{className:"profile-section"},c.a.createElement("div",{className:"container my-5"},c.a.createElement("div",{className:"row justify-content-between"},c.a.createElement("div",{className:"col-sm-12 text-center pb-4"},c.a.createElement("h3",null,"Param\xe8tres du compte"),c.a.createElement("h5",{className:"pb-3"},"Editez votre compte ici."),c.a.createElement("hr",null)),c.a.createElement("div",{className:"col-sm-12 col-md-2 col-lg-2 mt-3 d-flex flex-column align-items-center"},E&&"social"!==E.provider&&c.a.createElement("img",{src:E&&E.profileImage?f.a+"/"+E.profileImage:v.a,className:"rounded-circle",alt:"",width:"200",height:"200"}),E&&"social"===E.provider&&c.a.createElement("img",{src:E&&E.profileImage?E.profileImage:v.a,className:"rounded-circle",alt:"",width:"200",height:"200"}),c.a.createElement("h4",{className:"mt-3 text-center"},c.a.createElement("strong",null,E?E.name:null)),c.a.createElement("h5",{className:"text-center"},E?E.email:null)),c.a.createElement("div",{className:"col-sm-12 col-md-5 col-lg-5"},c.a.createElement("h4",{className:"py-3"},"Mettre \xe0 jour mes informations"),c.a.createElement("form",null,R?c.a.createElement("div",{className:"alert alert-success"},"Profil modifi\xe9 avec succ\xe8s."):null,k&&k.length?c.a.createElement("div",{className:"alert alert-danger"},k):null,c.a.createElement("input",{type:"text",value:s,onChange:function(a){return e.handleInputChange(a)},name:"name",placeholder:"Nom"}),t&&!l?c.a.createElement("div",{style:{color:"red"}},"Invalide. Min 6 carat\xe8res"):null,c.a.createElement("input",{type:"email",value:i,onChange:function(a){return e.handleInputChange(a)},name:"email",placeholder:"Adresse Email"}),t&&!n?c.a.createElement("div",{style:{color:"red"}},"Email non valide."):null,c.a.createElement("input",{type:"text",value:S,onChange:function(a){return e.handleInputChange(a)},name:"location",placeholder:"Adresse"}),c.a.createElement("input",{type:"text",value:m,onChange:function(a){return e.handleInputChange(a)},name:"tel",placeholder:"Num\xe9ro de T\xe9l\xe9phone"}),c.a.createElement("div",{className:"py-3 justify-content-center"},E&&"social"!==E.provider&&c.a.createElement(g.a,{type:"image",oldUrl:F,setFile:function(a,t){return e.setFile(a,t)},name:"profileImage",label:"Importer une image de profile"})),c.a.createElement("button",{disabled:d,type:"submit",onClick:function(a){return e.handleSubmit(a)},id:"signBtn",className:"button mt-4 mb-5"},d?c.a.createElement(h.default,{color:"white"}):"Enregistrer"))),c.a.createElement("div",{className:"col-sm-12 col-md-5 col-lg-4"},c.a.createElement("h4",{className:"py-3"},"R\xe9initialiser votre mot de passe"),c.a.createElement("form",null,C?c.a.createElement("div",{className:"alert alert-success"},"Mot de passe modifi\xe9 avec succ\xe8s."):null,y&&y.length?c.a.createElement("div",{className:"alert alert-danger"},y):null,c.a.createElement("input",{type:"password",value:w,onChange:function(a){return e.handleInputChange(a)},name:"password1",placeholder:"Ancien Mot de passe"}),A&&!r?c.a.createElement("div",{style:{color:"red"}},"Invalide. Min 6 carat\xe8res"):null,c.a.createElement("input",{type:"password",value:b,onChange:function(a){return e.handleInputChange(a)},name:"newpassword1",placeholder:"Nouveau mot de passe"}),c.a.createElement("input",{type:"password",value:U,onChange:function(a){return e.handleInputChange(a)},name:"newpassword2",placeholder:"Confirmation"}),A&&!u?c.a.createElement("div",{style:{color:"red"}},"Les mots de passes ne correspondent pas."):null,c.a.createElement("button",{disabled:N,type:"submit",onClick:function(a){return e.handleSubmit2(a)},className:"button mt-4 mb-5"},N?c.a.createElement(h.default,{color:"white"}):"R\xe9initialiser")))))))}}]),a}(o.Component));a.default=Object(m.b)(function(e){return{user:e.auth.user}})(y)},85:function(e,a,t){e.exports=t.p+"static/media/logo.919201fe.png"},89:function(e,a,t){"use strict";function A(e){return function(e){if(Array.isArray(e)){for(var a=0,t=new Array(e.length);a<e.length;a++)t[a]=e[a];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.d(a,"a",function(){return A})},90:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){},95:function(e,a,t){"use strict";var A=t(15),n=t(16),r=t(19),l=t(17),s=t(18),i=t(0),o=t.n(i),c=t(23),m=t(86),u=t(20),d=t(31),p=t(87),h=(t(91),t(85)),g=t.n(h),f=t(96),E=t.n(f),v=t(89),y=(t(90),function(e){function a(){return Object(A.a)(this,a),Object(r.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=Object(v.a)(this.props.recommandations.reverse());return e.reverse(),o.a.createElement("div",{className:"recommandations d-flex flex-column"},e.slice(0,5).map(function(e,a){return o.a.createElement("div",{key:a,className:e.visited?"rec-item":"notvisited rec-item"},o.a.createElement("a",{href:e.link},o.a.createElement("h4",null,e.title),o.a.createElement("div",{className:"d-flex"},o.a.createElement("div",{className:"d-flex flex-row align-items-center"},o.a.createElement(m.a,{icon:p.l,size:"1x"}),o.a.createElement("h6",{className:"ml-2 mb-0"},"Par ",e.name)))))}))}}]),a}(i.Component)),N=t(30),w=(t(92),t(9)),b=t.n(w),U=t(29),S=function(e){function a(){var e,t;Object(A.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=Object(r.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(s)))).state={searching:!1,results:[],error:""},t}return Object(s.a)(a,e),Object(n.a)(a,[{key:"componentDidUpdate",value:function(e){var a=this;if(e.query!==this.props.query)if(this.props.query&&this.props.query.trim().length>0){var t=this.props.query;this.setState({searching:!0,results:[]}),b.a.get("/api/event/"+t+"/search").then(function(e){var A=[];e.data.events.forEach(function(e){e.eventType="event",a.state.results.includes(e)||A.push(e)}),b.a.get("/api/service/"+t+"/search").then(function(e){var t=[];e.data.services.forEach(function(e){e.eventType="service",a.state.results.includes(e)||t.push(e)}),a.setState({results:[].concat(A,t),searching:!1})}).catch(function(e){a.setState({error:"Une \xe9rreur s'est produite. Veuillez recharger",searching:!1})})}).catch(function(e){a.setState({error:"Une \xe9rreur s'est produite. Veuillez recharger",searching:!1})})}else this.setState({searching:!1})}},{key:"render",value:function(){return o.a.createElement("div",{className:"searchResult-list ".concat(this.props.className)},this.state.error.length?o.a.createElement("div",{className:"alert alert-danger text-center"},this.state.error):null,this.state.searching?o.a.createElement("div",{className:"d-flex justify-content-center p-3"},o.a.createElement(U.default,null)):this.state.results.length?this.state.results.slice(0,10).map(function(e,a){return o.a.createElement(F,{key:a,result:e})}):o.a.createElement("div",{className:"d-flex justify-content-center p-3"},o.a.createElement("span",null,"Aucun r\xe9sultat")))}}]),a}(i.PureComponent),F=function(e){return o.a.createElement("a",{href:"/annonce/"+e.result.eventType+"/"+e.result._id,className:"d-flex searchResult-item"},o.a.createElement("img",{src:N.a+"/"+e.result.image,alt:"",className:"mr-3"}),o.a.createElement("div",{className:"d-flex flex-column "},o.a.createElement("h3",null,e.result.title),o.a.createElement("span",{className:"text-muted"},e.result.category)))},k=function(e){function a(){var e,t;Object(A.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=Object(r.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(s)))).state={user:null,name:"",token:null,role:"",accountValidated:null,redirect:!1,query:""},t.logout=function(){t.props.onLogout()},t.handleInputChange=function(e){var a=e.target.value;t.setState({query:a})},t}return Object(s.a)(a,e),Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=JSON.parse(localStorage.getItem("authData"));if(a&&a.user){this.setState({user:a.user,name:a.user.name,token:a.token,role:a.user.role,accountValidated:a.user.accountValidated});var t=E()(N.a);t.on("display notification",function(a){var t=JSON.parse(localStorage.getItem("authData"));t&&t.user&&t.user._id===a.to&&e.props.onAutoSign()}),t.on("display anounce notification",function(a){var t=JSON.parse(localStorage.getItem("authData"));t&&t.user&&e.props.onAutoSign()})}}},{key:"componentDidUpdate",value:function(e){e.user!==this.props.user&&this.setState({user:this.props.user,name:this.props.name,token:this.props.token,role:this.props.role,accountValidated:this.props.accountValidated})}},{key:"render",value:function(){var e=this,a=this.state,t=a.name,A=a.token,n=a.role,r=a.accountValidated,l=a.user,s=0;l&&l.recommandations&&l.recommandations.length&&(s=l.recommandations.filter(function(e){return!1===e.visited}).length);return o.a.createElement(i.Fragment,null,o.a.createElement("nav",{className:(this.props.home,"navbar navbar-expand-lg navbar-light bg-light navbar-shadow")},o.a.createElement("div",{className:"container"},o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"search-wrapper"},o.a.createElement("form",{className:"form-inline d-lg-none my-2 my-lg-0 navbar-brand form-mobile"},o.a.createElement("input",{onChange:function(a){return e.handleInputChange(a)},className:"form-control mr-sm-2",type:"text",placeholder:"Rechercher...","aria-label":"Rechercher..."}),o.a.createElement(m.a,{icon:p.j,size:"2x"})),this.state.query.trim().length>0?o.a.createElement(S,{query:this.state.query,className:"d-lg-none"}):null),A?o.a.createElement("div",{className:"dropdown-mobile mt-2"},o.a.createElement("a",{href:"/recommandations",className:"",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},o.a.createElement(m.a,{icon:p.b,size:"1x"}),o.a.createElement("sup",{className:"ml-1"},l.recommandations&&l.recommandations.length?l.recommandations.length:0)),l.recommandations&&l.recommandations.length?o.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},o.a.createElement(y,{recommandations:l.recommandations.reverse()}),o.a.createElement("div",{className:"notifications-link py-2"},o.a.createElement("a",{id:"notifications-link",className:"notifications-link pt-3 text-center",href:"/user/notifications"},"Voir toutes les notifications"))):null):null,o.a.createElement(c.b,{className:"navbar-brand",to:"/"},o.a.createElement("img",{src:g.a,width:"110",height:"100%",alt:"Logo"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo03"},o.a.createElement("div",{className:"ml-auto search-wrapper"},o.a.createElement("form",{className:"form-inline d-none d-lg-block my-2 my-lg-0 ml-auto mr-4 form-desktop"},o.a.createElement("input",{onChange:function(a){return e.handleInputChange(a)},className:"form-control mr-sm-2",type:"text",placeholder:"Rechercher...","aria-label":"Rechercher..."}),o.a.createElement(m.a,{icon:p.j,size:"2x"})),this.state.query.trim().length>0?o.a.createElement(S,{query:this.state.query,className:"d-none d-lg-block"}):null),o.a.createElement("ul",{className:"navbar-nav  mt-2 mt-lg-0"},A&&"admin"===n?o.a.createElement("li",{className:"nav-item"},o.a.createElement(c.c,{className:"nav-link",to:"/admin/home"},"Admin Dashboard")):null,A&&"supplier"===n&&r?o.a.createElement("li",{className:"nav-item"},o.a.createElement(c.c,{className:"nav-link",to:"/dashboard/reservations"},"Dashboard")):null,!A||"user"!==n&&"supplier"!==n?null:o.a.createElement("li",{className:"nav-item"},o.a.createElement(c.c,{className:"nav-link",to:"/user/reservations"},"Mes R\xe9servations")),!A||"user"!==n&&"supplier"!==n?null:o.a.createElement("li",{className:"nav-item"},o.a.createElement(c.c,{className:"nav-link",to:"/user/gallery"},"Ma Galerie")),A&&"admin"!==n?o.a.createElement("li",{className:"nav-item rec-item-desktop"},o.a.createElement("div",{className:"dropdown mt-2"},o.a.createElement("a",{href:"/recommandations",className:"",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},o.a.createElement(m.a,{icon:p.b,size:"1x"}),o.a.createElement("sup",{className:"ml-1"},s)),l.recommandations&&l.recommandations.length?o.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},o.a.createElement(y,{recommandations:l.recommandations.reverse()}),o.a.createElement("div",{className:"notifications-link py-2"},o.a.createElement("a",{id:"notifications-link",className:"notifications-link pt-3 text-center",href:"/user/notifications"},"Voir toutes les notifications"))):null)):null,A?null:o.a.createElement(i.Fragment,null,o.a.createElement("li",{className:"nav-item"},o.a.createElement(c.c,{className:"nav-link",to:"/auth/signup"},o.a.createElement("i",{className:"fa fa-user"}),"Cr\xe9er un compte")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(c.c,{className:"nav-link",to:"/auth/login"},o.a.createElement("i",{className:"fa fa-user"}),"Se connecter")))),A?o.a.createElement("div",{className:"dropdown"},o.a.createElement("p",{className:"dropbtn"},t),o.a.createElement("div",{className:"dropdown-content"},o.a.createElement("a",{className:"nav-link",href:"/user/profile"},o.a.createElement("i",{className:"fa fa-user"}),"Mon profil"),o.a.createElement("a",{href:"/auth/login",onClick:this.logout},o.a.createElement("i",{className:"fa fa-sign-out"}),"Logout"))):null))))}}]),a}(i.PureComponent);a.a=Object(u.b)(function(e){return{userId:e.auth.email,email:e.auth.email,name:e.auth.name,token:e.auth.token,role:e.auth.role,accountValidated:e.auth.accountValidated,user:e.auth.user}},function(e){return{onLogout:function(){return e(Object(d.e)())},onAutoSign:function(){return e(Object(d.a)())}}})(k)}}]);
//# sourceMappingURL=30.0de22c43.chunk.js.map