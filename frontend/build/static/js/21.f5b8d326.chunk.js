(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{102:function(e,t){},124:function(e,t,a){"use strict";var n=a(13),r=a(15),s=a(16),c=a(19),l=a(17),o=a(18),i=a(0),m=a.n(i),u=(a(135),a(140)),p=a.n(u),d=a(23),g=(a(143),a(86)),h=a(87),v=function(e){function t(){var e,a;Object(r.a)(this,t);for(var s=arguments.length,o=new Array(s),i=0;i<s;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={date1:null,date2:null,category:"",tag:"",town:""},a.pickDate=function(e,t){a.setState(Object(n.a)({},t,e),a.save)},a.handleChange=function(e){var t=e.target.value.trim(),r=e.target.name;a.setState(Object(n.a)({},r,t),a.save)},a.save=function(){var e=a.state;localStorage.setItem("searchParams",JSON.stringify(e))},a.liveFilter=function(e){e.preventDefault()},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.date1,n=t.date2,r=t.category,s=t.town,c=t.tag;return m.a.createElement("section",{className:"filter-row"},m.a.createElement("div",{className:"filter container"},m.a.createElement("div",{className:"row justify-content-center align-items-center py-4"},m.a.createElement("div",{className:"form-group col-sm-6 col-md-2 mt-2"},m.a.createElement("label",{className:"mb-4 d-block",id:"cat"},"Cat\xe9gories"),m.a.createElement("select",{name:"category",id:"inputState",onChange:function(t){return e.handleChange(t)},defaultValue:r,className:"form-control form-control-lg"},m.a.createElement("option",{defaultValue:!0},"Choisir la cat\xe9gorie"),m.a.createElement("option",null,"Coupons"),m.a.createElement("option",null,"Sortir"),m.a.createElement("option",null,"Bar louge & Restaurants"),m.a.createElement("option",null,"Shopping"),m.a.createElement("option",null,"Beaut\xe9 & Sant\xe9"),m.a.createElement("option",null,"Voyages"),m.a.createElement("option",null,"Made in 237"))),m.a.createElement("div",{className:"form-group col-sm-6 col-md-2 mt-sm-2"},m.a.createElement("label",null,"Ville"),m.a.createElement("input",{type:"text",onChange:function(t){return e.handleChange(t)},name:"town",className:"form-control",value:s,id:"ville",placeholder:"Entrez une ville"})),m.a.createElement("div",{className:"form-group col-sm-6 col-md-2 mt-sm-2"},m.a.createElement("label",null,"Tag"),m.a.createElement("input",{type:"text",onChange:function(t){return e.handleChange(t)},name:"tag",className:"form-control",value:c,id:"tag",placeholder:"Entrez un tag"})),m.a.createElement("div",{className:"form-group col-sm-6 col-md-2 mt-sm-2"},m.a.createElement("label",null,"Se d\xe9roulant entre le:"),m.a.createElement(p.a,{dateFormat:"Pp",placeholderText:"Choisissez une date",className:"form-control",selected:a,onChange:function(t){return e.pickDate(t,"date1")}})),m.a.createElement("div",{className:"form-group col-sm-6 col-md-2 mt-sm-2"},m.a.createElement("label",null,"Et le:"),m.a.createElement(p.a,{dateFormat:"Pp",id:"date2",placeholderText:"Choisissez une date",className:"form-control",selected:n,onChange:function(t){return e.pickDate(t,"date2")}})),m.a.createElement("div",{className:"form-group col-sm-12 col-md-1 mt-sm-2"},m.a.createElement(d.b,{to:"/filter",className:"button"},m.a.createElement(g.a,{icon:h.j,size:"1x"}))))))}}]),t}(i.Component);t.a=v},129:function(e,t,a){"use strict";t.a=function(e){return e.children}},135:function(e,t,a){},136:function(e,t,a){},144:function(e,t,a){e.exports=a.p+"static/media/biceps.61302d89.svg"},145:function(e,t,a){e.exports=a.p+"static/media/shopping-store.3c854bf9.svg"},146:function(e,t,a){e.exports=a.p+"static/media/meat.d6e5b490.svg"},147:function(e,t,a){e.exports=a.p+"static/media/map-location.17ee361c.svg"},148:function(e,t,a){e.exports=a.p+"static/media/idea.d6e0b16d.svg"},149:function(e,t,a){e.exports=a.p+"static/media/graphic-design.8abfb9cb.svg"},150:function(e,t,a){e.exports=a.p+"static/media/237maded.5f6e9e61.png"},151:function(e,t,a){e.exports=a.p+"static/media/photo.e3cd8550.svg"},160:function(e,t,a){"use strict";var n=a(15),r=a(16),s=a(19),c=a(17),l=a(18),o=a(0),i=a.n(o),m=a(23),u=a(144),p=a.n(u),d=a(145),g=a.n(d),h=a(146),v=a.n(h),f=a(147),E=a.n(f),b=a(148),y=a.n(b),N=a(149),w=a.n(N),S=a(150),j=a.n(S),k=function(e){var t=e.category,a=t.name.split(" ").join("-"),n="";return n="events"===window.location.pathname.split("/")[1]?"/events/category/"+a:"services"===window.location.pathname.split("/")[1]?"/services/category/"+a:"/category/"+a,i.a.createElement("div",{className:"wrimagecard wrimagecard-topimage"},i.a.createElement(m.c,{to:n},i.a.createElement("div",{className:"wrimagecard-topimage_header"},i.a.createElement("center",null,"Coupons"===t.name&&i.a.createElement("img",{src:w.a,alt:""}),"Sortir"===t.name&&i.a.createElement("img",{src:y.a,alt:""}),"Bar louge & Restaurants"===t.name&&i.a.createElement("img",{src:v.a,alt:""}),"Beaut\xe9 & Sant\xe9"===t.name&&i.a.createElement("img",{src:p.a,alt:""}),"Voyages"===t.name&&i.a.createElement("img",{src:E.a,alt:""}),"Shopping"===t.name&&i.a.createElement("img",{src:g.a,alt:""}),"Made in 237"===t.name&&i.a.createElement("img",{src:j.a,alt:""}))),i.a.createElement("div",{className:"wrimagecard-topimage_title"},i.a.createElement("p",{className:e.selected?"text-center selected":"text-center"},t.name))))},x=(a(136),a(9)),O=a.n(x),C=a(29),P=a(151),V=a.n(P),A=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={selected:!1,categories:[],loading:!0,error:null},a.fetchCategories=function(){O.a.get("/api/category/all").then(function(e){localStorage.setItem("categories",JSON.stringify(e.data.categories)),a.setState({categories:e.data.categories,loading:!1})}).catch(function(e){a.setState({error:"Une erreur s'est produite",loading:!1})})},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=JSON.parse(localStorage.getItem("categories"));t?(this.setState({categories:t,loading:!1}),O.a.get("/api/category/all").then(function(a){JSON.stringify(t)!==JSON.stringify(a.data.categories)&&(localStorage.setItem("categories",JSON.stringify(a.data.categories)),console.log("Categories changed"),e.setState({categories:a.data.categories,loading:!1}))}).catch(function(t){e.setState({error:"Une erreur s'est produite",loading:!1})})):this.fetchCategories()}},{key:"render",value:function(){var e=this,t=this.state,a=t.categories,n=t.loading,r=i.a.createElement("div",{className:"d-block ml-auto mr-auto"},i.a.createElement(C.default,null));return!n&&a.length&&(r=a.map(function(t){return e.props.selected===t.name?i.a.createElement(k,{selected:!0,key:t._id,category:t}):i.a.createElement(k,{key:t._id,category:t})})),i.a.createElement("section",{className:"categories"},i.a.createElement("div",{className:"container pb-4"},i.a.createElement("div",{className:"row py-5"},i.a.createElement("div",{className:"col"},i.a.createElement("center",null,i.a.createElement("h2",{className:"pt-4 service-header"},"Parcourir par cat\xe9gorie")))),i.a.createElement("div",{className:"row pb-5 categories-wrapper"},r,i.a.createElement("div",{className:"wrimagecard wrimagecard-topimage"},i.a.createElement("a",{href:"/gallery"},i.a.createElement("div",{className:"wrimagecard-topimage_header"},i.a.createElement("center",null,i.a.createElement("center",null,i.a.createElement("img",{src:V.a,alt:"Galerie"})))),i.a.createElement("div",{className:"wrimagecard-topimage_title"},i.a.createElement("p",{className:"text-center"},"Galerie")))))))}}]),t}(o.Component);t.a=A},162:function(e,t,a){},170:function(e,t,a){},174:function(e,t,a){"use strict";var n=a(15),r=a(16),s=a(19),c=a(17),l=a(18),o=a(0),i=a.n(o),m=a(30),u=function(e){var t=e.event.description.length<=95?e.event.description:e.event.description.slice(0,93)+"...";return i.a.createElement("a",{href:"/annonce/event/"+e.event._id,className:"home mt-4"},e.event.coupons&&e.event.coupons.nCoupons>0?i.a.createElement("h2",{className:"badge badge-warning custom-badge"},"Coupons"):i.a.createElement("h2",{className:"badge badge-dark custom-badge"},"Pas de coupons"),i.a.createElement("img",{src:m.a+"/"+e.event.image,alt:"",className:"home__img"}),i.a.createElement("h5",{className:"home_name"},e.event.title),i.a.createElement("div",{className:"home_content"},i.a.createElement("center",null,i.a.createElement("p",null,t))),i.a.createElement("button",{className:"btn home__btn"},"Consulter"))},p=a(29),d=a(9),g=a.n(d),h=(a(162),a(124)),v=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={loading:!0,events:[],error:""},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.isHomePage?g.a.get("/api/event/4").then(function(t){e.setState({loading:!1,events:t.data.events,error:""})}).catch(function(t){e.setState({loading:!1,error:"Une erreur s'est produite. Veuillez recharger la page"})}):this.props.isCategoryPage?this.setState({events:this.props.events,loading:!1,error:""}):this.props.isFilterPage?this.setState({events:this.props.events,loading:!1,error:""}):g.a.get("/api/event/validated/all").then(function(t){e.setState({loading:!1,events:t.data.events,error:""})}).catch(function(t){e.setState({loading:!1,error:"Une erreur s'est produite. Veuillez recharger la page"})})}},{key:"componentDidUpdate",value:function(e){this.props.events!==e.events&&(this.props.isCategoryPage||this.props.isFilterPage)&&this.setState({events:this.props.events,loading:!1,error:""})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.events,n=e.loading;return i.a.createElement(o.Fragment,null,!this.props.isHomePage&&i.a.createElement(h.a,null),i.a.createElement("section",{className:this.props.isHomePage?"events pt-5":"events pt-5 bgWhite",id:"events"},i.a.createElement("div",{className:"container pb-5"},i.a.createElement("div",{className:"row pt-5"},i.a.createElement("div",{className:"col-sm-12"},i.a.createElement("h3",{className:this.props.isHomePage?"event-header text-center":"pt-4 pb-1 event-header text-left"},this.props.eventType))),i.a.createElement("div",{className:n||t.length||this.props.isHomePage?"row pb-5 mb-2 justify-content-center":"row pb-5 mb-3 px-2"},t&&t.length?i.a.createElement("div",{className:"alert alert-danger"},t):null,n?i.a.createElement("div",{className:"d-block ml-auto mr-auto justify-content-center"},i.a.createElement(p.default,null)):a&&a.length?a.map(function(e,t){return i.a.createElement("div",{key:t,className:"col-sm-12 col-md-6 col-lg-3 mt-3"},i.a.createElement(u,{event:e}))}):null,n||0!==a.length||t.length?null:i.a.createElement("div",{className:"d-block ml-auto mr-auto justify-content-center"},i.a.createElement("h5",null,"Aucune Actualit\xe9"))),this.props.isHomePage&&0!==a.length?i.a.createElement("div",{className:"row pb-5"},i.a.createElement("div",{className:"col text-center see-more"},i.a.createElement("a",{className:"btn btn-danger",href:"/events"},"Voir plus"))):null,this.props.showMore&&0!==a.length?i.a.createElement("div",{className:"row pb-5"},i.a.createElement("div",{className:"col text-center see-more"},i.a.createElement("a",{className:"btn btn-danger",href:"/events/category/"+this.props.category},"Voir plus"))):null)))}}]),t}(o.Component);t.a=v},175:function(e,t,a){"use strict";var n=a(15),r=a(16),s=a(19),c=a(17),l=a(18),o=a(0),i=a.n(o),m=a(30),u=function(e){var t=e.service.offre.length<=90?e.service.offre:e.service.offre.slice(0,88)+"...";return i.a.createElement("a",{href:"/annonce/service/"+e.service._id,className:"mt-5"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"box"},e.service.coupons&&e.service.coupons.nCoupons>0?i.a.createElement("h2",{className:"badge badge-warning custom-badge"},"Coupons"):i.a.createElement("h2",{className:"badge badge-dark custom-badge"},"Pas de coupons"),i.a.createElement("div",{className:"img"},i.a.createElement("img",{src:m.a+"/"+e.service.image,alt:"Service"})),i.a.createElement("div",{className:"text-content"},i.a.createElement("h2",null,e.service.category,i.a.createElement("br",null),i.a.createElement("span",null,e.service.title)),i.a.createElement("p",null,t)))))},p=a(29),d=a(9),g=a.n(d),h=(a(170),a(124)),v=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={loading:!0,services:[],error:""},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.isHomePage?g.a.get("/api/service/4").then(function(t){e.setState({loading:!1,services:t.data.services,error:""})}).catch(function(t){e.setState({loading:!1,error:"Une erreur s'est produite. Veuillez recharger la page"})}):this.props.isCategoryPage?this.setState({services:this.props.services,loading:!1,error:""}):this.props.isFilterPage?this.setState({services:this.props.services,loading:!1,error:""}):g.a.get("/api/service/validated/all").then(function(t){e.setState({loading:!1,services:t.data.services,error:""})}).catch(function(t){e.setState({loading:!1,error:"Une erreur s'est produite. Veuillez recharger la page"})})}},{key:"componentDidUpdate",value:function(e){this.props.services!==e.services&&(this.props.isCategoryPage||this.props.isFilterPage)&&this.setState({services:this.props.services,loading:!1,error:""})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.services,n=e.loading;return i.a.createElement(o.Fragment,null,!this.props.isHomePage&&i.a.createElement(h.a,null),i.a.createElement("section",{className:this.props.isHomePage?"services bg-white pb-5":"services pb-5"},i.a.createElement("div",{className:"container pt-3 pb-5"},i.a.createElement("div",{className:"row pt-5"},i.a.createElement("div",{className:"col"},i.a.createElement("h1",{className:this.props.isHomePage?"pt-4 pb-4 service-header text-center":"pt-4 pb-4 service-header text-left"},this.props.eventType))),i.a.createElement("div",{className:n||t.length||this.props.isHomePage?"row pb-5 mb-2 justify-content-center":"row pb-5 mb-2"},t.length?i.a.createElement("div",{className:"alert alert-danger"},t):null,n?i.a.createElement("div",{className:"d-block ml-auto mr-auto justify-content-center"},i.a.createElement(p.default,null)):a&&a.length?a.map(function(e,t){return i.a.createElement("div",{key:t,className:"col-sm-12 col-md-6 col-lg-3 mt-3"},i.a.createElement(u,{service:e}))}):null,n||0!==a.length||t.length?null:i.a.createElement("div",{className:"d-block ml-auto mr-auto justify-content-center"},i.a.createElement("h5",null,"Aucun Service"))),this.props.isHomePage&&0!==a.length?i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col text-center see-more"},i.a.createElement("a",{href:"/services",className:"btn btn-danger"},"Voir plus"))):null,this.props.showMore&&0!==a.length?i.a.createElement("div",{className:"row pb-5"},i.a.createElement("div",{className:"col text-center see-more"},i.a.createElement("a",{className:"btn btn-danger",href:"/services/category/"+this.props.category},"Voir plus"))):null)))}}]),t}(o.Component);t.a=v},534:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a(16),s=a(19),c=a(17),l=a(18),o=a(0),i=a.n(o),m=a(95),u=a(129),p=a(160),d=a(174),g=a(175),h=a(9),v=a.n(h),f=a(29),E=(a(136),function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={loadingServices:!0,loadingEvents:!0,services:[],events:[],error:""},a.getEventsByCategory=function(){a.setState({loadingEvents:!0});var e=a.props.match.params.id.split("-").join(" ");v.a.get("/api/event/category/"+e).then(function(e){var t=e.data.events;"events"!==window.location.pathname.split("/")[1]&&(t=t.slice(0,8)),a.setState({events:t,error:"",loadingEvents:!1})}).catch(function(e){a.setState({error:"Une \xe9rreur s'est produite. Veuillez recharger.",loadingEvents:!1})})},a.getServicesByCategory=function(){a.setState({loadingServices:!0});var e=a.props.match.params.id.split("-").join(" ");v.a.get("/api/service/category/"+e).then(function(e){var t=e.data.services;"services"!==window.location.pathname.split("/")[1]&&(t=t.slice(0,8)),a.setState({services:t,error:"",loadingServices:!1})}).catch(function(e){a.setState({error:"Une \xe9rreur s'est produite. Veuillez recharger.",loadingServices:!1})})},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getEventsByCategory(),this.getServicesByCategory()}},{key:"componentDidUpdate",value:function(e){this.props!==e&&(this.getEventsByCategory(),this.getServicesByCategory())}},{key:"render",value:function(){var e=this.state,t=e.events,a=e.services,n=e.loadingEvents,r=e.loadingServices,s=this.props.match.params.id.split("-").join(" "),c="category"===window.location.pathname.split("/")[1];return i.a.createElement(u.a,null,i.a.createElement(m.a,null),i.a.createElement(p.a,{selected:s}),"events"===this.props.match.params.AnounceType||c?n?i.a.createElement("div",{className:"d-flex justify-content-center py-5"},i.a.createElement(f.default,null)):i.a.createElement(d.a,{showMore:c,category:s,events:t,isCategoryPage:!0,eventType:"Ev\xe8nements",isHomePage:!1}):null,"services"===this.props.match.params.AnounceType||c?r?i.a.createElement("div",{className:"d-flex justify-content-center py-5"},i.a.createElement(f.default,null)):i.a.createElement(g.a,{showMore:c,category:s,services:a,isCategoryPage:!0,eventType:"Services",isHomePage:!1}):null)}}]),t}(o.Component));t.default=E},82:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===s)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},85:function(e,t,a){e.exports=a.p+"static/media/logo.919201fe.png"},89:function(e,t,a){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a.d(t,"a",function(){return n})},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},95:function(e,t,a){"use strict";var n=a(15),r=a(16),s=a(19),c=a(17),l=a(18),o=a(0),i=a.n(o),m=a(23),u=a(86),p=a(20),d=a(31),g=a(87),h=(a(91),a(85)),v=a.n(h),f=a(96),E=a.n(f),b=a(89),y=(a(90),function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=Object(b.a)(this.props.recommandations.reverse());return e.reverse(),i.a.createElement("div",{className:"recommandations d-flex flex-column"},e.slice(0,5).map(function(e,t){return i.a.createElement("div",{key:t,className:e.visited?"rec-item":"notvisited rec-item"},i.a.createElement("a",{href:e.link},i.a.createElement("h4",null,e.title),i.a.createElement("div",{className:"d-flex"},i.a.createElement("div",{className:"d-flex flex-row align-items-center"},i.a.createElement(u.a,{icon:g.l,size:"1x"}),i.a.createElement("h6",{className:"ml-2 mb-0"},"Par ",e.name)))))}))}}]),t}(o.Component)),N=a(30),w=(a(92),a(9)),S=a.n(w),j=a(29),k=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={searching:!1,results:[],error:""},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this;if(e.query!==this.props.query)if(this.props.query&&this.props.query.trim().length>0){var a=this.props.query;this.setState({searching:!0,results:[]}),S.a.get("/api/event/"+a+"/search").then(function(e){var n=[];e.data.events.forEach(function(e){e.eventType="event",t.state.results.includes(e)||n.push(e)}),S.a.get("/api/service/"+a+"/search").then(function(e){var a=[];e.data.services.forEach(function(e){e.eventType="service",t.state.results.includes(e)||a.push(e)}),t.setState({results:[].concat(n,a),searching:!1})}).catch(function(e){t.setState({error:"Une \xe9rreur s'est produite. Veuillez recharger",searching:!1})})}).catch(function(e){t.setState({error:"Une \xe9rreur s'est produite. Veuillez recharger",searching:!1})})}else this.setState({searching:!1})}},{key:"render",value:function(){return i.a.createElement("div",{className:"searchResult-list ".concat(this.props.className)},this.state.error.length?i.a.createElement("div",{className:"alert alert-danger text-center"},this.state.error):null,this.state.searching?i.a.createElement("div",{className:"d-flex justify-content-center p-3"},i.a.createElement(j.default,null)):this.state.results.length?this.state.results.slice(0,10).map(function(e,t){return i.a.createElement(x,{key:t,result:e})}):i.a.createElement("div",{className:"d-flex justify-content-center p-3"},i.a.createElement("span",null,"Aucun r\xe9sultat")))}}]),t}(o.PureComponent),x=function(e){return i.a.createElement("a",{href:"/annonce/"+e.result.eventType+"/"+e.result._id,className:"d-flex searchResult-item"},i.a.createElement("img",{src:N.a+"/"+e.result.image,alt:"",className:"mr-3"}),i.a.createElement("div",{className:"d-flex flex-column "},i.a.createElement("h3",null,e.result.title),i.a.createElement("span",{className:"text-muted"},e.result.category)))},O=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={user:null,name:"",token:null,role:"",accountValidated:null,redirect:!1,query:""},a.logout=function(){a.props.onLogout()},a.handleInputChange=function(e){var t=e.target.value;a.setState({query:t})},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=JSON.parse(localStorage.getItem("authData"));if(t&&t.user){this.setState({user:t.user,name:t.user.name,token:t.token,role:t.user.role,accountValidated:t.user.accountValidated});var a=E()(N.a);a.on("display notification",function(t){var a=JSON.parse(localStorage.getItem("authData"));a&&a.user&&a.user._id===t.to&&e.props.onAutoSign()}),a.on("display anounce notification",function(t){var a=JSON.parse(localStorage.getItem("authData"));a&&a.user&&e.props.onAutoSign()})}}},{key:"componentDidUpdate",value:function(e){e.user!==this.props.user&&this.setState({user:this.props.user,name:this.props.name,token:this.props.token,role:this.props.role,accountValidated:this.props.accountValidated})}},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.token,r=t.role,s=t.accountValidated,c=t.user,l=0;c&&c.recommandations&&c.recommandations.length&&(l=c.recommandations.filter(function(e){return!1===e.visited}).length);return i.a.createElement(o.Fragment,null,i.a.createElement("nav",{className:(this.props.home,"navbar navbar-expand-lg navbar-light bg-light navbar-shadow")},i.a.createElement("div",{className:"container"},i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"search-wrapper"},i.a.createElement("form",{className:"form-inline d-lg-none my-2 my-lg-0 navbar-brand form-mobile"},i.a.createElement("input",{onChange:function(t){return e.handleInputChange(t)},className:"form-control mr-sm-2",type:"text",placeholder:"Rechercher...","aria-label":"Rechercher..."}),i.a.createElement(u.a,{icon:g.j,size:"2x"})),this.state.query.trim().length>0?i.a.createElement(k,{query:this.state.query,className:"d-lg-none"}):null),n?i.a.createElement("div",{className:"dropdown-mobile mt-2"},i.a.createElement("a",{href:"/recommandations",className:"",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},i.a.createElement(u.a,{icon:g.b,size:"1x"}),i.a.createElement("sup",{className:"ml-1"},c.recommandations&&c.recommandations.length?c.recommandations.length:0)),c.recommandations&&c.recommandations.length?i.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},i.a.createElement(y,{recommandations:c.recommandations.reverse()}),i.a.createElement("div",{className:"notifications-link py-2"},i.a.createElement("a",{id:"notifications-link",className:"notifications-link pt-3 text-center",href:"/user/notifications"},"Voir toutes les notifications"))):null):null,i.a.createElement(m.b,{className:"navbar-brand",to:"/"},i.a.createElement("img",{src:v.a,width:"110",height:"100%",alt:"Logo"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo03"},i.a.createElement("div",{className:"ml-auto search-wrapper"},i.a.createElement("form",{className:"form-inline d-none d-lg-block my-2 my-lg-0 ml-auto mr-4 form-desktop"},i.a.createElement("input",{onChange:function(t){return e.handleInputChange(t)},className:"form-control mr-sm-2",type:"text",placeholder:"Rechercher...","aria-label":"Rechercher..."}),i.a.createElement(u.a,{icon:g.j,size:"2x"})),this.state.query.trim().length>0?i.a.createElement(k,{query:this.state.query,className:"d-none d-lg-block"}):null),i.a.createElement("ul",{className:"navbar-nav  mt-2 mt-lg-0"},n&&"admin"===r?i.a.createElement("li",{className:"nav-item"},i.a.createElement(m.c,{className:"nav-link",to:"/admin/home"},"Admin Dashboard")):null,n&&"supplier"===r&&s?i.a.createElement("li",{className:"nav-item"},i.a.createElement(m.c,{className:"nav-link",to:"/dashboard/reservations"},"Dashboard")):null,!n||"user"!==r&&"supplier"!==r?null:i.a.createElement("li",{className:"nav-item"},i.a.createElement(m.c,{className:"nav-link",to:"/user/reservations"},"Mes R\xe9servations")),!n||"user"!==r&&"supplier"!==r?null:i.a.createElement("li",{className:"nav-item"},i.a.createElement(m.c,{className:"nav-link",to:"/user/gallery"},"Ma Galerie")),n&&"admin"!==r?i.a.createElement("li",{className:"nav-item rec-item-desktop"},i.a.createElement("div",{className:"dropdown mt-2"},i.a.createElement("a",{href:"/recommandations",className:"",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},i.a.createElement(u.a,{icon:g.b,size:"1x"}),i.a.createElement("sup",{className:"ml-1"},l)),c.recommandations&&c.recommandations.length?i.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},i.a.createElement(y,{recommandations:c.recommandations.reverse()}),i.a.createElement("div",{className:"notifications-link py-2"},i.a.createElement("a",{id:"notifications-link",className:"notifications-link pt-3 text-center",href:"/user/notifications"},"Voir toutes les notifications"))):null)):null,n?null:i.a.createElement(o.Fragment,null,i.a.createElement("li",{className:"nav-item"},i.a.createElement(m.c,{className:"nav-link",to:"/auth/signup"},i.a.createElement("i",{className:"fa fa-user"}),"Cr\xe9er un compte")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(m.c,{className:"nav-link",to:"/auth/login"},i.a.createElement("i",{className:"fa fa-user"}),"Se connecter")))),n?i.a.createElement("div",{className:"dropdown"},i.a.createElement("p",{className:"dropbtn"},a),i.a.createElement("div",{className:"dropdown-content"},i.a.createElement("a",{className:"nav-link",href:"/user/profile"},i.a.createElement("i",{className:"fa fa-user"}),"Mon profil"),i.a.createElement("a",{href:"/auth/login",onClick:this.logout},i.a.createElement("i",{className:"fa fa-sign-out"}),"Logout"))):null))))}}]),t}(o.PureComponent);t.a=Object(p.b)(function(e){return{userId:e.auth.email,email:e.auth.email,name:e.auth.name,token:e.auth.token,role:e.auth.role,accountValidated:e.auth.accountValidated,user:e.auth.user}},function(e){return{onLogout:function(){return e(Object(d.e)())},onAutoSign:function(){return e(Object(d.a)())}}})(O)}}]);
//# sourceMappingURL=21.f5b8d326.chunk.js.map