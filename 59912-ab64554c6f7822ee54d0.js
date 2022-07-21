/*! For license information please see 59912-ab64554c6f7822ee54d0.js.LICENSE.txt */
(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[59912],{22863:function(e,t,n){"use strict";var a=n(64836);t.Z=void 0;var r=a(n(67294)),i=a(n(45697)),o=a(n(47166)),l=a(n(17422)),u=o.default.bind(l.default),c={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},s=function(e){var t=e.src,n=e.name,a=e.url,i=e.version,o=r.default.createElement("a",{className:u("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(i)},r.default.createElement("span",{className:u("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:u("badge-version")},"v".concat(i))),l=t?r.default.createElement("a",{className:u("badge"),href:t},r.default.createElement("span",{className:u("badge-name")},"github"),r.default.createElement("span",{className:u("badge-version")},"source")):void 0;return r.default.createElement("div",{className:u("badge-container")},o,l)};s.propTypes=c;var d=s;t.Z=d},72603:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n(87462),r=n(44925),i=(n(67294),n(81254)),o=n(55838),l=n(75983),u=n(26450),c=["components"],s={};function d(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.mdx)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(o.C,{mdxType:"Badge"}),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-framework/blob/main/packages/terra-infinite-list#readme"},(0,i.mdx)("img",{parentName:"a",src:"https://badgen.net/badge/status/Deprecated/grey",alt:"Deprecated"}))),(0,i.mdx)("h1",{id:"terra-infinite-list--sections"},"Terra Infinite List — Sections"),(0,i.mdx)(l.Notice,{variant:"deprecation",mdxType:"Notice"},(0,i.mdx)("p",null,"The terra-infinite-list component has been deprecated and is no longer recommended for use."),(0,i.mdx)("p",null,"From a usability perspective, infinite scrolling is a pattern designed and best used when users are casually looking for or discovering things, like shopping and social media. The infinite scrolling pattern should not be used for ",(0,i.mdx)("a",{parentName:"p",href:"https://www.nngroup.com/articles/infinite-scrolling/"},"goal-oriented tasks"),". Cerner products and our users most often fall into goal-oriented workflows. Users should have proper navigation methods (pagination) to navigate to predetermined points within the content easily."),(0,i.mdx)("p",null,"Infinite scrolling also poses significant accessibility challenges for multiple user groups:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Keyboard-only users have to navigate the entire infinite scroll to get to the content below or to the side of the endless loading content. This creates a very time-consuming and unnecessary burden for the keyboard-only user."),(0,i.mdx)("li",{parentName:"ul"},"Screen reader users would have the same problem even though they have more ways to navigate content on the page. When content is dynamically loaded and not within the DOM, screen reader users won't have access to any of that content which poses more significant challenges than just navigating."),(0,i.mdx)("li",{parentName:"ul"},"Focus can be lost when new content loads. Unless focus is managed, sighted keyboard-only users will have difficulties finding where they are on the page."),(0,i.mdx)("li",{parentName:"ul"},"For data with hierarchical relationships, infinite scrolling can make it difficult for screen readers to effectively communicate the required context if related content is split between loaded and unloaded content.")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/cerner-terra-core-docs/paginator/paginator"},"terra-paginator")," should be considered as an alternative approach to paging large amounts of data.")),(0,i.mdx)("p",null,"To achieve sections within the InfiniteList the only supported implementation is directly consuming the static variant of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"SectionHeader")," component. Expand/collapse functionality is not supported within the infinite list. "),(0,i.mdx)("h2",{id:"map-section-structure"},"Map Section Structure"),(0,i.mdx)("p",null,"So in our first step a ",(0,i.mdx)("inlineCode",{parentName:"p"},"SectionHeader")," needs to be created for each associated section. We'll add it to the initialization of an array that will be expanded in the following steps."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"  const createSection = (sectionData) => {\n    const section = [\n      <SectionHeader\n        key={sectionData.key}\n        title={sectionData.title}\n      />,\n    ];\n    return section;\n  };\n")),(0,i.mdx)("p",null,"Next we'll create an array with the first item being our section header, and then loop through the associated child items for the section appending them to the initial array."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"  const createSection = (sectionData) => {\n    const section = [\n      <SectionHeader\n        key={sectionData.key}\n        title={sectionData.title}\n      />,\n    ];\n    sectionData.childItems.forEach(childItem => section.push(createListItem(childItem)));\n    return section;\n  };\n")),(0,i.mdx)("h2",{id:"unpack-data"},"Unpack Data"),(0,i.mdx)("p",null,"We can then implement the unpack of our data into our list items."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"const createListItem = itemData => (\n  <Item key={itemData.key}>\n    <Placeholder title={itemData.title} />\n  </Item>\n);\n\nconst createSections = data => data.map(section => createSection(section));\n")),(0,i.mdx)("p",null,"Then we can implement a method to loop through our data and create the section with our methods and call it from our render method."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},'const InfiniteListSection = () => (\n  <MyExampleContainer>\n    <InfiniteList\n      dividerStyle="standard"\n      isFinishedLoading\n    >\n      {createSections(mockData)}\n    </InfiniteList>\n  </MyExampleContainer>\n);\n')),(0,i.mdx)("p",null,"Using these steps we get the following example:"),(0,i.mdx)("h2",{id:"example"},"Example"),(0,i.mdx)(u.Z,{title:"Sections Header Infinite List",mdxType:"InfiniteListSection"}))}d.isMDXComponent=!0},55838:function(e,t,n){"use strict";n.d(t,{C:function(){return i}});var a=n(67294),r=n(22863),i=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-infinite-list",name:"terra-infinite-list",version:"3.41.1",url:t})}},66635:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),i=a(n(47166)),o=a(n(63190)),l=i.default.bind(o.default),u=function(e){var t=e.children;return r.default.createElement("div",{className:l("main-content")},t)};t.default=u},26450:function(e,t,n){"use strict";var a=n(64836),r=n(18698);t.Z=void 0;var i=a(n(67294)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=i?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(45186)),l=n(75983),u=a(n(47166)),c=a(n(55189)),s=a(n(66635)),d=a(n(63190));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var f=u.default.bind(d.default),p=function(e){var t=[i.default.createElement(o.SectionHeader,{key:e.key,title:e.title})];return e.childItems.forEach((function(e){return t.push((n=e,i.default.createElement(o.Item,{key:n.key},i.default.createElement(l.Placeholder,{title:n.title,className:f("placeholder")}))));var n})),t},h=function(){return i.default.createElement(s.default,null,i.default.createElement(o.default,{dividerStyle:"standard",isFinishedLoading:!0,ariaLabel:"Section"},c.default.map((function(e){return p(e)}))))};t.Z=h},55189:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[{title:"Section 0",key:"unique-key-0",childItems:[{title:"Item 0-0",key:"unique-0-0"},{title:"Item 0-1",key:"unique-0-1"},{title:"Item 0-2",key:"unique-0-2"},{title:"Item 0-3",key:"unique-0-3"},{title:"Item 0-4",key:"unique-0-4"},{title:"Item 0-5",key:"unique-0-5"}]},{title:"Section 1",key:"unique-key-1",childItems:[{title:"Item 1-0",key:"unique-1-0"},{title:"Item 1-1",key:"unique-1-1"},{title:"Item 1-2",key:"unique-1-2"},{title:"Item 1-3",key:"unique-1-3"},{title:"Item 1-4",key:"unique-1-4"},{title:"Item 1-5",key:"unique-1-5"}]},{title:"Section 2",key:"unique-key-2",childItems:[{title:"Item 3-0",key:"unique-3-0"},{title:"Item 3-1",key:"unique-3-1"},{title:"Item 3-2",key:"unique-3-2"},{title:"Item 3-3",key:"unique-3-3"},{title:"Item 3-4",key:"unique-3-4"},{title:"Item 3-5",key:"unique-3-5"}]},{title:"Section 4",key:"unique-key-4",childItems:[{title:"Item 4-0",key:"unique-4-0"},{title:"Item 4-1",key:"unique-4-1"},{title:"Item 4-2",key:"unique-4-2"},{title:"Item 4-3",key:"unique-4-3"},{title:"Item 4-4",key:"unique-4-4"},{title:"Item 4-5",key:"unique-4-5"}]}];t.default=n},17422:function(e,t,n){"use strict";n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},63190:function(e,t,n){"use strict";n.r(t),t.default={placeholder:"InfiniteListDocExampleCommon-module__placeholder___+p5qG","item-content":"InfiniteListDocExampleCommon-module__item-content___wVR4Q","main-content":"InfiniteListDocExampleCommon-module__main-content___b5X2e"}},59088:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TSAYW","orion-fusion-theme":"Button-module__orion-fusion-theme___96AL7",button:"Button-module__button___v+HKw","is-active":"Button-module__is-active___ypcX2"}},92977:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___pTExk","orion-fusion-theme":"Notice-module__orion-fusion-theme___PF+qo",notice:"Notice-module__notice___WorbQ",children:"Notice-module__children___Mtqhu",accessory:"Notice-module__accessory___1zdDg",title:"Notice-module__title___5gv-b","ux-recommendation":"Notice-module__ux-recommendation___+II9D",caution:"Notice-module__caution___048ot",deprecation:"Notice-module__deprecation___s+V2d",maintenance:"Notice-module__maintenance___TCmi1",important:"Notice-module__important___eBEgg","not-supported":"Notice-module__not-supported___W-Jcy",paragraph:"Notice-module__paragraph___YTZe3",list:"Notice-module__list___1Yd9S"}},4365:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___KIp+p","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___5tg-n",placeholder:"Placeholder-module__placeholder___a1DlK",inner:"Placeholder-module__inner___eQKWp",title:"Placeholder-module__title___-1dNV"}},98545:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(67294)),r=c(n(14824)),i=c(n(15471)),o=c(n(47341)),l=c(n(59088)),u=["children"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=i.default.bind(l.default),f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h={children:r.default.string},_=function(e){var t=e.children,n=d(e,u),r=a.default.useContext(o.default),l=(0,i.default)(m(["button",r.className]),n.className);return a.default.createElement("button",s({},n,{type:"button",className:l,onBlur:f,onMouseDown:p,"data-focus-styles-enabled":!0}),t)};_.propTypes=h;var y=_;t.default=y},21369:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(67294)),r=u(n(14824)),i=u(n(15471)),o=u(n(47341)),l=u(n(92977));function u(e){return e&&e.__esModule?e:{default:e}}var c=i.default.bind(l.default),s={ariaLevel:r.default.oneOf(["2","3","4","5","6"]),children:r.default.node,variant:r.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},d=function(e){var t=e.ariaLevel,n=e.variant,r=e.children,i=a.default.useContext(o.default);return a.default.createElement("div",{className:c("notice",n,i.className)},a.default.createElement("div",{className:c("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:c("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),a.default.createElement("div",{className:c("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:c("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:c("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:c("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),a.default.Children.map(r,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};d.propTypes=s,d.defaultProps={ariaLevel:"2",variant:"important"};var m=d;t.default=m},63031:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(67294)),r=s(n(14824)),i=s(n(15321)),o=s(n(15471)),l=s(n(47341)),u=s(n(4365)),c=["title"];function s(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=o.default.bind(u.default),p={title:r.default.string},h=function(e){var t=e.title,n=m(e,c),r=a.default.useContext(l.default),o=(0,i.default)(f(["placeholder",r.className]),n.className),u=f(["inner"]);return a.default.createElement("div",d({},n,{className:o}),a.default.createElement("div",{className:u},a.default.createElement("p",{className:f("title")},t)))};h.propTypes=p,h.defaultProps={title:""};var _=h;t.default=_},75983:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.default}});var a=o(n(21369)),r=o(n(63031)),i=o(n(98545));function o(e){return e&&e.__esModule?e:{default:e}}},15471:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(r.apply(this,n));else if("object"===i)if(n.toString===Object.prototype.toString)for(var o in n)a.call(n,o)&&n[o]&&e.push(this&&this[o]||o);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},15321:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var o=r.apply(null,n);o&&e.push(o)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var l in n)a.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},95860:function(e,t,n){"use strict";var a=n(54770);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,o){if(o!==a){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},14824:function(e,t,n){e.exports=n(95860)()},54770:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},87462:function(e,t,n){"use strict";function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return a}})},44925:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})}}]);