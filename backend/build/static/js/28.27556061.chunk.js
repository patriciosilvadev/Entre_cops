(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{181:function(e,t,a){},189:function(e,t,a){},197:function(e,t,a){"use strict";var n=a(15),r=a(16),s=a(19),l=a(17),c=a(18),i=a(0),o=a.n(i),m=a(29),u=function(e){var t=e.service.offre.length<=90?e.service.offre:e.service.offre.slice(0,88)+"...";return o.a.createElement("a",{href:"/annonce/service/"+e.service._id,className:"mt-5"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"box"},e.service.coupons&&e.service.coupons.nCoupons>0?o.a.createElement("h2",{className:"badge badge-warning custom-badge"},"Coupons"):o.a.createElement("h2",{className:"badge badge-dark custom-badge"},"Pas de coupons"),o.a.createElement("div",{className:"img"},o.a.createElement("img",{src:m.a+"/"+e.service.image,alt:"Service"})),o.a.createElement("div",{className:"text-content"},o.a.createElement("h2",null,e.service.category,o.a.createElement("br",null),o.a.createElement("span",null,e.service.title)),o.a.createElement("p",null,t)))))},p=a(105),d=a(9),v=a.n(d),g=(a(189),a(161)),h=a(103),E=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={loading:!0,services:[],error:""},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.isHomePage?v.a.get("/api/service/4").then(function(t){e.setState({loading:!1,services:t.data.services,error:""})}).catch(function(t){e.setState({loading:!1,error:"Une erreur s'est produite. Veuillez recharger la page"})}):this.props.isCategoryPage?this.setState({services:this.props.services,loading:!1,error:""}):this.props.isFilterPage?this.setState({services:this.props.services,loading:!1,error:""}):v.a.get("/api/service/validated/all").then(function(t){e.setState({loading:!1,services:t.data.services,error:""})}).catch(function(t){e.setState({loading:!1,error:"Une erreur s'est produite. Veuillez recharger la page"})})}},{key:"componentDidUpdate",value:function(e){this.props.services!==e.services&&(this.props.isCategoryPage||this.props.isFilterPage)&&this.setState({services:this.props.services,loading:!1,error:""})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.services,n=e.loading;return o.a.createElement(h.a,null,!this.props.isHomePage&&o.a.createElement(g.a,null),o.a.createElement("section",{className:this.props.isHomePage?"services bg-white pb-5":"services pb-5"},o.a.createElement("div",{className:"container pt-3 pb-5"},o.a.createElement("div",{className:"row pt-5"},o.a.createElement("div",{className:"col"},o.a.createElement("h1",{className:this.props.isHomePage?"pt-4 pb-4 service-header text-center":"pt-4 pb-4 service-header text-left"},this.props.eventType))),o.a.createElement("div",{className:n||t.length||this.props.isHomePage?"row pb-5 mb-2 justify-content-center":"row pb-5 mb-2"},t.length?o.a.createElement("div",{className:"alert alert-danger"},t):null,n?o.a.createElement("div",{className:"d-block ml-auto mr-auto justify-content-center"},o.a.createElement(p.a,null)):a&&a.length?a.map(function(e,t){return o.a.createElement("div",{key:t,className:"col-sm-12 col-md-6 col-lg-3 mt-3"},o.a.createElement(u,{service:e}))}):null,n||0!==a.length||t.length?null:o.a.createElement("div",{className:"d-block ml-auto mr-auto justify-content-center"},o.a.createElement("h5",null,"Aucun Service"))),this.props.isHomePage&&0!==a.length?o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col text-center see-more"},o.a.createElement("a",{href:"/services",className:"btn btn-danger"},"Voir plus"))):null,this.props.showMore&&0!==a.length?o.a.createElement("div",{className:"row pb-5"},o.a.createElement("div",{className:"col text-center see-more"},o.a.createElement("a",{className:"btn btn-danger",href:"/services/category/"+this.props.category},"Voir plus"))):null)))}}]),t}(i.Component);t.a=E},198:function(e,t,a){"use strict";var n=a(15),r=a(16),s=a(19),l=a(17),c=a(18),i=a(0),o=a.n(i),m=a(29),u=function(e){var t=e.event.description.length<=95?e.event.description:e.event.description.slice(0,93)+"...";return o.a.createElement("a",{href:"/annonce/event/"+e.event._id,className:"home mt-4"},e.event.coupons&&e.event.coupons.nCoupons>0?o.a.createElement("h2",{className:"badge badge-warning custom-badge"},"Coupons"):o.a.createElement("h2",{className:"badge badge-dark custom-badge"},"Pas de coupons"),o.a.createElement("img",{src:m.a+"/"+e.event.image,alt:"",className:"home__img"}),o.a.createElement("h5",{className:"home_name"},e.event.title),o.a.createElement("div",{className:"home_content"},o.a.createElement("center",null,o.a.createElement("p",null,t))),o.a.createElement("button",{className:"btn home__btn"},"Consulter"))},p=a(105),d=a(9),v=a.n(d),g=(a(181),a(161)),h=a(103),E=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={loading:!0,events:[],error:""},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.isHomePage?v.a.get("/api/event/4").then(function(t){e.setState({loading:!1,events:t.data.events,error:""})}).catch(function(t){e.setState({loading:!1,error:"Une erreur s'est produite. Veuillez recharger la page"})}):this.props.isCategoryPage?this.setState({events:this.props.events,loading:!1,error:""}):this.props.isFilterPage?this.setState({events:this.props.events,loading:!1,error:""}):v.a.get("/api/event/validated/all").then(function(t){e.setState({loading:!1,events:t.data.events,error:""})}).catch(function(t){e.setState({loading:!1,error:"Une erreur s'est produite. Veuillez recharger la page"})})}},{key:"componentDidUpdate",value:function(e){this.props.events!==e.events&&(this.props.isCategoryPage||this.props.isFilterPage)&&this.setState({events:this.props.events,loading:!1,error:""})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.events,n=e.loading;return o.a.createElement(h.a,null,!this.props.isHomePage&&o.a.createElement(g.a,null),o.a.createElement("section",{className:this.props.isHomePage?"events pt-5":"events pt-5 bgWhite",id:"events"},o.a.createElement("div",{className:"container pb-5"},o.a.createElement("div",{className:"row pt-5"},o.a.createElement("div",{className:"col-sm-12"},o.a.createElement("h3",{className:this.props.isHomePage?"event-header text-center":"pt-4 pb-1 event-header text-left"},this.props.eventType))),o.a.createElement("div",{className:n||t.length||this.props.isHomePage?"row pb-5 mb-2 justify-content-center":"row pb-5 mb-3 px-2"},t&&t.length?o.a.createElement("div",{className:"alert alert-danger"},t):null,n?o.a.createElement("div",{className:"d-block ml-auto mr-auto justify-content-center"},o.a.createElement(p.a,null)):a&&a.length?a.map(function(e,t){return o.a.createElement("div",{key:t,className:"col-sm-12 col-md-6 col-lg-3 mt-3"},o.a.createElement(u,{event:e}))}):null,n||0!==a.length||t.length?null:o.a.createElement("div",{className:"d-block ml-auto mr-auto justify-content-center"},o.a.createElement("h5",null,"Aucune Actualit\xe9"))),this.props.isHomePage&&0!==a.length?o.a.createElement("div",{className:"row pb-5"},o.a.createElement("div",{className:"col text-center see-more"},o.a.createElement("a",{className:"btn btn-danger",href:"/events"},"Voir plus"))):null,this.props.showMore&&0!==a.length?o.a.createElement("div",{className:"row pb-5"},o.a.createElement("div",{className:"col text-center see-more"},o.a.createElement("a",{className:"btn btn-danger",href:"/events/category/"+this.props.category},"Voir plus"))):null)))}}]),t}(i.Component);t.a=E},218:function(e,t,a){},477:function(e,t,a){},478:function(e,t,a){e.exports=a.p+"static/media/b2.8f95ea04.png"},628:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a(16),s=a(19),l=a(17),c=a(18),i=a(0),o=a.n(i),m=a(116),u=a(103),p=a(198),d=a(197),v=a(250),g=a(9),h=a.n(g),E=a(105),b=(a(477),function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={images:[],error:"",loading:!0},a.getBannerImages=function(){h.a.get("/api/banner/current").then(function(e){if(JSON.stringify(e.data.banners)!==localStorage.getItem("banner")){var t=e.data.banners;t.reverse(),a.setState({loading:!1,images:t,error:""}),localStorage.setItem("banner",JSON.stringify(t))}}).catch(function(e){a.setState({loading:!1,error:"Une erreur s'est produite, veuillez re\xe9ssayer"})})},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("banner"));e&&e.length&&this.setState({images:e,loading:!1}),this.getBannerImages()}},{key:"render",value:function(){return o.a.createElement("section",{id:"showcase"},o.a.createElement("div",{id:"carouselExampleIndicators",className:"carousel slide","data-ride":"carousel"},o.a.createElement("ol",{className:"carousel-indicators"},this.state.images.length?o.a.createElement(u.a,null,this.state.images.map(function(e,t){return o.a.createElement("li",{key:t,"data-target":"#carouselExampleIndicators","data-slide-to":t,className:0===t&&"active"})})):null),o.a.createElement("div",{className:"carousel-inner"},this.state.loading?o.a.createElement("div",{className:"d-flex justify-content-center align-items-center",style:{minHeight:"75vh"}},o.a.createElement(E.a,null)):o.a.createElement(u.a,null,this.state.images.map(function(e,t){return o.a.createElement("a",{style:{padding:"0"},key:t,className:0===t?"carousel-item active":"carousel-item",href:e.followlink},o.a.createElement("img",{className:"d-block w-100",src:e.link,alt:"First slide"}),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"carousel-caption d-none d-sm-block text-bottom mb-5"})))}))),o.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev"},o.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),o.a.createElement("span",{className:"sr-only"},"Previous")),o.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next"},o.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),o.a.createElement("span",{className:"sr-only"},"Next"))))}}]),t}(i.Component)),f=(a(218),a(478)),N=a.n(f),y=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(u.a,null,o.a.createElement("section",{className:" bannerwrapper"},o.a.createElement("div",{className:"container py-5 banner"},o.a.createElement("div",{className:"row py-5 justify-content-between align-items-center"},o.a.createElement("div",{className:"col-sm-12 d-none d-md-block col-md-6 align-self-end text-center"},o.a.createElement("img",{src:N.a,className:"img-fluid ",alt:""})),o.a.createElement("div",{className:"col-sm-12 col-md-6 d-md-center"},o.a.createElement("h1",null,o.a.createElement("b",null,"Vous avez des services ou")," "),o.a.createElement("h1",null,o.a.createElement("b",null,"des actualit\xe9s \xe0 communiquer ?")),o.a.createElement("a",{className:"btn btn-outline-light btn-lg mt-4 supplierdemand",href:"/supplier"},"Devenez un Partenaire Maintenant"))))))}}]),t}(i.Component),j=a(161),w=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(u.a,null,o.a.createElement(m.a,{home:!0}),o.a.createElement(b,null),o.a.createElement(j.a,null),o.a.createElement(v.a,null),o.a.createElement(p.a,{eventType:"Actualit\xe9s",isHomePage:!0}),o.a.createElement(d.a,{eventType:"Services",isHomePage:!0}),o.a.createElement(y,null))}}]),t}(i.Component);t.default=w}}]);
//# sourceMappingURL=28.27556061.chunk.js.map