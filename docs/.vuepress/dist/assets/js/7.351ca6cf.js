(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{256:function(t,n,e){"use strict";e.d(n,"c",(function(){return u})),e.d(n,"d",(function(){return s})),e.d(n,"e",(function(){return a})),e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return d}));const r=/#.*$/,i=/\.(md|html)$/,l=/\/$/,o=/^(https?:|mailto:|tel:)/;function u(t){return o.test(t)}function s(t){return/^mailto:/.test(t)}function a(t){return/^tel:/.test(t)}function c(t){if(u(t))return t;const n=t.match(r),e=n?n[0]:"",o=function(t){return decodeURI(t).replace(r,"").replace(i,"")}(t);return l.test(o)?t:o+".html"+e}function d(t,n,e){if(!t)return e;let r,i=n;for(;(i=i.$parent)&&!r;)r=i.$refs[t];return r&&r.$el&&(r=r.$el),r||e}},285:function(t,n,e){},296:function(t,n,e){"use strict";e(285)},308:function(t,n,e){"use strict";e.r(n);var r=e(256),i={props:{link:{required:!0}},computed:{normalizedlink(){return Object(r.a)(this.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.normalizedlink):"/"===this.normalizedlink}},methods:{isExternal:r.c,isMailto:r.d,isTel:r.e}},l=(e(296),e(4)),o=Object(l.a)(i,(function(){var t=this,n=t._self._c;return t.isExternal(t.normalizedlink)?n("a",{staticClass:"external",attrs:{href:t.normalizedlink,target:t.isMailto(t.normalizedlink)||t.isTel(t.normalizedlink)?null:"_blank",rel:t.isMailto(t.normalizedlink)||t.isTel(t.normalizedlink)?null:"noopener noreferrer"}},[t._t("default")],2):n("router-link",{attrs:{to:t.normalizedlink,exact:t.exact}},[t._t("default")],2)}),[],!1,null,null,null);n.default=o.exports}}]);