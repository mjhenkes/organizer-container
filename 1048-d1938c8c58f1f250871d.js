(self.webpackChunkorganizer_container=self.webpackChunkorganizer_container||[]).push([[1048,8042],{42362:(e,a,r)=>{"use strict";var d=r(95318);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=d(r(15901)),n=d(r(45697)),l=d(r(47166)),c=r(5471),i=d(r(77894)),u=l.default.bind(i.default),o={label:n.default.string,children:n.default.node},_=function(e){var a=e.label,r=e.children,d=(0,c.useDynamicHeading)().level;return t.default.createElement("div",{className:u("card")},a&&t.default.createElement("div",{className:u("card-header")},t.default.createElement("div",{className:u("label-container"),role:"heading","aria-level":d},a)),t.default.createElement("div",{className:u("card-body")},t.default.createElement(c.DynamicHeadingProvider,null,r)))};_.propTypes=o;var s=_;a.default=s},5471:(e,a,r)=>{"use strict";var d=r(95318);Object.defineProperty(a,"__esModule",{value:!0}),a.DynamicHeading=a.DynamicHeadingProvider=a.useDynamicHeading=a.default=void 0;var t=d(r(15901)),n=t.default.createContext(1),l=function(){var e=t.default.useContext(n);return{level:Math.min(e,6)}};a.useDynamicHeading=l;a.DynamicHeading=function(e){var a=l().level,r="h".concat(a);return t.default.createElement(r,e)};a.DynamicHeadingProvider=function(e){var a=e.children,r=e.isRoot,d=t.default.useContext(n);return t.default.createElement(n.Provider,{value:r?1:d+1},a)};var c=n;a.default=c},77894:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>d});const d={card:"Card-module__card___2QpCV","card-header":"Card-module__card-header___1McWq","label-container":"Card-module__label-container___2HCU-","action-container":"Card-module__action-container___1pyoz","card-body":"Card-module__card-body___2bT4O"}}}]);