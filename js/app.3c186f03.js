(function(e){function t(t){for(var r,l,u=t[0],c=t[1],i=t[2],b=0,v=[];b<u.length;b++)l=u[b],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&v.push(n[l][0]),n[l]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);s&&s(t);while(v.length)v.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,l=1;l<a.length;l++){var c=a[l];0!==n[c]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=a[0]))}return e}var r={},n={app:0},o=[];function l(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"90b284f2"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=l(e);var i=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(b);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,a[1](i)}n[e]=void 0}};var b=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,a){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(a,r,function(t){return e[t]}.bind(null,r));return a},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/covid19-timeline/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var b=0;b<c.length;b++)t(c[b]);var s=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23");function n(e,t,a,n,o,l){var u=Object(r["v"])("Menu"),c=Object(r["v"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])(u),Object(r["g"])(c)],64)}var o={id:"nav"},l={class:"navbar navbar-expand-lg navbar-light bg-light"},u=Object(r["g"])("a",{class:"navbar-brand",href:"#"},"Phetchaburi Covid19 Timeline",-1),c=Object(r["g"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["g"])("span",{class:"navbar-toggler-icon"})],-1),i={class:"collapse navbar-collapse",id:"navbarSupportedContent"},b={class:"navbar-nav mr-auto"},s={class:"nav-item"},v=Object(r["f"])("Home"),d={class:"nav-item"},p=Object(r["f"])("About");function g(e,t,a,n,g,f){var h=Object(r["v"])("router-link");return Object(r["p"])(),Object(r["d"])("div",o,[Object(r["g"])("nav",l,[u,c,Object(r["g"])("div",i,[Object(r["g"])("ul",b,[Object(r["g"])("li",s,[Object(r["g"])(h,{to:"/",class:"nav-link",replace:""},{default:Object(r["A"])((function(){return[v]})),_:1})]),Object(r["g"])("li",d,[Object(r["g"])(h,{to:"/about",class:"nav-link",replace:""},{default:Object(r["A"])((function(){return[p]})),_:1})])])])])])}var f={name:"Menu"};f.render=g;var h=f,j={name:"App",components:{Menu:h}};a("72e1");j.render=n;var m=j,O=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),k=a("cf05"),y=a.n(k),_={class:"home"},w=Object(r["g"])("img",{alt:"Vue logo",src:y.a},null,-1);function x(e,t,a,n,o,l){var u=Object(r["v"])("HelloWorld");return Object(r["p"])(),Object(r["d"])("div",_,[w,Object(r["g"])(u,{msg:"Welcome to Your Vue.js App"})])}var C=Object(r["B"])("data-v-b9167eee");Object(r["s"])("data-v-b9167eee");var P={class:"hello"},S=Object(r["e"])('<p data-v-b9167eee> For a guide and recipes on how to configure / customize this project,<br data-v-b9167eee> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-cli documentation</a>. </p><h3 data-v-b9167eee>Installed CLI Plugins</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-b9167eee>babel</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-b9167eee>eslint</a></li></ul><h3 data-v-b9167eee>Essential Links</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Core Docs</a></li><li data-v-b9167eee><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Forum</a></li><li data-v-b9167eee><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Community Chat</a></li><li data-v-b9167eee><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-b9167eee>Twitter</a></li><li data-v-b9167eee><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>News</a></li></ul><h3 data-v-b9167eee>Ecosystem</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-router</a></li><li data-v-b9167eee><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vuex</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-b9167eee>vue-devtools</a></li><li data-v-b9167eee><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-loader</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-b9167eee>awesome-vue</a></li></ul>',7);Object(r["q"])();var A=C((function(e,t,a,n,o,l){return Object(r["p"])(),Object(r["d"])("div",P,[Object(r["g"])("h1",null,Object(r["x"])(a.msg),1),S])})),M={name:"HelloWorld",props:{msg:String}};a("8497");M.render=A,M.__scopeId="data-v-b9167eee";var T=M,H={name:"Home",components:{HelloWorld:T}};H.render=x;var E=H,L=[{path:"/",name:"Home",component:E},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],W=Object(O["a"])({linkActiveClass:"active",history:Object(O["b"])("/covid19-timeline/"),routes:L}),I=W;a("4989"),a("ab8b");Object(r["c"])(m).use(I).mount("#app")},"72e1":function(e,t,a){"use strict";a("a848")},8497:function(e,t,a){"use strict";a("c45a")},a848:function(e,t,a){},c45a:function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.3c186f03.js.map