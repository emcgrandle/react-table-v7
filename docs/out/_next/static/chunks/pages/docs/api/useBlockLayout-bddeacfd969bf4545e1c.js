_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"2VO/":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/api/useBlockLayout",function(){return a("hNkO")}])},hNkO:function(e,t,a){"use strict";a.r(t),a.d(t,"meta",(function(){return c})),a.d(t,"default",(function(){return u}));var r=a("wx14"),n=a("Ff2n"),o=a("q1tI"),b=a.n(o),l=a("7ljp"),i=a("er9C"),c=(b.a.createElement,{}),p={meta:c},s=function(e){var t=e.children,a=Object(n.a)(e,["children"]);return Object(l.b)(i.a,Object(r.a)({meta:c},a),t)};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)(s,Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"useblocklayout"},Object(l.b)("inlineCode",{parentName:"h1"},"useBlockLayout"),Object(l.b)("a",Object(r.a)({parentName:"h1"},{href:"#useblocklayout",title:"Direct link to heading",className:"anchor"}),Object(l.b)("span",Object(r.a)({parentName:"a"},{className:"icon icon-link"})))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Plugin Hook"),Object(l.b)("li",{parentName:"ul"},"Optional")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"useBlockLayout")," is a plugin hook that adds support for headers and cells to be rendered as ",Object(l.b)("inlineCode",{parentName:"p"},"inline-block")," ",Object(l.b)("inlineCode",{parentName:"p"},"div"),"s (or other non-table elements) with explicit ",Object(l.b)("inlineCode",{parentName:"p"},"width"),". Similar to the ",Object(l.b)("inlineCode",{parentName:"p"},"useAbsoluteLayout")," hook, this becomes useful if and when you need to virtualize rows and cells for performance."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"NOTE:")," Although no additional options are needed for this plugin to work, the core column options ",Object(l.b)("inlineCode",{parentName:"p"},"width"),", ",Object(l.b)("inlineCode",{parentName:"p"},"minWidth")," and ",Object(l.b)("inlineCode",{parentName:"p"},"maxWidth")," are used to calculate column and cell widths and must be set. See ",Object(l.b)("inlineCode",{parentName:"p"},"Column Options")," (",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"./useTable#column-options"}),"website"),") or (",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"./useTable#column-options"}),"GitHub"),") for more information on these options."),Object(l.b)("h3",{id:"row-properties"},"Row Properties",Object(l.b)("a",Object(r.a)({parentName:"h3"},{href:"#row-properties",title:"Direct link to heading",className:"anchor"}),Object(l.b)("span",Object(r.a)({parentName:"a"},{className:"icon icon-link"})))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"getRowProps"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Usage Required")),Object(l.b)("li",{parentName:"ul"},"This core prop getter is required to to enable absolute layout for rows")))),Object(l.b)("h3",{id:"cell-properties"},"Cell Properties",Object(l.b)("a",Object(r.a)({parentName:"h3"},{href:"#cell-properties",title:"Direct link to heading",className:"anchor"}),Object(l.b)("span",Object(r.a)({parentName:"a"},{className:"icon icon-link"})))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"getCellProps"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Usage Required")),Object(l.b)("li",{parentName:"ul"},"This core prop getter is required to to enable absolute layout for rows cells")))),Object(l.b)("h3",{id:"headergroup-properties"},"HeaderGroup Properties",Object(l.b)("a",Object(r.a)({parentName:"h3"},{href:"#headergroup-properties",title:"Direct link to heading",className:"anchor"}),Object(l.b)("span",Object(r.a)({parentName:"a"},{className:"icon icon-link"})))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"getHeaderGroupProps"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Usage Required")),Object(l.b)("li",{parentName:"ul"},"This core prop getter is required to to enable absolute layout for headers")))),Object(l.b)("h3",{id:"header-properties"},"Header Properties",Object(l.b)("a",Object(r.a)({parentName:"h3"},{href:"#header-properties",title:"Direct link to heading",className:"anchor"}),Object(l.b)("span",Object(r.a)({parentName:"a"},{className:"icon icon-link"})))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"getHeaderProps"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Usage Required")),Object(l.b)("li",{parentName:"ul"},"This core prop getter is required to to enable absolute layout for headers")))),Object(l.b)("h3",{id:"footergroup-properties"},"FooterGroup Properties",Object(l.b)("a",Object(r.a)({parentName:"h3"},{href:"#footergroup-properties",title:"Direct link to heading",className:"anchor"}),Object(l.b)("span",Object(r.a)({parentName:"a"},{className:"icon icon-link"})))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"getFooterGroupProps"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Usage Required")),Object(l.b)("li",{parentName:"ul"},"This core prop getter is required to to enable absolute layout for footers")))),Object(l.b)("h3",{id:"footer-properties"},"Footer Properties",Object(l.b)("a",Object(r.a)({parentName:"h3"},{href:"#footer-properties",title:"Direct link to heading",className:"anchor"}),Object(l.b)("span",Object(r.a)({parentName:"a"},{className:"icon icon-link"})))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"getFooterProps"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Usage Required")),Object(l.b)("li",{parentName:"ul"},"This core prop getter is required to to enable absolute layout for footers")))),Object(l.b)("h3",{id:"example"},"Example",Object(l.b)("a",Object(r.a)({parentName:"h3"},{href:"#example",title:"Direct link to heading",className:"anchor"}),Object(l.b)("span",Object(r.a)({parentName:"a"},{className:"icon icon-link"})))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/tannerlinsley/react-table/tree/v7/examples/block-layout"}),"Source")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://codesandbox.io/s/github/tannerlinsley/react-table/tree/v7/examples/block-layout"}),"Open in CodeSandbox"))))}u.isMDXComponent=!0}},[["2VO/",0,2,1,3,4]]]);