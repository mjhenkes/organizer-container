(self.webpackChunkorganizer_container=self.webpackChunkorganizer_container||[]).push([[160],{81506:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},34575:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},93913:e=>{function t(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e},e.exports.default=e.exports,e.exports.__esModule=!0},59713:e=>{e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},67154:e=>{function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,t.apply(this,arguments)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},29754:e=>{function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,t(r)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},2205:(e,t,r)=>{var o=r(99489);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},78585:(e,t,r)=>{var o=r(50008).default,a=r(81506);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?a(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},99489:e=>{function t(r,o){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.default=e.exports,e.exports.__esModule=!0,t(r,o)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},50008:e=>{function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(r)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},27983:(e,t,r)=>{"use strict";var o=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.contextShape=t.default=void 0;var a=r(15901),n=o(r(45697)),i=(0,a.createContext)(),u=n.default.shape({formatMessage:n.default.func});t.contextShape=u;var l=i;t.default=l},29805:(e,t,r)=>{"use strict";var o=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(15901)),n=o(r(45697)),i=r(60767),u=o(r(27983)),l={children:n.default.node,intl:n.default.shape({locale:n.default.string,messages:n.default.shape({}),defaultLocale:n.default.string,formatMessage:n.default.func,formatNumber:n.default.func,formatPlural:n.default.func,formatDate:n.default.func,formatTime:n.default.func,formateRelativeTime:n.default.func})},s=(0,i.injectIntl)((function(e){var t=e.children,r=e.intl;return a.default.createElement(u.default.Provider,{value:r},t)}));s.propTypes=l;var c=s;t.default=c},513:(e,t,r)=>{"use strict";var o=r(95318),a=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ApplicationIntlContext",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"contextShape",{enumerable:!0,get:function(){return n.contextShape}}),Object.defineProperty(t,"ApplicationIntlProvider",{enumerable:!0,get:function(){return i.default}});var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=n?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(o,i,l):o[i]=e[i]}o.default=e,r&&r.set(e,o);return o}(r(27983)),i=o(r(29805));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}},32753:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.contextShape=t.default=void 0;var o=r(15901);t.contextShape={};var a=(0,o.createContext)();t.default=a},87705:(e,t,r)=>{"use strict";var o=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(15901)),n=o(r(10805)),i=o(r(71171)),u=o(r(32753)),l=function(e){var t=e.type,r=e.setInert,o=e.children,l=a.default.useContext(u.default),s=a.default.useRef((0,i.default)());a.default.useLayoutEffect((function(){return function(){l.nodeManager.releaseNode(s.current)}}),[l,t]);var c=l.nodeManager.getNode(s.current,t,r);return c?n.default.createPortal(o,c):null};t.default=l},72677:(e,t,r)=>{"use strict";var o=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ContentLayoutAsList",{enumerable:!0,get:function(){return v.default}}),t.default=void 0;var a=o(r(67154)),n=o(r(15901)),i=o(r(45697)),u=o(r(94184)),l=o(r(47166)),s=r(60767),c=o(r(50026)),d=o(r(29270)),f=o(r(55281)),p=o(r(87705)),m=r(513),g=r(40680),_=o(r(13175)),v=o(r(7134)),h=o(r(29698)),y=l.default.bind(h.default),b={variant:i.default.oneOf(["hazard-high","hazard-medium","hazard-low","error","custom"]).isRequired,dialogTitle:i.default.string,startMessage:i.default.string,endMessage:i.default.string,content:i.default.node,acceptAction:i.default.shape({text:i.default.string,onClick:i.default.func}),rejectAction:i.default.shape({text:i.default.string,onClick:i.default.func}),buttonOrder:i.default.oneOf(["acceptFirst","rejectFirst"]),emphasizedAction:i.default.oneOf(["none","accept","reject"]),custom:i.default.shape({signalWord:i.default.string,iconClassName:i.default.string})},x=function(e){var t=n.default.useContext(c.default),r=n.default.useRef(),o=e.dialogTitle,i=e.startMessage,l=e.endMessage,v=e.content,h=e.acceptAction,b=e.rejectAction,x=e.variant,P=e.buttonOrder,O=e.emphasizedAction,M=e.custom,j=n.default.useContext(m.ApplicationIntlContext);if(n.default.useEffect((function(){(0,g.deferExecution)((function(){"ontouchstart"in window?r.current.querySelector("[data-terra-abstract-modal-begin]").focus():r.current.focus()}),0)}),[]),void 0===h&&void 0===b)throw new Error("Either the `acceptAction` or `rejectAction` props must be provided for Notification dialog");if(void 0===x)throw new Error("The variant must be provided to the Notification dialog");var C="custom"===x?M.signalWord:j.formatMessage({id:"Terra.notification.dialog.".concat(x)}),N=(0,u.default)(y("notification-dialog",t.className)),w=!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform);return n.default.createElement(p.default,{type:"notification-dialog"},n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{"aria-label":C,"aria-labelledby":"notification-dialog-signal-word","aria-describedby":o?"notification-dialog-title":"notification-dialog-signal-word",role:"alertdialog",className:N,style:{zIndex:"2"},tabIndex:w?"-1":"0",ref:r},n.default.createElement(s.FormattedMessage,{id:"Terra.AbstractModal.BeginModalDialog"},(function(e){return n.default.createElement(d.default,{"data-terra-abstract-modal-begin":!0,tabIndex:"-1",text:e})})),n.default.createElement("div",{className:y("notification-dialog-inner-wrapper")},n.default.createElement("div",{className:y("notification-dialog-container"),tabIndex:"0","data-terra-notification-dialog":!0},n.default.createElement("div",{className:y(["floating-header-background",x])}),n.default.createElement("div",{className:y(["header"])},n.default.createElement("div",{className:y(["header-content"])},n.default.createElement(_.default,{variant:x,iconClassName:M.iconClassName}),n.default.createElement("div",{className:y("header-container")},n.default.createElement("div",{id:"notification-dialog-signal-word",className:y("signal-word")},C),n.default.createElement("div",{id:"notification-dialog-title",className:y("title")},o)))),n.default.createElement("div",{className:y("body")},i&&n.default.createElement("div",{className:y("message")},i),v&&n.default.createElement("div",{className:y("message")},v),l&&n.default.createElement("div",{className:y("message")},l)),n.default.createElement("div",{className:y("footer")},function(e,t,r,o){if(!e&&!t)return null;var i=[];if(e){var u="accept"===o?{variant:"emphasis"}:{};i.push(n.default.createElement(f.default,(0,a.default)({},u,{"data-terra-notification-dialog-button":"accept",key:"accept",text:e.text,onClick:e.onClick})))}if(t){var l="reject"===o?{variant:"emphasis"}:{};i.push(n.default.createElement(f.default,(0,a.default)({},l,{"data-terra-notification-dialog-button":"reject",key:"reject",text:t.text,onClick:t.onClick})))}return n.default.createElement("div",{className:y("actions")},"acceptFirst"===r?i:i.reverse())}(h,b,P,O)))),n.default.createElement(s.FormattedMessage,{id:"Terra.AbstractModal.EndModalDialog"},(function(e){return n.default.createElement(d.default,{text:e})})))))};x.propTypes=b,x.defaultProps={buttonOrder:"acceptFirst",emphasizedAction:"none",custom:{}};var P=x;t.default=P},7134:(e,t,r)=>{"use strict";var o=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(15901)),n=o(r(45697)),i=o(r(47166)),u=o(r(50026)),l=o(r(83265)),s=i.default.bind(l.default),c={items:n.default.arrayOf(n.default.string).isRequired},d=function(e){var t=e.items,r=a.default.useContext(u.default);return a.default.createElement("ul",{className:s("list",r.className)},t.map((function(e,t){return a.default.createElement("li",{className:s("list-item"),key:"".concat(e,"-").concat(t)},e)})))};d.propTypes=c;var f=d;t.default=f},13175:(e,t,r)=>{"use strict";var o=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(59713)),n=o(r(15901)),i=o(r(45697)),u=o(r(94184)),l=o(r(47166)),s=o(r(50026)),c=o(r(79481)),d=l.default.bind(c.default),f={variant:i.default.oneOf(["hazard-high","hazard-medium","hazard-low","error","custom"]).isRequired,iconClassName:i.default.string},p=function(e){var t=e.variant,r=e.iconClassName,o=n.default.useContext(s.default);return n.default.createElement("div",{className:d("icon-container",o.className)},n.default.createElement("span",{className:(0,u.default)(d(["icon","".concat(t,"-icon")],(0,a.default)({},"".concat(r),"custom"===t)))}))};p.propTypes=f;var m=p;t.default=m},37373:(e,t,r)=>{"use strict";var o=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.promptRegistrationContextValueShape=t.default=void 0;var a=o(r(15901)),n=o(r(45697)),i=a.default.createContext({isDefaultContextValue:!0,registerPrompt:function(){},unregisterPrompt:function(){}});t.default=i;var u=n.default.shape({isDefaultContextValue:n.default.bool,registerPrompt:n.default.func.isRequired,unregisterPrompt:n.default.func.isRequired});t.promptRegistrationContextValueShape=u},62922:(e,t,r)=>{"use strict";var o=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(34575)),n=o(r(93913)),i=o(r(2205)),u=o(r(78585)),l=o(r(29754)),s=o(r(15901)),c=o(r(45697)),d=o(r(71171)),f=o(r(13578)),p=r(37373);function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=(0,l.default)(e);if(t){var a=(0,l.default)(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return(0,u.default)(this,r)}}var g={description:c.default.string,metaData:c.default.object,promptRegistration:p.promptRegistrationContextValueShape.isRequired},_=function(e){(0,i.default)(r,e);var t=m(r);function r(e){var o;return(0,a.default)(this,r),(o=t.call(this,e)).uuid=(0,d.default)(),o}return(0,n.default)(r,[{key:"componentDidMount",value:function(){var e=this.props,t=e.description,r=e.metaData,o=e.promptRegistration;o.isDefaultContextValue,o.registerPrompt(this.uuid,t,r)}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,r=t.description,o=t.metaData;return r!==e.description||o!==e.metaData}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.description,r=e.metaData;e.promptRegistration.registerPrompt(this.uuid,t,r)}},{key:"componentWillUnmount",value:function(){this.props.promptRegistration.unregisterPrompt(this.uuid)}},{key:"render",value:function(){return null}}]),r}(s.default.Component);_.propTypes=g;var v=(0,f.default)(_);t.default=v},69986:(e,t,r)=>{"use strict";var o=r(95318),a=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(34575)),i=o(r(93913)),u=o(r(81506)),l=o(r(2205)),s=o(r(78585)),c=o(r(29754)),d=o(r(15901)),f=o(r(45697)),p=r(513),m=o(r(72677)),g=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=h(t);if(r&&r.has(e))return r.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=n?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(o,i,u):o[i]=e[i]}o.default=e,r&&r.set(e,o);return o}(r(37373)),_=o(r(13578)),v=o(r(47824));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(h=function(e){return e?r:t})(e)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return(0,s.default)(this,r)}}var b={children:f.default.node,onPromptChange:f.default.func,promptRegistration:g.promptRegistrationContextValueShape.isRequired},x=function(e){(0,l.default)(r,e);var t=y(r);function r(e){var o;return(0,n.default)(this,r),(o=t.call(this,e)).registerPrompt=o.registerPrompt.bind((0,u.default)(o)),o.unregisterPrompt=o.unregisterPrompt.bind((0,u.default)(o)),o.resolvePrompts=o.resolvePrompts.bind((0,u.default)(o)),o.renderNotificationDialog=o.renderNotificationDialog.bind((0,u.default)(o)),o.registeredPrompts={},o.promptProviderValue={registerPrompt:o.registerPrompt,unregisterPrompt:o.unregisterPrompt},o.state={notificationDialogProps:void 0},o}return(0,i.default)(r,[{key:"componentWillUnmount",value:function(){var e=this.props.onPromptChange;e&&e([])}},{key:"registerPrompt",value:function(e,t,o){var a=this.props,n=a.onPromptChange,i=a.promptRegistration;this.registeredPrompts[e]={description:t,metaData:o},n&&n(r.getPromptArray(this.registeredPrompts)),i.registerPrompt(e,t,o)}},{key:"unregisterPrompt",value:function(e){var t=this.props,o=t.onPromptChange,a=t.promptRegistration;this.registeredPrompts[e]&&(delete this.registeredPrompts[e],o&&o(r.getPromptArray(this.registeredPrompts)),a.unregisterPrompt(e))}},{key:"resolvePrompts",value:function(e){var t=this;if(!Object.keys(this.registeredPrompts).length)return Promise.resolve();var o=e||(0,v.default)(this.context);return"function"==typeof o&&(o=o(r.getPromptArray(this.registeredPrompts))),new Promise((function(e,r){t.setState({notificationDialogProps:{dialogTitle:o.dialogTitle,title:o.title,message:o.message,startMessage:o.startMessage,content:o.content,endMessage:o.endMessage,acceptButtonText:o.acceptButtonText,rejectButtonText:o.rejectButtonText,emphasizedAction:o.emphasizedAction,buttonOrder:o.buttonOrder,onAccept:e,onReject:r}})}))}},{key:"renderNotificationDialog",value:function(){var e=this,t=this.state.notificationDialogProps,r=t.dialogTitle,o=t.title,a=t.message,n=t.startMessage,i=t.endMessage,u=t.content,l=t.acceptButtonText,s=t.rejectButtonText,c=t.emphasizedAction,f=t.buttonOrder,p=t.onAccept,g=t.onReject,_={text:l,onClick:function(){e.setState({notificationDialogProps:void 0},p)}},v={text:s,onClick:function(){e.setState({notificationDialogProps:void 0},g)}};return d.default.createElement(m.default,{dialogTitle:r||o,startMessage:n||a,endMessage:i,content:u,acceptAction:_,rejectAction:v,buttonOrder:f,emphasizedAction:c,variant:"hazard-medium"})}},{key:"render",value:function(){var e=this.props.children,t=this.state.notificationDialogProps;return d.default.createElement(g.default.Provider,{value:this.promptProviderValue},e,t?this.renderNotificationDialog():void 0)}}],[{key:"getPromptArray",value:function(e){return Object.keys(e).map((function(t){return e[t]}))}}]),r}(d.default.Component);x.propTypes=b,x.contextType=p.ApplicationIntlContext;var P=(0,_.default)(x);t.default=P},13578:(e,t,r)=>{"use strict";var o=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(67154)),n=o(r(15901)),i=o(r(37373)),u=function(e){var t,r=n.default.forwardRef((function(t,r){return n.default.createElement(i.default.Consumer,null,(function(o){return n.default.createElement(e,(0,a.default)({},t,{ref:r,promptRegistration:o}))}))}));return r.displayName="withPromptRegistration(".concat((t=e).displayName||t.name||"Component",")"),r.WrappedComponent=e,r};t.default=u},47824:(e,t,r)=>{"use strict";var o=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(15901)),n=r(72677);t.default=function(e){return function(t){var r,o;1===t.length?r=e.formatMessage({id:"terraApplication.unsavedChangesPrompt.singlePromptMessage"},{promptDescription:t[0].description}):(r=e.formatMessage({id:"terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro"}),o=a.default.createElement(n.ContentLayoutAsList,{items:t.map((function(e){return e.description}))}));var i=e.formatMessage({id:"terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro"});return{title:e.formatMessage({id:"terraApplication.unsavedChangesPrompt.title"}),startMessage:r,content:o,endMessage:i,buttonOrder:"rejectFirst",emphasizedAction:"reject",acceptButtonText:e.formatMessage({id:"terraApplication.unsavedChangesPrompt.acceptButtonText"}),rejectButtonText:e.formatMessage({id:"terraApplication.unsavedChangesPrompt.rejectButtonText"})}}}},14160:(e,t,r)=>{"use strict";var o=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"UnsavedChangesPromptCheckpoint",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"PromptRegistrationContext",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"getUnsavedChangesPromptOptions",{enumerable:!0,get:function(){return l.default}}),t.unsavedChangesPromptResolutionOptionsShape=t.default=void 0;var a=o(r(45697)),n=o(r(62922)),i=o(r(69986)),u=o(r(37373)),l=o(r(47824)),s=a.default.oneOfType([a.default.shape({title:a.default.string,startMessage:a.default.string,content:a.default.node,endMessage:a.default.string,acceptButtonText:a.default.string,rejectButtonText:a.default.string,emphasizedAction:a.default.oneOf(["accept","reject","none"]),buttonOrder:a.default.oneOf(["acceptFirst","rejectFirst"])}),a.default.func]);t.unsavedChangesPromptResolutionOptionsShape=s;var c=n.default;t.default=c},40680:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.deferExecution=function(e){return setTimeout(e,0)}},83265:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});const o={"clinical-lowlight-theme":"ContentLayoutAsList-module__clinical-lowlight-theme___1-zHn","orion-fusion-theme":"ContentLayoutAsList-module__orion-fusion-theme___26qq-",list:"ContentLayoutAsList-module__list___9RcyQ","list-item":"ContentLayoutAsList-module__list-item___tkzvM"}},29698:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});const o={"clinical-lowlight-theme":"NotificationDialog-module__clinical-lowlight-theme___sR8N0","orion-fusion-theme":"NotificationDialog-module__orion-fusion-theme___2lBUk","notification-dialog":"NotificationDialog-module__notification-dialog___KXc2g","notification-dialog-inner-wrapper":"NotificationDialog-module__notification-dialog-inner-wrapper___2x5sH","notification-dialog-container":"NotificationDialog-module__notification-dialog-container___16CtL","floating-header-background":"NotificationDialog-module__floating-header-background___3F60c","hazard-high":"NotificationDialog-module__hazard-high___25zSL","hazard-medium":"NotificationDialog-module__hazard-medium___2JOrn","hazard-low":"NotificationDialog-module__hazard-low___viSij",error:"NotificationDialog-module__error___26xiy",custom:"NotificationDialog-module__custom___3eBRf",header:"NotificationDialog-module__header___1MInJ","header-content":"NotificationDialog-module__header-content___23ZAK","header-container":"NotificationDialog-module__header-container___1E264","signal-word":"NotificationDialog-module__signal-word___1hs2l",title:"NotificationDialog-module__title___2O7-b",body:"NotificationDialog-module__body___fqlN8",message:"NotificationDialog-module__message___1GrAC",footer:"NotificationDialog-module__footer___3dYgn",actions:"NotificationDialog-module__actions___kTbbv"}},79481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});const o={"clinical-lowlight-theme":"NotificationIcon-module__clinical-lowlight-theme___G1W0l","orion-fusion-theme":"NotificationIcon-module__orion-fusion-theme___RUaOB","icon-container":"NotificationIcon-module__icon-container___11h-V",icon:"NotificationIcon-module__icon___1DD_g","hazard-high-icon":"NotificationIcon-module__hazard-high-icon___2ortk","hazard-medium-icon":"NotificationIcon-module__hazard-medium-icon___3Wzk4","hazard-low-icon":"NotificationIcon-module__hazard-low-icon___3odXO","error-icon":"NotificationIcon-module__error-icon___2mZIC","custom-icon":"NotificationIcon-module__custom-icon___3KwNA"}},56916:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});const o={"visually-hidden-text":"VisuallyHiddenText-module__visually-hidden-text___zjRlc"}},29270:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(r(15901)),a=u(r(45697)),n=u(r(47166)),i=u(r(56916));function u(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.default.bind(i.default),d={refCallback:a.default.func,text:a.default.string},f={text:void 0,refCallback:void 0},p=function(e){var t=e.refCallback,r=e.text,a=s(e,["refCallback","text"]),n=c(["visually-hidden-text",a.className]);return o.default.createElement("span",l({ref:t},a,{className:n}),r)};p.propTypes=d,p.defaultProps=f;var m=p;t.default=m},45327:e=>{for(var t=[],r=0;r<256;++r)t[r]=(r+256).toString(16).substr(1);e.exports=function(e,r){var o=r||0,a=t;return[a[e[o++]],a[e[o++]],a[e[o++]],a[e[o++]],"-",a[e[o++]],a[e[o++]],"-",a[e[o++]],a[e[o++]],"-",a[e[o++]],a[e[o++]],"-",a[e[o++]],a[e[o++]],a[e[o++]],a[e[o++]],a[e[o++]],a[e[o++]]].join("")}},85217:e=>{var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var r=new Uint8Array(16);e.exports=function(){return t(r),r}}else{var o=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),o[t]=e>>>((3&t)<<3)&255;return o}}},71171:(e,t,r)=>{var o=r(85217),a=r(45327);e.exports=function(e,t,r){var n=t&&r||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||o)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var u=0;u<16;++u)t[n+u]=i[u];return t||a(i)}}}]);