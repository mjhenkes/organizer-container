(self.webpackChunkorganizer_container=self.webpackChunkorganizer_container||[]).push([[1720,942],{20942:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(63038)),s=n(a(15901)),u=n(a(31813)),r=n(a(55651)),o=function(e){var t=e.onSizeChange,a=e.onPresentationStateChange,n=e.onActiveItemChange,o=e.initialActiveItemKey,l=e.children,f=e.id,c=e.isOpen,d=e.onRequestClose,p=e.isPresentedAsOverlay,v=e.sizeScalar,m=e.activeSize,h=e.sizeOptions,z=e.onRequestSizeChange,C=s.default.useState(o),S=(0,i.default)(C,2),g=S[0],y=S[1];return s.default.useEffect((function(){t&&void 0!==v&&t(v)}),[v,t]),s.default.useEffect((function(){a&&a(c)}),[c,a]),s.default.useEffect((function(){n&&n(g)}),[g,n]),s.default.createElement(u.default,{id:f||"test-id",activeItemKey:g,onRequestActivate:function(e,t){y(e)},activeSize:m,sizeOptions:h,onRequestSizeChange:z,onRequestDismiss:d,dismissButtonIsVisible:p},s.default.Children.map(l,(function(e){return s.default.createElement(r.default,{itemKey:e.props.itemKey,label:e.props.label,metaData:e.props.metaData,render:e.props.render})})))};o.propTypes={};var l=o;t.default=l}}]);