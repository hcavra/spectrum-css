(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{RNiq:function(e,t,i){"use strict";i.r(t);var n=i("0iUn"),a=i("sLSF"),r=i("MI3g"),o=i("a7VT"),s=i("Tit0"),l=i("wR4/"),c=i("q1tI"),u=i.n(c),p=i("hurw"),f=(i("nOHt"),i("zbh7")),m=i("TSYQ"),d=i.n(m),h=i("vJEu"),g=i.n(h),v=u.a.createElement,w=(u.a.Component,i("TJpk")),b=i("DKzn"),y=i.n(b),S=u.a.createElement,k=function(e){return S("div",{className:d()("afg-row",y.a.row)},S("div",{className:d()("afg-col-xs-12 afg-col-sm-12",y.a.heroImage)},S("div",{className:d()(y.a.heroContainer,y.a[e.style])},S(p.a,{alt:e.desktop.description,image:e.desktop.file,imageMobile:e.mobile?e.mobile.file:void 0}))))},N=i("ucBj"),_=i.n(N),x=i("YFqc"),M=i.n(x),E=i("lXAN"),T=u.a.createElement;t.default=function(){return T("div",{style:{overflow:"hidden",position:"relative"}},T(w.Helmet,null,T("meta",{name:"Description",content:""}),T("title",null,"Spectrum CSS")),T(E.a,{title:"Meet Spectrum CSS"}),T("p",{className:"spectrum-Body2"},"Spectrum CSS is an open-source implementation of Spectrum, Adobe\u2019s design system. It includes components and resources to make applications more cohesive."),T(k,{desktop:{description:"Spectrum CSS Hero image",file:{contentType:"image/png",details:{image:{width:1952,height:891},size:290381},fileName:"spectrum-css_illustration_desktop@2x.png",url:"".concat("/spectrum-css","/static/images/spectrum-css_illustration_desktop@2x.png")}},mobile:{description:"Spectrum CSS Hero image",file:{contentType:"image/png",details:{image:{width:1346,height:1281},size:127178},fileName:"spectrum-css_illustration_mobile@2x.png",url:"".concat("/spectrum-css","/static/images/spectrum-css_illustration_mobile@2x.png")}},style:"Illustration"}),T("div",{className:"afg-row"},T("div",{className:"afg-col-xs-12 afg-col-sm-6"},T(f.a,{title:"Robust documentation"}),T("p",null,"Spectrum CSS is designed to be used in partnership with Spectrum\u2019s detailed usage guidelines."),T("p",null,T(_.a,{href:"https://spectrum.corp.adobe.com/"},"View Spectrum guidelines"))),T("div",{className:"afg-col-xs-12 afg-col-sm-6"},T(f.a,{title:"Flexible"}),T("p",null,"Our CSS is customizable, powerful, and designed to work with any javascript framework."),T("p",null,T(M.a,{href:"/get-started/",as:"".concat("/spectrum-css","/get-started/")},T("a",{className:"spectrum-Link"},"Get Started"))))),T("div",{className:"afg-row"},T("div",{className:"afg-col-xs-12 afg-col-sm-6"},T(f.a,{title:"Rigorously tested"}),T("p",null,"These individually-versioned components have been vetted to be accessible and inclusive of global audiences.")),T("div",{className:"afg-col-xs-12 afg-col-sm-6"},T(f.a,{title:"Multi-platform support"}),T("p",null,"We support evergreen browsers (minus one version) and IE 11 for scalability and flexibility."),T("p",null,T(_.a,{href:"https://spectrum.corp.adobe.com/"},"View Spectrum guidelines")))))}},YFqc:function(e,t,i){e.exports=i("cTJO")},cTJO:function(e,t,i){"use strict";var n=i("/HRN"),a=i("WaGi"),r=i("ZDA2"),o=i("/+P4"),s=i("N9n2"),l=i("5Uuq"),c=i("KI45");t.__esModule=!0,t.default=void 0;var u,p=c(i("LX0d")),f=i("CxY0"),m=l(i("q1tI")),d=(c(i("17x9")),c(i("nOHt"))),h=i("P5f7"),g=i("g/15");function v(e){return e&&"object"===typeof e?(0,g.formatWithValidation)(e):e}var w=new p.default,b=window.IntersectionObserver;function y(){return u||(b?u=new b(function(e){e.forEach(function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),w.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var S=function(e){function t(e){var i;return n(this,t),(i=r(this,o(t).call(this,e))).p=void 0,i.cleanUpListeners=function(){},i.formatUrls=function(e){var t=null,i=null,n=null;return function(a,r){if(n&&a===t&&r===i)return n;var o=e(a,r);return t=a,i=r,n=o,o}}(function(e,t){return{href:v(e),as:t?v(t):t}}),i.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,a=t.target;if("A"!==n||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var r=i.formatUrls(i.props.href,i.props.as),o=r.href,s=r.as;if(function(e){var t=(0,f.parse)(e,!1,!0),i=(0,f.parse)((0,g.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===i.protocol&&t.host===i.host}(o)){var l=window.location.pathname;o=(0,f.resolve)(l,o),s=s?(0,f.resolve)(l,s):o,e.preventDefault();var c=i.props.scroll;null==c&&(c=s.indexOf("#")<0),d.default[i.props.replace?"replace":"push"](o,s,{shallow:i.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})}}},i.p=!1!==e.prefetch,i}return s(t,e),a(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var i=y();return i?(i.observe(e),w.set(e,t),function(){try{i.unobserve(e)}catch(t){console.error(t)}w.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,i=(0,f.resolve)(e,t);d.default.prefetch(i)}}},{key:"render",value:function(){var e=this,t=this.props.children,i=this.formatUrls(this.props.href,this.props.as),n=i.href,a=i.as;"string"===typeof t&&(t=m.default.createElement("a",null,t));var r=m.Children.only(t),o={ref:function(t){e.handleRef(t),r&&"object"===typeof r&&r.ref&&("function"===typeof r.ref?r.ref(t):"object"===typeof r.ref&&(r.ref.current=t))},onMouseEnter:function(t){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(t),e.prefetch()},onClick:function(t){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==r.type||"href"in r.props)||(o.href=a||n),o.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(o.href=(0,h.rewriteUrlForNextExport)(o.href)),m.default.cloneElement(r,o)}}]),t}(m.Component);S.propTypes=void 0;var k=S;t.default=k},hurw:function(e,t,i){"use strict";var n=i("q1tI"),a=i.n(n),r=i("TSYQ"),o=i.n(r),s=i("Nwyk"),l=i.n(s),c=a.a.createElement;t.a=function(e){return c("div",{className:o()("responsiveImage",e.imageMobile?l.a.hasMobile:void 0,l.a.responsiveImage,e.imageStyle?l.a[e.imageStyle]:void 0),style:{minHeight:e.minHeight?e.image.details.image.height/2+"px":void 0}},c("img",{key:e.image.url,alt:"[blank]"===e.alt?"":e.alt,className:o()(l.a.desktop,l.a[e.sizeBy]),src:e.image.url+"?w="+Math.round(e.image.details.image.width/2)+"&h="+Math.round(e.image.details.image.height/2),srcSet:e.image.url+" 2x"}),e.imageMobile?c("img",{alt:"[blank]"===e.alt?"":e.alt,className:l.a.mobile,key:e.imageMobile.url,src:e.imageMobile.url+"?w="+Math.round(e.imageMobile.details.image.width/2)+"&h="+Math.round(e.imageMobile.details.image.height/2),srcSet:e.imageMobile.url+" 2x"}):void 0)}},vlRD:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i("RNiq")}])}},[["vlRD",1,0,2]]]);