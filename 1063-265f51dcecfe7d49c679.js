(self.webpackChunkorganizer_container=self.webpackChunkorganizer_container||[]).push([[1063,82,1991,74,4167,9311],{38695:(e,t,n)=>{"use strict";var r=n(95318),a=n(20862);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(n(15901)),o=r(n(45697)),l=r(n(48829)),s=r(n(87373)),i=n(14160),d=n(28161),c={children:o.default.node,unsavedChangesPromptResolutionOptions:i.unsavedChangesPromptResolutionOptionsShape},f=function(e){var t=e.children,n=e.unsavedChangesPromptResolutionOptions,r=(0,u.useContext)(l.default),a=(0,u.useRef)(),o=(0,u.useRef)(),c=(0,u.useMemo)((function(){return s.default.clone(r,{registerDismissCheck:function(e){return o.current=e,Promise.resolve()}})}),[r]);return(0,u.useEffect)((function(){var e=r.goBack||r.closeDisclosure;return(0,d.addCallback)(e),function(){(0,d.removeCallback)(e)}}),[]),(0,u.useEffect)((function(){r.registerDismissCheck((function(){return o.current?o.current():new Promise((function(e,t){a.current?a.current.resolvePrompts(n).then(e,t):e()}))}))}),[r,n]),u.default.createElement(l.default.Provider,{value:c},u.default.createElement(i.UnsavedChangesPromptCheckpoint,{ref:a},t))};f.propTypes=c;var p=f;t.default=p},62842:(e,t,n)=>{"use strict";var r=n(20862),a=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.disclosureType=void 0;var u=a(n(319)),o=a(n(34575)),l=a(n(93913)),s=a(n(81506)),i=a(n(2205)),d=a(n(78585)),c=a(n(29754)),f=a(n(15901)),p=a(n(45697)),v=a(n(50026)),h=a(n(17092)),m=a(n(17096)),y=r(n(71377)),g=n(14160),C=a(n(38695));function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,d.default)(this,n)}}var R="modal";t.disclosureType=R;var b={children:p.default.node,disclosureAccessory:p.default.element,unsavedChangesPromptResolutionOptions:g.unsavedChangesPromptResolutionOptionsShape},M=function(e){(0,i.default)(n,e);var t=P(n);function n(e){var r;return(0,o.default)(this,n),(r=t.call(this,e)).renderModals=r.renderModals.bind((0,s.default)(r)),r}return(0,l.default)(n,[{key:"renderModals",value:function(e){var t=this.props;t.children,t.disclosureAccessory;return f.default.createElement(f.default.Fragment,null,e.children.components,function t(n){var r,a;if(n&&n.length){var u=n.shift(),o=e.disclosureComponentData[u];return f.default.createElement(m.default,{title:null==o||null===(r=o.headerAdapterData)||void 0===r?void 0:r.title,toolbar:null!=o&&null!==(a=o.headerAdapterData)&&void 0!==a&&a.collapsibleMenuView?f.default.createElement(h.default,null,o.headerAdapterData.collapsibleMenuView):void 0,size:e.disclosure.size,onRequestClose:e.dismissPresentedComponent,dangerouslyDisableUnsavedChangesPromptHandling:!0},o.component,n.length?t(n):void 0)}}((0,u.default)(e.disclosureComponentKeys)))}},{key:"render",value:function(){var e=this.props,t=e.unsavedChangesPromptResolutionOptions,n=e.children;return f.default.createElement(y.default,{supportedDisclosureTypes:[R],render:this.renderModals,withDisclosureContainer:function(e){return f.default.createElement(C.default,{unsavedChangesPromptResolutionOptions:t},e)},trapNestedDisclosureRequests:!0},n)}}]),n}(f.default.Component);M.propTypes=b,M.contextType=v.default;var O=M;t.default=O},20331:(e,t,n)=>{"use strict";var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(62842)).default;t.default=a},30082:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(15901)),a=u(n(99139));function u(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M24 0a3.8 3.8 0 11-3.8 3.8A3.8 3.8 0 0124 0zm0 40.4a3.8 3.8 0 11-3.8 3.8 3.8 3.8 0 013.8-3.8zm20.2-20.2a3.8 3.8 0 11-3.8 3.8 3.8 3.8 0 013.8-3.8zm-40.4 0A3.8 3.8 0 110 24a3.8 3.8 0 013.8-3.8zM38.3 5.9a3.8 3.8 0 11-3.8 3.8 3.8 3.8 0 013.8-3.8zM9.7 34.5a3.8 3.8 0 11-3.8 3.8 3.8 3.8 0 013.8-3.8zm0-28.6a3.8 3.8 0 11-3.8 3.8 3.8 3.8 0 013.8-3.8zm28.6 28.6a3.8 3.8 0 11-3.8 3.8 3.8 3.8 0 013.8-3.8z"}))};l.displayName="IconSpinner",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isSpin:!0};var s=l;t.default=s}}]);