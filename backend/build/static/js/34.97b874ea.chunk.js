(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{104:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},107:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},129:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return o});var n=a(0),r=a.n(n),l=a(140),s=a.n(l),c=(a(141),function(e){return r.a.createElement(s.a,{format:"YYYY-MM-DD HH:mm"},e.date)}),o=function(e){return r.a.createElement(s.a,{fromNow:!0},e.date)}},517:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a(16),l=a(19),s=a(17),c=a(18),o=a(0),i=a.n(o),u=a(126),m=a.n(u),d=a(129),E=a(136),h=a.n(E),f=a(9),p=a.n(f),v=a(105),g=a(103),b=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={showModal:!1,users:[],error:"",loading:!0,deleting:!1},a.deleteUser=function(e){a.setState({deleting:!0,error:""}),p.a.delete("api/user/"+e).then(function(t){var n=a.state.users.filter(function(t){return t._id!==e});a.setState({deleting:!1,error:"",users:n}),a.setState({deleting:!1,error:""})}).catch(function(e){a.setState({error:"Une \xe9rreur s'est produite. Veuillez re\xe9ssayer.",deleting:!1})})},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){var e=this;try{p.a.get("/api/user/").then(function(t){e.setState({users:t.data.users,loading:!1,error:""})}).catch(function(t){e.setState({error:"Une \xe9rreur s'est produite. Veuillez re\xe9ssayer.",loading:!1})})}catch(t){this.setState({error:"Une \xe9rreur s'est produite. Veuillez re\xe9ssayer.",loading:!1})}}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.loading,r=t.deleting,l=t.users;return i.a.createElement(g.a,null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row mt-5"},i.a.createElement("div",{className:"col-sm-12"},i.a.createElement("h3",{className:"title"},"UTILISATEURS")),i.a.createElement("div",{className:"col-sm-12 text-center"},a&&a.length?i.a.createElement("div",{className:"alert alert-danger",style:{fontSize:"1.3rem"}},a):null,n?i.a.createElement(v.a,null):l&&l.length?i.a.createElement("table",{className:"table table-bordered"},i.a.createElement("thead",{className:"thead-inverse thead-dark"},i.a.createElement("tr",null,i.a.createElement("th",null,"#"),i.a.createElement("th",null,"Nom"),i.a.createElement("th",null,"Email"),i.a.createElement("th",null,"Cr\xe9ation"),i.a.createElement("th",null,"Actions"))),i.a.createElement("tbody",null,l.map(function(t,a){return i.a.createElement("tr",{key:a},i.a.createElement("th",{scope:"row"},a+1),i.a.createElement("td",null,t.name),i.a.createElement("td",null,t.email),i.a.createElement("td",{className:"date"},i.a.createElement(d.a,{date:t.date})),i.a.createElement("td",{className:"actions"},i.a.createElement("button",{onClick:function(){return e.deleteUser(t._id)},className:"btn btn-danger btn-md ml-3"},r?i.a.createElement(v.a,null):"Supprimer")))}))):null))),i.a.createElement(m.a,{show:this.state.showModal,size:"lg",onHide:function(){return e.setState({showModal:!e.state.showModal})}},i.a.createElement(m.a.Header,{closeButton:!0},i.a.createElement(m.a.Title,null,"D\xe9tails")),i.a.createElement(m.a.Body,null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-12 pl-4 pr-4 mt-4 mb-3"})))),i.a.createElement(m.a.Footer,null,i.a.createElement("div",{className:"py-3"},i.a.createElement(h.a,{variant:"danger",onClick:function(){return e.setState({showModal:!e.state.showModal})}},"Fermer")))))}}]),t}(o.Component);t.default=b}}]);
//# sourceMappingURL=34.97b874ea.chunk.js.map