(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{446:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(132);var c=n(175),l=n(89);function o(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||Object(c.a)(e)||Object(l.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},643:function(e,t,n){},706:function(e,t,n){"use strict";n(643)},751:function(e,t,n){"use strict";n.r(t);n(10);var r=n(446),c=n(11),l=(n(173),n(27),n(47),n(43),n(118)),o={layout:"DashboardLayout",middleware:["isAuthenticated","checkAdmin"],data:function(){return{result:null,showScanner:!1,debug:!1,scannerInitialized:!1,ok:null,adult:[],kid:[],all:[],cruise:"",deck:"",re_id:"",date:""}},methods:{onDetect:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var r,c,content;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t,n.next=3,e;case 3:c=n.sent,content=c.content,r.result=null,r.result=content,r.getData(r.result),r.toggleScanner();case 9:case"end":return n.stop()}}),n)})))()},toggleScanner:function(){var e=this;e.showScanner=!e.showScanner,e.showScanner&&!e.scannerInitialized?e.scannerInitialized=!0:!e.showScanner&&e.scannerInitialized&&(e.scannerInitialized=!1)},opn:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var r,c,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return-1!=(c=(r=t).all.findIndex((function(t){return JSON.stringify(t)==JSON.stringify(e)})))&&(r.all[c].entered=!r.all[c].entered),r.adult=r.all.filter((function(e){return r.adult.some((function(a){return a.name==e.name&&a.age==e.age}))})),r.kid=r.all.filter((function(e){return r.kid.some((function(a){return a.name==e.name&&a.age==e.age}))})),data={adultdetails:r.adult,kiddetails:r.kid},n.next=8,l.a.collection("Booking").update(r.re_id,data);case 8:case"end":return n.stop()}}),n)})))()},getData:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var c,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=t,n.prev=1,n.next=4,l.a.collection("Booking").getFullList({filter:'id="'.concat(e,'"')});case 4:0==(o=n.sent).length?c.ok=!1:c.ok=!0,c.adult=o[0].adultdetails,c.kid=o[0].kiddetails,c.all=[].concat(Object(r.a)(c.adult),Object(r.a)(c.kid)),c.cruise=o[0].cruise,c.deck=o[0].deck,c.re_id=o[0].id,c.date=o[0].date,c.all=c.all.map((function(e){return{name:e.name,age:e.age,entered:e.entered||!1}})),n.next=18;break;case 16:n.prev=16,n.t0=n.catch(1);case 18:case"end":return n.stop()}}),n,null,[[1,16]])})))()}}},d=(n(706),n(7)),component=Object(d.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticStyle:{"min-height":"90vh"}},[t("base-header",[t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"col-lg-6 col-7"},[t("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}},[t("route-bread-crumb")],1)])])]),e._v(" "),t("div",{staticClass:"rows"},[t("div",{staticClass:"middle"},[t("div",{staticClass:"qrcode"},[e.showScanner?e._e():t("i",{staticClass:"fa fa-qrcode icons"}),e._v(" "),e.showScanner?t("qrcode-reader",{staticStyle:{margin:"20px"},attrs:{debug:e.debug},on:{detect:e.onDetect}}):e._e()],1),e._v(" "),e.showScanner?e._e():t("button",{staticClass:"btn btn-success",on:{click:e.toggleScanner}},[e._v("\n        Scan QR Code\n      ")]),e._v(" "),e.showScanner?t("button",{staticClass:"btn btn-success",on:{click:e.toggleScanner}},[e._v("\n        Stop\n      ")]):e._e()]),e._v(" "),t("div",{staticClass:"Details"},[e._m(0),e._v(" "),1==e.ok?t("div",[t("div",{staticClass:"co1",staticStyle:{display:"flex"}},[t("h3",[e._v(e._s(e.deck)+" - "+e._s(e.cruise)+" - "+e._s(e.date))])]),e._v(" "),e._l(e.all,(function(n,r){return t("div",[t("div",{staticClass:"co1",staticStyle:{display:"flex"}},[e._v("\n            "+e._s(r+1)+".  \n            "),t("input",{staticClass:"red-input",attrs:{type:"checkbox"},domProps:{checked:n.entered},on:{click:function(t){return e.opn(n)}}}),e._v(" "),t("h3",[e._v(e._s(n.name))])])])}))],2):e._e(),e._v(" "),null==e.ok?t("div",[e._m(1)]):e._e(),e._v(" "),0==e.ok?t("div",[e._m(2)]):e._e()])])],1)}),[function(){var e=this._self._c;return e("div",{staticClass:"co1",staticStyle:{display:"flex"}},[e("h3",[this._v("Customer Details :-")])])},function(){var e=this._self._c;return e("div",{staticClass:"co1",staticStyle:{display:"flex"}},[e("h3",[this._v("Please scan QR to get the details.")])])},function(){var e=this._self._c;return e("div",{staticClass:"co1",staticStyle:{display:"flex"}},[e("h3",[this._v("Invalid QR Code.")])])}],!1,null,"7505b254",null);t.default=component.exports}}]);