(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3492)}])},3492:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(5893),i=n(9008),s=n(3528),o=n.n(s),a=n(7294);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=new Map,d=new WeakMap,h=0,p=void 0;function f(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(d.has(n)||(h+=1,d.set(n,h.toString())),d.get(n)):"0":e[t]);var n})).toString()}function b(e,t,n,r){if(void 0===n&&(n={}),void 0===r&&(r=p),"undefined"===typeof window.IntersectionObserver&&void 0!==r){var i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var s=function(e){var t=f(e),n=u.get(t);if(!n){var r,i=new Map,s=new IntersectionObserver((function(t){t.forEach((function(t){var n,s=t.isIntersecting&&r.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=s),null==(n=i.get(t.target))||n.forEach((function(e){e(s,t)}))}))}),e);r=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:s,elements:i},u.set(t,n)}return n}(n),o=s.id,a=s.observer,c=s.elements,l=c.get(e)||[];return c.has(e)||c.set(e,l),l.push(t),a.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(c.delete(e),a.unobserve(e)),0===c.size&&(a.disconnect(),u.delete(o))}}var v=["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function _(e){return"function"!==typeof e.children}var y=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),_(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,l(t,n);var i=r.prototype;return i.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},i.componentWillUnmount=function(){this.unobserve(),this.node=null},i.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin,i=e.trackVisibility,s=e.delay,o=e.fallbackInView;this._unobserveCb=b(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r,trackVisibility:i,delay:s},o)}},i.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},i.render=function(){if(!_(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var r=this.props,i=r.children,s=r.as,o=r.tag,l=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(r,v);return a.createElement(s||o||"div",c({ref:this.handleNode},l),i)},r}(a.Component);function g(e){var t=void 0===e?{}:e,n=t.threshold,r=t.delay,i=t.trackVisibility,s=t.rootMargin,o=t.root,c=t.triggerOnce,l=t.skip,u=t.initialInView,d=t.fallbackInView,h=a.useRef(),p=a.useState({inView:!!u}),f=p[0],v=p[1],_=a.useCallback((function(e){void 0!==h.current&&(h.current(),h.current=void 0),l||e&&(h.current=b(e,(function(e,t){v({inView:e,entry:t}),t.isIntersecting&&c&&h.current&&(h.current(),h.current=void 0)}),{root:o,rootMargin:s,threshold:n,trackVisibility:i,delay:r},d))}),[Array.isArray(n)?n.toString():n,o,s,c,l,i,d,r]);(0,a.useEffect)((function(){h.current||!f.entry||c||l||v({inView:!!u})}));var y=[_,f.inView,f.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}y.displayName="InView",y.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};var x=function(){var e=g({rootMargin:"0px",triggerOnce:!0}),t=e.ref,n=e.inView;return(0,r.jsx)("div",{className:o().step1,children:(0,r.jsxs)("div",{className:"".concat(n?"opacity-100":"opacity-0 translate-y-[5%]"," duration-[1s]"),ref:t,children:[(0,r.jsx)("img",{className:o().logo,src:"/images/logo.png"}),(0,r.jsxs)("h1",{className:o().title,children:["\u4e16\u754c\u306e\u30b7\u30e7\u30fc\u30c8\u6620\u753b\u3092",(0,r.jsx)("br",{className:"pcNo"}),(0,r.jsx)("span",{children:"SAMANSA"}),"\u3067"]}),(0,r.jsxs)("p",{className:o().txt,children:["SAMANSA\u306f\u4e16\u754c\u4e2d\u306e\u826f\u8cea\u3067\u9762\u767d\u3044",(0,r.jsx)("br",{className:"pcNo"}),"\u30b7\u30e7\u30fc\u30c8\u6620\u753b\u30fb\u30c9\u30e9\u30de\u30fb\u30c9\u30ad\u30e5\u30e1\u30f3\u30bf\u30ea\u30fc\u3092\u767a\u6398\u3057\u3001",(0,r.jsx)("br",{}),"\u30af\u30ea\u30a8\u30a4\u30bf\u30fc\u3068\u76f4\u63a5\u5951\u7d04\u3092\u4ea4\u308f\u3057\u3066",(0,r.jsx)("br",{className:"pcNo"}),"\u914d\u4fe1\u3057\u3066\u3044\u308b\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u3059\u3002",(0,r.jsx)("br",{})]}),(0,r.jsx)("h2",{className:o().subtitle,children:"\u6599\u91d1\u30d7\u30e9\u30f3"}),(0,r.jsxs)("p",{className:o().txt,children:["\u30af\u30ec\u30b8\u30c3\u30c8\u30ab\u30fc\u30c9\u306e\u767b\u9332\u304c\u4e0d\u8981\u3067\u3054\u5229\u7528\u3044\u305f\u3060\u3051\u307e\u3059\u3002",(0,r.jsx)("br",{}),"2\u9031\u9593\u30c8\u30e9\u30a4\u30a2\u30eb\u4ed8\u304d(\u4ee5\u964d\u6708\u984d250\u5186)\u3002",(0,r.jsx)("br",{}),"\u203b\u30c8\u30e9\u30a4\u30a2\u30eb\u7d42\u4e86\u5f8c\u306f\u81ea\u52d5\u8ab2\u91d1\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"]}),(0,r.jsxs)("div",{className:o().boxes,children:[(0,r.jsx)("div",{className:o().box,children:(0,r.jsxs)("p",{children:["\u6708\u984d",(0,r.jsx)("br",{}),(0,r.jsx)("span",{className:o().big,children:"250"}),"\u5186"]})}),(0,r.jsx)("div",{className:o().box,children:(0,r.jsxs)("p",{children:["14\u65e5\u9593",(0,r.jsx)("br",{}),(0,r.jsx)("span",{children:"\u7121\u6599"}),"\u4f53\u9a13"]})})]}),(0,r.jsxs)("div",{className:o().btns,children:[(0,r.jsx)("a",{href:"https://samansa.com",children:(0,r.jsx)("button",{className:o().containedBtn,children:"\u4eca\u3059\u3050\u7121\u6599\u767b\u9332"})}),(0,r.jsx)("a",{href:"https://samansa.com",children:(0,r.jsx)("button",{className:o().outlinedBtn,children:"\u30ed\u30b0\u30a4\u30f3"})})]})]})})},j=n(8943),m=n.n(j),N=function(){var e=g({rootMargin:"-1000px",triggerOnce:!0}),t=e.ref,n=e.inView;return(0,r.jsx)("div",{className:m().step2,children:(0,r.jsx)("div",{className:"".concat(n?"opacity-100":"opacity-0 translate-y-[5%]"," duration-[1s]"),ref:t})})},w=n(4865),V=n.n(w),k=function(){return(0,r.jsxs)("div",{className:V().root,children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("title",{children:"SAMANSA"})}),(0,r.jsx)(x,{}),(0,r.jsx)(N,{})]})}},3528:function(e){e.exports={step1:"styles_step1__NEdtS",logo:"styles_logo__bpxO8",title:"styles_title__go4fK",subtitle:"styles_subtitle__jTlaB",txt:"styles_txt__2uFZA",boxes:"styles_boxes__kulMR",box:"styles_box__PQL_B",big:"styles_big__zIrAd",btns:"styles_btns___nec4",containedBtn:"styles_containedBtn__R_ZIb",outlinedBtn:"styles_outlinedBtn__AI14y"}},8943:function(){},4865:function(e){e.exports={root:"Home_root__i_no3"}},9008:function(e,t,n){e.exports=n(5443)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);