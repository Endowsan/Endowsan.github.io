(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8898)}])},1516:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let r=n(4788),o=n(8754),l=n(224),u=o._(n(7294)),a=n(4532),f=n(3353),i=n(1410),c=n(9064),s=n(370),d=n(9955),p=n(4224),h=n(508),b=n(1516),y=n(4266),m=new Set;function v(e,t,n,r,o){if(o||(0,f.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(m.has(l))return;m.add(l)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function x(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let _=u.default.forwardRef(function(e,t){let n,o;let{href:i,as:m,children:_,prefetch:j,passHref:g,replace:w,shallow:C,scroll:E,locale:M,onClick:P,onMouseEnter:k,onTouchStart:O,legacyBehavior:N=!1}=e,T=l._(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=_,N&&("string"==typeof n||"number"==typeof n)&&(n=u.default.createElement("a",null,n));let L=!1!==j,R=u.default.useContext(d.RouterContext),I=u.default.useContext(p.AppRouterContext),S=null!=R?R:I,A=!R,{href:U,as:D}=u.default.useMemo(()=>{if(!R){let e=x(i);return{href:e,as:m?x(m):e}}let[e,t]=(0,a.resolveHref)(R,i,!0);return{href:e,as:m?(0,a.resolveHref)(R,m):t||e}},[R,i,m]),K=u.default.useRef(U),q=u.default.useRef(D);N&&(o=u.default.Children.only(n));let H=N?o&&"object"==typeof o&&o.ref:t,[z,B,X]=(0,h.useIntersection)({rootMargin:"200px"}),G=u.default.useCallback(e=>{(q.current!==D||K.current!==U)&&(X(),q.current=D,K.current=U),z(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[D,H,U,X,z]);u.default.useEffect(()=>{S&&B&&L&&v(S,U,D,{locale:M},A)},[D,U,B,M,L,null==R?void 0:R.locale,S,A]);let Y={ref:G,onClick(e){N||"function"!=typeof P||P(e),N&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,n,r,o,l,a,i,c,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,f.isLocalURL)(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:l,locale:i,scroll:a}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!s})};c?u.default.startTransition(h):h()}(e,S,U,D,w,C,E,M,A,L)},onMouseEnter(e){N||"function"!=typeof k||k(e),N&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),S&&(L||!A)&&v(S,U,D,{locale:M,priority:!0,bypassPrefetchedCheck:!0},A)},onTouchStart(e){N||"function"!=typeof O||O(e),N&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),S&&(L||!A)&&v(S,U,D,{locale:M,priority:!0,bypassPrefetchedCheck:!0},A)}};if((0,c.isAbsoluteUrl)(D))Y.href=D;else if(!N||g||"a"===o.type&&!("href"in o.props)){let e=void 0!==M?M:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&(0,b.getDomainLocale)(D,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);Y.href=t||(0,y.addBasePath)((0,s.addLocale)(D,e,null==R?void 0:R.defaultLocale))}return N?u.default.cloneElement(o,Y):u.default.createElement("a",r._({},T,Y),n)}),j=_;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return f}});let r=n(7294),o=n(29),l="function"==typeof IntersectionObserver,u=new Map,a=[];function f(e){let{rootRef:t,rootMargin:n,disabled:f}=e,i=f||!l,[c,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);(0,r.useEffect)(()=>{if(l){if(i||c)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},a.push(n),u.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!c){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[i,n,t,c,d.current]);let h=(0,r.useCallback)(()=>{s(!1)},[]);return[p,c,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8898:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893),o=n(1664),l=n.n(o);let u=()=>(0,r.jsx)("header",{className:"sticky top-0 border-b z-10 bg-white",children:(0,r.jsxs)("div",{className:"max-w-4xl mx-auto flex justify-between items-center h-12",children:[(0,r.jsx)(l(),{href:"/",children:"endow7.com"}),(0,r.jsx)(l(),{href:"/posts/about",children:"About"}),(0,r.jsx)(l(),{href:"https://github.com/Endowsan",children:"Github"}),(0,r.jsx)(l(),{href:"https://twitter.com/ghoqqm",children:"Twitter"})]})}),a=()=>(0,r.jsx)("footer",{className:"bg-gray-100",children:(0,r.jsx)("div",{className:"max-w-4xl w-full mx-auto h-24 flex items-center justify-center",children:(0,r.jsx)("div",{children:"\xa9 2022 Y.Endo"})})});function f(e){let{children:t}=e;return(0,r.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,r.jsx)(u,{}),(0,r.jsx)("main",{className:"flex-1 max-w-4xl w-full mx-auto",children:t}),(0,r.jsx)(a,{})]})}function i(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(f,{children:(0,r.jsx)(t,{...n})})}n(3814),n(3312)},3312:function(){},3814:function(){},1664:function(e,t,n){e.exports=n(5569)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);