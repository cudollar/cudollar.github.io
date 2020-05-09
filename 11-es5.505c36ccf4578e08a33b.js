function _createForOfIteratorHelper(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=_unsupportedIterableToArray2(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,a=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){i=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(i)throw o}}}}function _unsupportedIterableToArray2(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray2(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray2(e,t):void 0}}function _arrayLikeToArray2(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function asyncGeneratorStep(e,t,r,n,o,a,i){try{var s=e[a](i),u=s.value}catch(c){return void r(c)}s.done?t(u):Promise.resolve(u).then(n,o)}function _asyncToGenerator2(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){asyncGeneratorStep(a,n,o,i,s,"next",e)}function s(e){asyncGeneratorStep(a,n,o,i,s,"throw",e)}i(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _createSuper(e){return function(){var t,r=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var n=_getPrototypeOf(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"1BiQ":function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return c}));var n=r("1c9+"),o=r("9oXm"),a=r("vULT"),i=r("qPxQ"),s=function(e){return e.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")},u=[],c=function(t){_inherits(l,t);var r,o,c=_createSuper(l);function l(){var e;return _classCallCheck(this,l),(e=c.call(this)).scrambleKey=void 0,e.unwrap=!0,u.push(_assertThisInitialized(e)),e}return _createClass(l,null,[{key:"open",value:(r=_asyncToGenerator2(regeneratorRuntime.mark((function e(t){var r=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.length>1&&void 0!==r[1]&&r[1],e.abrupt("return",new l);case 2:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})}]),_createClass(l,[{key:"exchange",value:(o=_asyncToGenerator2(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,function(t,r,o,i){var u=function(t,r){for(var n=e.alloc(t.length),o=0;o<t.length;o++)n[o]=t[o]^r[o%r.length];return n}(t,o),c=e.from("0000000000000000000000000000000000000000000000000000000000000000","hex"),l={version:"U2F_V2",keyHandle:s(u.toString("base64")),challenge:s(c.toString("base64")),appId:location.origin};return Object(a.a)("apdu","=> "+t.toString("hex")),Object(n.sign)(l,r/1e3).then((function(t){var r,n=t.signatureData;if("string"==typeof n){var o,s=e.from((r=n).replace(/-/g,"+").replace(/_/g,"/")+"==".substring(0,3*r.length%4),"base64");return o=i?s.slice(5):s,Object(a.a)("apdu","<= "+o.toString("hex")),o}throw t}))}(r,this.exchangeTimeout,this.scrambleKey,this.unwrap);case 3:return t.abrupt("return",t.sent);case 6:throw t.prev=6,t.t0=t.catch(0),"object"==typeof t.t0.metaData?(5===t.t0.metaData.code&&(u.forEach((function(e){return e.emit("disconnect")})),u=[]),o=t.t0,c="Failed to sign with Ledger device: U2F "+t.t0.metaData.type,l="U2F_"+t.t0.metaData.code,p=void 0,(p=new i.c(c,l)).originalError=o,p):t.t0;case 9:case"end":return t.stop()}var o,c,l,p}),t,this,[[0,6]])}))),function(e){return o.apply(this,arguments)})},{key:"setScrambleKey",value:function(t){this.scrambleKey=e.from(t,"ascii")}},{key:"setUnwrap",value:function(e){this.unwrap=e}},{key:"close",value:function(){return Promise.resolve()}}]),l}(o.a);c.isSupported=n.isSupported,c.list=function(){return Object(n.isSupported)().then((function(e){return e?[null]:[]}))},c.listen=function(e){var t=!1;return Object(n.isSupported)().then((function(r){t||(r?(e.next({type:"add",descriptor:null}),e.complete()):e.error(new i.c("U2F browser support is needed for Ledger. Please use Chrome, Opera or Firefox with a U2F extension. Also make sure you're on an HTTPS connection","U2FNotSupported")))})),{unsubscribe:function(){t=!0}}}}).call(this,r("tjlA").Buffer)},"1c9+":function(e,t,r){"use strict";e.exports=r("d5mW")},"9oXm":function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return i}));var n=r("+qE3"),o=r.n(n),a=r("qPxQ"),i=function(){function t(){var r=this;_classCallCheck(this,t),this.exchangeTimeout=3e4,this.unresponsiveTimeout=15e3,this._events=new o.a,this.send=function(){var t=_asyncToGenerator2(regeneratorRuntime.mark((function t(n,o,i,s){var u,c,l,p,f=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u=f.length>4&&void 0!==f[4]?f[4]:e.alloc(0),c=f.length>5&&void 0!==f[5]?f[5]:[a.b.OK],!(u.length>=256)){t.next=4;break}throw new a.c("data.length exceed 256 bytes limit. Got: "+u.length,"DataLengthTooBig");case 4:return t.next=6,r.exchange(e.concat([e.from([n,o,i,s]),e.from([u.length]),u]));case 6:if(l=t.sent,p=l.readUInt16BE(l.length-2),c.some((function(e){return e===p}))){t.next=10;break}throw new a.e(p);case 10:return t.abrupt("return",l);case 11:case"end":return t.stop()}}),t)})));return function(e,r,n,o){return t.apply(this,arguments)}}(),this.exchangeBusyPromise=void 0,this.exchangeAtomicImpl=function(){var e=_asyncToGenerator2(regeneratorRuntime.mark((function e(t){var n,o,i,s,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.exchangeBusyPromise){e.next=2;break}throw new a.d("An action was already pending on the Ledger device. Please deny or reconnect.");case 2:return o=new Promise((function(e){n=e})),r.exchangeBusyPromise=o,i=!1,s=setTimeout((function(){i=!0,r.emit("unresponsive")}),r.unresponsiveTimeout),e.prev=6,e.next=9,t();case 9:return u=e.sent,e.abrupt("return",(i&&r.emit("responsive"),u));case 11:return e.prev=11,clearTimeout(s),n&&n(),r.exchangeBusyPromise=null,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[6,,11,14]])})));return function(t){return e.apply(this,arguments)}}(),this._appAPIlock=null}return _createClass(t,[{key:"exchange",value:function(e){throw new Error("exchange not implemented")}},{key:"setScrambleKey",value:function(e){}},{key:"close",value:function(){return Promise.resolve()}},{key:"on",value:function(e,t){this._events.on(e,t)}},{key:"off",value:function(e,t){this._events.removeListener(e,t)}},{key:"emit",value:function(e){for(var t,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];(t=this._events).emit.apply(t,[e].concat(n))}},{key:"setDebugMode",value:function(){console.warn("setDebugMode is deprecated. use @ledgerhq/logs instead. No logs are emitted in this anymore.")}},{key:"setExchangeTimeout",value:function(e){this.exchangeTimeout=e}},{key:"setExchangeUnresponsiveTimeout",value:function(e){this.unresponsiveTimeout=e}},{key:"decorateAppAPIMethods",value:function(e,t,r){var n,o=_createForOfIteratorHelper(t);try{for(o.s();!(n=o.n()).done;){var a=n.value;e[a]=this.decorateAppAPIMethod(a,e[a],e,r)}}catch(i){o.e(i)}finally{o.f()}}},{key:"decorateAppAPIMethod",value:function(e,t,r,n){var o=this;return(_asyncToGenerator2(regeneratorRuntime.mark((function i(){var s,u,c,l,p=arguments;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!(s=o._appAPIlock)){i.next=3;break}return i.abrupt("return",Promise.reject(new a.c("Ledger Device is busy (lock "+s+")","TransportLocked")));case 3:for(i.prev=3,u=p.length,c=new Array(u),l=0;l<u;l++)c[l]=p[l];return o._appAPIlock=e,o.setScrambleKey(n),i.next=9,t.apply(r,c);case 9:return i.abrupt("return",i.sent);case 10:return i.prev=10,o._appAPIlock=null,i.finish(10);case 13:case"end":return i.stop()}}),i,null,[[3,,10,13]])}))))}}],[{key:"create",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,r=arguments.length>1?arguments[1]:void 0;return new Promise((function(n,o){var i=!1,s=e.listen({next:function(r){i=!0,s&&s.unsubscribe(),u&&clearTimeout(u),e.open(r.descriptor,t).then(n,o)},error:function(e){u&&clearTimeout(u),o(e)},complete:function(){u&&clearTimeout(u),i||o(new a.c(e.ErrorMessage_NoDeviceFound,"NoDeviceFound"))}}),u=r?setTimeout((function(){s.unsubscribe(),o(new a.c(e.ErrorMessage_ListenTimeout,"ListenTimeout"))}),r):null}))}}]),t}();i.isSupported=void 0,i.list=void 0,i.listen=void 0,i.open=void 0,i.ErrorMessage_ListenTimeout="No Ledger device found (timeout)",i.ErrorMessage_NoDeviceFound="No Ledger device found"}).call(this,r("tjlA").Buffer)},HRdN:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return s}));var n=r("pn0g"),o=r("qPxQ");function a(t){return e.from(t.startsWith("0x")?t.slice(2):t,"hex")}function i(e){return e?a(e):null}r("kB5k");var s=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"w0w";_classCallCheck(this,t),this.transport=void 0,this.transport=e,e.decorateAppAPIMethods(this,["getAddress","provideERC20TokenInformation","signTransaction","signPersonalMessage","getAppConfiguration","starkGetPublicKey","starkSignOrder","starkSignTransfer","starkProvideQuantum"],r)}return _createClass(t,[{key:"getAddress",value:function(t,r,o){var a=Object(n.b)(t),i=e.alloc(1+4*a.length);return i[0]=a.length,a.forEach((function(e,t){i.writeUInt32BE(e,1+4*t)})),this.transport.send(224,2,r?1:0,o?1:0,i).then((function(e){var t={},r=e[0],n=e[1+r];return t.publicKey=e.slice(1,1+r).toString("hex"),t.address="0x"+e.slice(1+r+1,1+r+1+n).toString("ascii"),o&&(t.chainCode=e.slice(1+r+1+n,1+r+1+n+32).toString("hex")),t}))}},{key:"provideERC20TokenInformation",value:function(e){var t=e.data;return this.transport.send(224,10,0,0,t).then((function(){return!0}),(function(e){if(e&&27904===e.statusCode)return!1;throw e}))}},{key:"signTransaction",value:function(t,r){for(var a,i=this,s=Object(n.b)(t),u=0,c=e.from(r,"hex"),l=[],p=function(){var t=0===u?149-4*s.length:150,r=u+t>c.length?c.length-u:t,n=e.alloc(0===u?1+4*s.length+r:r);0===u?(n[0]=s.length,s.forEach((function(e,t){n.writeUInt32BE(e,1+4*t)})),c.copy(n,1+4*s.length,u,u+r)):c.copy(n,0,u,u+r),l.push(n),u+=r};u!==c.length;)p();return Object(n.a)(l,(function(e,t){return i.transport.send(224,4,0===t?0:128,0,e).then((function(e){a=e}))})).then((function(){return{v:a.slice(0,1).toString("hex"),r:a.slice(1,33).toString("hex"),s:a.slice(33,65).toString("hex")}}),(function(e){throw function(e){return e&&27264===e.statusCode?new o.a("Please enable Contract data on the Ethereum app Settings"):e}(e)}))}},{key:"getAppConfiguration",value:function(){return this.transport.send(224,6,0,0).then((function(e){var t={};return t.arbitraryDataEnabled=1&e[0],t.erc20ProvisioningNecessary=2&e[0],t.starkEnabled=4&e[0],t.version=e[1]+"."+e[2]+"."+e[3],t}))}},{key:"signPersonalMessage",value:function(t,r){for(var o,a=this,i=Object(n.b)(t),s=0,u=e.from(r,"hex"),c=[],l=function(){var t=0===s?149-4*i.length-4:150,r=s+t>u.length?u.length-s:t,n=e.alloc(0===s?1+4*i.length+4+r:r);0===s?(n[0]=i.length,i.forEach((function(e,t){n.writeUInt32BE(e,1+4*t)})),n.writeUInt32BE(u.length,1+4*i.length),u.copy(n,1+4*i.length+4,s,s+r)):u.copy(n,0,s,s+r),c.push(n),s+=r};s!==u.length;)l();return Object(n.a)(c,(function(e,t){return a.transport.send(224,8,0===t?0:128,0,e).then((function(e){o=e}))})).then((function(){return{v:o[0],r:o.slice(1,33).toString("hex"),s:o.slice(33,65).toString("hex")}}))}},{key:"starkGetPublicKey",value:function(t,r){var o=Object(n.b)(t),a=e.alloc(1+4*o.length);return a[0]=o.length,o.forEach((function(e,t){a.writeUInt32BE(e,1+4*t)})),this.transport.send(240,2,r?1:0,0,a).then((function(e){return e.slice(0,e.length-2)}))}},{key:"starkSignOrder",value:function(t,r,o,a,s,u,c,l,p,f,d){var h=i(r),g=i(a),v=Object(n.b)(t),m=e.alloc(1+4*v.length+20+32+20+32+4+4+8+8+4+4,0),y=0;return m[0]=v.length,v.forEach((function(e,t){m.writeUInt32BE(e,1+4*t)})),y=1+4*v.length,h&&h.copy(m,y),y+=20,e.from(o.toString(16).padStart(64,"0"),"hex").copy(m,y),y+=32,g&&g.copy(m,y),y+=20,e.from(s.toString(16).padStart(64,"0"),"hex").copy(m,y),y+=32,m.writeUInt32BE(u,y),y+=4,m.writeUInt32BE(c,y),y+=4,e.from(l.toString(16).padStart(16,"0"),"hex").copy(m,y),y+=8,e.from(p.toString(16).padStart(16,"0"),"hex").copy(m,y),y+=8,m.writeUInt32BE(f,y),y+=4,m.writeUInt32BE(d,y),this.transport.send(240,4,1,0,m).then((function(e){return{r:e.slice(1,33).toString("hex"),s:e.slice(33,65).toString("hex")}}))}},{key:"starkSignTransfer",value:function(t,r,o,s,u,c,l,p,f){var d=i(r),h=a(s),g=Object(n.b)(t),v=e.alloc(1+4*g.length+20+32+32+4+4+8+4+4,0),m=0;return v[0]=g.length,g.forEach((function(e,t){v.writeUInt32BE(e,1+4*t)})),m=1+4*g.length,d&&d.copy(v,m),m+=20,e.from(o.toString(16).padStart(64,"0"),"hex").copy(v,m),m+=32,h.copy(v,m),m+=32,v.writeUInt32BE(u,m),m+=4,v.writeUInt32BE(c,m),m+=4,e.from(l.toString(16).padStart(16,"0"),"hex").copy(v,m),m+=8,v.writeUInt32BE(p,m),m+=4,v.writeUInt32BE(f,m),this.transport.send(240,4,2,0,v).then((function(e){return{r:e.slice(1,33).toString("hex"),s:e.slice(33,65).toString("hex")}}))}},{key:"starkProvideQuantum",value:function(t,r){var n=i(t),o=e.alloc(52,0);return n&&n.copy(o,0),e.from(r.toString(16).padStart(64,"0"),"hex").copy(o,20),this.transport.send(240,8,0,0,o).then((function(){return!0}),(function(e){if(e&&27904===e.statusCode)return!1;throw e}))}}]),t}()}).call(this,r("tjlA").Buffer)},adUY:function(e,t,r){"use strict";var n=n||{};e.exports=n,n.EXTENSION_ID="kmendfapggjehodndflmmgagdbamhnfd",n.MessageTypes={U2F_REGISTER_REQUEST:"u2f_register_request",U2F_SIGN_REQUEST:"u2f_sign_request",U2F_REGISTER_RESPONSE:"u2f_register_response",U2F_SIGN_RESPONSE:"u2f_sign_response"},n.ErrorCodes={OK:0,OTHER_ERROR:1,BAD_REQUEST:2,CONFIGURATION_UNSUPPORTED:3,DEVICE_INELIGIBLE:4,TIMEOUT:5},n.disconnect=function(){n.port_&&n.port_.port_&&(n.port_.port_.disconnect(),n.port_=null)},n.getMessagePort=function(e){"undefined"!=typeof chrome&&chrome.runtime?chrome.runtime.sendMessage(n.EXTENSION_ID,{type:n.MessageTypes.U2F_SIGN_REQUEST,signRequests:[]},(function(){chrome.runtime.lastError?n.getIframePort_(e):n.getChromeRuntimePort_(e)})):n.getIframePort_(e)},n.getChromeRuntimePort_=function(e){var t=chrome.runtime.connect(n.EXTENSION_ID,{includeTlsChannelId:!0});setTimeout((function(){e(null,new n.WrappedChromeRuntimePort_(t))}),0)},n.WrappedChromeRuntimePort_=function(e){this.port_=e},n.WrappedChromeRuntimePort_.prototype.postMessage=function(e){this.port_.postMessage(e)},n.WrappedChromeRuntimePort_.prototype.addEventListener=function(e,t){var r=e.toLowerCase();"message"==r||"onmessage"==r?this.port_.onMessage.addListener((function(e){t({data:e})})):console.error("WrappedChromeRuntimePort only supports onMessage")},n.getIframePort_=function(e){var t="chrome-extension://"+n.EXTENSION_ID,r=document.createElement("iframe");r.src=t+"/u2f-comms.html",r.setAttribute("style","display:none"),document.body.appendChild(r);var o=!1,a=new MessageChannel;a.port1.addEventListener("message",(function t(r){"ready"==r.data?(a.port1.removeEventListener("message",t),o||(o=!0,e(null,a.port1))):console.error('First event on iframe port was not "ready"')})),a.port1.start(),r.addEventListener("load",(function(){r.contentWindow.postMessage("init",t,[a.port2])})),setTimeout((function(){o||(o=!0,e(new Error("IFrame extension not supported")))}),200)},n.EXTENSION_TIMEOUT_SEC=30,n.port_=null,n.waitingForPort_=[],n.reqCounter_=0,n.callbackMap_={},n.getPortSingleton_=function(e){n.port_?e(null,n.port_):(0==n.waitingForPort_.length&&n.getMessagePort((function(e,t){for(e||(n.port_=t,n.port_.addEventListener("message",n.responseHandler_));n.waitingForPort_.length;)n.waitingForPort_.shift()(e,t)})),n.waitingForPort_.push(e))},n.responseHandler_=function(e){var t=e.data,r=t.requestId;if(r&&n.callbackMap_[r]){var o=n.callbackMap_[r];delete n.callbackMap_[r],o(null,t.responseData)}else console.error("Unknown or missing requestId in response.")},n.isSupported=function(e){n.getPortSingleton_((function(t,r){e(!t)}))},n.sign=function(e,t,r){n.getPortSingleton_((function(o,a){if(o)return t(o);var i=++n.reqCounter_;n.callbackMap_[i]=t,a.postMessage({type:n.MessageTypes.U2F_SIGN_REQUEST,signRequests:e,timeoutSeconds:void 0!==r?r:n.EXTENSION_TIMEOUT_SEC,requestId:i})}))},n.register=function(e,t,r,o){n.getPortSingleton_((function(a,i){if(a)return r(a);var s=++n.reqCounter_;n.callbackMap_[s]=r,i.postMessage({type:n.MessageTypes.U2F_REGISTER_REQUEST,signRequests:t,registerRequests:e,timeoutSeconds:void 0!==o?o:n.EXTENSION_TIMEOUT_SEC,requestId:s})}))}},d5mW:function(e,t,r){"use strict";(function(t){e.exports=c;var n=r("adUY"),o="undefined"!=typeof navigator&&!!navigator.userAgent,a=o&&navigator.userAgent.match(/Safari\//)&&!navigator.userAgent.match(/Chrome\//),i=o&&navigator.userAgent.match(/Edge\/1[2345]/),s=null;function u(e){return s||(s=new e((function(e,t){function r(){e({u2f:null,native:!0})}return o?a?r():(void 0!==window.u2f&&"function"==typeof window.u2f.sign&&e({u2f:window.u2f,native:!0}),i?r():"http:"===location.protocol?r():"undefined"==typeof MessageChannel?r():void n.isSupported((function(t){t?e({u2f:n,native:!1}):r()}))):r()}))),s}function c(e){return{isSupported:f.bind(e),ensureSupport:h.bind(e),register:g.bind(e),sign:v.bind(e),ErrorCodes:c.ErrorCodes,ErrorNames:c.ErrorNames}}function l(e,t){var r=null!=t?t.errorCode:1,n=c.ErrorNames[""+r],o=new Error(e);return o.metaData={type:n,code:r},o}function p(e,t){var r={};return r.promise=new e((function(e,n){r.resolve=e,r.reject=n,t.then(e,n)})),r.promise.cancel=function(t,n){u(e).then((function(e){n&&!e.native&&e.u2f.disconnect(),r.reject(l(t,{errorCode:-1}))}))},r}function f(){return u(this).then((function(e){return!!e.u2f}))}function d(e){if(!e.u2f){if("http:"===location.protocol)throw new Error("U2F isn't supported over http, only https");throw new Error("U2F not supported")}}function h(){return u(this).then(d)}function g(e,t,r){var n=this;return Array.isArray(e)||(e=[e]),"number"==typeof t&&void 0===r&&(r=t,t=null),t||(t=[]),p(n,u(n).then((function(o){d(o);var a=o.native,i=o.u2f;return new n((function(n,o){a?i.register(e[0].appId,e,t,(function(e){e.errorCode?o(l("Registration failed",e)):(delete e.errorCode,n(e))}),r):i.register(e,t,(function(e,t){e?o(e):t.errorCode?o(l("Registration failed",t)):n(t)}),r)}))}))).promise}function v(e,t){var r=this;return Array.isArray(e)||(e=[e]),p(r,u(r).then((function(n){d(n);var o=n.native,a=n.u2f;return new r((function(r,n){o?a.sign(e[0].appId,e[0].challenge,e,(function(e){e.errorCode?n(l("Sign failed",e)):(delete e.errorCode,r(e))}),t):a.sign(e,(function(e,t){e?n(e):t.errorCode?n(l("Sign failed",t)):r(t)}),t)}))}))).promise}function m(e){c[e]=function(){if(!t.Promise)throw new Error("The platform doesn't natively support promises");var r=[].slice.call(arguments);return c(t.Promise)[e].apply(null,r)}}c.ErrorCodes={CANCELLED:-1,OK:0,OTHER_ERROR:1,BAD_REQUEST:2,CONFIGURATION_UNSUPPORTED:3,DEVICE_INELIGIBLE:4,TIMEOUT:5},c.ErrorNames={"-1":"CANCELLED",0:"OK",1:"OTHER_ERROR",2:"BAD_REQUEST",3:"CONFIGURATION_UNSUPPORTED",4:"DEVICE_INELIGIBLE",5:"TIMEOUT"},m("isSupported"),m("ensureSupport"),m("register"),m("sign")}).call(this,r("yLpj"))},eTky:function(e,t,r){"use strict";r.r(t),r("f4g2"),r("WPTD"),r("Rlsf"),r("EqmL"),r("cC/c");var n=r("Qytd"),o=(r("vUa2"),r("tnHP"),r("tjlA")),a=r.n(o),i=r("jSND"),s=r("1BiQ"),u=r("HRdN");function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==s.return||s.return()}finally{if(o)throw a}}return r}}(e,t)||p(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||p(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t,r,n,o,a,i){try{var s=e[a](i),u=s.value}catch(c){return void r(c)}s.done?t(u):Promise.resolve(u).then(n,o)}function h(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){d(a,n,o,i,s,"next",e)}function s(e){d(a,n,o,i,s,"throw",e)}i(void 0)}))}}function g(e){return v.apply(this,arguments)}function v(){return(v=h(regeneratorRuntime.mark((function e(t){var r,o,p,f,d,g,v,m,y,E,_,w,b,T,S,I,R,A,O,N,C,x,k,P,U,D,L,M,B,F,j,G,q;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(q=function(){return(q=h(regeneratorRuntime.mark((function e(t){var n,o,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l(v.values())[0],e.prev=1,(o=new i.Transaction(t,{chain:d(r)})).raw[6]=a.a.Buffer.from([r]),o.raw[7]=a.a.Buffer.from([]),o.raw[8]=a.a.Buffer.from([]),e.next=8,b.signTransaction(n,o.serialize().toString("hex"));case 8:return o.v=a.a.Buffer.from((s=e.sent).v,"hex"),o.r=a.a.Buffer.from(s.r,"hex"),o.s=a.a.Buffer.from(s.s,"hex"),e.abrupt("return","0x".concat(o.serialize().toString("hex")));case 15:throw e.prev=15,e.t0=e.catch(1),e.t0;case 18:return e.prev=18,w.close(),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[1,15,18,21]])})))).apply(this,arguments)},G=function(e){return q.apply(this,arguments)},j=function(e){return new Promise((function(t,r){_.sendAsync({jsonrpc:"2.0",method:"eth_getBalance",params:[e,"latest"],id:42},(function(e,n){e&&r(e);var o=n&&n.result;t(null!=o?new f(o).toString(10):null)}))}))},F=function(e){return Promise.all(e.map((function(e){return new Promise((t=h(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e);case 2:r({address:e,balance:t.sent});case 4:case"end":return t.stop()}}),t)}))),function(e){return t.apply(this,arguments)}));var t})))},B=function(){return(B=h(regeneratorRuntime.mark((function e(t){var r,o,a,i,s,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m){e.next=2;break}return e.abrupt("return",[]);case 2:if(!(v.size>0)||t){e.next=4;break}return e.abrupt("return",O());case 4:if(""===g&&(g="m/44'/60'"),"m/44'/60'"!==g){e.next=21;break}for(o=[],a=r=v.size;a<5+r;a++)o.push("".concat("m/44'/60'","/").concat(a,"'/0/0"));i=0,s=o;case 10:if(!(i<s.length)){e.next=19;break}return u=s[i],e.next=14,b.getAddress(u);case 14:v.set(e.sent.address,u);case 16:i++,e.next=10;break;case 19:e.next=33;break;case 21:if(E){e.next=31;break}return e.prev=22,e.next=25,k();case 25:E=e.sent,e.next=31;break;case 28:throw e.prev=28,e.t0=e.catch(22),e.t0;case 31:Object(n.b)(E,v.size).forEach((function(e){v.set(e.address,e.dPath)}));case 33:return e.abrupt("return",O());case 34:case"end":return e.stop()}}),e,null,[[22,28]])})))).apply(this,arguments)},M=function(e){return B.apply(this,arguments)},L=function(){return(L=h(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(!0);case 2:return e.abrupt("return",(t=e.sent)&&F(t));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},D=function(){return L.apply(this,arguments)},U=function(){return m?O()[0]:void 0},P=function(){return(P=h(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g){e.next=2;break}throw new Error("a derivation path is needed to get the public key");case 2:return e.prev=2,e.next=5,b.getAddress(g,!1,!0);case 5:return e.abrupt("return",E={publicKey:(t=e.sent).publicKey,chainCode:t.chainCode,path:g});case 11:throw e.prev=11,e.t0=e.catch(2),new Error("There was a problem accessing your Ledger accounts.");case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)},k=function(){return P.apply(this,arguments)},x=function(){return(x=h(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.getAddress(t);case 3:return e.abrupt("return",e.sent.address);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)},C=function(e){return x.apply(this,arguments)},N=function(e){var t=l(v.entries()),r=t.findIndex((function(t){return c(t,1)[0]===e}));t.unshift(t.splice(r,1)[0]),v=new Map(t)},O=function(){return Array.from(v.keys())},A=function(){return m=!0,M()},R=function(){return y},I=function(){return(I=h(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(n.c)(t)){e.next=2;break}return e.abrupt("return",!1);case 2:if(t!==g&&(v=new Map),!r){e.next=10;break}return e.next=6,C(t);case 6:return v.set(e.sent,t),y=!0,e.abrupt("return",!0);case 10:return y=!1,g=t,e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)},S=function(e,t){return I.apply(this,arguments)},T=function(){w.close(),g="",v=new Map,m=!1,_.stop()},r=t.networkId,o=t.rpcUrl,p=t.LedgerTransport,f=t.BigNumber,d=t.networkName,g="",v=new Map,m=!1,y=!1,(_=Object(n.a)({getAccounts:function(e){M().then((function(t){return e(null,t)})).catch((function(t){return e(t,null)}))},signTransaction:function(e,t){G(e).then((function(e){return t(null,e)})).catch((function(e){return t(e,null)}))},rpcUrl:o})).setPath=S,_.dPath=g,_.enable=A,_.setPrimaryAccount=N,_.getPrimaryAddress=U,_.getAccounts=M,_.getMoreAccounts=D,_.getBalance=j,_.getBalances=F,_.send=_.sendAsync,_.disconnect=T,_.isCustomPath=R,e.prev=38,!p){e.next=45;break}return e.next=42,p.create();case 42:e.t0=e.sent,e.next=48;break;case 45:return e.next=47,s.a.create();case 47:e.t0=e.sent;case 48:b=new u.a(w=e.t0),e.next=55;break;case 52:throw e.prev=52,e.t1=e.catch(38),new Error("Error connecting to Ledger wallet");case 55:return e.abrupt("return",_);case 56:case"end":return e.stop()}}),e,null,[[38,52]])})))).apply(this,arguments)}t.default=function(e){var t,r=e.rpcUrl,n=e.LedgerTransport,o=e.networkId,a=e.preferred;return{name:e.label||"Ledger",svg:e.svg||'\n\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 450" width="37" height="37"><style>.st0{fill:currentColor}</style><g id="squares_1_"><path class="st0" d="M578.2 392.7V24.3h25.6v344.1h175.3v24.3H578.2zm327.5 5.1c-39.7 0-70.4-12.8-93.4-37.1-21.7-24.3-33.3-58.8-33.3-103.6 0-43.5 10.2-79.3 32-104.9 21.7-26.9 49.9-39.7 87-39.7 32 0 57.6 11.5 76.8 33.3 19.2 23 28.1 53.7 28.1 92.1v20.5H804.6c0 37.1 9 66.5 26.9 85.7 16.6 20.5 42.2 29.4 74.2 29.4 15.3 0 29.4-1.3 40.9-3.8 11.5-2.6 26.9-6.4 44.8-14.1v24.3c-15.3 6.4-29.4 11.5-42.2 14.1-14.3 2.6-28.9 3.9-43.5 3.8zM898 135.6c-26.9 0-47.3 9-64 25.6-15.3 17.9-25.6 42.2-28.1 75.5h168.9c0-32-6.4-56.3-20.5-74.2-12.8-18-32-26.9-56.3-26.9zm238-21.8c19.2 0 37.1 3.8 51.2 10.2 14.1 7.7 26.9 19.2 38.4 37.1h1.3c-1.3-21.7-1.3-42.2-1.3-62.7V0h24.3v392.7h-16.6l-6.4-42.2c-20.5 30.7-51.2 47.3-89.6 47.3s-66.5-11.5-87-35.8c-20.5-23-29.4-57.6-29.4-102.3 0-47.3 10.2-83.2 29.4-108.7 19.2-25.6 48.6-37.2 85.7-37.2zm0 21.8c-29.4 0-52.4 10.2-67.8 32-15.3 20.5-23 51.2-23 92.1 0 78 30.7 116.4 90.8 116.4 30.7 0 53.7-9 67.8-26.9 14.1-17.9 21.7-47.3 21.7-89.6v-3.8c0-42.2-7.7-72.9-21.7-90.8-12.8-20.5-35.8-29.4-67.8-29.4zm379.9-16.6v17.9l-56.3 3.8c15.3 19.2 23 39.7 23 61.4 0 26.9-9 47.3-26.9 64-17.9 16.6-40.9 24.3-70.4 24.3-12.8 0-21.7 0-25.6-1.3-10.2 5.1-17.9 11.5-23 17.9-5.1 7.7-7.7 14.1-7.7 23s3.8 15.3 10.2 19.2c6.4 3.8 17.9 6.4 33.3 6.4h47.3c29.4 0 52.4 6.4 67.8 17.9s24.3 29.4 24.3 53.7c0 29.4-11.5 51.2-34.5 66.5-23 15.3-56.3 23-99.8 23-34.5 0-61.4-6.4-80.6-20.5-19.2-12.8-28.1-32-28.1-55 0-19.2 6.4-34.5 17.9-47.3s28.1-20.5 47.3-25.6c-7.7-3.8-15.3-9-19.2-15.3-5-6.2-7.7-13.8-7.7-21.7 0-17.9 11.5-34.5 34.5-48.6-15.3-6.4-28.1-16.6-37.1-30.7-9-14.1-12.8-30.7-12.8-48.6 0-26.9 9-49.9 25.6-66.5 17.9-16.6 40.9-24.3 70.4-24.3 17.9 0 32 1.3 42.2 5.1h85.7v1.3h.2zm-222.6 319.8c0 37.1 28.1 56.3 84.4 56.3 71.6 0 107.5-23 107.5-69.1 0-16.6-5.1-28.1-16.6-35.8-11.5-7.7-29.4-11.5-55-11.5h-44.8c-49.9 1.2-75.5 20.4-75.5 60.1zm21.8-235.4c0 21.7 6.4 37.1 19.2 49.9 12.8 11.5 29.4 17.9 51.2 17.9 23 0 40.9-6.4 52.4-17.9 12.8-11.5 17.9-28.1 17.9-49.9 0-23-6.4-40.9-19.2-52.4-12.8-11.5-29.4-17.9-52.4-17.9-21.7 0-39.7 6.4-51.2 19.2-12.8 11.4-17.9 29.3-17.9 51.1z"/><path class="st0" d="M1640 397.8c-39.7 0-70.4-12.8-93.4-37.1-21.7-24.3-33.3-58.8-33.3-103.6 0-43.5 10.2-79.3 32-104.9 21.7-26.9 49.9-39.7 87-39.7 32 0 57.6 11.5 76.8 33.3 19.2 23 28.1 53.7 28.1 92.1v20.5h-197c0 37.1 9 66.5 26.9 85.7 16.6 20.5 42.2 29.4 74.2 29.4 15.3 0 29.4-1.3 40.9-3.8 11.5-2.6 26.9-6.4 44.8-14.1v24.3c-15.3 6.4-29.4 11.5-42.2 14.1-14.1 2.6-28.2 3.8-44.8 3.8zm-6.4-262.2c-26.9 0-47.3 9-64 25.6-15.3 17.9-25.6 42.2-28.1 75.5h168.9c0-32-6.4-56.3-20.5-74.2-12.8-18-32-26.9-56.3-26.9zm245.6-21.8c11.5 0 24.3 1.3 37.1 3.8l-5.1 24.3c-11.8-2.6-23.8-3.9-35.8-3.8-23 0-42.2 10.2-57.6 29.4-15.3 20.5-23 44.8-23 75.5v149.7h-25.6V119h21.7l2.6 49.9h1.3c11.5-20.5 23-34.5 35.8-42.2 15.4-9 30.7-12.9 48.6-12.9zM333.9 12.8h-183v245.6h245.6V76.7c.1-34.5-28.1-63.9-62.6-63.9zm-239.2 0H64c-34.5 0-64 28.1-64 64v30.7h94.7V12.8zM0 165h94.7v94.7H0V165zm301.9 245.6h30.7c34.5 0 64-28.1 64-64V316h-94.7v94.6zm-151-94.6h94.7v94.7h-94.7V316zM0 316v30.7c0 34.5 28.1 64 64 64h30.7V316H0z"/></g></svg>\n',iconSrc:e.iconSrc,wallet:(t=h(regeneratorRuntime.mark((function e(t){var a,i,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.BigNumber,i=t.networkName,e.next=3,g({rpcUrl:r,networkId:o,LedgerTransport:n,BigNumber:a,networkName:i});case 3:return e.abrupt("return",{provider:s=e.sent,interface:{name:"Ledger",connect:s.enable,disconnect:s.disconnect,address:{get:function(){var e=h(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.getPrimaryAddress());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},network:{get:function(){var e=h(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},balance:{get:function(){var e=h(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.getPrimaryAddress(),e.abrupt("return",t&&s.getBalance(t));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}});case 5:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)}),type:"hardware",desktop:!0,mobile:!0,osExclusions:["iOS"],preferred:a}}},pn0g:function(e,t,r){"use strict";function n(e){var t=[];return e.split("/").forEach((function(e){var r=parseInt(e,10);isNaN(r)||(e.length>1&&"'"===e[e.length-1]&&(r+=2147483648),t.push(r))})),t}function o(e,t){return Promise.resolve().then((function(){return function e(r,n,o){return r>=n.length?o:t(n[r],r).then((function(t){return o.push(t),e(r+1,n,o)}))}(0,e,[])}))}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},qPxQ:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return u})),r.d(t,"e",(function(){return p}));var n={},o={},a=function(e,t){o[e]=t},i=function(e){var t=function(t,r){Object.assign(this,r),this.name=e,this.message=t||e,this.stack=(new Error).stack};return t.prototype=new Error,n[e]=t,t};i("AccountNameRequired"),i("AccountNotSupported"),i("AmountRequired"),i("BluetoothRequired"),i("BtcUnmatchedApp"),i("CantOpenDevice"),i("CashAddrNotSupported"),i("CurrencyNotSupported"),i("DeviceAppVerifyNotSupported"),i("DeviceGenuineSocketEarlyClose"),i("DeviceNotGenuine"),i("DeviceOnDashboardExpected"),i("DeviceOnDashboardUnexpected"),i("DeviceInOSUExpected"),i("DeviceHalted"),i("DeviceNameInvalid"),i("DeviceSocketFail"),i("DeviceSocketNoBulkStatus"),i("DisconnectedDevice"),i("DisconnectedDeviceDuringOperation"),i("EnpointConfig");var s=i("EthAppPleaseEnableContractData"),u=(i("FeeEstimationFailed"),i("FirmwareNotRecognized"),i("HardResetFail"),i("InvalidXRPTag"),i("InvalidAddress"),i("InvalidAddressBecauseDestinationIsAlsoSource"),i("LatestMCUInstalledError"),i("UnknownMCU"),i("LedgerAPIError"),i("LedgerAPIErrorWithMessage"),i("LedgerAPINotAvailable"),i("ManagerAppAlreadyInstalled"),i("ManagerAppRelyOnBTC"),i("ManagerAppDepInstallRequired"),i("ManagerAppDepUninstallRequired"),i("ManagerDeviceLocked"),i("ManagerFirmwareNotEnoughSpace"),i("ManagerNotEnoughSpace"),i("ManagerUninstallBTCDep"),i("NetworkDown"),i("NoAddressesFound"),i("NotEnoughBalance"),i("NotEnoughBalanceToDelegate"),i("NotEnoughBalanceInParentAccount"),i("NotEnoughSpendableBalance"),i("NotEnoughBalanceBecauseDestinationNotCreated"),i("NoAccessToCamera"),i("NotEnoughGas"),i("NotSupportedLegacyAddress"),i("GasLessThanEstimate"),i("PasswordsDontMatch"),i("PasswordIncorrect"),i("RecommendSubAccountsToEmpty"),i("RecommendUndelegation"),i("TimeoutTagged"),i("UnexpectedBootloader"),i("MCUNotGenuineToDashboard"),i("RecipientRequired"),i("UnavailableTezosOriginatedAccountReceive"),i("UnavailableTezosOriginatedAccountSend"),i("UpdateFetchFileFail"),i("UpdateIncorrectHash"),i("UpdateIncorrectSig"),i("UpdateYourApp"),i("UserRefusedDeviceNameChange"),i("UserRefusedAddress"),i("UserRefusedFirmwareUpdate"),i("UserRefusedAllowManager"),i("UserRefusedOnDevice"),i("TransportOpenUserCancelled"),i("TransportInterfaceNotAvailable"),i("TransportRaceCondition"));function c(e,t){this.name="TransportError",this.message=e,this.stack=(new Error).stack,this.id=t}i("TransportWebUSBGestureRequired"),i("DeviceShouldStayInApp"),i("WebsocketConnectionError"),i("WebsocketConnectionFailed"),i("WrongDeviceForAccount"),i("WrongAppForCurrency"),i("ETHAddressNonEIP"),i("CantScanQRCode"),i("FeeNotLoaded"),i("FeeRequired"),i("FeeTooHigh"),i("SyncError"),i("PairingFailed"),i("GenuineCheckFailed"),i("LedgerAPI4xx"),i("LedgerAPI5xx"),i("FirmwareOrAppUpdateRequired"),i("NoDBPathGiven"),i("DBWrongPassword"),i("DBNotReset"),c.prototype=new Error,a("TransportError",(function(e){return new c(e.message,e.id)}));var l={PIN_REMAINING_ATTEMPTS:25536,INCORRECT_LENGTH:26368,MISSING_CRITICAL_PARAMETER:26624,COMMAND_INCOMPATIBLE_FILE_STRUCTURE:27009,SECURITY_STATUS_NOT_SATISFIED:27010,CONDITIONS_OF_USE_NOT_SATISFIED:27013,INCORRECT_DATA:27264,NOT_ENOUGH_MEMORY_SPACE:27268,REFERENCED_DATA_NOT_FOUND:27272,FILE_ALREADY_EXISTS:27273,INCORRECT_P1_P2:27392,INS_NOT_SUPPORTED:27904,CLA_NOT_SUPPORTED:28160,TECHNICAL_PROBLEM:28416,OK:36864,MEMORY_PROBLEM:37440,NO_EF_SELECTED:37888,INVALID_OFFSET:37890,FILE_NOT_FOUND:37892,INCONSISTENT_FILE:37896,ALGORITHM_NOT_SUPPORTED:38020,INVALID_KCV:38021,CODE_NOT_INITIALIZED:38914,ACCESS_CONDITION_NOT_FULFILLED:38916,CONTRADICTION_SECRET_CODE_STATUS:38920,CONTRADICTION_INVALIDATION:38928,CODE_BLOCKED:38976,MAX_VALUE_REACHED:38992,GP_AUTH_FAILED:25344,LICENSING:28482,HALTED:28586};function p(e){this.name="TransportStatusError";var t=Object.keys(l).find((function(t){return l[t]===e}))||"UNKNOWN_ERROR",r=function(e){switch(e){case 26368:return"Incorrect length";case 26624:return"Missing critical parameter";case 27010:return"Security not satisfied (dongle locked or have invalid access rights)";case 27013:return"Condition of use not satisfied (denied by the user?)";case 27264:return"Invalid data received";case 27392:return"Invalid parameter received"}if(28416<=e&&e<=28671)return"Internal error, please report"}(e)||t,n=e.toString(16);this.message="Ledger device: "+r+" (0x"+n+")",this.stack=(new Error).stack,this.statusCode=e,this.statusText=t}p.prototype=new Error,a("TransportStatusError",(function(e){return new p(e.statusCode)}))},vULT:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return a}));var n=0,o=[],a=function(e,t,r){var a={type:e,id:String(++n),date:new Date};t&&(a.message=t),r&&(a.data=r),function(e){for(var t=0;t<o.length;t++)try{o[t](e)}catch(r){console.error(r)}}(a)};e.__ledgerLogsListen=function(e){return o.push(e),function(){var t=o.indexOf(e);-1!==t&&(o[t]=o[o.length-1],o.pop())}}}).call(this,r("yLpj"))}}]);