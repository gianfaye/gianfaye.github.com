(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{DqN3:function(t,e,n){"use strict";var r=n("5Md4"),o=n("ZGJb"),i=n("mXGw"),a=n("InRo"),c=(n("lQyR"),n("YhIr"),n("4aJ6"),n("+jjx"),n("ABKx"),n("GkPX"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("Wbzz")),s=n("sqvr"),u=n.n(s),l=n("zL5+"),p=(n("uDpZ"),n("fIy0")),d=n("hc/v"),f=n("aD51");function g(){var t=w(["\n    display: none;\n  "]);return g=function(){return t},t}function b(){var t=w(["\n    width: 280px;\n  "]);return b=function(){return t},t}function x(){var t=w(["\n    display: block;\n    left: 0;\n  "]);return x=function(){return t},t}function h(){var t=w(["\n    display: none;\n  "]);return h=function(){return t},t}function m(){var t=w(["\n    top: 67px;\n    right: 37px;\n  "]);return m=function(){return t},t}function v(){var t=w(["\n    top: 10px;\n  "]);return v=function(){return t},t}function j(){var t=w(["\n    position: absolute;\n    right: -30px;\n    bottom: 0px;\n    top: 3px;\n    height: 100%;\n  "]);return j=function(){return t},t}function y(){var t=w(["\n    //font-size: 14px;\n    align-items: center;\n\n    &::before {\n      box-shadow: none;\n      bottom: -30px;\n      background: transparent;\n    }\n\n    strong {\n      display: block;\n      font-weight: semi-bold;\n      margin-top: 6px;\n    }\n  "]);return y=function(){return t},t}function w(t,e){return e||(e=t.slice(0)),t.raw=e,t}function O(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var k=function(t){var e=t.topics,n=t.selectedTopic,r=Object(i.useState)(!1),o=r[0],a=r[1],s="dark"===Object(l.e)()[0]?"#fff":"#000",d=Object.keys(n).length,g={id:0,name:"all topics I write about",avatar:"",bio:"",slug:"/blog",topicsPage:!0,featured:!1,color:""},b=[g].concat(O(e));return Object(f.jsx)(z,{onClick:function(){return a(!o)},isOpen:o},Object(f.jsx)(A,null),Object(f.jsx)(L,null,d?n.name:g.name),Object(f.jsx)(_,null,Object(f.jsx)(p.a.ToggleOpen,{fill:s})),o&&Object(f.jsx)(u.a,{onOutsideClick:function(){return a(!o)}},Object(f.jsx)(S,null,Object(f.jsx)(P,null,Object(f.jsx)(p.a.ToggleClose,{fill:s})),b.map((function(t,e){return Object(f.jsx)(G,{key:t.name},Object(f.jsx)(D,{as:t.topicsPage?c.Link:"div",to:t.slug},Object(f.jsx)(T,null,t.name)))})))))},z=Object(r.a)("div",{target:"enag0es0"})("position:relative;display:inline-block;align-items:center;color:",(function(t){return t.theme.colors.grey}),';letter-spacing:1px;cursor:pointer;vertical-align:middle;&::before{content:"";position:absolute;left:-20px;right:-20px;top:-16px;bottom:-16px;background:',(function(t){return t.theme.colors.card}),";box-shadow:",(function(t){return t.isOpen?"none":" 0px 0px 15px rgba(0, 0, 0, 0.1)"}),";border-radius:5px;z-index:0;transition:opacity 0.3s;cursor:pointer;opacity:0;}&:hover::before{opacity:1;}",d.a.phablet(y())),L=(Object(r.a)("div",{target:"enag0es1"})("position:relative;display:flex;height:304px;cursor:pointer;flex-direction:column;justify-content:flex-end;align-items:center;border-radius:7px;padding:24px 0;background-color:#",(function(t){return t.color}),";background-repeat:no-repeat;background-size:100%;border:1px solid rgba(29,29,29,.1);overflow:hidden;"),Object(r.a)("div",{target:"enag0es2"})("display:block;position:relative;height:100%;width:100%;&[data-a11y='true']:focus::after{content:'';position:absolute;left:-5px;top:-5px;width:50px;height:50px;border:2px solid ",(function(t){return t.theme.colors.accent}),";}"),Object(r.a)("div",{target:"enag0es5"})({name:"8lgfcg",styles:"height:100%;overflow:hidden;"}),Object(r.a)("p",{target:"enag0es6"})("max-width:430px;font-size:16px;margin-bottom:20px;text-transform:uppercase;text-align:left;padding:0 60px 0 30px;font-weight:bold;display:block;line-height:1.45;font-family:",(function(t){return t.theme.fonts.sansSerif}),";a{text-decoration:underline;}"),Object(r.a)("strong",{target:"enag0es7"})("position:relative;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer;color:",(function(t){return t.theme.colors.primary}),";border-bottom:5px solid;font-weight:400;display:inline-block;margin-top:4px;vertical-align:middle;")),_=Object(r.a)("div",{target:"enag0es8"})("position:relative;cursor:pointer;margin-left:10px;display:inline-block;svg{width:30px;height:30px;}",d.a.phablet(j())),P=Object(r.a)("div",{target:"enag0es9"})("position:absolute;cursor:pointer;top:-10px;right:21px;",d.a.desktop(v())," ",d.a.phablet(m())," svg{width:30px;height:30px;}"),A=Object(r.a)("div",{target:"enag0es10"})("position:relative;width:auto;min-width:300px;",d.a.phablet(h())),S=Object(r.a)("ul",{target:"enag0es11"})("position:absolute;z-index:2;left:-21px;right:-21px;top:105px;padding:50px;background:",(function(t){return t.theme.colors.card}),";box-shadow:0px 0px 15px rgba(0,0,0,0.1);border-radius:5px;cursor:pointer;list-style:none;transform:translateY(-2px);max-height:500px;overflow-y:scroll;display:grid;width:100%;grid-gap:16px;grid-template-columns:repeat(auto-fill,minmax(150px,300px));",d.a.desktop(x())," ",d.a.phablet(b())),G=Object(r.a)("li",{target:"enag0es12"})({name:"l6s11q",styles:"a{width:100%;}&:not(:last-child){margin-bottom:10px;}"}),D=(Object(r.a)("div",{target:"enag0es13"})("height:25px;width:25px;border-radius:50%;margin-right:15px;background:",(function(t){return t.theme.colors.grey}),";overflow:hidden;pointer-events:none;.gatsby-image-wrapper > div{padding-bottom:100% !important;overflow:hidden;}"),Object(r.a)("div",{target:"enag0es14"})("position:absolute;height:25px;width:25px;border-radius:50%;z-index:1;background:",(function(t){return t.theme.colors.grey}),";box-shadow:0 0 0 2px ",(function(t){return t.theme.colors.background}),";transition:box-shadow 0.25s ease;overflow:hidden;pointer-events:none;.gatsby-image-wrapper > div{padding-bottom:100% !important;overflow:hidden;}",d.a.phablet(g())),Object(r.a)("div",{target:"enag0es15"})("display:flex;align-items:center;color:inherit;margin-left:10px;letter-spacing:1px;strong{transition:",(function(t){return t.theme.colorModeTransition}),";}&:hover strong{color:",(function(t){return t.theme.colors.primary}),";}")),T=Object(r.a)("strong",{target:"enag0es16"})("position:relative;cursor:pointer;color:",(function(t){return t.theme.colors.secondary}),";font-weight:400;font-size:16px;font-family:",(function(t){return t.theme.fonts.sansSerif}),";color:",(function(t){return t.theme.colors.primary}),";text-transform:uppercase;letter-spacing:1px;padding-bottom:3px;&:hover{padding-bottom:1px;border-bottom:1px solid ",(function(t){return t.theme.colors.primary}),";}"),C=n("asYo");function R(){var t=K(["\n    margin-right: 8px;\n    display: block;\n  "]);return R=function(){return t},t}function F(){var t=K(["\n    font-size: 24px;\n  "]);return F=function(){return t},t}function I(){var t=K(["\n    font-size: 38px\n  "]);return I=function(){return t},t}function N(){var t=K(["\n    margin: 60px 0 80px 0;\n  "]);return N=function(){return t},t}function q(){var t=K(["\n    width: 100%;\n  "]);return q=function(){return t},t}function M(){var t=K(["\n    width: 80%;\n  "]);return M=function(){return t},t}function W(){var t=K(["\n    display: none;\n  "]);return W=function(){return t},t}function J(){var t=K(["\n    display: none;\n  "]);return J=function(){return t},t}function Y(){var t=K(["\n    margin-bottom: 60px;\n  "]);return Y=function(){return t},t}function E(){var t=K(["\n    margin-bottom: 80px;\n  "]);return E=function(){return t},t}function K(t,e){return e||(e=t.slice(0)),t.raw=e,t}e.a=function(t){var e=t.topics,n=t.topic,r=Object(i.useContext)(C.a);r.gridLayout,r.hasSetGridLayout,r.setGridLayout,o.data.site.edges[0].node.siteMetadata.hero;return Object(f.jsx)(a.a,{relative:!0,id:"Articles__Hero"},Object(f.jsx)(Q,null,Object(f.jsx)(X,null,Object(f.jsx)(H,null,"Explore"),Object(f.jsx)(k,{topics:e,selectedTopic:n}))))},Object(r.a)("div",{target:"elssxec0"})("padding:20px 0;",d.a.desktop(E()),";",d.a.tablet(Y()),";",d.a.phablet(J()),";"),Object(r.a)("div",{target:"elssxec1"})("display:flex;align-items:center;width:110px;margin:0 auto;",d.a.tablet(W()),";");var Q=Object(r.a)("div",{target:"elssxec2"})("margin:80px 0 90px 0;display:inline-block;",d.a.desktop(M())," ",d.a.tablet(q())," ",d.a.phablet(N())),X=Object(r.a)("h1",{target:"elssxec3"})("font-style:normal;font-weight:400;font-size:80px;line-height:1.15;color:",(function(t){return t.theme.colors.primary}),";vertical-align:middle;display:table-cell;a{color:",(function(t){return t.theme.colors.accent}),";}",d.a.desktop(I())," ",d.a.phablet(F())),H=Object(r.a)("span",{target:"elssxec4"})("vertical-align:middle;margin-right:15px;",d.a.phablet(R()));Object(r.a)("button",{target:"elssxec5"})("position:relative;display:flex;align-items:center;justify-content:center;height:36px;width:36px;border-radius:50%;background:transparent;transition:background 0.25s;&:not(:last-child){margin-right:30px;}&:hover{background:",(function(t){return t.theme.colors.hover}),";}&[data-a11y='true']:focus::after{content:'';position:absolute;left:-10%;top:-10%;width:120%;height:120%;border:2px solid ",(function(t){return t.theme.colors.accent}),";background:rgba(255,255,255,0.01);border-radius:50%;}svg{opacity:",(function(t){return t.active?1:.25}),";transition:opacity 0.2s;path{fill:",(function(t){return t.theme.colors.primary}),";}}")},"H2m/":function(t,e,n){"use strict";n("YhIr"),n("4aJ6"),n("+jjx"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("lQyR"),n("m1Dn");var r=n("5Md4"),o=n("mXGw"),i=n.n(o),a=n("aD51"),c=n("Wbzz"),s=n("tj/o"),u=n("hc/v"),l=n("5vDk");function p(){var t=g(["\n    justify-content: flex-start;\n    "," { display: none; }\n  "]);return p=function(){return t},t}function d(){var t=g(["\n    .Paginator__pageLink, "," { display: none; }\n    left: -15px;\n  "]);return d=function(){return t},t}function f(){var t=g(["\n    display: block;\n    width: auto;\n    height: auto;\n    padding: 2rem;\n\n    &:first-of-type {\n      padding-left: 0;\n    }\n\n    &:last-child {\n      padding-right: 0;\n    }\n  "]);return f=function(){return t},t}function g(t,e){return e||(e=t.slice(0)),t.raw=e,t}function b(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var h=function(t){var e,n,r,o,c;function u(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).maxPages=3,e.count=e.props.pageCount,e.current=e.props.index,e.pageRoot=e.props.pathPrefix,e.getFullPath=function(t){return"/"===e.pageRoot?1===t?e.pageRoot:e.pageRoot+"page/"+t:1===t?e.pageRoot:e.pageRoot+"/page/"+t},e}return n=t,(e=u).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,u.prototype.render=function(){var t=this.count,e=this.current;if(t<=1)return null;var n=this.previousPath,r=this.nextPath,o=this.current<this.count,c=this.current>1;return Object(a.jsx)(i.a.Fragment,null,Object(a.jsx)(s.Helmet,null,c&&Object(a.jsx)("link",{rel:"prev",href:n}),o&&Object(a.jsx)("link",{rel:"next",href:r})),Object(a.jsx)(O,null,c&&Object(a.jsx)(v,{to:n},"Prev"),this.getPageLinks,Object(a.jsx)(w,{"aria-hidden":"true"},Object(a.jsx)("em",null,e)," of ",t),o&&Object(a.jsx)(v,{to:r},"Next")))},r=u,(o=[{key:"nextPath",get:function(){return this.getFullPath(this.current+1)}},{key:"previousPath",get:function(){return this.getFullPath(this.current-1)}},{key:"getPageLinks",get:function(){var t=this,e=this.current,n=this.count,r=this.maxPages,o=1===e?e:e-1,i=Object(l.i)(o,n+1-o),c=i.slice(0,r);return i[0]>2&&c.unshift(null),i[0]>1&&c.unshift(1),i[0]+1===n&&i[0]-1>0&&c.splice(i.length-1-r,0,i[0]-1),i[0]+r<n&&c.push(null),i[0]+r-1<n&&c.push(n),b(new Set(c)).map((function(n,r){return null===n?Object(a.jsx)(y,{key:"PaginatorPage_spacer_"+r,"aria-hidden":!0}):Object(a.jsx)(j,{key:"PaginatorPage_"+n,to:t.getFullPath(n),style:{opacity:e===n?1:.3},className:"Paginator__pageLink"},n)}))}}])&&x(r.prototype,o),c&&x(r,c),u}(o.Component);e.a=h;var m=function(t){return Object(a.css)("line-height:1;color:",t.theme.colors.primary,";padding:0;width:6.8rem;height:6.8rem;display:flex;align-items:center;justify-content:center;font-variant-numeric:tabular-nums;",u.a.desktop_up(f()))},v=Object(r.a)(c.Link,{target:"eg7ly4r0"})("font-weight:600;font-size:16px;text-decoration:none;font-family:",(function(t){return t.theme.fonts.sansSerif}),";text-transform:uppercase;letter-spacing:3px;color:",(function(t){return t.theme.colors.primary}),";",m," &:hover,&:focus{opacity:1;text-decoration:underline;}"),j=Object(r.a)(c.Link,{target:"eg7ly4r1"})("font-weight:400;font-size:18px;text-decoration:none;color:",(function(t){return t.theme.colors.primary}),";",m," &:hover,&:focus{opacity:1;text-decoration:underline;}"),y=Object(r.a)("span",{target:"eg7ly4r2"})("opacity:0.3;",m,' &::before{content:"...";}'),w=Object(r.a)("span",{target:"eg7ly4r3"})("font-weight:400;",m," color:",(function(t){return t.theme.colors.primary}),";em{font-style:normal;color:",(function(t){return t.theme.colors.primary}),";}"),O=Object(r.a)("nav",{target:"eg7ly4r4"})("position:relative;z-index:1;display:inline-flex;justify-content:space-between;align-items:center;",u.a.tablet(d(),y)," ",u.a.desktop_up(p(),w))},ZGJb:function(t){t.exports=JSON.parse('{"data":{"site":{"edges":[{"node":{"siteMetadata":{"hero":{"heading":"Geek of all trades","maxWidth":652}}}}]}}}')},sl8y:function(t,e,n){"use strict";n.r(e);var r=n("5Md4"),o=(n("mXGw"),n("InRo")),i=n("LIWp"),a=n("FxrG"),c=n("H2m/"),s=n("DqN3"),u=n("vffs"),l=n("aD51");e.default=function(t){var e=t.location,n=t.pageContext,r=n.group,d=n.additionalContext.topics;return Object(l.jsx)(a.a,null,Object(l.jsx)(i.a,{pathname:e.pathname}),Object(l.jsx)(s.a,{topics:d,topic:{}}),Object(l.jsx)(o.a,{narrow:!0},Object(l.jsx)(u.a,{articles:r}),Object(l.jsx)(p,{show:n.pageCount>1},Object(l.jsx)(c.a,n))))};Object(r.a)("div",{target:"eg8jssz0"})("position:absolute;bottom:0;left:0;width:100%;height:590px;z-index:0;pointer-events:none;background:",(function(t){return t.theme.colors.gradient}),";transition:",(function(t){return t.theme.colorModeTransition}),";");var p=Object(r.a)("div",{target:"eg8jssz1"})((function(t){return t.show&&"margin-top: 95px;"})," text-align:center;")},vffs:function(t,e,n){"use strict";n("W1QL"),n("K/PF"),n("t91x"),n("75LO");var r=n("5Md4"),o=n("mXGw"),i=n("aD51"),a=n("Wbzz"),c=n("AtSE"),s=n("uDpZ"),u=n("hc/v"),l=n("asYo");function p(){var t=G(["\n    &:hover "," {\n      transform: none;\n      //box-shadow: initial;\n    }\n\n    &:active {\n      transform: scale(0.97) translateY(3px);\n    }\n  "]);return p=function(){return t},t}function d(){var t=G(["\n    max-width: 100%;\n    padding: 0;\n  "]);return d=function(){return t},t}function f(){var t=G(["\n    max-width: 100%;\n    padding: 0;\n  "]);return f=function(){return t},t}function g(){var t=G(["\n    margin: 0 auto;\n    width: 100%;\n  "]);return g=function(){return t},t}function b(){var t=G(["\n    max-width: 100%;\n    padding:  0 20px;\n    margin-bottom: 20px;\n    -webkit-line-clamp: 3;\n  "]);return b=function(){return t},t}function x(){var t=G(["\n    margin-bottom; 15px;\n  "]);return x=function(){return t},t}function h(){var t=G(["\n    display: -webkit-box;\n  "]);return h=function(){return t},t}function m(){var t=G(["\n    font-size: 22px;\n    padding: 0;\n    margin-bottom: 10px;\n    -webkit-line-clamp: 3;\n  "]);return m=function(){return t},t}function v(){var t=G(["\n    font-size: 24px;\n  "]);return v=function(){return t},t}function j(){var t=G(["\n    margin-bottom: 15px;\n  "]);return j=function(){return t},t}function y(){var t=G(["\n    overflow: hidden;\n    margin-bottom: 0;\n    box-shadow: none;\n    //border-top-right-radius: 5px;\n    //border-top-left-radius: 5px;\n  "]);return y=function(){return t},t}function w(){var t=G(["\n    height: 200px;\n    //margin-bottom: 35px;\n  "]);return w=function(){return t},t}function O(){var t=G(["\n    margin-bottom: 40px;\n    //box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n  "]);return O=function(){return t},t}function k(){var t=G(["\n    margin-bottom: 60px;\n  "]);return k=function(){return t},t}function z(){var t=G(["\n    //box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n    margin-bottom: 30px;\n  "]);return z=function(){return t},t}function L(){var t=G(["\n    grid-template-columns: 1fr;\n  "]);return L=function(){return t},t}function _(){var t=G(["\n    grid-column-gap: 24px;\n    grid-template-columns: 1fr 380px;\n  "]);return _=function(){return t},t}function P(){var t=G(["\n    grid-template-columns: 1fr;\n\n    &:not(:last-child) {\n      margin-bottom: 0;\n    }\n  "]);return P=function(){return t},t}function A(){var t=G(["\n    grid-template-columns: 1fr 1fr;\n  "]);return A=function(){return t},t}function S(){var t=G(["\n    -webkit-line-clamp: 3;\n  "]);return S=function(){return t},t}function G(t,e){return e||(e=t.slice(0)),t.raw=e,t}e.a=function(t){var e=t.articles,n=t.alwaysShowAllDetails;if(!e)return null;var r=1===e.length,a=Object(o.useContext)(l.a),c=a.gridLayout,s=void 0===c?"tiles":c,u=a.hasSetGridLayout,p=a.getGridLayout,d=e.reduce((function(t,e,n,r){return n%2==0&&t.push(r.slice(n,n+2)),t}),[]);return Object(o.useEffect)((function(){return p()}),[]),Object(i.jsx)(R,{style:{opacity:u?1:0},alwaysShowAllDetails:n},d.map((function(t,e){var n=e%2!=0,o=e%2!=1;return Object(i.jsx)(M,{key:e,gridLayout:s,hasOnlyOneArticle:r,reverse:n},Object(i.jsx)(D,{article:t[0],narrow:n}),Object(i.jsx)(D,{article:t[1],narrow:o}))})))};var D=function(t){var e=t.article,n=t.narrow;if(!e)return null;var r=n&&e.title.length>35,o=n?e.hero.narrow:e.hero.regular,a=o&&0!==Object.keys(o).length&&o.constructor===Object;return Object(i.jsx)(X,{to:e.slug,"data-a11y":"false"},Object(i.jsx)(W,{gridLayout:"tiles"},Object(i.jsx)(J,{narrow:n,gridLayout:"tiles"},a?Object(i.jsx)(s.c,{src:o}):Object(i.jsx)(s.a,null)),Object(i.jsx)(E,{gridLayout:"tiles"},Object(i.jsx)(Q,{gridLayout:"tiles"},Object(i.jsx)("span",{className:"Article__Categories"},e.categories),Object(i.jsx)("span",{className:"Article__Topics"},e.topic)),Object(i.jsx)(Y,{dark:!0,hasOverflow:r,gridLayout:"tiles"},e.title),Object(i.jsx)(K,{gridLayout:"tiles"},Object(i.jsx)("span",{className:"Article__Date"},e.date)," •  ",Object(i.jsx)("span",{className:"Article__TimeToRead"},e.timeToRead," min read")))))},T=Object(i.css)("text-overflow:ellipsis;overflow-wrap:normal;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:inline;white-space:normal;overflow:hidden;margin-bottom:25px;",u.a.phablet(S())),C={name:"1fq9f5n",styles:"p{display:-webkit-box;}h2{margin-bottom:10px;}"},R=Object(r.a)("div",{target:"e18pxvx0"})("transition:opacity 0.25s;",(function(t){return t.alwaysShowAllDetails&&C})),F=function(t){return Object(i.css)("position:relative;display:grid;grid-template-columns:",t.reverse?"457px 1fr":"1fr 457px",";grid-template-rows:2;column-gap:30px;&:not(:last-child){margin-bottom:35px;}",u.a.desktop_medium(A())," ",u.a.tablet(P()))},I=function(t){return Object(i.css)("display:grid;grid-template-rows:1fr;grid-template-columns:1fr 570px;grid-column-gap:0;grid-template-rows:1;align-items:center;position:relative;margin-bottom:50px;",u.a.desktop(_())," ",u.a.tablet(L())," @media (max-width:540px){background:",t.theme.colors.card,";}",u.a.phablet(z()))},N=function(t){return Object(i.css)("position:relative;",u.a.tablet(k())," @media (max-width:540px){background:",t.theme.colors.card,";}",u.a.phablet(O()))},q=function(t){return Object(i.css)("display:grid;grid-template-rows:",t.hasOnlyOneArticle?"1fr":"1fr 1fr",";")},M=Object(r.a)("div",{target:"e18pxvx1"})((function(t){return"tiles"===t.gridLayout?F:q})),W=Object(r.a)("div",{target:"e18pxvx2"})((function(t){return"rows"===t.gridLayout?I:N})),J=Object(r.a)("div",{target:"e18pxvx3"})("position:relative;height:",(function(t){return"tiles"===t.gridLayout?"280px":"220px"}),";0 18px 36px -18px rgba(0,0,0,",(function(t){return t.narrow?.25:.33}),");overflow:hidden;z-index:300;display:block;& > div{height:100%;transition:transform 0.3s var(--ease-out-quad),scale 0.3s var(--ease-out-quad);}",u.a.tablet(w())," ",u.a.phablet(y())),Y=Object(r.a)(c.a.h2,{target:"e18pxvx4"})("font-size:32px;font-weight:400;font-family:",(function(t){return t.theme.fonts.serif}),";margin-bottom:",(function(t){return t.hasOverflow&&"tiles"===t.gridLayout?"25px":"10px"}),";",T,";background-size:0 100%;background-repeat:no-repeat;text-decoration:none;-webkit-transition:background-size .8s ease;transition:background-size .8s ease;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(99%,transparent),color-stop(1%,",(function(t){return t.theme.colors.primary}),"));background-image:linear-gradient(180deg,transparent 99%,",(function(t){return t.theme.colors.primary})," 0);",u.a.desktop(j())," ",u.a.tablet(v())," ",u.a.phablet(m())),E=(Object(r.a)("p",{target:"e18pxvx5"})(T,";display:block;font-style:italic;font-size:18px;line-height:32px;font-family:",(function(t){return t.theme.fonts.serif}),";margin-bottom:15px;color:",(function(t){return t.theme.colors.grey}),";display:",(function(t){return t.hasOverflow&&"tiles"===t.gridLayout?"none":"box"}),";max-width:",(function(t){return t.narrow?"415px":"515px"}),";",u.a.desktop(h())," ",u.a.phablet(x())," ",u.a.phablet(b())),Object(r.a)("div",{target:"e18pxvx6"})("padding:30px;background:",(function(t){return t.theme.colors.card}),";z-index:600;display:block;position:relative;",u.a.tablet(g()))),K=Object(r.a)("div",{target:"e18pxvx7"})("font-weight:400;font-size:16px;color:",(function(t){return t.theme.colors.lightGrey}),";margin-top:",(function(t){return"tiles"===t.gridLayout?"20px":"10px"}),";;",u.a.phablet(f())),Q=Object(r.a)("div",{target:"e18pxvx8"})("font-weight:600;font-size:12px;font-family:",(function(t){return t.theme.fonts.sansSerif}),";color:",(function(t){return t.theme.colors.primary}),";text-transform:uppercase;opacity:0.8;letter-spacing:2px;margin-bottom:",(function(t){return"tiles"===t.gridLayout?"20px":"10px"}),";text-overflow:ellipsis;overflow-wrap:normal;-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;white-space:normal;overflow:hidden;.Article__Categories{margin-right:5px;color:",(function(t){return t.theme.colors.lightGrey}),";margin-left:1px;}.Article__Topics{}",u.a.phablet(d())),X=Object(r.a)(a.Link,{target:"e18pxvx9"})("position:relative;display:block;width:100%;height:100%;top:0;left:0;z-index:1;transition:transform 0.33s var(--ease-out-quart);-webkit-tap-highlight-color:rgba(255,255,255,0);&:hover ",J," > div,&:focus ",J," > div{0 30px 50px -30px rgba(0,0,0,0.3);transform:scale(1.1);}&:hover h2,&:focus h2{background-size:100% 100%;cursor:pointer;}&[data-a11y='true']:focus::after{content:'';position:absolute;left:-1.5%;top:-2%;width:103%;height:104%;border:3px solid ",(function(t){return t.theme.colors.accent}),";background:rgba(255,255,255,0.01);}",u.a.phablet(p(),J))}}]);
//# sourceMappingURL=component---gianfaye-gatsby-theme-src-templates-articles-template-tsx-2f74c21ce05476dbcb58.js.map