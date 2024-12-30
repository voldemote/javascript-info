var guestProfile;

!function() {
var e = {
205: function(e, t, n) {
var r = {
"./en.yml": 979
};
function o(e) {
var t = a(e);
return n(t);
}
function a(e) {
if (!n.o(r, e)) {
var t = new Error("Cannot find module '" + e + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
return r[e];
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = a, e.exports = o, o.id = 205;
},
706: function(e, t, n) {
var r = {
"./cert/en.yml": 527,
"./email/en.yml": 247,
"./en.yml": 652,
"./feedback/en.yml": 370,
"./frontpage/en.yml": 319,
"./groups/en.yml": 13,
"./models/en.yml": 855,
"./teacher/en.yml": 97
};
function o(e) {
var t = a(e);
return n(t);
}
function a(e) {
if (!n.o(r, e)) {
var t = new Error("Cannot find module '" + e + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
return r[e];
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = a, e.exports = o, o.id = 706;
},
188: function(e, t, n) {
var r = {
"./en.yml": 526
};
function o(e) {
var t = a(e);
return n(t);
}
function a(e) {
if (!n.o(r, e)) {
var t = new Error("Cannot find module '" + e + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
return r[e];
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = a, e.exports = o, o.id = 188;
},
907: function(e) {
e.exports = {
lang: "en",
localCurrency: "EUR",
shopCurrency: "EUR",
env: "production",
rateShopTo: void 0,
countryCode,
ordersMail: "orders@javascript.info",
providers: [ {
name: "Github",
id: "github"
}, {
name: "Discord",
id: "discord"
}, {
name: "Facebook",
id: "facebook"
}, {
name: "Google",
id: "google"
} ],
stripeKey: "pk_live_51HXm0nFjeNqw1p5a3mjFxSeNHh8OL94IyGcp3PHbZVoNuYUYjlM57YtZMIAM1zrEd1F6WIKfFs67KbTemRdNIySo00KfWS1yhr",
paypalClientId: "Ac86EanyVr7jcO5a_EwTK2vg1MGguuNX27jI4oC120g8xLMuAKmayooEcpc-mODQd4Gsmm7yqA1C7NM-",
telegramBotId: 7532264140,
lookatCodeUrlBase: "https://lookatcode.com",
isRTL: void 0
};
},
102: function(e) {
function t(e, t, n, r, o) {
e.addEventListener(n, (function(e) {
let n = function(e, t) {
let n = e.target;
for (;n; ) {
if (n.matches(t)) return n;
if (n == e.currentTarget) break;
n = n.parentElement;
}
return null;
}(e, t);
e.delegateTarget = n, n && r.call(o || this, e);
}));
}
t.delegateMixin = function(e) {
e.delegate = function(e, n, r) {
t(this.elem, e, n, r, this);
};
}, e.exports = t;
},
25: function(e, t, n) {
function r(e, t) {
var n = Object.keys(e);
if (Object.getOwnPropertySymbols) {
var r = Object.getOwnPropertySymbols(e);
t && (r = r.filter((function(t) {
return Object.getOwnPropertyDescriptor(e, t).enumerable;
}))), n.push.apply(n, r);
}
return n;
}
function o(e) {
for (var t = 1; t < arguments.length; t++) {
var n = null != arguments[t] ? arguments[t] : {};
t % 2 ? r(Object(n), !0).forEach((function(t) {
a(e, t, n[t]);
})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
}));
}
return e;
}
function a(e, t, n) {
return (t = function(e) {
var t = function(e, t) {
if ("object" != typeof e || !e) return e;
var n = e[Symbol.toPrimitive];
if (void 0 !== n) {
var r = n.call(e, t || "default");
if ("object" != typeof r) return r;
throw new TypeError("@@toPrimitive must return a primitive value.");
}
return ("string" === t ? String : Number)(e);
}(e, "string");
return "symbol" == typeof t ? t : t + "";
}(t)) in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
}) : e[t] = n, e;
}
const i = n(495), s = n(773), c = n(907).lang, l = n(662);
s.i18n.add("courses", n(706)("./" + c + ".yml"));
e.exports = class {
constructor({elem: e, filter: t, activeFilters: n, loadOnInit: r}) {
this.elem = e, this.container = e.querySelector("[data-feedback-container]"), (this.form = e.querySelector("[data-feedback-form]")) && this.initFilter(), 
this.baseUrl = "/courses/feedback-fetch", this.filter = this.defaults = t, this.activeFilters = n || [ "stars", "course", "teacher" ], 
this.applyFilter(t), window.addEventListener("scroll", (e => this.onScroll(e))), 
this.onScroll();
}
initFilter() {
const e = this.elem.querySelector("[data-feedback-count]");
this.elem.addEventListener("feedbackChange", (function(t) {
e.hidden = !1, e.children[0].innerHTML = t.detail.loader.total, e.children[1].innerHTML = l(t.detail.loader.total, s("courses.group_feedback_list.plural_feedback"));
})), this.selects = this.form.elements;
for (let e of this.selects) e.addEventListener("change", (() => {
this.filter[e.name] = e.value, this.applyFilter(this.filter);
}));
}
onScroll() {
this.hasMore && this.container.getBoundingClientRect().bottom <= document.documentElement.clientHeight && !this.isLoading && this.load(!0);
}
applyFilter(e) {
this.filter = o(o({}, this.defaults), e);
for (let e in this.filter) this.selects && this.selects[e] && (this.selects[e].querySelector(`option[value='${this.filter[e]}']`).selected = !0);
for (let e of this.activeFilters) this.selects && this.selects[e] && !this.filter[e] && (this.selects[e].querySelector("option:first-child").selected = !0);
this.count = 0, this.total = null, this.hasMore = !0, this.load();
}
load(e = !1) {
let t = `${this.baseUrl}?skip=${this.count}&needTotal=${null === this.total ? 1 : 0}`;
for (let e in this.filter) t += `&${e}=${this.filter[e]}`;
const n = i({
method: "GET",
json: !0,
url: t
});
this.elem.classList.add("course-feedbacks_loading"), this.isLoading = !0, n.addEventListener("loadend", (() => {
this.isLoading = !1, this.elem.classList.remove("course-feedbacks_loading");
})), n.addEventListener("success", (t => {
void 0 !== t.result.total && (this.total = t.result.total), t.result.count ? (e ? this.container.insertAdjacentHTML("beforeend", t.result.html) : this.container.innerHTML = t.result.html, 
this.count += t.result.count) : this.count || (this.container.innerHTML = `<p>${s("courses.feedback_loader.no_feedback")}</p>`, 
this.elem.classList.add("course-feedbacks_no-feedback")), !1 === t.result.hasMore && (this.hasMore = !1), 
this.elem.dispatchEvent(new CustomEvent("feedbackChange", {
bubbles: !0,
detail: {
loader: this
}
}));
}));
}
};
},
629: function(e) {
e.exports = function() {
let e = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
return e ? e[1] : null;
};
},
345: function(e, t, n) {
"use strict";
n.r(t), n.d(t, {
Error: function() {
return u;
},
Info: function() {
return s;
},
Success: function() {
return l;
},
Warning: function() {
return c;
},
init: function() {
return a;
}
});
let r = n(102);
class o {
constructor(e = {}) {
this.notifications = [], this.verticalSpace = e.verticalSpace || 8;
}
register(e) {
this.notifications.unshift(e), setTimeout((() => this.recalculate()), 20);
}
unregister(e) {
let t = this.notifications.indexOf(e);
this.notifications.splice(t, 1), this.recalculate();
}
recalculate() {
let e = this.verticalSpace;
this.notifications.forEach((t => {
t.top = e, e += t.height + this.verticalSpace;
}));
}
}
function a(e) {
window.notificationManager || (window.notificationManager = new o(e));
}
class i {
constructor(e, t, n) {
let r = `<div class="notification notification_popup notification_${t}">\n    <div class="notification__content">${e}</div>\n    <button title="Закрыть" class="notification__close"></button></div>`;
switch (document.body.insertAdjacentHTML("beforeEnd", r), this.elem = document.body.lastElementChild, 
n) {
case void 0:
this.timeout = this.TIMEOUT_DEFAULT;
break;

case "slow":
this.timeout = this.TIMEOUT_SLOW;
break;

case "fast":
this.timeout = this.TIMEOUT_FAST;
break;

default:
this.timeout = n;
}
window.notificationManager.register(this), this.setupCloseHandler(), this.setupCloseTimeout();
}
get TIMEOUT_DEFAULT() {
return 3e3;
}
get TIMEOUT_SLOW() {
return 5e3;
}
get TIMEOUT_FAST() {
return 1500;
}
close() {
this.elem.parentNode && (this.elem.remove(), window.notificationManager.unregister(this));
}
setupCloseHandler() {
this.delegate(".notification__close", "click", (() => this.close()));
}
setupCloseTimeout() {
this.timeout && setTimeout((() => this.close()), this.timeout);
}
get height() {
return this.elem.offsetHeight;
}
set top(e) {
this.elem.style.transform = "translateY(" + e + "px)";
}
}
r.delegateMixin(i.prototype);
class s extends i {
constructor(e, t) {
super(e, "info", t);
}
}
class c extends i {
constructor(e, t) {
super(e, "warning", t);
}
}
class l extends i {
constructor(e, t) {
super(e, "success", t);
}
}
class u extends i {
constructor(e, t) {
super(e, "error", t);
}
get TIMEOUT_DEFAULT() {
return 5e3;
}
}
},
495: function(e, t, n) {
let r = n(345), o = n(629);
const a = n(907).lang, i = n(773);
i.i18n.add("", n(205)("./" + a + ".yml")), i.i18n.add("error.network", n(188)("./" + a + ".yml")), 
document.addEventListener("xhrfail", (function(e) {
new r.Error(e.reason);
})), e.exports = function(e) {
let t = new XMLHttpRequest, n = e.method || "GET", r = e.body, a = e.url;
t.open(n, a, !e.sync), t.method = n;
let s = o();
s && !e.skipCsrf && t.setRequestHeader("X-XSRF-TOKEN", s), e.responseType && (t.responseType = e.responseType), 
"[object Object]" == {}.toString.call(r) && (t.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
r = JSON.stringify(r)), e.noDocumentEvents || (t.addEventListener("loadstart", (e => {
t.timeStart = Date.now();
let n = l("xhrstart", e);
document.dispatchEvent(n);
})), t.addEventListener("loadend", (e => {
let t = l("xhrend", e);
document.dispatchEvent(t);
})), t.addEventListener("success", (e => {
let t = l("xhrsuccess", e);
t.result = e.result, document.dispatchEvent(t);
})), t.addEventListener("fail", (e => {
let t = l("xhrfail", e);
t.reason = e.reason, document.dispatchEvent(t);
}))), e.raw || t.setRequestHeader("Accept", "application/json"), t.setRequestHeader("X-Requested-With", "XMLHttpRequest");
let c = e.normalStatuses || [ 200 ];
function l(e, t) {
let n = new CustomEvent(e);
return n.originalEvent = t, n;
}
function u(e, n) {
let r = l("fail", n);
r.reason = e, t.dispatchEvent(r);
}
return t.addEventListener("error", (e => {
u(i("error.network.server_connection_error"), e);
})), t.addEventListener("timeout", (e => {
u(i("error.network.server_request_timeout"), e);
})), t.addEventListener("abort", (e => {
u(i("error.network.request_aborted"), e);
})), t.addEventListener("load", (n => {
if (!t.status) return void u(i("error.network.no_response"), n);
let r = e.responseType && "text" !== e.responseType ? t.response : t.responseText;
if ((t.getResponseHeader("Content-Type") || "").match(/^application\/json/) || e.json) try {
r = JSON.parse(r);
} catch (n) {
return void u(i("error.network.invalid_format"), n);
}
if (c.includes(t.status)) !function(e, n) {
let r = l("success", n);
r.result = e, t.dispatchEvent(r);
}(r, n); else {
u(r.info ? i("error.network.server_error_info", {
status: t.status,
info: r.info
}) : i("error.network.server_error", {
status: t.status
}), n);
}
})), setTimeout((function() {
t.send(r);
})), t;
};
},
773: function(e, t, n) {
"use strict";
const r = new (n(679))("en");
let o = console.error;
function a(e) {
return r.hasPhrase(i, e) || process.env.I18N_DEBUG && o("No such phrase", e), r.t(i, ...arguments);
}
e.exports = a;
const i = n(907).lang;
"en" !== i && r.setFallback(i, "en"), r.add = (...e) => (e = e.map((e => e.__esModule ? e.default : e)), 
r.addPhrase(i, ...e)), a.i18n = r;
},
662: function(e) {
e.exports = function(e, t) {
var n, r = (n = e) % 10 == 1 && n % 100 != 11 ? "one" : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) && n == Math.floor(n) ? "few" : n % 10 == 0 || n % 10 >= 5 && n % 10 <= 9 || n % 100 >= 11 && n % 100 <= 14 && n == Math.floor(n) ? "many" : "other", o = t.split(",");
switch (r) {
case "one":
return o[0];

case "few":
return o[1];

case "many":
return o[2];

default:
throw new Error("Unsupported count: " + e);
}
};
},
355: function(e, t, n) {
const r = n(25);
n(773).i18n.add("courses", n(652)), e.exports = function() {
if (!window.FEEDBACK_LIST_INIT) return;
const e = new r(window.FEEDBACK_LIST_INIT), t = document.querySelector(".profile-feedback");
for (let n of document.querySelectorAll(".feedback-stat")) n.addEventListener("click", (n => {
const r = n.target.closest(".feedback-stat__item_clickable");
if (r) {
t.scrollIntoView(!0);
const n = r.getAttribute("data-stars"), o = r.closest(".course-stats").getAttribute("data-course");
e.applyFilter({
stars: n,
course: o
});
}
}));
for (let n of document.querySelectorAll(".course-stats__feedback-link")) n.addEventListener("click", (r => {
r.preventDefault(), t.scrollIntoView(!0);
const o = n.closest(".course-stats").getAttribute("data-course");
e.applyFilter({
course: o
});
}));
e.elem.addEventListener("feedbackChange", (() => {
const t = e.filter.course, n = e.filter.stars, r = document.querySelector("[data-stars].feedback-stat__item_active");
if (r && r.classList.remove("feedback-stat__item_active"), e.filter.stars) {
const e = document.querySelector(`.course-stats[data-course='${t}'] [data-stars='${n}']`);
e && e.classList.add("feedback-stat__item_active");
}
}));
};
},
679: function(e, t, n) {
"use strict";
var r = n(304), o = n(532);
function a(e) {
return Object.prototype.toString.call(e);
}
function i(e) {
return "[object String]" === a(e);
}
function s(e) {
return !isNaN(e) && isFinite(e);
}
function c(e) {
return !0 === e || !1 === e;
}
function l(e) {
return "[object Object]" === a(e);
}
var u = Array.isArray || function(e) {
return "[object Array]" === a(e);
}, d = Array.prototype.forEach;
function p(e, t, n) {
if (null !== e) if (d && e.forEach === d) e.forEach(t, n); else if (e.length === +e.length) for (var r = 0, o = e.length; r < o; r += 1) t.call(n, e[r], r, e); else for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.call(n, e[a], a, e);
}
var f = /%[sdj%]/g;
function h(e) {
var t = 1, n = arguments, r = n.length;
return String(e).replace(f, (function(e) {
if ("%%" === e) return "%";
if (t >= r) return e;
switch (e) {
case "%s":
return String(n[t++]);

case "%d":
return Number(n[t++]);

case "%j":
return JSON.stringify(n[t++]);

default:
return e;
}
}));
}
function m(e) {
var t = {};
return p(e || {}, (function(e, n) {
e && "object" == typeof e ? p(m(e), (function(e, r) {
t[n + "." + r] = e;
})) : t[n] = e;
})), t;
}
var y = "#@$";
function _(e, t) {
return e + y + t;
}
function g(e, t, n) {
var r = _(t, n), o = e._storage;
if (o.hasOwnProperty(r)) return r;
if (t === e._defaultLocale) return null;
var a = e._fallbacks_cache;
if (a.hasOwnProperty(r)) return a[r];
for (var i, s = e._fallbacks[t] || [ e._defaultLocale ], c = 0, l = s.length; c < l; c++) if (i = _(s[c], n), 
o.hasOwnProperty(i)) return a[r] = i, a[r];
return a[r] = null, null;
}
function v(e, t, n) {
var r = o.indexOf(e, t);
return -1 === r ? h('[pluralizer for "%s" locale not found]', e) : void 0 === n[r] ? h('[plural form %d ("%s") not found in translation]', r, o.forms(e)[r]) : n[r];
}
function b(e) {
if (!(this instanceof b)) return new b(e);
this._defaultLocale = e ? String(e) : "en", this._fallbacks = {}, this._fallbacks_cache = {}, 
this._storage = {}, this._plurals_cache = {};
}
b.prototype.addPhrase = function(e, t, n, r) {
var o, a = this;
if (c(r)) o = r ? 1 / 0 : 0; else if (s(r)) {
if ((o = Math.floor(r)) < 0) throw new TypeError("Invalid flatten level (should be >= 0).");
} else o = 1 / 0;
if (l(n) && o > 0) return p(n, (function(n, r) {
a.addPhrase(e, (t ? t + "." : "") + r, n, o - 1);
})), this;
if (i(n)) this._storage[_(e, t)] = {
translation: n,
locale: e,
raw: !1
}; else {
if (!(u(n) || s(n) || c(n) || 0 === o && l(n))) throw new TypeError("Invalid translation - [String|Object|Array|Number|Boolean] expected.");
this._storage[_(e, t)] = {
translation: n,
locale: e,
raw: !0
};
}
return a._fallbacks_cache = {}, this;
}, b.prototype.setFallback = function(e, t) {
var n = this._defaultLocale;
if (n === e) throw new Error("Default locale can't have fallbacks");
var r = u(t) ? t.slice() : [ t ];
return r[r.length - 1] !== n && r.push(n), this._fallbacks[e] = r, this._fallbacks_cache = {}, 
this;
};
var w = /#\{|\(\(|\\\\/;
b.prototype.translate = function(e, t, n) {
var o, c = g(this, e, t);
return c ? (o = this._storage[c]).raw ? o.translation : (o.hasOwnProperty("compiled") || (o.compiled = function(e, t, n) {
var o, a, i, s, c, l;
return w.test(t) ? 1 === (o = r.parse(t)).length && "literal" === o[0].type ? o[0].text : (e._plurals_cache[n] || (e._plurals_cache[n] = new b(n)), 
l = e._plurals_cache[n], (a = []).push([ 'var str = "", strict, strict_exec, forms, forms_exec, plrl, cache, loc, loc_plzr, anchor;' ]), 
a.push("params = flatten(params);"), p(o, (function(e) {
if ("literal" !== e.type) {
if ("variable" === e.type) return i = e.anchor, void a.push(h('str += ("undefined" === typeof (params[%j])) ? "[missed variable: %s]" : params[%j];', i, i, i));
if ("plural" !== e.type) throw new Error("Unknown node type");
i = e.anchor, s = {}, p(e.strict, (function(t, o) {
var a = r.parse(t);
if (1 === a.length && "literal" === a[0].type) return s[o] = !1, void (e.strict[o] = a[0].text);
s[o] = !0, l.hasPhrase(n, t, !0) || l.addPhrase(n, t, t);
})), c = {}, p(e.forms, (function(t, o) {
var a, i = r.parse(t);
if (1 === i.length && "literal" === i[0].type) return a = i[0].text, e.forms[o] = a, 
void (c[a] = !1);
c[t] = !0, l.hasPhrase(n, t, !0) || l.addPhrase(n, t, t);
})), a.push(h("loc = %j;", n)), a.push(h("loc_plzr = %j;", n.split(/[-_]/)[0])), 
a.push(h("anchor = params[%j];", i)), a.push(h("cache = this._plurals_cache[loc];")), 
a.push(h("strict = %j;", e.strict)), a.push(h("strict_exec = %j;", s)), a.push(h("forms = %j;", e.forms)), 
a.push(h("forms_exec = %j;", c)), a.push("if (+(anchor) != anchor) {"), a.push(h('  str += "[invalid plurals amount: %s(" + anchor + ")]";', i)), 
a.push("} else {"), a.push("  if (strict[anchor] !== undefined) {"), a.push("    plrl = strict[anchor];"), 
a.push("    str += strict_exec[anchor] ? cache.t(loc, plrl, params) : plrl;"), a.push("  } else {"), 
a.push("    plrl = pluralizer(loc_plzr, +anchor, forms);"), a.push("    str += forms_exec[plrl] ? cache.t(loc, plrl, params) : plrl;"), 
a.push("  }"), a.push("}");
} else a.push(h("str += %j;", e.text));
})), a.push("return str;"), new Function("params", "flatten", "pluralizer", a.join("\n"))) : t;
}(this, o.translation, o.locale)), "[object Function]" !== a(o.compiled) ? o.compiled : ((s(n) || i(n)) && (n = {
count: n,
value: n
}), o.compiled.call(this, n, m, v))) : e + ": No translation for [" + t + "]";
}, b.prototype.hasPhrase = function(e, t, n) {
return n ? this._storage.hasOwnProperty(_(e, t)) : !!g(this, e, t);
}, b.prototype.getLocale = function(e, t, n) {
if (n) return this._storage.hasOwnProperty(_(e, t)) ? e : null;
var r = g(this, e, t);
return r ? r.split(y, 2)[0] : null;
}, b.prototype.t = b.prototype.translate, b.prototype.stringify = function(e) {
var t = this, n = {};
p(this._storage, (function(e, t) {
n[t.split(y)[1]] = !0;
}));
var r = {};
p(n, (function(n, o) {
var a = g(t, e, o);
if (a) {
var i = t._storage[a].locale;
r[i] || (r[i] = {}), r[i][o] = t._storage[a].translation;
}
}));
var o = {
fallback: {},
locales: r
}, a = (t._fallbacks[e] || []).slice(0, -1);
return a.length && (o.fallback[e] = a), JSON.stringify(o);
}, b.prototype.load = function(e) {
var t = this;
return i(e) && (e = JSON.parse(e)), p(e.locales, (function(e, n) {
p(e, (function(e, r) {
t.addPhrase(n, r, e, 0);
}));
})), p(e.fallback, (function(e, n) {
t.setFallback(n, e);
})), this;
}, e.exports = b;
},
304: function(e) {
e.exports = function() {
function e(e, t, n, r, o, a) {
this.message = e, this.expected = t, this.found = n, this.offset = r, this.line = o, 
this.column = a, this.name = "SyntaxError";
}
return function(e, t) {
function n() {
this.constructor = e;
}
n.prototype = t.prototype, e.prototype = new n;
}(e, Error), {
SyntaxError: e,
parse: function(t) {
var n, r = arguments.length > 1 ? arguments[1] : {}, o = {}, a = {
start: ue
}, i = ue, s = o, c = "((", l = {
type: "literal",
value: "((",
description: '"(("'
}, u = "))", d = {
type: "literal",
value: "))",
description: '"))"'
}, p = null, f = function(e, t) {
return {
type: "plural",
forms: be(e),
strict: we(e),
anchor: t || "count"
};
}, h = "|", m = {
type: "literal",
value: "|",
description: '"|"'
}, y = function(e, t) {
return [ e ].concat(t);
}, _ = function(e) {
return [ e ];
}, g = "=", v = {
type: "literal",
value: "=",
description: '"="'
}, b = /^[0-9]/, w = {
type: "class",
value: "[0-9]",
description: "[0-9]"
}, k = " ", F = {
type: "literal",
value: " ",
description: '" "'
}, x = function(e, t) {
return {
strict: e.join(""),
text: t.join("")
};
}, S = function() {
return {
text: ie()
};
}, j = "\\", T = {
type: "literal",
value: "\\",
description: '"\\\\"'
}, E = /^[\\|)(]/, O = {
type: "class",
value: "[\\\\|)(]",
description: "[\\\\|)(]"
}, C = function(e) {
return e;
}, P = void 0, I = {
type: "any",
description: "any character"
}, A = function() {
return ie();
}, L = ":", q = {
type: "literal",
value: ":",
description: '":"'
}, M = function(e) {
return e;
}, N = "#{", Y = {
type: "literal",
value: "#{",
description: '"#{"'
}, R = "}", U = {
type: "literal",
value: "}",
description: '"}"'
}, D = function(e) {
return {
type: "variable",
anchor: e
};
}, z = ".", G = {
type: "literal",
value: ".",
description: '"."'
}, H = function() {
return ie();
}, W = /^[a-zA-Z_$]/, J = {
type: "class",
value: "[a-zA-Z_$]",
description: "[a-zA-Z_$]"
}, $ = /^[a-zA-Z0-9_$]/, B = {
type: "class",
value: "[a-zA-Z0-9_$]",
description: "[a-zA-Z0-9_$]"
}, X = function(e) {
return e;
}, K = function(e) {
return {
type: "literal",
text: e.join("")
};
}, V = /^[\\#()|]/, Z = {
type: "class",
value: "[\\\\#()|]",
description: "[\\\\#()|]"
}, Q = 0, ee = 0, te = 0, ne = {
line: 1,
column: 1,
seenCR: !1
}, re = 0, oe = [], ae = 0;
if ("startRule" in r) {
if (!(r.startRule in a)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
i = a[r.startRule];
}
function ie() {
return t.substring(ee, Q);
}
function se(e) {
return te !== e && (te > e && (te = 0, ne = {
line: 1,
column: 1,
seenCR: !1
}), function(e, n, r) {
var o, a;
for (o = n; o < r; o++) "\n" === (a = t.charAt(o)) ? (e.seenCR || e.line++, e.column = 1, 
e.seenCR = !1) : "\r" === a || "\u2028" === a || "\u2029" === a ? (e.line++, e.column = 1, 
e.seenCR = !0) : (e.column++, e.seenCR = !1);
}(ne, te, e), te = e), ne;
}
function ce(e) {
Q < re || (Q > re && (re = Q, oe = []), oe.push(e));
}
function le(n, r, o) {
var a = se(o), i = o < t.length ? t.charAt(o) : null;
return null !== r && function(e) {
var t = 1;
for (e.sort((function(e, t) {
return e.description < t.description ? -1 : e.description > t.description ? 1 : 0;
})); t < e.length; ) e[t - 1] === e[t] ? e.splice(t, 1) : t++;
}(r), new e(null !== n ? n : function(e, t) {
var n, r = new Array(e.length);
for (n = 0; n < e.length; n++) r[n] = e[n].description;
return "Expected " + (e.length > 1 ? r.slice(0, -1).join(", ") + " or " + r[e.length - 1] : r[0]) + " but " + (t ? '"' + function(e) {
function t(e) {
return e.charCodeAt(0).toString(16).toUpperCase();
}
return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, (function(e) {
return "\\x0" + t(e);
})).replace(/[\x10-\x1F\x80-\xFF]/g, (function(e) {
return "\\x" + t(e);
})).replace(/[\u0180-\u0FFF]/g, (function(e) {
return "\\u0" + t(e);
})).replace(/[\u1080-\uFFFF]/g, (function(e) {
return "\\u" + t(e);
}));
}(t) + '"' : "end of input") + " found.";
}(r, i), r, i, o, a.line, a.column);
}
function ue() {
var e, t;
for (e = [], (t = ge()) === o && (t = de()) === o && (t = me()); t !== o; ) e.push(t), 
(t = ge()) === o && (t = de()) === o && (t = me());
return e;
}
function de() {
var e, n, r, a, i;
return e = Q, t.substr(Q, 2) === c ? (n = c, Q += 2) : (n = o, 0 === ae && ce(l)), 
n !== o && (r = pe()) !== o ? (t.substr(Q, 2) === u ? (a = u, Q += 2) : (a = o, 
0 === ae && ce(d)), a !== o ? (i = function() {
var e, n, r;
e = Q, 58 === t.charCodeAt(Q) ? (n = L, Q++) : (n = o, 0 === ae && ce(q));
n !== o && (r = ye()) !== o ? (ee = e, e = n = M(r)) : (Q = e, e = s);
return e;
}(), i === o && (i = p), i !== o ? (ee = e, e = n = f(r, i)) : (Q = e, e = s)) : (Q = e, 
e = s)) : (Q = e, e = s), e;
}
function pe() {
var e, n, r, a;
return e = Q, (n = fe()) !== o ? (124 === t.charCodeAt(Q) ? (r = h, Q++) : (r = o, 
0 === ae && ce(m)), r !== o && (a = pe()) !== o ? (ee = e, e = n = y(n, a)) : (Q = e, 
e = s)) : (Q = e, e = s), e === o && (e = Q, (n = fe()) !== o && (ee = e, n = _(n)), 
e = n), e;
}
function fe() {
var e, n, r, a, i, c;
if (e = Q, 61 === t.charCodeAt(Q) ? (n = g, Q++) : (n = o, 0 === ae && ce(v)), n !== o) {
if (r = [], b.test(t.charAt(Q)) ? (a = t.charAt(Q), Q++) : (a = o, 0 === ae && ce(w)), 
a !== o) for (;a !== o; ) r.push(a), b.test(t.charAt(Q)) ? (a = t.charAt(Q), Q++) : (a = o, 
0 === ae && ce(w)); else r = s;
if (r !== o) if (32 === t.charCodeAt(Q) ? (a = k, Q++) : (a = o, 0 === ae && ce(F)), 
a === o && (a = p), a !== o) {
if (i = [], (c = he()) !== o) for (;c !== o; ) i.push(c), c = he(); else i = s;
i !== o ? (ee = e, e = n = x(r, i)) : (Q = e, e = s);
} else Q = e, e = s; else Q = e, e = s;
} else Q = e, e = s;
if (e === o) {
if (e = Q, n = [], (r = he()) !== o) for (;r !== o; ) n.push(r), r = he(); else n = s;
n !== o && (ee = e, n = S()), e = n;
}
return e;
}
function he() {
var e, n, r;
return e = Q, 92 === t.charCodeAt(Q) ? (n = j, Q++) : (n = o, 0 === ae && ce(T)), 
n !== o ? (E.test(t.charAt(Q)) ? (r = t.charAt(Q), Q++) : (r = o, 0 === ae && ce(O)), 
r !== o ? (ee = e, e = n = C(r)) : (Q = e, e = s)) : (Q = e, e = s), e === o && (e = Q, 
n = Q, ae++, 124 === t.charCodeAt(Q) ? (r = h, Q++) : (r = o, 0 === ae && ce(m)), 
r === o && (t.substr(Q, 2) === u ? (r = u, Q += 2) : (r = o, 0 === ae && ce(d))), 
ae--, r === o ? n = P : (Q = n, n = s), n !== o ? (t.length > Q ? (r = t.charAt(Q), 
Q++) : (r = o, 0 === ae && ce(I)), r !== o ? (ee = e, e = n = A()) : (Q = e, e = s)) : (Q = e, 
e = s)), e;
}
function me() {
var e, n, r, a;
return e = Q, t.substr(Q, 2) === N ? (n = N, Q += 2) : (n = o, 0 === ae && ce(Y)), 
n !== o && (r = ye()) !== o ? (125 === t.charCodeAt(Q) ? (a = R, Q++) : (a = o, 
0 === ae && ce(U)), a !== o ? (ee = e, e = n = D(r)) : (Q = e, e = s)) : (Q = e, 
e = s), e;
}
function ye() {
var e, n, r, a;
if (e = Q, _e() !== o) if (46 === t.charCodeAt(Q) ? (n = z, Q++) : (n = o, 0 === ae && ce(G)), 
n !== o) {
if (r = [], (a = ye()) !== o) for (;a !== o; ) r.push(a), a = ye(); else r = s;
r !== o ? (ee = e, e = H()) : (Q = e, e = s);
} else Q = e, e = s; else Q = e, e = s;
return e === o && (e = _e()), e;
}
function _e() {
var e, n, r, a;
if (e = Q, W.test(t.charAt(Q)) ? (n = t.charAt(Q), Q++) : (n = o, 0 === ae && ce(J)), 
n !== o) {
for (r = [], $.test(t.charAt(Q)) ? (a = t.charAt(Q), Q++) : (a = o, 0 === ae && ce(B)); a !== o; ) r.push(a), 
$.test(t.charAt(Q)) ? (a = t.charAt(Q), Q++) : (a = o, 0 === ae && ce(B));
r !== o ? (ee = e, e = n = A()) : (Q = e, e = s);
} else Q = e, e = s;
return e;
}
function ge() {
var e, t, n, r, a;
if (e = Q, t = [], n = Q, r = Q, ae++, (a = de()) === o && (a = me()), ae--, a === o ? r = P : (Q = r, 
r = s), r !== o && (a = ve()) !== o ? (ee = n, n = r = X(a)) : (Q = n, n = s), n !== o) for (;n !== o; ) t.push(n), 
n = Q, r = Q, ae++, (a = de()) === o && (a = me()), ae--, a === o ? r = P : (Q = r, 
r = s), r !== o && (a = ve()) !== o ? (ee = n, n = r = X(a)) : (Q = n, n = s); else t = s;
return t !== o && (ee = e, t = K(t)), e = t;
}
function ve() {
var e, n, r;
return e = Q, 92 === t.charCodeAt(Q) ? (n = j, Q++) : (n = o, 0 === ae && ce(T)), 
n !== o ? (V.test(t.charAt(Q)) ? (r = t.charAt(Q), Q++) : (r = o, 0 === ae && ce(Z)), 
r !== o ? (ee = e, e = n = C(r)) : (Q = e, e = s)) : (Q = e, e = s), e === o && (t.length > Q ? (e = t.charAt(Q), 
Q++) : (e = o, 0 === ae && ce(I))), e;
}
function be(e) {
for (var t = [], n = 0; n < e.length; n++) void 0 === e[n].strict && t.push(e[n].text);
return t;
}
function we(e) {
for (var t = {}, n = 0; n < e.length; n++) void 0 !== e[n].strict && (t[e[n].strict] = e[n].text);
return t;
}
if ((n = i()) !== o && Q === t.length) return n;
throw n !== o && Q < t.length && ce({
type: "end",
description: "end of input"
}), le(null, oe, re);
}
};
}();
},
532: function(e) {
"use strict";
var t = {};
function n(e) {
var n;
return t[e] ? e : (n = e.toLowerCase().replace("_", "-"), t[n] ? n : (n = n.split("-")[0], 
t[n] ? n : null));
}
var r = /c\d+$/;
function o(e, o) {
var a = n(e);
if (!a) return -1;
if (!t[a].cFn) return 0;
var i = String(o), s = 0;
if (r.test(i)) {
var c = i.split("c");
s = +c[1], o = Math.pow(10, s) * c[0], i = String(o);
}
var l = i.indexOf(".") < 0 ? "" : i.split(".")[1], u = l.length, d = l.replace(/0+$/, "").length, p = +o, f = +i.split(".")[0], h = 0 === l.length ? 0 : +l.replace(/0+$/, "");
return t[a].cFn(p, f, u, +l, h, d, s);
}
function a(e, r) {
var o = n(e);
if (!o) return -1;
if (!t[o].oFn) return 0;
var a = String(r), i = a.indexOf(".") < 0 ? "" : a.split(".")[1], s = i.length, c = i.replace(/0+$/, "").length, l = +r, u = +a.split(".")[0], d = 0 === i.length ? 0 : +i.replace(/0+$/, "");
return t[o].oFn(l, u, s, +i, d, c, 0);
}
e.exports = function(e, r) {
var a = n(e);
return a ? t[a].c[o(a, r)] : null;
}, e.exports.indexOf = o, e.exports.forms = function(e) {
var r = n(e);
return t[r] ? t[r].c : null;
}, e.exports.ordinal = function(e, r) {
var o = n(e);
return t[o] ? t[o].o[a(o, r)] : null;
}, e.exports.ordinal.indexOf = a, e.exports.ordinal.forms = function(e) {
var r = n(e);
return t[r] ? t[r].o : null;
};
var i = [ "zero", "one", "two", "few", "many", "other" ];
function s(e) {
return i[e];
}
function c(e, n) {
var r;
for (n.c = n.c ? n.c.map(s) : [ "other" ], n.o = n.o ? n.o.map(s) : [ "other" ], 
r = 0; r < e.length; r++) t[e[r]] = n;
}
function l(e, t, n) {
return e <= n && n <= t && n % 1 == 0;
}
function u(e, t) {
return e.indexOf(t) >= 0;
}
c([ "af", "an", "asa", "bem", "bez", "bg", "brx", "ce", "cgg", "chr", "ckb", "dv", "ee", "el", "eo", "eu", "fo", "fur", "gsw", "ha", "haw", "jgo", "jmc", "kaj", "kcg", "kkj", "kl", "ks", "ksb", "ku", "ky", "lb", "lg", "mas", "mgo", "ml", "mn", "nah", "nb", "nd", "nn", "nnh", "no", "nr", "ny", "nyn", "om", "os", "pap", "ps", "rm", "rof", "rwk", "saq", "sd", "sdh", "seh", "sn", "so", "ss", "ssy", "st", "syr", "ta", "te", "teo", "tig", "tn", "tr", "ts", "ug", "uz", "ve", "vo", "vun", "wae", "xh", "xog" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "ak", "bho", "guw", "ln", "mg", "nso", "pa", "ti", "wa" ], {
c: [ 1, 5 ],
cFn: function(e) {
return l(0, 1, e) ? 0 : 1;
}
}), c([ "am", "doi", "fa", "kn", "pcm", "zu" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
}
}), c([ "ar", "ars" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 100;
return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : l(3, 10, t) ? 3 : l(11, 99, t) ? 4 : 5;
}
}), c([ "as", "bn" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return u([ 1, 5, 7, 8, 9, 10 ], e) ? 0 : u([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), c([ "ast", "de", "et", "fi", "fy", "gl", "ia", "io", "nl", "sw", "ur", "yi" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
}
}), c([ "az" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 3, 4, 5 ],
oFn: function(e, t) {
var n = t % 10, r = t % 100, o = t % 1e3;
return u([ 1, 2, 5, 7, 8 ], n) || u([ 20, 50, 70, 80 ], r) ? 0 : u([ 3, 4 ], n) || u([ 100, 200, 300, 400, 500, 600, 700, 800, 900 ], o) ? 1 : 0 === t || 6 === n || u([ 40, 60, 90 ], r) ? 2 : 3;
}
}), c([ "bal" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "be" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e) {
var t = e % 10, n = e % 100;
return 1 === t && 11 !== n ? 0 : l(2, 4, t) && !l(12, 14, n) ? 1 : 0 === t || l(5, 9, t) || l(11, 14, n) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(e) {
var t = e % 100;
return u([ 2, 3 ], e % 10) && !u([ 12, 13 ], t) ? 0 : 1;
}
}), c([ "bm", "bo", "dz", "hnj", "id", "ig", "ii", "ja", "jbo", "jv", "jw", "kde", "kea", "km", "ko", "lkt", "my", "nqo", "osa", "sah", "ses", "sg", "su", "th", "to", "tpi", "und", "wo", "yo", "yue", "zh" ], {}), 
c([ "br" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 10, n = e % 100, r = e % 1e6;
return 1 !== t || u([ 11, 71, 91 ], n) ? 2 !== t || u([ 12, 72, 92 ], n) ? !l(3, 4, t) && 9 !== t || l(10, 19, n) || l(70, 79, n) || l(90, 99, n) ? 0 !== e && 0 === r ? 3 : 4 : 2 : 1 : 0;
}
}), c([ "bs", "hr", "sh", "sr" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, n, r) {
var o = t % 10, a = t % 100, i = r % 10, s = r % 100;
return 0 === n && 1 === o && 11 !== a || 1 === i && 11 !== s ? 0 : 0 === n && l(2, 4, o) && !l(12, 14, a) || l(2, 4, i) && !l(12, 14, s) ? 1 : 2;
}
}), c([ "ca" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return u([ 1, 3 ], e) ? 0 : 2 === e ? 1 : 4 === e ? 2 : 3;
}
}), c([ "ceb" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
var o = t % 10, a = r % 10;
return 0 === n && u([ 1, 2, 3 ], t) || 0 === n && !u([ 4, 6, 9 ], o) || 0 !== n && !u([ 4, 6, 9 ], a) ? 0 : 1;
}
}), c([ "cs", "sk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : l(2, 4, t) && 0 === n ? 1 : 0 !== n ? 2 : 3;
}
}), c([ "cy" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(e) {
return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 === e ? 3 : 6 === e ? 4 : 5;
},
o: [ 0, 1, 2, 3, 4, 5 ],
oFn: function(e) {
return u([ 0, 7, 8, 9 ], e) ? 0 : 1 === e ? 1 : 2 === e ? 2 : u([ 3, 4 ], e) ? 3 : u([ 5, 6 ], e) ? 4 : 5;
}
}), c([ "da" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r, o) {
return 1 === e || 0 !== o && u([ 0, 1 ], t) ? 0 : 1;
}
}), c([ "dsb", "hsb" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, n, r) {
var o = t % 100, a = r % 100;
return 0 === n && 1 === o || 1 === a ? 0 : 0 === n && 2 === o || 2 === a ? 1 : 0 === n && l(3, 4, o) || l(3, 4, a) ? 2 : 3;
}
}), c([ "en" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
var t = e % 10, n = e % 100;
return 1 === t && 11 !== n ? 0 : 2 === t && 12 !== n ? 1 : 3 === t && 13 !== n ? 2 : 3;
}
}), c([ "es" ], {
c: [ 1, 4, 5 ],
cFn: function(e, t, n, r, o, a, i) {
return 1 === e ? 0 : 0 === i && 0 !== t && 0 === t % 1e6 && 0 === n || !l(0, 5, i) ? 1 : 2;
}
}), c([ "ff", "kab" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return u([ 0, 1 ], t) ? 0 : 1;
}
}), c([ "fil", "tl" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
var o = t % 10, a = r % 10;
return 0 === n && u([ 1, 2, 3 ], t) || 0 === n && !u([ 4, 6, 9 ], o) || 0 !== n && !u([ 4, 6, 9 ], a) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "fr" ], {
c: [ 1, 4, 5 ],
cFn: function(e, t, n, r, o, a, i) {
var s = t % 1e6;
return u([ 0, 1 ], t) ? 0 : 0 === i && 0 !== t && 0 === s && 0 === n || !l(0, 5, i) ? 1 : 2;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "ga" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 2 === e ? 1 : l(3, 6, e) ? 2 : l(7, 10, e) ? 3 : 4;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "gd" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e) {
return u([ 1, 11 ], e) ? 0 : u([ 2, 12 ], e) ? 1 : l(3, 10, e) || l(13, 19, e) ? 2 : 3;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return u([ 1, 11 ], e) ? 0 : u([ 2, 12 ], e) ? 1 : u([ 3, 13 ], e) ? 2 : 3;
}
}), c([ "gu", "hi" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return 1 === e ? 0 : u([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), c([ "gv" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && u([ 0, 20, 40, 60, 80 ], t % 100) ? 2 : 0 !== n ? 3 : 4;
}
}), c([ "he" ], {
c: [ 1, 2, 4, 5 ],
cFn: function(e, t, n) {
var r = e % 10;
return 1 === t && 0 === n ? 0 : 2 === t && 0 === n ? 1 : 0 !== n || l(0, 10, e) || 0 !== r ? 3 : 2;
}
}), c([ "hu" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return u([ 1, 5 ], e) ? 0 : 1;
}
}), c([ "hy" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return u([ 0, 1 ], t) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "is" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r, o) {
return 0 === o && 1 === t % 10 && 11 !== t % 100 || 0 !== o ? 0 : 1;
}
}), c([ "it" ], {
c: [ 1, 4, 5 ],
cFn: function(e, t, n, r, o, a, i) {
return 1 === t && 0 === n ? 0 : 0 === i && 0 !== t && 0 === t % 1e6 && 0 === n || !l(0, 5, i) ? 1 : 2;
},
o: [ 4, 5 ],
oFn: function(e) {
return u([ 11, 8, 80, 800 ], e) ? 0 : 1;
}
}), c([ "iu", "naq", "sat", "se", "sma", "smi", "smj", "smn", "sms" ], {
c: [ 1, 2, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 2 === e ? 1 : 2;
}
}), c([ "ka" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(e, t) {
var n = t % 100;
return 1 === t ? 0 : 0 === t || l(2, 20, n) || 40 === n || 60 === n || 80 === n ? 1 : 2;
}
}), c([ "kk" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(e) {
var t = e % 10;
return 6 === t || 9 === t || 0 === t && 0 !== e ? 0 : 1;
}
}), c([ "ksh" ], {
c: [ 0, 1, 5 ],
cFn: function(e) {
return 0 === e ? 0 : 1 === e ? 1 : 2;
}
}), c([ "kw" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 100, n = e % 1e3, r = e % 1e5, o = e % 1e6;
return 0 === e ? 0 : 1 === e ? 1 : u([ 2, 22, 42, 62, 82 ], t) || 0 === n && (l(1e3, 2e4, r) || 4e4 === r || 6e4 === r || 8e4 === r) || 0 !== e && 1e5 === o ? 2 : u([ 3, 23, 43, 63, 83 ], t) ? 3 : 1 !== e && u([ 1, 21, 41, 61, 81 ], t) ? 4 : 5;
},
o: [ 1, 4, 5 ],
oFn: function(e) {
var t = e % 100;
return l(1, 4, e) || l(1, 4, t) || l(21, 24, t) || l(41, 44, t) || l(61, 64, t) || l(81, 84, t) ? 0 : 5 === e || 5 === t ? 1 : 2;
}
}), c([ "lag" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t) {
return 0 === e ? 0 : u([ 0, 1 ], t) && 0 !== e ? 1 : 2;
}
}), c([ "lij" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(e) {
return 11 === e || 8 === e || l(80, 89, e) || l(800, 899, e) ? 0 : 1;
}
}), c([ "lo", "ms", "vi" ], {
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "lt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n, r) {
var o = e % 10, a = e % 100;
return 1 !== o || l(11, 19, a) ? l(2, 9, o) && !l(11, 19, a) ? 1 : 0 !== r ? 2 : 3 : 0;
}
}), c([ "lv", "prg" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t, n, r) {
var o = e % 10, a = e % 100, i = r % 100, s = r % 10;
return 0 === o || l(11, 19, a) || 2 === n && l(11, 19, i) ? 0 : 1 === o && 11 !== a || 2 === n && 1 === s && 11 !== i || 2 !== n && 1 === s ? 1 : 2;
}
}), c([ "mk" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
return 0 === n && 1 === t % 10 && 11 !== t % 100 || 1 === r % 10 && 11 !== r % 100 ? 0 : 1;
},
o: [ 1, 2, 4, 5 ],
oFn: function(e, t) {
var n = t % 10, r = t % 100;
return 1 === n && 11 !== r ? 0 : 2 === n && 12 !== r ? 1 : u([ 7, 8 ], n) && !u([ 17, 18 ], r) ? 2 : 3;
}
}), c([ "mo", "ro" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 0 !== n || 0 === e || l(2, 19, e % 100) ? 1 : 2;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "mr" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return 1 === e ? 0 : u([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 3;
}
}), c([ "mt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e) {
var t = e % 100;
return 1 === e ? 0 : 0 === e || l(2, 10, t) ? 1 : l(11, 19, t) ? 2 : 3;
}
}), c([ "ne" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return l(1, 4, e) ? 0 : 1;
}
}), c([ "or" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return 1 === e || 5 === e || l(7, 9, e) ? 0 : u([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), c([ "pl" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, o = t % 100;
return 1 === t && 0 === n ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, o) ? 1 : 0 === n && 1 !== t && l(0, 1, r) || 0 === n && l(5, 9, r) || 0 === n && l(12, 14, o) ? 2 : 3;
}
}), c([ "pt" ], {
c: [ 1, 4, 5 ],
cFn: function(e, t, n, r, o, a, i) {
var s = t % 1e6;
return l(0, 1, t) ? 0 : 0 === i && 0 !== t && 0 === s && 0 === n || !l(0, 5, i) ? 1 : 2;
}
}), c([ "pt-pt" ], {
c: [ 1, 4, 5 ],
cFn: function(e, t, n, r, o, a, i) {
return 1 === t && 0 === n ? 0 : 0 === i && 0 !== t && 0 === t % 1e6 && 0 === n || !l(0, 5, i) ? 1 : 2;
}
}), c([ "ru" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, o = t % 100;
return 0 === n && 1 === r && 11 !== o ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, o) ? 1 : 0 === n && 0 === r || 0 === n && l(5, 9, r) || 0 === n && l(11, 14, o) ? 2 : 3;
}
}), c([ "sc", "scn" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(e) {
return u([ 11, 8, 80, 800 ], e) ? 0 : 1;
}
}), c([ "shi" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : l(2, 10, e) ? 1 : 2;
}
}), c([ "si" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
return u([ 0, 1 ], e) || 0 === t && 1 === r ? 0 : 1;
}
}), c([ "sl" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, n) {
var r = t % 100;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && l(3, 4, r) || 0 !== n ? 2 : 3;
}
}), c([ "sq" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 4 === e % 10 && 14 !== e % 100 ? 1 : 2;
}
}), c([ "sv" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
var t = e % 100;
return u([ 1, 2 ], e % 10) && !u([ 11, 12 ], t) ? 0 : 1;
}
}), c([ "tk" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 3, 5 ],
oFn: function(e) {
return u([ 6, 9 ], e % 10) || 10 === e ? 0 : 1;
}
}), c([ "tzm" ], {
c: [ 1, 5 ],
cFn: function(e) {
return l(0, 1, e) || l(11, 99, e) ? 0 : 1;
}
}), c([ "uk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, o = t % 100;
return 0 === n && 1 === r && 11 !== o ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, o) ? 1 : 0 === n && 0 === r || 0 === n && l(5, 9, r) || 0 === n && l(11, 14, o) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(e) {
return 3 === e % 10 && 13 !== e % 100 ? 0 : 1;
}
});
},
979: function(e, t, n) {
"use strict";
n.r(t), t.default = {
site: {
privacy_policy: "privacy policy",
terms: "terms of usage",
banner_bottom_courses: 'Advance your skils with <a href="https://frontendmasters.com/learn/javascript/?utm_source=website&utm_medium=jsinfo&utm_campaign=jsinfo">video courses on JavaScript and Frameworks</a>.',
banner_buttom_sponsor: 'Benefitted from the site? <a href="/sponsor">Sponsor us</a>!',
action_required: "Action required",
gdpr_dialog: {
title: "This website uses cookies",
text: 'We use browser technologies such as cookies and local storage to store your preferences. You need to accept our <a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms of Use</a> for us to do so.',
accept: "Accept",
cancel: "Cancel"
},
theme: {
light: "Light theme",
dark: "Dark theme",
change: "Change theme"
},
toolbar: {
lang_switcher: {
cta_text: '<p>We want to make this open-source project available for people all around the world.</p> <p><a href="https://javascript.info/translate">Help to translate</a> the content of this tutorial to your language!</p>\n',
footer_text: "how much content is translated to the corresponding language",
old_version: "Old version is published, needs backporting."
},
logo: {
normal: {
svg: "sitetoolbar__logo_en.svg",
width: 200
},
"normal-white": {
svg: "sitetoolbar__logo_en-white.svg"
},
small: {
svg: "sitetoolbar__logo_small_en.svg",
width: 70
},
"small-white": {
svg: "sitetoolbar__logo_small_en-white.svg"
}
},
sections: null,
buy_ebook_extra: "Buy",
buy_ebook: "EPUB/PDF",
search_placeholder: "Search on Javascript.info",
search_button: "Search",
public_profile: "Public profile",
account: "Account",
notifications: "Notifications",
admin: "Admin",
logout: "Logout"
},
sorry_old_browser: "Sorry, Internet Explorer is not supported, please use a newer browser.",
contact_us: "contact us",
about_the_project: "about the project",
ilya_kantor: "Ilya Kantor",
comments: "Comments",
loading: "Loading...",
search: "Search",
share: "Share",
read_before_commenting: "read this before commenting…",
last_updated_at: "Last updated on #{date}",
meta: {
description: "Modern JavaScript Tutorial: simple, but detailed explanations with examples and tasks, including: closures, document and events, object oriented programming and more."
},
"tablet-menu": {
choose_section: "Choose section",
search_placeholder: "Search in the tutorial",
search_button: "Search"
},
comment: {
help: [ 'If you have suggestions what to improve - please <a href="https://github.com/javascript-tutorial/en.javascript.info/issues/new">submit a GitHub issue</a> or a pull request instead of commenting.', "If you can't understand something in the article – please elaborate.", "To insert few words of code, use the <code>&lt;code&gt;</code> tag, for several lines – wrap them in <code>&lt;pre&gt;</code> tag, for more than 10 lines – use a sandbox (<a href='https://plnkr.co/edit/?p=preview'>plnkr</a>, <a href='https://jsbin.com'>jsbin</a>, <a href='http://codepen.io'>codepen</a>…)" ]
},
edit_on_github: "Edit on GitHub",
error: "error",
close: "close",
hide_forever: "hide permanently",
hide_week: "hide for 1 week",
hidden_forever: "This information will not show up any more.",
hidden_week: "This information will stay hidden for 1 week",
subscribe: {
title: "Watch for javascript.info updates",
text: "We do not send advertisements, only relevant stuff. You choose what to receive:",
agreement: 'By signing up to newsletters you agree to the <a href="#{link}" target="_blank">terms of usage</a>.',
button: "Subscribe",
button_unsubscribe: "Unsubscribe from all",
common_updates: "Common updates",
common_updates_text: "new courses, master classes, article and screencast releases",
your_email: "your@email.here",
newsletters: "newsletter,newsletters,newsletters",
no_selected: "Nothing selected"
},
form: {
value_must_not_be_empty: "Value must not be empty.",
value_is_too_long: "Value is too long.",
value_is_too_short: "Value is too short.",
invalid_email: "Invalid email.",
invalid_value: "Invalid value.",
invalid_autocomplete: "Please, choose from the list",
invalid_date: "Invalid date, format: dd.mm.yyyyy.",
invalid_range: "This date is invalid here.",
save: "Save",
upload_file: "Upload file",
cancel: "Cancel",
server_error: "Request error, status code"
}
}
};
},
527: function(e, t, n) {
"use strict";
n.r(t), t.default = {
line1: "This is to certify that from #{dateStart} to #{dateEnd}",
line1_0: "This is to certify that at #{date}",
line2: "has completed the program",
no_user: "There is no such user",
no_participant: "There is no such participant",
no_certificate: "There is no such certificate"
};
},
247: function(e, t, n) {
"use strict";
n.r(t), t.default = {
invite: {
invitation: "Course invitation",
invitation_masterclass: "Master class invitation",
seat_has_been_reserved: "Registration for #{title} was created on javascript.info.",
click_to_join: 'Click on link <a href="#{link}">#{link}</a>, for joining the group.',
auto_login: "You will be automatically signed in on the website then.",
contact_person: "Contact person indicated in registration: #{name}.",
questions: "In case of any questions – you can always reply to this email."
},
invite_remind: {
title: "Please join the group",
hello: "Hello!",
still_not_joined: "You are in the participants' list but haven't join the group #{title} yet.",
join_for: "It is neccessary for you to take part and receive materials.",
click_to_join: 'You can join the group by following the link <a href="#{link}">#{link}</a>.',
questions: "In case of any questions – you can always reply to this email."
},
materials: {
title: "Notifications on #{type} materials",
materials_added: 'Materials have been added to the page <a href="#{link}">#{link}</a>.',
click_to_download: 'You can download the file by direct link (only if you are signed in): <a href="#{fileLink}">#{fileTitle}</a>.'
},
move: {
title: "Notification about transfer",
hello: "Hello!",
you_were_moved: 'You have been transferred from "#{oldGroup}" to "#{newGroup}".',
questions: "In case of any questions – you can always reply to this email."
},
order_cancel: {
subject: "[Courses registration] Order #{number} on site #{host} has been canceled",
title: "Your order #{number} has been cancelled due to time expiry",
order_cancelled: "Your order on JavaScript.info with number #{number} has been cancelled automatically.",
group_start_soon: "&nbsp;due to soon #{type} beginning and absence of payment information.",
payment_expired: "&nbsp;due to time expiry and absence of payment information.",
duplicate: "You have another order #{number} to the same group which has been already payed, so duplicate order was cancelled.",
list_orders: "List of active order is available in your account:&nbsp;",
need_login: "&nbsp;(you need to be signed in).",
already_payed_or_soon: 'If you are going to pay for this order today — please visit the link <a href="#{orderPendingLink}">#{orderPendingLink}</a>.',
already_payed: 'If you are going to pay for this order — please visit the link <a href="#{orderPendingLink}">#{orderPendingLink}</a>.',
info: "Automatic cancellation of unpayed order is for removing unactive orders."
},
payment_confirmation: {
title: "Payment confirmation",
payment_confirmed: "We confirm payment receipt for order #{number}.",
participation_confirmed: "Your registration is approved.",
free_participation: "Your registration without payment is approved.",
set_participants: 'You did not select participants. You can do it in section <a href="#{profileOrderUrl}">Orders</a> in your account, in order details.',
is_participant: 'Follow the link <a href="#{orderUserInviteLink}">#{orderUserInviteLink}</a> to join the group.',
confirmation_email: "Participants invited by you will receive email as well from orders@javascript.info.",
questions: "In case of any questions – you can always reply to this email."
}
};
},
652: function(e, t, n) {
"use strict";
n.r(t), t.default = {
courses: "Courses",
type: {
masterclass: "master class",
course: "course"
},
by_user: {
title: "Description",
info: "Instructions",
slack_logs: "Slack chat logs",
jb: "Discount for Jetbrains editors",
ical: "Schedule in iCal format",
tasklist: "Tasklist",
materials: "Learning materials",
participants: "Participants’ forms",
participants_json: "Participants’ JSON (for CORS)"
},
group_feedback_list: {
plural_feedback: " feedback,feedbacks,feedbacks"
},
group_feedback_edit: {
no_participant: "Only group participants can leave feedback.",
no_rights: "Insufficient rights",
title: "Feedback",
public_feedback: "Your feedback has been saved successfully. You can share it in social networks.",
private_feedback: "Your feedback has been saved successfully. Only we can see it.",
rate_course: "Please rate this #{type}.",
missing_feedback_text: "You forgot to write the feedback."
},
group_feedback_show: {
private_feedback: "Private feedback",
title: "Feedback",
head_title: "Feedback on",
comment_saved: "Comment has been saved",
comment_save_error: "Comment has not been saved",
edit: "Edit"
},
group_finish: "Group #{title} has completed the course successfully.",
group_cancel: "Group #{title} was successfully cancelled.",
group_materials: {
title: "Learning materials",
added_with_notifications: "The material has been added, notifications have been sent.",
added_wo_notifications: "The material has been added, notifications have NOT been sent.",
email_subject: "New #{type} materials have been added",
remove_file: "Remove file",
file_removed: "The file has been deleted.",
settings_saved: "The setting has been saved."
},
group_materials_download: {
invalid_link: "Invalid link. Probably, this material has been added by mistake and later deleted by the teacher."
},
group_slack_register: {
already_slack_user: "The user with email #{email} is already registered in Slack.",
user_invited: "The invitation was sent to email #{email}."
},
group_slack_invite: {
no_target: "Neither a participant and nor a teacher",
no_slack_user: "The user with email #{email} is not registered in Slack, please ask for the invite first.",
user_added: "User #{email} has been invited to slack channel #{groupSlug}."
},
participants: {
data_updated: "This data has been updated.",
fix_errors: "Please fix errors."
},
invite: {
order: "Order #{order}",
success: "Congratulations, you have joined the #{type}. Below, next to the #{type}, you will find the instruction.",
already_accepted_title: "Invitation has already been accepted",
already_accepted: "This invitation has already been accepted. Log in to the account of the #{type} participant.",
outdated_link_title: "Outdated link",
outdated_link: 'Sorry, this link is outdated. If you have any questions, please send them to <a href="mailto:#{email}">#{email}</a>',
already_added: "You are #{type} participant already. Below, next to the #{type}, you will find the instruction.",
choose_country: " choose country ",
details_form: {
title: "Participant’s form",
subtitle: "The information is exclusively for the course teacher. Your name will also be in the certificate. Please notice that changing the specified name and surname is only possible via the request to site's support.\n",
password: "Password",
first_name: "First name *",
surname: "Last name *",
first_name_en: "First name in English *",
surname_en: "Last name in English *",
photo: "Photo",
photo_upload: "Upload new photo",
country: "Country *",
city: "City",
occupation: "Occupation",
occupation_note: "What's your occupation or field of expertise (briefly)?",
social_note: "Social network profile or personal page with information about your professional activity.",
purpose: "What for do you plan to use the technologies you learn at the #{type}?",
wishes: "Your wishes about the #{type}?",
submit: "Submit"
},
signup_form: {
signup_needed: "Please log in to continue.",
username: "Username",
password: "Password",
submit: "Sign up"
}
},
signup: {
order: "Order",
title: "Order No. #{order}",
amount: "Cost",
no_such_group: "There is no such group.",
signup_finished_title: "Sign up for this group is finished",
signup: "Sign up for the #{type}",
signup_finished: 'Sign up for this group is finished. Go to <a href="/courses/#{slug}">the #{type} page</a> to see groups open for sign up.',
signup_title: "Sign up\n #{title}",
tutorial: "Tutorial",
courses: "Courses",
choose_group: "Choose a group from the list, please.",
login_please: "Please log in or register to sign up.",
plural_human: "person,persons,persons",
receiptTitle: "Participation in the #{type} for #{count} #{people}",
email_subject: "Order #{order}",
payment_failed: "Payment has not been proceed, please try again.",
questions: 'For any questions regarding payment please send email to <a href="mailto:#{ordersMail}">#{ordersMail}</a>.',
contact_info: "Contact information:",
payment: "Payment:",
payment_succeed: "Succeed",
payment_pending: "Waiting for been confirmed",
thanks_for_order: "Thanks for the order!",
confirmation: "The confirmation was sent at #{email}",
click_to_join_group: 'Please go to the <a href="#{url}/courses">Courses</a> section of your account to join the group.',
edit_participants: 'Editing information of other participants is available in the section <a href="#{url}/orders">Orders</a> of you account. They will also receive notifications.',
questions_after: 'If you have any questions, please send them to <a href="mailto:#{email}">#{email}</a>',
teacher: "Teacher",
seats_pluralize: "seat,seats,seats",
seats_left: "#{seats} #{seats_pluralized} left",
seats_limited: "Seats are limited",
signup_button: "Sign up",
subscribe: "Subscribe",
subscribe_other: [ "Also you can", "request notifications", "about new groups of this program" ],
confirmation_email: "Confirmation email with program details and dates will be send to your email.",
this_course: "This course is",
conducted_plural: "conducted by:",
conducted_single: "conducted by:"
},
feedback_loader: {
no_feedback: "No feedbacks yet."
},
photo_load_widget: {
wrong_format: "Wrong file type or image has been damaged."
},
participant_item: {
participant: "Participant",
invalid_email: "Enter valid email"
},
comment_form: {
submit: "Publish",
cancel: "Cancel"
},
admin: {
no_such_order: "No such order.",
no_such_group: "No such group",
no_such_file: "No such file",
transfer_participant: "You have been transfered to new group #{title}",
transfer_succeed_notified: "Transfer has been finished, notification has been sent.",
transfer_succeed_not_notified: "Transfer has been finished, notification has NOT been sent.",
participant_edited: "Participant's data has been successfully changed: #{email}",
participant_deducted: "Participant has been deducted: #{email}",
document_uploaded: "Manager has been attached documents to the order: #{order}"
},
course: {
code_discount: "Discount has been provided by code",
participant_discount: '10% discount is provided to <a href="mailto:EMAIL">EMAIL</a> for participating in our courses.'
},
patch: {
information_updated_notified: "Information has been updated invitations have been sent to: #{emails}.",
information_updated_not_notified: "Information about participants has been updated."
},
chat_logs: {
title: "Group chat logs",
timeframe_from: "Timeframe from",
timeframe_to: "to",
apply: "Apply"
},
contacts: {
title: "Contact information",
note: "Leave your contact details so that we can contact you if necessary, only about this course.",
name_surname: "Your first and last name:",
phone: "Phone number:",
data_secured: "Your personal data is secure",
personal_info: "We use this information only for purposes directly related to this course. Will not bother you unless absolutely needed.",
save_and_continue: "Save and continue"
},
grayed_list: {
contact_info: "Contact information",
payment: "Payment",
confirmation: "Confirmation"
},
participant_register: {
title: "Seats and participants",
participants_count: "Participants count",
only_one_place: "Sorry, there is only one seat left",
enter_count: "enter count from 1 to #{max}",
already_participant: "I'm a participant",
no: "NO",
yes: "YES",
amount: "Total amount",
add_participants: "Add participants",
add_later: "(it can be done later)",
save_and_continue: "Save and continue"
},
payment: {
title: "Payment",
do_not_pay_twice: "Do not pay twice. Change payment method only if you know that payment has not been proceed.",
terms_accept: 'By signing up for the #{type}, you agree to the <a href="/courses-offer" target="_blank">contract</a>.',
questions: 'If you have any questions, please send them to <a href="mailto:#{ordersMail}">#{ordersMail}</a>.',
goto_payment: "Go to payment",
renew_order: "Order was successfully transferred to waiting for payment status",
renew_order_fail: "You can't transfer this order to waiting for payment status as the lessons have already started"
},
participant_info: {
country: "Country",
city: "City",
about_link: "Link to profile",
occupation: "Occupation",
purpose: "What is your purpose of participating this #{type}?",
wishes: "You wishes of this #{type}"
},
guarantee: {
title: "Guarantee",
description: "<p>If you don't like our course for any reason, you can get money back.</p>\n<p>Let us know during the first week of the course, and then your participation will cease and you get a full refund.</p>\n"
},
additional_information: "Additional information",
back_to_all: "All courses",
create_order: {
signup_finished: "This group is full, sorry.",
no_seats: "We're sorry, this group is out of seats already.",
seats_limit: "We're sorry, there are no so many seats. Please decrease the number of seats to #{max}.",
no_contact_person: "No contact person.",
set_participants: "No participants.",
not_authorized: "You're not authorized.",
title_check_prefix: "Learning at the #{type}:",
payment_for: "Payment for"
},
invite_email_subject: "Invite to join #{type}: #{title}",
invite_remind_email_subject: "#{group} – you didn't join the group",
request_notification: "Request a notification:",
promo_video: {
text: "#{type} overview"
}
};
},
370: function(e, t, n) {
"use strict";
n.r(t), t.default = {
title: "Feedback on the #{type}\n #{title}",
title_all: "Feedbacks on the #{type}\n #{title}",
average_grade: "average grade",
grades: {
1: "Bad",
2: "So-so",
3: "Satisfactory",
4: "Good",
5: "Excellent"
},
participated: "Grades given by developers who completed this #{type}",
recommend_text: "of students who completed this #{type} recommend it",
recommend_text_frontpage: "Of users recommend this #{type}",
all_feedbacks: "all feedbacks",
feedback_cut: "whole feedback",
page: {
recommend: 'Recommends #{type} "#{title}"',
course: "#{type}",
teacher: "Teacher",
edit: "edit",
share: "Share"
},
form: {
grade: "How do you rate this #{type}?*",
recommend: "Would you recommend it to others?*",
recommend_yes: "Yes",
recommend_no: "No",
feedback: "Feedback*",
feedback_placeholder: "A few words about was the #{type} useful, is the material easily understandable, are you satisfied with teacher qualification, etc.",
is_public: "Public feedback",
is_public_note: "(would be published at javascript.info)",
edit: "Edit",
name: "Name",
photo: "Photo",
photo_upload: "Upload new photo",
country: "Country",
city: "City",
occupation: "Occupation",
social: "Social network profile or personal page with information about you professional activity",
social_note: "This link would be available only in the context of your feedback. Please, specify it.",
submit: "Submit",
delete: "delete",
delete_confirm: "Are you sure you want to delete this feedback?",
deleted: "Feedback has been successfully deleted"
},
list: {
policy: "Javascript.info feedback policy",
policy_list: 'All published feedbacks are shown, including those with negative grade.\nReviews are shows "as is", we do not moderate them as far as they contain no site or #{type} rules violation (obscene language and other).\nA feedback can only be left by the #{type} participant after course completion.'
},
filter: {
teachers: "all teachers",
all: "all grades",
courses: "all courses",
grade: "with grade"
}
};
},
319: function(e, t, n) {
"use strict";
n.r(t), t.default = {
title: "JavaScript courses",
description: 'Here we make "live" courses on professional JavaScript with professional developers as teachers of how to think in JavaScript, write in a simple, fast and efficient manner.\n',
opened_courses: "Go to the list of upcoming courses",
people_talk_about: "Feedback on the courses",
people_talk_about_single: "Feedback on the #{type}",
features: [ {
name: "quality",
title: "Quality",
text: "It’s the essential part. We learn development at a high professional standard"
}, {
name: "online",
title: "Live webinars",
text: "Learning live from a developer gives a completely different result than watching online videos"
}, {
name: "teachers",
title: "Support",
text: "You will get personal advice and feedback on your code"
}, {
name: "result",
title: "Result",
text: "Those who you actively participate, solve tasks, become good developers"
}, {
name: "guarantee",
title: "Guarantee",
text: "Money back guarantee if something is wrong"
} ],
program: "Courses program, sign up for the courses",
master_class: "Master classes",
master_class_text: "Apart from courses master classes are one or two day webinars with a smaller program. Its main purpose is to gain or reinforce in a short time knowledge of a concrete technology. Master classes like courses are interactive and provide communication with a teacher.\n",
opinions: "Opinions of professionals",
ongoing: "Sign up is open",
teachers_title: "Teacher,Teachers,Teachers",
teachers_description: "The courses are held by experienced and qualified professionals only. Each teacher has both practical and theoretical knowledge gained during the years of working in the field of web development.\n",
phone_toggler: "Information about the teacher and courses features.",
faq: {
title: "Frequently asked questions",
another_question: 'Do you have another question? Ask it in the comments below or write me an email <a href="mailto:iliakan@javascript.info">iliakan@javascript.info</a> (I check the mailbox regularly), and in an urgent cases you can &nbsp;call me +79035419441.'
},
learn_more: "Learn more",
guarantee: {
title: "Guarantees",
description: "All courses’ participants, regardless of sex, age, sexual and religious identity&hellip;",
subtitle: "Guaranty:",
reasons: [ "If you will not understand topics’ explanations", "If you will not obtain new skills and knowledge from the courses", "If you will not be able to connect online learning system" ],
result: "can get your money back.",
condition: "You just need to write me, specify the reason from the list, tell exactly what are you not satisfied with, prove your identity (to prove that the refund wasn’t demanded by a hacker) no later than the end of the course’s first week; after that your participation will be terminated and you will get your money back by any method convenient for you.\n"
},
participant_logos: {
title: "Our participants",
description: "We've been running workshops for professionals in the sphere of JavaScript since 2006, courses – since 2011. During this time, thousands of people from hundreds of companies have completed trainings, it’s hard to count them all. Particularly, employees of the following companies attended workshops and courses:\n",
notes: 'Hundreds of feedbacks on the trainings were posted, which now you can find <a href="https://JavaScript.ru/course/afters">here</a> and <a href="https://JavaScript.ru/course/afters">here</a>, you can read some of them on this page as well. You can find professionals’ opinion about the courses below.\n'
},
professionals: {
title: "Professionals’ opinion",
articles: [ {
userpic: "/img/courses/dmitryx.jpg",
username: "Dmytro Poliakov",
linkedin_link: "https://www.linkedin.com/in/dmitryx",
about: 'Frontend developer at <a href="http://google.com">Google</a> who is developing <a href="http://youtube.com">Youtube</a>, more than 15 years of total work experience as an architect and lead developer different projects.\n',
feedback: "I attended several workshops run by Ilya and learned a lot of useful information. I really like professional attitude, greatly organized representation and structuring of material, examples and patterns of application in development. I think Ilya is one of the best JS developers and teachers. I strongly advise these courses for everyone who wants to improve their knowledge and become a professional.\n"
}, {
userpic: "/img/courses/andrewsumin.jpg",
username: "Andrew Sumin",
linkedin_link: "https://ru.linkedin.com/in/andrewsumin",
about: 'Lead of frontend developers at <a href="http://mail.ru">Mail.ru</a>, also took part in such projects as <a href="http://hh.ru">hh.ru</a> and <a href="http://yandex.ru">yandex.ru</a>.\n',
feedback: "Back in 2006, when I worked as a frontend developer at Yandex, I attended Ilya’s course. Even at the time his workshops were notable for strong background, detailed analysis of important and complex aspects and smart organizing. I would wholeheartedly recommend Ilya’s courses to everyone who wants to know everything about JavaScript.\n"
}, {
userpic: "/img/courses/tyv.jpg",
username: "Yuri Tkachenko",
linkedin_link: "https://ua.linkedin.com/in/tkachenkoyuri",
about: 'Frontend developer at <a href="http://yandex.ru">Yandex</a>, has led one of the layout designers’ teams for 3, more than 10 years of total work experience in frontend development.\n',
feedback: "During my work as a lead of one of the layout designers’ teams at Yandex, I faced the task to organize advanced professional training of a big team of layout designers. After a thorough analysis, I chose the course of Ilya Kantor and was very happy with the result. I believe this course is the best one among the courses in Russian.\n"
} ]
}
};
},
13: function(e, t, n) {
"use strict";
n.r(t), t.default = {
dropbox_share: {
enter_email: "Please enter email address of your Dropbox account below. You will receive an invitation (beta feature).\n",
by_default: "Your email on this website is entered in the field by default, but if you use Dropbox account under another email, you can change it.\n",
request_access: "Request access to the directory"
},
materials: {
notify_me: "Notify me by email when new materials are posted.",
title: "Add materials",
filename: "File name, by lesson time:&nbsp;&nbsp;",
comment: "Comment (optional)",
notifications: "Send notifications",
submit: "Add",
serial_number: "Video serial number:",
name: "Name",
size: "Size",
added_date: "Added on",
no_materials: "There are no materials yet, they will be available later.",
chat_logs: "Chat logs"
},
slack_logs: {
title: "Group chat logs"
}
};
},
855: function(e, t, n) {
"use strict";
n.r(t), t.default = {
course_feedback: {
missing_score: "Score is missing.",
missing_text: "Feedback text is missing.",
missing_country: "Country is not specified."
},
course_group: {
invalid_timeStart: "Invalid time of start",
invalid_timeEnd: "Invalid time of end"
},
course_participant: {
missing_name: "Name is missing.",
invalid_name: "Name shall consist of one word.",
missing_surname: "Surname is missing.",
invalid_surname: "Surname shall consist of one word.",
missing_country: "Country is not specified.",
invalid_url: "Invalid page URL."
}
};
},
97: function(e, t, n) {
"use strict";
n.r(t), t.default = {
group_start_soon: "Group will start soon: #{title}",
reminder: "Reminder #{title}",
no_such_course: "No such course",
not_a_teacher: "You are not a host of selected course",
days: [ "", "mon", "tue", "wed", "thu", "fri", "sat", "sun" ],
group_exists: "Group #{slug} exists already"
};
},
526: function(e, t, n) {
"use strict";
n.r(t), t.default = {
server_connection_error: "Server connection error.",
server_request_timeout: "Server request timeout.",
request_aborted: "Request was aborted.",
no_response: "No response from server.",
server_error: "Server error (code #{status}), try again later.",
invalid_format: "Invalid response format."
};
},
151: function(e, t, n) {
"use strict";
n.r(t), t.default = {
loading: "Loading...",
profile_ok_cancel: {
save: "Save",
cancel: "Cancel"
},
aboutme: {
title: "Information about you that will be available for other visitors",
realName: "Name",
placeholder: "John Smith",
email: "Email",
publicEmail: "Public email",
country: "Country",
town: "City",
birthday: "Birthdate",
interests: "Interests",
aboutMe: "About",
teaches: "Teaches",
registered: "Registered",
activity: "Activity",
text_only: "Only text, no links, not more than 600 symbols.",
signature: "Signature for email",
no_info: "The user decided not to tell any details"
},
account: {
title: "Managing account",
email: "Email",
displayName: "Username",
profileName: "Profile name",
remove_provider: "Remove link",
remove_account: "delete the account",
timezone: "Time zone"
},
workspace: {
create: "Create workspace",
creating: "Workspace is being creating",
failed: "Creation failed",
update: "Update workspace",
goto: "Go to workspace",
group_workspace: "Groups workspaces"
},
course_groups: {
dateStart: "Start date",
lessons: "Lessons",
signup: "Lessons not started yet",
accepted: "Participation confirmed",
accept: "Confirm participation",
started: "Lessons started",
join_webinar: "Join webinar",
start_webinar: "Start webinar",
test_webinar: "Test webinar connection",
finished: "The #{type} is finished",
give_feedback: "Leave feedback",
certificate: "Certificate",
download_certificate: "Download certificate",
finish_group: "Finish the group",
cancel_group: "Cancel the group"
},
order_contact: {
title: "Contact information",
name_surname: "Your first and last name:",
name_placeholder: "John Smith",
phone: "Phone:",
phone_placeholder: "+X XXX XXX-XX-XX",
save_contacts: "Save contacts"
},
order_participants: {
title: "Participants",
participant: "Participant",
participation_confirmed: "Participation confirmed.",
confirmation_after_payment: "Participation confirmation will be available after payment.",
confirmation_required: "The participant shall confirm participation.",
invalid_email: "Invalid email.",
save: "Save participants",
statistic: "See participants statistic"
},
orders: {
no_orders: "No active orders.",
order: "Order",
free: "Free",
busy: "Occupied",
confirmed: "confirmed",
order_details: "order details",
course_description: "#{type} description",
currency: "USD",
payment_pending: "We are waiting for payment currently. After payment confirmation, letter with all required information will be send to the participants. In case of errors or something else going wrong you can always change your order below.\n",
payment_success: "Invitation letter will be send to each participant. Participant can be changed until they accept it.\n",
payment_fail: "Payment failed. Please choose other payment method.\n",
payment: "Payment",
change_payment_method: "Change payment method",
cancel_order: "cancel the order",
vacancies: "vacancy,vacancies,vacancies"
},
invoice: {
download: "download invoice",
name: "Name *",
company_name: "Company name *",
address: "Address *",
submit: "Download"
},
auth_providers: {
connect: "Link:",
no_providers: "No linked services",
info: "Linking your account allows to log in with the linked service."
},
profile_field: {
add: {
title: "add",
email: "email",
publicEmail: "email",
country: "country",
displayName: "display name",
profileName: "profile name",
realName: "name",
town: "city",
birthday: "birthday",
interests: "interests",
aboutMe: "information about yourself"
},
value_must_not_be_empty: "Value must not be empty.",
value_is_too_short: "Value is too short.",
value_is_too_long: "Value is too long.",
invalid_autocomplete: "Please, choose value from the list.",
invalid_email: "Invalid email.",
invalid_value: "Invalid value.",
invalid_date: "Invalid date, date format: dd.mm.yyyy.",
invalid_range: "Invalid date range, please use right date.",
save: "Save",
cancel: "Cancel"
},
password: {
title: "change password",
old_password: "Old password",
new_password: "New password",
specify_password: "Enter the password",
password_should_not_be_empty: "Password must not be empty.",
password_is_too_short: "Password is too short.",
save: "Save",
cancel: "Cancel"
},
photo: {
upload: "Upload photo",
teacher: "Teacher",
created: "Registered"
},
quiz: {
title: "Quizes",
test: "Test",
date: "Date",
time: "Time",
grade: "Grade",
result: "Result"
},
jobs: {
no_jobs: "You have no internships"
},
subscriptions: {
save: "Save"
},
client: {
photo_updated: "Photo was updated.",
invalid_photo: "Invalid photo extensions or file is broken.",
password_updated: "Password was updated.",
server_error: "Request error, status code",
displayname_updated: "Your username was updated.",
confirm_email: "Email change confirmation is required, check your email.",
profilename_updated: "Your profile is available by new link, the page will be reloaded.",
information_updated: "Information updated.",
settings_updated: "Settings updated.",
you_removed_participants: "You removed participants, who received invitations: #{removedEmails}. If you continue theirs invitations will become invalid. Continue?",
user_removed: "Sorry to see you go! The account has been deleted.",
remove_user: "remove user without possibility to recover?",
remove_link: "remove link",
order_will_be_canceled: "Order will be cancelled without possibility to recover. Continue?",
order_removed: "Order was removed.",
notifications_updated: "Notifications were updated.",
finish_group: "Are you sure you want to finish group? This can't be undone.",
cancel_group: "Are you sure you want to cancel group? This is used only for groups created by mistake and it can't be undone."
},
section_names: {
quiz: "Quizes",
orders: "Orders",
courses: "Courses",
providers: "Linked external accounts",
jobs: "Jobs",
aboutme: "Public profile",
subscriptions: "Receive notifications about...",
achievements: "Achievements",
account: "Account settings",
teacher_about: "About teacher",
teacher_stats: "Teaching statistics",
course_feedback: "Participants' feedback"
},
achievements: {
bronze: "Bronze at the course",
silver: "Silver at the course",
gold: "Gold at the course"
},
teacher_courses: {
description: "#{type} description",
participants: "participant,participants,participants",
lessons: "lesson,lessons,lessons",
canceled: "Course is closed",
feedbacks: "feedback,feedbacks,feedbacks",
no_lessons: "has not held classes for this course in our project yet.",
no_lessons_new: "has not held classes for this #{type} in our project yet. Therefore to ensure excellent quality of this #{type} some lessons would be attended by a more expirienced teacher. If you're not satisfied with the quality you can always transfer to another group on the same #{type}.\n",
no_lessons_new_course: "We just started to provide this #{type} in English, so there are no reviews yet. Soon there will be. For now, we have a <a href='#{link}' alt='money-back guarantee'>money-back guarantee</a> for you, and all the intent to give the best #{type} possible, the teacher has enough experience for that.\n",
stat_text: 'Teaches this #{type} since <strong><date-local timestamp=#{firstGroupDate} format="D MMMM YYYY"/></strong>, held <strong>#{lessons}</strong> with <strong>#{participants}</strong>. Last lesson was at <strong><date-local timestamp=#{lastLessonDate} format="D MMMM YYYY"/></strong>.\n',
stat_feedback: 'Received <a href="#" class="course-stats__feedback-link">#{feedbacks}</a> from students:'
}
};
}
}, t = {};
function n(r) {
var o = t[r];
if (void 0 !== o) return o.exports;
var a = t[r] = {
exports: {}
};
return e[r](a, a.exports, n), a.exports;
}
n.d = function(e, t) {
for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
enumerable: !0,
get: t[r]
});
}, n.o = function(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}, n.r = function(e) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(e, "__esModule", {
value: !0
});
};
const r = n(355);
n(773).i18n.add("profile", n(151)), r(), guestProfile = {};
}();
//# sourceMappingURL=guestProfile.f83689ee30eb0f0d6369.js.map