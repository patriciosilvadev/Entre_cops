(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{29:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r="https://entrecops.co"},3:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"e",function(){return a}),n.d(t,"d",function(){return o}),n.d(t,"a",function(){return c}),n.d(t,"b",function(){return i}),n.d(t,"f",function(){return u}),n.d(t,"g",function(){return l});var r="LOGIN",a="SIGNUP",o="LOGOUT",c="AUTH_ERROR",i="CLEAR_ERROR",u="START_LOADING",l="STOP_LOADING"},30:function(e,t,n){"use strict";var r=n(13),a=n(3),o=n(9),c=n.n(o);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){Object(r.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var l=function(e){return function(t){try{c.a.post("/api/user/signup",{email:e.email,password:e.password,name:e.name,tel:e.tel}).then(function(e){localStorage.setItem("authData",JSON.stringify(e.data)),t(s(e.data)),t(g())}).catch(function(e){"EMAIL_EXIST"===e.response.data.message?t(m("Adresse Email d\xe9ja utilis\xe9e")):t(m("Une \xe9rreur s'est produite, Veuillez re\xe9ssayer")),t(g())})}catch(n){t(m("Probl\xe8me de connection.")),t(g())}}},s=function(e){return{type:a.e,data:e}},p=function(e){return function(t){try{c.a.post("/api/user/login",{email:e.email,password:e.password}).then(function(e){localStorage.setItem("authData",JSON.stringify(e.data)),t(f(e.data)),t(g())}).catch(function(e){"WRONG_PASSWORD"===e.response.data.message||"EMAIL_NOT_EXIST"===e.response.data.message?t(m("Vos informations sont Incorrectes.")):t(m("Une \xe9rreur s'est produite, Veuillez re\xe9ssayer")),t(g())})}catch(n){t(m("Erreur de connexion. Veuillez re\xe9ssayer.")),t(g())}}},f=function(e){return{type:a.c,data:e}},m=function(e){return{type:a.a,errorType:e}},d=function(){return{type:a.b}},b=function(){return localStorage.removeItem("authData"),{type:a.d}},h=function(){var e=localStorage.getItem("authData");return e=JSON.parse(e),function(t){var n=new Date;if(e&&e.token&&e.user)if(new Date(parseInt(e.expiresDate))>n)c.a.get("/api/user/"+e.user._id).then(function(n){var r=u({},e);r.user=n.data.user,localStorage.setItem("authData",JSON.stringify(r)),t(f(r)),console.log("Auto sign")}).catch(function(e){});else{var r={email:e.user.email,name:e.user.name,userId:e.user.userId};c.a.post("/api/user/generatetoken",r).then(function(e){console.log("Re signin");var n=JSON.parse(localStorage.getItem("authData"));n.token=e.data.token,n.expiresDate=e.data.expiresDate,localStorage.setItem("authData",JSON.stringify(n));var a=u({},r,{token:e.data.token,expiresDate:e.data.expiresDate});t(f(a))}).catch(function(e){t(m("Erreur de connexion. Veuillez re\xe9ssayer."))})}else console.log("Logout"),t(b())}},O=function(e,t){return function(n){try{c.a.post("/api/user/socialauth",{name:e,photo:t}).then(function(e){localStorage.setItem("authData",JSON.stringify(e.data)),n(f(e.data))}).catch(function(e){console.log({err:e})})}catch(r){console.log(r)}}},y=function(){return{type:a.f}},g=function(){return{type:a.g}};n.d(t,"d",function(){return p}),n.d(t,"e",function(){return b}),n.d(t,"g",function(){return l}),n.d(t,"a",function(){return h}),n.d(t,"b",function(){return d}),n.d(t,"h",function(){return O}),n.d(t,"f",function(){return y}),n.d(t,"c",function(){return g})},42:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(44),c=n.n(o);n(97);t.a=function(e){return a.a.createElement("div",{style:{height:"100vh",width:"100%",zIndex:"100"},className:"d-flex align-items-center justify-content-center"},a.a.createElement(c.a,{type:"Rings",color:"#DC3545",height:200,width:200,timeout:1e3}))}},49:function(e,t,n){e.exports=n(99)},70:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(21),c=n.n(o),i=n(9),u=n.n(i),l=(n(70),n(71),n(72),n(15)),s=n(16),p=n(19),f=n(17),m=n(18),d=n(24),b=n(11),h=n(20),O=n(42),y=n(30),g=n(46),j=function(e){var t=e.component,n=Object(g.a)(e,["component"]);return a.a.createElement(b.b,Object.assign({},n,{render:function(e){return localStorage.getItem("authData")?a.a.createElement(t,e):a.a.createElement(b.a,{to:{pathname:"/auth/login",state:{from:e.location}}})}}))},E=Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(5),n.e(28)]).then(n.bind(null,628))}),v=Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(11),n.e(10),n.e(41)]).then(n.bind(null,632))}),P=Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(11),n.e(10),n.e(40)]).then(n.bind(null,631))}),w=Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(5),n.e(37)]).then(n.bind(null,615))}),D=Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(5),n.e(36)]).then(n.bind(null,616))}),S=Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(5),n.e(31)]).then(n.bind(null,617))}),x=Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(18)]).then(n.bind(null,630))}),I=Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(15)]).then(n.bind(null,618))}),k=Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(23)]).then(n.bind(null,619))}),z=Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(26)]).then(n.bind(null,620))}),N=Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(6),n.e(17)]).then(n.bind(null,629))}),_=Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(8),n.e(24)]).then(n.bind(null,621))}),R=Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(25)]).then(n.bind(null,622))}),T=Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(27)]).then(n.bind(null,623))}),A=Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(6),n.e(20)]).then(n.bind(null,624))}),L=Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(5),n.e(32)]).then(n.bind(null,625))}),J=Object(r.lazy)(function(){return n.e(38).then(n.bind(null,626))}),V=Object(r.lazy)(function(){return Promise.all([n.e(1),n.e(33)]).then(n.bind(null,627))}),C=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.user||this.props.onAutoSiginIn()}},{key:"render",value:function(){return a.a.createElement(d.a,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(O.a,null)},a.a.createElement(b.d,null,a.a.createElement(b.b,{path:"/",exact:!0,component:E}),a.a.createElement(b.b,{path:"/auth/login",exact:!0,component:P}),a.a.createElement(b.b,{path:"/auth/signup",exact:!0,component:v}),a.a.createElement(b.b,{path:"/events",exact:!0,component:D}),a.a.createElement(b.b,{path:"/services",exact:!0,component:w}),a.a.createElement(b.b,{path:"/supplier",exact:!0,component:k}),a.a.createElement(b.b,{path:"/supplier/:id/account/confirmation",exact:!0,component:z}),a.a.createElement(b.b,{path:"/:AnounceType/category/:id",exact:!0,component:S}),a.a.createElement(b.b,{path:"/category/:id",exact:!0,component:S}),a.a.createElement(b.b,{path:"/annonce/:anounceType/:id",exact:!0,component:x}),a.a.createElement(b.b,{path:"/gallery",exact:!0,component:N}),a.a.createElement(b.b,{path:"/filter",exact:!0,component:function(){return a.a.createElement(L,{filter:localStorage.getItem("searchParams")})}}),a.a.createElement(j,{path:"/dashboard/reservations",exact:!0,component:I}),a.a.createElement(j,{path:"/user/profile",exact:!0,component:R}),a.a.createElement(j,{path:"/user/notifications",exact:!0,component:T}),a.a.createElement(j,{path:"/user/reservations",exact:!0,component:A}),a.a.createElement(j,{path:"/user/gallery",exact:!0,component:_}),a.a.createElement(j,{path:"/admin",component:V}),a.a.createElement(b.b,{path:"*",component:J}))))}}]),t}(r.Component),U=Object(h.b)(function(e){return{user:e.auth.user,token:e.auth.token}},function(e){return{onAutoSiginIn:function(){return e(Object(y.a)())}}})(C);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=n(12),M=n(45),W=n(13),X=n(3);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(n,!0).forEach(function(t){Object(W.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var $={name:"",email:"",token:null,error:"",expiresDate:"",userId:null,role:""},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X.c:case X.e:return H({},e,{userId:t.data.user._id,name:t.data.user.name,email:t.data.user.email,token:t.data.token,accountValidated:t.data.user.accountValidated,expiresDate:t.data.expiresDate,role:t.data.user.role,user:t.data.user,error:""});case X.d:return H({},e,{userId:null,name:"",email:"",token:null,expiresDate:null,role:"",error:""});case X.a:return H({},e,{error:t.errorType});case X.b:return H({},e,{error:""});default:return e}};function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(n,!0).forEach(function(t){Object(W.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Q={loading:!1},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q;switch((arguments.length>1?arguments[1]:void 0).type){case X.f:return K({},e,{loading:!0});case X.g:return K({},e,{loading:!1});default:return e}},Z=Object(G.c)({auth:q,loader:Y}),ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||G.d,te=function(){return Object(G.e)(Z,ee(Object(G.a)(M.a)))},ne=n(29),re=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("footer",{className:"bg-dark footer",style:{alignItems:"center"}},a.a.createElement("div",{className:"container py-3"},a.a.createElement("div",{className:"row py-4 py-5"},a.a.createElement("div",{className:"col"},a.a.createElement("h5",{className:"text-center text-white"},"Copyright @2019. All rights Reserved.")))))}}]),t}(r.Component);u.a.defaults.baseURL=ne.a,u.a.defaults.headers.post["Content-Type"]="application/json";var ae=te();c.a.render(a.a.createElement(h.a,{store:ae},a.a.createElement("div",{id:"content"},a.a.createElement(U,null)),a.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[49,13,16]]]);
//# sourceMappingURL=main.c3101f75.chunk.js.map