(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"5EGp":function(e,t,r){"use strict";var n=r("63Ad");t.__esModule=!0,t.default=void 0;var i,a=n(r("T1e2")),o=n(r("QKC2")),s=n(r("PE9J")),l=n(r("8VmE")),c=n(r("mXGw")),d=n(r("W0B4")),u=function(e){var t=(0,l.default)({},e),r=t.resolutions,n=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=j([].concat(t.fluid))),t.fixed&&(t.fixed=j([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,r=e.fixed,n=p(t||r||[]);return n&&n.src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},m=Object.create({}),h=function(e){var t=u(e),r=g(t);return m[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,O=new WeakMap;function w(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,i=e.media,a=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:n,sizes:a}),r&&c.default.createElement("source",{media:i,srcSet:r,sizes:a}))}))}function j(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function E(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function S(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function L(e,t){var r=e.srcSet,n=e.srcSetWebp,i=e.media,a=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?n:r)+'" '+(a?'sizes="'+a+'" ':"")+"/>"}var x=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(O.has(e.target)){var t=O.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),O.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return r&&(r.observe(e),O.set(e,t)),function(){r.unobserve(e),O.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+c+o+s+r+n+t+a+i+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=c.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,i=e.generateSources,a=e.spreadProps,o=e.ariaHidden,s=c.default.createElement(R,(0,l.default)({ref:t,src:r},a,{ariaHidden:o}));return n.length>1?c.default.createElement("picture",null,i(n),s):s})),R=c.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,i=e.src,a=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,l.default)({"aria-hidden":g,sizes:r,srcSet:n,src:i},p,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))}));R.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var k=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=v&&h(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&y&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||v&&(b||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=c.default.createRef(),r.placeholderRef=t.placeholderRef||c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,a.default)(r)),r.handleRef=r.handleRef.bind((0,a.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=u(e),(r=g(t))&&(m[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=u(this.props),t=e.title,r=e.alt,n=e.className,i=e.style,a=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,g=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,O=e.itemProp,j=e.loading,L=e.draggable,x=m||h;if(!x)return null;var k=!1===this.state.fadeIn||this.state.imgLoaded,T=!0===this.state.fadeIn&&!this.state.imgCached,P=(0,l.default)({opacity:k?1:0,transition:T?"opacity "+v+"ms":"none"},s),I="boolean"==typeof b?"lightgray":b,H={transitionDelay:v+"ms"},D=(0,l.default)({opacity:this.state.imgLoaded?0:1},T&&H,s,f),M={title:t,alt:this.state.isVisible?"":r,style:D,className:g,itemProp:O},V=this.state.isHydrated?p(x):x[0];if(m)return c.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:V.maxWidth?V.maxWidth+"px":null,maxHeight:V.maxHeight?V.maxHeight+"px":null},a),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},c.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),I&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:I,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},T&&H)}),V.base64&&c.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:V.base64,spreadProps:M,imageVariants:x,generateSources:S}),V.tracedSVG&&c.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:V.tracedSVG,spreadProps:M,imageVariants:x,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,w(x),c.default.createElement(R,{alt:r,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:j,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,l.default)({alt:r,title:t,loading:j},V,{imageVariants:x}))}}));if(h){var W=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:V.width,height:V.height},a);return"inherit"===a.display&&delete W.display,c.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(V.srcSet)},I&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:I,width:V.width,opacity:this.state.imgLoaded?0:1,height:V.height},T&&H)}),V.base64&&c.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:V.base64,spreadProps:M,imageVariants:x,generateSources:S}),V.tracedSVG&&c.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:V.tracedSVG,spreadProps:M,imageVariants:x,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,w(x),c.default.createElement(R,{alt:r,title:t,width:V.width,height:V.height,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:j,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,l.default)({alt:r,title:t,loading:j},V,{imageVariants:x}))}}))}return null},t}(c.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),P=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function I(e){return function(t,r,n){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");d.default.checkPropTypes(((i={})[r]=e,i),t,"prop",n)}}k.propTypes={resolutions:T,sizes:P,fixed:I(d.default.oneOfType([T,d.default.arrayOf(T)])),fluid:I(d.default.oneOfType([P,d.default.arrayOf(P)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var H=k;t.default=H},C5Qm:function(e,t){!function(){if("undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof HTMLElement){var e=!1;try{var t=document.createElement("div");t.addEventListener("focus",(function(e){e.preventDefault(),e.stopPropagation()}),!0),t.focus(Object.defineProperty({},"preventScroll",{get:function(){if(navigator&&void 0!==navigator.userAgent&&navigator.userAgent&&navigator.userAgent.match(/Edge\/1[7-8]/))return e=!1;e=!0}}))}catch(n){}if(void 0===HTMLElement.prototype.nativeFocus&&!e){HTMLElement.prototype.nativeFocus=HTMLElement.prototype.focus;var r=function(e){for(var t=0;t<e.length;t++)e[t][0].scrollTop=e[t][1],e[t][0].scrollLeft=e[t][2];e=[]};HTMLElement.prototype.focus=function(e){if(e&&e.preventScroll){var t=function(e){for(var t=e.parentNode,r=[],n=document.scrollingElement||document.documentElement;t&&t!==n;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&r.push([t,t.scrollTop,t.scrollLeft]),t=t.parentNode;return t=n,r.push([t,t.scrollTop,t.scrollLeft]),r}(this);this.nativeFocus(),"function"==typeof setTimeout?setTimeout((function(){r(t)}),0):r(t)}else this.nativeFocus()}}}}()},pAb4:function(e,t,r){},uDpZ:function(e,t,r){"use strict";r.d(t,"c",(function(){return p})),r.d(t,"b",(function(){return R})),r.d(t,"a",(function(){return H}));var n=r("mK0O"),i=r("+I+c"),a=r("5Md4"),o=r("mXGw"),s=r.n(o),l=r("5EGp"),c=r.n(l),d=r("aD51"),u=["src","alt"];function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var g=Object(a.a)(c.a,{target:"e3ulxom0"})({name:"133qvua",styles:"& > img{filter:blur(8px);}"}),p=function(e){var t=e.src,r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({alt:e.alt},Object(i.a)(e,u));if(!t)return null;var a="string"!=typeof t;r[(a&&t.width&&t.height?"fixed":a&&"fluid")||"src"]=t;var o=t.tracedSVG?c.a:g;return a?Object(d.jsx)(o,r):Object(d.jsx)("img",r)},m=(r("C5Qm"),r("xARA"));Object.create;function h(e,t,r){if(r||2===arguments.length)for(var n,i=0,a=t.length;i<a;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}Object.create;var b=function(e){return"".concat(e,"ms")},v=function(e){var t=e.height,r=e.innerHeight,n=e.innerWidth,i=e.isLoaded,a=e.isUnloading,o=e.left,s=e.originalTransform,l=e.top,c=e.transitionDuration,d=e.width,u=e.zoomMargin,f=b(c);if(!i||a){var g=h(["scale(1)","translate(0, 0)"],s?[s]:[],!0).join(" ");return{height:t,left:o,top:l,transform:g,WebkitTransform:g,transitionDuration:f,width:d}}var p=function(e){var t=e.height,r=e.innerHeight,n=e.innerWidth,i=e.width,a=e.zoomMargin,o=n/(i+a),s=r/(t+a);return Math.min(o,s)}({height:t,innerWidth:n,innerHeight:r,width:d,zoomMargin:u}),m=(n/2-(o+d/2))/p,v=(r/2-(l+t/2))/p,y=h(["scale(".concat(p,")"),"translate(".concat(m,"px, ").concat(v,"px)")],s?[s]:[],!0).join(" ");return{height:t,left:o,top:l,transform:y,WebkitTransform:y,transitionDuration:f,width:d}},y={getBoundingClientRect:function(){return{height:0,left:0,top:0,width:0}},style:{transform:null}},O=function(e){var t,r=Object(o.useRef)(e);r.current=e,t=function(){return function(){return r.current()}},Object(o.useEffect)(t,[])},w=function(e,t){void 0===e&&(e=1/0),void 0===t&&(t=1/0);var r="undefined"!=typeof window,n=function(e){var t=Object(o.useRef)(0),r=Object(o.useState)(e),n=r[0],i=r[1],a=Object(o.useCallback)((function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame((function(){i(e)}))}),[]);return O((function(){cancelAnimationFrame(t.current)})),[n,a]}({width:r?window.innerWidth:e,height:r?window.innerHeight:t}),i=n[0],a=n[1];return Object(o.useEffect)((function(){if(r){var e=function(){a({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}}),[r,a]),i};function j(e){var t=Object(o.useRef)();return Object(o.useEffect)((function(){t.current=e})),t.current}var E=Object(o.memo)((function(e){var t=e.children,r=e.closeText,n=void 0===r?"Unzoom Image":r,i=e.isActive,a=e.onLoad,l=e.onUnload,c=e.onZoomChange,d=e.overlayBgColorEnd,u=void 0===d?"rgba(255, 255, 255, 0.95)":d,f=e.overlayBgColorStart,g=void 0===f?"rgba(255, 255, 255, 0)":f,p=e.parentRef,h=e.portalEl,O=void 0===h?document.body:h,E=e.scrollableEl,S=void 0===E?window:E,L=e.transitionDuration,x=void 0===L?300:L,C=e.zoomMargin,z=void 0===C?0:C,R=e.zoomZindex,k=void 0===R?2147483647:R,T=Object(o.useRef)(null),P=Object(o.useState)(0)[1],I=Object(o.useState)(i),H=I[0],D=I[1],M=Object(o.useState)(!1),V=M[0],W=M[1],B=Object(o.useState)(!1),A=B[0],N=B[1],Z=j(H),F=j(i),G=j(V),U=w(),q=U.width,_=U.height,J=Object(o.useCallback)((function(e){e.preventDefault(),c&&c(!1)}),[c]),Q=Object(o.useCallback)((function(e){!H||"Escape"!==e.key&&27!==e.keyCode||(e.stopPropagation(),c&&c(!1))}),[H,c]),K=Object(o.useCallback)((function(){P((function(e){return e+1})),!A&&c&&c(!1)}),[A,c]);Object(o.useEffect)((function(){return document.addEventListener("keydown",Q),function(){document.removeEventListener("keydown",Q)}}),[Q]),Object(o.useEffect)((function(){var e;return null===(e=null==S?void 0:S.addEventListener)||void 0===e||e.call(S,"scroll",K),function(){var e;null===(e=null==S?void 0:S.removeEventListener)||void 0===e||e.call(S,"scroll",K)}}),[K,S]),Object(o.useEffect)((function(){!Z&&H&&(W(!0),T.current&&T.current.focus({preventScroll:!0}))}),[H,Z]),Object(o.useEffect)((function(){F&&!i&&N(!0),!F&&i&&D(!0)}),[i,F]),Object(o.useEffect)((function(){var e;return A&&(e=setTimeout((function(){W(!1),D(!1),N(!1)}),x)),function(){clearTimeout(e)}}),[A,x]),Object(o.useEffect)((function(){!G&&V&&a(),G&&!V&&l()}),[V,a,l,G]);var X=p.current||y,Y=X.getBoundingClientRect(),$=Y.height,ee=Y.left,te=Y.top,re=Y.width,ne=function(e){var t=e.isLoaded,r=e.isUnloading,n=e.overlayBgColorEnd,i=e.overlayBgColorStart,a=e.transitionDuration,o=e.zoomZindex,s={backgroundColor:i,transitionDuration:b(a),zIndex:o};return t&&!r&&(s.backgroundColor=n),s}({isLoaded:V,isUnloading:A,overlayBgColorEnd:u,overlayBgColorStart:g,transitionDuration:x,zoomZindex:k}),ie=v({height:$,isLoaded:V,innerHeight:_,innerWidth:q,isUnloading:A,left:ee,originalTransform:X.style.transform,top:te,transitionDuration:x,width:re,zoomMargin:z});return H?Object(m.createPortal)(s.a.createElement("div",{"aria-label":"Zoomed image","aria-modal":!0,"data-rmiz-overlay":!0,role:"dialog",style:ne},s.a.createElement("div",{"data-rmiz-modal-content":!0,style:ie},t),s.a.createElement("button",{"aria-label":n,"data-rmiz-btn-close":!0,onClick:J,ref:T,type:"button"})),O):null})),S=Object(o.memo)((function(e){var t=e.children,r=e.closeText,n=void 0===r?"Unzoom image":r,i=e.isZoomed,a=e.overlayBgColorEnd,l=void 0===a?"rgba(255, 255, 255, 0.95)":a,c=e.overlayBgColorStart,d=void 0===c?"rgba(255, 255, 255, 0)":c,u=e.portalEl,f=e.onZoomChange,g=e.openText,p=void 0===g?"Zoom image":g,m=e.scrollableEl,h=e.transitionDuration,b=void 0===h?300:h,v=e.wrapElement,y=void 0===v?"div":v,O=e.wrapStyle,w=e.zoomMargin,j=void 0===w?0:w,S=e.zoomZindex,L=void 0===S?2147483647:S,x=Object(o.useState)(!1),C=x[0],z=x[1],R=Object(o.useRef)(null),k=Object(o.useRef)(null),T=Object(o.useCallback)((function(e){!i&&f&&(e.preventDefault(),f(!0))}),[i,f]),P=Object(o.useCallback)((function(){z(!0)}),[]),I=Object(o.useCallback)((function(){z(!1),k.current&&k.current.focus({preventScroll:!0})}),[]),H=C?"hidden":"visible";return s.a.createElement(o.StrictMode,null,s.a.createElement(y,{"data-rmiz-wrap":H,ref:R,style:O},t,s.a.createElement("button",{"aria-label":p,"data-rmiz-btn-open":!0,onClick:T,ref:k,type:"button"}),"undefined"!=typeof window&&s.a.createElement(E,{closeText:n,isActive:i,onLoad:P,onUnload:I,onZoomChange:f,overlayBgColorEnd:l,overlayBgColorStart:d,parentRef:R,portalEl:u,scrollableEl:m,transitionDuration:b,zoomMargin:j,zoomZindex:L},t)))})),L=r("zL5+");r("pAb4");function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z,R=function(e){var t=Object(o.useState)(!1),r=t[0],n=t[1],i=Object(L.f)().theme,a=C(C({},e),{},{className:"Image__Zoom",style:{display:"block",margin:"0 auto",width:"100%",borderRadius:r?"5px":"0px"}}),s=Object(o.useCallback)((function(e){n(e)}),[]);return Object(d.jsx)(S,{isZoomed:r,onZoomChange:s,zoomMargin:40,overlayBgColorEnd:i.colors.background},Object(d.jsx)("img",{className:a.className,src:a.src,alt:a.alt,style:a.style}))},k=r("Fcif"),T=r("Bt0p"),P=r("hc/v"),I=Object(a.a)("div",{target:"edn9xr70"})("display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:#ccc;color:#898989;font-size:32px;font-weight:600;",P.a.phablet(z||(z=Object(T.a)(["\n    font-size: 28px;\n  "])))),H=function(e){var t=Object(o.useRef)(null),r=Object(o.useState)({width:0,height:0}),n=r[0],i=r[1];return Object(o.useEffect)((function(){i(t.current.getBoundingClientRect());var e=function(){return i(t.current.getBoundingClientRect())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),Object(d.jsx)(I,Object(k.a)({ref:t},e),Object(d.jsx)("div",null,n.width," x ",n.height))}}}]);
//# sourceMappingURL=99d6b9d6df984fca23e88a5d0f8239cc84fa4ff0-09829d238746a89a467d.js.map