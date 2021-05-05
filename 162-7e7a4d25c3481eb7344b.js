(self.webpackChunkorganizer_container=self.webpackChunkorganizer_container||[]).push([[162],{34058:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(15901)),r=n(a(45697)),o=n(a(55281)),u={text:r.default.string,onClick:r.default.func},i=function(e){var t=e.text,a=e.onClick;return l.default.createElement(o.default,{onClick:a,text:t,variant:"neutral"})};i.propTypes=u;var d=i;t.default=d},49616:(e,t,a)=>{"use strict";var n=a(20862);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ThemeContext",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"themeContextShape",{enumerable:!0,get:function(){return l.themeContextShape}});var l=n(a(50026))},40108:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(15901)),r=n(a(45697)),o=n(a(47166)),u=n(a(50026)),i=n(a(68434)),d=n(a(90470)),c=n(a(10664)),s=n(a(73251)),f=n(a(50452)),_=o.default.bind(f.default),v={children:r.default.node,label:r.default.string,toolbar:r.default.element,statusOverlay:r.default.element,activityOverlay:r.default.element},m=function(e){var t=e.children,a=e.label,n=e.toolbar,r=e.statusOverlay,o=e.activityOverlay,f=l.default.useContext(u.default),v=l.default.useContext(c.default),m=v.panelId,p=v.tabId,y=v.label,b=(0,i.default)(),h=b.NotificationBannerProvider,C=b.NotificationBanners,O=l.default.useMemo((function(){var e=[];return r&&e.push({key:"status-overlay",component:r}),o&&e.push({key:"activity-overlay",component:o}),e}),[r,o]),g=a||y;return l.default.createElement("div",{className:_("panel",f.className),role:"none"},l.default.createElement("div",{className:_("panel-header"),role:"none","data-testid":"workspace-content-heading"},l.default.createElement(s.default,{title:g}),n?l.default.createElement("div",{className:_("toolbar","rounded")},n):void 0,l.default.createElement(C,{id:"".concat(m,"-notifications"),label:"Workspace ".concat(g),activeClassName:_("notification-banners-container"),bannerClassName:_("notification-banner","rounded")})),l.default.createElement("div",{role:"none",className:_("panel-content")},l.default.createElement("div",{className:_("panel-overflow",{"disable-overflow":O.length}),role:"tabpanel",tabIndex:"0",id:m,"aria-labelledby":p,"data-application-overflow-container":!0},l.default.createElement(d.default,{overlays:O},l.default.createElement(h,null,t)))))};m.propTypes=v;var p=m;t.default=p},70162:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"WorkspaceContent",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"WorkspaceContext",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"WorkspaceItem",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"WorkspaceContentActivityOverlay",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"WorkspaceContentStatusOverlay",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"WorkspaceContentStatusOverlayButton",{enumerable:!0,get:function(){return c.default}}),t.default=void 0;var l=n(a(31813)),r=n(a(40108)),o=n(a(2184)),u=n(a(55651)),i=n(a(63328)),d=n(a(24473)),c=n(a(60518)),s=l.default;t.default=s},63328:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(15901)),r=n(a(45697)),o=n(a(47166)),u=a(60767),i=n(a(30082)),d=a(49616),c=n(a(69403)),s=o.default.bind(c.default),f={variant:r.default.oneOf(["default","loading"])},_=function(e){var t=e.variant,a=l.default.useContext(d.ThemeContext);return l.default.createElement("div",{className:s("activity-overlay",a.className),role:"status","data-testid":"workspace-content-activity-overlay"},l.default.createElement("div",{className:s("content")},l.default.createElement(i.default,{className:s("icon"),isSpin:!0,height:"36",width:"36"}),"loading"===t?l.default.createElement(u.FormattedMessage,{id:"terraApplication.workspace.activityOverlay.loading"},(function(e){return l.default.createElement("div",{className:s("message")},e)})):void 0))};_.propTypes=f,_.defaultProps={variant:"default"};var v=_;t.default=v},24473:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(15901)),r=n(a(45697)),o=n(a(47166)),u=n(a(32249)),i=a(49616),d=n(a(60518)),c=n(a(46259)),s=o.default.bind(c.default),f={variant:r.default.oneOf(["no-data","no-matching-results","not-authorized","error"]),message:r.default.string,children:function(e,t,a){var n;if(e[t]&&(l.default.Children.forEach(e[t],(function(e){e.type!==d.default&&(n="Invalid prop `".concat(t,"` supplied to `").concat(a,"`. Child must be of type WorkspaceContentStatusOverlayButton."))})),n))return new Error(n);return null}},_=function(e){var t=e.variant,a=e.message,n=e.children,r=l.default.useContext(i.ThemeContext);return l.default.createElement("div",{className:s("status-overlay",r.className),role:"status","data-testid":"workspace-content-status"},l.default.createElement(u.default,{variant:t,message:a},n))};_.propTypes=f;var v=_;t.default=v},60518:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l.default}});var l=n(a(34058))},73251:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(15901)),r=n(a(45697)),o=n(a(47166)),u=n(a(50026)),i=n(a(29270)),d=n(a(14227)),c=a(5471),s=o.default.bind(d.default),f={title:r.default.string},_=function(e){var t=e.title,a=l.default.useContext(u.default),n=(0,c.useDynamicHeading)().level;return l.default.createElement("div",{className:s("header",a.className)},l.default.createElement(i.default,{"aria-level":n,role:"heading",tabIndex:"-1",text:t}),l.default.createElement("div",{className:s("title"),"aria-hidden":"true"},t))};_.propTypes=f;var v=_;t.default=v},50452:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n={"clinical-lowlight-theme":"WorkspaceContent-module__clinical-lowlight-theme___1sz1g","orion-fusion-theme":"WorkspaceContent-module__orion-fusion-theme___2Zwvn",panel:"WorkspaceContent-module__panel___1uDI-","panel-header":"WorkspaceContent-module__panel-header___msx9d","panel-content":"WorkspaceContent-module__panel-content___Entu2","panel-overflow":"WorkspaceContent-module__panel-overflow___SbANk","disable-overflow":"WorkspaceContent-module__disable-overflow___FR2fq",toolbar:"WorkspaceContent-module__toolbar___H9KEI","notification-banners-container":"WorkspaceContent-module__notification-banners-container___3Cqy0","notification-banner":"WorkspaceContent-module__notification-banner___1u_sh",rounded:"WorkspaceContent-module__rounded___1gB2B"}},69403:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n={"clinical-lowlight-theme":"WorkspaceContentActivityOverlay-module__clinical-lowlight-theme___1O3AA","orion-fusion-theme":"WorkspaceContentActivityOverlay-module__orion-fusion-theme___3wufs","activity-overlay":"WorkspaceContentActivityOverlay-module__activity-overlay___1Efnz",content:"WorkspaceContentActivityOverlay-module__content___LjRGv",icon:"WorkspaceContentActivityOverlay-module__icon___3zLgy",message:"WorkspaceContentActivityOverlay-module__message___3QrNI"}},46259:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n={"clinical-lowlight-theme":"WorkspaceContentStatusOverlay-module__clinical-lowlight-theme___268Fk","orion-fusion-theme":"WorkspaceContentStatusOverlay-module__orion-fusion-theme___33QlN","status-overlay":"WorkspaceContentStatusOverlay-module__status-overlay___2Dzwu"}},14227:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n={"clinical-lowlight-theme":"TabHeader-module__clinical-lowlight-theme___2exiA","orion-fusion-theme":"TabHeader-module__orion-fusion-theme___ul6Pa",header:"TabHeader-module__header___R7VsA",title:"TabHeader-module__title___3eKGQ"}},56916:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n={"visually-hidden-text":"VisuallyHiddenText-module__visually-hidden-text___zjRlc"}},29270:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(15901)),l=u(a(45697)),r=u(a(47166)),o=u(a(56916));function u(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=r.default.bind(o.default),s={refCallback:l.default.func,text:l.default.string},f={text:void 0,refCallback:void 0},_=function(e){var t=e.refCallback,a=e.text,l=d(e,["refCallback","text"]),r=c(["visually-hidden-text",l.className]);return n.default.createElement("span",i({ref:t},l,{className:r}),a)};_.propTypes=s,_.defaultProps=f;var v=_;t.default=v}}]);