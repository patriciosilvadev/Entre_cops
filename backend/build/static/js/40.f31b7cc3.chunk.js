(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{631:function(e,a,t){"use strict";t.r(a);var n=t(15),r=t(16),i=t(19),o=t(17),l=t(18),s=t(0),c=t.n(s),d=t(116),u=t(103),m=t(13),p=(t(393),t(20)),f=t(24),h=t(11),v=t(30),b=t(105),w=t(394),E=t(124),g=t.n(E),k=t(29),y=t(108),O=t.n(y),j=g()(k.a),V=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={email:"",password:"",isTyping:!1,formErrors:{email:"",password:""},emailValid:!1,passwordValid:!1,formValid:!1,loading:!1},t.handleInputChange=function(e){e.preventDefault();var a=e.target.name,n=e.target.value;t.setState(Object(m.a)({},a,n),function(){t.validateField(a,n)})},t.handleSubmit=function(e){if(e.preventDefault(),t.setState({isTyping:!0}),t.state.formValid){t.props.onRenderLoader();var a={email:t.state.email,password:t.state.password};t.props.onLogin(a)}},t}return Object(l.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){this.props.onClearError()}},{key:"validateField",value:function(e,a){var t=this.state.formErrors,n=this.state.emailValid,r=this.state.passwordValid;switch(e){case"email":n=a.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),t.email=n?"":" is invalid";break;case"password":r=a.length>=6,t.password=r?"":" is too short"}this.setState({formErrors:t,emailValid:n,passwordValid:r},this.validateForm)}},{key:"validateForm",value:function(){this.setState({formValid:this.state.emailValid&&this.state.passwordValid})}},{key:"render",value:function(){var e=this,a=this.state,t=a.isTyping,n=a.emailValid,r=a.email,i=a.password,o=this.props,l=o.error,s=o.loader;return c.a.createElement("div",{className:"wrapper fadeInDown"},c.a.createElement("div",{id:"formContent"},c.a.createElement("div",{className:"fadeIn first mt-5"},c.a.createElement("img",{src:O.a,id:"icon",alt:"User Icon"})),c.a.createElement("form",null,l&&l.length?c.a.createElement("div",{className:"alert alert-danger"},l):null,c.a.createElement("input",{type:"email",value:r,onChange:function(a){return e.handleInputChange(a)},id:"email",className:"fadeIn second",name:"email",placeholder:"Adresse Email"}),t&&!n?c.a.createElement("div",{style:{color:"red"}},"Email non valide."):null,c.a.createElement("input",{type:"password",value:i,onChange:function(a){return e.handleInputChange(a)},id:"password",className:"fadeIn third",name:"password",placeholder:"Mot de passe"}),t&&!this.state.passwordValid?c.a.createElement("div",{style:{color:"red"}},"Invalide. Min 6 carat\xe8res"):null,c.a.createElement("button",{disabled:s,type:"submit",onClick:function(a){return e.handleSubmit(a)},id:"signBtn",className:"button fadeIn fourth mt-4 mb-5"},s?c.a.createElement(b.a,{color:"white"}):"Se connecter")),c.a.createElement("p",null,"Ou bien connectez vous avec:"),c.a.createElement("div",{className:"d-flex socialWrapper"},c.a.createElement(w.a,{provider:"google",key:"google",socket:j}),c.a.createElement(w.a,{provider:"facebook",key:"facebook",socket:j})),c.a.createElement("div",{id:"formFooter"},c.a.createElement(f.b,{to:"/auth/signup",className:"underlineHover"},"Ou bien Inscrivez vous Ici."))))}}]),a}(s.Component),I=Object(p.b)(function(e){return{loader:e.loader.loading,error:e.auth.error}},function(e){return{onLogin:function(a){return e(Object(v.d)(a))},onRenderLoader:function(){return e(Object(v.f)())},onClearError:function(){return e(Object(v.b)())}}})(Object(h.g)(V)),C=function(e){function a(){return Object(n.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(l.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement(u.a,null,this.props.token?this.props.history.goBack():null,c.a.createElement(d.a,null),c.a.createElement(I,null))}}]),a}(s.Component);a.default=Object(p.b)(function(e){return{token:e.auth.token}})(C)}}]);
//# sourceMappingURL=40.f31b7cc3.chunk.js.map