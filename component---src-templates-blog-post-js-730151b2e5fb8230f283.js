(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return o});var n=a(0),r=a.n(n),i=a(170);t.default=function(e){var t=e.data.markdownRemark;return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,t.frontmatter.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})))};var o="1098062062"},157:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return h}),a.d(t,"StaticQuery",function(){return g});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(155),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var u=a(27);a.d(t,"waitForRouteChange",function(){return u.c});var s=a(159),m=a.n(s);a.d(t,"PageRenderer",function(){return m.a});var d=a(39);a.d(t,"parsePath",function(){return d.a});var h=r.a.createContext({}),g=function(e){return r.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},159:function(e,t,a){var n;e.exports=(n=a(166))&&n.default||n},161:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(174),r=a.n(n),i=a(175),o=a.n(i);o.a.overrideStyles=function(e,t){e.rhythm;return{h2:{fontSize:"1.3rem"}}};var c=new r.a(o.a),l=c.rhythm},165:function(e){e.exports={data:{site:{siteMetadata:{title:"Hannah Werman",description:"Front End Developer | Blockchain Enthusiast | Nomad"}}}}},166:function(e,t,a){"use strict";a.r(t);a(40);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(54),l=a(1),u=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},170:function(e,t,a){"use strict";var n=a(165),r=a(0),i=a.n(r),o=a(160),c=a(157),l=a(173),u=a(161),s=a(8),m=a.n(s),d=a(180),h=a.n(d),g=a(176),p=a.n(g),f=a(177),y=a.n(f),E=a(179),b=a.n(E),w=a(178),v=a.n(w),k=a(181),x=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={right:!1},t.toggleDrawer=function(e,a){return function(){var n;t.setState(((n={})[e]=a,n))}},t}return m()(t,e),t.prototype.render=function(){var e=this.props.classes,t=i.a.createElement("div",null,i.a.createElement(p.a,{className:Object(o.a)("width:20vw;@media (max-width:415px){width:32vw;}")},i.a.createElement(c.Link,{to:"/about/",style:{textDecoration:"none",marginRight:"0"}},i.a.createElement(y.a,{button:!0,key:"about"},i.a.createElement(v.a,{primary:"About"}))),i.a.createElement(c.Link,{to:"/blog/",style:{textDecoration:"none",marginRight:"0"}},i.a.createElement(y.a,{button:!0,key:"blog"},i.a.createElement(v.a,{primary:"Blog"}))),i.a.createElement(c.Link,{to:"/portfolio/",style:{textDecoration:"none",marginRight:"0"}},i.a.createElement(y.a,{button:!0,key:"portfolio"},i.a.createElement(v.a,{primary:"Portfolio"}))),i.a.createElement(c.Link,{to:"/skills/",style:{textDecoration:"none",marginRight:"0"}},i.a.createElement(y.a,{button:!0,key:"skills"},i.a.createElement(v.a,{primary:"Skills"}))),i.a.createElement(c.Link,{to:"/contact/",style:{textDecoration:"none",marginRight:"0"}},i.a.createElement(y.a,{button:!0,key:"hire"},i.a.createElement(v.a,{primary:"Hire"})))));return i.a.createElement("div",null,i.a.createElement(b.a,{onClick:this.toggleDrawer("right",!0)}),i.a.createElement(h.a,{anchor:"right",disableBackdropTransition:!0,open:this.state.right,onClose:this.toggleDrawer("right",!1),onOpen:this.toggleDrawer("right",!0),BackdropProps:{classes:{root:e.drawer}},onBackdropClick:this.toggleDrawer("right",!1)},i.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer("right",!1),onKeyDown:this.toggleDrawer("right",!1)},t)))},t}(i.a.Component),j=Object(k.withStyles)({drawer:{backgroundColor:"transparent",padding:"5vh"}})(x);t.a=function(e){var t=e.children;return i.a.createElement("div",null,i.a.createElement(c.StaticQuery,{query:"2409360945",render:function(e){return i.a.createElement("div",{className:Object(o.a)("margin:0 auto;max-width:850px;padding:",Object(u.a)(2),";padding-top:",Object(u.a)(1.5),";")},i.a.createElement(l.Helmet,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,"Hannah Werman"),i.a.createElement("link",{rel:"canonical",href:"#"}),">"),i.a.createElement("div",{className:Object(o.a)("float:right;max-width:35%;margin-top:1.5vh;")},i.a.createElement(j,null)),i.a.createElement(c.Link,{to:"/",className:Object(o.a)("margin-right:0;")},i.a.createElement("h1",{className:Object(o.a)("font-size:2rem;@media (max-width:415px){font-size:1.5rem;width:80%;margin-top:1vh;}")},e.site.siteMetadata.title),i.a.createElement("h4",{className:Object(o.a)("margin-bottom:",Object(u.a)(1.5),";display:inline-block;font-style:normal;font-size:1rem;margin-top:1rem;@media (max-width:415px){font-size:11px;}")},e.site.siteMetadata.description)),t)},data:n}),i.a.createElement("footer",{className:Object(o.a)("max-width:850px;margin-left:auto;margin-right:auto;padding:0 ",Object(u.a)(2)," ",Object(u.a)(.5)," ",Object(u.a)(2),";font-size:12px;text-align:right;")},"Built with ♥ using React, Gatsby & GraphQL."))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-730151b2e5fb8230f283.js.map