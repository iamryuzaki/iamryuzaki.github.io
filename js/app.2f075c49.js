(function(e){function t(t){for(var a,n,o=t[0],c=t[1],l=t[2],u=0,m=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&m.push(s[n][0]),s[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,o=1;o<r.length;o++){var c=r[o];0!==s[c]&&(a=!1)}a&&(i.splice(t--,1),e=n(n.s=r[0]))}return e}var a={},s={app:0},i=[];function n(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=a,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},3033:function(e,t,r){},"4ffd":function(e,t){e.exports="data:image/png;base64,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"},"51da":function(e,t,r){},"5c30":function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);var a=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"background-layout"}),void 0!=e.RequestParams?r("div",{staticClass:"content-wrapper"},[r("div",{staticClass:"content-block"},[r("div",{staticClass:"left-wrapper"},[r("div",{staticClass:"left-block"},[r("div",{staticClass:"menu-wrapper"},[r("div",{staticClass:"menu-block"},[r("div",{staticClass:"menu-item-wrapper menu-item-cancel"},[r("a",{staticClass:"menu-item",attrs:{href:e.RequestParams.return+"/?error_payment=cancel",target:"_blank"}},[e._v("cancel")])])])]),r("div",{staticClass:"payment-info-wrapper"},[r("div",{staticClass:"payment-info-block"},[r("div",{staticClass:"bundle-wrapper"},[r("div",{staticClass:"bundle-block"},[e._v(" "+e._s(e.RequestParams.bundle)+" Bundle ")])]),r("div",{staticClass:"price-wrapper"},[r("div",{staticClass:"price-block"},[e._v(" £"+e._s(e.RequestParams.amount)+" ")])])])]),e._m(0)])]),r("div",{staticClass:"right-wrapper"},[r("div",{staticClass:"right-block"},[e._m(1),r("div",{staticClass:"payment-form-wrapper"},[r("div",{staticClass:"payment-form-block"},[r("div",{staticClass:"alert-wrapper"},[void 0!=e.ErrorCardText?r("div",{staticClass:"alert-item"},[e._v(" "+e._s(e.ErrorCardText)+" ")]):e._e()]),r("div",{staticClass:"card-data-wrapper"},[r("safe-charge-web-sdk-form",{on:{finishPayment:e.OnFinishSubmit,error:e.OnErrorText}})],1),r("div",{staticClass:"card-name-wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.CardHolderName,expression:"CardHolderName"}],class:"card-name-item "+(e.ErrorCardHolderName?"error":""),attrs:{type:"text",placeholder:"Cardholder Name"},domProps:{value:e.CardHolderName},on:{input:[function(t){t.target.composing||(e.CardHolderName=t.target.value)},function(t){e.ErrorCardHolderName=!1}]}})]),r("div",{staticClass:"accept-terms-wrapper"},[r("label",{class:"accept-terms-item "+(e.ErrorAcceptedTerns?"error":""),attrs:{for:"accept-terms-input"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.AcceptedTerns,expression:"AcceptedTerns"}],attrs:{type:"checkbox",id:"accept-terms-input"},domProps:{checked:Array.isArray(e.AcceptedTerns)?e._i(e.AcceptedTerns,null)>-1:e.AcceptedTerns},on:{change:[function(t){var r=e.AcceptedTerns,a=t.target,s=!!a.checked;if(Array.isArray(r)){var i=null,n=e._i(r,i);a.checked?n<0&&(e.AcceptedTerns=r.concat([i])):n>-1&&(e.AcceptedTerns=r.slice(0,n).concat(r.slice(n+1)))}else e.AcceptedTerns=s},function(t){e.ErrorAcceptedTerns=!1}]}}),r("span",{staticClass:"icon"}),e._m(2)])]),r("div",{staticClass:"payment-submit-wrapper"},[r("button",{staticClass:"payment-submit-item",attrs:{disabled:e.HasSubmitted},on:{click:e.OnSubmit}},[e._v(" pay "+e._s(e.RequestParams.amount)+" "+e._s(e.RequestParams.currency)+" ")])])])]),r("div",{staticClass:"cop-wrapper"},[r("div",{staticClass:"cop-block"},[r("svg",{attrs:{width:"8",height:"11",viewBox:"0 0 8 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M7 4H6.5V3C6.5 1.62 5.38 0.5 4 0.5C2.62 0.5 1.5 1.62 1.5 3V4H1C0.45 4 0 4.45 0 5V10C0 10.55 0.45 11 1 11H7C7.55 11 8 10.55 8 10V5C8 4.45 7.55 4 7 4ZM2.5 3C2.5 2.17 3.17 1.5 4 1.5C4.83 1.5 5.5 2.17 5.5 3V4H2.5V3ZM7 10H1V5H7V10ZM4 8.5C4.55 8.5 5 8.05 5 7.5C5 6.95 4.55 6.5 4 6.5C3.45 6.5 3 6.95 3 7.5C3 8.05 3.45 8.5 4 8.5Z",fill:"#CECFD0"}})]),e._v(" This page uses a 128 Bit SSL encryption ")])])])])])]):e._e()])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"footer-wrapper"},[a("div",{staticClass:"footer-block"},[a("div",{staticClass:"logo-wrapper"},[a("img",{staticClass:"logo-item",attrs:{src:r("4ffd"),alt:"to the moon mobile"}})]),a("div",{staticClass:"footer-menu-wrapper"},[a("div",{staticClass:"footer-menu-block"},[a("div",{staticClass:"footer-menu-item-wrapper"},[a("a",{staticClass:"footer-menu-item",attrs:{href:"https://www.tothemoonmobile.com/terms.pdf",target:"_blank"}},[e._v("Terms & Conditions")])]),a("div",{staticClass:"footer-menu-item-wrapper"},[a("a",{staticClass:"footer-menu-item",attrs:{href:"https://www.tothemoonmobile.com/privacy.pdf",target:"_blank"}},[e._v("Privacy policy")])])])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header-wrapper"},[r("div",{staticClass:"header-block"},[e._v(" Payment information ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[e._v(" I acknowledge I have read the "),r("a",{attrs:{href:"https://www.tothemoonmobile.com/terms.pdf",target:"_blank"}},[e._v("Terms & Condition")]),e._v(" of purchase, "),r("a",{attrs:{href:"https://www.tothemoonmobile.com/privacy.pdf",target:"_blank"}},[e._v("Privacy Policy")]),e._v(" and authorize the payment. ")])}],n=r("9ab4"),o=r("60a3"),c=(r("fa6d"),r("0c1f"),r("3033"),r("51da"),r("5c30"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),l=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"safe-charge-web-sdk"}},[r("div",{attrs:{id:"safe-charge-web-sdk-iframe"}})])}],d=(r("b9b9"),r("0b26"),function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(n["b"])(t,e),t.prototype.created=function(){this.RequestParams=this.$parent.RequestParams},t.prototype.mounted=function(){window.DoSubmit=this.OnSubmit,this.InitWebSdk()},t.prototype.InitWebSdk=function(){var e,t,r=this;if("SafeCharge"in window!=0){this.SafeChargeExample=SafeCharge({env:"test",merchantId:this.RequestParams.mid,merchantSiteId:this.RequestParams.msid});var a=null===(e=this.SafeChargeExample)||void 0===e?void 0:e.fields({locale:"en"}),s={base:{fontSize:"16pt",fontFamily:"Roboto, sans-serif",color:"#23262C",fontSmoothing:"antialiased","::placeholder":{"font-size":"18px",color:"#CECFD0"}},invalid:{color:"#FF6231",":focus":{color:"#FF6231"},"::placeholder":{color:"#FF6231"}},empty:{color:"#CECFD0","::placeholder":{color:"#CECFD0"}},valid:{color:"#23262C"}};this.SafeChargeSCard=null===a||void 0===a?void 0:a.create("card",{style:s}),null===(t=this.SafeChargeSCard)||void 0===t||t.attach(document.getElementById("safe-charge-web-sdk-iframe"))}else setTimeout((function(){return r.InitWebSdk()}),300)},t.prototype.OnSubmit=function(e){var t,r,a,s,i,n,o=this;console.log("OnSubmit");try{var c={clientUniqueId:null!==(t=this.RequestParams.clientID)&&void 0!==t?t:"",sessionToken:null!==(r=this.RequestParams.sessionToken)&&void 0!==r?r:"",currency:null!==(a=this.RequestParams.currency)&&void 0!==a?a:"",amount:String(Number(this.RequestParams.amount)),cardHolderName:e,paymentOption:this.SafeChargeSCard};"email"in this.RequestParams&&"country"in this.RequestParams&&(c.billingAddress={country:null!==(s=this.RequestParams.country)&&void 0!==s?s:"",email:null!==(i=this.RequestParams.email)&&void 0!==i?i:""}),console.log(c),null===(n=this.SafeChargeExample)||void 0===n||n.createPayment(c,(function(e){console.log(e),"ERROR"==e.result?o.$emit("error",e.errorDescription):"DECLINED"==e.result?o.$emit("error","Sorry, your payment was rejected. Please try again."):alert("Response: "+e.result),o.$emit("finishPayment",e)}))}catch(l){console.log(l),this.$emit("finishPayment",void 0)}},t=Object(n["a"])([Object(o["a"])({components:{}})],t),t}(o["b"])),u=d,m=u,p=r("2877"),h=Object(p["a"])(m,c,l,!1,null,null,null),f=h.exports,v=r("0b26"),C=r.n(v),b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.AcceptedTerns=!1,t.CardHolderName="",t.ErrorAcceptedTerns=!1,t.ErrorCardHolderName=!1,t.HasSubmitted=!1,t}return Object(n["b"])(t,e),t.prototype.created=function(){this.AcceptedTerns=!1,this.CardHolderName="",this.HasSubmitted=!1,this.ErrorAcceptedTerns=!1,this.ErrorCardHolderName=!1,this.ErrorCardText=void 0,this.InitParams()},t.prototype.mounted=function(){},t.prototype.InitParams=function(){var e;if(this.RequireParams=["amount","bundle","checksum","clientID","currency","mid","msid","return","sessionToken"],0==location.hash.length)return location.href="https://tothemoonmobile.com/?error_payment=empty",void(this.RequestParams=void 0);this.RequestParams={};for(var t=location.hash.substr(1).split("&"),r=0,a=t;r<a.length;r++){var s=a[r],i=s.split("=")[0];this.RequestParams[i]=s.substr(i.length+1)}for(var n=0,o=this.RequireParams;n<o.length;n++){var c=o[n];if(c in this.RequestParams==0)return location.href=("return"in this.RequestParams?this.RequestParams.return:"https://tothemoonmobile.com")+"/?error_payment=not_param_"+c,void(this.RequestParams=void 0)}var l=C()(this.RequestParams.sessionToken+""+this.RequestParams.amount+this.RequestParams.currency);if(l!=this.RequestParams.checksum)return location.href=this.RequestParams.return+"/?error_payment=bad_checksum",void(this.RequestParams=void 0);this.RequestParams.amount+=-1==(null===(e=this.RequestParams.amount)||void 0===e?void 0:e.indexOf("."))?".00":"",location.hash=""},t.prototype.OnErrorText=function(e){e=e.replace(/_/gi," "),e=e.substr(0,1).toUpperCase()+e.substr(1),this.ErrorCardText=e},t.prototype.OnSubmit=function(){0!=this.AcceptedTerns?0!=this.CardHolderName.trim().length?(this.HasSubmitted=!0,this.ErrorCardText=void 0,window.DoSubmit(this.CardHolderName)):this.ErrorCardHolderName=!0:this.ErrorAcceptedTerns=!0},t.prototype.OnFinishSubmit=function(e){console.log("OnFinishSubmit"),this.HasSubmitted=!1},t=Object(n["a"])([Object(o["a"])({components:{SafeChargeWebSdkForm:f}})],t),t}(o["b"]),A=b,g=A,y=Object(p["a"])(g,s,i,!1,null,null,null),w=y.exports,P=r("289d");a["a"].use(P["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(w)}}).$mount("#app")}});
//# sourceMappingURL=app.2f075c49.js.map