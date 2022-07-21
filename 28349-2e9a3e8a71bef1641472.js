/*! For license information please see 28349-2e9a3e8a71bef1641472.js.LICENSE.txt */
(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[28349],{76313:function(e,t,r){"use strict";var n=r(64836),a=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(38416)),l=n(r(10434)),u=n(r(70215)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=O(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=o?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(n,l,u):n[l]=e[l]}n.default=e,r&&r.set(e,n);return n}(r(67294)),d=n(r(45697)),c=r(25387),f=n(r(94184)),s=n(r(47166)),p=n(r(47341)),b=n(r(71171)),y=n(r(51331)),m=n(r(29270)),h=n(r(91986)),_=n(r(91417)),v=n(r(40873)),g=["dayAttributes","disabled","displayFormat","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLegendHidden","intl","legend","legendAttributes","monthAttributes","maxWidth","name","onBlur","onChange","onFocus","required","showOptional","value","yearAttributes"];function O(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(O=function(e){return e?r:t})(e)}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I=s.default.bind(v.default),P={legend:d.default.string.isRequired,name:d.default.string.isRequired,dayAttributes:d.default.object,disabled:d.default.bool,displayFormat:d.default.string,error:d.default.node,help:d.default.node,hideRequired:d.default.bool,isIncomplete:d.default.bool,isInline:d.default.bool,isInvalid:d.default.bool,isLegendHidden:d.default.bool,intl:d.default.shape({formatMessage:d.default.func}),legendAttributes:d.default.object,monthAttributes:d.default.object,maxWidth:d.default.string,onBlur:d.default.func,onChange:d.default.func,onFocus:d.default.func,required:d.default.bool,showOptional:d.default.bool,value:d.default.string,yearAttributes:d.default.object},E={dayAttributes:{},disabled:!1,displayFormat:void 0,error:null,help:null,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttributes:{},monthAttributes:{},maxWidth:void 0,onBlur:void 0,onChange:void 0,onFocus:void 0,required:!1,showOptional:!1,value:"",yearAttributes:{}},x=function(e){var t=e.dayAttributes,r=e.disabled,n=e.displayFormat,a=e.error,o=e.help,d=e.hideRequired,c=e.isIncomplete,s=e.isInline,v=e.isInvalid,O=e.isLegendHidden,j=e.intl,P=e.legend,E=e.legendAttributes,x=e.monthAttributes,k=(e.maxWidth,e.name),F=e.onBlur,D=e.onChange,C=e.onFocus,q=e.required,S=e.showOptional,A=e.value,T=e.yearAttributes,N=(0,u.default)(e,g),M=(0,i.useRef)((0,b.default)()),R=i.default.useContext(p.default),B=(0,f.default)(I("date-input-field",{"is-inline":s},R.className),N.className),W=(0,f.default)(I("legend",R.className),E.className),L="terra-date-input-field-description-help-".concat(M.current),H="terra-date-input-field-description-error-".concat(M.current),V=L;a&&v&&(V="".concat(H," ").concat(L));var U=x&&x["aria-describedby"],Y=t&&t["aria-describedby"],z=T&&T["aria-describedby"],Q=U?"".concat(V," ").concat(U):V,Z=Y?"".concat(V," ").concat(Y):V,G=z?"".concat(V," ").concat(z):V,J=i.default.createElement("legend",{className:I(["legend-group",{"legend-group-hidden":O}])},i.default.createElement("div",(0,l.default)({},E,{className:W}),v&&i.default.createElement("span",{className:I("error-icon")},i.default.createElement(y.default,null)),q&&(v||!d)&&i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{"aria-hidden":"true",className:I("required")},"*"),i.default.createElement(m.default,{text:j.formatMessage({id:"Terra.date.input.required"})})),P,q&&!v&&d&&i.default.createElement("span",{className:I("required-hidden")},"*"),S&&!q&&i.default.createElement("span",{className:I("optional")},j.formatMessage({id:"Terra.date.input.optional"})),!v&&i.default.createElement("span",{className:I("error-icon-hidden")}))),K=_.default.getDateFormat({displayFormat:n,intl:j});return i.default.createElement("fieldset",(0,l.default)({},N,{className:B}),J,o&&i.default.createElement(m.default,{text:o}),i.default.createElement(h.default,{a11yLabel:P,dayAttributes:w(w({},t),{"aria-describedby":Z}),disabled:r,displayFormat:n,isA11yControlled:!0,isIncomplete:c,isInvalid:v,monthAttributes:w(w({},x),{"aria-describedby":Q}),name:k,onBlur:F,onChange:D,onFocus:C,required:q,useExternalFormatMask:!0,value:A,yearAttributes:w(w({},T),{"aria-describedby":G})}),v&&a&&i.default.createElement("div",{id:H,className:I("error-text")},a),i.default.createElement("div",{"aria-hidden":!0,className:I("help-text")},o?"".concat(K," ").concat(o):K))};x.propTypes=P,x.defaultProps=E;var k=(0,c.injectIntl)(x);t.default=k},76430:function(e,t,r){"use strict";var n=r(64836),a=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=o?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(n,l,u):n[l]=e[l]}n.default=e,r&&r.set(e,n);return n}(r(67294)),u=n(r(76313));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}var d=function(){var e=(0,l.useState)(""),t=(0,o.default)(e,2),r=t[0],n=t[1],a=(0,l.useState)(!1),i=(0,o.default)(a,2),d=i[0],c=i[1];return l.default.createElement("div",null,l.default.createElement(u.default,{legend:"Legend text",name:"date-input",value:r,onChange:function(e,t){return n(t)},error:"Error message",help:"Help message",isInvalid:d}),l.default.createElement("p",null,"DateInputField Value: ".concat(r)),l.default.createElement("button",{type:"button",onClick:function(){return c((function(e){return!e}))}},"Toggle isInvalid"))};t.default=d},68586:function(e,t,r){"use strict";r.r(t),t.default={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___clY96","orion-fusion-theme":"Input-module__orion-fusion-theme___phvH5","form-input":"Input-module__form-input___Fk8kb","form-error":"Input-module__form-error___aU4hq","form-incomplete":"Input-module__form-incomplete___h4I7H"}},40873:function(e,t,r){"use strict";r.r(t),t.default={"orion-fusion-theme":"DateInputField-module__orion-fusion-theme___6WeUI","clinical-lowlight-theme":"DateInputField-module__clinical-lowlight-theme___ZPdZB","date-input-field":"DateInputField-module__date-input-field___y3E0d","is-inline":"DateInputField-module__is-inline___Y5zYN","legend-group":"DateInputField-module__legend-group___Y8qQh","legend-group-hidden":"DateInputField-module__legend-group-hidden___NubE+",legend:"DateInputField-module__legend___8v6Uw","error-icon":"DateInputField-module__error-icon___9jalk","error-icon-hidden":"DateInputField-module__error-icon-hidden___7yXqb",required:"DateInputField-module__required___c+zgG","required-hidden":"DateInputField-module__required-hidden___udcsO",optional:"DateInputField-module__optional___Jtg7S","help-text":"DateInputField-module__help-text___zQnVy","error-text":"DateInputField-module__error-text___D5gK6"}},45374:function(e,t,r){"use strict";r.r(t),t.default={"visually-hidden-text":"VisuallyHiddenText-module__visually-hidden-text___Mk9By"}},55142:function(e,t,r){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=f(r(67294)),o=f(r(45697)),l=f(r(94184)),u=f(r(47166)),i=f(r(47341)),d=f(r(68586)),c=["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"];function f(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=O(e);if(t){var a=O(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return g(this,r)}}function g(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var j=u.default.bind(d.default),w={defaultValue:o.default.oneOfType([o.default.string,o.default.number]),disabled:o.default.bool,isIncomplete:o.default.bool,isInvalid:o.default.bool,onBlur:o.default.func,onChange:o.default.func,onFocus:o.default.func,onInput:o.default.func,name:o.default.string,pattern:o.default.string,refCallback:o.default.func,required:o.default.bool,type:o.default.string,value:o.default.oneOfType([o.default.string,o.default.number]),ariaLabel:o.default.string},I={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(u,e);var t,r,n,o=v(u);function u(){return m(this,u),o.apply(this,arguments)}return t=u,r=[{key:"render",value:function(){var e,t=this.props,r=t.defaultValue,n=t.disabled,o=t.isIncomplete,u=t.isInvalid,i=t.onBlur,d=t.onChange,f=t.onFocus,m=t.onInput,h=t.name,_=t.pattern,v=t.refCallback,g=t.required,O=t.type,w=t.ariaLabel,I=t.value,P=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},y(t,c)),E=this.context,x=(void 0===O||["text","number","password","email","search","tel","url","hidden"].includes(O))&&j("form-input",{"form-error":u},{"form-incomplete":o&&g&&!u},E.className),k=(0,l.default)(x,P.className);return P&&Object.prototype.hasOwnProperty.call(P,"aria-label")?e=w||P["aria-label"]:w&&(e=w),P["aria-label"]=e,g&&(P["aria-required"]="true"),void 0!==I?P.value=I:void 0!==r&&(P.defaultValue=r),P.placeholder&&(P.placeholder=null),a.default.createElement("input",s({},P,{ref:function(e){v&&v(e)},name:h,type:O,pattern:_,onBlur:i,onChange:d,onFocus:f,onInput:m,disabled:n,required:g,className:k}))}}],r&&h(t.prototype,r),n&&h(t,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a.default.Component);P.propTypes=w,P.defaultProps=I,P.contextType=i.default,P.isInput=!0;var E=P;t.default=E},63476:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(67294)),a=i(r(29995)),o=i(r(96542)),l=i(r(45374)),u=["refCallback","text"];function i(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var f=o.default.bind(l.default),s={refCallback:a.default.func,text:a.default.string},p={text:void 0,refCallback:void 0},b=function(e){var t=e.refCallback,r=e.text,a=c(e,u),o=f(["visually-hidden-text",a.className]);return n.default.createElement("span",d({ref:t},a,{className:o}),r)};b.propTypes=s,b.defaultProps=p;var y=b;t.default=y},96542:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(this&&this[r]||r);else if(Array.isArray(r))e.push(a.apply(this,r));else if("object"===o)if(r.toString===Object.prototype.toString)for(var l in r)n.call(r,l)&&r[l]&&e.push(this&&this[l]||l);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},37890:function(e,t,r){"use strict";var n=r(19140);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,o,l){if(l!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return r.PropTypes=r,r}},29995:function(e,t,r){e.exports=r(37890)()},19140:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);