"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{8678:function(e,t,a){var n=a(7294),l=a(1597),r=a(1278),i=a(7306),c=a(6281);a(8771);t.Z=function(e){var t,a=e.location,m=e.title,o=e.children,s="/"===a.pathname;return t=s?n.createElement("h1",{className:"main-heading"},n.createElement(l.Link,{to:"/"},m)):n.createElement(l.Link,{className:"header-link-home",to:"/"},m),n.createElement(r.Z.Consumer,null,(function(e){return n.createElement("div",{className:"global-wrapper","data-is-root-path":s},n.createElement("div",{className:e.dark?"dark":"light"},n.createElement(i.Z,null),n.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},n.createElement("header",{className:"global-header"},t),n.createElement(c.Z,{primary:!0,onClick:function(){(0,l.navigate)("/categories/general")}},"투자 일반"),n.createElement(c.Z,{primary:!0,onClick:function(){(0,l.navigate)("/categories/investment_diary")}},"투자 일지"),n.createElement(c.Z,{primary:!0,onClick:function(){(0,l.navigate)("/categories/stock_analysis")}},"종목 분석"),n.createElement(c.Z,{primary:!0,onClick:function(){(0,l.navigate)("/categories/quant_analysis")}},"퀀트 분석"),n.createElement("main",null,o))))}))}},4982:function(e,t,a){a.r(t);var n=a(7294),l=a(1597),r=a(8771),i=a(8678),c=a(262);t.default=function(e){var t,a=e.data,m=e.location,o=a.markdownRemark,s=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",u=a.previous,d=a.next;return n.createElement(i.Z,{location:m,title:s},n.createElement(c.Z,{title:o.frontmatter.title,description:o.frontmatter.description||o.excerpt}),n.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h1",{itemProp:"headline"},o.frontmatter.title),n.createElement("p",null,o.frontmatter.date)),n.createElement("section",{dangerouslySetInnerHTML:{__html:o.html},itemProp:"articleBody"}),n.createElement("hr",null),n.createElement("footer",null,n.createElement(r.Z,null))),n.createElement("nav",{className:"blog-post-nav"},n.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.createElement("li",null,u&&n.createElement(l.Link,{to:u.fields.slug,rel:"prev"},"← ",u.frontmatter.title)),n.createElement("li",null,d&&n.createElement(l.Link,{to:d.fields.slug,rel:"next"},d.frontmatter.title," →")))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-a8da3ea896dfb4341cc5.js.map