(function(e){function t(t){for(var n,c,s=t[0],i=t[1],u=t[2],l=0,b=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function c(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b2484f48"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=c(e);var u=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,r[1](u)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/covid19-timeline/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"2a71":function(e,t,r){"use strict";r("4924")},4924:function(e,t,r){},"49f8":function(e,t,r){var n={"./en.json":"edd4","./th.json":"8680"};function a(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="49f8"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function a(e,t,r,a,o,c){var s=Object(n["v"])("Menu"),i=Object(n["v"])("router-view");return Object(n["r"])(),Object(n["e"])(n["a"],null,[Object(n["g"])(s),Object(n["g"])(i)],64)}var o={id:"nav"},c={class:"navbar fixed-top navbar-expand-lg navbar-dark bg-primary"},s=Object(n["g"])("a",{class:"navbar-brand",href:"#"},"Phetchaburi Covid19 Timeline",-1),i=Object(n["g"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["g"])("span",{class:"navbar-toggler-icon"})],-1),u={class:"collapse navbar-collapse",id:"navbarSupportedContent"},l={class:"navbar-nav mr-auto"},d={class:"nav-item"},b=Object(n["f"])("Home"),v={class:"nav-item"},f=Object(n["f"])("About");function p(e,t,r,a,p,j){var O=Object(n["v"])("router-link");return Object(n["r"])(),Object(n["e"])("div",o,[Object(n["g"])("nav",c,[s,i,Object(n["g"])("div",u,[Object(n["g"])("ul",l,[Object(n["g"])("li",d,[Object(n["g"])(O,{to:"/",class:"nav-link",replace:""},{default:Object(n["A"])((function(){return[b]})),_:1})]),Object(n["g"])("li",v,[Object(n["g"])(O,{to:"/about",class:"nav-link",replace:""},{default:Object(n["A"])((function(){return[f]})),_:1})])])])])])}var j={name:"Menu"};j.render=p;var O=j,g={name:"App",components:{Menu:O}};r("2a71");g.render=a;var m=g,h=(r("d3b7"),r("3ca3"),r("ddb0"),r("6c02")),y={class:"home"};function _(e,t,r,a,o,c){var s=Object(n["v"])("Dashboard");return Object(n["r"])(),Object(n["e"])("div",y,[Object(n["g"])(s,{msg:"Welcome to Your Vue.js App"})])}var w={class:"dashboard"},x={class:"container"},k={class:"row"},S={class:"col-md-12 col-sm-12"},P={class:"row justify-content-center"},A={class:"col-md-4 col-sm-4"},C={class:"card text-white bg-success"},M={class:"card-header"},T={class:"card-body"},E={class:"card-text"},D={class:"col-md-4 col-sm-4"},L={class:"card text-white bg-success"},z={class:"card-header"},H=Object(n["g"])("div",{class:"card-body"},[Object(n["g"])("p",{class:"card-text"}," Some quick example text to build on the card title and make up the bulk of the card's content. ")],-1);function q(e,t,r,a,o,c){return Object(n["r"])(),Object(n["e"])("div",w,[Object(n["g"])("div",x,[Object(n["g"])("div",k,[Object(n["g"])("div",S,[Object(n["g"])("div",P,[Object(n["g"])("div",A,[Object(n["g"])("div",C,[Object(n["g"])("div",M,Object(n["x"])(a.t("dashboard.today_is_cured")),1),Object(n["g"])("div",T,[Object(n["g"])("p",E,Object(n["x"])(a.t("dashboard.today_is_cured")),1)])])]),Object(n["g"])("div",D,[Object(n["g"])("div",L,[Object(n["g"])("div",z,Object(n["x"])(a.t("dashboard.total_is_cured")),1),H])])])])])])])}var J=r("47e2"),N={name:"Dashboard",setup:function(){var e=Object(J["b"])({inheritLocale:!0,useScope:"local"}),t=e.t;return{t:t}},props:{msg:String}};N.render=q;var U=N,F={name:"Home",components:{Dashboard:U}};F.render=_;var V=F,W=[{path:"/",name:"Home",component:V},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],Y=Object(h["a"])({linkActiveClass:"active",history:Object(h["b"])("/covid19-timeline/"),routes:W}),Z=Y;r("159b"),r("ac1f"),r("466d");function B(){var e=r("49f8"),t={};return e.keys().forEach((function(r){var n=r.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){var a=n[1];t[a]=e(r).default}})),t}var G=Object(J["a"])({legacy:!1,locale:"th",fallbackLocale:"th",messages:B()});r("4989"),r("ab8b");Object(n["d"])(m).use(G).use(Z).mount("#app")},8680:function(e,t,r){"use strict";r.r(t),t["default"]={dashboard:{today_is_cured:e=>{const{normalize:t}=e;return t(["รักษาหายวันนี้"])},total_is_cured:e=>{const{normalize:t}=e;return t(["รวมรักษาหาย"])}}}},edd4:function(e,t,r){"use strict";r.r(t),t["default"]={hello:e=>{const{normalize:t}=e;return t(["hello i18n !!"])}}}});
//# sourceMappingURL=app.2dd96d92.js.map