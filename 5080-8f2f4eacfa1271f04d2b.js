(self.webpackChunkorganizer_container=self.webpackChunkorganizer_container||[]).push([[5080,475,1414],{67228:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.default=e.exports,e.exports.__esModule=!0},22858:e=>{e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},81506:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},34575:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},93913:e=>{function t(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e},e.exports.default=e.exports,e.exports.__esModule=!0},29754:e=>{function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,t(r)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},2205:(e,t,r)=>{var o=r(99489);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},95318:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},20862:(e,t,r)=>{var o=r(50008).default;function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=u?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r},e.exports.default=e.exports,e.exports.__esModule=!0},13884:e=>{e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],o=!0,n=!1,u=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);o=!0);}catch(e){n=!0,u=e}finally{try{o||null==s.return||s.return()}finally{if(n)throw u}}return r}},e.exports.default=e.exports,e.exports.__esModule=!0},80521:e=>{e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},78585:(e,t,r)=>{var o=r(50008).default,n=r(81506);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?n(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},99489:e=>{function t(r,o){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.default=e.exports,e.exports.__esModule=!0,t(r,o)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},63038:(e,t,r)=>{var o=r(22858),n=r(13884),u=r(60379),a=r(80521);e.exports=function(e,t){return o(e)||n(e,t)||u(e,t)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},50008:e=>{function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(r)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},60379:(e,t,r)=>{var o=r(67228);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},83080:(e,t,r)=>{"use strict";var o=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(34575)),u=o(r(93913)),a=o(r(2205)),s=o(r(78585)),f=o(r(29754)),l=o(r(15901)),p=o(r(45697)),c=o(r(35022));function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=(0,f.default)(e);if(t){var n=(0,f.default)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return(0,s.default)(this,r)}}var d={onCatchError:p.default.func,children:p.default.node},y=function(e){(0,a.default)(r,e);var t=i(r);function r(e){var o;return(0,n.default)(this,r),(o=t.call(this,e)).state={error:void 0},o}return(0,u.default)(r,[{key:"componentDidCatch",value:function(e){if(c.default.error(e),!this.props.onCatchError)throw e;this.props.onCatchError(e)}},{key:"render",value:function(){return this.state.error?null:this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{error:e}}}]),r}(l.default.Component);y.propTypes=d;var x=y;t.default=x},75080:(e,t,r)=>{"use strict";var o=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(63038)),u=o(r(15901)),a=o(r(45697)),s=o(r(83080)),f=function(e){var t=e.children,r=e.onMount;return u.default.useLayoutEffect((function(){return r(!0),function(){return r(!1)}}),[r]),t||u.default.createElement("div",null)};f.propTypes={onMount:a.default.func,children:a.default.node};var l=function(e){var t=e.onLoadStart,r=e.onLoadEnd,o=e.onError,a=e.fallback,l=e.children,p=u.default.useState(!1),c=(0,n.default)(p,2),i=c[0],d=c[1],y=u.default.useRef(!1);return u.default.useEffect((function(){t&&i&&!y.current&&(y.current=!0,t())}),[t,i]),u.default.useEffect((function(){r&&!i&&y.current&&r()}),[r,i]),u.default.createElement(s.default,{onCatchError:function(e){o&&o(e)}},u.default.createElement(u.default.Suspense,{fallback:u.default.createElement(f,{onMount:d},a)},l))};t.default=l},35022:(e,t,r)=>{"use strict";var o=r(20862);Object.defineProperty(t,"__esModule",{value:!0});var n={};Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u.default}});var u=o(r(57307));Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(n,e)||e in t&&t[e]===u[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}}))}))},57307:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initializeLogger=t.default=void 0;var r=function(){},o={info:r,warn:r,error:function(){var e;return(e=console).error.apply(e,arguments)}};t.initializeLogger=function(e){var t=e.onInfo,r=e.onWarn,n=e.onError;o.info=t||o.info,o.warn=r||o.warn,o.error=n||o.error};var n=o;t.default=n},92703:(e,t,r)=>{"use strict";var o=r(50414);function n(){}function u(){}u.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,u,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:n};return r.PropTypes=r,r}},45697:(e,t,r)=>{e.exports=r(92703)()},50414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);