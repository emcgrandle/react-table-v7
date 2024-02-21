_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{d6Ml:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/api/useFilters",function(){return a("vGa3")}])},vGa3:function(e,t,a){"use strict";a.r(t),a.d(t,"meta",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a("wx14"),i=a("Ff2n"),l=a("q1tI"),r=a.n(l),b=a("7ljp"),o=a("er9C"),c=(r.a.createElement,{}),p={meta:c},s=function(e){var t=e.children,a=Object(i.a)(e,["children"]);return Object(b.b)(o.a,Object(n.a)({meta:c},a),t)};function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(b.b)(s,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"usefilters"},Object(b.b)("inlineCode",{parentName:"h1"},"useFilters"),Object(b.b)("a",Object(n.a)({parentName:"h1"},{href:"#usefilters",title:"Direct link to heading",className:"anchor"}),Object(b.b)("span",Object(n.a)({parentName:"a"},{className:"icon icon-link"})))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Plugin Hook"),Object(b.b)("li",{parentName:"ul"},"Optional")),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"useFilters")," is the hook that implements ",Object(b.b)("strong",{parentName:"p"},"row filtering")," - filtering based upon the data in ",Object(b.b)("em",{parentName:"p"},"specific")," columns. It can be used in conjunction with ",Object(b.b)("inlineCode",{parentName:"p"},"useGlobalFilter"),", which involves filtering rows based upon data in ",Object(b.b)("em",{parentName:"p"},"any")," column in a given row. It is important to note that this hook can be used either ",Object(b.b)("strong",{parentName:"p"},"before or after")," ",Object(b.b)("inlineCode",{parentName:"p"},"useGlobalFilter"),", depending on the performance characteristics you want to code for."),Object(b.b)("h3",{id:"table-options"},"Table Options",Object(b.b)("a",Object(n.a)({parentName:"h3"},{href:"#table-options",title:"Direct link to heading",className:"anchor"}),Object(b.b)("span",Object(n.a)({parentName:"a"},{className:"icon icon-link"})))),Object(b.b)("p",null,"The following options are supported via the main options object passed to ",Object(b.b)("inlineCode",{parentName:"p"},"useTable(options)")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"initialState.filters: Array<Object<id: String, value: any>>"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Must be ",Object(b.b)("strong",{parentName:"li"},"memoized")),Object(b.b)("li",{parentName:"ul"},"An array of objects, each having a column ",Object(b.b)("inlineCode",{parentName:"li"},"id")," and a corresponding filter ",Object(b.b)("inlineCode",{parentName:"li"},"value"),". This information is stored in state since the table is allowed to manipulate the filter through user interaction."))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"manualFilters: Bool"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Enables filter detection functionality, but does not automatically perform row filtering."),Object(b.b)("li",{parentName:"ul"},"Turn this on if you wish to implement your own row filter outside of the table (e.g. server-side or manual row grouping/nesting)"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"disableFilters: Bool"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Disables filtering for every column in the entire table."))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"defaultCanFilter: Bool"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Optional"),Object(b.b)("li",{parentName:"ul"},"Defaults to ",Object(b.b)("inlineCode",{parentName:"li"},"false")),Object(b.b)("li",{parentName:"ul"},"If set to ",Object(b.b)("inlineCode",{parentName:"li"},"true"),", all columns will be filterable, regardless if they have a valid ",Object(b.b)("inlineCode",{parentName:"li"},"accessor")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"filterTypes: Object<filterKey: filterType>"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Must be ",Object(b.b)("strong",{parentName:"li"},"memoized")),Object(b.b)("li",{parentName:"ul"},"Allows overriding or adding additional filter types for columns to use. If a column's ",Object(b.b)("inlineCode",{parentName:"li"},"filter")," type isn't found on this object, the column will default to using the built-in filter types."))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"autoResetFilters: Boolean"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Defaults to ",Object(b.b)("inlineCode",{parentName:"li"},"true")),Object(b.b)("li",{parentName:"ul"},"When ",Object(b.b)("inlineCode",{parentName:"li"},"true"),", the ",Object(b.b)("inlineCode",{parentName:"li"},"filters")," state will automatically reset if any of the following conditions are met:",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"data")," is changed"))),Object(b.b)("li",{parentName:"ul"},"To disable, set to ",Object(b.b)("inlineCode",{parentName:"li"},"false")),Object(b.b)("li",{parentName:"ul"},"For more information see the FAQ ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"../faq#how-do-i-stop-my-table-state-from-automatically-resetting-when-my-data-changes"}),'"How do I stop my table state from automatically resetting when my data changes?"'))))),Object(b.b)("h3",{id:"column-options"},"Column Options",Object(b.b)("a",Object(n.a)({parentName:"h3"},{href:"#column-options",title:"Direct link to heading",className:"anchor"}),Object(b.b)("span",Object(n.a)({parentName:"a"},{className:"icon icon-link"})))),Object(b.b)("p",null,"The following options are supported on any ",Object(b.b)("inlineCode",{parentName:"p"},"Column")," object passed to the ",Object(b.b)("inlineCode",{parentName:"p"},"columns")," options in ",Object(b.b)("inlineCode",{parentName:"p"},"useTable()")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"Filter: Function | React.Component => JSX"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Required")),Object(b.b)("li",{parentName:"ul"},"Receives the table instance and column model as props"),Object(b.b)("li",{parentName:"ul"},"Must return valid JSX"),Object(b.b)("li",{parentName:"ul"},"This function (or component) is used to render this column's filter UI"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"disableFilters: Bool"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Optional"),Object(b.b)("li",{parentName:"ul"},"If set to ",Object(b.b)("inlineCode",{parentName:"li"},"true"),", filtering for this column will be disabled"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"defaultCanFilter: Bool"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Optional"),Object(b.b)("li",{parentName:"ul"},"Defaults to ",Object(b.b)("inlineCode",{parentName:"li"},"false")),Object(b.b)("li",{parentName:"ul"},"If set to ",Object(b.b)("inlineCode",{parentName:"li"},"true"),", this column will be filterable, regardless if it has a valid ",Object(b.b)("inlineCode",{parentName:"li"},"accessor")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"filter: String | Function(rows: Array<Row>, columnIds: Array<ColumnId: String>, filterValue) => Rows[]"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Optional"),Object(b.b)("li",{parentName:"ul"},"Defaults to ",Object(b.b)("inlineCode",{parentName:"li"},"text")),Object(b.b)("li",{parentName:"ul"},"The resolved function from this option will be used to filter this column's data.",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"If a ",Object(b.b)("inlineCode",{parentName:"li"},"string")," is passed, the function with that name will be used from either the custom ",Object(b.b)("inlineCode",{parentName:"li"},"filterTypes")," table option (if specified) or from the built-in filtering types object."),Object(b.b)("li",{parentName:"ul"},"If a ",Object(b.b)("inlineCode",{parentName:"li"},"function")," is passed:",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"It must be ",Object(b.b)("strong",{parentName:"li"},"memoized")),Object(b.b)("li",{parentName:"ul"},"It will be called directly with an array of ",Object(b.b)("inlineCode",{parentName:"li"},"rows")," to filter, an array of ",Object(b.b)("inlineCode",{parentName:"li"},"columnIds")," (being a single-element array with the column ID being filtered), and ",Object(b.b)("inlineCode",{parentName:"li"},"filterValue"),", being the current value of the filter being applied"),Object(b.b)("li",{parentName:"ul"},"It must return an ",Object(b.b)("inlineCode",{parentName:"li"},"Array")," of rows, being the remaining rows that have ",Object(b.b)("em",{parentName:"li"},"not")," been filtered out")))))))),Object(b.b)("h3",{id:"instance-properties"},"Instance Properties",Object(b.b)("a",Object(n.a)({parentName:"h3"},{href:"#instance-properties",title:"Direct link to heading",className:"anchor"}),Object(b.b)("span",Object(n.a)({parentName:"a"},{className:"icon icon-link"})))),Object(b.b)("p",null,"The following values are provided to the table ",Object(b.b)("inlineCode",{parentName:"p"},"instance"),":"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"state.filters: Array<Object<id: String, value: any>>"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"The current ",Object(b.b)("inlineCode",{parentName:"li"},"filters")," values located on the state object. This is an array of objects, each having a column ",Object(b.b)("inlineCode",{parentName:"li"},"id")," and its current corresponding filter ",Object(b.b)("inlineCode",{parentName:"li"},"value"),". Example: ",Object(b.b)("inlineCode",{parentName:"li"},"[{ id: 'name', value: 'Jane'}, { id: 'age', value: 21 }]")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"rows: Array<Row>"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"An array of ",Object(b.b)("strong",{parentName:"li"},"filtered")," rows."))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"preFilteredRows: Array<Row>"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"The array of rows ",Object(b.b)("strong",{parentName:"li"},"used right before filtering"),"."),Object(b.b)("li",{parentName:"ul"},"Among many other use-cases, these rows are directly useful for displaying the total number of available rows and building option lists in filters, since the resulting filtered ",Object(b.b)("inlineCode",{parentName:"li"},"rows")," do not contain every possible option."))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"setFilter: Function(columnId, filterValue) => void"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"An instance-level function used to update the filter value for a specific column."))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"setAllFilters: Function(filtersObjectArray) => void"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"An instance-level function used to update the values for ",Object(b.b)("strong",{parentName:"li"},"all")," filters on the table, all at once."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"filtersObjectArray")," is an array of objects with ",Object(b.b)("inlineCode",{parentName:"li"},"id")," and ",Object(b.b)("inlineCode",{parentName:"li"},"value")," keys. Example: ",Object(b.b)("inlineCode",{parentName:"li"},"[{ id: 'columnAccessor', value: 'valueToFilter' }]")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Note:")," You must call ",Object(b.b)("inlineCode",{parentName:"li"},"setAllFilters")," with an array, even if that array is empty. Example: ",Object(b.b)("inlineCode",{parentName:"li"},"setAllFilters([])"))))),Object(b.b)("h3",{id:"column-properties"},"Column Properties",Object(b.b)("a",Object(n.a)({parentName:"h3"},{href:"#column-properties",title:"Direct link to heading",className:"anchor"}),Object(b.b)("span",Object(n.a)({parentName:"a"},{className:"icon icon-link"})))),Object(b.b)("p",null,"The following properties are available on every ",Object(b.b)("inlineCode",{parentName:"p"},"Column")," object returned by the table instance:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"canFilter: Bool"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Denotes whether a column is filterable or not depending on if it has a valid accessor/data model or is manually disabled via an option."))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"setFilter: Function(filterValue) => void"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"A column-level function used to update the filter value for this column"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"filterValue: any"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"The current filter value for this column, resolved from the table state's ",Object(b.b)("inlineCode",{parentName:"li"},"filters")," object"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"preFilteredRows: Array<row>"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"The array of rows that were originally passed to this column's filter ",Object(b.b)("strong",{parentName:"li"},"before")," filtering took place."),Object(b.b)("li",{parentName:"ul"},"This array of rows can be useful if building faceted filter options."))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"filteredRows: Array<row>"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"The resulting array of rows received from this column's filter ",Object(b.b)("strong",{parentName:"li"},"after")," filtering took place."),Object(b.b)("li",{parentName:"ul"},"This array of rows can be useful if building faceted filter options.")))),Object(b.b)("h3",{id:"example"},"Example",Object(b.b)("a",Object(n.a)({parentName:"h3"},{href:"#example",title:"Direct link to heading",className:"anchor"}),Object(b.b)("span",Object(n.a)({parentName:"a"},{className:"icon icon-link"})))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tannerlinsley/react-table/tree/v7/examples/filtering"}),"Source")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://codesandbox.io/s/github/tannerlinsley/react-table/tree/v7/examples/filtering"}),"Open in CodeSandbox"))))}m.isMDXComponent=!0}},[["d6Ml",0,2,1,3,4]]]);