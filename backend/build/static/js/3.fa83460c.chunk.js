(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{125:function(t,n,e){"use strict";t.exports=e(487)},165:function(t,n,e){},166:function(t,n,e){},487:function(t,n,e){t.exports=function(t){var n={};function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(i,o,function(n){return t[n]}.bind(null,o));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=5)}([function(t,n){t.exports=e(0)},function(t,n,e){t.exports=e(2)()},function(t,n,e){"use strict";var i=e(3);function o(){}function r(){}r.resetWarningCache=o,t.exports=function(){function t(t,n,e,o,r,a){if(a!==i){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return t}var e={array:t.isRequired=t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:r,resetWarningCache:o};return e.PropTypes=e}},function(t,n,e){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,n,e){},function(t,n,e){"use strict";e.r(n);var i=e(0),o=e.n(i),r=e(1),a=e.n(r),c=function(t,n){var e,i,o=n;this.pause=function(){clearTimeout(e),o-=Date.now()-i},this.resume=function(){i=Date.now(),clearTimeout(e),e=setTimeout(t,o)},this.clear=function(){clearTimeout(e)},this.resume()},s="notification-item",u={BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center",TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center"},l={SUCCESS:"success",DANGER:"danger",INFO:"info",DEFAULT:"default",WARNING:"warning"},f="timeout",p=function(){return Math.random().toString(36).substr(2,9)},h=function(t){return null==t};function d(t){return t===u.BOTTOM_LEFT||t===u.BOTTOM_RIGHT||t===u.BOTTOM_CENTER}function m(t){return t===u.TOP_LEFT||t===u.TOP_RIGHT||t===u.TOP_CENTER}function y(t){var n=t.type,e=t.content,i=t.userDefinedTypes,o=[s];if(e)return o;if(h(i))return function(t){switch(n){case l.DEFAULT:return[s,"notification-default"];case l.SUCCESS:return[s,"notification-success"];case l.DANGER:return[s,"notification-danger"];case l.WARNING:return[s,"notification-warning"];case l.INFO:return[s,"notification-info"];default:return[s]}}();var r=i.find(function(t){return t.name===n});return o.concat(r.htmlClasses)}function v(t,n){var e=t.duration,i=t.timingFunction,o=t.delay;return"".concat(e,"ms ").concat(n," ").concat(i," ").concat(o,"ms")}function b(t,n){var e=n.duration,i=n.timingFunction,o=n.delay,r=t||{};return h(r.duration)&&(r.duration=e),h(r.timingFunction)&&(r.timingFunction=i),h(r.delay)&&(r.delay=o),r}function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],i=!0,o=!1,r=void 0;try{for(var a,c=t[Symbol.iterator]();!(i=(a=c.next()).done)&&(e.push(a.value),!n||e.length!==n);i=!0);}catch(t){o=!0,r=t}finally{try{i||null==c.return||c.return()}finally{if(o)throw r}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function T(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,i)}return e}function O(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?T(e,!0).forEach(function(n){S(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):T(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function S(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function w(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function N(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function R(t){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function k(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _(t,n){return(_=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var C=function(t){function n(t){var e,i;!function(t,e){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this),(e=!(i=R(n).call(this,t))||"object"!==E(i)&&"function"!=typeof i?k(this):i).rootElementRef=o.a.createRef(),e.onClick=e.onClick.bind(k(e)),e.onTouchStart=e.onTouchStart.bind(k(e)),e.onTouchMove=e.onTouchMove.bind(k(e)),e.onTouchEnd=e.onTouchEnd.bind(k(e)),e.onMouseEnter=e.onMouseEnter.bind(k(e)),e.onMouseLeave=e.onMouseLeave.bind(k(e));var r=t.notification.width;return e.state={parentStyle:{height:0,overflow:"hidden",width:r?"".concat(r,"px"):"auto"},htmlClassList:y(t.notification),animationPlayState:"running",touchEnabled:!0},e}var e,i;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&_(t,n)}(n,o.a.Component),e=n,(i=[{key:"componentWillUnmount",value:function(){this.timer&&this.timer.clear()}},{key:"componentDidMount",value:function(){var t,n,e=this,i=this.props,o=i.notification,r=i.count,a=o.dismiss,s=a.duration,u=a.onScreen,l=this.rootElementRef.current.scrollHeight,p=(t=o,!((n=r)<=1)&&1<n&&("top"===t.insert&&m(t.container)||"bottom"===t.insert&&d(t.container))),h=function(){s&&!u&&(e.timer=new c(function(){return e.removeNotification(f)},s))};this.setState(function(t){return{parentStyle:{width:t.parentStyle.width,height:"".concat(l,"px"),transition:p?v(o.slidingEnter,"height"):"10ms height"},onTransitionEnd:h}},function(){requestAnimationFrame(function(){e.setState(function(t){return{htmlClassList:[].concat(w(o.animationIn),w(t.htmlClassList))}})})})}},{key:"componentDidUpdate",value:function(t){var n=t.removed;this.props.removed&&!n&&this.removeNotification("manual")}},{key:"removeNotification",value:function(t){var n=this,e=this.props,i=e.notification,o=e.toggleRemoval,r=i.id,a=i.onRemoval,c=i.dismiss.waitForAnimation,s=[].concat(w(i.animationOut),w(y(i))),u=function(){return o(r,function(){return a(r,t)})},l={height:0,transition:v(i.slidingExit,"height")};return c?this.setState(function(t){var e=t.parentStyle.width;return{htmlClassList:s,onAnimationEnd:function(){n.setState({parentStyle:O({width:e},l),onTransitionEnd:u})}}}):this.setState(function(t){return{parentStyle:O({width:t.parentStyle.width},l),onTransitionEnd:u,htmlClassList:s}})}},{key:"onClick",value:function(){var t=this.props.notification.dismiss;(t.click||t.showIcon)&&this.removeNotification("click")}},{key:"onTouchStart",value:function(t){var n=g(t.touches,1)[0].pageX;this.setState({startX:n,currentX:n})}},{key:"onTouchMove",value:function(t){var n,e,i=this,o=t.touches,r=this.state.startX,a=this.props,c=a.toggleRemoval,s=a.notification,u=s.id,l=s.onRemoval,f=s.slidingExit,p=s.touchSlidingExit,h=p.swipe,d=p.fade,m=g(o,1)[0].pageX,y=m-r,b=2*window.innerWidth,E="".concat(0<=m-r?b:-b,"px");if(n=y,e=Math.abs(n),.4*window.innerWidth<=e){var T=v(h,"left"),S=v(d,"opacity"),w=function(){c(u,function(){return l(u,"touch")})};return this.setState(function(t){return{touchEnabled:!1,parentStyle:O({},t.parentStyle,{left:E,opacity:0,transition:"".concat(T,", ").concat(S)}),onTransitionEnd:function(){i.setState(function(t){return{parentStyle:O({},t.parentStyle,{height:0,transition:v(f,"height")}),onTransitionEnd:w}})}}})}return this.setState(function(t){var n=t.parentStyle;return{currentX:m,parentStyle:O({},n,{left:"".concat(0+y,"px")})}})}},{key:"onTouchEnd",value:function(){var t=this.props.notification.touchRevert;this.setState(function(n){return{parentStyle:O({},n.parentStyle,{left:0,transition:v(t,"left")})}})}},{key:"onMouseEnter",value:function(){this.timer?this.timer.pause():this.setState({animationPlayState:"paused"})}},{key:"onMouseLeave",value:function(){this.timer?this.timer.resume():this.setState({animationPlayState:"running"})}},{key:"renderTitle",value:function(){var t=this.props.notification.title;return t?o.a.createElement("p",{className:"notification-title"},t):null}},{key:"renderMessage",value:function(){var t=this.props.notification.message;return o.a.createElement("p",{className:"notification-message"},t)}},{key:"renderCloseIcon",value:function(){return this.props.notification.dismiss.showIcon?o.a.createElement("div",{className:"notification-close",onClick:this.onClick}):null}},{key:"renderTimer",value:function(){var t=this,n=this.props.notification.dismiss,e=n.duration,i=n.onScreen,r=this.state.animationPlayState;if(e&&i){var a={animationName:"timer",animationDuration:"".concat(e,"ms"),animationTimingFunction:"linear",animationFillMode:"forwards",animationDelay:0,animationPlayState:r};return o.a.createElement("div",{className:"timer"},o.a.createElement("div",{className:"timer-filler",onAnimationEnd:function(){return t.removeNotification(f)},style:a}))}}},{key:"renderCustomContent",value:function(){var t=this.state.htmlClassList,n=this.props.notification.content;return o.a.createElement("div",{className:"".concat([].concat(w(t),["n-child"]).join(" "))},o.a.isValidElement(n)?n:o.a.createElement(n,null))}},{key:"renderNotification",value:function(){var t=this.state.htmlClassList,n=this.props.notification.dismiss,e=n.duration,i=n.pauseOnHover,r=0<e&&i;return o.a.createElement("div",{className:"".concat([].concat(w(t),["n-child"]).join(" ")),onMouseEnter:r?this.onMouseEnter:null,onMouseLeave:r?this.onMouseLeave:null},o.a.createElement("div",{className:"notification-content"},this.renderCloseIcon(),this.renderTitle(),this.renderMessage(),this.renderTimer()))}},{key:"render",value:function(){var t=this.props.notification,n=t.content,e=t.dismiss.click,i=this.state,r=i.parentStyle,a=i.onAnimationEnd,c=i.onTransitionEnd,s=i.touchEnabled;return o.a.createElement("div",{ref:this.rootElementRef,onClick:e?this.onClick:null,className:"n-parent",style:r,onAnimationEnd:a,onTransitionEnd:c,onTouchStart:s?this.onTouchStart:null,onTouchMove:s?this.onTouchMove:null,onTouchEnd:s?this.onTouchEnd:null},n?this.renderCustomContent():this.renderNotification())}}])&&N(e.prototype,i),n}();C.propTypes={toggleRemoval:a.a.func.isRequired,count:a.a.number.isRequired,removed:a.a.bool};var P=new function(){var t=this;return this.types=null,this.add=function(){},this.addNotification=function(n){var e=t.types;return t.add(function(t,n){var e,i,o=t,r=o.id,a=o.type,c=o.insert,s=o.content,u=o.container,f=o.animationIn,d=o.animationOut,m=o.slidingEnter,y=o.slidingExit,v=o.touchRevert,E=o.touchSlidingExit,g=o.dismiss,T=o.width,O=o.onRemoval;o.id=r||p(),o.type=s?null:a.toLowerCase(),n&&!s&&(o.userDefinedTypes=function(t,n){var e=t.content,i=t.type;if(!e&&i!==l.SUCCESS&&i!==l.DANGER&&i!==l.INFO&&i!==l.DEFAULT&&i!==l.WARNING&&n)return n}(o,n)),h(T)||(o.width=T),o.container=u.toLowerCase(),o.insert=(c||"top").toLowerCase(),o.dismiss=(i={duration:0,click:!0,touch:!0,onScreen:!1,waitForAnimation:!1,showIcon:!1},(e=g)?(Object.keys(i).forEach(function(t){h(e[t])&&(e[t]=i[t])}),e):i),o.animationIn=f||[],o.animationOut=d||[],o.onRemoval=O||function(){};var S=function(t,n,e){return{duration:t,timingFunction:n,delay:e}};o.slidingEnter=b(m,S(600,"linear",0)),o.slidingExit=b(y,S(600,"linear",0)),o.touchRevert=b(v,S(600,"linear",0));var w=E||{},N=w.swipe,R=w.fade;return o.touchSlidingExit=w,o.touchSlidingExit.swipe=b(N||{},S(600,"linear",0)),o.touchSlidingExit.fade=b(R||{},S(300,"linear",0)),o}(n,e))},this.removeNotification=function(){},this.register=function(n){var e=n.addNotification,i=n.removeNotification,o=n.types;t.add=e,t.removeNotification=i,t.types=o},this};function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function M(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function L(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function A(t){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function x(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function I(t,n){return(I=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}e(4),e.d(n,"default",function(){return F}),e.d(n,"store",function(){return P});var F=function(t){function n(t){var e,i;return function(t,e){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this),this,(e=!(i=A(n).call(this,t))||"object"!==j(i)&&"function"!=typeof i?x(this):i).state={isMobile:t.isMobile,breakpoint:t.breakpoint,notifications:[]},e.add=e.add.bind(x(e)),e.remove=e.remove.bind(x(e)),e.toggleRemoval=e.toggleRemoval.bind(x(e)),e.handleResize=e.handleResize.bind(x(e)),e}var e,i;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&I(t,n)}(n,o.a.Component),e=n,(i=[{key:"componentDidMount",value:function(){var t=this.props.types;P.register({addNotification:this.add,removeNotification:this.remove,types:t}),this.setState({width:window.innerWidth}),window.addEventListener("resize",this.handleResize)}},{key:"handleResize",value:function(){this.setState({width:window.innerWidth})}},{key:"add",value:function(t){return this.setState(function(n){var e=n.notifications;return{notifications:"top"===t.insert?[t].concat(M(e)):[].concat(M(e),[t])}}),t.id}},{key:"remove",value:function(t){this.setState(function(n){return{notifications:n.notifications.map(function(n){return n.id===t&&(n.removed=!0),n})}})}},{key:"toggleRemoval",value:function(t,n){this.setState(function(n){return{notifications:n.notifications.filter(function(n){return n.id!==t})}},n)}},{key:"renderNotifications",value:function(t){var n=this;return t.map(function(e){return o.a.createElement(C,{key:e.id,notification:e,toggleRemoval:n.toggleRemoval,count:t.length,removed:e.removed})})}},{key:"renderMobileNotifications",value:function(){var t,n,e=this.state.notifications,i=(t=[],n=[],e.forEach(function(e){var i=e.container;m(i)?t.push(e):d(i)&&n.push(e)}),{top:t,bottom:n}),r=this.renderNotifications(i.top),a=this.renderNotifications(i.bottom);return o.a.createElement("div",{className:"react-notification-root"},o.a.createElement("div",{className:"notification-container-mobile-top"},r),o.a.createElement("div",{className:"notification-container-mobile-bottom"},a))}},{key:"renderScreenNotifications",value:function(){var t,n,e,i,r,a,c=this.state.notifications,s=(t=[],n=[],e=[],i=[],r=[],a=[],c.forEach(function(o){var c=o.container;c===u.TOP_LEFT?t.push(o):c===u.TOP_RIGHT?n.push(o):c===u.TOP_CENTER?e.push(o):c===u.BOTTOM_LEFT?i.push(o):c===u.BOTTOM_RIGHT?r.push(o):c===u.BOTTOM_CENTER&&a.push(o)}),{topLeft:t,topRight:n,topCenter:e,bottomLeft:i,bottomRight:r,bottomCenter:a}),l=this.renderNotifications(s.topLeft),f=this.renderNotifications(s.topRight),p=this.renderNotifications(s.topCenter),h=this.renderNotifications(s.bottomLeft),d=this.renderNotifications(s.bottomRight),m=this.renderNotifications(s.bottomCenter);return o.a.createElement("div",{className:"react-notification-root"},o.a.createElement("div",{className:"notification-container-top-left"},l),o.a.createElement("div",{className:"notification-container-top-right"},f),o.a.createElement("div",{className:"notification-container-bottom-left"},h),o.a.createElement("div",{className:"notification-container-bottom-right"},d),o.a.createElement("div",{className:"notification-container-top-center"},p),o.a.createElement("div",{className:"notification-container-bottom-center"},m))}},{key:"render",value:function(){var t=this.props.isMobile,n=this.state,e=n.width,i=n.breakpoint;return t&&e<=i?this.renderMobileNotifications():this.renderScreenNotifications()}}])&&L(e.prototype,i),n}();F.propTypes={isMobile:a.a.bool,breakpoint:a.a.number,types:a.a.array},F.defaultProps={isMobile:!0,breakpoint:768}}])}}]);
//# sourceMappingURL=3.fa83460c.chunk.js.map