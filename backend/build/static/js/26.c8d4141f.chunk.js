(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{103:function(e,a,t){"use strict";a.a=function(e){return e.children}},105:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){return r.a.createElement("div",{className:"spinner-border",role:"status",style:{color:e.color}},r.a.createElement("span",{className:"sr-only"},"Loading..."))}},108:function(e,a,t){e.exports=t.p+"static/media/logo.919201fe.png"},114:function(e,a,t){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var a=0,t=new Array(e.length);a<e.length;a++)t[a]=e[a];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.d(a,"a",function(){return n})},116:function(e,a,t){"use strict";var n=t(15),r=t(16),l=t(19),s=t(17),c=t(18),o=t(0),i=t.n(o),m=t(24),u=t(109),d=t(20),p=t(30),h=t(110),f=(t(121),t(108)),v=t.n(f),g=t(124),E=t.n(g),b=t(114),N=(t(119),function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=Object(b.a)(this.props.recommandations.reverse());return e.reverse(),i.a.createElement("div",{className:"recommandations d-flex flex-column"},e.slice(0,5).map(function(e,a){return i.a.createElement("div",{key:a,className:e.visited?"rec-item":"notvisited rec-item"},i.a.createElement("a",{href:e.link},i.a.createElement("h4",null,e.title),i.a.createElement("div",{className:"d-flex"},i.a.createElement("div",{className:"d-flex flex-row align-items-center"},i.a.createElement(u.a,{icon:h.l,size:"1x"}),i.a.createElement("h6",{className:"ml-2 mb-0"},"Par ",e.name)))))}))}}]),a}(o.Component)),y=t(29),w=(t(122),t(9)),k=t.n(w),j=t(105),S=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(c)))).state={searching:!1,results:[],error:""},t}return Object(c.a)(a,e),Object(r.a)(a,[{key:"componentDidUpdate",value:function(e){var a=this;if(e.query!==this.props.query)if(this.props.query&&this.props.query.trim().length>0){var t=this.props.query;this.setState({searching:!0,results:[]}),k.a.get("/api/event/"+t+"/search").then(function(e){var n=[];e.data.events.forEach(function(e){e.eventType="event",a.state.results.includes(e)||n.push(e)}),k.a.get("/api/service/"+t+"/search").then(function(e){var t=[];e.data.services.forEach(function(e){e.eventType="service",a.state.results.includes(e)||t.push(e)}),a.setState({results:[].concat(n,t),searching:!1})}).catch(function(e){a.setState({error:"Une \xe9rreur s'est produite. Veuillez recharger",searching:!1})})}).catch(function(e){a.setState({error:"Une \xe9rreur s'est produite. Veuillez recharger",searching:!1})})}else this.setState({searching:!1})}},{key:"render",value:function(){return i.a.createElement("div",{className:"searchResult-list ".concat(this.props.className)},this.state.error.length?i.a.createElement("div",{className:"alert alert-danger text-center"},this.state.error):null,this.state.searching?i.a.createElement("div",{className:"d-flex justify-content-center p-3"},i.a.createElement(j.a,null)):this.state.results.length?this.state.results.slice(0,10).map(function(e,a){return i.a.createElement(O,{key:a,result:e})}):i.a.createElement("div",{className:"d-flex justify-content-center p-3"},i.a.createElement("span",null,"Aucun r\xe9sultat")))}}]),a}(o.PureComponent),O=function(e){return i.a.createElement("a",{href:"/annonce/"+e.result.eventType+"/"+e.result._id,className:"d-flex searchResult-item"},i.a.createElement("img",{src:y.a+"/"+e.result.image,alt:"",className:"mr-3"}),i.a.createElement("div",{className:"d-flex flex-column "},i.a.createElement("h3",null,e.result.title),i.a.createElement("span",{className:"text-muted"},e.result.category)))},x=t(103),V=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(c)))).state={user:null,name:"",token:null,role:"",accountValidated:null,redirect:!1,query:""},t.logout=function(){t.props.onLogout()},t.handleInputChange=function(e){var a=e.target.value;t.setState({query:a})},t}return Object(c.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=JSON.parse(localStorage.getItem("authData"));if(a&&a.user){this.setState({user:a.user,name:a.user.name,token:a.token,role:a.user.role,accountValidated:a.user.accountValidated});var t=E()(y.a);t.on("display notification",function(a){var t=JSON.parse(localStorage.getItem("authData"));t&&t.user&&t.user._id===a.to&&e.props.onAutoSign()}),t.on("display anounce notification",function(a){var t=JSON.parse(localStorage.getItem("authData"));t&&t.user&&e.props.onAutoSign()})}}},{key:"componentDidUpdate",value:function(e){e.user!==this.props.user&&this.setState({user:this.props.user,name:this.props.name,token:this.props.token,role:this.props.role,accountValidated:this.props.accountValidated})}},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.token,r=a.role,l=a.accountValidated,s=a.user,c=0;s&&s.recommandations&&s.recommandations.length&&(c=s.recommandations.filter(function(e){return!1===e.visited}).length);return i.a.createElement(x.a,null,i.a.createElement("nav",{className:(this.props.home,"navbar navbar-expand-lg navbar-light bg-light navbar-shadow")},i.a.createElement("div",{className:"container"},i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"search-wrapper"},i.a.createElement("form",{className:"form-inline d-lg-none my-2 my-lg-0 navbar-brand form-mobile"},i.a.createElement("input",{onChange:function(a){return e.handleInputChange(a)},className:"form-control mr-sm-2",type:"text",placeholder:"Rechercher...","aria-label":"Rechercher..."}),i.a.createElement(u.a,{icon:h.j,size:"2x"})),this.state.query.trim().length>0?i.a.createElement(S,{query:this.state.query,className:"d-lg-none"}):null),n?i.a.createElement("div",{className:"dropdown-mobile mt-2"},i.a.createElement("a",{href:"/recommandations",className:"",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},i.a.createElement(u.a,{icon:h.b,size:"1x"}),i.a.createElement("sup",{className:"ml-1"},s.recommandations&&s.recommandations.length?s.recommandations.length:0)),s.recommandations&&s.recommandations.length?i.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},i.a.createElement(N,{recommandations:s.recommandations.reverse()}),i.a.createElement("div",{className:"notifications-link py-2"},i.a.createElement("a",{id:"notifications-link",className:"notifications-link pt-3 text-center",href:"/user/notifications"},"Voir toutes les notifications"))):null):null,i.a.createElement(m.b,{className:"navbar-brand",to:"/"},i.a.createElement("img",{src:v.a,width:"110",height:"100%",alt:"Logo"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo03"},i.a.createElement("div",{className:"ml-auto search-wrapper"},i.a.createElement("form",{className:"form-inline d-none d-lg-block my-2 my-lg-0 ml-auto mr-4 form-desktop"},i.a.createElement("input",{onChange:function(a){return e.handleInputChange(a)},className:"form-control mr-sm-2",type:"text",placeholder:"Rechercher...","aria-label":"Rechercher..."}),i.a.createElement(u.a,{icon:h.j,size:"2x"})),this.state.query.trim().length>0?i.a.createElement(S,{query:this.state.query,className:"d-none d-lg-block"}):null),i.a.createElement("ul",{className:"navbar-nav  mt-2 mt-lg-0"},n&&"admin"===r?i.a.createElement("li",{className:"nav-item"},i.a.createElement(m.c,{className:"nav-link",to:"/admin/home"},"Admin Dashboard")):null,n&&"supplier"===r&&l?i.a.createElement("li",{className:"nav-item"},i.a.createElement(m.c,{className:"nav-link",to:"/dashboard/reservations"},"Dashboard")):null,!n||"user"!==r&&"supplier"!==r?null:i.a.createElement("li",{className:"nav-item"},i.a.createElement(m.c,{className:"nav-link",to:"/user/reservations"},"Mes R\xe9servations")),!n||"user"!==r&&"supplier"!==r?null:i.a.createElement("li",{className:"nav-item"},i.a.createElement(m.c,{className:"nav-link",to:"/user/gallery"},"Ma Galerie")),n&&"admin"!==r?i.a.createElement("li",{className:"nav-item rec-item-desktop"},i.a.createElement("div",{className:"dropdown mt-2"},i.a.createElement("a",{href:"/recommandations",className:"",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},i.a.createElement(u.a,{icon:h.b,size:"1x"}),i.a.createElement("sup",{className:"ml-1"},c)),s.recommandations&&s.recommandations.length?i.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},i.a.createElement(N,{recommandations:s.recommandations.reverse()}),i.a.createElement("div",{className:"notifications-link py-2"},i.a.createElement(m.b,{id:"notifications-link",className:"notifications-link pt-3 text-center",to:"/user/notifications"},"Voir toutes les notifications"))):null)):null,n?null:i.a.createElement(x.a,null,i.a.createElement("li",{className:"nav-item"},i.a.createElement(m.c,{className:"nav-link",to:"/auth/signup"},i.a.createElement("i",{className:"fa fa-user"}),"Cr\xe9er un compte")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(m.c,{className:"nav-link",to:"/auth/login"},i.a.createElement("i",{className:"fa fa-user"}),"Se connecter")))),n?i.a.createElement("div",{className:"dropdown"},i.a.createElement("p",{className:"dropbtn"},t),i.a.createElement("div",{className:"dropdown-content"},i.a.createElement(m.c,{className:"nav-link",to:"/user/profile"},i.a.createElement("i",{className:"fa fa-user"}),"Mon profil"),i.a.createElement("a",{href:"/auth/login",onClick:this.logout},i.a.createElement("i",{className:"fa fa-sign-out"}),"Logout"))):null))))}}]),a}(o.PureComponent);a.a=Object(d.b)(function(e){return{userId:e.auth.email,email:e.auth.email,name:e.auth.name,token:e.auth.token,role:e.auth.role,accountValidated:e.auth.accountValidated,user:e.auth.user}},function(e){return{onLogout:function(){return e(Object(p.e)())},onAutoSign:function(){return e(Object(p.a)())}}})(V)},119:function(e,a,t){},121:function(e,a,t){},122:function(e,a,t){},134:function(e,a){},218:function(e,a,t){},620:function(e,a,t){"use strict";t.r(a);var n=t(13),r=t(15),l=t(16),s=t(19),c=t(17),o=t(18),i=t(0),m=t.n(i),u=t(116),d=t(9),p=t.n(d),h=t(11),f=t(105),v=t(20),g=t(30),E=(t(218),t(103)),b=function(e){function a(){var e,t;Object(r.a)(this,a);for(var l=arguments.length,o=new Array(l),i=0;i<l;i++)o[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(o)))).state={password:"",password2:"",passwordValid:"",error:"",isTyping:!1,submitting:!1,formValid:!1,loading:!0,supplier:null,redirect:!1},t.handleInputChange=function(e){var a;e.preventDefault();var r=e.target.name,l=e.target.value;t.setState((a={},Object(n.a)(a,r,l),Object(n.a)(a,"error",""),a),function(){t.validateField(r,l)})},t.validateField=function(e,a){var n=t.state.passwordValid;switch(e){case"password":n=a.length>5}t.setState({passwordValid:n},t.validateForm)},t.validateForm=function(){t.setState({formValid:t.state.password===t.state.password2&&t.state.passwordValid})},t.handleSubmit=function(e){if(e.preventDefault(),t.state.formValid){var a=t.state,n=a.password,r=a.supplier;t.setState({submitting:!0});try{p.a.patch("/api/supplier/"+r._id+"/confirmation",{password:n}).then(function(e){var a={email:r.email,password:n};t.props.onLogin(a),t.setState({submitting:!1,redirect:!0})}).catch(function(e){console.log(e),t.setState({error:"Erreur de compte",submitting:!1})})}catch(l){t.setState({error:"Erreur de connexion. Veuillez re\xe9ssayer",submitting:!1})}}else t.setState({error:"Les champs ne correspondent pas",isTyping:!0})},t}return Object(o.a)(a,e),Object(l.a)(a,[{key:"componentWillMount",value:function(){var e=this;this.setState({loading:!0});var a=this.props.location.pathname.split("/")[2];p.a.get("/api/supplier/"+a).then(function(a){e.setState({loading:!1,supplier:a.data.supplier})}).catch(function(a){console.log(a),e.setState({error:"Une Erreur s'est produite. Veuillez re\xe9ssauer",loading:!1})})}},{key:"render",value:function(){var e=this,a=this.state,t=a.password,n=a.password2,r=a.passwordValid,l=a.error,s=a.isTyping,c=a.submitting,o=a.supplier,i=a.loading,d=a.redirect;return m.a.createElement(E.a,null,d?m.a.createElement(h.a,{to:"/dashboard/reservations"}):null,m.a.createElement(u.a,null),m.a.createElement("section",{className:"supplier-view-page"},m.a.createElement("div",{className:"container my-5"},m.a.createElement("div",{className:"row justify-content-center mt-5"},m.a.createElement("div",{className:"col-sm-11 col-md-10 col-lg-8 mb-5 supplier-registration-form"},m.a.createElement("div",{className:"row mb-5"},m.a.createElement("div",{className:"col-sm-12"},m.a.createElement("h2",{className:"text-center mb-3"},"DESORMAIS UN PARTENAIRE"),m.a.createElement("h5",{className:"text-center mb-5"},"Validez votre compte en entrant votre mot de passe."),m.a.createElement("hr",null))),m.a.createElement("div",{className:"row mb-5"},m.a.createElement("div",{className:"col-sm-12"},i?m.a.createElement("div",{className:"text-center d-flex justify-content-center"},m.a.createElement(f.a,null)," "):m.a.createElement("form",null,o?m.a.createElement("h3",{className:"py-3"},o.name," ",m.a.createElement("span",null,"(",o.email,")")):null,l&&l.length?m.a.createElement("div",{className:"alert alert-danger",style:{fontSize:"1.3rem"}},l):null,m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{for:"name"},"Mot de passe"),m.a.createElement("input",{type:"password",className:s&&!r?"form-control is-invalid":"form-control",value:t,onChange:function(a){return e.handleInputChange(a)},name:"password",placeholder:"Mot de passe"}),s&&!r?m.a.createElement("div",{className:"invalid-feedback"},"Invalide"):null),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{for:"name"},"Confirmation"),m.a.createElement("input",{type:"password",className:"form-control",value:n,onChange:function(a){return e.handleInputChange(a)},name:"password2",placeholder:"Confirmation"})),m.a.createElement("div",{className:"d-flex justify-content-end"},m.a.createElement("button",{disabled:c,type:"submit",onClick:function(a){return e.handleSubmit(a)},className:"button fourth mt-4 mb-5"},c?m.a.createElement(f.a,{color:"white"}):"Valider"))))))))))}}]),a}(i.Component);a.default=Object(v.b)(null,function(e){return{onLogin:function(a){return e(Object(g.d)(a))}}})(b)}}]);
//# sourceMappingURL=26.c8d4141f.chunk.js.map