(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var i = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          n.d(
            r,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = "da61"));
})({
  "2b0e": function (t, e, n) {
    "use strict";
    (function (t) {
      /*!
       * Vue.js v2.6.11
       * (c) 2014-2019 Evan You
       * Released under the MIT License.
       */
      var n = Object.freeze({});
      function r(t) {
        return void 0 === t || null === t;
      }
      function i(t) {
        return void 0 !== t && null !== t;
      }
      function a(t) {
        return !0 === t;
      }
      function o(t) {
        return !1 === t;
      }
      function s(t) {
        return (
          "string" === typeof t ||
          "number" === typeof t ||
          "symbol" === typeof t ||
          "boolean" === typeof t
        );
      }
      function l(t) {
        return null !== t && "object" === typeof t;
      }
      var u = Object.prototype.toString;
      function c(t) {
        return "[object Object]" === u.call(t);
      }
      function d(t) {
        return "[object RegExp]" === u.call(t);
      }
      function h(t) {
        var e = parseFloat(String(t));
        return e >= 0 && Math.floor(e) === e && isFinite(t);
      }
      function f(t) {
        return (
          i(t) && "function" === typeof t.then && "function" === typeof t.catch
        );
      }
      function p(t) {
        return null == t
          ? ""
          : Array.isArray(t) || (c(t) && t.toString === u)
          ? JSON.stringify(t, null, 2)
          : String(t);
      }
      function g(t) {
        var e = parseFloat(t);
        return isNaN(e) ? t : e;
      }
      function v(t, e) {
        for (
          var n = Object.create(null), r = t.split(","), i = 0;
          i < r.length;
          i++
        )
          n[r[i]] = !0;
        return e
          ? function (t) {
              return n[t.toLowerCase()];
            }
          : function (t) {
              return n[t];
            };
      }
      v("slot,component", !0);
      var m = v("key,ref,slot,slot-scope,is");
      function b(t, e) {
        if (t.length) {
          var n = t.indexOf(e);
          if (n > -1) return t.splice(n, 1);
        }
      }
      var y = Object.prototype.hasOwnProperty;
      function x(t, e) {
        return y.call(t, e);
      }
      function _(t) {
        var e = Object.create(null);
        return function (n) {
          var r = e[n];
          return r || (e[n] = t(n));
        };
      }
      var w = /-(\w)/g,
        k = _(function (t) {
          return t.replace(w, function (t, e) {
            return e ? e.toUpperCase() : "";
          });
        }),
        C = _(function (t) {
          return t.charAt(0).toUpperCase() + t.slice(1);
        }),
        M = /\B([A-Z])/g,
        S = _(function (t) {
          return t.replace(M, "-$1").toLowerCase();
        });
      function A(t, e) {
        function n(n) {
          var r = arguments.length;
          return r ? (r > 1 ? t.apply(e, arguments) : t.call(e, n)) : t.call(e);
        }
        return (n._length = t.length), n;
      }
      function P(t, e) {
        return t.bind(e);
      }
      var D = Function.prototype.bind ? P : A;
      function T(t, e) {
        e = e || 0;
        var n = t.length - e,
          r = new Array(n);
        while (n--) r[n] = t[n + e];
        return r;
      }
      function O(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      }
      function I(t) {
        for (var e = {}, n = 0; n < t.length; n++) t[n] && O(e, t[n]);
        return e;
      }
      function F(t, e, n) {}
      var L = function (t, e, n) {
          return !1;
        },
        E = function (t) {
          return t;
        };
      function N(t, e) {
        if (t === e) return !0;
        var n = l(t),
          r = l(e);
        if (!n || !r) return !n && !r && String(t) === String(e);
        try {
          var i = Array.isArray(t),
            a = Array.isArray(e);
          if (i && a)
            return (
              t.length === e.length &&
              t.every(function (t, n) {
                return N(t, e[n]);
              })
            );
          if (t instanceof Date && e instanceof Date)
            return t.getTime() === e.getTime();
          if (i || a) return !1;
          var o = Object.keys(t),
            s = Object.keys(e);
          return (
            o.length === s.length &&
            o.every(function (n) {
              return N(t[n], e[n]);
            })
          );
        } catch (u) {
          return !1;
        }
      }
      function R(t, e) {
        for (var n = 0; n < t.length; n++) if (N(t[n], e)) return n;
        return -1;
      }
      function z(t) {
        var e = !1;
        return function () {
          e || ((e = !0), t.apply(this, arguments));
        };
      }
      var B = "data-server-rendered",
        V = ["component", "directive", "filter"],
        $ = [
          "beforeCreate",
          "created",
          "beforeMount",
          "mounted",
          "beforeUpdate",
          "updated",
          "beforeDestroy",
          "destroyed",
          "activated",
          "deactivated",
          "errorCaptured",
          "serverPrefetch",
        ],
        W = {
          optionMergeStrategies: Object.create(null),
          silent: !1,
          productionTip: !1,
          devtools: !1,
          performance: !1,
          errorHandler: null,
          warnHandler: null,
          ignoredElements: [],
          keyCodes: Object.create(null),
          isReservedTag: L,
          isReservedAttr: L,
          isUnknownElement: L,
          getTagNamespace: F,
          parsePlatformTagName: E,
          mustUseProp: L,
          async: !0,
          _lifecycleHooks: $,
        },
        j =
          /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
      function H(t) {
        var e = (t + "").charCodeAt(0);
        return 36 === e || 95 === e;
      }
      function q(t, e, n, r) {
        Object.defineProperty(t, e, {
          value: n,
          enumerable: !!r,
          writable: !0,
          configurable: !0,
        });
      }
      var U = new RegExp("[^" + j.source + ".$_\\d]");
      function Y(t) {
        if (!U.test(t)) {
          var e = t.split(".");
          return function (t) {
            for (var n = 0; n < e.length; n++) {
              if (!t) return;
              t = t[e[n]];
            }
            return t;
          };
        }
      }
      var G,
        K = "__proto__" in {},
        X = "undefined" !== typeof window,
        Q = "undefined" !== typeof WXEnvironment && !!WXEnvironment.platform,
        Z = Q && WXEnvironment.platform.toLowerCase(),
        J = X && window.navigator.userAgent.toLowerCase(),
        tt = J && /msie|trident/.test(J),
        et = J && J.indexOf("msie 9.0") > 0,
        nt = J && J.indexOf("edge/") > 0,
        rt =
          (J && J.indexOf("android"),
          (J && /iphone|ipad|ipod|ios/.test(J)) || "ios" === Z),
        it =
          (J && /chrome\/\d+/.test(J),
          J && /phantomjs/.test(J),
          J && J.match(/firefox\/(\d+)/)),
        at = {}.watch,
        ot = !1;
      if (X)
        try {
          var st = {};
          Object.defineProperty(st, "passive", {
            get: function () {
              ot = !0;
            },
          }),
            window.addEventListener("test-passive", null, st);
        } catch (ko) {}
      var lt = function () {
          return (
            void 0 === G &&
              (G =
                !X &&
                !Q &&
                "undefined" !== typeof t &&
                t["process"] &&
                "server" === t["process"].env.VUE_ENV),
            G
          );
        },
        ut = X && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
      function ct(t) {
        return "function" === typeof t && /native code/.test(t.toString());
      }
      var dt,
        ht =
          "undefined" !== typeof Symbol &&
          ct(Symbol) &&
          "undefined" !== typeof Reflect &&
          ct(Reflect.ownKeys);
      dt =
        "undefined" !== typeof Set && ct(Set)
          ? Set
          : (function () {
              function t() {
                this.set = Object.create(null);
              }
              return (
                (t.prototype.has = function (t) {
                  return !0 === this.set[t];
                }),
                (t.prototype.add = function (t) {
                  this.set[t] = !0;
                }),
                (t.prototype.clear = function () {
                  this.set = Object.create(null);
                }),
                t
              );
            })();
      var ft = F,
        pt = 0,
        gt = function () {
          (this.id = pt++), (this.subs = []);
        };
      (gt.prototype.addSub = function (t) {
        this.subs.push(t);
      }),
        (gt.prototype.removeSub = function (t) {
          b(this.subs, t);
        }),
        (gt.prototype.depend = function () {
          gt.target && gt.target.addDep(this);
        }),
        (gt.prototype.notify = function () {
          var t = this.subs.slice();
          for (var e = 0, n = t.length; e < n; e++) t[e].update();
        }),
        (gt.target = null);
      var vt = [];
      function mt(t) {
        vt.push(t), (gt.target = t);
      }
      function bt() {
        vt.pop(), (gt.target = vt[vt.length - 1]);
      }
      var yt = function (t, e, n, r, i, a, o, s) {
          (this.tag = t),
            (this.data = e),
            (this.children = n),
            (this.text = r),
            (this.elm = i),
            (this.ns = void 0),
            (this.context = a),
            (this.fnContext = void 0),
            (this.fnOptions = void 0),
            (this.fnScopeId = void 0),
            (this.key = e && e.key),
            (this.componentOptions = o),
            (this.componentInstance = void 0),
            (this.parent = void 0),
            (this.raw = !1),
            (this.isStatic = !1),
            (this.isRootInsert = !0),
            (this.isComment = !1),
            (this.isCloned = !1),
            (this.isOnce = !1),
            (this.asyncFactory = s),
            (this.asyncMeta = void 0),
            (this.isAsyncPlaceholder = !1);
        },
        xt = { child: { configurable: !0 } };
      (xt.child.get = function () {
        return this.componentInstance;
      }),
        Object.defineProperties(yt.prototype, xt);
      var _t = function (t) {
        void 0 === t && (t = "");
        var e = new yt();
        return (e.text = t), (e.isComment = !0), e;
      };
      function wt(t) {
        return new yt(void 0, void 0, void 0, String(t));
      }
      function kt(t) {
        var e = new yt(
          t.tag,
          t.data,
          t.children && t.children.slice(),
          t.text,
          t.elm,
          t.context,
          t.componentOptions,
          t.asyncFactory
        );
        return (
          (e.ns = t.ns),
          (e.isStatic = t.isStatic),
          (e.key = t.key),
          (e.isComment = t.isComment),
          (e.fnContext = t.fnContext),
          (e.fnOptions = t.fnOptions),
          (e.fnScopeId = t.fnScopeId),
          (e.asyncMeta = t.asyncMeta),
          (e.isCloned = !0),
          e
        );
      }
      var Ct = Array.prototype,
        Mt = Object.create(Ct),
        St = ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"];
      St.forEach(function (t) {
        var e = Ct[t];
        q(Mt, t, function () {
          var n = [],
            r = arguments.length;
          while (r--) n[r] = arguments[r];
          var i,
            a = e.apply(this, n),
            o = this.__ob__;
          switch (t) {
            case "push":
            case "unshift":
              i = n;
              break;
            case "splice":
              i = n.slice(2);
              break;
          }
          return i && o.observeArray(i), o.dep.notify(), a;
        });
      });
      var At = Object.getOwnPropertyNames(Mt),
        Pt = !0;
      function Dt(t) {
        Pt = t;
      }
      var Tt = function (t) {
        (this.value = t),
          (this.dep = new gt()),
          (this.vmCount = 0),
          q(t, "__ob__", this),
          Array.isArray(t)
            ? (K ? Ot(t, Mt) : It(t, Mt, At), this.observeArray(t))
            : this.walk(t);
      };
      function Ot(t, e) {
        t.__proto__ = e;
      }
      function It(t, e, n) {
        for (var r = 0, i = n.length; r < i; r++) {
          var a = n[r];
          q(t, a, e[a]);
        }
      }
      function Ft(t, e) {
        var n;
        if (l(t) && !(t instanceof yt))
          return (
            x(t, "__ob__") && t.__ob__ instanceof Tt
              ? (n = t.__ob__)
              : Pt &&
                !lt() &&
                (Array.isArray(t) || c(t)) &&
                Object.isExtensible(t) &&
                !t._isVue &&
                (n = new Tt(t)),
            e && n && n.vmCount++,
            n
          );
      }
      function Lt(t, e, n, r, i) {
        var a = new gt(),
          o = Object.getOwnPropertyDescriptor(t, e);
        if (!o || !1 !== o.configurable) {
          var s = o && o.get,
            l = o && o.set;
          (s && !l) || 2 !== arguments.length || (n = t[e]);
          var u = !i && Ft(n);
          Object.defineProperty(t, e, {
            enumerable: !0,
            configurable: !0,
            get: function () {
              var e = s ? s.call(t) : n;
              return (
                gt.target &&
                  (a.depend(),
                  u && (u.dep.depend(), Array.isArray(e) && Rt(e))),
                e
              );
            },
            set: function (e) {
              var r = s ? s.call(t) : n;
              e === r ||
                (e !== e && r !== r) ||
                (s && !l) ||
                (l ? l.call(t, e) : (n = e), (u = !i && Ft(e)), a.notify());
            },
          });
        }
      }
      function Et(t, e, n) {
        if (Array.isArray(t) && h(e))
          return (t.length = Math.max(t.length, e)), t.splice(e, 1, n), n;
        if (e in t && !(e in Object.prototype)) return (t[e] = n), n;
        var r = t.__ob__;
        return t._isVue || (r && r.vmCount)
          ? n
          : r
          ? (Lt(r.value, e, n), r.dep.notify(), n)
          : ((t[e] = n), n);
      }
      function Nt(t, e) {
        if (Array.isArray(t) && h(e)) t.splice(e, 1);
        else {
          var n = t.__ob__;
          t._isVue ||
            (n && n.vmCount) ||
            (x(t, e) && (delete t[e], n && n.dep.notify()));
        }
      }
      function Rt(t) {
        for (var e = void 0, n = 0, r = t.length; n < r; n++)
          (e = t[n]),
            e && e.__ob__ && e.__ob__.dep.depend(),
            Array.isArray(e) && Rt(e);
      }
      (Tt.prototype.walk = function (t) {
        for (var e = Object.keys(t), n = 0; n < e.length; n++) Lt(t, e[n]);
      }),
        (Tt.prototype.observeArray = function (t) {
          for (var e = 0, n = t.length; e < n; e++) Ft(t[e]);
        });
      var zt = W.optionMergeStrategies;
      function Bt(t, e) {
        if (!e) return t;
        for (
          var n, r, i, a = ht ? Reflect.ownKeys(e) : Object.keys(e), o = 0;
          o < a.length;
          o++
        )
          (n = a[o]),
            "__ob__" !== n &&
              ((r = t[n]),
              (i = e[n]),
              x(t, n) ? r !== i && c(r) && c(i) && Bt(r, i) : Et(t, n, i));
        return t;
      }
      function Vt(t, e, n) {
        return n
          ? function () {
              var r = "function" === typeof e ? e.call(n, n) : e,
                i = "function" === typeof t ? t.call(n, n) : t;
              return r ? Bt(r, i) : i;
            }
          : e
          ? t
            ? function () {
                return Bt(
                  "function" === typeof e ? e.call(this, this) : e,
                  "function" === typeof t ? t.call(this, this) : t
                );
              }
            : e
          : t;
      }
      function $t(t, e) {
        var n = e ? (t ? t.concat(e) : Array.isArray(e) ? e : [e]) : t;
        return n ? Wt(n) : n;
      }
      function Wt(t) {
        for (var e = [], n = 0; n < t.length; n++)
          -1 === e.indexOf(t[n]) && e.push(t[n]);
        return e;
      }
      function jt(t, e, n, r) {
        var i = Object.create(t || null);
        return e ? O(i, e) : i;
      }
      (zt.data = function (t, e, n) {
        return n ? Vt(t, e, n) : e && "function" !== typeof e ? t : Vt(t, e);
      }),
        $.forEach(function (t) {
          zt[t] = $t;
        }),
        V.forEach(function (t) {
          zt[t + "s"] = jt;
        }),
        (zt.watch = function (t, e, n, r) {
          if ((t === at && (t = void 0), e === at && (e = void 0), !e))
            return Object.create(t || null);
          if (!t) return e;
          var i = {};
          for (var a in (O(i, t), e)) {
            var o = i[a],
              s = e[a];
            o && !Array.isArray(o) && (o = [o]),
              (i[a] = o ? o.concat(s) : Array.isArray(s) ? s : [s]);
          }
          return i;
        }),
        (zt.props =
          zt.methods =
          zt.inject =
          zt.computed =
            function (t, e, n, r) {
              if (!t) return e;
              var i = Object.create(null);
              return O(i, t), e && O(i, e), i;
            }),
        (zt.provide = Vt);
      var Ht = function (t, e) {
        return void 0 === e ? t : e;
      };
      function qt(t, e) {
        var n = t.props;
        if (n) {
          var r,
            i,
            a,
            o = {};
          if (Array.isArray(n)) {
            r = n.length;
            while (r--)
              (i = n[r]),
                "string" === typeof i && ((a = k(i)), (o[a] = { type: null }));
          } else if (c(n))
            for (var s in n)
              (i = n[s]), (a = k(s)), (o[a] = c(i) ? i : { type: i });
          else 0;
          t.props = o;
        }
      }
      function Ut(t, e) {
        var n = t.inject;
        if (n) {
          var r = (t.inject = {});
          if (Array.isArray(n))
            for (var i = 0; i < n.length; i++) r[n[i]] = { from: n[i] };
          else if (c(n))
            for (var a in n) {
              var o = n[a];
              r[a] = c(o) ? O({ from: a }, o) : { from: o };
            }
          else 0;
        }
      }
      function Yt(t) {
        var e = t.directives;
        if (e)
          for (var n in e) {
            var r = e[n];
            "function" === typeof r && (e[n] = { bind: r, update: r });
          }
      }
      function Gt(t, e, n) {
        if (
          ("function" === typeof e && (e = e.options),
          qt(e, n),
          Ut(e, n),
          Yt(e),
          !e._base && (e.extends && (t = Gt(t, e.extends, n)), e.mixins))
        )
          for (var r = 0, i = e.mixins.length; r < i; r++)
            t = Gt(t, e.mixins[r], n);
        var a,
          o = {};
        for (a in t) s(a);
        for (a in e) x(t, a) || s(a);
        function s(r) {
          var i = zt[r] || Ht;
          o[r] = i(t[r], e[r], n, r);
        }
        return o;
      }
      function Kt(t, e, n, r) {
        if ("string" === typeof n) {
          var i = t[e];
          if (x(i, n)) return i[n];
          var a = k(n);
          if (x(i, a)) return i[a];
          var o = C(a);
          if (x(i, o)) return i[o];
          var s = i[n] || i[a] || i[o];
          return s;
        }
      }
      function Xt(t, e, n, r) {
        var i = e[t],
          a = !x(n, t),
          o = n[t],
          s = te(Boolean, i.type);
        if (s > -1)
          if (a && !x(i, "default")) o = !1;
          else if ("" === o || o === S(t)) {
            var l = te(String, i.type);
            (l < 0 || s < l) && (o = !0);
          }
        if (void 0 === o) {
          o = Qt(r, i, t);
          var u = Pt;
          Dt(!0), Ft(o), Dt(u);
        }
        return o;
      }
      function Qt(t, e, n) {
        if (x(e, "default")) {
          var r = e.default;
          return t &&
            t.$options.propsData &&
            void 0 === t.$options.propsData[n] &&
            void 0 !== t._props[n]
            ? t._props[n]
            : "function" === typeof r && "Function" !== Zt(e.type)
            ? r.call(t)
            : r;
        }
      }
      function Zt(t) {
        var e = t && t.toString().match(/^\s*function (\w+)/);
        return e ? e[1] : "";
      }
      function Jt(t, e) {
        return Zt(t) === Zt(e);
      }
      function te(t, e) {
        if (!Array.isArray(e)) return Jt(e, t) ? 0 : -1;
        for (var n = 0, r = e.length; n < r; n++) if (Jt(e[n], t)) return n;
        return -1;
      }
      function ee(t, e, n) {
        mt();
        try {
          if (e) {
            var r = e;
            while ((r = r.$parent)) {
              var i = r.$options.errorCaptured;
              if (i)
                for (var a = 0; a < i.length; a++)
                  try {
                    var o = !1 === i[a].call(r, t, e, n);
                    if (o) return;
                  } catch (ko) {
                    re(ko, r, "errorCaptured hook");
                  }
            }
          }
          re(t, e, n);
        } finally {
          bt();
        }
      }
      function ne(t, e, n, r, i) {
        var a;
        try {
          (a = n ? t.apply(e, n) : t.call(e)),
            a &&
              !a._isVue &&
              f(a) &&
              !a._handled &&
              (a.catch(function (t) {
                return ee(t, r, i + " (Promise/async)");
              }),
              (a._handled = !0));
        } catch (ko) {
          ee(ko, r, i);
        }
        return a;
      }
      function re(t, e, n) {
        if (W.errorHandler)
          try {
            return W.errorHandler.call(null, t, e, n);
          } catch (ko) {
            ko !== t && ie(ko, null, "config.errorHandler");
          }
        ie(t, e, n);
      }
      function ie(t, e, n) {
        if ((!X && !Q) || "undefined" === typeof console) throw t;
        console.error(t);
      }
      var ae,
        oe = !1,
        se = [],
        le = !1;
      function ue() {
        le = !1;
        var t = se.slice(0);
        se.length = 0;
        for (var e = 0; e < t.length; e++) t[e]();
      }
      if ("undefined" !== typeof Promise && ct(Promise)) {
        var ce = Promise.resolve();
        (ae = function () {
          ce.then(ue), rt && setTimeout(F);
        }),
          (oe = !0);
      } else if (
        tt ||
        "undefined" === typeof MutationObserver ||
        (!ct(MutationObserver) &&
          "[object MutationObserverConstructor]" !==
            MutationObserver.toString())
      )
        ae =
          "undefined" !== typeof setImmediate && ct(setImmediate)
            ? function () {
                setImmediate(ue);
              }
            : function () {
                setTimeout(ue, 0);
              };
      else {
        var de = 1,
          he = new MutationObserver(ue),
          fe = document.createTextNode(String(de));
        he.observe(fe, { characterData: !0 }),
          (ae = function () {
            (de = (de + 1) % 2), (fe.data = String(de));
          }),
          (oe = !0);
      }
      function pe(t, e) {
        var n;
        if (
          (se.push(function () {
            if (t)
              try {
                t.call(e);
              } catch (ko) {
                ee(ko, e, "nextTick");
              }
            else n && n(e);
          }),
          le || ((le = !0), ae()),
          !t && "undefined" !== typeof Promise)
        )
          return new Promise(function (t) {
            n = t;
          });
      }
      var ge = new dt();
      function ve(t) {
        me(t, ge), ge.clear();
      }
      function me(t, e) {
        var n,
          r,
          i = Array.isArray(t);
        if (!((!i && !l(t)) || Object.isFrozen(t) || t instanceof yt)) {
          if (t.__ob__) {
            var a = t.__ob__.dep.id;
            if (e.has(a)) return;
            e.add(a);
          }
          if (i) {
            n = t.length;
            while (n--) me(t[n], e);
          } else {
            (r = Object.keys(t)), (n = r.length);
            while (n--) me(t[r[n]], e);
          }
        }
      }
      var be = _(function (t) {
        var e = "&" === t.charAt(0);
        t = e ? t.slice(1) : t;
        var n = "~" === t.charAt(0);
        t = n ? t.slice(1) : t;
        var r = "!" === t.charAt(0);
        return (
          (t = r ? t.slice(1) : t), { name: t, once: n, capture: r, passive: e }
        );
      });
      function ye(t, e) {
        function n() {
          var t = arguments,
            r = n.fns;
          if (!Array.isArray(r))
            return ne(r, null, arguments, e, "v-on handler");
          for (var i = r.slice(), a = 0; a < i.length; a++)
            ne(i[a], null, t, e, "v-on handler");
        }
        return (n.fns = t), n;
      }
      function xe(t, e, n, i, o, s) {
        var l, u, c, d;
        for (l in t)
          (u = t[l]),
            (c = e[l]),
            (d = be(l)),
            r(u) ||
              (r(c)
                ? (r(u.fns) && (u = t[l] = ye(u, s)),
                  a(d.once) && (u = t[l] = o(d.name, u, d.capture)),
                  n(d.name, u, d.capture, d.passive, d.params))
                : u !== c && ((c.fns = u), (t[l] = c)));
        for (l in e) r(t[l]) && ((d = be(l)), i(d.name, e[l], d.capture));
      }
      function _e(t, e, n) {
        var o;
        t instanceof yt && (t = t.data.hook || (t.data.hook = {}));
        var s = t[e];
        function l() {
          n.apply(this, arguments), b(o.fns, l);
        }
        r(s)
          ? (o = ye([l]))
          : i(s.fns) && a(s.merged)
          ? ((o = s), o.fns.push(l))
          : (o = ye([s, l])),
          (o.merged = !0),
          (t[e] = o);
      }
      function we(t, e, n) {
        var a = e.options.props;
        if (!r(a)) {
          var o = {},
            s = t.attrs,
            l = t.props;
          if (i(s) || i(l))
            for (var u in a) {
              var c = S(u);
              ke(o, l, u, c, !0) || ke(o, s, u, c, !1);
            }
          return o;
        }
      }
      function ke(t, e, n, r, a) {
        if (i(e)) {
          if (x(e, n)) return (t[n] = e[n]), a || delete e[n], !0;
          if (x(e, r)) return (t[n] = e[r]), a || delete e[r], !0;
        }
        return !1;
      }
      function Ce(t) {
        for (var e = 0; e < t.length; e++)
          if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
        return t;
      }
      function Me(t) {
        return s(t) ? [wt(t)] : Array.isArray(t) ? Ae(t) : void 0;
      }
      function Se(t) {
        return i(t) && i(t.text) && o(t.isComment);
      }
      function Ae(t, e) {
        var n,
          o,
          l,
          u,
          c = [];
        for (n = 0; n < t.length; n++)
          (o = t[n]),
            r(o) ||
              "boolean" === typeof o ||
              ((l = c.length - 1),
              (u = c[l]),
              Array.isArray(o)
                ? o.length > 0 &&
                  ((o = Ae(o, (e || "") + "_" + n)),
                  Se(o[0]) &&
                    Se(u) &&
                    ((c[l] = wt(u.text + o[0].text)), o.shift()),
                  c.push.apply(c, o))
                : s(o)
                ? Se(u)
                  ? (c[l] = wt(u.text + o))
                  : "" !== o && c.push(wt(o))
                : Se(o) && Se(u)
                ? (c[l] = wt(u.text + o.text))
                : (a(t._isVList) &&
                    i(o.tag) &&
                    r(o.key) &&
                    i(e) &&
                    (o.key = "__vlist" + e + "_" + n + "__"),
                  c.push(o)));
        return c;
      }
      function Pe(t) {
        var e = t.$options.provide;
        e && (t._provided = "function" === typeof e ? e.call(t) : e);
      }
      function De(t) {
        var e = Te(t.$options.inject, t);
        e &&
          (Dt(!1),
          Object.keys(e).forEach(function (n) {
            Lt(t, n, e[n]);
          }),
          Dt(!0));
      }
      function Te(t, e) {
        if (t) {
          for (
            var n = Object.create(null),
              r = ht ? Reflect.ownKeys(t) : Object.keys(t),
              i = 0;
            i < r.length;
            i++
          ) {
            var a = r[i];
            if ("__ob__" !== a) {
              var o = t[a].from,
                s = e;
              while (s) {
                if (s._provided && x(s._provided, o)) {
                  n[a] = s._provided[o];
                  break;
                }
                s = s.$parent;
              }
              if (!s)
                if ("default" in t[a]) {
                  var l = t[a].default;
                  n[a] = "function" === typeof l ? l.call(e) : l;
                } else 0;
            }
          }
          return n;
        }
      }
      function Oe(t, e) {
        if (!t || !t.length) return {};
        for (var n = {}, r = 0, i = t.length; r < i; r++) {
          var a = t[r],
            o = a.data;
          if (
            (o && o.attrs && o.attrs.slot && delete o.attrs.slot,
            (a.context !== e && a.fnContext !== e) || !o || null == o.slot)
          )
            (n.default || (n.default = [])).push(a);
          else {
            var s = o.slot,
              l = n[s] || (n[s] = []);
            "template" === a.tag
              ? l.push.apply(l, a.children || [])
              : l.push(a);
          }
        }
        for (var u in n) n[u].every(Ie) && delete n[u];
        return n;
      }
      function Ie(t) {
        return (t.isComment && !t.asyncFactory) || " " === t.text;
      }
      function Fe(t, e, r) {
        var i,
          a = Object.keys(e).length > 0,
          o = t ? !!t.$stable : !a,
          s = t && t.$key;
        if (t) {
          if (t._normalized) return t._normalized;
          if (o && r && r !== n && s === r.$key && !a && !r.$hasNormal)
            return r;
          for (var l in ((i = {}), t))
            t[l] && "$" !== l[0] && (i[l] = Le(e, l, t[l]));
        } else i = {};
        for (var u in e) u in i || (i[u] = Ee(e, u));
        return (
          t && Object.isExtensible(t) && (t._normalized = i),
          q(i, "$stable", o),
          q(i, "$key", s),
          q(i, "$hasNormal", a),
          i
        );
      }
      function Le(t, e, n) {
        var r = function () {
          var t = arguments.length ? n.apply(null, arguments) : n({});
          return (
            (t = t && "object" === typeof t && !Array.isArray(t) ? [t] : Me(t)),
            t && (0 === t.length || (1 === t.length && t[0].isComment))
              ? void 0
              : t
          );
        };
        return (
          n.proxy &&
            Object.defineProperty(t, e, {
              get: r,
              enumerable: !0,
              configurable: !0,
            }),
          r
        );
      }
      function Ee(t, e) {
        return function () {
          return t[e];
        };
      }
      function Ne(t, e) {
        var n, r, a, o, s;
        if (Array.isArray(t) || "string" === typeof t)
          for (n = new Array(t.length), r = 0, a = t.length; r < a; r++)
            n[r] = e(t[r], r);
        else if ("number" === typeof t)
          for (n = new Array(t), r = 0; r < t; r++) n[r] = e(r + 1, r);
        else if (l(t))
          if (ht && t[Symbol.iterator]) {
            n = [];
            var u = t[Symbol.iterator](),
              c = u.next();
            while (!c.done) n.push(e(c.value, n.length)), (c = u.next());
          } else
            for (
              o = Object.keys(t), n = new Array(o.length), r = 0, a = o.length;
              r < a;
              r++
            )
              (s = o[r]), (n[r] = e(t[s], s, r));
        return i(n) || (n = []), (n._isVList = !0), n;
      }
      function Re(t, e, n, r) {
        var i,
          a = this.$scopedSlots[t];
        a
          ? ((n = n || {}), r && (n = O(O({}, r), n)), (i = a(n) || e))
          : (i = this.$slots[t] || e);
        var o = n && n.slot;
        return o ? this.$createElement("template", { slot: o }, i) : i;
      }
      function ze(t) {
        return Kt(this.$options, "filters", t, !0) || E;
      }
      function Be(t, e) {
        return Array.isArray(t) ? -1 === t.indexOf(e) : t !== e;
      }
      function Ve(t, e, n, r, i) {
        var a = W.keyCodes[e] || n;
        return i && r && !W.keyCodes[e]
          ? Be(i, r)
          : a
          ? Be(a, t)
          : r
          ? S(r) !== e
          : void 0;
      }
      function $e(t, e, n, r, i) {
        if (n)
          if (l(n)) {
            var a;
            Array.isArray(n) && (n = I(n));
            var o = function (o) {
              if ("class" === o || "style" === o || m(o)) a = t;
              else {
                var s = t.attrs && t.attrs.type;
                a =
                  r || W.mustUseProp(e, s, o)
                    ? t.domProps || (t.domProps = {})
                    : t.attrs || (t.attrs = {});
              }
              var l = k(o),
                u = S(o);
              if (!(l in a) && !(u in a) && ((a[o] = n[o]), i)) {
                var c = t.on || (t.on = {});
                c["update:" + o] = function (t) {
                  n[o] = t;
                };
              }
            };
            for (var s in n) o(s);
          } else;
        return t;
      }
      function We(t, e) {
        var n = this._staticTrees || (this._staticTrees = []),
          r = n[t];
        return (
          (r && !e) ||
            ((r = n[t] =
              this.$options.staticRenderFns[t].call(
                this._renderProxy,
                null,
                this
              )),
            He(r, "__static__" + t, !1)),
          r
        );
      }
      function je(t, e, n) {
        return He(t, "__once__" + e + (n ? "_" + n : ""), !0), t;
      }
      function He(t, e, n) {
        if (Array.isArray(t))
          for (var r = 0; r < t.length; r++)
            t[r] && "string" !== typeof t[r] && qe(t[r], e + "_" + r, n);
        else qe(t, e, n);
      }
      function qe(t, e, n) {
        (t.isStatic = !0), (t.key = e), (t.isOnce = n);
      }
      function Ue(t, e) {
        if (e)
          if (c(e)) {
            var n = (t.on = t.on ? O({}, t.on) : {});
            for (var r in e) {
              var i = n[r],
                a = e[r];
              n[r] = i ? [].concat(i, a) : a;
            }
          } else;
        return t;
      }
      function Ye(t, e, n, r) {
        e = e || { $stable: !n };
        for (var i = 0; i < t.length; i++) {
          var a = t[i];
          Array.isArray(a)
            ? Ye(a, e, n)
            : a && (a.proxy && (a.fn.proxy = !0), (e[a.key] = a.fn));
        }
        return r && (e.$key = r), e;
      }
      function Ge(t, e) {
        for (var n = 0; n < e.length; n += 2) {
          var r = e[n];
          "string" === typeof r && r && (t[e[n]] = e[n + 1]);
        }
        return t;
      }
      function Ke(t, e) {
        return "string" === typeof t ? e + t : t;
      }
      function Xe(t) {
        (t._o = je),
          (t._n = g),
          (t._s = p),
          (t._l = Ne),
          (t._t = Re),
          (t._q = N),
          (t._i = R),
          (t._m = We),
          (t._f = ze),
          (t._k = Ve),
          (t._b = $e),
          (t._v = wt),
          (t._e = _t),
          (t._u = Ye),
          (t._g = Ue),
          (t._d = Ge),
          (t._p = Ke);
      }
      function Qe(t, e, r, i, o) {
        var s,
          l = this,
          u = o.options;
        x(i, "_uid")
          ? ((s = Object.create(i)), (s._original = i))
          : ((s = i), (i = i._original));
        var c = a(u._compiled),
          d = !c;
        (this.data = t),
          (this.props = e),
          (this.children = r),
          (this.parent = i),
          (this.listeners = t.on || n),
          (this.injections = Te(u.inject, i)),
          (this.slots = function () {
            return (
              l.$slots || Fe(t.scopedSlots, (l.$slots = Oe(r, i))), l.$slots
            );
          }),
          Object.defineProperty(this, "scopedSlots", {
            enumerable: !0,
            get: function () {
              return Fe(t.scopedSlots, this.slots());
            },
          }),
          c &&
            ((this.$options = u),
            (this.$slots = this.slots()),
            (this.$scopedSlots = Fe(t.scopedSlots, this.$slots))),
          u._scopeId
            ? (this._c = function (t, e, n, r) {
                var a = dn(s, t, e, n, r, d);
                return (
                  a &&
                    !Array.isArray(a) &&
                    ((a.fnScopeId = u._scopeId), (a.fnContext = i)),
                  a
                );
              })
            : (this._c = function (t, e, n, r) {
                return dn(s, t, e, n, r, d);
              });
      }
      function Ze(t, e, r, a, o) {
        var s = t.options,
          l = {},
          u = s.props;
        if (i(u)) for (var c in u) l[c] = Xt(c, u, e || n);
        else i(r.attrs) && tn(l, r.attrs), i(r.props) && tn(l, r.props);
        var d = new Qe(r, l, o, a, t),
          h = s.render.call(null, d._c, d);
        if (h instanceof yt) return Je(h, r, d.parent, s, d);
        if (Array.isArray(h)) {
          for (
            var f = Me(h) || [], p = new Array(f.length), g = 0;
            g < f.length;
            g++
          )
            p[g] = Je(f[g], r, d.parent, s, d);
          return p;
        }
      }
      function Je(t, e, n, r, i) {
        var a = kt(t);
        return (
          (a.fnContext = n),
          (a.fnOptions = r),
          e.slot && ((a.data || (a.data = {})).slot = e.slot),
          a
        );
      }
      function tn(t, e) {
        for (var n in e) t[k(n)] = e[n];
      }
      Xe(Qe.prototype);
      var en = {
          init: function (t, e) {
            if (
              t.componentInstance &&
              !t.componentInstance._isDestroyed &&
              t.data.keepAlive
            ) {
              var n = t;
              en.prepatch(n, n);
            } else {
              var r = (t.componentInstance = an(t, Tn));
              r.$mount(e ? t.elm : void 0, e);
            }
          },
          prepatch: function (t, e) {
            var n = e.componentOptions,
              r = (e.componentInstance = t.componentInstance);
            En(r, n.propsData, n.listeners, e, n.children);
          },
          insert: function (t) {
            var e = t.context,
              n = t.componentInstance;
            n._isMounted || ((n._isMounted = !0), Bn(n, "mounted")),
              t.data.keepAlive && (e._isMounted ? Zn(n) : Rn(n, !0));
          },
          destroy: function (t) {
            var e = t.componentInstance;
            e._isDestroyed || (t.data.keepAlive ? zn(e, !0) : e.$destroy());
          },
        },
        nn = Object.keys(en);
      function rn(t, e, n, o, s) {
        if (!r(t)) {
          var u = n.$options._base;
          if ((l(t) && (t = u.extend(t)), "function" === typeof t)) {
            var c;
            if (r(t.cid) && ((c = t), (t = _n(c, u)), void 0 === t))
              return xn(c, e, n, o, s);
            (e = e || {}), _r(t), i(e.model) && ln(t.options, e);
            var d = we(e, t, s);
            if (a(t.options.functional)) return Ze(t, d, e, n, o);
            var h = e.on;
            if (((e.on = e.nativeOn), a(t.options.abstract))) {
              var f = e.slot;
              (e = {}), f && (e.slot = f);
            }
            on(e);
            var p = t.options.name || s,
              g = new yt(
                "vue-component-" + t.cid + (p ? "-" + p : ""),
                e,
                void 0,
                void 0,
                void 0,
                n,
                { Ctor: t, propsData: d, listeners: h, tag: s, children: o },
                c
              );
            return g;
          }
        }
      }
      function an(t, e) {
        var n = { _isComponent: !0, _parentVnode: t, parent: e },
          r = t.data.inlineTemplate;
        return (
          i(r) &&
            ((n.render = r.render), (n.staticRenderFns = r.staticRenderFns)),
          new t.componentOptions.Ctor(n)
        );
      }
      function on(t) {
        for (var e = t.hook || (t.hook = {}), n = 0; n < nn.length; n++) {
          var r = nn[n],
            i = e[r],
            a = en[r];
          i === a || (i && i._merged) || (e[r] = i ? sn(a, i) : a);
        }
      }
      function sn(t, e) {
        var n = function (n, r) {
          t(n, r), e(n, r);
        };
        return (n._merged = !0), n;
      }
      function ln(t, e) {
        var n = (t.model && t.model.prop) || "value",
          r = (t.model && t.model.event) || "input";
        (e.attrs || (e.attrs = {}))[n] = e.model.value;
        var a = e.on || (e.on = {}),
          o = a[r],
          s = e.model.callback;
        i(o)
          ? (Array.isArray(o) ? -1 === o.indexOf(s) : o !== s) &&
            (a[r] = [s].concat(o))
          : (a[r] = s);
      }
      var un = 1,
        cn = 2;
      function dn(t, e, n, r, i, o) {
        return (
          (Array.isArray(n) || s(n)) && ((i = r), (r = n), (n = void 0)),
          a(o) && (i = cn),
          hn(t, e, n, r, i)
        );
      }
      function hn(t, e, n, r, a) {
        if (i(n) && i(n.__ob__)) return _t();
        if ((i(n) && i(n.is) && (e = n.is), !e)) return _t();
        var o, s, l;
        (Array.isArray(r) &&
          "function" === typeof r[0] &&
          ((n = n || {}), (n.scopedSlots = { default: r[0] }), (r.length = 0)),
        a === cn ? (r = Me(r)) : a === un && (r = Ce(r)),
        "string" === typeof e)
          ? ((s = (t.$vnode && t.$vnode.ns) || W.getTagNamespace(e)),
            (o = W.isReservedTag(e)
              ? new yt(W.parsePlatformTagName(e), n, r, void 0, void 0, t)
              : (n && n.pre) || !i((l = Kt(t.$options, "components", e)))
              ? new yt(e, n, r, void 0, void 0, t)
              : rn(l, n, t, r, e)))
          : (o = rn(e, n, t, r));
        return Array.isArray(o)
          ? o
          : i(o)
          ? (i(s) && fn(o, s), i(n) && pn(n), o)
          : _t();
      }
      function fn(t, e, n) {
        if (
          ((t.ns = e),
          "foreignObject" === t.tag && ((e = void 0), (n = !0)),
          i(t.children))
        )
          for (var o = 0, s = t.children.length; o < s; o++) {
            var l = t.children[o];
            i(l.tag) && (r(l.ns) || (a(n) && "svg" !== l.tag)) && fn(l, e, n);
          }
      }
      function pn(t) {
        l(t.style) && ve(t.style), l(t.class) && ve(t.class);
      }
      function gn(t) {
        (t._vnode = null), (t._staticTrees = null);
        var e = t.$options,
          r = (t.$vnode = e._parentVnode),
          i = r && r.context;
        (t.$slots = Oe(e._renderChildren, i)),
          (t.$scopedSlots = n),
          (t._c = function (e, n, r, i) {
            return dn(t, e, n, r, i, !1);
          }),
          (t.$createElement = function (e, n, r, i) {
            return dn(t, e, n, r, i, !0);
          });
        var a = r && r.data;
        Lt(t, "$attrs", (a && a.attrs) || n, null, !0),
          Lt(t, "$listeners", e._parentListeners || n, null, !0);
      }
      var vn,
        mn = null;
      function bn(t) {
        Xe(t.prototype),
          (t.prototype.$nextTick = function (t) {
            return pe(t, this);
          }),
          (t.prototype._render = function () {
            var t,
              e = this,
              n = e.$options,
              r = n.render,
              i = n._parentVnode;
            i &&
              (e.$scopedSlots = Fe(
                i.data.scopedSlots,
                e.$slots,
                e.$scopedSlots
              )),
              (e.$vnode = i);
            try {
              (mn = e), (t = r.call(e._renderProxy, e.$createElement));
            } catch (ko) {
              ee(ko, e, "render"), (t = e._vnode);
            } finally {
              mn = null;
            }
            return (
              Array.isArray(t) && 1 === t.length && (t = t[0]),
              t instanceof yt || (t = _t()),
              (t.parent = i),
              t
            );
          });
      }
      function yn(t, e) {
        return (
          (t.__esModule || (ht && "Module" === t[Symbol.toStringTag])) &&
            (t = t.default),
          l(t) ? e.extend(t) : t
        );
      }
      function xn(t, e, n, r, i) {
        var a = _t();
        return (
          (a.asyncFactory = t),
          (a.asyncMeta = { data: e, context: n, children: r, tag: i }),
          a
        );
      }
      function _n(t, e) {
        if (a(t.error) && i(t.errorComp)) return t.errorComp;
        if (i(t.resolved)) return t.resolved;
        var n = mn;
        if (
          (n && i(t.owners) && -1 === t.owners.indexOf(n) && t.owners.push(n),
          a(t.loading) && i(t.loadingComp))
        )
          return t.loadingComp;
        if (n && !i(t.owners)) {
          var o = (t.owners = [n]),
            s = !0,
            u = null,
            c = null;
          n.$on("hook:destroyed", function () {
            return b(o, n);
          });
          var d = function (t) {
              for (var e = 0, n = o.length; e < n; e++) o[e].$forceUpdate();
              t &&
                ((o.length = 0),
                null !== u && (clearTimeout(u), (u = null)),
                null !== c && (clearTimeout(c), (c = null)));
            },
            h = z(function (n) {
              (t.resolved = yn(n, e)), s ? (o.length = 0) : d(!0);
            }),
            p = z(function (e) {
              i(t.errorComp) && ((t.error = !0), d(!0));
            }),
            g = t(h, p);
          return (
            l(g) &&
              (f(g)
                ? r(t.resolved) && g.then(h, p)
                : f(g.component) &&
                  (g.component.then(h, p),
                  i(g.error) && (t.errorComp = yn(g.error, e)),
                  i(g.loading) &&
                    ((t.loadingComp = yn(g.loading, e)),
                    0 === g.delay
                      ? (t.loading = !0)
                      : (u = setTimeout(function () {
                          (u = null),
                            r(t.resolved) &&
                              r(t.error) &&
                              ((t.loading = !0), d(!1));
                        }, g.delay || 200))),
                  i(g.timeout) &&
                    (c = setTimeout(function () {
                      (c = null), r(t.resolved) && p(null);
                    }, g.timeout)))),
            (s = !1),
            t.loading ? t.loadingComp : t.resolved
          );
        }
      }
      function wn(t) {
        return t.isComment && t.asyncFactory;
      }
      function kn(t) {
        if (Array.isArray(t))
          for (var e = 0; e < t.length; e++) {
            var n = t[e];
            if (i(n) && (i(n.componentOptions) || wn(n))) return n;
          }
      }
      function Cn(t) {
        (t._events = Object.create(null)), (t._hasHookEvent = !1);
        var e = t.$options._parentListeners;
        e && Pn(t, e);
      }
      function Mn(t, e) {
        vn.$on(t, e);
      }
      function Sn(t, e) {
        vn.$off(t, e);
      }
      function An(t, e) {
        var n = vn;
        return function r() {
          var i = e.apply(null, arguments);
          null !== i && n.$off(t, r);
        };
      }
      function Pn(t, e, n) {
        (vn = t), xe(e, n || {}, Mn, Sn, An, t), (vn = void 0);
      }
      function Dn(t) {
        var e = /^hook:/;
        (t.prototype.$on = function (t, n) {
          var r = this;
          if (Array.isArray(t))
            for (var i = 0, a = t.length; i < a; i++) r.$on(t[i], n);
          else
            (r._events[t] || (r._events[t] = [])).push(n),
              e.test(t) && (r._hasHookEvent = !0);
          return r;
        }),
          (t.prototype.$once = function (t, e) {
            var n = this;
            function r() {
              n.$off(t, r), e.apply(n, arguments);
            }
            return (r.fn = e), n.$on(t, r), n;
          }),
          (t.prototype.$off = function (t, e) {
            var n = this;
            if (!arguments.length) return (n._events = Object.create(null)), n;
            if (Array.isArray(t)) {
              for (var r = 0, i = t.length; r < i; r++) n.$off(t[r], e);
              return n;
            }
            var a,
              o = n._events[t];
            if (!o) return n;
            if (!e) return (n._events[t] = null), n;
            var s = o.length;
            while (s--)
              if (((a = o[s]), a === e || a.fn === e)) {
                o.splice(s, 1);
                break;
              }
            return n;
          }),
          (t.prototype.$emit = function (t) {
            var e = this,
              n = e._events[t];
            if (n) {
              n = n.length > 1 ? T(n) : n;
              for (
                var r = T(arguments, 1),
                  i = 'event handler for "' + t + '"',
                  a = 0,
                  o = n.length;
                a < o;
                a++
              )
                ne(n[a], e, r, e, i);
            }
            return e;
          });
      }
      var Tn = null;
      function On(t) {
        var e = Tn;
        return (
          (Tn = t),
          function () {
            Tn = e;
          }
        );
      }
      function In(t) {
        var e = t.$options,
          n = e.parent;
        if (n && !e.abstract) {
          while (n.$options.abstract && n.$parent) n = n.$parent;
          n.$children.push(t);
        }
        (t.$parent = n),
          (t.$root = n ? n.$root : t),
          (t.$children = []),
          (t.$refs = {}),
          (t._watcher = null),
          (t._inactive = null),
          (t._directInactive = !1),
          (t._isMounted = !1),
          (t._isDestroyed = !1),
          (t._isBeingDestroyed = !1);
      }
      function Fn(t) {
        (t.prototype._update = function (t, e) {
          var n = this,
            r = n.$el,
            i = n._vnode,
            a = On(n);
          (n._vnode = t),
            (n.$el = i ? n.__patch__(i, t) : n.__patch__(n.$el, t, e, !1)),
            a(),
            r && (r.__vue__ = null),
            n.$el && (n.$el.__vue__ = n),
            n.$vnode &&
              n.$parent &&
              n.$vnode === n.$parent._vnode &&
              (n.$parent.$el = n.$el);
        }),
          (t.prototype.$forceUpdate = function () {
            var t = this;
            t._watcher && t._watcher.update();
          }),
          (t.prototype.$destroy = function () {
            var t = this;
            if (!t._isBeingDestroyed) {
              Bn(t, "beforeDestroy"), (t._isBeingDestroyed = !0);
              var e = t.$parent;
              !e ||
                e._isBeingDestroyed ||
                t.$options.abstract ||
                b(e.$children, t),
                t._watcher && t._watcher.teardown();
              var n = t._watchers.length;
              while (n--) t._watchers[n].teardown();
              t._data.__ob__ && t._data.__ob__.vmCount--,
                (t._isDestroyed = !0),
                t.__patch__(t._vnode, null),
                Bn(t, "destroyed"),
                t.$off(),
                t.$el && (t.$el.__vue__ = null),
                t.$vnode && (t.$vnode.parent = null);
            }
          });
      }
      function Ln(t, e, n) {
        var r;
        return (
          (t.$el = e),
          t.$options.render || (t.$options.render = _t),
          Bn(t, "beforeMount"),
          (r = function () {
            t._update(t._render(), n);
          }),
          new nr(
            t,
            r,
            F,
            {
              before: function () {
                t._isMounted && !t._isDestroyed && Bn(t, "beforeUpdate");
              },
            },
            !0
          ),
          (n = !1),
          null == t.$vnode && ((t._isMounted = !0), Bn(t, "mounted")),
          t
        );
      }
      function En(t, e, r, i, a) {
        var o = i.data.scopedSlots,
          s = t.$scopedSlots,
          l = !!(
            (o && !o.$stable) ||
            (s !== n && !s.$stable) ||
            (o && t.$scopedSlots.$key !== o.$key)
          ),
          u = !!(a || t.$options._renderChildren || l);
        if (
          ((t.$options._parentVnode = i),
          (t.$vnode = i),
          t._vnode && (t._vnode.parent = i),
          (t.$options._renderChildren = a),
          (t.$attrs = i.data.attrs || n),
          (t.$listeners = r || n),
          e && t.$options.props)
        ) {
          Dt(!1);
          for (
            var c = t._props, d = t.$options._propKeys || [], h = 0;
            h < d.length;
            h++
          ) {
            var f = d[h],
              p = t.$options.props;
            c[f] = Xt(f, p, e, t);
          }
          Dt(!0), (t.$options.propsData = e);
        }
        r = r || n;
        var g = t.$options._parentListeners;
        (t.$options._parentListeners = r),
          Pn(t, r, g),
          u && ((t.$slots = Oe(a, i.context)), t.$forceUpdate());
      }
      function Nn(t) {
        while (t && (t = t.$parent)) if (t._inactive) return !0;
        return !1;
      }
      function Rn(t, e) {
        if (e) {
          if (((t._directInactive = !1), Nn(t))) return;
        } else if (t._directInactive) return;
        if (t._inactive || null === t._inactive) {
          t._inactive = !1;
          for (var n = 0; n < t.$children.length; n++) Rn(t.$children[n]);
          Bn(t, "activated");
        }
      }
      function zn(t, e) {
        if ((!e || ((t._directInactive = !0), !Nn(t))) && !t._inactive) {
          t._inactive = !0;
          for (var n = 0; n < t.$children.length; n++) zn(t.$children[n]);
          Bn(t, "deactivated");
        }
      }
      function Bn(t, e) {
        mt();
        var n = t.$options[e],
          r = e + " hook";
        if (n)
          for (var i = 0, a = n.length; i < a; i++) ne(n[i], t, null, t, r);
        t._hasHookEvent && t.$emit("hook:" + e), bt();
      }
      var Vn = [],
        $n = [],
        Wn = {},
        jn = !1,
        Hn = !1,
        qn = 0;
      function Un() {
        (qn = Vn.length = $n.length = 0), (Wn = {}), (jn = Hn = !1);
      }
      var Yn = 0,
        Gn = Date.now;
      if (X && !tt) {
        var Kn = window.performance;
        Kn &&
          "function" === typeof Kn.now &&
          Gn() > document.createEvent("Event").timeStamp &&
          (Gn = function () {
            return Kn.now();
          });
      }
      function Xn() {
        var t, e;
        for (
          Yn = Gn(),
            Hn = !0,
            Vn.sort(function (t, e) {
              return t.id - e.id;
            }),
            qn = 0;
          qn < Vn.length;
          qn++
        )
          (t = Vn[qn]),
            t.before && t.before(),
            (e = t.id),
            (Wn[e] = null),
            t.run();
        var n = $n.slice(),
          r = Vn.slice();
        Un(), Jn(n), Qn(r), ut && W.devtools && ut.emit("flush");
      }
      function Qn(t) {
        var e = t.length;
        while (e--) {
          var n = t[e],
            r = n.vm;
          r._watcher === n &&
            r._isMounted &&
            !r._isDestroyed &&
            Bn(r, "updated");
        }
      }
      function Zn(t) {
        (t._inactive = !1), $n.push(t);
      }
      function Jn(t) {
        for (var e = 0; e < t.length; e++) (t[e]._inactive = !0), Rn(t[e], !0);
      }
      function tr(t) {
        var e = t.id;
        if (null == Wn[e]) {
          if (((Wn[e] = !0), Hn)) {
            var n = Vn.length - 1;
            while (n > qn && Vn[n].id > t.id) n--;
            Vn.splice(n + 1, 0, t);
          } else Vn.push(t);
          jn || ((jn = !0), pe(Xn));
        }
      }
      var er = 0,
        nr = function (t, e, n, r, i) {
          (this.vm = t),
            i && (t._watcher = this),
            t._watchers.push(this),
            r
              ? ((this.deep = !!r.deep),
                (this.user = !!r.user),
                (this.lazy = !!r.lazy),
                (this.sync = !!r.sync),
                (this.before = r.before))
              : (this.deep = this.user = this.lazy = this.sync = !1),
            (this.cb = n),
            (this.id = ++er),
            (this.active = !0),
            (this.dirty = this.lazy),
            (this.deps = []),
            (this.newDeps = []),
            (this.depIds = new dt()),
            (this.newDepIds = new dt()),
            (this.expression = ""),
            "function" === typeof e
              ? (this.getter = e)
              : ((this.getter = Y(e)), this.getter || (this.getter = F)),
            (this.value = this.lazy ? void 0 : this.get());
        };
      (nr.prototype.get = function () {
        var t;
        mt(this);
        var e = this.vm;
        try {
          t = this.getter.call(e, e);
        } catch (ko) {
          if (!this.user) throw ko;
          ee(ko, e, 'getter for watcher "' + this.expression + '"');
        } finally {
          this.deep && ve(t), bt(), this.cleanupDeps();
        }
        return t;
      }),
        (nr.prototype.addDep = function (t) {
          var e = t.id;
          this.newDepIds.has(e) ||
            (this.newDepIds.add(e),
            this.newDeps.push(t),
            this.depIds.has(e) || t.addSub(this));
        }),
        (nr.prototype.cleanupDeps = function () {
          var t = this.deps.length;
          while (t--) {
            var e = this.deps[t];
            this.newDepIds.has(e.id) || e.removeSub(this);
          }
          var n = this.depIds;
          (this.depIds = this.newDepIds),
            (this.newDepIds = n),
            this.newDepIds.clear(),
            (n = this.deps),
            (this.deps = this.newDeps),
            (this.newDeps = n),
            (this.newDeps.length = 0);
        }),
        (nr.prototype.update = function () {
          this.lazy ? (this.dirty = !0) : this.sync ? this.run() : tr(this);
        }),
        (nr.prototype.run = function () {
          if (this.active) {
            var t = this.get();
            if (t !== this.value || l(t) || this.deep) {
              var e = this.value;
              if (((this.value = t), this.user))
                try {
                  this.cb.call(this.vm, t, e);
                } catch (ko) {
                  ee(
                    ko,
                    this.vm,
                    'callback for watcher "' + this.expression + '"'
                  );
                }
              else this.cb.call(this.vm, t, e);
            }
          }
        }),
        (nr.prototype.evaluate = function () {
          (this.value = this.get()), (this.dirty = !1);
        }),
        (nr.prototype.depend = function () {
          var t = this.deps.length;
          while (t--) this.deps[t].depend();
        }),
        (nr.prototype.teardown = function () {
          if (this.active) {
            this.vm._isBeingDestroyed || b(this.vm._watchers, this);
            var t = this.deps.length;
            while (t--) this.deps[t].removeSub(this);
            this.active = !1;
          }
        });
      var rr = { enumerable: !0, configurable: !0, get: F, set: F };
      function ir(t, e, n) {
        (rr.get = function () {
          return this[e][n];
        }),
          (rr.set = function (t) {
            this[e][n] = t;
          }),
          Object.defineProperty(t, n, rr);
      }
      function ar(t) {
        t._watchers = [];
        var e = t.$options;
        e.props && or(t, e.props),
          e.methods && pr(t, e.methods),
          e.data ? sr(t) : Ft((t._data = {}), !0),
          e.computed && cr(t, e.computed),
          e.watch && e.watch !== at && gr(t, e.watch);
      }
      function or(t, e) {
        var n = t.$options.propsData || {},
          r = (t._props = {}),
          i = (t.$options._propKeys = []),
          a = !t.$parent;
        a || Dt(!1);
        var o = function (a) {
          i.push(a);
          var o = Xt(a, e, n, t);
          Lt(r, a, o), a in t || ir(t, "_props", a);
        };
        for (var s in e) o(s);
        Dt(!0);
      }
      function sr(t) {
        var e = t.$options.data;
        (e = t._data = "function" === typeof e ? lr(e, t) : e || {}),
          c(e) || (e = {});
        var n = Object.keys(e),
          r = t.$options.props,
          i = (t.$options.methods, n.length);
        while (i--) {
          var a = n[i];
          0, (r && x(r, a)) || H(a) || ir(t, "_data", a);
        }
        Ft(e, !0);
      }
      function lr(t, e) {
        mt();
        try {
          return t.call(e, e);
        } catch (ko) {
          return ee(ko, e, "data()"), {};
        } finally {
          bt();
        }
      }
      var ur = { lazy: !0 };
      function cr(t, e) {
        var n = (t._computedWatchers = Object.create(null)),
          r = lt();
        for (var i in e) {
          var a = e[i],
            o = "function" === typeof a ? a : a.get;
          0, r || (n[i] = new nr(t, o || F, F, ur)), i in t || dr(t, i, a);
        }
      }
      function dr(t, e, n) {
        var r = !lt();
        "function" === typeof n
          ? ((rr.get = r ? hr(e) : fr(n)), (rr.set = F))
          : ((rr.get = n.get ? (r && !1 !== n.cache ? hr(e) : fr(n.get)) : F),
            (rr.set = n.set || F)),
          Object.defineProperty(t, e, rr);
      }
      function hr(t) {
        return function () {
          var e = this._computedWatchers && this._computedWatchers[t];
          if (e)
            return e.dirty && e.evaluate(), gt.target && e.depend(), e.value;
        };
      }
      function fr(t) {
        return function () {
          return t.call(this, this);
        };
      }
      function pr(t, e) {
        t.$options.props;
        for (var n in e) t[n] = "function" !== typeof e[n] ? F : D(e[n], t);
      }
      function gr(t, e) {
        for (var n in e) {
          var r = e[n];
          if (Array.isArray(r))
            for (var i = 0; i < r.length; i++) vr(t, n, r[i]);
          else vr(t, n, r);
        }
      }
      function vr(t, e, n, r) {
        return (
          c(n) && ((r = n), (n = n.handler)),
          "string" === typeof n && (n = t[n]),
          t.$watch(e, n, r)
        );
      }
      function mr(t) {
        var e = {
            get: function () {
              return this._data;
            },
          },
          n = {
            get: function () {
              return this._props;
            },
          };
        Object.defineProperty(t.prototype, "$data", e),
          Object.defineProperty(t.prototype, "$props", n),
          (t.prototype.$set = Et),
          (t.prototype.$delete = Nt),
          (t.prototype.$watch = function (t, e, n) {
            var r = this;
            if (c(e)) return vr(r, t, e, n);
            (n = n || {}), (n.user = !0);
            var i = new nr(r, t, e, n);
            if (n.immediate)
              try {
                e.call(r, i.value);
              } catch (a) {
                ee(
                  a,
                  r,
                  'callback for immediate watcher "' + i.expression + '"'
                );
              }
            return function () {
              i.teardown();
            };
          });
      }
      var br = 0;
      function yr(t) {
        t.prototype._init = function (t) {
          var e = this;
          (e._uid = br++),
            (e._isVue = !0),
            t && t._isComponent
              ? xr(e, t)
              : (e.$options = Gt(_r(e.constructor), t || {}, e)),
            (e._renderProxy = e),
            (e._self = e),
            In(e),
            Cn(e),
            gn(e),
            Bn(e, "beforeCreate"),
            De(e),
            ar(e),
            Pe(e),
            Bn(e, "created"),
            e.$options.el && e.$mount(e.$options.el);
        };
      }
      function xr(t, e) {
        var n = (t.$options = Object.create(t.constructor.options)),
          r = e._parentVnode;
        (n.parent = e.parent), (n._parentVnode = r);
        var i = r.componentOptions;
        (n.propsData = i.propsData),
          (n._parentListeners = i.listeners),
          (n._renderChildren = i.children),
          (n._componentTag = i.tag),
          e.render &&
            ((n.render = e.render), (n.staticRenderFns = e.staticRenderFns));
      }
      function _r(t) {
        var e = t.options;
        if (t.super) {
          var n = _r(t.super),
            r = t.superOptions;
          if (n !== r) {
            t.superOptions = n;
            var i = wr(t);
            i && O(t.extendOptions, i),
              (e = t.options = Gt(n, t.extendOptions)),
              e.name && (e.components[e.name] = t);
          }
        }
        return e;
      }
      function wr(t) {
        var e,
          n = t.options,
          r = t.sealedOptions;
        for (var i in n) n[i] !== r[i] && (e || (e = {}), (e[i] = n[i]));
        return e;
      }
      function kr(t) {
        this._init(t);
      }
      function Cr(t) {
        t.use = function (t) {
          var e = this._installedPlugins || (this._installedPlugins = []);
          if (e.indexOf(t) > -1) return this;
          var n = T(arguments, 1);
          return (
            n.unshift(this),
            "function" === typeof t.install
              ? t.install.apply(t, n)
              : "function" === typeof t && t.apply(null, n),
            e.push(t),
            this
          );
        };
      }
      function Mr(t) {
        t.mixin = function (t) {
          return (this.options = Gt(this.options, t)), this;
        };
      }
      function Sr(t) {
        t.cid = 0;
        var e = 1;
        t.extend = function (t) {
          t = t || {};
          var n = this,
            r = n.cid,
            i = t._Ctor || (t._Ctor = {});
          if (i[r]) return i[r];
          var a = t.name || n.options.name;
          var o = function (t) {
            this._init(t);
          };
          return (
            (o.prototype = Object.create(n.prototype)),
            (o.prototype.constructor = o),
            (o.cid = e++),
            (o.options = Gt(n.options, t)),
            (o["super"] = n),
            o.options.props && Ar(o),
            o.options.computed && Pr(o),
            (o.extend = n.extend),
            (o.mixin = n.mixin),
            (o.use = n.use),
            V.forEach(function (t) {
              o[t] = n[t];
            }),
            a && (o.options.components[a] = o),
            (o.superOptions = n.options),
            (o.extendOptions = t),
            (o.sealedOptions = O({}, o.options)),
            (i[r] = o),
            o
          );
        };
      }
      function Ar(t) {
        var e = t.options.props;
        for (var n in e) ir(t.prototype, "_props", n);
      }
      function Pr(t) {
        var e = t.options.computed;
        for (var n in e) dr(t.prototype, n, e[n]);
      }
      function Dr(t) {
        V.forEach(function (e) {
          t[e] = function (t, n) {
            return n
              ? ("component" === e &&
                  c(n) &&
                  ((n.name = n.name || t), (n = this.options._base.extend(n))),
                "directive" === e &&
                  "function" === typeof n &&
                  (n = { bind: n, update: n }),
                (this.options[e + "s"][t] = n),
                n)
              : this.options[e + "s"][t];
          };
        });
      }
      function Tr(t) {
        return t && (t.Ctor.options.name || t.tag);
      }
      function Or(t, e) {
        return Array.isArray(t)
          ? t.indexOf(e) > -1
          : "string" === typeof t
          ? t.split(",").indexOf(e) > -1
          : !!d(t) && t.test(e);
      }
      function Ir(t, e) {
        var n = t.cache,
          r = t.keys,
          i = t._vnode;
        for (var a in n) {
          var o = n[a];
          if (o) {
            var s = Tr(o.componentOptions);
            s && !e(s) && Fr(n, a, r, i);
          }
        }
      }
      function Fr(t, e, n, r) {
        var i = t[e];
        !i || (r && i.tag === r.tag) || i.componentInstance.$destroy(),
          (t[e] = null),
          b(n, e);
      }
      yr(kr), mr(kr), Dn(kr), Fn(kr), bn(kr);
      var Lr = [String, RegExp, Array],
        Er = {
          name: "keep-alive",
          abstract: !0,
          props: { include: Lr, exclude: Lr, max: [String, Number] },
          created: function () {
            (this.cache = Object.create(null)), (this.keys = []);
          },
          destroyed: function () {
            for (var t in this.cache) Fr(this.cache, t, this.keys);
          },
          mounted: function () {
            var t = this;
            this.$watch("include", function (e) {
              Ir(t, function (t) {
                return Or(e, t);
              });
            }),
              this.$watch("exclude", function (e) {
                Ir(t, function (t) {
                  return !Or(e, t);
                });
              });
          },
          render: function () {
            var t = this.$slots.default,
              e = kn(t),
              n = e && e.componentOptions;
            if (n) {
              var r = Tr(n),
                i = this,
                a = i.include,
                o = i.exclude;
              if ((a && (!r || !Or(a, r))) || (o && r && Or(o, r))) return e;
              var s = this,
                l = s.cache,
                u = s.keys,
                c =
                  null == e.key
                    ? n.Ctor.cid + (n.tag ? "::" + n.tag : "")
                    : e.key;
              l[c]
                ? ((e.componentInstance = l[c].componentInstance),
                  b(u, c),
                  u.push(c))
                : ((l[c] = e),
                  u.push(c),
                  this.max &&
                    u.length > parseInt(this.max) &&
                    Fr(l, u[0], u, this._vnode)),
                (e.data.keepAlive = !0);
            }
            return e || (t && t[0]);
          },
        },
        Nr = { KeepAlive: Er };
      function Rr(t) {
        var e = {
          get: function () {
            return W;
          },
        };
        Object.defineProperty(t, "config", e),
          (t.util = {
            warn: ft,
            extend: O,
            mergeOptions: Gt,
            defineReactive: Lt,
          }),
          (t.set = Et),
          (t.delete = Nt),
          (t.nextTick = pe),
          (t.observable = function (t) {
            return Ft(t), t;
          }),
          (t.options = Object.create(null)),
          V.forEach(function (e) {
            t.options[e + "s"] = Object.create(null);
          }),
          (t.options._base = t),
          O(t.options.components, Nr),
          Cr(t),
          Mr(t),
          Sr(t),
          Dr(t);
      }
      Rr(kr),
        Object.defineProperty(kr.prototype, "$isServer", { get: lt }),
        Object.defineProperty(kr.prototype, "$ssrContext", {
          get: function () {
            return this.$vnode && this.$vnode.ssrContext;
          },
        }),
        Object.defineProperty(kr, "FunctionalRenderContext", { value: Qe }),
        (kr.version = "2.6.11");
      var zr = v("style,class"),
        Br = v("input,textarea,option,select,progress"),
        Vr = function (t, e, n) {
          return (
            ("value" === n && Br(t) && "button" !== e) ||
            ("selected" === n && "option" === t) ||
            ("checked" === n && "input" === t) ||
            ("muted" === n && "video" === t)
          );
        },
        $r = v("contenteditable,draggable,spellcheck"),
        Wr = v("events,caret,typing,plaintext-only"),
        jr = function (t, e) {
          return Gr(e) || "false" === e
            ? "false"
            : "contenteditable" === t && Wr(e)
            ? e
            : "true";
        },
        Hr = v(
          "allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"
        ),
        qr = "http://www.w3.org/1999/xlink",
        Ur = function (t) {
          return ":" === t.charAt(5) && "xlink" === t.slice(0, 5);
        },
        Yr = function (t) {
          return Ur(t) ? t.slice(6, t.length) : "";
        },
        Gr = function (t) {
          return null == t || !1 === t;
        };
      function Kr(t) {
        var e = t.data,
          n = t,
          r = t;
        while (i(r.componentInstance))
          (r = r.componentInstance._vnode), r && r.data && (e = Xr(r.data, e));
        while (i((n = n.parent))) n && n.data && (e = Xr(e, n.data));
        return Qr(e.staticClass, e.class);
      }
      function Xr(t, e) {
        return {
          staticClass: Zr(t.staticClass, e.staticClass),
          class: i(t.class) ? [t.class, e.class] : e.class,
        };
      }
      function Qr(t, e) {
        return i(t) || i(e) ? Zr(t, Jr(e)) : "";
      }
      function Zr(t, e) {
        return t ? (e ? t + " " + e : t) : e || "";
      }
      function Jr(t) {
        return Array.isArray(t)
          ? ti(t)
          : l(t)
          ? ei(t)
          : "string" === typeof t
          ? t
          : "";
      }
      function ti(t) {
        for (var e, n = "", r = 0, a = t.length; r < a; r++)
          i((e = Jr(t[r]))) && "" !== e && (n && (n += " "), (n += e));
        return n;
      }
      function ei(t) {
        var e = "";
        for (var n in t) t[n] && (e && (e += " "), (e += n));
        return e;
      }
      var ni = {
          svg: "http://www.w3.org/2000/svg",
          math: "http://www.w3.org/1998/Math/MathML",
        },
        ri = v(
          "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"
        ),
        ii = v(
          "svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",
          !0
        ),
        ai = function (t) {
          return ri(t) || ii(t);
        };
      function oi(t) {
        return ii(t) ? "svg" : "math" === t ? "math" : void 0;
      }
      var si = Object.create(null);
      function li(t) {
        if (!X) return !0;
        if (ai(t)) return !1;
        if (((t = t.toLowerCase()), null != si[t])) return si[t];
        var e = document.createElement(t);
        return t.indexOf("-") > -1
          ? (si[t] =
              e.constructor === window.HTMLUnknownElement ||
              e.constructor === window.HTMLElement)
          : (si[t] = /HTMLUnknownElement/.test(e.toString()));
      }
      var ui = v("text,number,password,search,email,tel,url");
      function ci(t) {
        if ("string" === typeof t) {
          var e = document.querySelector(t);
          return e || document.createElement("div");
        }
        return t;
      }
      function di(t, e) {
        var n = document.createElement(t);
        return (
          "select" !== t ||
            (e.data &&
              e.data.attrs &&
              void 0 !== e.data.attrs.multiple &&
              n.setAttribute("multiple", "multiple")),
          n
        );
      }
      function hi(t, e) {
        return document.createElementNS(ni[t], e);
      }
      function fi(t) {
        return document.createTextNode(t);
      }
      function pi(t) {
        return document.createComment(t);
      }
      function gi(t, e, n) {
        t.insertBefore(e, n);
      }
      function vi(t, e) {
        t.removeChild(e);
      }
      function mi(t, e) {
        t.appendChild(e);
      }
      function bi(t) {
        return t.parentNode;
      }
      function yi(t) {
        return t.nextSibling;
      }
      function xi(t) {
        return t.tagName;
      }
      function _i(t, e) {
        t.textContent = e;
      }
      function wi(t, e) {
        t.setAttribute(e, "");
      }
      var ki = Object.freeze({
          createElement: di,
          createElementNS: hi,
          createTextNode: fi,
          createComment: pi,
          insertBefore: gi,
          removeChild: vi,
          appendChild: mi,
          parentNode: bi,
          nextSibling: yi,
          tagName: xi,
          setTextContent: _i,
          setStyleScope: wi,
        }),
        Ci = {
          create: function (t, e) {
            Mi(e);
          },
          update: function (t, e) {
            t.data.ref !== e.data.ref && (Mi(t, !0), Mi(e));
          },
          destroy: function (t) {
            Mi(t, !0);
          },
        };
      function Mi(t, e) {
        var n = t.data.ref;
        if (i(n)) {
          var r = t.context,
            a = t.componentInstance || t.elm,
            o = r.$refs;
          e
            ? Array.isArray(o[n])
              ? b(o[n], a)
              : o[n] === a && (o[n] = void 0)
            : t.data.refInFor
            ? Array.isArray(o[n])
              ? o[n].indexOf(a) < 0 && o[n].push(a)
              : (o[n] = [a])
            : (o[n] = a);
        }
      }
      var Si = new yt("", {}, []),
        Ai = ["create", "activate", "update", "remove", "destroy"];
      function Pi(t, e) {
        return (
          t.key === e.key &&
          ((t.tag === e.tag &&
            t.isComment === e.isComment &&
            i(t.data) === i(e.data) &&
            Di(t, e)) ||
            (a(t.isAsyncPlaceholder) &&
              t.asyncFactory === e.asyncFactory &&
              r(e.asyncFactory.error)))
        );
      }
      function Di(t, e) {
        if ("input" !== t.tag) return !0;
        var n,
          r = i((n = t.data)) && i((n = n.attrs)) && n.type,
          a = i((n = e.data)) && i((n = n.attrs)) && n.type;
        return r === a || (ui(r) && ui(a));
      }
      function Ti(t, e, n) {
        var r,
          a,
          o = {};
        for (r = e; r <= n; ++r) (a = t[r].key), i(a) && (o[a] = r);
        return o;
      }
      function Oi(t) {
        var e,
          n,
          o = {},
          l = t.modules,
          u = t.nodeOps;
        for (e = 0; e < Ai.length; ++e)
          for (o[Ai[e]] = [], n = 0; n < l.length; ++n)
            i(l[n][Ai[e]]) && o[Ai[e]].push(l[n][Ai[e]]);
        function c(t) {
          return new yt(u.tagName(t).toLowerCase(), {}, [], void 0, t);
        }
        function d(t, e) {
          function n() {
            0 === --n.listeners && h(t);
          }
          return (n.listeners = e), n;
        }
        function h(t) {
          var e = u.parentNode(t);
          i(e) && u.removeChild(e, t);
        }
        function f(t, e, n, r, o, s, l) {
          if (
            (i(t.elm) && i(s) && (t = s[l] = kt(t)),
            (t.isRootInsert = !o),
            !p(t, e, n, r))
          ) {
            var c = t.data,
              d = t.children,
              h = t.tag;
            i(h)
              ? ((t.elm = t.ns
                  ? u.createElementNS(t.ns, h)
                  : u.createElement(h, t)),
                w(t),
                y(t, d, e),
                i(c) && _(t, e),
                b(n, t.elm, r))
              : a(t.isComment)
              ? ((t.elm = u.createComment(t.text)), b(n, t.elm, r))
              : ((t.elm = u.createTextNode(t.text)), b(n, t.elm, r));
          }
        }
        function p(t, e, n, r) {
          var o = t.data;
          if (i(o)) {
            var s = i(t.componentInstance) && o.keepAlive;
            if (
              (i((o = o.hook)) && i((o = o.init)) && o(t, !1),
              i(t.componentInstance))
            )
              return g(t, e), b(n, t.elm, r), a(s) && m(t, e, n, r), !0;
          }
        }
        function g(t, e) {
          i(t.data.pendingInsert) &&
            (e.push.apply(e, t.data.pendingInsert),
            (t.data.pendingInsert = null)),
            (t.elm = t.componentInstance.$el),
            x(t) ? (_(t, e), w(t)) : (Mi(t), e.push(t));
        }
        function m(t, e, n, r) {
          var a,
            s = t;
          while (s.componentInstance)
            if (
              ((s = s.componentInstance._vnode),
              i((a = s.data)) && i((a = a.transition)))
            ) {
              for (a = 0; a < o.activate.length; ++a) o.activate[a](Si, s);
              e.push(s);
              break;
            }
          b(n, t.elm, r);
        }
        function b(t, e, n) {
          i(t) &&
            (i(n)
              ? u.parentNode(n) === t && u.insertBefore(t, e, n)
              : u.appendChild(t, e));
        }
        function y(t, e, n) {
          if (Array.isArray(e)) {
            0;
            for (var r = 0; r < e.length; ++r)
              f(e[r], n, t.elm, null, !0, e, r);
          } else
            s(t.text) && u.appendChild(t.elm, u.createTextNode(String(t.text)));
        }
        function x(t) {
          while (t.componentInstance) t = t.componentInstance._vnode;
          return i(t.tag);
        }
        function _(t, n) {
          for (var r = 0; r < o.create.length; ++r) o.create[r](Si, t);
          (e = t.data.hook),
            i(e) && (i(e.create) && e.create(Si, t), i(e.insert) && n.push(t));
        }
        function w(t) {
          var e;
          if (i((e = t.fnScopeId))) u.setStyleScope(t.elm, e);
          else {
            var n = t;
            while (n)
              i((e = n.context)) &&
                i((e = e.$options._scopeId)) &&
                u.setStyleScope(t.elm, e),
                (n = n.parent);
          }
          i((e = Tn)) &&
            e !== t.context &&
            e !== t.fnContext &&
            i((e = e.$options._scopeId)) &&
            u.setStyleScope(t.elm, e);
        }
        function k(t, e, n, r, i, a) {
          for (; r <= i; ++r) f(n[r], a, t, e, !1, n, r);
        }
        function C(t) {
          var e,
            n,
            r = t.data;
          if (i(r))
            for (
              i((e = r.hook)) && i((e = e.destroy)) && e(t), e = 0;
              e < o.destroy.length;
              ++e
            )
              o.destroy[e](t);
          if (i((e = t.children)))
            for (n = 0; n < t.children.length; ++n) C(t.children[n]);
        }
        function M(t, e, n) {
          for (; e <= n; ++e) {
            var r = t[e];
            i(r) && (i(r.tag) ? (S(r), C(r)) : h(r.elm));
          }
        }
        function S(t, e) {
          if (i(e) || i(t.data)) {
            var n,
              r = o.remove.length + 1;
            for (
              i(e) ? (e.listeners += r) : (e = d(t.elm, r)),
                i((n = t.componentInstance)) &&
                  i((n = n._vnode)) &&
                  i(n.data) &&
                  S(n, e),
                n = 0;
              n < o.remove.length;
              ++n
            )
              o.remove[n](t, e);
            i((n = t.data.hook)) && i((n = n.remove)) ? n(t, e) : e();
          } else h(t.elm);
        }
        function A(t, e, n, a, o) {
          var s,
            l,
            c,
            d,
            h = 0,
            p = 0,
            g = e.length - 1,
            v = e[0],
            m = e[g],
            b = n.length - 1,
            y = n[0],
            x = n[b],
            _ = !o;
          while (h <= g && p <= b)
            r(v)
              ? (v = e[++h])
              : r(m)
              ? (m = e[--g])
              : Pi(v, y)
              ? (D(v, y, a, n, p), (v = e[++h]), (y = n[++p]))
              : Pi(m, x)
              ? (D(m, x, a, n, b), (m = e[--g]), (x = n[--b]))
              : Pi(v, x)
              ? (D(v, x, a, n, b),
                _ && u.insertBefore(t, v.elm, u.nextSibling(m.elm)),
                (v = e[++h]),
                (x = n[--b]))
              : Pi(m, y)
              ? (D(m, y, a, n, p),
                _ && u.insertBefore(t, m.elm, v.elm),
                (m = e[--g]),
                (y = n[++p]))
              : (r(s) && (s = Ti(e, h, g)),
                (l = i(y.key) ? s[y.key] : P(y, e, h, g)),
                r(l)
                  ? f(y, a, t, v.elm, !1, n, p)
                  : ((c = e[l]),
                    Pi(c, y)
                      ? (D(c, y, a, n, p),
                        (e[l] = void 0),
                        _ && u.insertBefore(t, c.elm, v.elm))
                      : f(y, a, t, v.elm, !1, n, p)),
                (y = n[++p]));
          h > g
            ? ((d = r(n[b + 1]) ? null : n[b + 1].elm), k(t, d, n, p, b, a))
            : p > b && M(e, h, g);
        }
        function P(t, e, n, r) {
          for (var a = n; a < r; a++) {
            var o = e[a];
            if (i(o) && Pi(t, o)) return a;
          }
        }
        function D(t, e, n, s, l, c) {
          if (t !== e) {
            i(e.elm) && i(s) && (e = s[l] = kt(e));
            var d = (e.elm = t.elm);
            if (a(t.isAsyncPlaceholder))
              i(e.asyncFactory.resolved)
                ? I(t.elm, e, n)
                : (e.isAsyncPlaceholder = !0);
            else if (
              a(e.isStatic) &&
              a(t.isStatic) &&
              e.key === t.key &&
              (a(e.isCloned) || a(e.isOnce))
            )
              e.componentInstance = t.componentInstance;
            else {
              var h,
                f = e.data;
              i(f) && i((h = f.hook)) && i((h = h.prepatch)) && h(t, e);
              var p = t.children,
                g = e.children;
              if (i(f) && x(e)) {
                for (h = 0; h < o.update.length; ++h) o.update[h](t, e);
                i((h = f.hook)) && i((h = h.update)) && h(t, e);
              }
              r(e.text)
                ? i(p) && i(g)
                  ? p !== g && A(d, p, g, n, c)
                  : i(g)
                  ? (i(t.text) && u.setTextContent(d, ""),
                    k(d, null, g, 0, g.length - 1, n))
                  : i(p)
                  ? M(p, 0, p.length - 1)
                  : i(t.text) && u.setTextContent(d, "")
                : t.text !== e.text && u.setTextContent(d, e.text),
                i(f) && i((h = f.hook)) && i((h = h.postpatch)) && h(t, e);
            }
          }
        }
        function T(t, e, n) {
          if (a(n) && i(t.parent)) t.parent.data.pendingInsert = e;
          else for (var r = 0; r < e.length; ++r) e[r].data.hook.insert(e[r]);
        }
        var O = v("attrs,class,staticClass,staticStyle,key");
        function I(t, e, n, r) {
          var o,
            s = e.tag,
            l = e.data,
            u = e.children;
          if (
            ((r = r || (l && l.pre)),
            (e.elm = t),
            a(e.isComment) && i(e.asyncFactory))
          )
            return (e.isAsyncPlaceholder = !0), !0;
          if (
            i(l) &&
            (i((o = l.hook)) && i((o = o.init)) && o(e, !0),
            i((o = e.componentInstance)))
          )
            return g(e, n), !0;
          if (i(s)) {
            if (i(u))
              if (t.hasChildNodes())
                if (i((o = l)) && i((o = o.domProps)) && i((o = o.innerHTML))) {
                  if (o !== t.innerHTML) return !1;
                } else {
                  for (var c = !0, d = t.firstChild, h = 0; h < u.length; h++) {
                    if (!d || !I(d, u[h], n, r)) {
                      c = !1;
                      break;
                    }
                    d = d.nextSibling;
                  }
                  if (!c || d) return !1;
                }
              else y(e, u, n);
            if (i(l)) {
              var f = !1;
              for (var p in l)
                if (!O(p)) {
                  (f = !0), _(e, n);
                  break;
                }
              !f && l["class"] && ve(l["class"]);
            }
          } else t.data !== e.text && (t.data = e.text);
          return !0;
        }
        return function (t, e, n, s) {
          if (!r(e)) {
            var l = !1,
              d = [];
            if (r(t)) (l = !0), f(e, d);
            else {
              var h = i(t.nodeType);
              if (!h && Pi(t, e)) D(t, e, d, null, null, s);
              else {
                if (h) {
                  if (
                    (1 === t.nodeType &&
                      t.hasAttribute(B) &&
                      (t.removeAttribute(B), (n = !0)),
                    a(n) && I(t, e, d))
                  )
                    return T(e, d, !0), t;
                  t = c(t);
                }
                var p = t.elm,
                  g = u.parentNode(p);
                if (
                  (f(e, d, p._leaveCb ? null : g, u.nextSibling(p)),
                  i(e.parent))
                ) {
                  var v = e.parent,
                    m = x(e);
                  while (v) {
                    for (var b = 0; b < o.destroy.length; ++b) o.destroy[b](v);
                    if (((v.elm = e.elm), m)) {
                      for (var y = 0; y < o.create.length; ++y)
                        o.create[y](Si, v);
                      var _ = v.data.hook.insert;
                      if (_.merged)
                        for (var w = 1; w < _.fns.length; w++) _.fns[w]();
                    } else Mi(v);
                    v = v.parent;
                  }
                }
                i(g) ? M([t], 0, 0) : i(t.tag) && C(t);
              }
            }
            return T(e, d, l), e.elm;
          }
          i(t) && C(t);
        };
      }
      var Ii = {
        create: Fi,
        update: Fi,
        destroy: function (t) {
          Fi(t, Si);
        },
      };
      function Fi(t, e) {
        (t.data.directives || e.data.directives) && Li(t, e);
      }
      function Li(t, e) {
        var n,
          r,
          i,
          a = t === Si,
          o = e === Si,
          s = Ni(t.data.directives, t.context),
          l = Ni(e.data.directives, e.context),
          u = [],
          c = [];
        for (n in l)
          (r = s[n]),
            (i = l[n]),
            r
              ? ((i.oldValue = r.value),
                (i.oldArg = r.arg),
                zi(i, "update", e, t),
                i.def && i.def.componentUpdated && c.push(i))
              : (zi(i, "bind", e, t), i.def && i.def.inserted && u.push(i));
        if (u.length) {
          var d = function () {
            for (var n = 0; n < u.length; n++) zi(u[n], "inserted", e, t);
          };
          a ? _e(e, "insert", d) : d();
        }
        if (
          (c.length &&
            _e(e, "postpatch", function () {
              for (var n = 0; n < c.length; n++)
                zi(c[n], "componentUpdated", e, t);
            }),
          !a)
        )
          for (n in s) l[n] || zi(s[n], "unbind", t, t, o);
      }
      var Ei = Object.create(null);
      function Ni(t, e) {
        var n,
          r,
          i = Object.create(null);
        if (!t) return i;
        for (n = 0; n < t.length; n++)
          (r = t[n]),
            r.modifiers || (r.modifiers = Ei),
            (i[Ri(r)] = r),
            (r.def = Kt(e.$options, "directives", r.name, !0));
        return i;
      }
      function Ri(t) {
        return (
          t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".")
        );
      }
      function zi(t, e, n, r, i) {
        var a = t.def && t.def[e];
        if (a)
          try {
            a(n.elm, t, n, r, i);
          } catch (ko) {
            ee(ko, n.context, "directive " + t.name + " " + e + " hook");
          }
      }
      var Bi = [Ci, Ii];
      function Vi(t, e) {
        var n = e.componentOptions;
        if (
          (!i(n) || !1 !== n.Ctor.options.inheritAttrs) &&
          (!r(t.data.attrs) || !r(e.data.attrs))
        ) {
          var a,
            o,
            s,
            l = e.elm,
            u = t.data.attrs || {},
            c = e.data.attrs || {};
          for (a in (i(c.__ob__) && (c = e.data.attrs = O({}, c)), c))
            (o = c[a]), (s = u[a]), s !== o && $i(l, a, o);
          for (a in ((tt || nt) &&
            c.value !== u.value &&
            $i(l, "value", c.value),
          u))
            r(c[a]) &&
              (Ur(a)
                ? l.removeAttributeNS(qr, Yr(a))
                : $r(a) || l.removeAttribute(a));
        }
      }
      function $i(t, e, n) {
        t.tagName.indexOf("-") > -1
          ? Wi(t, e, n)
          : Hr(e)
          ? Gr(n)
            ? t.removeAttribute(e)
            : ((n =
                "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e),
              t.setAttribute(e, n))
          : $r(e)
          ? t.setAttribute(e, jr(e, n))
          : Ur(e)
          ? Gr(n)
            ? t.removeAttributeNS(qr, Yr(e))
            : t.setAttributeNS(qr, e, n)
          : Wi(t, e, n);
      }
      function Wi(t, e, n) {
        if (Gr(n)) t.removeAttribute(e);
        else {
          if (
            tt &&
            !et &&
            "TEXTAREA" === t.tagName &&
            "placeholder" === e &&
            "" !== n &&
            !t.__ieph
          ) {
            var r = function (e) {
              e.stopImmediatePropagation(), t.removeEventListener("input", r);
            };
            t.addEventListener("input", r), (t.__ieph = !0);
          }
          t.setAttribute(e, n);
        }
      }
      var ji = { create: Vi, update: Vi };
      function Hi(t, e) {
        var n = e.elm,
          a = e.data,
          o = t.data;
        if (
          !(
            r(a.staticClass) &&
            r(a.class) &&
            (r(o) || (r(o.staticClass) && r(o.class)))
          )
        ) {
          var s = Kr(e),
            l = n._transitionClasses;
          i(l) && (s = Zr(s, Jr(l))),
            s !== n._prevClass &&
              (n.setAttribute("class", s), (n._prevClass = s));
        }
      }
      var qi,
        Ui = { create: Hi, update: Hi },
        Yi = "__r",
        Gi = "__c";
      function Ki(t) {
        if (i(t[Yi])) {
          var e = tt ? "change" : "input";
          (t[e] = [].concat(t[Yi], t[e] || [])), delete t[Yi];
        }
        i(t[Gi]) &&
          ((t.change = [].concat(t[Gi], t.change || [])), delete t[Gi]);
      }
      function Xi(t, e, n) {
        var r = qi;
        return function i() {
          var a = e.apply(null, arguments);
          null !== a && Ji(t, i, n, r);
        };
      }
      var Qi = oe && !(it && Number(it[1]) <= 53);
      function Zi(t, e, n, r) {
        if (Qi) {
          var i = Yn,
            a = e;
          e = a._wrapper = function (t) {
            if (
              t.target === t.currentTarget ||
              t.timeStamp >= i ||
              t.timeStamp <= 0 ||
              t.target.ownerDocument !== document
            )
              return a.apply(this, arguments);
          };
        }
        qi.addEventListener(t, e, ot ? { capture: n, passive: r } : n);
      }
      function Ji(t, e, n, r) {
        (r || qi).removeEventListener(t, e._wrapper || e, n);
      }
      function ta(t, e) {
        if (!r(t.data.on) || !r(e.data.on)) {
          var n = e.data.on || {},
            i = t.data.on || {};
          (qi = e.elm), Ki(n), xe(n, i, Zi, Ji, Xi, e.context), (qi = void 0);
        }
      }
      var ea,
        na = { create: ta, update: ta };
      function ra(t, e) {
        if (!r(t.data.domProps) || !r(e.data.domProps)) {
          var n,
            a,
            o = e.elm,
            s = t.data.domProps || {},
            l = e.data.domProps || {};
          for (n in (i(l.__ob__) && (l = e.data.domProps = O({}, l)), s))
            n in l || (o[n] = "");
          for (n in l) {
            if (((a = l[n]), "textContent" === n || "innerHTML" === n)) {
              if ((e.children && (e.children.length = 0), a === s[n])) continue;
              1 === o.childNodes.length && o.removeChild(o.childNodes[0]);
            }
            if ("value" === n && "PROGRESS" !== o.tagName) {
              o._value = a;
              var u = r(a) ? "" : String(a);
              ia(o, u) && (o.value = u);
            } else if ("innerHTML" === n && ii(o.tagName) && r(o.innerHTML)) {
              (ea = ea || document.createElement("div")),
                (ea.innerHTML = "<svg>" + a + "</svg>");
              var c = ea.firstChild;
              while (o.firstChild) o.removeChild(o.firstChild);
              while (c.firstChild) o.appendChild(c.firstChild);
            } else if (a !== s[n])
              try {
                o[n] = a;
              } catch (ko) {}
          }
        }
      }
      function ia(t, e) {
        return !t.composing && ("OPTION" === t.tagName || aa(t, e) || oa(t, e));
      }
      function aa(t, e) {
        var n = !0;
        try {
          n = document.activeElement !== t;
        } catch (ko) {}
        return n && t.value !== e;
      }
      function oa(t, e) {
        var n = t.value,
          r = t._vModifiers;
        if (i(r)) {
          if (r.number) return g(n) !== g(e);
          if (r.trim) return n.trim() !== e.trim();
        }
        return n !== e;
      }
      var sa = { create: ra, update: ra },
        la = _(function (t) {
          var e = {},
            n = /;(?![^(]*\))/g,
            r = /:(.+)/;
          return (
            t.split(n).forEach(function (t) {
              if (t) {
                var n = t.split(r);
                n.length > 1 && (e[n[0].trim()] = n[1].trim());
              }
            }),
            e
          );
        });
      function ua(t) {
        var e = ca(t.style);
        return t.staticStyle ? O(t.staticStyle, e) : e;
      }
      function ca(t) {
        return Array.isArray(t) ? I(t) : "string" === typeof t ? la(t) : t;
      }
      function da(t, e) {
        var n,
          r = {};
        if (e) {
          var i = t;
          while (i.componentInstance)
            (i = i.componentInstance._vnode),
              i && i.data && (n = ua(i.data)) && O(r, n);
        }
        (n = ua(t.data)) && O(r, n);
        var a = t;
        while ((a = a.parent)) a.data && (n = ua(a.data)) && O(r, n);
        return r;
      }
      var ha,
        fa = /^--/,
        pa = /\s*!important$/,
        ga = function (t, e, n) {
          if (fa.test(e)) t.style.setProperty(e, n);
          else if (pa.test(n))
            t.style.setProperty(S(e), n.replace(pa, ""), "important");
          else {
            var r = ma(e);
            if (Array.isArray(n))
              for (var i = 0, a = n.length; i < a; i++) t.style[r] = n[i];
            else t.style[r] = n;
          }
        },
        va = ["Webkit", "Moz", "ms"],
        ma = _(function (t) {
          if (
            ((ha = ha || document.createElement("div").style),
            (t = k(t)),
            "filter" !== t && t in ha)
          )
            return t;
          for (
            var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0;
            n < va.length;
            n++
          ) {
            var r = va[n] + e;
            if (r in ha) return r;
          }
        });
      function ba(t, e) {
        var n = e.data,
          a = t.data;
        if (
          !(r(n.staticStyle) && r(n.style) && r(a.staticStyle) && r(a.style))
        ) {
          var o,
            s,
            l = e.elm,
            u = a.staticStyle,
            c = a.normalizedStyle || a.style || {},
            d = u || c,
            h = ca(e.data.style) || {};
          e.data.normalizedStyle = i(h.__ob__) ? O({}, h) : h;
          var f = da(e, !0);
          for (s in d) r(f[s]) && ga(l, s, "");
          for (s in f) (o = f[s]), o !== d[s] && ga(l, s, null == o ? "" : o);
        }
      }
      var ya = { create: ba, update: ba },
        xa = /\s+/;
      function _a(t, e) {
        if (e && (e = e.trim()))
          if (t.classList)
            e.indexOf(" ") > -1
              ? e.split(xa).forEach(function (e) {
                  return t.classList.add(e);
                })
              : t.classList.add(e);
          else {
            var n = " " + (t.getAttribute("class") || "") + " ";
            n.indexOf(" " + e + " ") < 0 &&
              t.setAttribute("class", (n + e).trim());
          }
      }
      function wa(t, e) {
        if (e && (e = e.trim()))
          if (t.classList)
            e.indexOf(" ") > -1
              ? e.split(xa).forEach(function (e) {
                  return t.classList.remove(e);
                })
              : t.classList.remove(e),
              t.classList.length || t.removeAttribute("class");
          else {
            var n = " " + (t.getAttribute("class") || "") + " ",
              r = " " + e + " ";
            while (n.indexOf(r) >= 0) n = n.replace(r, " ");
            (n = n.trim()),
              n ? t.setAttribute("class", n) : t.removeAttribute("class");
          }
      }
      function ka(t) {
        if (t) {
          if ("object" === typeof t) {
            var e = {};
            return !1 !== t.css && O(e, Ca(t.name || "v")), O(e, t), e;
          }
          return "string" === typeof t ? Ca(t) : void 0;
        }
      }
      var Ca = _(function (t) {
          return {
            enterClass: t + "-enter",
            enterToClass: t + "-enter-to",
            enterActiveClass: t + "-enter-active",
            leaveClass: t + "-leave",
            leaveToClass: t + "-leave-to",
            leaveActiveClass: t + "-leave-active",
          };
        }),
        Ma = X && !et,
        Sa = "transition",
        Aa = "animation",
        Pa = "transition",
        Da = "transitionend",
        Ta = "animation",
        Oa = "animationend";
      Ma &&
        (void 0 === window.ontransitionend &&
          void 0 !== window.onwebkittransitionend &&
          ((Pa = "WebkitTransition"), (Da = "webkitTransitionEnd")),
        void 0 === window.onanimationend &&
          void 0 !== window.onwebkitanimationend &&
          ((Ta = "WebkitAnimation"), (Oa = "webkitAnimationEnd")));
      var Ia = X
        ? window.requestAnimationFrame
          ? window.requestAnimationFrame.bind(window)
          : setTimeout
        : function (t) {
            return t();
          };
      function Fa(t) {
        Ia(function () {
          Ia(t);
        });
      }
      function La(t, e) {
        var n = t._transitionClasses || (t._transitionClasses = []);
        n.indexOf(e) < 0 && (n.push(e), _a(t, e));
      }
      function Ea(t, e) {
        t._transitionClasses && b(t._transitionClasses, e), wa(t, e);
      }
      function Na(t, e, n) {
        var r = za(t, e),
          i = r.type,
          a = r.timeout,
          o = r.propCount;
        if (!i) return n();
        var s = i === Sa ? Da : Oa,
          l = 0,
          u = function () {
            t.removeEventListener(s, c), n();
          },
          c = function (e) {
            e.target === t && ++l >= o && u();
          };
        setTimeout(function () {
          l < o && u();
        }, a + 1),
          t.addEventListener(s, c);
      }
      var Ra = /\b(transform|all)(,|$)/;
      function za(t, e) {
        var n,
          r = window.getComputedStyle(t),
          i = (r[Pa + "Delay"] || "").split(", "),
          a = (r[Pa + "Duration"] || "").split(", "),
          o = Ba(i, a),
          s = (r[Ta + "Delay"] || "").split(", "),
          l = (r[Ta + "Duration"] || "").split(", "),
          u = Ba(s, l),
          c = 0,
          d = 0;
        e === Sa
          ? o > 0 && ((n = Sa), (c = o), (d = a.length))
          : e === Aa
          ? u > 0 && ((n = Aa), (c = u), (d = l.length))
          : ((c = Math.max(o, u)),
            (n = c > 0 ? (o > u ? Sa : Aa) : null),
            (d = n ? (n === Sa ? a.length : l.length) : 0));
        var h = n === Sa && Ra.test(r[Pa + "Property"]);
        return { type: n, timeout: c, propCount: d, hasTransform: h };
      }
      function Ba(t, e) {
        while (t.length < e.length) t = t.concat(t);
        return Math.max.apply(
          null,
          e.map(function (e, n) {
            return Va(e) + Va(t[n]);
          })
        );
      }
      function Va(t) {
        return 1e3 * Number(t.slice(0, -1).replace(",", "."));
      }
      function $a(t, e) {
        var n = t.elm;
        i(n._leaveCb) && ((n._leaveCb.cancelled = !0), n._leaveCb());
        var a = ka(t.data.transition);
        if (!r(a) && !i(n._enterCb) && 1 === n.nodeType) {
          var o = a.css,
            s = a.type,
            u = a.enterClass,
            c = a.enterToClass,
            d = a.enterActiveClass,
            h = a.appearClass,
            f = a.appearToClass,
            p = a.appearActiveClass,
            v = a.beforeEnter,
            m = a.enter,
            b = a.afterEnter,
            y = a.enterCancelled,
            x = a.beforeAppear,
            _ = a.appear,
            w = a.afterAppear,
            k = a.appearCancelled,
            C = a.duration,
            M = Tn,
            S = Tn.$vnode;
          while (S && S.parent) (M = S.context), (S = S.parent);
          var A = !M._isMounted || !t.isRootInsert;
          if (!A || _ || "" === _) {
            var P = A && h ? h : u,
              D = A && p ? p : d,
              T = A && f ? f : c,
              O = (A && x) || v,
              I = A && "function" === typeof _ ? _ : m,
              F = (A && w) || b,
              L = (A && k) || y,
              E = g(l(C) ? C.enter : C);
            0;
            var N = !1 !== o && !et,
              R = Ha(I),
              B = (n._enterCb = z(function () {
                N && (Ea(n, T), Ea(n, D)),
                  B.cancelled ? (N && Ea(n, P), L && L(n)) : F && F(n),
                  (n._enterCb = null);
              }));
            t.data.show ||
              _e(t, "insert", function () {
                var e = n.parentNode,
                  r = e && e._pending && e._pending[t.key];
                r && r.tag === t.tag && r.elm._leaveCb && r.elm._leaveCb(),
                  I && I(n, B);
              }),
              O && O(n),
              N &&
                (La(n, P),
                La(n, D),
                Fa(function () {
                  Ea(n, P),
                    B.cancelled ||
                      (La(n, T), R || (ja(E) ? setTimeout(B, E) : Na(n, s, B)));
                })),
              t.data.show && (e && e(), I && I(n, B)),
              N || R || B();
          }
        }
      }
      function Wa(t, e) {
        var n = t.elm;
        i(n._enterCb) && ((n._enterCb.cancelled = !0), n._enterCb());
        var a = ka(t.data.transition);
        if (r(a) || 1 !== n.nodeType) return e();
        if (!i(n._leaveCb)) {
          var o = a.css,
            s = a.type,
            u = a.leaveClass,
            c = a.leaveToClass,
            d = a.leaveActiveClass,
            h = a.beforeLeave,
            f = a.leave,
            p = a.afterLeave,
            v = a.leaveCancelled,
            m = a.delayLeave,
            b = a.duration,
            y = !1 !== o && !et,
            x = Ha(f),
            _ = g(l(b) ? b.leave : b);
          0;
          var w = (n._leaveCb = z(function () {
            n.parentNode &&
              n.parentNode._pending &&
              (n.parentNode._pending[t.key] = null),
              y && (Ea(n, c), Ea(n, d)),
              w.cancelled ? (y && Ea(n, u), v && v(n)) : (e(), p && p(n)),
              (n._leaveCb = null);
          }));
          m ? m(k) : k();
        }
        function k() {
          w.cancelled ||
            (!t.data.show &&
              n.parentNode &&
              ((n.parentNode._pending || (n.parentNode._pending = {}))[t.key] =
                t),
            h && h(n),
            y &&
              (La(n, u),
              La(n, d),
              Fa(function () {
                Ea(n, u),
                  w.cancelled ||
                    (La(n, c), x || (ja(_) ? setTimeout(w, _) : Na(n, s, w)));
              })),
            f && f(n, w),
            y || x || w());
        }
      }
      function ja(t) {
        return "number" === typeof t && !isNaN(t);
      }
      function Ha(t) {
        if (r(t)) return !1;
        var e = t.fns;
        return i(e)
          ? Ha(Array.isArray(e) ? e[0] : e)
          : (t._length || t.length) > 1;
      }
      function qa(t, e) {
        !0 !== e.data.show && $a(e);
      }
      var Ua = X
          ? {
              create: qa,
              activate: qa,
              remove: function (t, e) {
                !0 !== t.data.show ? Wa(t, e) : e();
              },
            }
          : {},
        Ya = [ji, Ui, na, sa, ya, Ua],
        Ga = Ya.concat(Bi),
        Ka = Oi({ nodeOps: ki, modules: Ga });
      et &&
        document.addEventListener("selectionchange", function () {
          var t = document.activeElement;
          t && t.vmodel && ro(t, "input");
        });
      var Xa = {
        inserted: function (t, e, n, r) {
          "select" === n.tag
            ? (r.elm && !r.elm._vOptions
                ? _e(n, "postpatch", function () {
                    Xa.componentUpdated(t, e, n);
                  })
                : Qa(t, e, n.context),
              (t._vOptions = [].map.call(t.options, to)))
            : ("textarea" === n.tag || ui(t.type)) &&
              ((t._vModifiers = e.modifiers),
              e.modifiers.lazy ||
                (t.addEventListener("compositionstart", eo),
                t.addEventListener("compositionend", no),
                t.addEventListener("change", no),
                et && (t.vmodel = !0)));
        },
        componentUpdated: function (t, e, n) {
          if ("select" === n.tag) {
            Qa(t, e, n.context);
            var r = t._vOptions,
              i = (t._vOptions = [].map.call(t.options, to));
            if (
              i.some(function (t, e) {
                return !N(t, r[e]);
              })
            ) {
              var a = t.multiple
                ? e.value.some(function (t) {
                    return Ja(t, i);
                  })
                : e.value !== e.oldValue && Ja(e.value, i);
              a && ro(t, "change");
            }
          }
        },
      };
      function Qa(t, e, n) {
        Za(t, e, n),
          (tt || nt) &&
            setTimeout(function () {
              Za(t, e, n);
            }, 0);
      }
      function Za(t, e, n) {
        var r = e.value,
          i = t.multiple;
        if (!i || Array.isArray(r)) {
          for (var a, o, s = 0, l = t.options.length; s < l; s++)
            if (((o = t.options[s]), i))
              (a = R(r, to(o)) > -1), o.selected !== a && (o.selected = a);
            else if (N(to(o), r))
              return void (t.selectedIndex !== s && (t.selectedIndex = s));
          i || (t.selectedIndex = -1);
        }
      }
      function Ja(t, e) {
        return e.every(function (e) {
          return !N(e, t);
        });
      }
      function to(t) {
        return "_value" in t ? t._value : t.value;
      }
      function eo(t) {
        t.target.composing = !0;
      }
      function no(t) {
        t.target.composing &&
          ((t.target.composing = !1), ro(t.target, "input"));
      }
      function ro(t, e) {
        var n = document.createEvent("HTMLEvents");
        n.initEvent(e, !0, !0), t.dispatchEvent(n);
      }
      function io(t) {
        return !t.componentInstance || (t.data && t.data.transition)
          ? t
          : io(t.componentInstance._vnode);
      }
      var ao = {
          bind: function (t, e, n) {
            var r = e.value;
            n = io(n);
            var i = n.data && n.data.transition,
              a = (t.__vOriginalDisplay =
                "none" === t.style.display ? "" : t.style.display);
            r && i
              ? ((n.data.show = !0),
                $a(n, function () {
                  t.style.display = a;
                }))
              : (t.style.display = r ? a : "none");
          },
          update: function (t, e, n) {
            var r = e.value,
              i = e.oldValue;
            if (!r !== !i) {
              n = io(n);
              var a = n.data && n.data.transition;
              a
                ? ((n.data.show = !0),
                  r
                    ? $a(n, function () {
                        t.style.display = t.__vOriginalDisplay;
                      })
                    : Wa(n, function () {
                        t.style.display = "none";
                      }))
                : (t.style.display = r ? t.__vOriginalDisplay : "none");
            }
          },
          unbind: function (t, e, n, r, i) {
            i || (t.style.display = t.__vOriginalDisplay);
          },
        },
        oo = { model: Xa, show: ao },
        so = {
          name: String,
          appear: Boolean,
          css: Boolean,
          mode: String,
          type: String,
          enterClass: String,
          leaveClass: String,
          enterToClass: String,
          leaveToClass: String,
          enterActiveClass: String,
          leaveActiveClass: String,
          appearClass: String,
          appearActiveClass: String,
          appearToClass: String,
          duration: [Number, String, Object],
        };
      function lo(t) {
        var e = t && t.componentOptions;
        return e && e.Ctor.options.abstract ? lo(kn(e.children)) : t;
      }
      function uo(t) {
        var e = {},
          n = t.$options;
        for (var r in n.propsData) e[r] = t[r];
        var i = n._parentListeners;
        for (var a in i) e[k(a)] = i[a];
        return e;
      }
      function co(t, e) {
        if (/\d-keep-alive$/.test(e.tag))
          return t("keep-alive", { props: e.componentOptions.propsData });
      }
      function ho(t) {
        while ((t = t.parent)) if (t.data.transition) return !0;
      }
      function fo(t, e) {
        return e.key === t.key && e.tag === t.tag;
      }
      var po = function (t) {
          return t.tag || wn(t);
        },
        go = function (t) {
          return "show" === t.name;
        },
        vo = {
          name: "transition",
          props: so,
          abstract: !0,
          render: function (t) {
            var e = this,
              n = this.$slots.default;
            if (n && ((n = n.filter(po)), n.length)) {
              0;
              var r = this.mode;
              0;
              var i = n[0];
              if (ho(this.$vnode)) return i;
              var a = lo(i);
              if (!a) return i;
              if (this._leaving) return co(t, i);
              var o = "__transition-" + this._uid + "-";
              a.key =
                null == a.key
                  ? a.isComment
                    ? o + "comment"
                    : o + a.tag
                  : s(a.key)
                  ? 0 === String(a.key).indexOf(o)
                    ? a.key
                    : o + a.key
                  : a.key;
              var l = ((a.data || (a.data = {})).transition = uo(this)),
                u = this._vnode,
                c = lo(u);
              if (
                (a.data.directives &&
                  a.data.directives.some(go) &&
                  (a.data.show = !0),
                c &&
                  c.data &&
                  !fo(a, c) &&
                  !wn(c) &&
                  (!c.componentInstance ||
                    !c.componentInstance._vnode.isComment))
              ) {
                var d = (c.data.transition = O({}, l));
                if ("out-in" === r)
                  return (
                    (this._leaving = !0),
                    _e(d, "afterLeave", function () {
                      (e._leaving = !1), e.$forceUpdate();
                    }),
                    co(t, i)
                  );
                if ("in-out" === r) {
                  if (wn(a)) return u;
                  var h,
                    f = function () {
                      h();
                    };
                  _e(l, "afterEnter", f),
                    _e(l, "enterCancelled", f),
                    _e(d, "delayLeave", function (t) {
                      h = t;
                    });
                }
              }
              return i;
            }
          },
        },
        mo = O({ tag: String, moveClass: String }, so);
      delete mo.mode;
      var bo = {
        props: mo,
        beforeMount: function () {
          var t = this,
            e = this._update;
          this._update = function (n, r) {
            var i = On(t);
            t.__patch__(t._vnode, t.kept, !1, !0),
              (t._vnode = t.kept),
              i(),
              e.call(t, n, r);
          };
        },
        render: function (t) {
          for (
            var e = this.tag || this.$vnode.data.tag || "span",
              n = Object.create(null),
              r = (this.prevChildren = this.children),
              i = this.$slots.default || [],
              a = (this.children = []),
              o = uo(this),
              s = 0;
            s < i.length;
            s++
          ) {
            var l = i[s];
            if (l.tag)
              if (null != l.key && 0 !== String(l.key).indexOf("__vlist"))
                a.push(l),
                  (n[l.key] = l),
                  ((l.data || (l.data = {})).transition = o);
              else;
          }
          if (r) {
            for (var u = [], c = [], d = 0; d < r.length; d++) {
              var h = r[d];
              (h.data.transition = o),
                (h.data.pos = h.elm.getBoundingClientRect()),
                n[h.key] ? u.push(h) : c.push(h);
            }
            (this.kept = t(e, null, u)), (this.removed = c);
          }
          return t(e, null, a);
        },
        updated: function () {
          var t = this.prevChildren,
            e = this.moveClass || (this.name || "v") + "-move";
          t.length &&
            this.hasMove(t[0].elm, e) &&
            (t.forEach(yo),
            t.forEach(xo),
            t.forEach(_o),
            (this._reflow = document.body.offsetHeight),
            t.forEach(function (t) {
              if (t.data.moved) {
                var n = t.elm,
                  r = n.style;
                La(n, e),
                  (r.transform = r.WebkitTransform = r.transitionDuration = ""),
                  n.addEventListener(
                    Da,
                    (n._moveCb = function t(r) {
                      (r && r.target !== n) ||
                        (r && !/transform$/.test(r.propertyName)) ||
                        (n.removeEventListener(Da, t),
                        (n._moveCb = null),
                        Ea(n, e));
                    })
                  );
              }
            }));
        },
        methods: {
          hasMove: function (t, e) {
            if (!Ma) return !1;
            if (this._hasMove) return this._hasMove;
            var n = t.cloneNode();
            t._transitionClasses &&
              t._transitionClasses.forEach(function (t) {
                wa(n, t);
              }),
              _a(n, e),
              (n.style.display = "none"),
              this.$el.appendChild(n);
            var r = za(n);
            return this.$el.removeChild(n), (this._hasMove = r.hasTransform);
          },
        },
      };
      function yo(t) {
        t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb();
      }
      function xo(t) {
        t.data.newPos = t.elm.getBoundingClientRect();
      }
      function _o(t) {
        var e = t.data.pos,
          n = t.data.newPos,
          r = e.left - n.left,
          i = e.top - n.top;
        if (r || i) {
          t.data.moved = !0;
          var a = t.elm.style;
          (a.transform = a.WebkitTransform =
            "translate(" + r + "px," + i + "px)"),
            (a.transitionDuration = "0s");
        }
      }
      var wo = { Transition: vo, TransitionGroup: bo };
      (kr.config.mustUseProp = Vr),
        (kr.config.isReservedTag = ai),
        (kr.config.isReservedAttr = zr),
        (kr.config.getTagNamespace = oi),
        (kr.config.isUnknownElement = li),
        O(kr.options.directives, oo),
        O(kr.options.components, wo),
        (kr.prototype.__patch__ = X ? Ka : F),
        (kr.prototype.$mount = function (t, e) {
          return (t = t && X ? ci(t) : void 0), Ln(this, t, e);
        }),
        X &&
          setTimeout(function () {
            W.devtools && ut && ut.emit("init", kr);
          }, 0),
        (e["a"] = kr);
    }).call(this, n("c8ba"));
  },
  "30ef": function (t, e, n) {
    /*!
     * Chart.js v2.9.3
     * https://www.chartjs.org
     * (c) 2019 Chart.js Contributors
     * Released under the MIT License
     */
    (function (e, r) {
      t.exports = r(
        (function () {
          try {
            return n("c32d");
          } catch (t) {}
        })()
      );
    })(0, function (t) {
      "use strict";
      function e(t, e) {
        return (e = { exports: {} }), t(e, e.exports), e.exports;
      }
      function n(t) {
        return (t && t["default"]) || t;
      }
      t = t && t.hasOwnProperty("default") ? t["default"] : t;
      var r = {
          aliceblue: [240, 248, 255],
          antiquewhite: [250, 235, 215],
          aqua: [0, 255, 255],
          aquamarine: [127, 255, 212],
          azure: [240, 255, 255],
          beige: [245, 245, 220],
          bisque: [255, 228, 196],
          black: [0, 0, 0],
          blanchedalmond: [255, 235, 205],
          blue: [0, 0, 255],
          blueviolet: [138, 43, 226],
          brown: [165, 42, 42],
          burlywood: [222, 184, 135],
          cadetblue: [95, 158, 160],
          chartreuse: [127, 255, 0],
          chocolate: [210, 105, 30],
          coral: [255, 127, 80],
          cornflowerblue: [100, 149, 237],
          cornsilk: [255, 248, 220],
          crimson: [220, 20, 60],
          cyan: [0, 255, 255],
          darkblue: [0, 0, 139],
          darkcyan: [0, 139, 139],
          darkgoldenrod: [184, 134, 11],
          darkgray: [169, 169, 169],
          darkgreen: [0, 100, 0],
          darkgrey: [169, 169, 169],
          darkkhaki: [189, 183, 107],
          darkmagenta: [139, 0, 139],
          darkolivegreen: [85, 107, 47],
          darkorange: [255, 140, 0],
          darkorchid: [153, 50, 204],
          darkred: [139, 0, 0],
          darksalmon: [233, 150, 122],
          darkseagreen: [143, 188, 143],
          darkslateblue: [72, 61, 139],
          darkslategray: [47, 79, 79],
          darkslategrey: [47, 79, 79],
          darkturquoise: [0, 206, 209],
          darkviolet: [148, 0, 211],
          deeppink: [255, 20, 147],
          deepskyblue: [0, 191, 255],
          dimgray: [105, 105, 105],
          dimgrey: [105, 105, 105],
          dodgerblue: [30, 144, 255],
          firebrick: [178, 34, 34],
          floralwhite: [255, 250, 240],
          forestgreen: [34, 139, 34],
          fuchsia: [255, 0, 255],
          gainsboro: [220, 220, 220],
          ghostwhite: [248, 248, 255],
          gold: [255, 215, 0],
          goldenrod: [218, 165, 32],
          gray: [128, 128, 128],
          green: [0, 128, 0],
          greenyellow: [173, 255, 47],
          grey: [128, 128, 128],
          honeydew: [240, 255, 240],
          hotpink: [255, 105, 180],
          indianred: [205, 92, 92],
          indigo: [75, 0, 130],
          ivory: [255, 255, 240],
          khaki: [240, 230, 140],
          lavender: [230, 230, 250],
          lavenderblush: [255, 240, 245],
          lawngreen: [124, 252, 0],
          lemonchiffon: [255, 250, 205],
          lightblue: [173, 216, 230],
          lightcoral: [240, 128, 128],
          lightcyan: [224, 255, 255],
          lightgoldenrodyellow: [250, 250, 210],
          lightgray: [211, 211, 211],
          lightgreen: [144, 238, 144],
          lightgrey: [211, 211, 211],
          lightpink: [255, 182, 193],
          lightsalmon: [255, 160, 122],
          lightseagreen: [32, 178, 170],
          lightskyblue: [135, 206, 250],
          lightslategray: [119, 136, 153],
          lightslategrey: [119, 136, 153],
          lightsteelblue: [176, 196, 222],
          lightyellow: [255, 255, 224],
          lime: [0, 255, 0],
          limegreen: [50, 205, 50],
          linen: [250, 240, 230],
          magenta: [255, 0, 255],
          maroon: [128, 0, 0],
          mediumaquamarine: [102, 205, 170],
          mediumblue: [0, 0, 205],
          mediumorchid: [186, 85, 211],
          mediumpurple: [147, 112, 219],
          mediumseagreen: [60, 179, 113],
          mediumslateblue: [123, 104, 238],
          mediumspringgreen: [0, 250, 154],
          mediumturquoise: [72, 209, 204],
          mediumvioletred: [199, 21, 133],
          midnightblue: [25, 25, 112],
          mintcream: [245, 255, 250],
          mistyrose: [255, 228, 225],
          moccasin: [255, 228, 181],
          navajowhite: [255, 222, 173],
          navy: [0, 0, 128],
          oldlace: [253, 245, 230],
          olive: [128, 128, 0],
          olivedrab: [107, 142, 35],
          orange: [255, 165, 0],
          orangered: [255, 69, 0],
          orchid: [218, 112, 214],
          palegoldenrod: [238, 232, 170],
          palegreen: [152, 251, 152],
          paleturquoise: [175, 238, 238],
          palevioletred: [219, 112, 147],
          papayawhip: [255, 239, 213],
          peachpuff: [255, 218, 185],
          peru: [205, 133, 63],
          pink: [255, 192, 203],
          plum: [221, 160, 221],
          powderblue: [176, 224, 230],
          purple: [128, 0, 128],
          rebeccapurple: [102, 51, 153],
          red: [255, 0, 0],
          rosybrown: [188, 143, 143],
          royalblue: [65, 105, 225],
          saddlebrown: [139, 69, 19],
          salmon: [250, 128, 114],
          sandybrown: [244, 164, 96],
          seagreen: [46, 139, 87],
          seashell: [255, 245, 238],
          sienna: [160, 82, 45],
          silver: [192, 192, 192],
          skyblue: [135, 206, 235],
          slateblue: [106, 90, 205],
          slategray: [112, 128, 144],
          slategrey: [112, 128, 144],
          snow: [255, 250, 250],
          springgreen: [0, 255, 127],
          steelblue: [70, 130, 180],
          tan: [210, 180, 140],
          teal: [0, 128, 128],
          thistle: [216, 191, 216],
          tomato: [255, 99, 71],
          turquoise: [64, 224, 208],
          violet: [238, 130, 238],
          wheat: [245, 222, 179],
          white: [255, 255, 255],
          whitesmoke: [245, 245, 245],
          yellow: [255, 255, 0],
          yellowgreen: [154, 205, 50],
        },
        i = e(function (t) {
          var e = {};
          for (var n in r) r.hasOwnProperty(n) && (e[r[n]] = n);
          var i = (t.exports = {
            rgb: { channels: 3, labels: "rgb" },
            hsl: { channels: 3, labels: "hsl" },
            hsv: { channels: 3, labels: "hsv" },
            hwb: { channels: 3, labels: "hwb" },
            cmyk: { channels: 4, labels: "cmyk" },
            xyz: { channels: 3, labels: "xyz" },
            lab: { channels: 3, labels: "lab" },
            lch: { channels: 3, labels: "lch" },
            hex: { channels: 1, labels: ["hex"] },
            keyword: { channels: 1, labels: ["keyword"] },
            ansi16: { channels: 1, labels: ["ansi16"] },
            ansi256: { channels: 1, labels: ["ansi256"] },
            hcg: { channels: 3, labels: ["h", "c", "g"] },
            apple: { channels: 3, labels: ["r16", "g16", "b16"] },
            gray: { channels: 1, labels: ["gray"] },
          });
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              if (!("channels" in i[a]))
                throw new Error("missing channels property: " + a);
              if (!("labels" in i[a]))
                throw new Error("missing channel labels property: " + a);
              if (i[a].labels.length !== i[a].channels)
                throw new Error("channel and label counts mismatch: " + a);
              var o = i[a].channels,
                s = i[a].labels;
              delete i[a].channels,
                delete i[a].labels,
                Object.defineProperty(i[a], "channels", { value: o }),
                Object.defineProperty(i[a], "labels", { value: s });
            }
          function l(t, e) {
            return (
              Math.pow(t[0] - e[0], 2) +
              Math.pow(t[1] - e[1], 2) +
              Math.pow(t[2] - e[2], 2)
            );
          }
          (i.rgb.hsl = function (t) {
            var e,
              n,
              r,
              i = t[0] / 255,
              a = t[1] / 255,
              o = t[2] / 255,
              s = Math.min(i, a, o),
              l = Math.max(i, a, o),
              u = l - s;
            return (
              l === s
                ? (e = 0)
                : i === l
                ? (e = (a - o) / u)
                : a === l
                ? (e = 2 + (o - i) / u)
                : o === l && (e = 4 + (i - a) / u),
              (e = Math.min(60 * e, 360)),
              e < 0 && (e += 360),
              (r = (s + l) / 2),
              (n = l === s ? 0 : r <= 0.5 ? u / (l + s) : u / (2 - l - s)),
              [e, 100 * n, 100 * r]
            );
          }),
            (i.rgb.hsv = function (t) {
              var e,
                n,
                r,
                i,
                a,
                o = t[0] / 255,
                s = t[1] / 255,
                l = t[2] / 255,
                u = Math.max(o, s, l),
                c = u - Math.min(o, s, l),
                d = function (t) {
                  return (u - t) / 6 / c + 0.5;
                };
              return (
                0 === c
                  ? (i = a = 0)
                  : ((a = c / u),
                    (e = d(o)),
                    (n = d(s)),
                    (r = d(l)),
                    o === u
                      ? (i = r - n)
                      : s === u
                      ? (i = 1 / 3 + e - r)
                      : l === u && (i = 2 / 3 + n - e),
                    i < 0 ? (i += 1) : i > 1 && (i -= 1)),
                [360 * i, 100 * a, 100 * u]
              );
            }),
            (i.rgb.hwb = function (t) {
              var e = t[0],
                n = t[1],
                r = t[2],
                a = i.rgb.hsl(t)[0],
                o = (1 / 255) * Math.min(e, Math.min(n, r));
              return (
                (r = 1 - (1 / 255) * Math.max(e, Math.max(n, r))),
                [a, 100 * o, 100 * r]
              );
            }),
            (i.rgb.cmyk = function (t) {
              var e,
                n,
                r,
                i,
                a = t[0] / 255,
                o = t[1] / 255,
                s = t[2] / 255;
              return (
                (i = Math.min(1 - a, 1 - o, 1 - s)),
                (e = (1 - a - i) / (1 - i) || 0),
                (n = (1 - o - i) / (1 - i) || 0),
                (r = (1 - s - i) / (1 - i) || 0),
                [100 * e, 100 * n, 100 * r, 100 * i]
              );
            }),
            (i.rgb.keyword = function (t) {
              var n = e[t];
              if (n) return n;
              var i,
                a = 1 / 0;
              for (var o in r)
                if (r.hasOwnProperty(o)) {
                  var s = r[o],
                    u = l(t, s);
                  u < a && ((a = u), (i = o));
                }
              return i;
            }),
            (i.keyword.rgb = function (t) {
              return r[t];
            }),
            (i.rgb.xyz = function (t) {
              var e = t[0] / 255,
                n = t[1] / 255,
                r = t[2] / 255;
              (e =
                e > 0.04045 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92),
                (n =
                  n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92),
                (r =
                  r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92);
              var i = 0.4124 * e + 0.3576 * n + 0.1805 * r,
                a = 0.2126 * e + 0.7152 * n + 0.0722 * r,
                o = 0.0193 * e + 0.1192 * n + 0.9505 * r;
              return [100 * i, 100 * a, 100 * o];
            }),
            (i.rgb.lab = function (t) {
              var e,
                n,
                r,
                a = i.rgb.xyz(t),
                o = a[0],
                s = a[1],
                l = a[2];
              return (
                (o /= 95.047),
                (s /= 100),
                (l /= 108.883),
                (o = o > 0.008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116),
                (s = s > 0.008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116),
                (l = l > 0.008856 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116),
                (e = 116 * s - 16),
                (n = 500 * (o - s)),
                (r = 200 * (s - l)),
                [e, n, r]
              );
            }),
            (i.hsl.rgb = function (t) {
              var e,
                n,
                r,
                i,
                a,
                o = t[0] / 360,
                s = t[1] / 100,
                l = t[2] / 100;
              if (0 === s) return (a = 255 * l), [a, a, a];
              (n = l < 0.5 ? l * (1 + s) : l + s - l * s),
                (e = 2 * l - n),
                (i = [0, 0, 0]);
              for (var u = 0; u < 3; u++)
                (r = o + (1 / 3) * -(u - 1)),
                  r < 0 && r++,
                  r > 1 && r--,
                  (a =
                    6 * r < 1
                      ? e + 6 * (n - e) * r
                      : 2 * r < 1
                      ? n
                      : 3 * r < 2
                      ? e + (n - e) * (2 / 3 - r) * 6
                      : e),
                  (i[u] = 255 * a);
              return i;
            }),
            (i.hsl.hsv = function (t) {
              var e,
                n,
                r = t[0],
                i = t[1] / 100,
                a = t[2] / 100,
                o = i,
                s = Math.max(a, 0.01);
              return (
                (a *= 2),
                (i *= a <= 1 ? a : 2 - a),
                (o *= s <= 1 ? s : 2 - s),
                (n = (a + i) / 2),
                (e = 0 === a ? (2 * o) / (s + o) : (2 * i) / (a + i)),
                [r, 100 * e, 100 * n]
              );
            }),
            (i.hsv.rgb = function (t) {
              var e = t[0] / 60,
                n = t[1] / 100,
                r = t[2] / 100,
                i = Math.floor(e) % 6,
                a = e - Math.floor(e),
                o = 255 * r * (1 - n),
                s = 255 * r * (1 - n * a),
                l = 255 * r * (1 - n * (1 - a));
              switch (((r *= 255), i)) {
                case 0:
                  return [r, l, o];
                case 1:
                  return [s, r, o];
                case 2:
                  return [o, r, l];
                case 3:
                  return [o, s, r];
                case 4:
                  return [l, o, r];
                case 5:
                  return [r, o, s];
              }
            }),
            (i.hsv.hsl = function (t) {
              var e,
                n,
                r,
                i = t[0],
                a = t[1] / 100,
                o = t[2] / 100,
                s = Math.max(o, 0.01);
              return (
                (r = (2 - a) * o),
                (e = (2 - a) * s),
                (n = a * s),
                (n /= e <= 1 ? e : 2 - e),
                (n = n || 0),
                (r /= 2),
                [i, 100 * n, 100 * r]
              );
            }),
            (i.hwb.rgb = function (t) {
              var e,
                n,
                r,
                i,
                a,
                o,
                s,
                l = t[0] / 360,
                u = t[1] / 100,
                c = t[2] / 100,
                d = u + c;
              switch (
                (d > 1 && ((u /= d), (c /= d)),
                (e = Math.floor(6 * l)),
                (n = 1 - c),
                (r = 6 * l - e),
                0 !== (1 & e) && (r = 1 - r),
                (i = u + r * (n - u)),
                e)
              ) {
                default:
                case 6:
                case 0:
                  (a = n), (o = i), (s = u);
                  break;
                case 1:
                  (a = i), (o = n), (s = u);
                  break;
                case 2:
                  (a = u), (o = n), (s = i);
                  break;
                case 3:
                  (a = u), (o = i), (s = n);
                  break;
                case 4:
                  (a = i), (o = u), (s = n);
                  break;
                case 5:
                  (a = n), (o = u), (s = i);
                  break;
              }
              return [255 * a, 255 * o, 255 * s];
            }),
            (i.cmyk.rgb = function (t) {
              var e,
                n,
                r,
                i = t[0] / 100,
                a = t[1] / 100,
                o = t[2] / 100,
                s = t[3] / 100;
              return (
                (e = 1 - Math.min(1, i * (1 - s) + s)),
                (n = 1 - Math.min(1, a * (1 - s) + s)),
                (r = 1 - Math.min(1, o * (1 - s) + s)),
                [255 * e, 255 * n, 255 * r]
              );
            }),
            (i.xyz.rgb = function (t) {
              var e,
                n,
                r,
                i = t[0] / 100,
                a = t[1] / 100,
                o = t[2] / 100;
              return (
                (e = 3.2406 * i + -1.5372 * a + -0.4986 * o),
                (n = -0.9689 * i + 1.8758 * a + 0.0415 * o),
                (r = 0.0557 * i + -0.204 * a + 1.057 * o),
                (e =
                  e > 0.0031308
                    ? 1.055 * Math.pow(e, 1 / 2.4) - 0.055
                    : 12.92 * e),
                (n =
                  n > 0.0031308
                    ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055
                    : 12.92 * n),
                (r =
                  r > 0.0031308
                    ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055
                    : 12.92 * r),
                (e = Math.min(Math.max(0, e), 1)),
                (n = Math.min(Math.max(0, n), 1)),
                (r = Math.min(Math.max(0, r), 1)),
                [255 * e, 255 * n, 255 * r]
              );
            }),
            (i.xyz.lab = function (t) {
              var e,
                n,
                r,
                i = t[0],
                a = t[1],
                o = t[2];
              return (
                (i /= 95.047),
                (a /= 100),
                (o /= 108.883),
                (i = i > 0.008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116),
                (a = a > 0.008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116),
                (o = o > 0.008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116),
                (e = 116 * a - 16),
                (n = 500 * (i - a)),
                (r = 200 * (a - o)),
                [e, n, r]
              );
            }),
            (i.lab.xyz = function (t) {
              var e,
                n,
                r,
                i = t[0],
                a = t[1],
                o = t[2];
              (n = (i + 16) / 116), (e = a / 500 + n), (r = n - o / 200);
              var s = Math.pow(n, 3),
                l = Math.pow(e, 3),
                u = Math.pow(r, 3);
              return (
                (n = s > 0.008856 ? s : (n - 16 / 116) / 7.787),
                (e = l > 0.008856 ? l : (e - 16 / 116) / 7.787),
                (r = u > 0.008856 ? u : (r - 16 / 116) / 7.787),
                (e *= 95.047),
                (n *= 100),
                (r *= 108.883),
                [e, n, r]
              );
            }),
            (i.lab.lch = function (t) {
              var e,
                n,
                r,
                i = t[0],
                a = t[1],
                o = t[2];
              return (
                (e = Math.atan2(o, a)),
                (n = (360 * e) / 2 / Math.PI),
                n < 0 && (n += 360),
                (r = Math.sqrt(a * a + o * o)),
                [i, r, n]
              );
            }),
            (i.lch.lab = function (t) {
              var e,
                n,
                r,
                i = t[0],
                a = t[1],
                o = t[2];
              return (
                (r = (o / 360) * 2 * Math.PI),
                (e = a * Math.cos(r)),
                (n = a * Math.sin(r)),
                [i, e, n]
              );
            }),
            (i.rgb.ansi16 = function (t) {
              var e = t[0],
                n = t[1],
                r = t[2],
                a = 1 in arguments ? arguments[1] : i.rgb.hsv(t)[2];
              if (((a = Math.round(a / 50)), 0 === a)) return 30;
              var o =
                30 +
                ((Math.round(r / 255) << 2) |
                  (Math.round(n / 255) << 1) |
                  Math.round(e / 255));
              return 2 === a && (o += 60), o;
            }),
            (i.hsv.ansi16 = function (t) {
              return i.rgb.ansi16(i.hsv.rgb(t), t[2]);
            }),
            (i.rgb.ansi256 = function (t) {
              var e = t[0],
                n = t[1],
                r = t[2];
              if (e === n && n === r)
                return e < 8
                  ? 16
                  : e > 248
                  ? 231
                  : Math.round(((e - 8) / 247) * 24) + 232;
              var i =
                16 +
                36 * Math.round((e / 255) * 5) +
                6 * Math.round((n / 255) * 5) +
                Math.round((r / 255) * 5);
              return i;
            }),
            (i.ansi16.rgb = function (t) {
              var e = t % 10;
              if (0 === e || 7 === e)
                return t > 50 && (e += 3.5), (e = (e / 10.5) * 255), [e, e, e];
              var n = 0.5 * (1 + ~~(t > 50)),
                r = (1 & e) * n * 255,
                i = ((e >> 1) & 1) * n * 255,
                a = ((e >> 2) & 1) * n * 255;
              return [r, i, a];
            }),
            (i.ansi256.rgb = function (t) {
              if (t >= 232) {
                var e = 10 * (t - 232) + 8;
                return [e, e, e];
              }
              var n;
              t -= 16;
              var r = (Math.floor(t / 36) / 5) * 255,
                i = (Math.floor((n = t % 36) / 6) / 5) * 255,
                a = ((n % 6) / 5) * 255;
              return [r, i, a];
            }),
            (i.rgb.hex = function (t) {
              var e =
                  ((255 & Math.round(t[0])) << 16) +
                  ((255 & Math.round(t[1])) << 8) +
                  (255 & Math.round(t[2])),
                n = e.toString(16).toUpperCase();
              return "000000".substring(n.length) + n;
            }),
            (i.hex.rgb = function (t) {
              var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
              if (!e) return [0, 0, 0];
              var n = e[0];
              3 === e[0].length &&
                (n = n
                  .split("")
                  .map(function (t) {
                    return t + t;
                  })
                  .join(""));
              var r = parseInt(n, 16),
                i = (r >> 16) & 255,
                a = (r >> 8) & 255,
                o = 255 & r;
              return [i, a, o];
            }),
            (i.rgb.hcg = function (t) {
              var e,
                n,
                r = t[0] / 255,
                i = t[1] / 255,
                a = t[2] / 255,
                o = Math.max(Math.max(r, i), a),
                s = Math.min(Math.min(r, i), a),
                l = o - s;
              return (
                (e = l < 1 ? s / (1 - l) : 0),
                (n =
                  l <= 0
                    ? 0
                    : o === r
                    ? ((i - a) / l) % 6
                    : o === i
                    ? 2 + (a - r) / l
                    : 4 + (r - i) / l + 4),
                (n /= 6),
                (n %= 1),
                [360 * n, 100 * l, 100 * e]
              );
            }),
            (i.hsl.hcg = function (t) {
              var e = t[1] / 100,
                n = t[2] / 100,
                r = 1,
                i = 0;
              return (
                (r = n < 0.5 ? 2 * e * n : 2 * e * (1 - n)),
                r < 1 && (i = (n - 0.5 * r) / (1 - r)),
                [t[0], 100 * r, 100 * i]
              );
            }),
            (i.hsv.hcg = function (t) {
              var e = t[1] / 100,
                n = t[2] / 100,
                r = e * n,
                i = 0;
              return r < 1 && (i = (n - r) / (1 - r)), [t[0], 100 * r, 100 * i];
            }),
            (i.hcg.rgb = function (t) {
              var e = t[0] / 360,
                n = t[1] / 100,
                r = t[2] / 100;
              if (0 === n) return [255 * r, 255 * r, 255 * r];
              var i = [0, 0, 0],
                a = (e % 1) * 6,
                o = a % 1,
                s = 1 - o,
                l = 0;
              switch (Math.floor(a)) {
                case 0:
                  (i[0] = 1), (i[1] = o), (i[2] = 0);
                  break;
                case 1:
                  (i[0] = s), (i[1] = 1), (i[2] = 0);
                  break;
                case 2:
                  (i[0] = 0), (i[1] = 1), (i[2] = o);
                  break;
                case 3:
                  (i[0] = 0), (i[1] = s), (i[2] = 1);
                  break;
                case 4:
                  (i[0] = o), (i[1] = 0), (i[2] = 1);
                  break;
                default:
                  (i[0] = 1), (i[1] = 0), (i[2] = s);
              }
              return (
                (l = (1 - n) * r),
                [
                  255 * (n * i[0] + l),
                  255 * (n * i[1] + l),
                  255 * (n * i[2] + l),
                ]
              );
            }),
            (i.hcg.hsv = function (t) {
              var e = t[1] / 100,
                n = t[2] / 100,
                r = e + n * (1 - e),
                i = 0;
              return r > 0 && (i = e / r), [t[0], 100 * i, 100 * r];
            }),
            (i.hcg.hsl = function (t) {
              var e = t[1] / 100,
                n = t[2] / 100,
                r = n * (1 - e) + 0.5 * e,
                i = 0;
              return (
                r > 0 && r < 0.5
                  ? (i = e / (2 * r))
                  : r >= 0.5 && r < 1 && (i = e / (2 * (1 - r))),
                [t[0], 100 * i, 100 * r]
              );
            }),
            (i.hcg.hwb = function (t) {
              var e = t[1] / 100,
                n = t[2] / 100,
                r = e + n * (1 - e);
              return [t[0], 100 * (r - e), 100 * (1 - r)];
            }),
            (i.hwb.hcg = function (t) {
              var e = t[1] / 100,
                n = t[2] / 100,
                r = 1 - n,
                i = r - e,
                a = 0;
              return i < 1 && (a = (r - i) / (1 - i)), [t[0], 100 * i, 100 * a];
            }),
            (i.apple.rgb = function (t) {
              return [
                (t[0] / 65535) * 255,
                (t[1] / 65535) * 255,
                (t[2] / 65535) * 255,
              ];
            }),
            (i.rgb.apple = function (t) {
              return [
                (t[0] / 255) * 65535,
                (t[1] / 255) * 65535,
                (t[2] / 255) * 65535,
              ];
            }),
            (i.gray.rgb = function (t) {
              return [
                (t[0] / 100) * 255,
                (t[0] / 100) * 255,
                (t[0] / 100) * 255,
              ];
            }),
            (i.gray.hsl = i.gray.hsv =
              function (t) {
                return [0, 0, t[0]];
              }),
            (i.gray.hwb = function (t) {
              return [0, 100, t[0]];
            }),
            (i.gray.cmyk = function (t) {
              return [0, 0, 0, t[0]];
            }),
            (i.gray.lab = function (t) {
              return [t[0], 0, 0];
            }),
            (i.gray.hex = function (t) {
              var e = 255 & Math.round((t[0] / 100) * 255),
                n = (e << 16) + (e << 8) + e,
                r = n.toString(16).toUpperCase();
              return "000000".substring(r.length) + r;
            }),
            (i.rgb.gray = function (t) {
              var e = (t[0] + t[1] + t[2]) / 3;
              return [(e / 255) * 100];
            });
        });
      i.rgb,
        i.hsl,
        i.hsv,
        i.hwb,
        i.cmyk,
        i.xyz,
        i.lab,
        i.lch,
        i.hex,
        i.keyword,
        i.ansi16,
        i.ansi256,
        i.hcg,
        i.apple,
        i.gray;
      function a() {
        for (var t = {}, e = Object.keys(i), n = e.length, r = 0; r < n; r++)
          t[e[r]] = { distance: -1, parent: null };
        return t;
      }
      function o(t) {
        var e = a(),
          n = [t];
        e[t].distance = 0;
        while (n.length)
          for (
            var r = n.pop(), o = Object.keys(i[r]), s = o.length, l = 0;
            l < s;
            l++
          ) {
            var u = o[l],
              c = e[u];
            -1 === c.distance &&
              ((c.distance = e[r].distance + 1), (c.parent = r), n.unshift(u));
          }
        return e;
      }
      function s(t, e) {
        return function (n) {
          return e(t(n));
        };
      }
      function l(t, e) {
        var n = [e[t].parent, t],
          r = i[e[t].parent][t],
          a = e[t].parent;
        while (e[a].parent)
          n.unshift(e[a].parent),
            (r = s(i[e[a].parent][a], r)),
            (a = e[a].parent);
        return (r.conversion = n), r;
      }
      var u = function (t) {
          for (
            var e = o(t), n = {}, r = Object.keys(e), i = r.length, a = 0;
            a < i;
            a++
          ) {
            var s = r[a],
              u = e[s];
            null !== u.parent && (n[s] = l(s, e));
          }
          return n;
        },
        c = {},
        d = Object.keys(i);
      function h(t) {
        var e = function (e) {
          return void 0 === e || null === e
            ? e
            : (arguments.length > 1 &&
                (e = Array.prototype.slice.call(arguments)),
              t(e));
        };
        return "conversion" in t && (e.conversion = t.conversion), e;
      }
      function f(t) {
        var e = function (e) {
          if (void 0 === e || null === e) return e;
          arguments.length > 1 && (e = Array.prototype.slice.call(arguments));
          var n = t(e);
          if ("object" === typeof n)
            for (var r = n.length, i = 0; i < r; i++) n[i] = Math.round(n[i]);
          return n;
        };
        return "conversion" in t && (e.conversion = t.conversion), e;
      }
      d.forEach(function (t) {
        (c[t] = {}),
          Object.defineProperty(c[t], "channels", { value: i[t].channels }),
          Object.defineProperty(c[t], "labels", { value: i[t].labels });
        var e = u(t),
          n = Object.keys(e);
        n.forEach(function (n) {
          var r = e[n];
          (c[t][n] = f(r)), (c[t][n].raw = h(r));
        });
      });
      var p = c,
        g = {
          aliceblue: [240, 248, 255],
          antiquewhite: [250, 235, 215],
          aqua: [0, 255, 255],
          aquamarine: [127, 255, 212],
          azure: [240, 255, 255],
          beige: [245, 245, 220],
          bisque: [255, 228, 196],
          black: [0, 0, 0],
          blanchedalmond: [255, 235, 205],
          blue: [0, 0, 255],
          blueviolet: [138, 43, 226],
          brown: [165, 42, 42],
          burlywood: [222, 184, 135],
          cadetblue: [95, 158, 160],
          chartreuse: [127, 255, 0],
          chocolate: [210, 105, 30],
          coral: [255, 127, 80],
          cornflowerblue: [100, 149, 237],
          cornsilk: [255, 248, 220],
          crimson: [220, 20, 60],
          cyan: [0, 255, 255],
          darkblue: [0, 0, 139],
          darkcyan: [0, 139, 139],
          darkgoldenrod: [184, 134, 11],
          darkgray: [169, 169, 169],
          darkgreen: [0, 100, 0],
          darkgrey: [169, 169, 169],
          darkkhaki: [189, 183, 107],
          darkmagenta: [139, 0, 139],
          darkolivegreen: [85, 107, 47],
          darkorange: [255, 140, 0],
          darkorchid: [153, 50, 204],
          darkred: [139, 0, 0],
          darksalmon: [233, 150, 122],
          darkseagreen: [143, 188, 143],
          darkslateblue: [72, 61, 139],
          darkslategray: [47, 79, 79],
          darkslategrey: [47, 79, 79],
          darkturquoise: [0, 206, 209],
          darkviolet: [148, 0, 211],
          deeppink: [255, 20, 147],
          deepskyblue: [0, 191, 255],
          dimgray: [105, 105, 105],
          dimgrey: [105, 105, 105],
          dodgerblue: [30, 144, 255],
          firebrick: [178, 34, 34],
          floralwhite: [255, 250, 240],
          forestgreen: [34, 139, 34],
          fuchsia: [255, 0, 255],
          gainsboro: [220, 220, 220],
          ghostwhite: [248, 248, 255],
          gold: [255, 215, 0],
          goldenrod: [218, 165, 32],
          gray: [128, 128, 128],
          green: [0, 128, 0],
          greenyellow: [173, 255, 47],
          grey: [128, 128, 128],
          honeydew: [240, 255, 240],
          hotpink: [255, 105, 180],
          indianred: [205, 92, 92],
          indigo: [75, 0, 130],
          ivory: [255, 255, 240],
          khaki: [240, 230, 140],
          lavender: [230, 230, 250],
          lavenderblush: [255, 240, 245],
          lawngreen: [124, 252, 0],
          lemonchiffon: [255, 250, 205],
          lightblue: [173, 216, 230],
          lightcoral: [240, 128, 128],
          lightcyan: [224, 255, 255],
          lightgoldenrodyellow: [250, 250, 210],
          lightgray: [211, 211, 211],
          lightgreen: [144, 238, 144],
          lightgrey: [211, 211, 211],
          lightpink: [255, 182, 193],
          lightsalmon: [255, 160, 122],
          lightseagreen: [32, 178, 170],
          lightskyblue: [135, 206, 250],
          lightslategray: [119, 136, 153],
          lightslategrey: [119, 136, 153],
          lightsteelblue: [176, 196, 222],
          lightyellow: [255, 255, 224],
          lime: [0, 255, 0],
          limegreen: [50, 205, 50],
          linen: [250, 240, 230],
          magenta: [255, 0, 255],
          maroon: [128, 0, 0],
          mediumaquamarine: [102, 205, 170],
          mediumblue: [0, 0, 205],
          mediumorchid: [186, 85, 211],
          mediumpurple: [147, 112, 219],
          mediumseagreen: [60, 179, 113],
          mediumslateblue: [123, 104, 238],
          mediumspringgreen: [0, 250, 154],
          mediumturquoise: [72, 209, 204],
          mediumvioletred: [199, 21, 133],
          midnightblue: [25, 25, 112],
          mintcream: [245, 255, 250],
          mistyrose: [255, 228, 225],
          moccasin: [255, 228, 181],
          navajowhite: [255, 222, 173],
          navy: [0, 0, 128],
          oldlace: [253, 245, 230],
          olive: [128, 128, 0],
          olivedrab: [107, 142, 35],
          orange: [255, 165, 0],
          orangered: [255, 69, 0],
          orchid: [218, 112, 214],
          palegoldenrod: [238, 232, 170],
          palegreen: [152, 251, 152],
          paleturquoise: [175, 238, 238],
          palevioletred: [219, 112, 147],
          papayawhip: [255, 239, 213],
          peachpuff: [255, 218, 185],
          peru: [205, 133, 63],
          pink: [255, 192, 203],
          plum: [221, 160, 221],
          powderblue: [176, 224, 230],
          purple: [128, 0, 128],
          rebeccapurple: [102, 51, 153],
          red: [255, 0, 0],
          rosybrown: [188, 143, 143],
          royalblue: [65, 105, 225],
          saddlebrown: [139, 69, 19],
          salmon: [250, 128, 114],
          sandybrown: [244, 164, 96],
          seagreen: [46, 139, 87],
          seashell: [255, 245, 238],
          sienna: [160, 82, 45],
          silver: [192, 192, 192],
          skyblue: [135, 206, 235],
          slateblue: [106, 90, 205],
          slategray: [112, 128, 144],
          slategrey: [112, 128, 144],
          snow: [255, 250, 250],
          springgreen: [0, 255, 127],
          steelblue: [70, 130, 180],
          tan: [210, 180, 140],
          teal: [0, 128, 128],
          thistle: [216, 191, 216],
          tomato: [255, 99, 71],
          turquoise: [64, 224, 208],
          violet: [238, 130, 238],
          wheat: [245, 222, 179],
          white: [255, 255, 255],
          whitesmoke: [245, 245, 245],
          yellow: [255, 255, 0],
          yellowgreen: [154, 205, 50],
        },
        v = {
          getRgba: m,
          getHsla: b,
          getRgb: x,
          getHsl: _,
          getHwb: y,
          getAlpha: w,
          hexString: k,
          rgbString: C,
          rgbaString: M,
          percentString: S,
          percentaString: A,
          hslString: P,
          hslaString: D,
          hwbString: T,
          keyword: O,
        };
      function m(t) {
        if (t) {
          var e = /^#([a-fA-F0-9]{3,4})$/i,
            n = /^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i,
            r =
              /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
            i =
              /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
            a = /(\w+)/,
            o = [0, 0, 0],
            s = 1,
            l = t.match(e),
            u = "";
          if (l) {
            (l = l[1]), (u = l[3]);
            for (var c = 0; c < o.length; c++) o[c] = parseInt(l[c] + l[c], 16);
            u && (s = Math.round((parseInt(u + u, 16) / 255) * 100) / 100);
          } else if ((l = t.match(n))) {
            (u = l[2]), (l = l[1]);
            for (c = 0; c < o.length; c++)
              o[c] = parseInt(l.slice(2 * c, 2 * c + 2), 16);
            u && (s = Math.round((parseInt(u, 16) / 255) * 100) / 100);
          } else if ((l = t.match(r))) {
            for (c = 0; c < o.length; c++) o[c] = parseInt(l[c + 1]);
            s = parseFloat(l[4]);
          } else if ((l = t.match(i))) {
            for (c = 0; c < o.length; c++)
              o[c] = Math.round(2.55 * parseFloat(l[c + 1]));
            s = parseFloat(l[4]);
          } else if ((l = t.match(a))) {
            if ("transparent" == l[1]) return [0, 0, 0, 0];
            if (((o = g[l[1]]), !o)) return;
          }
          for (c = 0; c < o.length; c++) o[c] = I(o[c], 0, 255);
          return (s = s || 0 == s ? I(s, 0, 1) : 1), (o[3] = s), o;
        }
      }
      function b(t) {
        if (t) {
          var e =
              /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
            n = t.match(e);
          if (n) {
            var r = parseFloat(n[4]),
              i = I(parseInt(n[1]), 0, 360),
              a = I(parseFloat(n[2]), 0, 100),
              o = I(parseFloat(n[3]), 0, 100),
              s = I(isNaN(r) ? 1 : r, 0, 1);
            return [i, a, o, s];
          }
        }
      }
      function y(t) {
        if (t) {
          var e =
              /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
            n = t.match(e);
          if (n) {
            var r = parseFloat(n[4]),
              i = I(parseInt(n[1]), 0, 360),
              a = I(parseFloat(n[2]), 0, 100),
              o = I(parseFloat(n[3]), 0, 100),
              s = I(isNaN(r) ? 1 : r, 0, 1);
            return [i, a, o, s];
          }
        }
      }
      function x(t) {
        var e = m(t);
        return e && e.slice(0, 3);
      }
      function _(t) {
        var e = b(t);
        return e && e.slice(0, 3);
      }
      function w(t) {
        var e = m(t);
        return e || (e = b(t)) || (e = y(t)) ? e[3] : void 0;
      }
      function k(t, e) {
        e = void 0 !== e && 3 === t.length ? e : t[3];
        return (
          "#" +
          F(t[0]) +
          F(t[1]) +
          F(t[2]) +
          (e >= 0 && e < 1 ? F(Math.round(255 * e)) : "")
        );
      }
      function C(t, e) {
        return e < 1 || (t[3] && t[3] < 1)
          ? M(t, e)
          : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
      }
      function M(t, e) {
        return (
          void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
          "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
        );
      }
      function S(t, e) {
        if (e < 1 || (t[3] && t[3] < 1)) return A(t, e);
        var n = Math.round((t[0] / 255) * 100),
          r = Math.round((t[1] / 255) * 100),
          i = Math.round((t[2] / 255) * 100);
        return "rgb(" + n + "%, " + r + "%, " + i + "%)";
      }
      function A(t, e) {
        var n = Math.round((t[0] / 255) * 100),
          r = Math.round((t[1] / 255) * 100),
          i = Math.round((t[2] / 255) * 100);
        return (
          "rgba(" + n + "%, " + r + "%, " + i + "%, " + (e || t[3] || 1) + ")"
        );
      }
      function P(t, e) {
        return e < 1 || (t[3] && t[3] < 1)
          ? D(t, e)
          : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
      }
      function D(t, e) {
        return (
          void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
          "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
        );
      }
      function T(t, e) {
        return (
          void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
          "hwb(" +
            t[0] +
            ", " +
            t[1] +
            "%, " +
            t[2] +
            "%" +
            (void 0 !== e && 1 !== e ? ", " + e : "") +
            ")"
        );
      }
      function O(t) {
        return L[t.slice(0, 3)];
      }
      function I(t, e, n) {
        return Math.min(Math.max(e, t), n);
      }
      function F(t) {
        var e = t.toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e;
      }
      var L = {};
      for (var E in g) L[g[E]] = E;
      var N = function (t) {
        return t instanceof N
          ? t
          : this instanceof N
          ? ((this.valid = !1),
            (this.values = {
              rgb: [0, 0, 0],
              hsl: [0, 0, 0],
              hsv: [0, 0, 0],
              hwb: [0, 0, 0],
              cmyk: [0, 0, 0, 0],
              alpha: 1,
            }),
            void ("string" === typeof t
              ? ((e = v.getRgba(t)),
                e
                  ? this.setValues("rgb", e)
                  : (e = v.getHsla(t))
                  ? this.setValues("hsl", e)
                  : (e = v.getHwb(t)) && this.setValues("hwb", e))
              : "object" === typeof t &&
                ((e = t),
                void 0 !== e.r || void 0 !== e.red
                  ? this.setValues("rgb", e)
                  : void 0 !== e.l || void 0 !== e.lightness
                  ? this.setValues("hsl", e)
                  : void 0 !== e.v || void 0 !== e.value
                  ? this.setValues("hsv", e)
                  : void 0 !== e.w || void 0 !== e.whiteness
                  ? this.setValues("hwb", e)
                  : (void 0 === e.c && void 0 === e.cyan) ||
                    this.setValues("cmyk", e))))
          : new N(t);
        var e;
      };
      (N.prototype = {
        isValid: function () {
          return this.valid;
        },
        rgb: function () {
          return this.setSpace("rgb", arguments);
        },
        hsl: function () {
          return this.setSpace("hsl", arguments);
        },
        hsv: function () {
          return this.setSpace("hsv", arguments);
        },
        hwb: function () {
          return this.setSpace("hwb", arguments);
        },
        cmyk: function () {
          return this.setSpace("cmyk", arguments);
        },
        rgbArray: function () {
          return this.values.rgb;
        },
        hslArray: function () {
          return this.values.hsl;
        },
        hsvArray: function () {
          return this.values.hsv;
        },
        hwbArray: function () {
          var t = this.values;
          return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
        },
        cmykArray: function () {
          return this.values.cmyk;
        },
        rgbaArray: function () {
          var t = this.values;
          return t.rgb.concat([t.alpha]);
        },
        hslaArray: function () {
          var t = this.values;
          return t.hsl.concat([t.alpha]);
        },
        alpha: function (t) {
          return void 0 === t
            ? this.values.alpha
            : (this.setValues("alpha", t), this);
        },
        red: function (t) {
          return this.setChannel("rgb", 0, t);
        },
        green: function (t) {
          return this.setChannel("rgb", 1, t);
        },
        blue: function (t) {
          return this.setChannel("rgb", 2, t);
        },
        hue: function (t) {
          return (
            t && ((t %= 360), (t = t < 0 ? 360 + t : t)),
            this.setChannel("hsl", 0, t)
          );
        },
        saturation: function (t) {
          return this.setChannel("hsl", 1, t);
        },
        lightness: function (t) {
          return this.setChannel("hsl", 2, t);
        },
        saturationv: function (t) {
          return this.setChannel("hsv", 1, t);
        },
        whiteness: function (t) {
          return this.setChannel("hwb", 1, t);
        },
        blackness: function (t) {
          return this.setChannel("hwb", 2, t);
        },
        value: function (t) {
          return this.setChannel("hsv", 2, t);
        },
        cyan: function (t) {
          return this.setChannel("cmyk", 0, t);
        },
        magenta: function (t) {
          return this.setChannel("cmyk", 1, t);
        },
        yellow: function (t) {
          return this.setChannel("cmyk", 2, t);
        },
        black: function (t) {
          return this.setChannel("cmyk", 3, t);
        },
        hexString: function () {
          return v.hexString(this.values.rgb);
        },
        rgbString: function () {
          return v.rgbString(this.values.rgb, this.values.alpha);
        },
        rgbaString: function () {
          return v.rgbaString(this.values.rgb, this.values.alpha);
        },
        percentString: function () {
          return v.percentString(this.values.rgb, this.values.alpha);
        },
        hslString: function () {
          return v.hslString(this.values.hsl, this.values.alpha);
        },
        hslaString: function () {
          return v.hslaString(this.values.hsl, this.values.alpha);
        },
        hwbString: function () {
          return v.hwbString(this.values.hwb, this.values.alpha);
        },
        keyword: function () {
          return v.keyword(this.values.rgb, this.values.alpha);
        },
        rgbNumber: function () {
          var t = this.values.rgb;
          return (t[0] << 16) | (t[1] << 8) | t[2];
        },
        luminosity: function () {
          for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
            var r = t[n] / 255;
            e[n] =
              r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
          }
          return 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
        },
        contrast: function (t) {
          var e = this.luminosity(),
            n = t.luminosity();
          return e > n ? (e + 0.05) / (n + 0.05) : (n + 0.05) / (e + 0.05);
        },
        level: function (t) {
          var e = this.contrast(t);
          return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
        },
        dark: function () {
          var t = this.values.rgb,
            e = (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3;
          return e < 128;
        },
        light: function () {
          return !this.dark();
        },
        negate: function () {
          for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
          return this.setValues("rgb", t), this;
        },
        lighten: function (t) {
          var e = this.values.hsl;
          return (e[2] += e[2] * t), this.setValues("hsl", e), this;
        },
        darken: function (t) {
          var e = this.values.hsl;
          return (e[2] -= e[2] * t), this.setValues("hsl", e), this;
        },
        saturate: function (t) {
          var e = this.values.hsl;
          return (e[1] += e[1] * t), this.setValues("hsl", e), this;
        },
        desaturate: function (t) {
          var e = this.values.hsl;
          return (e[1] -= e[1] * t), this.setValues("hsl", e), this;
        },
        whiten: function (t) {
          var e = this.values.hwb;
          return (e[1] += e[1] * t), this.setValues("hwb", e), this;
        },
        blacken: function (t) {
          var e = this.values.hwb;
          return (e[2] += e[2] * t), this.setValues("hwb", e), this;
        },
        greyscale: function () {
          var t = this.values.rgb,
            e = 0.3 * t[0] + 0.59 * t[1] + 0.11 * t[2];
          return this.setValues("rgb", [e, e, e]), this;
        },
        clearer: function (t) {
          var e = this.values.alpha;
          return this.setValues("alpha", e - e * t), this;
        },
        opaquer: function (t) {
          var e = this.values.alpha;
          return this.setValues("alpha", e + e * t), this;
        },
        rotate: function (t) {
          var e = this.values.hsl,
            n = (e[0] + t) % 360;
          return (e[0] = n < 0 ? 360 + n : n), this.setValues("hsl", e), this;
        },
        mix: function (t, e) {
          var n = this,
            r = t,
            i = void 0 === e ? 0.5 : e,
            a = 2 * i - 1,
            o = n.alpha() - r.alpha(),
            s = ((a * o === -1 ? a : (a + o) / (1 + a * o)) + 1) / 2,
            l = 1 - s;
          return this.rgb(
            s * n.red() + l * r.red(),
            s * n.green() + l * r.green(),
            s * n.blue() + l * r.blue()
          ).alpha(n.alpha() * i + r.alpha() * (1 - i));
        },
        toJSON: function () {
          return this.rgb();
        },
        clone: function () {
          var t,
            e,
            n = new N(),
            r = this.values,
            i = n.values;
          for (var a in r)
            r.hasOwnProperty(a) &&
              ((t = r[a]),
              (e = {}.toString.call(t)),
              "[object Array]" === e
                ? (i[a] = t.slice(0))
                : "[object Number]" === e
                ? (i[a] = t)
                : console.error("unexpected color value:", t));
          return n;
        },
      }),
        (N.prototype.spaces = {
          rgb: ["red", "green", "blue"],
          hsl: ["hue", "saturation", "lightness"],
          hsv: ["hue", "saturation", "value"],
          hwb: ["hue", "whiteness", "blackness"],
          cmyk: ["cyan", "magenta", "yellow", "black"],
        }),
        (N.prototype.maxes = {
          rgb: [255, 255, 255],
          hsl: [360, 100, 100],
          hsv: [360, 100, 100],
          hwb: [360, 100, 100],
          cmyk: [100, 100, 100, 100],
        }),
        (N.prototype.getValues = function (t) {
          for (var e = this.values, n = {}, r = 0; r < t.length; r++)
            n[t.charAt(r)] = e[t][r];
          return 1 !== e.alpha && (n.a = e.alpha), n;
        }),
        (N.prototype.setValues = function (t, e) {
          var n,
            r,
            i = this.values,
            a = this.spaces,
            o = this.maxes,
            s = 1;
          if (((this.valid = !0), "alpha" === t)) s = e;
          else if (e.length) (i[t] = e.slice(0, t.length)), (s = e[t.length]);
          else if (void 0 !== e[t.charAt(0)]) {
            for (n = 0; n < t.length; n++) i[t][n] = e[t.charAt(n)];
            s = e.a;
          } else if (void 0 !== e[a[t][0]]) {
            var l = a[t];
            for (n = 0; n < t.length; n++) i[t][n] = e[l[n]];
            s = e.alpha;
          }
          if (
            ((i.alpha = Math.max(0, Math.min(1, void 0 === s ? i.alpha : s))),
            "alpha" === t)
          )
            return !1;
          for (n = 0; n < t.length; n++)
            (r = Math.max(0, Math.min(o[t][n], i[t][n]))),
              (i[t][n] = Math.round(r));
          for (var u in a) u !== t && (i[u] = p[t][u](i[t]));
          return !0;
        }),
        (N.prototype.setSpace = function (t, e) {
          var n = e[0];
          return void 0 === n
            ? this.getValues(t)
            : ("number" === typeof n && (n = Array.prototype.slice.call(e)),
              this.setValues(t, n),
              this);
        }),
        (N.prototype.setChannel = function (t, e, n) {
          var r = this.values[t];
          return void 0 === n
            ? r[e]
            : (n === r[e] || ((r[e] = n), this.setValues(t, r)), this);
        }),
        "undefined" !== typeof window && (window.Color = N);
      var R = N,
        z = {
          noop: function () {},
          uid: (function () {
            var t = 0;
            return function () {
              return t++;
            };
          })(),
          isNullOrUndef: function (t) {
            return null === t || "undefined" === typeof t;
          },
          isArray: function (t) {
            if (Array.isArray && Array.isArray(t)) return !0;
            var e = Object.prototype.toString.call(t);
            return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6);
          },
          isObject: function (t) {
            return (
              null !== t &&
              "[object Object]" === Object.prototype.toString.call(t)
            );
          },
          isFinite: function (t) {
            return (
              ("number" === typeof t || t instanceof Number) && isFinite(t)
            );
          },
          valueOrDefault: function (t, e) {
            return "undefined" === typeof t ? e : t;
          },
          valueAtIndexOrDefault: function (t, e, n) {
            return z.valueOrDefault(z.isArray(t) ? t[e] : t, n);
          },
          callback: function (t, e, n) {
            if (t && "function" === typeof t.call) return t.apply(n, e);
          },
          each: function (t, e, n, r) {
            var i, a, o;
            if (z.isArray(t))
              if (((a = t.length), r))
                for (i = a - 1; i >= 0; i--) e.call(n, t[i], i);
              else for (i = 0; i < a; i++) e.call(n, t[i], i);
            else if (z.isObject(t))
              for (o = Object.keys(t), a = o.length, i = 0; i < a; i++)
                e.call(n, t[o[i]], o[i]);
          },
          arrayEquals: function (t, e) {
            var n, r, i, a;
            if (!t || !e || t.length !== e.length) return !1;
            for (n = 0, r = t.length; n < r; ++n)
              if (
                ((i = t[n]),
                (a = e[n]),
                i instanceof Array && a instanceof Array)
              ) {
                if (!z.arrayEquals(i, a)) return !1;
              } else if (i !== a) return !1;
            return !0;
          },
          clone: function (t) {
            if (z.isArray(t)) return t.map(z.clone);
            if (z.isObject(t)) {
              for (
                var e = {}, n = Object.keys(t), r = n.length, i = 0;
                i < r;
                ++i
              )
                e[n[i]] = z.clone(t[n[i]]);
              return e;
            }
            return t;
          },
          _merger: function (t, e, n, r) {
            var i = e[t],
              a = n[t];
            z.isObject(i) && z.isObject(a)
              ? z.merge(i, a, r)
              : (e[t] = z.clone(a));
          },
          _mergerIf: function (t, e, n) {
            var r = e[t],
              i = n[t];
            z.isObject(r) && z.isObject(i)
              ? z.mergeIf(r, i)
              : e.hasOwnProperty(t) || (e[t] = z.clone(i));
          },
          merge: function (t, e, n) {
            var r,
              i,
              a,
              o,
              s,
              l = z.isArray(e) ? e : [e],
              u = l.length;
            if (!z.isObject(t)) return t;
            for (n = n || {}, r = n.merger || z._merger, i = 0; i < u; ++i)
              if (((e = l[i]), z.isObject(e)))
                for (a = Object.keys(e), s = 0, o = a.length; s < o; ++s)
                  r(a[s], t, e, n);
            return t;
          },
          mergeIf: function (t, e) {
            return z.merge(t, e, { merger: z._mergerIf });
          },
          extend:
            Object.assign ||
            function (t) {
              return z.merge(t, [].slice.call(arguments, 1), {
                merger: function (t, e, n) {
                  e[t] = n[t];
                },
              });
            },
          inherits: function (t) {
            var e = this,
              n =
                t && t.hasOwnProperty("constructor")
                  ? t.constructor
                  : function () {
                      return e.apply(this, arguments);
                    },
              r = function () {
                this.constructor = n;
              };
            return (
              (r.prototype = e.prototype),
              (n.prototype = new r()),
              (n.extend = z.inherits),
              t && z.extend(n.prototype, t),
              (n.__super__ = e.prototype),
              n
            );
          },
          _deprecated: function (t, e, n, r) {
            void 0 !== e &&
              console.warn(
                t +
                  ': "' +
                  n +
                  '" is deprecated. Please use "' +
                  r +
                  '" instead'
              );
          },
        },
        B = z;
      (z.callCallback = z.callback),
        (z.indexOf = function (t, e, n) {
          return Array.prototype.indexOf.call(t, e, n);
        }),
        (z.getValueOrDefault = z.valueOrDefault),
        (z.getValueAtIndexOrDefault = z.valueAtIndexOrDefault);
      var V = {
          linear: function (t) {
            return t;
          },
          easeInQuad: function (t) {
            return t * t;
          },
          easeOutQuad: function (t) {
            return -t * (t - 2);
          },
          easeInOutQuad: function (t) {
            return (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
          },
          easeInCubic: function (t) {
            return t * t * t;
          },
          easeOutCubic: function (t) {
            return (t -= 1) * t * t + 1;
          },
          easeInOutCubic: function (t) {
            return (t /= 0.5) < 1
              ? 0.5 * t * t * t
              : 0.5 * ((t -= 2) * t * t + 2);
          },
          easeInQuart: function (t) {
            return t * t * t * t;
          },
          easeOutQuart: function (t) {
            return -((t -= 1) * t * t * t - 1);
          },
          easeInOutQuart: function (t) {
            return (t /= 0.5) < 1
              ? 0.5 * t * t * t * t
              : -0.5 * ((t -= 2) * t * t * t - 2);
          },
          easeInQuint: function (t) {
            return t * t * t * t * t;
          },
          easeOutQuint: function (t) {
            return (t -= 1) * t * t * t * t + 1;
          },
          easeInOutQuint: function (t) {
            return (t /= 0.5) < 1
              ? 0.5 * t * t * t * t * t
              : 0.5 * ((t -= 2) * t * t * t * t + 2);
          },
          easeInSine: function (t) {
            return 1 - Math.cos(t * (Math.PI / 2));
          },
          easeOutSine: function (t) {
            return Math.sin(t * (Math.PI / 2));
          },
          easeInOutSine: function (t) {
            return -0.5 * (Math.cos(Math.PI * t) - 1);
          },
          easeInExpo: function (t) {
            return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
          },
          easeOutExpo: function (t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
          },
          easeInOutExpo: function (t) {
            return 0 === t
              ? 0
              : 1 === t
              ? 1
              : (t /= 0.5) < 1
              ? 0.5 * Math.pow(2, 10 * (t - 1))
              : 0.5 * (2 - Math.pow(2, -10 * --t));
          },
          easeInCirc: function (t) {
            return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
          },
          easeOutCirc: function (t) {
            return Math.sqrt(1 - (t -= 1) * t);
          },
          easeInOutCirc: function (t) {
            return (t /= 0.5) < 1
              ? -0.5 * (Math.sqrt(1 - t * t) - 1)
              : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
          },
          easeInElastic: function (t) {
            var e = 1.70158,
              n = 0,
              r = 1;
            return 0 === t
              ? 0
              : 1 === t
              ? 1
              : (n || (n = 0.3),
                r < 1
                  ? ((r = 1), (e = n / 4))
                  : (e = (n / (2 * Math.PI)) * Math.asin(1 / r)),
                -r *
                  Math.pow(2, 10 * (t -= 1)) *
                  Math.sin(((t - e) * (2 * Math.PI)) / n));
          },
          easeOutElastic: function (t) {
            var e = 1.70158,
              n = 0,
              r = 1;
            return 0 === t
              ? 0
              : 1 === t
              ? 1
              : (n || (n = 0.3),
                r < 1
                  ? ((r = 1), (e = n / 4))
                  : (e = (n / (2 * Math.PI)) * Math.asin(1 / r)),
                r *
                  Math.pow(2, -10 * t) *
                  Math.sin(((t - e) * (2 * Math.PI)) / n) +
                  1);
          },
          easeInOutElastic: function (t) {
            var e = 1.70158,
              n = 0,
              r = 1;
            return 0 === t
              ? 0
              : 2 === (t /= 0.5)
              ? 1
              : (n || (n = 0.45),
                r < 1
                  ? ((r = 1), (e = n / 4))
                  : (e = (n / (2 * Math.PI)) * Math.asin(1 / r)),
                t < 1
                  ? r *
                    Math.pow(2, 10 * (t -= 1)) *
                    Math.sin(((t - e) * (2 * Math.PI)) / n) *
                    -0.5
                  : r *
                      Math.pow(2, -10 * (t -= 1)) *
                      Math.sin(((t - e) * (2 * Math.PI)) / n) *
                      0.5 +
                    1);
          },
          easeInBack: function (t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e);
          },
          easeOutBack: function (t) {
            var e = 1.70158;
            return (t -= 1) * t * ((e + 1) * t + e) + 1;
          },
          easeInOutBack: function (t) {
            var e = 1.70158;
            return (t /= 0.5) < 1
              ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
              : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
          },
          easeInBounce: function (t) {
            return 1 - V.easeOutBounce(1 - t);
          },
          easeOutBounce: function (t) {
            return t < 1 / 2.75
              ? 7.5625 * t * t
              : t < 2 / 2.75
              ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
              : t < 2.5 / 2.75
              ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
              : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
          },
          easeInOutBounce: function (t) {
            return t < 0.5
              ? 0.5 * V.easeInBounce(2 * t)
              : 0.5 * V.easeOutBounce(2 * t - 1) + 0.5;
          },
        },
        $ = { effects: V };
      B.easingEffects = V;
      var W = Math.PI,
        j = W / 180,
        H = 2 * W,
        q = W / 2,
        U = W / 4,
        Y = (2 * W) / 3,
        G = {
          clear: function (t) {
            t.ctx.clearRect(0, 0, t.width, t.height);
          },
          roundedRect: function (t, e, n, r, i, a) {
            if (a) {
              var o = Math.min(a, i / 2, r / 2),
                s = e + o,
                l = n + o,
                u = e + r - o,
                c = n + i - o;
              t.moveTo(e, l),
                s < u && l < c
                  ? (t.arc(s, l, o, -W, -q),
                    t.arc(u, l, o, -q, 0),
                    t.arc(u, c, o, 0, q),
                    t.arc(s, c, o, q, W))
                  : s < u
                  ? (t.moveTo(s, n),
                    t.arc(u, l, o, -q, q),
                    t.arc(s, l, o, q, W + q))
                  : l < c
                  ? (t.arc(s, l, o, -W, 0), t.arc(s, c, o, 0, W))
                  : t.arc(s, l, o, -W, W),
                t.closePath(),
                t.moveTo(e, n);
            } else t.rect(e, n, r, i);
          },
          drawPoint: function (t, e, n, r, i, a) {
            var o,
              s,
              l,
              u,
              c,
              d = (a || 0) * j;
            if (
              e &&
              "object" === typeof e &&
              ((o = e.toString()),
              "[object HTMLImageElement]" === o ||
                "[object HTMLCanvasElement]" === o)
            )
              return (
                t.save(),
                t.translate(r, i),
                t.rotate(d),
                t.drawImage(e, -e.width / 2, -e.height / 2, e.width, e.height),
                void t.restore()
              );
            if (!(isNaN(n) || n <= 0)) {
              switch ((t.beginPath(), e)) {
                default:
                  t.arc(r, i, n, 0, H), t.closePath();
                  break;
                case "triangle":
                  t.moveTo(r + Math.sin(d) * n, i - Math.cos(d) * n),
                    (d += Y),
                    t.lineTo(r + Math.sin(d) * n, i - Math.cos(d) * n),
                    (d += Y),
                    t.lineTo(r + Math.sin(d) * n, i - Math.cos(d) * n),
                    t.closePath();
                  break;
                case "rectRounded":
                  (c = 0.516 * n),
                    (u = n - c),
                    (s = Math.cos(d + U) * u),
                    (l = Math.sin(d + U) * u),
                    t.arc(r - s, i - l, c, d - W, d - q),
                    t.arc(r + l, i - s, c, d - q, d),
                    t.arc(r + s, i + l, c, d, d + q),
                    t.arc(r - l, i + s, c, d + q, d + W),
                    t.closePath();
                  break;
                case "rect":
                  if (!a) {
                    (u = Math.SQRT1_2 * n), t.rect(r - u, i - u, 2 * u, 2 * u);
                    break;
                  }
                  d += U;
                case "rectRot":
                  (s = Math.cos(d) * n),
                    (l = Math.sin(d) * n),
                    t.moveTo(r - s, i - l),
                    t.lineTo(r + l, i - s),
                    t.lineTo(r + s, i + l),
                    t.lineTo(r - l, i + s),
                    t.closePath();
                  break;
                case "crossRot":
                  d += U;
                case "cross":
                  (s = Math.cos(d) * n),
                    (l = Math.sin(d) * n),
                    t.moveTo(r - s, i - l),
                    t.lineTo(r + s, i + l),
                    t.moveTo(r + l, i - s),
                    t.lineTo(r - l, i + s);
                  break;
                case "star":
                  (s = Math.cos(d) * n),
                    (l = Math.sin(d) * n),
                    t.moveTo(r - s, i - l),
                    t.lineTo(r + s, i + l),
                    t.moveTo(r + l, i - s),
                    t.lineTo(r - l, i + s),
                    (d += U),
                    (s = Math.cos(d) * n),
                    (l = Math.sin(d) * n),
                    t.moveTo(r - s, i - l),
                    t.lineTo(r + s, i + l),
                    t.moveTo(r + l, i - s),
                    t.lineTo(r - l, i + s);
                  break;
                case "line":
                  (s = Math.cos(d) * n),
                    (l = Math.sin(d) * n),
                    t.moveTo(r - s, i - l),
                    t.lineTo(r + s, i + l);
                  break;
                case "dash":
                  t.moveTo(r, i),
                    t.lineTo(r + Math.cos(d) * n, i + Math.sin(d) * n);
                  break;
              }
              t.fill(), t.stroke();
            }
          },
          _isPointInArea: function (t, e) {
            var n = 1e-6;
            return (
              t.x > e.left - n &&
              t.x < e.right + n &&
              t.y > e.top - n &&
              t.y < e.bottom + n
            );
          },
          clipArea: function (t, e) {
            t.save(),
              t.beginPath(),
              t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
              t.clip();
          },
          unclipArea: function (t) {
            t.restore();
          },
          lineTo: function (t, e, n, r) {
            var i = n.steppedLine;
            if (i) {
              if ("middle" === i) {
                var a = (e.x + n.x) / 2;
                t.lineTo(a, r ? n.y : e.y), t.lineTo(a, r ? e.y : n.y);
              } else
                ("after" === i && !r) || ("after" !== i && r)
                  ? t.lineTo(e.x, n.y)
                  : t.lineTo(n.x, e.y);
              t.lineTo(n.x, n.y);
            } else
              n.tension
                ? t.bezierCurveTo(
                    r ? e.controlPointPreviousX : e.controlPointNextX,
                    r ? e.controlPointPreviousY : e.controlPointNextY,
                    r ? n.controlPointNextX : n.controlPointPreviousX,
                    r ? n.controlPointNextY : n.controlPointPreviousY,
                    n.x,
                    n.y
                  )
                : t.lineTo(n.x, n.y);
          },
        },
        K = G;
      (B.clear = G.clear),
        (B.drawRoundedRectangle = function (t) {
          t.beginPath(), G.roundedRect.apply(G, arguments);
        });
      var X = {
        _set: function (t, e) {
          return B.merge(this[t] || (this[t] = {}), e);
        },
      };
      X._set("global", {
        defaultColor: "rgba(0,0,0,0.1)",
        defaultFontColor: "#666",
        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        defaultFontSize: 12,
        defaultFontStyle: "normal",
        defaultLineHeight: 1.2,
        showLines: !0,
      });
      var Q = X,
        Z = B.valueOrDefault;
      function J(t) {
        return !t || B.isNullOrUndef(t.size) || B.isNullOrUndef(t.family)
          ? null
          : (t.style ? t.style + " " : "") +
              (t.weight ? t.weight + " " : "") +
              t.size +
              "px " +
              t.family;
      }
      var tt = {
          toLineHeight: function (t, e) {
            var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
            if (!n || "normal" === n[1]) return 1.2 * e;
            switch (((t = +n[2]), n[3])) {
              case "px":
                return t;
              case "%":
                t /= 100;
                break;
            }
            return e * t;
          },
          toPadding: function (t) {
            var e, n, r, i;
            return (
              B.isObject(t)
                ? ((e = +t.top || 0),
                  (n = +t.right || 0),
                  (r = +t.bottom || 0),
                  (i = +t.left || 0))
                : (e = n = r = i = +t || 0),
              {
                top: e,
                right: n,
                bottom: r,
                left: i,
                height: e + r,
                width: i + n,
              }
            );
          },
          _parseFont: function (t) {
            var e = Q.global,
              n = Z(t.fontSize, e.defaultFontSize),
              r = {
                family: Z(t.fontFamily, e.defaultFontFamily),
                lineHeight: B.options.toLineHeight(
                  Z(t.lineHeight, e.defaultLineHeight),
                  n
                ),
                size: n,
                style: Z(t.fontStyle, e.defaultFontStyle),
                weight: null,
                string: "",
              };
            return (r.string = J(r)), r;
          },
          resolve: function (t, e, n, r) {
            var i,
              a,
              o,
              s = !0;
            for (i = 0, a = t.length; i < a; ++i)
              if (
                ((o = t[i]),
                void 0 !== o &&
                  (void 0 !== e &&
                    "function" === typeof o &&
                    ((o = o(e)), (s = !1)),
                  void 0 !== n && B.isArray(o) && ((o = o[n]), (s = !1)),
                  void 0 !== o))
              )
                return r && !s && (r.cacheable = !1), o;
          },
        },
        et = {
          _factorize: function (t) {
            var e,
              n = [],
              r = Math.sqrt(t);
            for (e = 1; e < r; e++) t % e === 0 && (n.push(e), n.push(t / e));
            return (
              r === (0 | r) && n.push(r),
              n
                .sort(function (t, e) {
                  return t - e;
                })
                .pop(),
              n
            );
          },
          log10:
            Math.log10 ||
            function (t) {
              var e = Math.log(t) * Math.LOG10E,
                n = Math.round(e),
                r = t === Math.pow(10, n);
              return r ? n : e;
            },
        },
        nt = et;
      B.log10 = et.log10;
      var rt = function (t, e) {
          return {
            x: function (n) {
              return t + t + e - n;
            },
            setWidth: function (t) {
              e = t;
            },
            textAlign: function (t) {
              return "center" === t ? t : "right" === t ? "left" : "right";
            },
            xPlus: function (t, e) {
              return t - e;
            },
            leftForLtr: function (t, e) {
              return t - e;
            },
          };
        },
        it = function () {
          return {
            x: function (t) {
              return t;
            },
            setWidth: function (t) {},
            textAlign: function (t) {
              return t;
            },
            xPlus: function (t, e) {
              return t + e;
            },
            leftForLtr: function (t, e) {
              return t;
            },
          };
        },
        at = function (t, e, n) {
          return t ? rt(e, n) : it();
        },
        ot = function (t, e) {
          var n, r;
          ("ltr" !== e && "rtl" !== e) ||
            ((n = t.canvas.style),
            (r = [
              n.getPropertyValue("direction"),
              n.getPropertyPriority("direction"),
            ]),
            n.setProperty("direction", e, "important"),
            (t.prevTextDirection = r));
        },
        st = function (t) {
          var e = t.prevTextDirection;
          void 0 !== e &&
            (delete t.prevTextDirection,
            t.canvas.style.setProperty("direction", e[0], e[1]));
        },
        lt = {
          getRtlAdapter: at,
          overrideTextDirection: ot,
          restoreTextDirection: st,
        },
        ut = B,
        ct = $,
        dt = K,
        ht = tt,
        ft = nt,
        pt = lt;
      function gt(t, e, n, r) {
        var i,
          a,
          o,
          s,
          l,
          u,
          c,
          d,
          h,
          f = Object.keys(n);
        for (i = 0, a = f.length; i < a; ++i)
          if (
            ((o = f[i]),
            (u = n[o]),
            e.hasOwnProperty(o) || (e[o] = u),
            (s = e[o]),
            s !== u && "_" !== o[0])
          ) {
            if (
              (t.hasOwnProperty(o) || (t[o] = s),
              (l = t[o]),
              (c = typeof u),
              c === typeof l)
            )
              if ("string" === c) {
                if (((d = R(l)), d.valid && ((h = R(u)), h.valid))) {
                  e[o] = h.mix(d, r).rgbString();
                  continue;
                }
              } else if (ut.isFinite(l) && ut.isFinite(u)) {
                e[o] = l + (u - l) * r;
                continue;
              }
            e[o] = u;
          }
      }
      (ut.easing = ct),
        (ut.canvas = dt),
        (ut.options = ht),
        (ut.math = ft),
        (ut.rtl = pt);
      var vt = function (t) {
        ut.extend(this, t), this.initialize.apply(this, arguments);
      };
      ut.extend(vt.prototype, {
        _type: void 0,
        initialize: function () {
          this.hidden = !1;
        },
        pivot: function () {
          var t = this;
          return (
            t._view || (t._view = ut.extend({}, t._model)), (t._start = {}), t
          );
        },
        transition: function (t) {
          var e = this,
            n = e._model,
            r = e._start,
            i = e._view;
          return n && 1 !== t
            ? (i || (i = e._view = {}),
              r || (r = e._start = {}),
              gt(r, i, n, t),
              e)
            : ((e._view = ut.extend({}, n)), (e._start = null), e);
        },
        tooltipPosition: function () {
          return { x: this._model.x, y: this._model.y };
        },
        hasValue: function () {
          return ut.isNumber(this._model.x) && ut.isNumber(this._model.y);
        },
      }),
        (vt.extend = ut.inherits);
      var mt = vt,
        bt = mt.extend({
          chart: null,
          currentStep: 0,
          numSteps: 60,
          easing: "",
          render: null,
          onAnimationProgress: null,
          onAnimationComplete: null,
        }),
        yt = bt;
      Object.defineProperty(bt.prototype, "animationObject", {
        get: function () {
          return this;
        },
      }),
        Object.defineProperty(bt.prototype, "chartInstance", {
          get: function () {
            return this.chart;
          },
          set: function (t) {
            this.chart = t;
          },
        }),
        Q._set("global", {
          animation: {
            duration: 1e3,
            easing: "easeOutQuart",
            onProgress: ut.noop,
            onComplete: ut.noop,
          },
        });
      var xt = {
          animations: [],
          request: null,
          addAnimation: function (t, e, n, r) {
            var i,
              a,
              o = this.animations;
            for (
              e.chart = t,
                e.startTime = Date.now(),
                e.duration = n,
                r || (t.animating = !0),
                i = 0,
                a = o.length;
              i < a;
              ++i
            )
              if (o[i].chart === t) return void (o[i] = e);
            o.push(e), 1 === o.length && this.requestAnimationFrame();
          },
          cancelAnimation: function (t) {
            var e = ut.findIndex(this.animations, function (e) {
              return e.chart === t;
            });
            -1 !== e && (this.animations.splice(e, 1), (t.animating = !1));
          },
          requestAnimationFrame: function () {
            var t = this;
            null === t.request &&
              (t.request = ut.requestAnimFrame.call(window, function () {
                (t.request = null), t.startDigest();
              }));
          },
          startDigest: function () {
            var t = this;
            t.advance(), t.animations.length > 0 && t.requestAnimationFrame();
          },
          advance: function () {
            var t,
              e,
              n,
              r,
              i = this.animations,
              a = 0;
            while (a < i.length)
              (t = i[a]),
                (e = t.chart),
                (n = t.numSteps),
                (r =
                  Math.floor(((Date.now() - t.startTime) / t.duration) * n) +
                  1),
                (t.currentStep = Math.min(r, n)),
                ut.callback(t.render, [e, t], e),
                ut.callback(t.onAnimationProgress, [t], e),
                t.currentStep >= n
                  ? (ut.callback(t.onAnimationComplete, [t], e),
                    (e.animating = !1),
                    i.splice(a, 1))
                  : ++a;
          },
        },
        _t = ut.options.resolve,
        wt = ["push", "pop", "shift", "splice", "unshift"];
      function kt(t, e) {
        t._chartjs
          ? t._chartjs.listeners.push(e)
          : (Object.defineProperty(t, "_chartjs", {
              configurable: !0,
              enumerable: !1,
              value: { listeners: [e] },
            }),
            wt.forEach(function (e) {
              var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                r = t[e];
              Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !1,
                value: function () {
                  var e = Array.prototype.slice.call(arguments),
                    i = r.apply(this, e);
                  return (
                    ut.each(t._chartjs.listeners, function (t) {
                      "function" === typeof t[n] && t[n].apply(t, e);
                    }),
                    i
                  );
                },
              });
            }));
      }
      function Ct(t, e) {
        var n = t._chartjs;
        if (n) {
          var r = n.listeners,
            i = r.indexOf(e);
          -1 !== i && r.splice(i, 1),
            r.length > 0 ||
              (wt.forEach(function (e) {
                delete t[e];
              }),
              delete t._chartjs);
        }
      }
      var Mt = function (t, e) {
        this.initialize(t, e);
      };
      ut.extend(Mt.prototype, {
        datasetElementType: null,
        dataElementType: null,
        _datasetElementOptions: [
          "backgroundColor",
          "borderCapStyle",
          "borderColor",
          "borderDash",
          "borderDashOffset",
          "borderJoinStyle",
          "borderWidth",
        ],
        _dataElementOptions: [
          "backgroundColor",
          "borderColor",
          "borderWidth",
          "pointStyle",
        ],
        initialize: function (t, e) {
          var n = this;
          (n.chart = t),
            (n.index = e),
            n.linkScales(),
            n.addElements(),
            (n._type = n.getMeta().type);
        },
        updateIndex: function (t) {
          this.index = t;
        },
        linkScales: function () {
          var t = this,
            e = t.getMeta(),
            n = t.chart,
            r = n.scales,
            i = t.getDataset(),
            a = n.options.scales;
          (null !== e.xAxisID && e.xAxisID in r && !i.xAxisID) ||
            (e.xAxisID = i.xAxisID || a.xAxes[0].id),
            (null !== e.yAxisID && e.yAxisID in r && !i.yAxisID) ||
              (e.yAxisID = i.yAxisID || a.yAxes[0].id);
        },
        getDataset: function () {
          return this.chart.data.datasets[this.index];
        },
        getMeta: function () {
          return this.chart.getDatasetMeta(this.index);
        },
        getScaleForId: function (t) {
          return this.chart.scales[t];
        },
        _getValueScaleId: function () {
          return this.getMeta().yAxisID;
        },
        _getIndexScaleId: function () {
          return this.getMeta().xAxisID;
        },
        _getValueScale: function () {
          return this.getScaleForId(this._getValueScaleId());
        },
        _getIndexScale: function () {
          return this.getScaleForId(this._getIndexScaleId());
        },
        reset: function () {
          this._update(!0);
        },
        destroy: function () {
          this._data && Ct(this._data, this);
        },
        createMetaDataset: function () {
          var t = this,
            e = t.datasetElementType;
          return e && new e({ _chart: t.chart, _datasetIndex: t.index });
        },
        createMetaData: function (t) {
          var e = this,
            n = e.dataElementType;
          return (
            n && new n({ _chart: e.chart, _datasetIndex: e.index, _index: t })
          );
        },
        addElements: function () {
          var t,
            e,
            n = this,
            r = n.getMeta(),
            i = n.getDataset().data || [],
            a = r.data;
          for (t = 0, e = i.length; t < e; ++t)
            a[t] = a[t] || n.createMetaData(t);
          r.dataset = r.dataset || n.createMetaDataset();
        },
        addElementAndReset: function (t) {
          var e = this.createMetaData(t);
          this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
        },
        buildOrUpdateElements: function () {
          var t = this,
            e = t.getDataset(),
            n = e.data || (e.data = []);
          t._data !== n &&
            (t._data && Ct(t._data, t),
            n && Object.isExtensible(n) && kt(n, t),
            (t._data = n)),
            t.resyncElements();
        },
        _configure: function () {
          var t = this;
          t._config = ut.merge(
            {},
            [t.chart.options.datasets[t._type], t.getDataset()],
            {
              merger: function (t, e, n) {
                "_meta" !== t && "data" !== t && ut._merger(t, e, n);
              },
            }
          );
        },
        _update: function (t) {
          var e = this;
          e._configure(), (e._cachedDataOpts = null), e.update(t);
        },
        update: ut.noop,
        transition: function (t) {
          for (
            var e = this.getMeta(), n = e.data || [], r = n.length, i = 0;
            i < r;
            ++i
          )
            n[i].transition(t);
          e.dataset && e.dataset.transition(t);
        },
        draw: function () {
          var t = this.getMeta(),
            e = t.data || [],
            n = e.length,
            r = 0;
          for (t.dataset && t.dataset.draw(); r < n; ++r) e[r].draw();
        },
        getStyle: function (t) {
          var e,
            n = this,
            r = n.getMeta(),
            i = r.dataset;
          return (
            n._configure(),
            i && void 0 === t
              ? (e = n._resolveDatasetElementOptions(i || {}))
              : ((t = t || 0),
                (e = n._resolveDataElementOptions(r.data[t] || {}, t))),
            (!1 !== e.fill && null !== e.fill) ||
              (e.backgroundColor = e.borderColor),
            e
          );
        },
        _resolveDatasetElementOptions: function (t, e) {
          var n,
            r,
            i,
            a,
            o = this,
            s = o.chart,
            l = o._config,
            u = t.custom || {},
            c = s.options.elements[o.datasetElementType.prototype._type] || {},
            d = o._datasetElementOptions,
            h = {},
            f = {
              chart: s,
              dataset: o.getDataset(),
              datasetIndex: o.index,
              hover: e,
            };
          for (n = 0, r = d.length; n < r; ++n)
            (i = d[n]),
              (a = e ? "hover" + i.charAt(0).toUpperCase() + i.slice(1) : i),
              (h[i] = _t([u[a], l[a], c[a]], f));
          return h;
        },
        _resolveDataElementOptions: function (t, e) {
          var n = this,
            r = t && t.custom,
            i = n._cachedDataOpts;
          if (i && !r) return i;
          var a,
            o,
            s,
            l,
            u = n.chart,
            c = n._config,
            d = u.options.elements[n.dataElementType.prototype._type] || {},
            h = n._dataElementOptions,
            f = {},
            p = {
              chart: u,
              dataIndex: e,
              dataset: n.getDataset(),
              datasetIndex: n.index,
            },
            g = { cacheable: !r };
          if (((r = r || {}), ut.isArray(h)))
            for (o = 0, s = h.length; o < s; ++o)
              (l = h[o]), (f[l] = _t([r[l], c[l], d[l]], p, e, g));
          else
            for (a = Object.keys(h), o = 0, s = a.length; o < s; ++o)
              (l = a[o]), (f[l] = _t([r[l], c[h[l]], c[l], d[l]], p, e, g));
          return g.cacheable && (n._cachedDataOpts = Object.freeze(f)), f;
        },
        removeHoverStyle: function (t) {
          ut.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle;
        },
        setHoverStyle: function (t) {
          var e = this.chart.data.datasets[t._datasetIndex],
            n = t._index,
            r = t.custom || {},
            i = t._model,
            a = ut.getHoverColor;
          (t.$previousStyle = {
            backgroundColor: i.backgroundColor,
            borderColor: i.borderColor,
            borderWidth: i.borderWidth,
          }),
            (i.backgroundColor = _t(
              [
                r.hoverBackgroundColor,
                e.hoverBackgroundColor,
                a(i.backgroundColor),
              ],
              void 0,
              n
            )),
            (i.borderColor = _t(
              [r.hoverBorderColor, e.hoverBorderColor, a(i.borderColor)],
              void 0,
              n
            )),
            (i.borderWidth = _t(
              [r.hoverBorderWidth, e.hoverBorderWidth, i.borderWidth],
              void 0,
              n
            ));
        },
        _removeDatasetHoverStyle: function () {
          var t = this.getMeta().dataset;
          t && this.removeHoverStyle(t);
        },
        _setDatasetHoverStyle: function () {
          var t,
            e,
            n,
            r,
            i,
            a,
            o = this.getMeta().dataset,
            s = {};
          if (o) {
            for (
              a = o._model,
                i = this._resolveDatasetElementOptions(o, !0),
                r = Object.keys(i),
                t = 0,
                e = r.length;
              t < e;
              ++t
            )
              (n = r[t]), (s[n] = a[n]), (a[n] = i[n]);
            o.$previousStyle = s;
          }
        },
        resyncElements: function () {
          var t = this,
            e = t.getMeta(),
            n = t.getDataset().data,
            r = e.data.length,
            i = n.length;
          i < r ? e.data.splice(i, r - i) : i > r && t.insertElements(r, i - r);
        },
        insertElements: function (t, e) {
          for (var n = 0; n < e; ++n) this.addElementAndReset(t + n);
        },
        onDataPush: function () {
          var t = arguments.length;
          this.insertElements(this.getDataset().data.length - t, t);
        },
        onDataPop: function () {
          this.getMeta().data.pop();
        },
        onDataShift: function () {
          this.getMeta().data.shift();
        },
        onDataSplice: function (t, e) {
          this.getMeta().data.splice(t, e),
            this.insertElements(t, arguments.length - 2);
        },
        onDataUnshift: function () {
          this.insertElements(0, arguments.length);
        },
      }),
        (Mt.extend = ut.inherits);
      var St = Mt,
        At = 2 * Math.PI;
      function Pt(t, e) {
        var n = e.startAngle,
          r = e.endAngle,
          i = e.pixelMargin,
          a = i / e.outerRadius,
          o = e.x,
          s = e.y;
        t.beginPath(),
          t.arc(o, s, e.outerRadius, n - a, r + a),
          e.innerRadius > i
            ? ((a = i / e.innerRadius),
              t.arc(o, s, e.innerRadius - i, r + a, n - a, !0))
            : t.arc(o, s, i, r + Math.PI / 2, n - Math.PI / 2),
          t.closePath(),
          t.clip();
      }
      function Dt(t, e, n, r) {
        var i,
          a = n.endAngle;
        for (
          r &&
            ((n.endAngle = n.startAngle + At),
            Pt(t, n),
            (n.endAngle = a),
            n.endAngle === n.startAngle &&
              n.fullCircles &&
              ((n.endAngle += At), n.fullCircles--)),
            t.beginPath(),
            t.arc(n.x, n.y, n.innerRadius, n.startAngle + At, n.startAngle, !0),
            i = 0;
          i < n.fullCircles;
          ++i
        )
          t.stroke();
        for (
          t.beginPath(),
            t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.startAngle + At),
            i = 0;
          i < n.fullCircles;
          ++i
        )
          t.stroke();
      }
      function Tt(t, e, n) {
        var r = "inner" === e.borderAlign;
        r
          ? ((t.lineWidth = 2 * e.borderWidth), (t.lineJoin = "round"))
          : ((t.lineWidth = e.borderWidth), (t.lineJoin = "bevel")),
          n.fullCircles && Dt(t, e, n, r),
          r && Pt(t, n),
          t.beginPath(),
          t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.endAngle),
          t.arc(n.x, n.y, n.innerRadius, n.endAngle, n.startAngle, !0),
          t.closePath(),
          t.stroke();
      }
      Q._set("global", {
        elements: {
          arc: {
            backgroundColor: Q.global.defaultColor,
            borderColor: "#fff",
            borderWidth: 2,
            borderAlign: "center",
          },
        },
      });
      var Ot = mt.extend({
          _type: "arc",
          inLabelRange: function (t) {
            var e = this._view;
            return (
              !!e &&
              Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
            );
          },
          inRange: function (t, e) {
            var n = this._view;
            if (n) {
              var r = ut.getAngleFromPoint(n, { x: t, y: e }),
                i = r.angle,
                a = r.distance,
                o = n.startAngle,
                s = n.endAngle;
              while (s < o) s += At;
              while (i > s) i -= At;
              while (i < o) i += At;
              var l = i >= o && i <= s,
                u = a >= n.innerRadius && a <= n.outerRadius;
              return l && u;
            }
            return !1;
          },
          getCenterPoint: function () {
            var t = this._view,
              e = (t.startAngle + t.endAngle) / 2,
              n = (t.innerRadius + t.outerRadius) / 2;
            return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n };
          },
          getArea: function () {
            var t = this._view;
            return (
              Math.PI *
              ((t.endAngle - t.startAngle) / (2 * Math.PI)) *
              (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
            );
          },
          tooltipPosition: function () {
            var t = this._view,
              e = t.startAngle + (t.endAngle - t.startAngle) / 2,
              n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
            return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n };
          },
          draw: function () {
            var t,
              e = this._chart.ctx,
              n = this._view,
              r = "inner" === n.borderAlign ? 0.33 : 0,
              i = {
                x: n.x,
                y: n.y,
                innerRadius: n.innerRadius,
                outerRadius: Math.max(n.outerRadius - r, 0),
                pixelMargin: r,
                startAngle: n.startAngle,
                endAngle: n.endAngle,
                fullCircles: Math.floor(n.circumference / At),
              };
            if (
              (e.save(),
              (e.fillStyle = n.backgroundColor),
              (e.strokeStyle = n.borderColor),
              i.fullCircles)
            ) {
              for (
                i.endAngle = i.startAngle + At,
                  e.beginPath(),
                  e.arc(i.x, i.y, i.outerRadius, i.startAngle, i.endAngle),
                  e.arc(i.x, i.y, i.innerRadius, i.endAngle, i.startAngle, !0),
                  e.closePath(),
                  t = 0;
                t < i.fullCircles;
                ++t
              )
                e.fill();
              i.endAngle = i.startAngle + (n.circumference % At);
            }
            e.beginPath(),
              e.arc(i.x, i.y, i.outerRadius, i.startAngle, i.endAngle),
              e.arc(i.x, i.y, i.innerRadius, i.endAngle, i.startAngle, !0),
              e.closePath(),
              e.fill(),
              n.borderWidth && Tt(e, n, i),
              e.restore();
          },
        }),
        It = ut.valueOrDefault,
        Ft = Q.global.defaultColor;
      Q._set("global", {
        elements: {
          line: {
            tension: 0.4,
            backgroundColor: Ft,
            borderWidth: 3,
            borderColor: Ft,
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: "miter",
            capBezierPoints: !0,
            fill: !0,
          },
        },
      });
      var Lt = mt.extend({
          _type: "line",
          draw: function () {
            var t,
              e,
              n,
              r = this,
              i = r._view,
              a = r._chart.ctx,
              o = i.spanGaps,
              s = r._children.slice(),
              l = Q.global,
              u = l.elements.line,
              c = -1,
              d = r._loop;
            if (s.length) {
              if (r._loop) {
                for (t = 0; t < s.length; ++t)
                  if (
                    ((e = ut.previousItem(s, t)),
                    !s[t]._view.skip && e._view.skip)
                  ) {
                    (s = s.slice(t).concat(s.slice(0, t))), (d = o);
                    break;
                  }
                d && s.push(s[0]);
              }
              for (
                a.save(),
                  a.lineCap = i.borderCapStyle || u.borderCapStyle,
                  a.setLineDash && a.setLineDash(i.borderDash || u.borderDash),
                  a.lineDashOffset = It(i.borderDashOffset, u.borderDashOffset),
                  a.lineJoin = i.borderJoinStyle || u.borderJoinStyle,
                  a.lineWidth = It(i.borderWidth, u.borderWidth),
                  a.strokeStyle = i.borderColor || l.defaultColor,
                  a.beginPath(),
                  n = s[0]._view,
                  n.skip || (a.moveTo(n.x, n.y), (c = 0)),
                  t = 1;
                t < s.length;
                ++t
              )
                (n = s[t]._view),
                  (e = -1 === c ? ut.previousItem(s, t) : s[c]),
                  n.skip ||
                    ((c !== t - 1 && !o) || -1 === c
                      ? a.moveTo(n.x, n.y)
                      : ut.canvas.lineTo(a, e._view, n),
                    (c = t));
              d && a.closePath(), a.stroke(), a.restore();
            }
          },
        }),
        Et = ut.valueOrDefault,
        Nt = Q.global.defaultColor;
      function Rt(t) {
        var e = this._view;
        return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius;
      }
      function zt(t) {
        var e = this._view;
        return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius;
      }
      Q._set("global", {
        elements: {
          point: {
            radius: 3,
            pointStyle: "circle",
            backgroundColor: Nt,
            borderColor: Nt,
            borderWidth: 1,
            hitRadius: 1,
            hoverRadius: 4,
            hoverBorderWidth: 1,
          },
        },
      });
      var Bt = mt.extend({
          _type: "point",
          inRange: function (t, e) {
            var n = this._view;
            return (
              !!n &&
              Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) <
                Math.pow(n.hitRadius + n.radius, 2)
            );
          },
          inLabelRange: Rt,
          inXRange: Rt,
          inYRange: zt,
          getCenterPoint: function () {
            var t = this._view;
            return { x: t.x, y: t.y };
          },
          getArea: function () {
            return Math.PI * Math.pow(this._view.radius, 2);
          },
          tooltipPosition: function () {
            var t = this._view;
            return { x: t.x, y: t.y, padding: t.radius + t.borderWidth };
          },
          draw: function (t) {
            var e = this._view,
              n = this._chart.ctx,
              r = e.pointStyle,
              i = e.rotation,
              a = e.radius,
              o = e.x,
              s = e.y,
              l = Q.global,
              u = l.defaultColor;
            e.skip ||
              ((void 0 === t || ut.canvas._isPointInArea(e, t)) &&
                ((n.strokeStyle = e.borderColor || u),
                (n.lineWidth = Et(e.borderWidth, l.elements.point.borderWidth)),
                (n.fillStyle = e.backgroundColor || u),
                ut.canvas.drawPoint(n, r, a, o, s, i)));
          },
        }),
        Vt = Q.global.defaultColor;
      function $t(t) {
        return t && void 0 !== t.width;
      }
      function Wt(t) {
        var e, n, r, i, a;
        return (
          $t(t)
            ? ((a = t.width / 2),
              (e = t.x - a),
              (n = t.x + a),
              (r = Math.min(t.y, t.base)),
              (i = Math.max(t.y, t.base)))
            : ((a = t.height / 2),
              (e = Math.min(t.x, t.base)),
              (n = Math.max(t.x, t.base)),
              (r = t.y - a),
              (i = t.y + a)),
          { left: e, top: r, right: n, bottom: i }
        );
      }
      function jt(t, e, n) {
        return t === e ? n : t === n ? e : t;
      }
      function Ht(t) {
        var e = t.borderSkipped,
          n = {};
        return e
          ? (t.horizontal
              ? t.base > t.x && (e = jt(e, "left", "right"))
              : t.base < t.y && (e = jt(e, "bottom", "top")),
            (n[e] = !0),
            n)
          : n;
      }
      function qt(t, e, n) {
        var r,
          i,
          a,
          o,
          s = t.borderWidth,
          l = Ht(t);
        return (
          ut.isObject(s)
            ? ((r = +s.top || 0),
              (i = +s.right || 0),
              (a = +s.bottom || 0),
              (o = +s.left || 0))
            : (r = i = a = o = +s || 0),
          {
            t: l.top || r < 0 ? 0 : r > n ? n : r,
            r: l.right || i < 0 ? 0 : i > e ? e : i,
            b: l.bottom || a < 0 ? 0 : a > n ? n : a,
            l: l.left || o < 0 ? 0 : o > e ? e : o,
          }
        );
      }
      function Ut(t) {
        var e = Wt(t),
          n = e.right - e.left,
          r = e.bottom - e.top,
          i = qt(t, n / 2, r / 2);
        return {
          outer: { x: e.left, y: e.top, w: n, h: r },
          inner: {
            x: e.left + i.l,
            y: e.top + i.t,
            w: n - i.l - i.r,
            h: r - i.t - i.b,
          },
        };
      }
      function Yt(t, e, n) {
        var r = null === e,
          i = null === n,
          a = !(!t || (r && i)) && Wt(t);
        return (
          a &&
          (r || (e >= a.left && e <= a.right)) &&
          (i || (n >= a.top && n <= a.bottom))
        );
      }
      Q._set("global", {
        elements: {
          rectangle: {
            backgroundColor: Vt,
            borderColor: Vt,
            borderSkipped: "bottom",
            borderWidth: 0,
          },
        },
      });
      var Gt = mt.extend({
          _type: "rectangle",
          draw: function () {
            var t = this._chart.ctx,
              e = this._view,
              n = Ut(e),
              r = n.outer,
              i = n.inner;
            (t.fillStyle = e.backgroundColor),
              t.fillRect(r.x, r.y, r.w, r.h),
              (r.w === i.w && r.h === i.h) ||
                (t.save(),
                t.beginPath(),
                t.rect(r.x, r.y, r.w, r.h),
                t.clip(),
                (t.fillStyle = e.borderColor),
                t.rect(i.x, i.y, i.w, i.h),
                t.fill("evenodd"),
                t.restore());
          },
          height: function () {
            var t = this._view;
            return t.base - t.y;
          },
          inRange: function (t, e) {
            return Yt(this._view, t, e);
          },
          inLabelRange: function (t, e) {
            var n = this._view;
            return $t(n) ? Yt(n, t, null) : Yt(n, null, e);
          },
          inXRange: function (t) {
            return Yt(this._view, t, null);
          },
          inYRange: function (t) {
            return Yt(this._view, null, t);
          },
          getCenterPoint: function () {
            var t,
              e,
              n = this._view;
            return (
              $t(n)
                ? ((t = n.x), (e = (n.y + n.base) / 2))
                : ((t = (n.x + n.base) / 2), (e = n.y)),
              { x: t, y: e }
            );
          },
          getArea: function () {
            var t = this._view;
            return $t(t)
              ? t.width * Math.abs(t.y - t.base)
              : t.height * Math.abs(t.x - t.base);
          },
          tooltipPosition: function () {
            var t = this._view;
            return { x: t.x, y: t.y };
          },
        }),
        Kt = {},
        Xt = Ot,
        Qt = Lt,
        Zt = Bt,
        Jt = Gt;
      (Kt.Arc = Xt), (Kt.Line = Qt), (Kt.Point = Zt), (Kt.Rectangle = Jt);
      var te = ut._deprecated,
        ee = ut.valueOrDefault;
      function ne(t, e) {
        var n,
          r,
          i,
          a,
          o = t._length;
        for (i = 1, a = e.length; i < a; ++i)
          o = Math.min(o, Math.abs(e[i] - e[i - 1]));
        for (i = 0, a = t.getTicks().length; i < a; ++i)
          (r = t.getPixelForTick(i)),
            (o = i > 0 ? Math.min(o, Math.abs(r - n)) : o),
            (n = r);
        return o;
      }
      function re(t, e, n) {
        var r,
          i,
          a = n.barThickness,
          o = e.stackCount,
          s = e.pixels[t],
          l = ut.isNullOrUndef(a) ? ne(e.scale, e.pixels) : -1;
        return (
          ut.isNullOrUndef(a)
            ? ((r = l * n.categoryPercentage), (i = n.barPercentage))
            : ((r = a * o), (i = 1)),
          { chunk: r / o, ratio: i, start: s - r / 2 }
        );
      }
      function ie(t, e, n) {
        var r,
          i,
          a = e.pixels,
          o = a[t],
          s = t > 0 ? a[t - 1] : null,
          l = t < a.length - 1 ? a[t + 1] : null,
          u = n.categoryPercentage;
        return (
          null === s && (s = o - (null === l ? e.end - e.start : l - o)),
          null === l && (l = o + o - s),
          (r = o - ((o - Math.min(s, l)) / 2) * u),
          (i = (Math.abs(l - s) / 2) * u),
          { chunk: i / e.stackCount, ratio: n.barPercentage, start: r }
        );
      }
      Q._set("bar", {
        hover: { mode: "label" },
        scales: {
          xAxes: [
            {
              type: "category",
              offset: !0,
              gridLines: { offsetGridLines: !0 },
            },
          ],
          yAxes: [{ type: "linear" }],
        },
      }),
        Q._set("global", {
          datasets: { bar: { categoryPercentage: 0.8, barPercentage: 0.9 } },
        });
      var ae = St.extend({
          dataElementType: Kt.Rectangle,
          _dataElementOptions: [
            "backgroundColor",
            "borderColor",
            "borderSkipped",
            "borderWidth",
            "barPercentage",
            "barThickness",
            "categoryPercentage",
            "maxBarThickness",
            "minBarLength",
          ],
          initialize: function () {
            var t,
              e,
              n = this;
            St.prototype.initialize.apply(n, arguments),
              (t = n.getMeta()),
              (t.stack = n.getDataset().stack),
              (t.bar = !0),
              (e = n._getIndexScale().options),
              te(
                "bar chart",
                e.barPercentage,
                "scales.[x/y]Axes.barPercentage",
                "dataset.barPercentage"
              ),
              te(
                "bar chart",
                e.barThickness,
                "scales.[x/y]Axes.barThickness",
                "dataset.barThickness"
              ),
              te(
                "bar chart",
                e.categoryPercentage,
                "scales.[x/y]Axes.categoryPercentage",
                "dataset.categoryPercentage"
              ),
              te(
                "bar chart",
                n._getValueScale().options.minBarLength,
                "scales.[x/y]Axes.minBarLength",
                "dataset.minBarLength"
              ),
              te(
                "bar chart",
                e.maxBarThickness,
                "scales.[x/y]Axes.maxBarThickness",
                "dataset.maxBarThickness"
              );
          },
          update: function (t) {
            var e,
              n,
              r = this,
              i = r.getMeta().data;
            for (r._ruler = r.getRuler(), e = 0, n = i.length; e < n; ++e)
              r.updateElement(i[e], e, t);
          },
          updateElement: function (t, e, n) {
            var r = this,
              i = r.getMeta(),
              a = r.getDataset(),
              o = r._resolveDataElementOptions(t, e);
            (t._xScale = r.getScaleForId(i.xAxisID)),
              (t._yScale = r.getScaleForId(i.yAxisID)),
              (t._datasetIndex = r.index),
              (t._index = e),
              (t._model = {
                backgroundColor: o.backgroundColor,
                borderColor: o.borderColor,
                borderSkipped: o.borderSkipped,
                borderWidth: o.borderWidth,
                datasetLabel: a.label,
                label: r.chart.data.labels[e],
              }),
              ut.isArray(a.data[e]) && (t._model.borderSkipped = null),
              r._updateElementGeometry(t, e, n, o),
              t.pivot();
          },
          _updateElementGeometry: function (t, e, n, r) {
            var i = this,
              a = t._model,
              o = i._getValueScale(),
              s = o.getBasePixel(),
              l = o.isHorizontal(),
              u = i._ruler || i.getRuler(),
              c = i.calculateBarValuePixels(i.index, e, r),
              d = i.calculateBarIndexPixels(i.index, e, u, r);
            (a.horizontal = l),
              (a.base = n ? s : c.base),
              (a.x = l ? (n ? s : c.head) : d.center),
              (a.y = l ? d.center : n ? s : c.head),
              (a.height = l ? d.size : void 0),
              (a.width = l ? void 0 : d.size);
          },
          _getStacks: function (t) {
            var e,
              n,
              r = this,
              i = r._getIndexScale(),
              a = i._getMatchingVisibleMetas(r._type),
              o = i.options.stacked,
              s = a.length,
              l = [];
            for (e = 0; e < s; ++e)
              if (
                ((n = a[e]),
                (!1 === o ||
                  -1 === l.indexOf(n.stack) ||
                  (void 0 === o && void 0 === n.stack)) &&
                  l.push(n.stack),
                n.index === t)
              )
                break;
            return l;
          },
          getStackCount: function () {
            return this._getStacks().length;
          },
          getStackIndex: function (t, e) {
            var n = this._getStacks(t),
              r = void 0 !== e ? n.indexOf(e) : -1;
            return -1 === r ? n.length - 1 : r;
          },
          getRuler: function () {
            var t,
              e,
              n = this,
              r = n._getIndexScale(),
              i = [];
            for (t = 0, e = n.getMeta().data.length; t < e; ++t)
              i.push(r.getPixelForValue(null, t, n.index));
            return {
              pixels: i,
              start: r._startPixel,
              end: r._endPixel,
              stackCount: n.getStackCount(),
              scale: r,
            };
          },
          calculateBarValuePixels: function (t, e, n) {
            var r,
              i,
              a,
              o,
              s,
              l,
              u,
              c = this,
              d = c.chart,
              h = c._getValueScale(),
              f = h.isHorizontal(),
              p = d.data.datasets,
              g = h._getMatchingVisibleMetas(c._type),
              v = h._parseValue(p[t].data[e]),
              m = n.minBarLength,
              b = h.options.stacked,
              y = c.getMeta().stack,
              x =
                void 0 === v.start
                  ? 0
                  : v.max >= 0 && v.min >= 0
                  ? v.min
                  : v.max,
              _ =
                void 0 === v.start
                  ? v.end
                  : v.max >= 0 && v.min >= 0
                  ? v.max - v.min
                  : v.min - v.max,
              w = g.length;
            if (b || (void 0 === b && void 0 !== y))
              for (r = 0; r < w; ++r) {
                if (((i = g[r]), i.index === t)) break;
                i.stack === y &&
                  ((u = h._parseValue(p[i.index].data[e])),
                  (a =
                    void 0 === u.start
                      ? u.end
                      : u.min >= 0 && u.max >= 0
                      ? u.max
                      : u.min),
                  ((v.min < 0 && a < 0) || (v.max >= 0 && a > 0)) && (x += a));
              }
            return (
              (o = h.getPixelForValue(x)),
              (s = h.getPixelForValue(x + _)),
              (l = s - o),
              void 0 !== m &&
                Math.abs(l) < m &&
                ((l = m), (s = (_ >= 0 && !f) || (_ < 0 && f) ? o - m : o + m)),
              { size: l, base: o, head: s, center: s + l / 2 }
            );
          },
          calculateBarIndexPixels: function (t, e, n, r) {
            var i = this,
              a = "flex" === r.barThickness ? ie(e, n, r) : re(e, n, r),
              o = i.getStackIndex(t, i.getMeta().stack),
              s = a.start + a.chunk * o + a.chunk / 2,
              l = Math.min(ee(r.maxBarThickness, 1 / 0), a.chunk * a.ratio);
            return { base: s - l / 2, head: s + l / 2, center: s, size: l };
          },
          draw: function () {
            var t = this,
              e = t.chart,
              n = t._getValueScale(),
              r = t.getMeta().data,
              i = t.getDataset(),
              a = r.length,
              o = 0;
            for (ut.canvas.clipArea(e.ctx, e.chartArea); o < a; ++o) {
              var s = n._parseValue(i.data[o]);
              isNaN(s.min) || isNaN(s.max) || r[o].draw();
            }
            ut.canvas.unclipArea(e.ctx);
          },
          _resolveDataElementOptions: function () {
            var t = this,
              e = ut.extend(
                {},
                St.prototype._resolveDataElementOptions.apply(t, arguments)
              ),
              n = t._getIndexScale().options,
              r = t._getValueScale().options;
            return (
              (e.barPercentage = ee(n.barPercentage, e.barPercentage)),
              (e.barThickness = ee(n.barThickness, e.barThickness)),
              (e.categoryPercentage = ee(
                n.categoryPercentage,
                e.categoryPercentage
              )),
              (e.maxBarThickness = ee(n.maxBarThickness, e.maxBarThickness)),
              (e.minBarLength = ee(r.minBarLength, e.minBarLength)),
              e
            );
          },
        }),
        oe = ut.valueOrDefault,
        se = ut.options.resolve;
      Q._set("bubble", {
        hover: { mode: "single" },
        scales: {
          xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }],
          yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }],
        },
        tooltips: {
          callbacks: {
            title: function () {
              return "";
            },
            label: function (t, e) {
              var n = e.datasets[t.datasetIndex].label || "",
                r = e.datasets[t.datasetIndex].data[t.index];
              return n + ": (" + t.xLabel + ", " + t.yLabel + ", " + r.r + ")";
            },
          },
        },
      });
      var le = St.extend({
          dataElementType: Kt.Point,
          _dataElementOptions: [
            "backgroundColor",
            "borderColor",
            "borderWidth",
            "hoverBackgroundColor",
            "hoverBorderColor",
            "hoverBorderWidth",
            "hoverRadius",
            "hitRadius",
            "pointStyle",
            "rotation",
          ],
          update: function (t) {
            var e = this,
              n = e.getMeta(),
              r = n.data;
            ut.each(r, function (n, r) {
              e.updateElement(n, r, t);
            });
          },
          updateElement: function (t, e, n) {
            var r = this,
              i = r.getMeta(),
              a = t.custom || {},
              o = r.getScaleForId(i.xAxisID),
              s = r.getScaleForId(i.yAxisID),
              l = r._resolveDataElementOptions(t, e),
              u = r.getDataset().data[e],
              c = r.index,
              d = n
                ? o.getPixelForDecimal(0.5)
                : o.getPixelForValue("object" === typeof u ? u : NaN, e, c),
              h = n ? s.getBasePixel() : s.getPixelForValue(u, e, c);
            (t._xScale = o),
              (t._yScale = s),
              (t._options = l),
              (t._datasetIndex = c),
              (t._index = e),
              (t._model = {
                backgroundColor: l.backgroundColor,
                borderColor: l.borderColor,
                borderWidth: l.borderWidth,
                hitRadius: l.hitRadius,
                pointStyle: l.pointStyle,
                rotation: l.rotation,
                radius: n ? 0 : l.radius,
                skip: a.skip || isNaN(d) || isNaN(h),
                x: d,
                y: h,
              }),
              t.pivot();
          },
          setHoverStyle: function (t) {
            var e = t._model,
              n = t._options,
              r = ut.getHoverColor;
            (t.$previousStyle = {
              backgroundColor: e.backgroundColor,
              borderColor: e.borderColor,
              borderWidth: e.borderWidth,
              radius: e.radius,
            }),
              (e.backgroundColor = oe(
                n.hoverBackgroundColor,
                r(n.backgroundColor)
              )),
              (e.borderColor = oe(n.hoverBorderColor, r(n.borderColor))),
              (e.borderWidth = oe(n.hoverBorderWidth, n.borderWidth)),
              (e.radius = n.radius + n.hoverRadius);
          },
          _resolveDataElementOptions: function (t, e) {
            var n = this,
              r = n.chart,
              i = n.getDataset(),
              a = t.custom || {},
              o = i.data[e] || {},
              s = St.prototype._resolveDataElementOptions.apply(n, arguments),
              l = { chart: r, dataIndex: e, dataset: i, datasetIndex: n.index };
            return (
              n._cachedDataOpts === s && (s = ut.extend({}, s)),
              (s.radius = se(
                [
                  a.radius,
                  o.r,
                  n._config.radius,
                  r.options.elements.point.radius,
                ],
                l,
                e
              )),
              s
            );
          },
        }),
        ue = ut.valueOrDefault,
        ce = Math.PI,
        de = 2 * ce,
        he = ce / 2;
      Q._set("doughnut", {
        animation: { animateRotate: !0, animateScale: !1 },
        hover: { mode: "single" },
        legendCallback: function (t) {
          var e,
            n,
            r,
            i,
            a = document.createElement("ul"),
            o = t.data,
            s = o.datasets,
            l = o.labels;
          if ((a.setAttribute("class", t.id + "-legend"), s.length))
            for (e = 0, n = s[0].data.length; e < n; ++e)
              (r = a.appendChild(document.createElement("li"))),
                (i = r.appendChild(document.createElement("span"))),
                (i.style.backgroundColor = s[0].backgroundColor[e]),
                l[e] && r.appendChild(document.createTextNode(l[e]));
          return a.outerHTML;
        },
        legend: {
          labels: {
            generateLabels: function (t) {
              var e = t.data;
              return e.labels.length && e.datasets.length
                ? e.labels.map(function (n, r) {
                    var i = t.getDatasetMeta(0),
                      a = i.controller.getStyle(r);
                    return {
                      text: n,
                      fillStyle: a.backgroundColor,
                      strokeStyle: a.borderColor,
                      lineWidth: a.borderWidth,
                      hidden: isNaN(e.datasets[0].data[r]) || i.data[r].hidden,
                      index: r,
                    };
                  })
                : [];
            },
          },
          onClick: function (t, e) {
            var n,
              r,
              i,
              a = e.index,
              o = this.chart;
            for (n = 0, r = (o.data.datasets || []).length; n < r; ++n)
              (i = o.getDatasetMeta(n)),
                i.data[a] && (i.data[a].hidden = !i.data[a].hidden);
            o.update();
          },
        },
        cutoutPercentage: 50,
        rotation: -he,
        circumference: de,
        tooltips: {
          callbacks: {
            title: function () {
              return "";
            },
            label: function (t, e) {
              var n = e.labels[t.index],
                r = ": " + e.datasets[t.datasetIndex].data[t.index];
              return (
                ut.isArray(n) ? ((n = n.slice()), (n[0] += r)) : (n += r), n
              );
            },
          },
        },
      });
      var fe = St.extend({
        dataElementType: Kt.Arc,
        linkScales: ut.noop,
        _dataElementOptions: [
          "backgroundColor",
          "borderColor",
          "borderWidth",
          "borderAlign",
          "hoverBackgroundColor",
          "hoverBorderColor",
          "hoverBorderWidth",
        ],
        getRingIndex: function (t) {
          for (var e = 0, n = 0; n < t; ++n)
            this.chart.isDatasetVisible(n) && ++e;
          return e;
        },
        update: function (t) {
          var e,
            n,
            r,
            i,
            a = this,
            o = a.chart,
            s = o.chartArea,
            l = o.options,
            u = 1,
            c = 1,
            d = 0,
            h = 0,
            f = a.getMeta(),
            p = f.data,
            g = l.cutoutPercentage / 100 || 0,
            v = l.circumference,
            m = a._getRingWeight(a.index);
          if (v < de) {
            var b = l.rotation % de;
            b += b >= ce ? -de : b < -ce ? de : 0;
            var y = b + v,
              x = Math.cos(b),
              _ = Math.sin(b),
              w = Math.cos(y),
              k = Math.sin(y),
              C = (b <= 0 && y >= 0) || y >= de,
              M = (b <= he && y >= he) || y >= de + he,
              S = b === -ce || y >= ce,
              A = (b <= -he && y >= -he) || y >= ce + he,
              P = S ? -1 : Math.min(x, x * g, w, w * g),
              D = A ? -1 : Math.min(_, _ * g, k, k * g),
              T = C ? 1 : Math.max(x, x * g, w, w * g),
              O = M ? 1 : Math.max(_, _ * g, k, k * g);
            (u = (T - P) / 2),
              (c = (O - D) / 2),
              (d = -(T + P) / 2),
              (h = -(O + D) / 2);
          }
          for (r = 0, i = p.length; r < i; ++r)
            p[r]._options = a._resolveDataElementOptions(p[r], r);
          for (
            o.borderWidth = a.getMaxBorderWidth(),
              e = (s.right - s.left - o.borderWidth) / u,
              n = (s.bottom - s.top - o.borderWidth) / c,
              o.outerRadius = Math.max(Math.min(e, n) / 2, 0),
              o.innerRadius = Math.max(o.outerRadius * g, 0),
              o.radiusLength =
                (o.outerRadius - o.innerRadius) /
                (a._getVisibleDatasetWeightTotal() || 1),
              o.offsetX = d * o.outerRadius,
              o.offsetY = h * o.outerRadius,
              f.total = a.calculateTotal(),
              a.outerRadius =
                o.outerRadius -
                o.radiusLength * a._getRingWeightOffset(a.index),
              a.innerRadius = Math.max(a.outerRadius - o.radiusLength * m, 0),
              r = 0,
              i = p.length;
            r < i;
            ++r
          )
            a.updateElement(p[r], r, t);
        },
        updateElement: function (t, e, n) {
          var r = this,
            i = r.chart,
            a = i.chartArea,
            o = i.options,
            s = o.animation,
            l = (a.left + a.right) / 2,
            u = (a.top + a.bottom) / 2,
            c = o.rotation,
            d = o.rotation,
            h = r.getDataset(),
            f =
              (n && s.animateRotate) || t.hidden
                ? 0
                : r.calculateCircumference(h.data[e]) * (o.circumference / de),
            p = n && s.animateScale ? 0 : r.innerRadius,
            g = n && s.animateScale ? 0 : r.outerRadius,
            v = t._options || {};
          ut.extend(t, {
            _datasetIndex: r.index,
            _index: e,
            _model: {
              backgroundColor: v.backgroundColor,
              borderColor: v.borderColor,
              borderWidth: v.borderWidth,
              borderAlign: v.borderAlign,
              x: l + i.offsetX,
              y: u + i.offsetY,
              startAngle: c,
              endAngle: d,
              circumference: f,
              outerRadius: g,
              innerRadius: p,
              label: ut.valueAtIndexOrDefault(h.label, e, i.data.labels[e]),
            },
          });
          var m = t._model;
          (n && s.animateRotate) ||
            ((m.startAngle =
              0 === e ? o.rotation : r.getMeta().data[e - 1]._model.endAngle),
            (m.endAngle = m.startAngle + m.circumference)),
            t.pivot();
        },
        calculateTotal: function () {
          var t,
            e = this.getDataset(),
            n = this.getMeta(),
            r = 0;
          return (
            ut.each(n.data, function (n, i) {
              (t = e.data[i]), isNaN(t) || n.hidden || (r += Math.abs(t));
            }),
            r
          );
        },
        calculateCircumference: function (t) {
          var e = this.getMeta().total;
          return e > 0 && !isNaN(t) ? de * (Math.abs(t) / e) : 0;
        },
        getMaxBorderWidth: function (t) {
          var e,
            n,
            r,
            i,
            a,
            o,
            s,
            l,
            u = this,
            c = 0,
            d = u.chart;
          if (!t)
            for (e = 0, n = d.data.datasets.length; e < n; ++e)
              if (d.isDatasetVisible(e)) {
                (r = d.getDatasetMeta(e)),
                  (t = r.data),
                  e !== u.index && (a = r.controller);
                break;
              }
          if (!t) return 0;
          for (e = 0, n = t.length; e < n; ++e)
            (i = t[e]),
              a
                ? (a._configure(), (o = a._resolveDataElementOptions(i, e)))
                : (o = i._options),
              "inner" !== o.borderAlign &&
                ((s = o.borderWidth),
                (l = o.hoverBorderWidth),
                (c = s > c ? s : c),
                (c = l > c ? l : c));
          return c;
        },
        setHoverStyle: function (t) {
          var e = t._model,
            n = t._options,
            r = ut.getHoverColor;
          (t.$previousStyle = {
            backgroundColor: e.backgroundColor,
            borderColor: e.borderColor,
            borderWidth: e.borderWidth,
          }),
            (e.backgroundColor = ue(
              n.hoverBackgroundColor,
              r(n.backgroundColor)
            )),
            (e.borderColor = ue(n.hoverBorderColor, r(n.borderColor))),
            (e.borderWidth = ue(n.hoverBorderWidth, n.borderWidth));
        },
        _getRingWeightOffset: function (t) {
          for (var e = 0, n = 0; n < t; ++n)
            this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
          return e;
        },
        _getRingWeight: function (t) {
          return Math.max(ue(this.chart.data.datasets[t].weight, 1), 0);
        },
        _getVisibleDatasetWeightTotal: function () {
          return this._getRingWeightOffset(this.chart.data.datasets.length);
        },
      });
      Q._set("horizontalBar", {
        hover: { mode: "index", axis: "y" },
        scales: {
          xAxes: [{ type: "linear", position: "bottom" }],
          yAxes: [
            {
              type: "category",
              position: "left",
              offset: !0,
              gridLines: { offsetGridLines: !0 },
            },
          ],
        },
        elements: { rectangle: { borderSkipped: "left" } },
        tooltips: { mode: "index", axis: "y" },
      }),
        Q._set("global", {
          datasets: {
            horizontalBar: { categoryPercentage: 0.8, barPercentage: 0.9 },
          },
        });
      var pe = ae.extend({
          _getValueScaleId: function () {
            return this.getMeta().xAxisID;
          },
          _getIndexScaleId: function () {
            return this.getMeta().yAxisID;
          },
        }),
        ge = ut.valueOrDefault,
        ve = ut.options.resolve,
        me = ut.canvas._isPointInArea;
      function be(t, e) {
        var n = (t && t.options.ticks) || {},
          r = n.reverse,
          i = void 0 === n.min ? e : 0,
          a = void 0 === n.max ? e : 0;
        return { start: r ? a : i, end: r ? i : a };
      }
      function ye(t, e, n) {
        var r = n / 2,
          i = be(t, r),
          a = be(e, r);
        return { top: a.end, right: i.end, bottom: a.start, left: i.start };
      }
      function xe(t) {
        var e, n, r, i;
        return (
          ut.isObject(t)
            ? ((e = t.top), (n = t.right), (r = t.bottom), (i = t.left))
            : (e = n = r = i = t),
          { top: e, right: n, bottom: r, left: i }
        );
      }
      Q._set("line", {
        showLines: !0,
        spanGaps: !1,
        hover: { mode: "label" },
        scales: {
          xAxes: [{ type: "category", id: "x-axis-0" }],
          yAxes: [{ type: "linear", id: "y-axis-0" }],
        },
      });
      var _e = St.extend({
          datasetElementType: Kt.Line,
          dataElementType: Kt.Point,
          _datasetElementOptions: [
            "backgroundColor",
            "borderCapStyle",
            "borderColor",
            "borderDash",
            "borderDashOffset",
            "borderJoinStyle",
            "borderWidth",
            "cubicInterpolationMode",
            "fill",
          ],
          _dataElementOptions: {
            backgroundColor: "pointBackgroundColor",
            borderColor: "pointBorderColor",
            borderWidth: "pointBorderWidth",
            hitRadius: "pointHitRadius",
            hoverBackgroundColor: "pointHoverBackgroundColor",
            hoverBorderColor: "pointHoverBorderColor",
            hoverBorderWidth: "pointHoverBorderWidth",
            hoverRadius: "pointHoverRadius",
            pointStyle: "pointStyle",
            radius: "pointRadius",
            rotation: "pointRotation",
          },
          update: function (t) {
            var e,
              n,
              r = this,
              i = r.getMeta(),
              a = i.dataset,
              o = i.data || [],
              s = r.chart.options,
              l = r._config,
              u = (r._showLine = ge(l.showLine, s.showLines));
            for (
              r._xScale = r.getScaleForId(i.xAxisID),
                r._yScale = r.getScaleForId(i.yAxisID),
                u &&
                  (void 0 !== l.tension &&
                    void 0 === l.lineTension &&
                    (l.lineTension = l.tension),
                  (a._scale = r._yScale),
                  (a._datasetIndex = r.index),
                  (a._children = o),
                  (a._model = r._resolveDatasetElementOptions(a)),
                  a.pivot()),
                e = 0,
                n = o.length;
              e < n;
              ++e
            )
              r.updateElement(o[e], e, t);
            for (
              u && 0 !== a._model.tension && r.updateBezierControlPoints(),
                e = 0,
                n = o.length;
              e < n;
              ++e
            )
              o[e].pivot();
          },
          updateElement: function (t, e, n) {
            var r,
              i,
              a = this,
              o = a.getMeta(),
              s = t.custom || {},
              l = a.getDataset(),
              u = a.index,
              c = l.data[e],
              d = a._xScale,
              h = a._yScale,
              f = o.dataset._model,
              p = a._resolveDataElementOptions(t, e);
            (r = d.getPixelForValue("object" === typeof c ? c : NaN, e, u)),
              (i = n ? h.getBasePixel() : a.calculatePointY(c, e, u)),
              (t._xScale = d),
              (t._yScale = h),
              (t._options = p),
              (t._datasetIndex = u),
              (t._index = e),
              (t._model = {
                x: r,
                y: i,
                skip: s.skip || isNaN(r) || isNaN(i),
                radius: p.radius,
                pointStyle: p.pointStyle,
                rotation: p.rotation,
                backgroundColor: p.backgroundColor,
                borderColor: p.borderColor,
                borderWidth: p.borderWidth,
                tension: ge(s.tension, f ? f.tension : 0),
                steppedLine: !!f && f.steppedLine,
                hitRadius: p.hitRadius,
              });
          },
          _resolveDatasetElementOptions: function (t) {
            var e = this,
              n = e._config,
              r = t.custom || {},
              i = e.chart.options,
              a = i.elements.line,
              o = St.prototype._resolveDatasetElementOptions.apply(
                e,
                arguments
              );
            return (
              (o.spanGaps = ge(n.spanGaps, i.spanGaps)),
              (o.tension = ge(n.lineTension, a.tension)),
              (o.steppedLine = ve([r.steppedLine, n.steppedLine, a.stepped])),
              (o.clip = xe(
                ge(n.clip, ye(e._xScale, e._yScale, o.borderWidth))
              )),
              o
            );
          },
          calculatePointY: function (t, e, n) {
            var r,
              i,
              a,
              o,
              s,
              l,
              u,
              c = this,
              d = c.chart,
              h = c._yScale,
              f = 0,
              p = 0;
            if (h.options.stacked) {
              for (
                s = +h.getRightValue(t),
                  l = d._getSortedVisibleDatasetMetas(),
                  u = l.length,
                  r = 0;
                r < u;
                ++r
              ) {
                if (((a = l[r]), a.index === n)) break;
                (i = d.data.datasets[a.index]),
                  "line" === a.type &&
                    a.yAxisID === h.id &&
                    ((o = +h.getRightValue(i.data[e])),
                    o < 0 ? (p += o || 0) : (f += o || 0));
              }
              return s < 0
                ? h.getPixelForValue(p + s)
                : h.getPixelForValue(f + s);
            }
            return h.getPixelForValue(t);
          },
          updateBezierControlPoints: function () {
            var t,
              e,
              n,
              r,
              i = this,
              a = i.chart,
              o = i.getMeta(),
              s = o.dataset._model,
              l = a.chartArea,
              u = o.data || [];
            function c(t, e, n) {
              return Math.max(Math.min(t, n), e);
            }
            if (
              (s.spanGaps &&
                (u = u.filter(function (t) {
                  return !t._model.skip;
                })),
              "monotone" === s.cubicInterpolationMode)
            )
              ut.splineCurveMonotone(u);
            else
              for (t = 0, e = u.length; t < e; ++t)
                (n = u[t]._model),
                  (r = ut.splineCurve(
                    ut.previousItem(u, t)._model,
                    n,
                    ut.nextItem(u, t)._model,
                    s.tension
                  )),
                  (n.controlPointPreviousX = r.previous.x),
                  (n.controlPointPreviousY = r.previous.y),
                  (n.controlPointNextX = r.next.x),
                  (n.controlPointNextY = r.next.y);
            if (a.options.elements.line.capBezierPoints)
              for (t = 0, e = u.length; t < e; ++t)
                (n = u[t]._model),
                  me(n, l) &&
                    (t > 0 &&
                      me(u[t - 1]._model, l) &&
                      ((n.controlPointPreviousX = c(
                        n.controlPointPreviousX,
                        l.left,
                        l.right
                      )),
                      (n.controlPointPreviousY = c(
                        n.controlPointPreviousY,
                        l.top,
                        l.bottom
                      ))),
                    t < u.length - 1 &&
                      me(u[t + 1]._model, l) &&
                      ((n.controlPointNextX = c(
                        n.controlPointNextX,
                        l.left,
                        l.right
                      )),
                      (n.controlPointNextY = c(
                        n.controlPointNextY,
                        l.top,
                        l.bottom
                      ))));
          },
          draw: function () {
            var t,
              e = this,
              n = e.chart,
              r = e.getMeta(),
              i = r.data || [],
              a = n.chartArea,
              o = n.canvas,
              s = 0,
              l = i.length;
            for (
              e._showLine &&
              ((t = r.dataset._model.clip),
              ut.canvas.clipArea(n.ctx, {
                left: !1 === t.left ? 0 : a.left - t.left,
                right: !1 === t.right ? o.width : a.right + t.right,
                top: !1 === t.top ? 0 : a.top - t.top,
                bottom: !1 === t.bottom ? o.height : a.bottom + t.bottom,
              }),
              r.dataset.draw(),
              ut.canvas.unclipArea(n.ctx));
              s < l;
              ++s
            )
              i[s].draw(a);
          },
          setHoverStyle: function (t) {
            var e = t._model,
              n = t._options,
              r = ut.getHoverColor;
            (t.$previousStyle = {
              backgroundColor: e.backgroundColor,
              borderColor: e.borderColor,
              borderWidth: e.borderWidth,
              radius: e.radius,
            }),
              (e.backgroundColor = ge(
                n.hoverBackgroundColor,
                r(n.backgroundColor)
              )),
              (e.borderColor = ge(n.hoverBorderColor, r(n.borderColor))),
              (e.borderWidth = ge(n.hoverBorderWidth, n.borderWidth)),
              (e.radius = ge(n.hoverRadius, n.radius));
          },
        }),
        we = ut.options.resolve;
      Q._set("polarArea", {
        scale: {
          type: "radialLinear",
          angleLines: { display: !1 },
          gridLines: { circular: !0 },
          pointLabels: { display: !1 },
          ticks: { beginAtZero: !0 },
        },
        animation: { animateRotate: !0, animateScale: !0 },
        startAngle: -0.5 * Math.PI,
        legendCallback: function (t) {
          var e,
            n,
            r,
            i,
            a = document.createElement("ul"),
            o = t.data,
            s = o.datasets,
            l = o.labels;
          if ((a.setAttribute("class", t.id + "-legend"), s.length))
            for (e = 0, n = s[0].data.length; e < n; ++e)
              (r = a.appendChild(document.createElement("li"))),
                (i = r.appendChild(document.createElement("span"))),
                (i.style.backgroundColor = s[0].backgroundColor[e]),
                l[e] && r.appendChild(document.createTextNode(l[e]));
          return a.outerHTML;
        },
        legend: {
          labels: {
            generateLabels: function (t) {
              var e = t.data;
              return e.labels.length && e.datasets.length
                ? e.labels.map(function (n, r) {
                    var i = t.getDatasetMeta(0),
                      a = i.controller.getStyle(r);
                    return {
                      text: n,
                      fillStyle: a.backgroundColor,
                      strokeStyle: a.borderColor,
                      lineWidth: a.borderWidth,
                      hidden: isNaN(e.datasets[0].data[r]) || i.data[r].hidden,
                      index: r,
                    };
                  })
                : [];
            },
          },
          onClick: function (t, e) {
            var n,
              r,
              i,
              a = e.index,
              o = this.chart;
            for (n = 0, r = (o.data.datasets || []).length; n < r; ++n)
              (i = o.getDatasetMeta(n)), (i.data[a].hidden = !i.data[a].hidden);
            o.update();
          },
        },
        tooltips: {
          callbacks: {
            title: function () {
              return "";
            },
            label: function (t, e) {
              return e.labels[t.index] + ": " + t.yLabel;
            },
          },
        },
      });
      var ke = St.extend({
        dataElementType: Kt.Arc,
        linkScales: ut.noop,
        _dataElementOptions: [
          "backgroundColor",
          "borderColor",
          "borderWidth",
          "borderAlign",
          "hoverBackgroundColor",
          "hoverBorderColor",
          "hoverBorderWidth",
        ],
        _getIndexScaleId: function () {
          return this.chart.scale.id;
        },
        _getValueScaleId: function () {
          return this.chart.scale.id;
        },
        update: function (t) {
          var e,
            n,
            r,
            i = this,
            a = i.getDataset(),
            o = i.getMeta(),
            s = i.chart.options.startAngle || 0,
            l = (i._starts = []),
            u = (i._angles = []),
            c = o.data;
          for (
            i._updateRadius(),
              o.count = i.countVisibleElements(),
              e = 0,
              n = a.data.length;
            e < n;
            e++
          )
            (l[e] = s), (r = i._computeAngle(e)), (u[e] = r), (s += r);
          for (e = 0, n = c.length; e < n; ++e)
            (c[e]._options = i._resolveDataElementOptions(c[e], e)),
              i.updateElement(c[e], e, t);
        },
        _updateRadius: function () {
          var t = this,
            e = t.chart,
            n = e.chartArea,
            r = e.options,
            i = Math.min(n.right - n.left, n.bottom - n.top);
          (e.outerRadius = Math.max(i / 2, 0)),
            (e.innerRadius = Math.max(
              r.cutoutPercentage
                ? (e.outerRadius / 100) * r.cutoutPercentage
                : 1,
              0
            )),
            (e.radiusLength =
              (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount()),
            (t.outerRadius = e.outerRadius - e.radiusLength * t.index),
            (t.innerRadius = t.outerRadius - e.radiusLength);
        },
        updateElement: function (t, e, n) {
          var r = this,
            i = r.chart,
            a = r.getDataset(),
            o = i.options,
            s = o.animation,
            l = i.scale,
            u = i.data.labels,
            c = l.xCenter,
            d = l.yCenter,
            h = o.startAngle,
            f = t.hidden ? 0 : l.getDistanceFromCenterForValue(a.data[e]),
            p = r._starts[e],
            g = p + (t.hidden ? 0 : r._angles[e]),
            v = s.animateScale ? 0 : l.getDistanceFromCenterForValue(a.data[e]),
            m = t._options || {};
          ut.extend(t, {
            _datasetIndex: r.index,
            _index: e,
            _scale: l,
            _model: {
              backgroundColor: m.backgroundColor,
              borderColor: m.borderColor,
              borderWidth: m.borderWidth,
              borderAlign: m.borderAlign,
              x: c,
              y: d,
              innerRadius: 0,
              outerRadius: n ? v : f,
              startAngle: n && s.animateRotate ? h : p,
              endAngle: n && s.animateRotate ? h : g,
              label: ut.valueAtIndexOrDefault(u, e, u[e]),
            },
          }),
            t.pivot();
        },
        countVisibleElements: function () {
          var t = this.getDataset(),
            e = this.getMeta(),
            n = 0;
          return (
            ut.each(e.data, function (e, r) {
              isNaN(t.data[r]) || e.hidden || n++;
            }),
            n
          );
        },
        setHoverStyle: function (t) {
          var e = t._model,
            n = t._options,
            r = ut.getHoverColor,
            i = ut.valueOrDefault;
          (t.$previousStyle = {
            backgroundColor: e.backgroundColor,
            borderColor: e.borderColor,
            borderWidth: e.borderWidth,
          }),
            (e.backgroundColor = i(
              n.hoverBackgroundColor,
              r(n.backgroundColor)
            )),
            (e.borderColor = i(n.hoverBorderColor, r(n.borderColor))),
            (e.borderWidth = i(n.hoverBorderWidth, n.borderWidth));
        },
        _computeAngle: function (t) {
          var e = this,
            n = this.getMeta().count,
            r = e.getDataset(),
            i = e.getMeta();
          if (isNaN(r.data[t]) || i.data[t].hidden) return 0;
          var a = {
            chart: e.chart,
            dataIndex: t,
            dataset: r,
            datasetIndex: e.index,
          };
          return we(
            [e.chart.options.elements.arc.angle, (2 * Math.PI) / n],
            a,
            t
          );
        },
      });
      Q._set("pie", ut.clone(Q.doughnut)),
        Q._set("pie", { cutoutPercentage: 0 });
      var Ce = fe,
        Me = ut.valueOrDefault;
      Q._set("radar", {
        spanGaps: !1,
        scale: { type: "radialLinear" },
        elements: { line: { fill: "start", tension: 0 } },
      });
      var Se = St.extend({
        datasetElementType: Kt.Line,
        dataElementType: Kt.Point,
        linkScales: ut.noop,
        _datasetElementOptions: [
          "backgroundColor",
          "borderWidth",
          "borderColor",
          "borderCapStyle",
          "borderDash",
          "borderDashOffset",
          "borderJoinStyle",
          "fill",
        ],
        _dataElementOptions: {
          backgroundColor: "pointBackgroundColor",
          borderColor: "pointBorderColor",
          borderWidth: "pointBorderWidth",
          hitRadius: "pointHitRadius",
          hoverBackgroundColor: "pointHoverBackgroundColor",
          hoverBorderColor: "pointHoverBorderColor",
          hoverBorderWidth: "pointHoverBorderWidth",
          hoverRadius: "pointHoverRadius",
          pointStyle: "pointStyle",
          radius: "pointRadius",
          rotation: "pointRotation",
        },
        _getIndexScaleId: function () {
          return this.chart.scale.id;
        },
        _getValueScaleId: function () {
          return this.chart.scale.id;
        },
        update: function (t) {
          var e,
            n,
            r = this,
            i = r.getMeta(),
            a = i.dataset,
            o = i.data || [],
            s = r.chart.scale,
            l = r._config;
          for (
            void 0 !== l.tension &&
              void 0 === l.lineTension &&
              (l.lineTension = l.tension),
              a._scale = s,
              a._datasetIndex = r.index,
              a._children = o,
              a._loop = !0,
              a._model = r._resolveDatasetElementOptions(a),
              a.pivot(),
              e = 0,
              n = o.length;
            e < n;
            ++e
          )
            r.updateElement(o[e], e, t);
          for (r.updateBezierControlPoints(), e = 0, n = o.length; e < n; ++e)
            o[e].pivot();
        },
        updateElement: function (t, e, n) {
          var r = this,
            i = t.custom || {},
            a = r.getDataset(),
            o = r.chart.scale,
            s = o.getPointPositionForValue(e, a.data[e]),
            l = r._resolveDataElementOptions(t, e),
            u = r.getMeta().dataset._model,
            c = n ? o.xCenter : s.x,
            d = n ? o.yCenter : s.y;
          (t._scale = o),
            (t._options = l),
            (t._datasetIndex = r.index),
            (t._index = e),
            (t._model = {
              x: c,
              y: d,
              skip: i.skip || isNaN(c) || isNaN(d),
              radius: l.radius,
              pointStyle: l.pointStyle,
              rotation: l.rotation,
              backgroundColor: l.backgroundColor,
              borderColor: l.borderColor,
              borderWidth: l.borderWidth,
              tension: Me(i.tension, u ? u.tension : 0),
              hitRadius: l.hitRadius,
            });
        },
        _resolveDatasetElementOptions: function () {
          var t = this,
            e = t._config,
            n = t.chart.options,
            r = St.prototype._resolveDatasetElementOptions.apply(t, arguments);
          return (
            (r.spanGaps = Me(e.spanGaps, n.spanGaps)),
            (r.tension = Me(e.lineTension, n.elements.line.tension)),
            r
          );
        },
        updateBezierControlPoints: function () {
          var t,
            e,
            n,
            r,
            i = this,
            a = i.getMeta(),
            o = i.chart.chartArea,
            s = a.data || [];
          function l(t, e, n) {
            return Math.max(Math.min(t, n), e);
          }
          for (
            a.dataset._model.spanGaps &&
              (s = s.filter(function (t) {
                return !t._model.skip;
              })),
              t = 0,
              e = s.length;
            t < e;
            ++t
          )
            (n = s[t]._model),
              (r = ut.splineCurve(
                ut.previousItem(s, t, !0)._model,
                n,
                ut.nextItem(s, t, !0)._model,
                n.tension
              )),
              (n.controlPointPreviousX = l(r.previous.x, o.left, o.right)),
              (n.controlPointPreviousY = l(r.previous.y, o.top, o.bottom)),
              (n.controlPointNextX = l(r.next.x, o.left, o.right)),
              (n.controlPointNextY = l(r.next.y, o.top, o.bottom));
        },
        setHoverStyle: function (t) {
          var e = t._model,
            n = t._options,
            r = ut.getHoverColor;
          (t.$previousStyle = {
            backgroundColor: e.backgroundColor,
            borderColor: e.borderColor,
            borderWidth: e.borderWidth,
            radius: e.radius,
          }),
            (e.backgroundColor = Me(
              n.hoverBackgroundColor,
              r(n.backgroundColor)
            )),
            (e.borderColor = Me(n.hoverBorderColor, r(n.borderColor))),
            (e.borderWidth = Me(n.hoverBorderWidth, n.borderWidth)),
            (e.radius = Me(n.hoverRadius, n.radius));
        },
      });
      Q._set("scatter", {
        hover: { mode: "single" },
        scales: {
          xAxes: [{ id: "x-axis-1", type: "linear", position: "bottom" }],
          yAxes: [{ id: "y-axis-1", type: "linear", position: "left" }],
        },
        tooltips: {
          callbacks: {
            title: function () {
              return "";
            },
            label: function (t) {
              return "(" + t.xLabel + ", " + t.yLabel + ")";
            },
          },
        },
      }),
        Q._set("global", { datasets: { scatter: { showLine: !1 } } });
      var Ae = _e,
        Pe = {
          bar: ae,
          bubble: le,
          doughnut: fe,
          horizontalBar: pe,
          line: _e,
          polarArea: ke,
          pie: Ce,
          radar: Se,
          scatter: Ae,
        };
      function De(t, e) {
        return t.native ? { x: t.x, y: t.y } : ut.getRelativePosition(t, e);
      }
      function Te(t, e) {
        var n,
          r,
          i,
          a,
          o,
          s,
          l = t._getSortedVisibleDatasetMetas();
        for (r = 0, a = l.length; r < a; ++r)
          for (n = l[r].data, i = 0, o = n.length; i < o; ++i)
            (s = n[i]), s._view.skip || e(s);
      }
      function Oe(t, e) {
        var n = [];
        return (
          Te(t, function (t) {
            t.inRange(e.x, e.y) && n.push(t);
          }),
          n
        );
      }
      function Ie(t, e, n, r) {
        var i = Number.POSITIVE_INFINITY,
          a = [];
        return (
          Te(t, function (t) {
            if (!n || t.inRange(e.x, e.y)) {
              var o = t.getCenterPoint(),
                s = r(e, o);
              s < i ? ((a = [t]), (i = s)) : s === i && a.push(t);
            }
          }),
          a
        );
      }
      function Fe(t) {
        var e = -1 !== t.indexOf("x"),
          n = -1 !== t.indexOf("y");
        return function (t, r) {
          var i = e ? Math.abs(t.x - r.x) : 0,
            a = n ? Math.abs(t.y - r.y) : 0;
          return Math.sqrt(Math.pow(i, 2) + Math.pow(a, 2));
        };
      }
      function Le(t, e, n) {
        var r = De(e, t);
        n.axis = n.axis || "x";
        var i = Fe(n.axis),
          a = n.intersect ? Oe(t, r) : Ie(t, r, !1, i),
          o = [];
        return a.length
          ? (t._getSortedVisibleDatasetMetas().forEach(function (t) {
              var e = t.data[a[0]._index];
              e && !e._view.skip && o.push(e);
            }),
            o)
          : [];
      }
      var Ee = {
          modes: {
            single: function (t, e) {
              var n = De(e, t),
                r = [];
              return (
                Te(t, function (t) {
                  if (t.inRange(n.x, n.y)) return r.push(t), r;
                }),
                r.slice(0, 1)
              );
            },
            label: Le,
            index: Le,
            dataset: function (t, e, n) {
              var r = De(e, t);
              n.axis = n.axis || "xy";
              var i = Fe(n.axis),
                a = n.intersect ? Oe(t, r) : Ie(t, r, !1, i);
              return (
                a.length > 0 && (a = t.getDatasetMeta(a[0]._datasetIndex).data),
                a
              );
            },
            "x-axis": function (t, e) {
              return Le(t, e, { intersect: !1 });
            },
            point: function (t, e) {
              var n = De(e, t);
              return Oe(t, n);
            },
            nearest: function (t, e, n) {
              var r = De(e, t);
              n.axis = n.axis || "xy";
              var i = Fe(n.axis);
              return Ie(t, r, n.intersect, i);
            },
            x: function (t, e, n) {
              var r = De(e, t),
                i = [],
                a = !1;
              return (
                Te(t, function (t) {
                  t.inXRange(r.x) && i.push(t), t.inRange(r.x, r.y) && (a = !0);
                }),
                n.intersect && !a && (i = []),
                i
              );
            },
            y: function (t, e, n) {
              var r = De(e, t),
                i = [],
                a = !1;
              return (
                Te(t, function (t) {
                  t.inYRange(r.y) && i.push(t), t.inRange(r.x, r.y) && (a = !0);
                }),
                n.intersect && !a && (i = []),
                i
              );
            },
          },
        },
        Ne = ut.extend;
      function Re(t, e) {
        return ut.where(t, function (t) {
          return t.pos === e;
        });
      }
      function ze(t, e) {
        return t.sort(function (t, n) {
          var r = e ? n : t,
            i = e ? t : n;
          return r.weight === i.weight
            ? r.index - i.index
            : r.weight - i.weight;
        });
      }
      function Be(t) {
        var e,
          n,
          r,
          i = [];
        for (e = 0, n = (t || []).length; e < n; ++e)
          (r = t[e]),
            i.push({
              index: e,
              box: r,
              pos: r.position,
              horizontal: r.isHorizontal(),
              weight: r.weight,
            });
        return i;
      }
      function Ve(t, e) {
        var n, r, i;
        for (n = 0, r = t.length; n < r; ++n)
          (i = t[n]),
            (i.width = i.horizontal
              ? i.box.fullWidth && e.availableWidth
              : e.vBoxMaxWidth),
            (i.height = i.horizontal && e.hBoxMaxHeight);
      }
      function $e(t) {
        var e = Be(t),
          n = ze(Re(e, "left"), !0),
          r = ze(Re(e, "right")),
          i = ze(Re(e, "top"), !0),
          a = ze(Re(e, "bottom"));
        return {
          leftAndTop: n.concat(i),
          rightAndBottom: r.concat(a),
          chartArea: Re(e, "chartArea"),
          vertical: n.concat(r),
          horizontal: i.concat(a),
        };
      }
      function We(t, e, n, r) {
        return Math.max(t[n], e[n]) + Math.max(t[r], e[r]);
      }
      function je(t, e, n) {
        var r,
          i,
          a = n.box,
          o = t.maxPadding;
        if (
          (n.size && (t[n.pos] -= n.size),
          (n.size = n.horizontal ? a.height : a.width),
          (t[n.pos] += n.size),
          a.getPadding)
        ) {
          var s = a.getPadding();
          (o.top = Math.max(o.top, s.top)),
            (o.left = Math.max(o.left, s.left)),
            (o.bottom = Math.max(o.bottom, s.bottom)),
            (o.right = Math.max(o.right, s.right));
        }
        if (
          ((r = e.outerWidth - We(o, t, "left", "right")),
          (i = e.outerHeight - We(o, t, "top", "bottom")),
          r !== t.w || i !== t.h)
        )
          return (t.w = r), (t.h = i), n.horizontal ? r !== t.w : i !== t.h;
      }
      function He(t) {
        var e = t.maxPadding;
        function n(n) {
          var r = Math.max(e[n] - t[n], 0);
          return (t[n] += r), r;
        }
        (t.y += n("top")), (t.x += n("left")), n("right"), n("bottom");
      }
      function qe(t, e) {
        var n = e.maxPadding;
        function r(t) {
          var r = { left: 0, top: 0, right: 0, bottom: 0 };
          return (
            t.forEach(function (t) {
              r[t] = Math.max(e[t], n[t]);
            }),
            r
          );
        }
        return r(t ? ["left", "right"] : ["top", "bottom"]);
      }
      function Ue(t, e, n) {
        var r,
          i,
          a,
          o,
          s,
          l,
          u = [];
        for (r = 0, i = t.length; r < i; ++r)
          (a = t[r]),
            (o = a.box),
            o.update(a.width || e.w, a.height || e.h, qe(a.horizontal, e)),
            je(e, n, a) && ((l = !0), u.length && (s = !0)),
            o.fullWidth || u.push(a);
        return (s && Ue(u, e, n)) || l;
      }
      function Ye(t, e, n) {
        var r,
          i,
          a,
          o,
          s = n.padding,
          l = e.x,
          u = e.y;
        for (r = 0, i = t.length; r < i; ++r)
          (a = t[r]),
            (o = a.box),
            a.horizontal
              ? ((o.left = o.fullWidth ? s.left : e.left),
                (o.right = o.fullWidth ? n.outerWidth - s.right : e.left + e.w),
                (o.top = u),
                (o.bottom = u + o.height),
                (o.width = o.right - o.left),
                (u = o.bottom))
              : ((o.left = l),
                (o.right = l + o.width),
                (o.top = e.top),
                (o.bottom = e.top + e.h),
                (o.height = o.bottom - o.top),
                (l = o.right));
        (e.x = l), (e.y = u);
      }
      Q._set("global", {
        layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } },
      });
      var Ge = {
          defaults: {},
          addBox: function (t, e) {
            t.boxes || (t.boxes = []),
              (e.fullWidth = e.fullWidth || !1),
              (e.position = e.position || "top"),
              (e.weight = e.weight || 0),
              (e._layers =
                e._layers ||
                function () {
                  return [
                    {
                      z: 0,
                      draw: function () {
                        e.draw.apply(e, arguments);
                      },
                    },
                  ];
                }),
              t.boxes.push(e);
          },
          removeBox: function (t, e) {
            var n = t.boxes ? t.boxes.indexOf(e) : -1;
            -1 !== n && t.boxes.splice(n, 1);
          },
          configure: function (t, e, n) {
            for (
              var r,
                i = ["fullWidth", "position", "weight"],
                a = i.length,
                o = 0;
              o < a;
              ++o
            )
              (r = i[o]), n.hasOwnProperty(r) && (e[r] = n[r]);
          },
          update: function (t, e, n) {
            if (t) {
              var r = t.options.layout || {},
                i = ut.options.toPadding(r.padding),
                a = e - i.width,
                o = n - i.height,
                s = $e(t.boxes),
                l = s.vertical,
                u = s.horizontal,
                c = Object.freeze({
                  outerWidth: e,
                  outerHeight: n,
                  padding: i,
                  availableWidth: a,
                  vBoxMaxWidth: a / 2 / l.length,
                  hBoxMaxHeight: o / 2,
                }),
                d = Ne(
                  { maxPadding: Ne({}, i), w: a, h: o, x: i.left, y: i.top },
                  i
                );
              Ve(l.concat(u), c),
                Ue(l, d, c),
                Ue(u, d, c) && Ue(l, d, c),
                He(d),
                Ye(s.leftAndTop, d, c),
                (d.x += d.w),
                (d.y += d.h),
                Ye(s.rightAndBottom, d, c),
                (t.chartArea = {
                  left: d.left,
                  top: d.top,
                  right: d.left + d.w,
                  bottom: d.top + d.h,
                }),
                ut.each(s.chartArea, function (e) {
                  var n = e.box;
                  Ne(n, t.chartArea), n.update(d.w, d.h);
                });
            }
          },
        },
        Ke = {
          acquireContext: function (t) {
            return (
              t && t.canvas && (t = t.canvas), (t && t.getContext("2d")) || null
            );
          },
        },
        Xe =
          "/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n",
        Qe = Object.freeze({ __proto__: null, default: Xe }),
        Ze = n(Qe),
        Je = "$chartjs",
        tn = "chartjs-",
        en = tn + "size-monitor",
        nn = tn + "render-monitor",
        rn = tn + "render-animation",
        an = ["animationstart", "webkitAnimationStart"],
        on = {
          touchstart: "mousedown",
          touchmove: "mousemove",
          touchend: "mouseup",
          pointerenter: "mouseenter",
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointerleave: "mouseout",
          pointerout: "mouseout",
        };
      function sn(t, e) {
        var n = ut.getStyle(t, e),
          r = n && n.match(/^(\d+)(\.\d+)?px$/);
        return r ? Number(r[1]) : void 0;
      }
      function ln(t, e) {
        var n = t.style,
          r = t.getAttribute("height"),
          i = t.getAttribute("width");
        if (
          ((t[Je] = {
            initial: {
              height: r,
              width: i,
              style: { display: n.display, height: n.height, width: n.width },
            },
          }),
          (n.display = n.display || "block"),
          null === i || "" === i)
        ) {
          var a = sn(t, "width");
          void 0 !== a && (t.width = a);
        }
        if (null === r || "" === r)
          if ("" === t.style.height)
            t.height = t.width / (e.options.aspectRatio || 2);
          else {
            var o = sn(t, "height");
            void 0 !== a && (t.height = o);
          }
        return t;
      }
      var un = (function () {
          var t = !1;
          try {
            var e = Object.defineProperty({}, "passive", {
              get: function () {
                t = !0;
              },
            });
            window.addEventListener("e", null, e);
          } catch (n) {}
          return t;
        })(),
        cn = !!un && { passive: !0 };
      function dn(t, e, n) {
        t.addEventListener(e, n, cn);
      }
      function hn(t, e, n) {
        t.removeEventListener(e, n, cn);
      }
      function fn(t, e, n, r, i) {
        return {
          type: t,
          chart: e,
          native: i || null,
          x: void 0 !== n ? n : null,
          y: void 0 !== r ? r : null,
        };
      }
      function pn(t, e) {
        var n = on[t.type] || t.type,
          r = ut.getRelativePosition(t, e);
        return fn(n, e, r.x, r.y, t);
      }
      function gn(t, e) {
        var n = !1,
          r = [];
        return function () {
          (r = Array.prototype.slice.call(arguments)),
            (e = e || this),
            n ||
              ((n = !0),
              ut.requestAnimFrame.call(window, function () {
                (n = !1), t.apply(e, r);
              }));
        };
      }
      function vn(t) {
        var e = document.createElement("div");
        return (e.className = t || ""), e;
      }
      function mn(t) {
        var e = 1e6,
          n = vn(en),
          r = vn(en + "-expand"),
          i = vn(en + "-shrink");
        r.appendChild(vn()),
          i.appendChild(vn()),
          n.appendChild(r),
          n.appendChild(i),
          (n._reset = function () {
            (r.scrollLeft = e),
              (r.scrollTop = e),
              (i.scrollLeft = e),
              (i.scrollTop = e);
          });
        var a = function () {
          n._reset(), t();
        };
        return (
          dn(r, "scroll", a.bind(r, "expand")),
          dn(i, "scroll", a.bind(i, "shrink")),
          n
        );
      }
      function bn(t, e) {
        var n = t[Je] || (t[Je] = {}),
          r = (n.renderProxy = function (t) {
            t.animationName === rn && e();
          });
        ut.each(an, function (e) {
          dn(t, e, r);
        }),
          (n.reflow = !!t.offsetParent),
          t.classList.add(nn);
      }
      function yn(t) {
        var e = t[Je] || {},
          n = e.renderProxy;
        n &&
          (ut.each(an, function (e) {
            hn(t, e, n);
          }),
          delete e.renderProxy),
          t.classList.remove(nn);
      }
      function xn(t, e, n) {
        var r = t[Je] || (t[Je] = {}),
          i = (r.resizer = mn(
            gn(function () {
              if (r.resizer) {
                var i = n.options.maintainAspectRatio && t.parentNode,
                  a = i ? i.clientWidth : 0;
                e(fn("resize", n)),
                  i && i.clientWidth < a && n.canvas && e(fn("resize", n));
              }
            })
          ));
        bn(t, function () {
          if (r.resizer) {
            var e = t.parentNode;
            e && e !== i.parentNode && e.insertBefore(i, e.firstChild),
              i._reset();
          }
        });
      }
      function _n(t) {
        var e = t[Je] || {},
          n = e.resizer;
        delete e.resizer,
          yn(t),
          n && n.parentNode && n.parentNode.removeChild(n);
      }
      function wn(t, e) {
        var n = t[Je] || (t[Je] = {});
        if (!n.containsStyles) {
          (n.containsStyles = !0), (e = "/* Chart.js */\n" + e);
          var r = document.createElement("style");
          r.setAttribute("type", "text/css"),
            r.appendChild(document.createTextNode(e)),
            t.appendChild(r);
        }
      }
      var kn = {
        disableCSSInjection: !1,
        _enabled:
          "undefined" !== typeof window && "undefined" !== typeof document,
        _ensureLoaded: function (t) {
          if (!this.disableCSSInjection) {
            var e = t.getRootNode ? t.getRootNode() : document,
              n = e.host ? e : document.head;
            wn(n, Ze);
          }
        },
        acquireContext: function (t, e) {
          "string" === typeof t
            ? (t = document.getElementById(t))
            : t.length && (t = t[0]),
            t && t.canvas && (t = t.canvas);
          var n = t && t.getContext && t.getContext("2d");
          return n && n.canvas === t
            ? (this._ensureLoaded(t), ln(t, e), n)
            : null;
        },
        releaseContext: function (t) {
          var e = t.canvas;
          if (e[Je]) {
            var n = e[Je].initial;
            ["height", "width"].forEach(function (t) {
              var r = n[t];
              ut.isNullOrUndef(r) ? e.removeAttribute(t) : e.setAttribute(t, r);
            }),
              ut.each(n.style || {}, function (t, n) {
                e.style[n] = t;
              }),
              (e.width = e.width),
              delete e[Je];
          }
        },
        addEventListener: function (t, e, n) {
          var r = t.canvas;
          if ("resize" !== e) {
            var i = n[Je] || (n[Je] = {}),
              a = i.proxies || (i.proxies = {}),
              o = (a[t.id + "_" + e] = function (e) {
                n(pn(e, t));
              });
            dn(r, e, o);
          } else xn(r, n, t);
        },
        removeEventListener: function (t, e, n) {
          var r = t.canvas;
          if ("resize" !== e) {
            var i = n[Je] || {},
              a = i.proxies || {},
              o = a[t.id + "_" + e];
            o && hn(r, e, o);
          } else _n(r);
        },
      };
      (ut.addEvent = dn), (ut.removeEvent = hn);
      var Cn = kn._enabled ? kn : Ke,
        Mn = ut.extend(
          {
            initialize: function () {},
            acquireContext: function () {},
            releaseContext: function () {},
            addEventListener: function () {},
            removeEventListener: function () {},
          },
          Cn
        );
      Q._set("global", { plugins: {} });
      var Sn = {
          _plugins: [],
          _cacheId: 0,
          register: function (t) {
            var e = this._plugins;
            [].concat(t).forEach(function (t) {
              -1 === e.indexOf(t) && e.push(t);
            }),
              this._cacheId++;
          },
          unregister: function (t) {
            var e = this._plugins;
            [].concat(t).forEach(function (t) {
              var n = e.indexOf(t);
              -1 !== n && e.splice(n, 1);
            }),
              this._cacheId++;
          },
          clear: function () {
            (this._plugins = []), this._cacheId++;
          },
          count: function () {
            return this._plugins.length;
          },
          getAll: function () {
            return this._plugins;
          },
          notify: function (t, e, n) {
            var r,
              i,
              a,
              o,
              s,
              l = this.descriptors(t),
              u = l.length;
            for (r = 0; r < u; ++r)
              if (
                ((i = l[r]),
                (a = i.plugin),
                (s = a[e]),
                "function" === typeof s &&
                  ((o = [t].concat(n || [])),
                  o.push(i.options),
                  !1 === s.apply(a, o)))
              )
                return !1;
            return !0;
          },
          descriptors: function (t) {
            var e = t.$plugins || (t.$plugins = {});
            if (e.id === this._cacheId) return e.descriptors;
            var n = [],
              r = [],
              i = (t && t.config) || {},
              a = (i.options && i.options.plugins) || {};
            return (
              this._plugins.concat(i.plugins || []).forEach(function (t) {
                var e = n.indexOf(t);
                if (-1 === e) {
                  var i = t.id,
                    o = a[i];
                  !1 !== o &&
                    (!0 === o && (o = ut.clone(Q.global.plugins[i])),
                    n.push(t),
                    r.push({ plugin: t, options: o || {} }));
                }
              }),
              (e.descriptors = r),
              (e.id = this._cacheId),
              r
            );
          },
          _invalidate: function (t) {
            delete t.$plugins;
          },
        },
        An = {
          constructors: {},
          defaults: {},
          registerScaleType: function (t, e, n) {
            (this.constructors[t] = e), (this.defaults[t] = ut.clone(n));
          },
          getScaleConstructor: function (t) {
            return this.constructors.hasOwnProperty(t)
              ? this.constructors[t]
              : void 0;
          },
          getScaleDefaults: function (t) {
            return this.defaults.hasOwnProperty(t)
              ? ut.merge({}, [Q.scale, this.defaults[t]])
              : {};
          },
          updateScaleDefaults: function (t, e) {
            var n = this;
            n.defaults.hasOwnProperty(t) &&
              (n.defaults[t] = ut.extend(n.defaults[t], e));
          },
          addScalesToLayout: function (t) {
            ut.each(t.scales, function (e) {
              (e.fullWidth = e.options.fullWidth),
                (e.position = e.options.position),
                (e.weight = e.options.weight),
                Ge.addBox(t, e);
            });
          },
        },
        Pn = ut.valueOrDefault,
        Dn = ut.rtl.getRtlAdapter;
      Q._set("global", {
        tooltips: {
          enabled: !0,
          custom: null,
          mode: "nearest",
          position: "average",
          intersect: !0,
          backgroundColor: "rgba(0,0,0,0.8)",
          titleFontStyle: "bold",
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleFontColor: "#fff",
          titleAlign: "left",
          bodySpacing: 2,
          bodyFontColor: "#fff",
          bodyAlign: "left",
          footerFontStyle: "bold",
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFontColor: "#fff",
          footerAlign: "left",
          yPadding: 6,
          xPadding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          multiKeyBackground: "#fff",
          displayColors: !0,
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          callbacks: {
            beforeTitle: ut.noop,
            title: function (t, e) {
              var n = "",
                r = e.labels,
                i = r ? r.length : 0;
              if (t.length > 0) {
                var a = t[0];
                a.label
                  ? (n = a.label)
                  : a.xLabel
                  ? (n = a.xLabel)
                  : i > 0 && a.index < i && (n = r[a.index]);
              }
              return n;
            },
            afterTitle: ut.noop,
            beforeBody: ut.noop,
            beforeLabel: ut.noop,
            label: function (t, e) {
              var n = e.datasets[t.datasetIndex].label || "";
              return (
                n && (n += ": "),
                ut.isNullOrUndef(t.value) ? (n += t.yLabel) : (n += t.value),
                n
              );
            },
            labelColor: function (t, e) {
              var n = e.getDatasetMeta(t.datasetIndex),
                r = n.data[t.index],
                i = r._view;
              return {
                borderColor: i.borderColor,
                backgroundColor: i.backgroundColor,
              };
            },
            labelTextColor: function () {
              return this._options.bodyFontColor;
            },
            afterLabel: ut.noop,
            afterBody: ut.noop,
            beforeFooter: ut.noop,
            footer: ut.noop,
            afterFooter: ut.noop,
          },
        },
      });
      var Tn = {
        average: function (t) {
          if (!t.length) return !1;
          var e,
            n,
            r = 0,
            i = 0,
            a = 0;
          for (e = 0, n = t.length; e < n; ++e) {
            var o = t[e];
            if (o && o.hasValue()) {
              var s = o.tooltipPosition();
              (r += s.x), (i += s.y), ++a;
            }
          }
          return { x: r / a, y: i / a };
        },
        nearest: function (t, e) {
          var n,
            r,
            i,
            a = e.x,
            o = e.y,
            s = Number.POSITIVE_INFINITY;
          for (n = 0, r = t.length; n < r; ++n) {
            var l = t[n];
            if (l && l.hasValue()) {
              var u = l.getCenterPoint(),
                c = ut.distanceBetweenPoints(e, u);
              c < s && ((s = c), (i = l));
            }
          }
          if (i) {
            var d = i.tooltipPosition();
            (a = d.x), (o = d.y);
          }
          return { x: a, y: o };
        },
      };
      function On(t, e) {
        return (
          e && (ut.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
        );
      }
      function In(t) {
        return ("string" === typeof t || t instanceof String) &&
          t.indexOf("\n") > -1
          ? t.split("\n")
          : t;
      }
      function Fn(t) {
        var e = t._xScale,
          n = t._yScale || t._scale,
          r = t._index,
          i = t._datasetIndex,
          a = t._chart.getDatasetMeta(i).controller,
          o = a._getIndexScale(),
          s = a._getValueScale();
        return {
          xLabel: e ? e.getLabelForIndex(r, i) : "",
          yLabel: n ? n.getLabelForIndex(r, i) : "",
          label: o ? "" + o.getLabelForIndex(r, i) : "",
          value: s ? "" + s.getLabelForIndex(r, i) : "",
          index: r,
          datasetIndex: i,
          x: t._model.x,
          y: t._model.y,
        };
      }
      function Ln(t) {
        var e = Q.global;
        return {
          xPadding: t.xPadding,
          yPadding: t.yPadding,
          xAlign: t.xAlign,
          yAlign: t.yAlign,
          rtl: t.rtl,
          textDirection: t.textDirection,
          bodyFontColor: t.bodyFontColor,
          _bodyFontFamily: Pn(t.bodyFontFamily, e.defaultFontFamily),
          _bodyFontStyle: Pn(t.bodyFontStyle, e.defaultFontStyle),
          _bodyAlign: t.bodyAlign,
          bodyFontSize: Pn(t.bodyFontSize, e.defaultFontSize),
          bodySpacing: t.bodySpacing,
          titleFontColor: t.titleFontColor,
          _titleFontFamily: Pn(t.titleFontFamily, e.defaultFontFamily),
          _titleFontStyle: Pn(t.titleFontStyle, e.defaultFontStyle),
          titleFontSize: Pn(t.titleFontSize, e.defaultFontSize),
          _titleAlign: t.titleAlign,
          titleSpacing: t.titleSpacing,
          titleMarginBottom: t.titleMarginBottom,
          footerFontColor: t.footerFontColor,
          _footerFontFamily: Pn(t.footerFontFamily, e.defaultFontFamily),
          _footerFontStyle: Pn(t.footerFontStyle, e.defaultFontStyle),
          footerFontSize: Pn(t.footerFontSize, e.defaultFontSize),
          _footerAlign: t.footerAlign,
          footerSpacing: t.footerSpacing,
          footerMarginTop: t.footerMarginTop,
          caretSize: t.caretSize,
          cornerRadius: t.cornerRadius,
          backgroundColor: t.backgroundColor,
          opacity: 0,
          legendColorBackground: t.multiKeyBackground,
          displayColors: t.displayColors,
          borderColor: t.borderColor,
          borderWidth: t.borderWidth,
        };
      }
      function En(t, e) {
        var n = t._chart.ctx,
          r = 2 * e.yPadding,
          i = 0,
          a = e.body,
          o = a.reduce(function (t, e) {
            return t + e.before.length + e.lines.length + e.after.length;
          }, 0);
        o += e.beforeBody.length + e.afterBody.length;
        var s = e.title.length,
          l = e.footer.length,
          u = e.titleFontSize,
          c = e.bodyFontSize,
          d = e.footerFontSize;
        (r += s * u),
          (r += s ? (s - 1) * e.titleSpacing : 0),
          (r += s ? e.titleMarginBottom : 0),
          (r += o * c),
          (r += o ? (o - 1) * e.bodySpacing : 0),
          (r += l ? e.footerMarginTop : 0),
          (r += l * d),
          (r += l ? (l - 1) * e.footerSpacing : 0);
        var h = 0,
          f = function (t) {
            i = Math.max(i, n.measureText(t).width + h);
          };
        return (
          (n.font = ut.fontString(u, e._titleFontStyle, e._titleFontFamily)),
          ut.each(e.title, f),
          (n.font = ut.fontString(c, e._bodyFontStyle, e._bodyFontFamily)),
          ut.each(e.beforeBody.concat(e.afterBody), f),
          (h = e.displayColors ? c + 2 : 0),
          ut.each(a, function (t) {
            ut.each(t.before, f), ut.each(t.lines, f), ut.each(t.after, f);
          }),
          (h = 0),
          (n.font = ut.fontString(d, e._footerFontStyle, e._footerFontFamily)),
          ut.each(e.footer, f),
          (i += 2 * e.xPadding),
          { width: i, height: r }
        );
      }
      function Nn(t, e) {
        var n,
          r,
          i,
          a,
          o,
          s = t._model,
          l = t._chart,
          u = t._chart.chartArea,
          c = "center",
          d = "center";
        s.y < e.height
          ? (d = "top")
          : s.y > l.height - e.height && (d = "bottom");
        var h = (u.left + u.right) / 2,
          f = (u.top + u.bottom) / 2;
        "center" === d
          ? ((n = function (t) {
              return t <= h;
            }),
            (r = function (t) {
              return t > h;
            }))
          : ((n = function (t) {
              return t <= e.width / 2;
            }),
            (r = function (t) {
              return t >= l.width - e.width / 2;
            })),
          (i = function (t) {
            return t + e.width + s.caretSize + s.caretPadding > l.width;
          }),
          (a = function (t) {
            return t - e.width - s.caretSize - s.caretPadding < 0;
          }),
          (o = function (t) {
            return t <= f ? "top" : "bottom";
          }),
          n(s.x)
            ? ((c = "left"), i(s.x) && ((c = "center"), (d = o(s.y))))
            : r(s.x) &&
              ((c = "right"), a(s.x) && ((c = "center"), (d = o(s.y))));
        var p = t._options;
        return {
          xAlign: p.xAlign ? p.xAlign : c,
          yAlign: p.yAlign ? p.yAlign : d,
        };
      }
      function Rn(t, e, n, r) {
        var i = t.x,
          a = t.y,
          o = t.caretSize,
          s = t.caretPadding,
          l = t.cornerRadius,
          u = n.xAlign,
          c = n.yAlign,
          d = o + s,
          h = l + s;
        return (
          "right" === u
            ? (i -= e.width)
            : "center" === u &&
              ((i -= e.width / 2),
              i + e.width > r.width && (i = r.width - e.width),
              i < 0 && (i = 0)),
          "top" === c
            ? (a += d)
            : (a -= "bottom" === c ? e.height + d : e.height / 2),
          "center" === c
            ? "left" === u
              ? (i += d)
              : "right" === u && (i -= d)
            : "left" === u
            ? (i -= h)
            : "right" === u && (i += h),
          { x: i, y: a }
        );
      }
      function zn(t, e) {
        return "center" === e
          ? t.x + t.width / 2
          : "right" === e
          ? t.x + t.width - t.xPadding
          : t.x + t.xPadding;
      }
      function Bn(t) {
        return On([], In(t));
      }
      var Vn = mt.extend({
          initialize: function () {
            (this._model = Ln(this._options)), (this._lastActive = []);
          },
          getTitle: function () {
            var t = this,
              e = t._options,
              n = e.callbacks,
              r = n.beforeTitle.apply(t, arguments),
              i = n.title.apply(t, arguments),
              a = n.afterTitle.apply(t, arguments),
              o = [];
            return (
              (o = On(o, In(r))), (o = On(o, In(i))), (o = On(o, In(a))), o
            );
          },
          getBeforeBody: function () {
            return Bn(
              this._options.callbacks.beforeBody.apply(this, arguments)
            );
          },
          getBody: function (t, e) {
            var n = this,
              r = n._options.callbacks,
              i = [];
            return (
              ut.each(t, function (t) {
                var a = { before: [], lines: [], after: [] };
                On(a.before, In(r.beforeLabel.call(n, t, e))),
                  On(a.lines, r.label.call(n, t, e)),
                  On(a.after, In(r.afterLabel.call(n, t, e))),
                  i.push(a);
              }),
              i
            );
          },
          getAfterBody: function () {
            return Bn(this._options.callbacks.afterBody.apply(this, arguments));
          },
          getFooter: function () {
            var t = this,
              e = t._options.callbacks,
              n = e.beforeFooter.apply(t, arguments),
              r = e.footer.apply(t, arguments),
              i = e.afterFooter.apply(t, arguments),
              a = [];
            return (
              (a = On(a, In(n))), (a = On(a, In(r))), (a = On(a, In(i))), a
            );
          },
          update: function (t) {
            var e,
              n,
              r = this,
              i = r._options,
              a = r._model,
              o = (r._model = Ln(i)),
              s = r._active,
              l = r._data,
              u = { xAlign: a.xAlign, yAlign: a.yAlign },
              c = { x: a.x, y: a.y },
              d = { width: a.width, height: a.height },
              h = { x: a.caretX, y: a.caretY };
            if (s.length) {
              o.opacity = 1;
              var f = [],
                p = [];
              h = Tn[i.position].call(r, s, r._eventPosition);
              var g = [];
              for (e = 0, n = s.length; e < n; ++e) g.push(Fn(s[e]));
              i.filter &&
                (g = g.filter(function (t) {
                  return i.filter(t, l);
                })),
                i.itemSort &&
                  (g = g.sort(function (t, e) {
                    return i.itemSort(t, e, l);
                  })),
                ut.each(g, function (t) {
                  f.push(i.callbacks.labelColor.call(r, t, r._chart)),
                    p.push(i.callbacks.labelTextColor.call(r, t, r._chart));
                }),
                (o.title = r.getTitle(g, l)),
                (o.beforeBody = r.getBeforeBody(g, l)),
                (o.body = r.getBody(g, l)),
                (o.afterBody = r.getAfterBody(g, l)),
                (o.footer = r.getFooter(g, l)),
                (o.x = h.x),
                (o.y = h.y),
                (o.caretPadding = i.caretPadding),
                (o.labelColors = f),
                (o.labelTextColors = p),
                (o.dataPoints = g),
                (d = En(this, o)),
                (u = Nn(this, d)),
                (c = Rn(o, d, u, r._chart));
            } else o.opacity = 0;
            return (
              (o.xAlign = u.xAlign),
              (o.yAlign = u.yAlign),
              (o.x = c.x),
              (o.y = c.y),
              (o.width = d.width),
              (o.height = d.height),
              (o.caretX = h.x),
              (o.caretY = h.y),
              (r._model = o),
              t && i.custom && i.custom.call(r, o),
              r
            );
          },
          drawCaret: function (t, e) {
            var n = this._chart.ctx,
              r = this._view,
              i = this.getCaretPosition(t, e, r);
            n.lineTo(i.x1, i.y1), n.lineTo(i.x2, i.y2), n.lineTo(i.x3, i.y3);
          },
          getCaretPosition: function (t, e, n) {
            var r,
              i,
              a,
              o,
              s,
              l,
              u = n.caretSize,
              c = n.cornerRadius,
              d = n.xAlign,
              h = n.yAlign,
              f = t.x,
              p = t.y,
              g = e.width,
              v = e.height;
            if ("center" === h)
              (s = p + v / 2),
                "left" === d
                  ? ((r = f), (i = r - u), (a = r), (o = s + u), (l = s - u))
                  : ((r = f + g),
                    (i = r + u),
                    (a = r),
                    (o = s - u),
                    (l = s + u));
            else if (
              ("left" === d
                ? ((i = f + c + u), (r = i - u), (a = i + u))
                : "right" === d
                ? ((i = f + g - c - u), (r = i - u), (a = i + u))
                : ((i = n.caretX), (r = i - u), (a = i + u)),
              "top" === h)
            )
              (o = p), (s = o - u), (l = o);
            else {
              (o = p + v), (s = o + u), (l = o);
              var m = a;
              (a = r), (r = m);
            }
            return { x1: r, x2: i, x3: a, y1: o, y2: s, y3: l };
          },
          drawTitle: function (t, e, n) {
            var r,
              i,
              a,
              o = e.title,
              s = o.length;
            if (s) {
              var l = Dn(e.rtl, e.x, e.width);
              for (
                t.x = zn(e, e._titleAlign),
                  n.textAlign = l.textAlign(e._titleAlign),
                  n.textBaseline = "middle",
                  r = e.titleFontSize,
                  i = e.titleSpacing,
                  n.fillStyle = e.titleFontColor,
                  n.font = ut.fontString(
                    r,
                    e._titleFontStyle,
                    e._titleFontFamily
                  ),
                  a = 0;
                a < s;
                ++a
              )
                n.fillText(o[a], l.x(t.x), t.y + r / 2),
                  (t.y += r + i),
                  a + 1 === s && (t.y += e.titleMarginBottom - i);
            }
          },
          drawBody: function (t, e, n) {
            var r,
              i,
              a,
              o,
              s,
              l,
              u,
              c,
              d = e.bodyFontSize,
              h = e.bodySpacing,
              f = e._bodyAlign,
              p = e.body,
              g = e.displayColors,
              v = 0,
              m = g ? zn(e, "left") : 0,
              b = Dn(e.rtl, e.x, e.width),
              y = function (e) {
                n.fillText(e, b.x(t.x + v), t.y + d / 2), (t.y += d + h);
              },
              x = b.textAlign(f);
            for (
              n.textAlign = f,
                n.textBaseline = "middle",
                n.font = ut.fontString(d, e._bodyFontStyle, e._bodyFontFamily),
                t.x = zn(e, x),
                n.fillStyle = e.bodyFontColor,
                ut.each(e.beforeBody, y),
                v =
                  g && "right" !== x ? ("center" === f ? d / 2 + 1 : d + 2) : 0,
                s = 0,
                u = p.length;
              s < u;
              ++s
            ) {
              for (
                r = p[s],
                  i = e.labelTextColors[s],
                  a = e.labelColors[s],
                  n.fillStyle = i,
                  ut.each(r.before, y),
                  o = r.lines,
                  l = 0,
                  c = o.length;
                l < c;
                ++l
              ) {
                if (g) {
                  var _ = b.x(m);
                  (n.fillStyle = e.legendColorBackground),
                    n.fillRect(b.leftForLtr(_, d), t.y, d, d),
                    (n.lineWidth = 1),
                    (n.strokeStyle = a.borderColor),
                    n.strokeRect(b.leftForLtr(_, d), t.y, d, d),
                    (n.fillStyle = a.backgroundColor),
                    n.fillRect(
                      b.leftForLtr(b.xPlus(_, 1), d - 2),
                      t.y + 1,
                      d - 2,
                      d - 2
                    ),
                    (n.fillStyle = i);
                }
                y(o[l]);
              }
              ut.each(r.after, y);
            }
            (v = 0), ut.each(e.afterBody, y), (t.y -= h);
          },
          drawFooter: function (t, e, n) {
            var r,
              i,
              a = e.footer,
              o = a.length;
            if (o) {
              var s = Dn(e.rtl, e.x, e.width);
              for (
                t.x = zn(e, e._footerAlign),
                  t.y += e.footerMarginTop,
                  n.textAlign = s.textAlign(e._footerAlign),
                  n.textBaseline = "middle",
                  r = e.footerFontSize,
                  n.fillStyle = e.footerFontColor,
                  n.font = ut.fontString(
                    r,
                    e._footerFontStyle,
                    e._footerFontFamily
                  ),
                  i = 0;
                i < o;
                ++i
              )
                n.fillText(a[i], s.x(t.x), t.y + r / 2),
                  (t.y += r + e.footerSpacing);
            }
          },
          drawBackground: function (t, e, n, r) {
            (n.fillStyle = e.backgroundColor),
              (n.strokeStyle = e.borderColor),
              (n.lineWidth = e.borderWidth);
            var i = e.xAlign,
              a = e.yAlign,
              o = t.x,
              s = t.y,
              l = r.width,
              u = r.height,
              c = e.cornerRadius;
            n.beginPath(),
              n.moveTo(o + c, s),
              "top" === a && this.drawCaret(t, r),
              n.lineTo(o + l - c, s),
              n.quadraticCurveTo(o + l, s, o + l, s + c),
              "center" === a && "right" === i && this.drawCaret(t, r),
              n.lineTo(o + l, s + u - c),
              n.quadraticCurveTo(o + l, s + u, o + l - c, s + u),
              "bottom" === a && this.drawCaret(t, r),
              n.lineTo(o + c, s + u),
              n.quadraticCurveTo(o, s + u, o, s + u - c),
              "center" === a && "left" === i && this.drawCaret(t, r),
              n.lineTo(o, s + c),
              n.quadraticCurveTo(o, s, o + c, s),
              n.closePath(),
              n.fill(),
              e.borderWidth > 0 && n.stroke();
          },
          draw: function () {
            var t = this._chart.ctx,
              e = this._view;
            if (0 !== e.opacity) {
              var n = { width: e.width, height: e.height },
                r = { x: e.x, y: e.y },
                i = Math.abs(e.opacity < 0.001) ? 0 : e.opacity,
                a =
                  e.title.length ||
                  e.beforeBody.length ||
                  e.body.length ||
                  e.afterBody.length ||
                  e.footer.length;
              this._options.enabled &&
                a &&
                (t.save(),
                (t.globalAlpha = i),
                this.drawBackground(r, e, t, n),
                (r.y += e.yPadding),
                ut.rtl.overrideTextDirection(t, e.textDirection),
                this.drawTitle(r, e, t),
                this.drawBody(r, e, t),
                this.drawFooter(r, e, t),
                ut.rtl.restoreTextDirection(t, e.textDirection),
                t.restore());
            }
          },
          handleEvent: function (t) {
            var e = this,
              n = e._options,
              r = !1;
            return (
              (e._lastActive = e._lastActive || []),
              "mouseout" === t.type
                ? (e._active = [])
                : ((e._active = e._chart.getElementsAtEventForMode(
                    t,
                    n.mode,
                    n
                  )),
                  n.reverse && e._active.reverse()),
              (r = !ut.arrayEquals(e._active, e._lastActive)),
              r &&
                ((e._lastActive = e._active),
                (n.enabled || n.custom) &&
                  ((e._eventPosition = { x: t.x, y: t.y }),
                  e.update(!0),
                  e.pivot())),
              r
            );
          },
        }),
        $n = Tn,
        Wn = Vn;
      Wn.positioners = $n;
      var jn = ut.valueOrDefault;
      function Hn() {
        return ut.merge({}, [].slice.call(arguments), {
          merger: function (t, e, n, r) {
            if ("xAxes" === t || "yAxes" === t) {
              var i,
                a,
                o,
                s = n[t].length;
              for (e[t] || (e[t] = []), i = 0; i < s; ++i)
                (o = n[t][i]),
                  (a = jn(o.type, "xAxes" === t ? "category" : "linear")),
                  i >= e[t].length && e[t].push({}),
                  !e[t][i].type || (o.type && o.type !== e[t][i].type)
                    ? ut.merge(e[t][i], [An.getScaleDefaults(a), o])
                    : ut.merge(e[t][i], o);
            } else ut._merger(t, e, n, r);
          },
        });
      }
      function qn() {
        return ut.merge({}, [].slice.call(arguments), {
          merger: function (t, e, n, r) {
            var i = e[t] || {},
              a = n[t];
            "scales" === t
              ? (e[t] = Hn(i, a))
              : "scale" === t
              ? (e[t] = ut.merge(i, [An.getScaleDefaults(a.type), a]))
              : ut._merger(t, e, n, r);
          },
        });
      }
      function Un(t) {
        t = t || {};
        var e = (t.data = t.data || {});
        return (
          (e.datasets = e.datasets || []),
          (e.labels = e.labels || []),
          (t.options = qn(Q.global, Q[t.type], t.options || {})),
          t
        );
      }
      function Yn(t) {
        var e = t.options;
        ut.each(t.scales, function (e) {
          Ge.removeBox(t, e);
        }),
          (e = qn(Q.global, Q[t.config.type], e)),
          (t.options = t.config.options = e),
          t.ensureScalesHaveIDs(),
          t.buildOrUpdateScales(),
          (t.tooltip._options = e.tooltips),
          t.tooltip.initialize();
      }
      function Gn(t, e, n) {
        var r,
          i = function (t) {
            return t.id === r;
          };
        do {
          r = e + n++;
        } while (ut.findIndex(t, i) >= 0);
        return r;
      }
      function Kn(t) {
        return "top" === t || "bottom" === t;
      }
      function Xn(t, e) {
        return function (n, r) {
          return n[t] === r[t] ? n[e] - r[e] : n[t] - r[t];
        };
      }
      Q._set("global", {
        elements: {},
        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
        hover: {
          onHover: null,
          mode: "nearest",
          intersect: !0,
          animationDuration: 400,
        },
        onClick: null,
        maintainAspectRatio: !0,
        responsive: !0,
        responsiveAnimationDuration: 0,
      });
      var Qn = function (t, e) {
        return this.construct(t, e), this;
      };
      ut.extend(Qn.prototype, {
        construct: function (t, e) {
          var n = this;
          e = Un(e);
          var r = Mn.acquireContext(t, e),
            i = r && r.canvas,
            a = i && i.height,
            o = i && i.width;
          (n.id = ut.uid()),
            (n.ctx = r),
            (n.canvas = i),
            (n.config = e),
            (n.width = o),
            (n.height = a),
            (n.aspectRatio = a ? o / a : null),
            (n.options = e.options),
            (n._bufferedRender = !1),
            (n._layers = []),
            (n.chart = n),
            (n.controller = n),
            (Qn.instances[n.id] = n),
            Object.defineProperty(n, "data", {
              get: function () {
                return n.config.data;
              },
              set: function (t) {
                n.config.data = t;
              },
            }),
            r && i
              ? (n.initialize(), n.update())
              : console.error(
                  "Failed to create chart: can't acquire context from the given item"
                );
        },
        initialize: function () {
          var t = this;
          return (
            Sn.notify(t, "beforeInit"),
            ut.retinaScale(t, t.options.devicePixelRatio),
            t.bindEvents(),
            t.options.responsive && t.resize(!0),
            t.initToolTip(),
            Sn.notify(t, "afterInit"),
            t
          );
        },
        clear: function () {
          return ut.canvas.clear(this), this;
        },
        stop: function () {
          return xt.cancelAnimation(this), this;
        },
        resize: function (t) {
          var e = this,
            n = e.options,
            r = e.canvas,
            i = (n.maintainAspectRatio && e.aspectRatio) || null,
            a = Math.max(0, Math.floor(ut.getMaximumWidth(r))),
            o = Math.max(0, Math.floor(i ? a / i : ut.getMaximumHeight(r)));
          if (
            (e.width !== a || e.height !== o) &&
            ((r.width = e.width = a),
            (r.height = e.height = o),
            (r.style.width = a + "px"),
            (r.style.height = o + "px"),
            ut.retinaScale(e, n.devicePixelRatio),
            !t)
          ) {
            var s = { width: a, height: o };
            Sn.notify(e, "resize", [s]),
              n.onResize && n.onResize(e, s),
              e.stop(),
              e.update({ duration: n.responsiveAnimationDuration });
          }
        },
        ensureScalesHaveIDs: function () {
          var t = this.options,
            e = t.scales || {},
            n = t.scale;
          ut.each(e.xAxes, function (t, n) {
            t.id || (t.id = Gn(e.xAxes, "x-axis-", n));
          }),
            ut.each(e.yAxes, function (t, n) {
              t.id || (t.id = Gn(e.yAxes, "y-axis-", n));
            }),
            n && (n.id = n.id || "scale");
        },
        buildOrUpdateScales: function () {
          var t = this,
            e = t.options,
            n = t.scales || {},
            r = [],
            i = Object.keys(n).reduce(function (t, e) {
              return (t[e] = !1), t;
            }, {});
          e.scales &&
            (r = r.concat(
              (e.scales.xAxes || []).map(function (t) {
                return { options: t, dtype: "category", dposition: "bottom" };
              }),
              (e.scales.yAxes || []).map(function (t) {
                return { options: t, dtype: "linear", dposition: "left" };
              })
            )),
            e.scale &&
              r.push({
                options: e.scale,
                dtype: "radialLinear",
                isDefault: !0,
                dposition: "chartArea",
              }),
            ut.each(r, function (e) {
              var r = e.options,
                a = r.id,
                o = jn(r.type, e.dtype);
              Kn(r.position) !== Kn(e.dposition) && (r.position = e.dposition),
                (i[a] = !0);
              var s = null;
              if (a in n && n[a].type === o)
                (s = n[a]), (s.options = r), (s.ctx = t.ctx), (s.chart = t);
              else {
                var l = An.getScaleConstructor(o);
                if (!l) return;
                (s = new l({
                  id: a,
                  type: o,
                  options: r,
                  ctx: t.ctx,
                  chart: t,
                })),
                  (n[s.id] = s);
              }
              s.mergeTicksOptions(), e.isDefault && (t.scale = s);
            }),
            ut.each(i, function (t, e) {
              t || delete n[e];
            }),
            (t.scales = n),
            An.addScalesToLayout(this);
        },
        buildOrUpdateControllers: function () {
          var t,
            e,
            n = this,
            r = [],
            i = n.data.datasets;
          for (t = 0, e = i.length; t < e; t++) {
            var a = i[t],
              o = n.getDatasetMeta(t),
              s = a.type || n.config.type;
            if (
              (o.type &&
                o.type !== s &&
                (n.destroyDatasetMeta(t), (o = n.getDatasetMeta(t))),
              (o.type = s),
              (o.order = a.order || 0),
              (o.index = t),
              o.controller)
            )
              o.controller.updateIndex(t), o.controller.linkScales();
            else {
              var l = Pe[o.type];
              if (void 0 === l)
                throw new Error('"' + o.type + '" is not a chart type.');
              (o.controller = new l(n, t)), r.push(o.controller);
            }
          }
          return r;
        },
        resetElements: function () {
          var t = this;
          ut.each(
            t.data.datasets,
            function (e, n) {
              t.getDatasetMeta(n).controller.reset();
            },
            t
          );
        },
        reset: function () {
          this.resetElements(), this.tooltip.initialize();
        },
        update: function (t) {
          var e,
            n,
            r = this;
          if (
            ((t && "object" === typeof t) ||
              (t = { duration: t, lazy: arguments[1] }),
            Yn(r),
            Sn._invalidate(r),
            !1 !== Sn.notify(r, "beforeUpdate"))
          ) {
            r.tooltip._data = r.data;
            var i = r.buildOrUpdateControllers();
            for (e = 0, n = r.data.datasets.length; e < n; e++)
              r.getDatasetMeta(e).controller.buildOrUpdateElements();
            r.updateLayout(),
              r.options.animation &&
                r.options.animation.duration &&
                ut.each(i, function (t) {
                  t.reset();
                }),
              r.updateDatasets(),
              r.tooltip.initialize(),
              (r.lastActive = []),
              Sn.notify(r, "afterUpdate"),
              r._layers.sort(Xn("z", "_idx")),
              r._bufferedRender
                ? (r._bufferedRequest = {
                    duration: t.duration,
                    easing: t.easing,
                    lazy: t.lazy,
                  })
                : r.render(t);
          }
        },
        updateLayout: function () {
          var t = this;
          !1 !== Sn.notify(t, "beforeLayout") &&
            (Ge.update(this, this.width, this.height),
            (t._layers = []),
            ut.each(
              t.boxes,
              function (e) {
                e._configure && e._configure(),
                  t._layers.push.apply(t._layers, e._layers());
              },
              t
            ),
            t._layers.forEach(function (t, e) {
              t._idx = e;
            }),
            Sn.notify(t, "afterScaleUpdate"),
            Sn.notify(t, "afterLayout"));
        },
        updateDatasets: function () {
          var t = this;
          if (!1 !== Sn.notify(t, "beforeDatasetsUpdate")) {
            for (var e = 0, n = t.data.datasets.length; e < n; ++e)
              t.updateDataset(e);
            Sn.notify(t, "afterDatasetsUpdate");
          }
        },
        updateDataset: function (t) {
          var e = this,
            n = e.getDatasetMeta(t),
            r = { meta: n, index: t };
          !1 !== Sn.notify(e, "beforeDatasetUpdate", [r]) &&
            (n.controller._update(), Sn.notify(e, "afterDatasetUpdate", [r]));
        },
        render: function (t) {
          var e = this;
          (t && "object" === typeof t) ||
            (t = { duration: t, lazy: arguments[1] });
          var n = e.options.animation,
            r = jn(t.duration, n && n.duration),
            i = t.lazy;
          if (!1 !== Sn.notify(e, "beforeRender")) {
            var a = function (t) {
              Sn.notify(e, "afterRender"),
                ut.callback(n && n.onComplete, [t], e);
            };
            if (n && r) {
              var o = new yt({
                numSteps: r / 16.66,
                easing: t.easing || n.easing,
                render: function (t, e) {
                  var n = ut.easing.effects[e.easing],
                    r = e.currentStep,
                    i = r / e.numSteps;
                  t.draw(n(i), i, r);
                },
                onAnimationProgress: n.onProgress,
                onAnimationComplete: a,
              });
              xt.addAnimation(e, o, r, i);
            } else e.draw(), a(new yt({ numSteps: 0, chart: e }));
            return e;
          }
        },
        draw: function (t) {
          var e,
            n,
            r = this;
          if (
            (r.clear(),
            ut.isNullOrUndef(t) && (t = 1),
            r.transition(t),
            !(r.width <= 0 || r.height <= 0) &&
              !1 !== Sn.notify(r, "beforeDraw", [t]))
          ) {
            for (n = r._layers, e = 0; e < n.length && n[e].z <= 0; ++e)
              n[e].draw(r.chartArea);
            for (r.drawDatasets(t); e < n.length; ++e) n[e].draw(r.chartArea);
            r._drawTooltip(t), Sn.notify(r, "afterDraw", [t]);
          }
        },
        transition: function (t) {
          for (
            var e = this, n = 0, r = (e.data.datasets || []).length;
            n < r;
            ++n
          )
            e.isDatasetVisible(n) &&
              e.getDatasetMeta(n).controller.transition(t);
          e.tooltip.transition(t);
        },
        _getSortedDatasetMetas: function (t) {
          var e,
            n,
            r = this,
            i = r.data.datasets || [],
            a = [];
          for (e = 0, n = i.length; e < n; ++e)
            (t && !r.isDatasetVisible(e)) || a.push(r.getDatasetMeta(e));
          return a.sort(Xn("order", "index")), a;
        },
        _getSortedVisibleDatasetMetas: function () {
          return this._getSortedDatasetMetas(!0);
        },
        drawDatasets: function (t) {
          var e,
            n,
            r = this;
          if (!1 !== Sn.notify(r, "beforeDatasetsDraw", [t])) {
            for (
              e = r._getSortedVisibleDatasetMetas(), n = e.length - 1;
              n >= 0;
              --n
            )
              r.drawDataset(e[n], t);
            Sn.notify(r, "afterDatasetsDraw", [t]);
          }
        },
        drawDataset: function (t, e) {
          var n = this,
            r = { meta: t, index: t.index, easingValue: e };
          !1 !== Sn.notify(n, "beforeDatasetDraw", [r]) &&
            (t.controller.draw(e), Sn.notify(n, "afterDatasetDraw", [r]));
        },
        _drawTooltip: function (t) {
          var e = this,
            n = e.tooltip,
            r = { tooltip: n, easingValue: t };
          !1 !== Sn.notify(e, "beforeTooltipDraw", [r]) &&
            (n.draw(), Sn.notify(e, "afterTooltipDraw", [r]));
        },
        getElementAtEvent: function (t) {
          return Ee.modes.single(this, t);
        },
        getElementsAtEvent: function (t) {
          return Ee.modes.label(this, t, { intersect: !0 });
        },
        getElementsAtXAxis: function (t) {
          return Ee.modes["x-axis"](this, t, { intersect: !0 });
        },
        getElementsAtEventForMode: function (t, e, n) {
          var r = Ee.modes[e];
          return "function" === typeof r ? r(this, t, n) : [];
        },
        getDatasetAtEvent: function (t) {
          return Ee.modes.dataset(this, t, { intersect: !0 });
        },
        getDatasetMeta: function (t) {
          var e = this,
            n = e.data.datasets[t];
          n._meta || (n._meta = {});
          var r = n._meta[e.id];
          return (
            r ||
              (r = n._meta[e.id] =
                {
                  type: null,
                  data: [],
                  dataset: null,
                  controller: null,
                  hidden: null,
                  xAxisID: null,
                  yAxisID: null,
                  order: n.order || 0,
                  index: t,
                }),
            r
          );
        },
        getVisibleDatasetCount: function () {
          for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e)
            this.isDatasetVisible(e) && t++;
          return t;
        },
        isDatasetVisible: function (t) {
          var e = this.getDatasetMeta(t);
          return "boolean" === typeof e.hidden
            ? !e.hidden
            : !this.data.datasets[t].hidden;
        },
        generateLegend: function () {
          return this.options.legendCallback(this);
        },
        destroyDatasetMeta: function (t) {
          var e = this.id,
            n = this.data.datasets[t],
            r = n._meta && n._meta[e];
          r && (r.controller.destroy(), delete n._meta[e]);
        },
        destroy: function () {
          var t,
            e,
            n = this,
            r = n.canvas;
          for (n.stop(), t = 0, e = n.data.datasets.length; t < e; ++t)
            n.destroyDatasetMeta(t);
          r &&
            (n.unbindEvents(),
            ut.canvas.clear(n),
            Mn.releaseContext(n.ctx),
            (n.canvas = null),
            (n.ctx = null)),
            Sn.notify(n, "destroy"),
            delete Qn.instances[n.id];
        },
        toBase64Image: function () {
          return this.canvas.toDataURL.apply(this.canvas, arguments);
        },
        initToolTip: function () {
          var t = this;
          t.tooltip = new Wn(
            {
              _chart: t,
              _chartInstance: t,
              _data: t.data,
              _options: t.options.tooltips,
            },
            t
          );
        },
        bindEvents: function () {
          var t = this,
            e = (t._listeners = {}),
            n = function () {
              t.eventHandler.apply(t, arguments);
            };
          ut.each(t.options.events, function (r) {
            Mn.addEventListener(t, r, n), (e[r] = n);
          }),
            t.options.responsive &&
              ((n = function () {
                t.resize();
              }),
              Mn.addEventListener(t, "resize", n),
              (e.resize = n));
        },
        unbindEvents: function () {
          var t = this,
            e = t._listeners;
          e &&
            (delete t._listeners,
            ut.each(e, function (e, n) {
              Mn.removeEventListener(t, n, e);
            }));
        },
        updateHoverStyle: function (t, e, n) {
          var r,
            i,
            a,
            o = n ? "set" : "remove";
          for (i = 0, a = t.length; i < a; ++i)
            (r = t[i]),
              r &&
                this.getDatasetMeta(r._datasetIndex).controller[
                  o + "HoverStyle"
                ](r);
          "dataset" === e &&
            this.getDatasetMeta(t[0]._datasetIndex).controller[
              "_" + o + "DatasetHoverStyle"
            ]();
        },
        eventHandler: function (t) {
          var e = this,
            n = e.tooltip;
          if (!1 !== Sn.notify(e, "beforeEvent", [t])) {
            (e._bufferedRender = !0), (e._bufferedRequest = null);
            var r = e.handleEvent(t);
            n && (r = n._start ? n.handleEvent(t) : r | n.handleEvent(t)),
              Sn.notify(e, "afterEvent", [t]);
            var i = e._bufferedRequest;
            return (
              i
                ? e.render(i)
                : r &&
                  !e.animating &&
                  (e.stop(),
                  e.render({
                    duration: e.options.hover.animationDuration,
                    lazy: !0,
                  })),
              (e._bufferedRender = !1),
              (e._bufferedRequest = null),
              e
            );
          }
        },
        handleEvent: function (t) {
          var e = this,
            n = e.options || {},
            r = n.hover,
            i = !1;
          return (
            (e.lastActive = e.lastActive || []),
            "mouseout" === t.type
              ? (e.active = [])
              : (e.active = e.getElementsAtEventForMode(t, r.mode, r)),
            ut.callback(n.onHover || n.hover.onHover, [t.native, e.active], e),
            ("mouseup" !== t.type && "click" !== t.type) ||
              (n.onClick && n.onClick.call(e, t.native, e.active)),
            e.lastActive.length && e.updateHoverStyle(e.lastActive, r.mode, !1),
            e.active.length &&
              r.mode &&
              e.updateHoverStyle(e.active, r.mode, !0),
            (i = !ut.arrayEquals(e.active, e.lastActive)),
            (e.lastActive = e.active),
            i
          );
        },
      }),
        (Qn.instances = {});
      var Zn = Qn;
      (Qn.Controller = Qn),
        (Qn.types = {}),
        (ut.configMerge = qn),
        (ut.scaleMerge = Hn);
      var Jn = function () {
        function t(t, e, n) {
          var r;
          return (
            "string" === typeof t
              ? ((r = parseInt(t, 10)),
                -1 !== t.indexOf("%") && (r = (r / 100) * e.parentNode[n]))
              : (r = t),
            r
          );
        }
        function e(t) {
          return void 0 !== t && null !== t && "none" !== t;
        }
        function n(n, r, i) {
          var a = document.defaultView,
            o = ut._getParentNode(n),
            s = a.getComputedStyle(n)[r],
            l = a.getComputedStyle(o)[r],
            u = e(s),
            c = e(l),
            d = Number.POSITIVE_INFINITY;
          return u || c
            ? Math.min(u ? t(s, n, i) : d, c ? t(l, o, i) : d)
            : "none";
        }
        (ut.where = function (t, e) {
          if (ut.isArray(t) && Array.prototype.filter) return t.filter(e);
          var n = [];
          return (
            ut.each(t, function (t) {
              e(t) && n.push(t);
            }),
            n
          );
        }),
          (ut.findIndex = Array.prototype.findIndex
            ? function (t, e, n) {
                return t.findIndex(e, n);
              }
            : function (t, e, n) {
                n = void 0 === n ? t : n;
                for (var r = 0, i = t.length; r < i; ++r)
                  if (e.call(n, t[r], r, t)) return r;
                return -1;
              }),
          (ut.findNextWhere = function (t, e, n) {
            ut.isNullOrUndef(n) && (n = -1);
            for (var r = n + 1; r < t.length; r++) {
              var i = t[r];
              if (e(i)) return i;
            }
          }),
          (ut.findPreviousWhere = function (t, e, n) {
            ut.isNullOrUndef(n) && (n = t.length);
            for (var r = n - 1; r >= 0; r--) {
              var i = t[r];
              if (e(i)) return i;
            }
          }),
          (ut.isNumber = function (t) {
            return !isNaN(parseFloat(t)) && isFinite(t);
          }),
          (ut.almostEquals = function (t, e, n) {
            return Math.abs(t - e) < n;
          }),
          (ut.almostWhole = function (t, e) {
            var n = Math.round(t);
            return n - e <= t && n + e >= t;
          }),
          (ut.max = function (t) {
            return t.reduce(function (t, e) {
              return isNaN(e) ? t : Math.max(t, e);
            }, Number.NEGATIVE_INFINITY);
          }),
          (ut.min = function (t) {
            return t.reduce(function (t, e) {
              return isNaN(e) ? t : Math.min(t, e);
            }, Number.POSITIVE_INFINITY);
          }),
          (ut.sign = Math.sign
            ? function (t) {
                return Math.sign(t);
              }
            : function (t) {
                return (t = +t), 0 === t || isNaN(t) ? t : t > 0 ? 1 : -1;
              }),
          (ut.toRadians = function (t) {
            return t * (Math.PI / 180);
          }),
          (ut.toDegrees = function (t) {
            return t * (180 / Math.PI);
          }),
          (ut._decimalPlaces = function (t) {
            if (ut.isFinite(t)) {
              var e = 1,
                n = 0;
              while (Math.round(t * e) / e !== t) (e *= 10), n++;
              return n;
            }
          }),
          (ut.getAngleFromPoint = function (t, e) {
            var n = e.x - t.x,
              r = e.y - t.y,
              i = Math.sqrt(n * n + r * r),
              a = Math.atan2(r, n);
            return (
              a < -0.5 * Math.PI && (a += 2 * Math.PI),
              { angle: a, distance: i }
            );
          }),
          (ut.distanceBetweenPoints = function (t, e) {
            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
          }),
          (ut.aliasPixel = function (t) {
            return t % 2 === 0 ? 0 : 0.5;
          }),
          (ut._alignPixel = function (t, e, n) {
            var r = t.currentDevicePixelRatio,
              i = n / 2;
            return Math.round((e - i) * r) / r + i;
          }),
          (ut.splineCurve = function (t, e, n, r) {
            var i = t.skip ? e : t,
              a = e,
              o = n.skip ? e : n,
              s = Math.sqrt(Math.pow(a.x - i.x, 2) + Math.pow(a.y - i.y, 2)),
              l = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
              u = s / (s + l),
              c = l / (s + l);
            (u = isNaN(u) ? 0 : u), (c = isNaN(c) ? 0 : c);
            var d = r * u,
              h = r * c;
            return {
              previous: { x: a.x - d * (o.x - i.x), y: a.y - d * (o.y - i.y) },
              next: { x: a.x + h * (o.x - i.x), y: a.y + h * (o.y - i.y) },
            };
          }),
          (ut.EPSILON = Number.EPSILON || 1e-14),
          (ut.splineCurveMonotone = function (t) {
            var e,
              n,
              r,
              i,
              a,
              o,
              s,
              l,
              u,
              c = (t || []).map(function (t) {
                return { model: t._model, deltaK: 0, mK: 0 };
              }),
              d = c.length;
            for (e = 0; e < d; ++e)
              if (((r = c[e]), !r.model.skip)) {
                if (
                  ((n = e > 0 ? c[e - 1] : null),
                  (i = e < d - 1 ? c[e + 1] : null),
                  i && !i.model.skip)
                ) {
                  var h = i.model.x - r.model.x;
                  r.deltaK = 0 !== h ? (i.model.y - r.model.y) / h : 0;
                }
                !n || n.model.skip
                  ? (r.mK = r.deltaK)
                  : !i || i.model.skip
                  ? (r.mK = n.deltaK)
                  : this.sign(n.deltaK) !== this.sign(r.deltaK)
                  ? (r.mK = 0)
                  : (r.mK = (n.deltaK + r.deltaK) / 2);
              }
            for (e = 0; e < d - 1; ++e)
              (r = c[e]),
                (i = c[e + 1]),
                r.model.skip ||
                  i.model.skip ||
                  (ut.almostEquals(r.deltaK, 0, this.EPSILON)
                    ? (r.mK = i.mK = 0)
                    : ((a = r.mK / r.deltaK),
                      (o = i.mK / r.deltaK),
                      (l = Math.pow(a, 2) + Math.pow(o, 2)),
                      l <= 9 ||
                        ((s = 3 / Math.sqrt(l)),
                        (r.mK = a * s * r.deltaK),
                        (i.mK = o * s * r.deltaK))));
            for (e = 0; e < d; ++e)
              (r = c[e]),
                r.model.skip ||
                  ((n = e > 0 ? c[e - 1] : null),
                  (i = e < d - 1 ? c[e + 1] : null),
                  n &&
                    !n.model.skip &&
                    ((u = (r.model.x - n.model.x) / 3),
                    (r.model.controlPointPreviousX = r.model.x - u),
                    (r.model.controlPointPreviousY = r.model.y - u * r.mK)),
                  i &&
                    !i.model.skip &&
                    ((u = (i.model.x - r.model.x) / 3),
                    (r.model.controlPointNextX = r.model.x + u),
                    (r.model.controlPointNextY = r.model.y + u * r.mK)));
          }),
          (ut.nextItem = function (t, e, n) {
            return n
              ? e >= t.length - 1
                ? t[0]
                : t[e + 1]
              : e >= t.length - 1
              ? t[t.length - 1]
              : t[e + 1];
          }),
          (ut.previousItem = function (t, e, n) {
            return n
              ? e <= 0
                ? t[t.length - 1]
                : t[e - 1]
              : e <= 0
              ? t[0]
              : t[e - 1];
          }),
          (ut.niceNum = function (t, e) {
            var n,
              r = Math.floor(ut.log10(t)),
              i = t / Math.pow(10, r);
            return (
              (n = e
                ? i < 1.5
                  ? 1
                  : i < 3
                  ? 2
                  : i < 7
                  ? 5
                  : 10
                : i <= 1
                ? 1
                : i <= 2
                ? 2
                : i <= 5
                ? 5
                : 10),
              n * Math.pow(10, r)
            );
          }),
          (ut.requestAnimFrame = (function () {
            return "undefined" === typeof window
              ? function (t) {
                  t();
                }
              : window.requestAnimationFrame ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame ||
                  window.oRequestAnimationFrame ||
                  window.msRequestAnimationFrame ||
                  function (t) {
                    return window.setTimeout(t, 1e3 / 60);
                  };
          })()),
          (ut.getRelativePosition = function (t, e) {
            var n,
              r,
              i = t.originalEvent || t,
              a = t.target || t.srcElement,
              o = a.getBoundingClientRect(),
              s = i.touches;
            s && s.length > 0
              ? ((n = s[0].clientX), (r = s[0].clientY))
              : ((n = i.clientX), (r = i.clientY));
            var l = parseFloat(ut.getStyle(a, "padding-left")),
              u = parseFloat(ut.getStyle(a, "padding-top")),
              c = parseFloat(ut.getStyle(a, "padding-right")),
              d = parseFloat(ut.getStyle(a, "padding-bottom")),
              h = o.right - o.left - l - c,
              f = o.bottom - o.top - u - d;
            return (
              (n = Math.round(
                (((n - o.left - l) / h) * a.width) / e.currentDevicePixelRatio
              )),
              (r = Math.round(
                (((r - o.top - u) / f) * a.height) / e.currentDevicePixelRatio
              )),
              { x: n, y: r }
            );
          }),
          (ut.getConstraintWidth = function (t) {
            return n(t, "max-width", "clientWidth");
          }),
          (ut.getConstraintHeight = function (t) {
            return n(t, "max-height", "clientHeight");
          }),
          (ut._calculatePadding = function (t, e, n) {
            return (
              (e = ut.getStyle(t, e)),
              e.indexOf("%") > -1
                ? (n * parseInt(e, 10)) / 100
                : parseInt(e, 10)
            );
          }),
          (ut._getParentNode = function (t) {
            var e = t.parentNode;
            return (
              e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
            );
          }),
          (ut.getMaximumWidth = function (t) {
            var e = ut._getParentNode(t);
            if (!e) return t.clientWidth;
            var n = e.clientWidth,
              r = ut._calculatePadding(e, "padding-left", n),
              i = ut._calculatePadding(e, "padding-right", n),
              a = n - r - i,
              o = ut.getConstraintWidth(t);
            return isNaN(o) ? a : Math.min(a, o);
          }),
          (ut.getMaximumHeight = function (t) {
            var e = ut._getParentNode(t);
            if (!e) return t.clientHeight;
            var n = e.clientHeight,
              r = ut._calculatePadding(e, "padding-top", n),
              i = ut._calculatePadding(e, "padding-bottom", n),
              a = n - r - i,
              o = ut.getConstraintHeight(t);
            return isNaN(o) ? a : Math.min(a, o);
          }),
          (ut.getStyle = function (t, e) {
            return t.currentStyle
              ? t.currentStyle[e]
              : document.defaultView
                  .getComputedStyle(t, null)
                  .getPropertyValue(e);
          }),
          (ut.retinaScale = function (t, e) {
            var n = (t.currentDevicePixelRatio =
              e ||
              ("undefined" !== typeof window && window.devicePixelRatio) ||
              1);
            if (1 !== n) {
              var r = t.canvas,
                i = t.height,
                a = t.width;
              (r.height = i * n),
                (r.width = a * n),
                t.ctx.scale(n, n),
                r.style.height ||
                  r.style.width ||
                  ((r.style.height = i + "px"), (r.style.width = a + "px"));
            }
          }),
          (ut.fontString = function (t, e, n) {
            return e + " " + t + "px " + n;
          }),
          (ut.longestText = function (t, e, n, r) {
            r = r || {};
            var i = (r.data = r.data || {}),
              a = (r.garbageCollect = r.garbageCollect || []);
            r.font !== e &&
              ((i = r.data = {}), (a = r.garbageCollect = []), (r.font = e)),
              (t.font = e);
            var o,
              s,
              l,
              u,
              c,
              d = 0,
              h = n.length;
            for (o = 0; o < h; o++)
              if (
                ((u = n[o]), void 0 !== u && null !== u && !0 !== ut.isArray(u))
              )
                d = ut.measureText(t, i, a, d, u);
              else if (ut.isArray(u))
                for (s = 0, l = u.length; s < l; s++)
                  (c = u[s]),
                    void 0 === c ||
                      null === c ||
                      ut.isArray(c) ||
                      (d = ut.measureText(t, i, a, d, c));
            var f = a.length / 2;
            if (f > n.length) {
              for (o = 0; o < f; o++) delete i[a[o]];
              a.splice(0, f);
            }
            return d;
          }),
          (ut.measureText = function (t, e, n, r, i) {
            var a = e[i];
            return (
              a || ((a = e[i] = t.measureText(i).width), n.push(i)),
              a > r && (r = a),
              r
            );
          }),
          (ut.numberOfLabelLines = function (t) {
            var e = 1;
            return (
              ut.each(t, function (t) {
                ut.isArray(t) && t.length > e && (e = t.length);
              }),
              e
            );
          }),
          (ut.color = R
            ? function (t) {
                return (
                  t instanceof CanvasGradient && (t = Q.global.defaultColor),
                  R(t)
                );
              }
            : function (t) {
                return console.error("Color.js not found!"), t;
              }),
          (ut.getHoverColor = function (t) {
            return t instanceof CanvasPattern || t instanceof CanvasGradient
              ? t
              : ut.color(t).saturate(0.5).darken(0.1).rgbString();
          });
      };
      function tr() {
        throw new Error(
          "This method is not implemented: either no adapter can be found or an incomplete integration was provided."
        );
      }
      function er(t) {
        this.options = t || {};
      }
      ut.extend(er.prototype, {
        formats: tr,
        parse: tr,
        format: tr,
        add: tr,
        diff: tr,
        startOf: tr,
        endOf: tr,
        _create: function (t) {
          return t;
        },
      }),
        (er.override = function (t) {
          ut.extend(er.prototype, t);
        });
      var nr = er,
        rr = { _date: nr },
        ir = {
          formatters: {
            values: function (t) {
              return ut.isArray(t) ? t : "" + t;
            },
            linear: function (t, e, n) {
              var r = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
              Math.abs(r) > 1 && t !== Math.floor(t) && (r = t - Math.floor(t));
              var i = ut.log10(Math.abs(r)),
                a = "";
              if (0 !== t) {
                var o = Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1]));
                if (o < 1e-4) {
                  var s = ut.log10(Math.abs(t)),
                    l = Math.floor(s) - Math.floor(i);
                  (l = Math.max(Math.min(l, 20), 0)), (a = t.toExponential(l));
                } else {
                  var u = -1 * Math.floor(i);
                  (u = Math.max(Math.min(u, 20), 0)), (a = t.toFixed(u));
                }
              } else a = "0";
              return a;
            },
            logarithmic: function (t, e, n) {
              var r = t / Math.pow(10, Math.floor(ut.log10(t)));
              return 0 === t
                ? "0"
                : 1 === r || 2 === r || 5 === r || 0 === e || e === n.length - 1
                ? t.toExponential()
                : "";
            },
          },
        },
        ar = ut.isArray,
        or = ut.isNullOrUndef,
        sr = ut.valueOrDefault,
        lr = ut.valueAtIndexOrDefault;
      function ur(t, e) {
        for (var n = [], r = t.length / e, i = 0, a = t.length; i < a; i += r)
          n.push(t[Math.floor(i)]);
        return n;
      }
      function cr(t, e, n) {
        var r,
          i = t.getTicks().length,
          a = Math.min(e, i - 1),
          o = t.getPixelForTick(a),
          s = t._startPixel,
          l = t._endPixel,
          u = 1e-6;
        if (
          !(
            n &&
            ((r =
              1 === i
                ? Math.max(o - s, l - o)
                : 0 === e
                ? (t.getPixelForTick(1) - o) / 2
                : (o - t.getPixelForTick(a - 1)) / 2),
            (o += a < e ? r : -r),
            o < s - u || o > l + u)
          )
        )
          return o;
      }
      function dr(t, e) {
        ut.each(t, function (t) {
          var n,
            r = t.gc,
            i = r.length / 2;
          if (i > e) {
            for (n = 0; n < i; ++n) delete t.data[r[n]];
            r.splice(0, i);
          }
        });
      }
      function hr(t, e, n, r) {
        var i,
          a,
          o,
          s,
          l,
          u,
          c,
          d,
          h,
          f,
          p,
          g,
          v,
          m = n.length,
          b = [],
          y = [],
          x = [];
        for (i = 0; i < m; ++i) {
          if (
            ((s = n[i].label),
            (l = n[i].major ? e.major : e.minor),
            (t.font = u = l.string),
            (c = r[u] = r[u] || { data: {}, gc: [] }),
            (d = l.lineHeight),
            (h = f = 0),
            or(s) || ar(s))
          ) {
            if (ar(s))
              for (a = 0, o = s.length; a < o; ++a)
                (p = s[a]),
                  or(p) ||
                    ar(p) ||
                    ((h = ut.measureText(t, c.data, c.gc, h, p)), (f += d));
          } else (h = ut.measureText(t, c.data, c.gc, h, s)), (f = d);
          b.push(h), y.push(f), x.push(d / 2);
        }
        function _(t) {
          return { width: b[t] || 0, height: y[t] || 0, offset: x[t] || 0 };
        }
        return (
          dr(r, m),
          (g = b.indexOf(Math.max.apply(null, b))),
          (v = y.indexOf(Math.max.apply(null, y))),
          { first: _(0), last: _(m - 1), widest: _(g), highest: _(v) }
        );
      }
      function fr(t) {
        return t.drawTicks ? t.tickMarkLength : 0;
      }
      function pr(t) {
        var e, n;
        return t.display
          ? ((e = ut.options._parseFont(t)),
            (n = ut.options.toPadding(t.padding)),
            e.lineHeight + n.height)
          : 0;
      }
      function gr(t, e) {
        return ut.extend(
          ut.options._parseFont({
            fontFamily: sr(e.fontFamily, t.fontFamily),
            fontSize: sr(e.fontSize, t.fontSize),
            fontStyle: sr(e.fontStyle, t.fontStyle),
            lineHeight: sr(e.lineHeight, t.lineHeight),
          }),
          {
            color: ut.options.resolve([
              e.fontColor,
              t.fontColor,
              Q.global.defaultFontColor,
            ]),
          }
        );
      }
      function vr(t) {
        var e = gr(t, t.minor),
          n = t.major.enabled ? gr(t, t.major) : e;
        return { minor: e, major: n };
      }
      function mr(t) {
        var e,
          n,
          r,
          i = [];
        for (n = 0, r = t.length; n < r; ++n)
          (e = t[n]), "undefined" !== typeof e._index && i.push(e);
        return i;
      }
      function br(t) {
        var e,
          n,
          r = t.length;
        if (r < 2) return !1;
        for (n = t[0], e = 1; e < r; ++e) if (t[e] - t[e - 1] !== n) return !1;
        return n;
      }
      function yr(t, e, n, r) {
        var i,
          a,
          o,
          s,
          l = br(t),
          u = (e.length - 1) / r;
        if (!l) return Math.max(u, 1);
        for (i = ut.math._factorize(l), o = 0, s = i.length - 1; o < s; o++)
          if (((a = i[o]), a > u)) return a;
        return Math.max(u, 1);
      }
      function xr(t) {
        var e,
          n,
          r = [];
        for (e = 0, n = t.length; e < n; e++) t[e].major && r.push(e);
        return r;
      }
      function _r(t, e, n) {
        var r,
          i,
          a = 0,
          o = e[0];
        for (n = Math.ceil(n), r = 0; r < t.length; r++)
          (i = t[r]),
            r === o ? ((i._index = r), a++, (o = e[a * n])) : delete i.label;
      }
      function wr(t, e, n, r) {
        var i,
          a,
          o,
          s,
          l = sr(n, 0),
          u = Math.min(sr(r, t.length), t.length),
          c = 0;
        (e = Math.ceil(e)),
          r && ((i = r - n), (e = i / Math.floor(i / e))),
          (s = l);
        while (s < 0) c++, (s = Math.round(l + c * e));
        for (a = Math.max(l, 0); a < u; a++)
          (o = t[a]),
            a === s
              ? ((o._index = a), c++, (s = Math.round(l + c * e)))
              : delete o.label;
      }
      Q._set("scale", {
        display: !0,
        position: "left",
        offset: !1,
        gridLines: {
          display: !0,
          color: "rgba(0,0,0,0.1)",
          lineWidth: 1,
          drawBorder: !0,
          drawOnChartArea: !0,
          drawTicks: !0,
          tickMarkLength: 10,
          zeroLineWidth: 1,
          zeroLineColor: "rgba(0,0,0,0.25)",
          zeroLineBorderDash: [],
          zeroLineBorderDashOffset: 0,
          offsetGridLines: !1,
          borderDash: [],
          borderDashOffset: 0,
        },
        scaleLabel: {
          display: !1,
          labelString: "",
          padding: { top: 4, bottom: 4 },
        },
        ticks: {
          beginAtZero: !1,
          minRotation: 0,
          maxRotation: 50,
          mirror: !1,
          padding: 0,
          reverse: !1,
          display: !0,
          autoSkip: !0,
          autoSkipPadding: 0,
          labelOffset: 0,
          callback: ir.formatters.values,
          minor: {},
          major: {},
        },
      });
      var kr = mt.extend({
        zeroLineIndex: 0,
        getPadding: function () {
          var t = this;
          return {
            left: t.paddingLeft || 0,
            top: t.paddingTop || 0,
            right: t.paddingRight || 0,
            bottom: t.paddingBottom || 0,
          };
        },
        getTicks: function () {
          return this._ticks;
        },
        _getLabels: function () {
          var t = this.chart.data;
          return (
            this.options.labels ||
            (this.isHorizontal() ? t.xLabels : t.yLabels) ||
            t.labels ||
            []
          );
        },
        mergeTicksOptions: function () {},
        beforeUpdate: function () {
          ut.callback(this.options.beforeUpdate, [this]);
        },
        update: function (t, e, n) {
          var r,
            i,
            a,
            o,
            s,
            l = this,
            u = l.options.ticks,
            c = u.sampleSize;
          if (
            (l.beforeUpdate(),
            (l.maxWidth = t),
            (l.maxHeight = e),
            (l.margins = ut.extend(
              { left: 0, right: 0, top: 0, bottom: 0 },
              n
            )),
            (l._ticks = null),
            (l.ticks = null),
            (l._labelSizes = null),
            (l._maxLabelLines = 0),
            (l.longestLabelWidth = 0),
            (l.longestTextCache = l.longestTextCache || {}),
            (l._gridLineItems = null),
            (l._labelItems = null),
            l.beforeSetDimensions(),
            l.setDimensions(),
            l.afterSetDimensions(),
            l.beforeDataLimits(),
            l.determineDataLimits(),
            l.afterDataLimits(),
            l.beforeBuildTicks(),
            (o = l.buildTicks() || []),
            (o = l.afterBuildTicks(o) || o),
            (!o || !o.length) && l.ticks)
          )
            for (o = [], r = 0, i = l.ticks.length; r < i; ++r)
              o.push({ value: l.ticks[r], major: !1 });
          return (
            (l._ticks = o),
            (s = c < o.length),
            (a = l._convertTicksToLabels(s ? ur(o, c) : o)),
            l._configure(),
            l.beforeCalculateTickRotation(),
            l.calculateTickRotation(),
            l.afterCalculateTickRotation(),
            l.beforeFit(),
            l.fit(),
            l.afterFit(),
            (l._ticksToDraw =
              u.display && (u.autoSkip || "auto" === u.source)
                ? l._autoSkip(o)
                : o),
            s && (a = l._convertTicksToLabels(l._ticksToDraw)),
            (l.ticks = a),
            l.afterUpdate(),
            l.minSize
          );
        },
        _configure: function () {
          var t,
            e,
            n = this,
            r = n.options.ticks.reverse;
          n.isHorizontal()
            ? ((t = n.left), (e = n.right))
            : ((t = n.top), (e = n.bottom), (r = !r)),
            (n._startPixel = t),
            (n._endPixel = e),
            (n._reversePixels = r),
            (n._length = e - t);
        },
        afterUpdate: function () {
          ut.callback(this.options.afterUpdate, [this]);
        },
        beforeSetDimensions: function () {
          ut.callback(this.options.beforeSetDimensions, [this]);
        },
        setDimensions: function () {
          var t = this;
          t.isHorizontal()
            ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
            : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
            (t.paddingLeft = 0),
            (t.paddingTop = 0),
            (t.paddingRight = 0),
            (t.paddingBottom = 0);
        },
        afterSetDimensions: function () {
          ut.callback(this.options.afterSetDimensions, [this]);
        },
        beforeDataLimits: function () {
          ut.callback(this.options.beforeDataLimits, [this]);
        },
        determineDataLimits: ut.noop,
        afterDataLimits: function () {
          ut.callback(this.options.afterDataLimits, [this]);
        },
        beforeBuildTicks: function () {
          ut.callback(this.options.beforeBuildTicks, [this]);
        },
        buildTicks: ut.noop,
        afterBuildTicks: function (t) {
          var e = this;
          return ar(t) && t.length
            ? ut.callback(e.options.afterBuildTicks, [e, t])
            : ((e.ticks =
                ut.callback(e.options.afterBuildTicks, [e, e.ticks]) ||
                e.ticks),
              t);
        },
        beforeTickToLabelConversion: function () {
          ut.callback(this.options.beforeTickToLabelConversion, [this]);
        },
        convertTicksToLabels: function () {
          var t = this,
            e = t.options.ticks;
          t.ticks = t.ticks.map(e.userCallback || e.callback, this);
        },
        afterTickToLabelConversion: function () {
          ut.callback(this.options.afterTickToLabelConversion, [this]);
        },
        beforeCalculateTickRotation: function () {
          ut.callback(this.options.beforeCalculateTickRotation, [this]);
        },
        calculateTickRotation: function () {
          var t,
            e,
            n,
            r,
            i,
            a,
            o,
            s = this,
            l = s.options,
            u = l.ticks,
            c = s.getTicks().length,
            d = u.minRotation || 0,
            h = u.maxRotation,
            f = d;
          !s._isVisible() || !u.display || d >= h || c <= 1 || !s.isHorizontal()
            ? (s.labelRotation = d)
            : ((t = s._getLabelSizes()),
              (e = t.widest.width),
              (n = t.highest.height - t.highest.offset),
              (r = Math.min(s.maxWidth, s.chart.width - e)),
              (i = l.offset ? s.maxWidth / c : r / (c - 1)),
              e + 6 > i &&
                ((i = r / (c - (l.offset ? 0.5 : 1))),
                (a =
                  s.maxHeight - fr(l.gridLines) - u.padding - pr(l.scaleLabel)),
                (o = Math.sqrt(e * e + n * n)),
                (f = ut.toDegrees(
                  Math.min(
                    Math.asin(Math.min((t.highest.height + 6) / i, 1)),
                    Math.asin(Math.min(a / o, 1)) - Math.asin(n / o)
                  )
                )),
                (f = Math.max(d, Math.min(h, f)))),
              (s.labelRotation = f));
        },
        afterCalculateTickRotation: function () {
          ut.callback(this.options.afterCalculateTickRotation, [this]);
        },
        beforeFit: function () {
          ut.callback(this.options.beforeFit, [this]);
        },
        fit: function () {
          var t = this,
            e = (t.minSize = { width: 0, height: 0 }),
            n = t.chart,
            r = t.options,
            i = r.ticks,
            a = r.scaleLabel,
            o = r.gridLines,
            s = t._isVisible(),
            l = "bottom" === r.position,
            u = t.isHorizontal();
          if (
            (u ? (e.width = t.maxWidth) : s && (e.width = fr(o) + pr(a)),
            u ? s && (e.height = fr(o) + pr(a)) : (e.height = t.maxHeight),
            i.display && s)
          ) {
            var c = vr(i),
              d = t._getLabelSizes(),
              h = d.first,
              f = d.last,
              p = d.widest,
              g = d.highest,
              v = 0.4 * c.minor.lineHeight,
              m = i.padding;
            if (u) {
              var b = 0 !== t.labelRotation,
                y = ut.toRadians(t.labelRotation),
                x = Math.cos(y),
                _ = Math.sin(y),
                w =
                  _ * p.width +
                  x * (g.height - (b ? g.offset : 0)) +
                  (b ? 0 : v);
              e.height = Math.min(t.maxHeight, e.height + w + m);
              var k,
                C,
                M = t.getPixelForTick(0) - t.left,
                S = t.right - t.getPixelForTick(t.getTicks().length - 1);
              b
                ? ((k = l
                    ? x * h.width + _ * h.offset
                    : _ * (h.height - h.offset)),
                  (C = l
                    ? _ * (f.height - f.offset)
                    : x * f.width + _ * f.offset))
                : ((k = h.width / 2), (C = f.width / 2)),
                (t.paddingLeft =
                  Math.max(((k - M) * t.width) / (t.width - M), 0) + 3),
                (t.paddingRight =
                  Math.max(((C - S) * t.width) / (t.width - S), 0) + 3);
            } else {
              var A = i.mirror ? 0 : p.width + m + v;
              (e.width = Math.min(t.maxWidth, e.width + A)),
                (t.paddingTop = h.height / 2),
                (t.paddingBottom = f.height / 2);
            }
          }
          t.handleMargins(),
            u
              ? ((t.width = t._length =
                  n.width - t.margins.left - t.margins.right),
                (t.height = e.height))
              : ((t.width = e.width),
                (t.height = t._length =
                  n.height - t.margins.top - t.margins.bottom));
        },
        handleMargins: function () {
          var t = this;
          t.margins &&
            ((t.margins.left = Math.max(t.paddingLeft, t.margins.left)),
            (t.margins.top = Math.max(t.paddingTop, t.margins.top)),
            (t.margins.right = Math.max(t.paddingRight, t.margins.right)),
            (t.margins.bottom = Math.max(t.paddingBottom, t.margins.bottom)));
        },
        afterFit: function () {
          ut.callback(this.options.afterFit, [this]);
        },
        isHorizontal: function () {
          var t = this.options.position;
          return "top" === t || "bottom" === t;
        },
        isFullWidth: function () {
          return this.options.fullWidth;
        },
        getRightValue: function (t) {
          if (or(t)) return NaN;
          if (("number" === typeof t || t instanceof Number) && !isFinite(t))
            return NaN;
          if (t)
            if (this.isHorizontal()) {
              if (void 0 !== t.x) return this.getRightValue(t.x);
            } else if (void 0 !== t.y) return this.getRightValue(t.y);
          return t;
        },
        _convertTicksToLabels: function (t) {
          var e,
            n,
            r,
            i = this;
          for (
            i.ticks = t.map(function (t) {
              return t.value;
            }),
              i.beforeTickToLabelConversion(),
              e = i.convertTicksToLabels(t) || i.ticks,
              i.afterTickToLabelConversion(),
              n = 0,
              r = t.length;
            n < r;
            ++n
          )
            t[n].label = e[n];
          return e;
        },
        _getLabelSizes: function () {
          var t = this,
            e = t._labelSizes;
          return (
            e ||
              ((t._labelSizes = e =
                hr(
                  t.ctx,
                  vr(t.options.ticks),
                  t.getTicks(),
                  t.longestTextCache
                )),
              (t.longestLabelWidth = e.widest.width)),
            e
          );
        },
        _parseValue: function (t) {
          var e, n, r, i;
          return (
            ar(t)
              ? ((e = +this.getRightValue(t[0])),
                (n = +this.getRightValue(t[1])),
                (r = Math.min(e, n)),
                (i = Math.max(e, n)))
              : ((t = +this.getRightValue(t)),
                (e = void 0),
                (n = t),
                (r = t),
                (i = t)),
            { min: r, max: i, start: e, end: n }
          );
        },
        _getScaleLabel: function (t) {
          var e = this._parseValue(t);
          return void 0 !== e.start
            ? "[" + e.start + ", " + e.end + "]"
            : +this.getRightValue(t);
        },
        getLabelForIndex: ut.noop,
        getPixelForValue: ut.noop,
        getValueForPixel: ut.noop,
        getPixelForTick: function (t) {
          var e = this,
            n = e.options.offset,
            r = e._ticks.length,
            i = 1 / Math.max(r - (n ? 0 : 1), 1);
          return t < 0 || t > r - 1
            ? null
            : e.getPixelForDecimal(t * i + (n ? i / 2 : 0));
        },
        getPixelForDecimal: function (t) {
          var e = this;
          return e._reversePixels && (t = 1 - t), e._startPixel + t * e._length;
        },
        getDecimalForPixel: function (t) {
          var e = (t - this._startPixel) / this._length;
          return this._reversePixels ? 1 - e : e;
        },
        getBasePixel: function () {
          return this.getPixelForValue(this.getBaseValue());
        },
        getBaseValue: function () {
          var t = this,
            e = t.min,
            n = t.max;
          return t.beginAtZero
            ? 0
            : e < 0 && n < 0
            ? n
            : e > 0 && n > 0
            ? e
            : 0;
        },
        _autoSkip: function (t) {
          var e,
            n,
            r,
            i,
            a = this,
            o = a.options.ticks,
            s = a._length,
            l = o.maxTicksLimit || s / a._tickSize() + 1,
            u = o.major.enabled ? xr(t) : [],
            c = u.length,
            d = u[0],
            h = u[c - 1];
          if (c > l) return _r(t, u, c / l), mr(t);
          if (((r = yr(u, t, s, l)), c > 0)) {
            for (e = 0, n = c - 1; e < n; e++) wr(t, r, u[e], u[e + 1]);
            return (
              (i = c > 1 ? (h - d) / (c - 1) : null),
              wr(t, r, ut.isNullOrUndef(i) ? 0 : d - i, d),
              wr(t, r, h, ut.isNullOrUndef(i) ? t.length : h + i),
              mr(t)
            );
          }
          return wr(t, r), mr(t);
        },
        _tickSize: function () {
          var t = this,
            e = t.options.ticks,
            n = ut.toRadians(t.labelRotation),
            r = Math.abs(Math.cos(n)),
            i = Math.abs(Math.sin(n)),
            a = t._getLabelSizes(),
            o = e.autoSkipPadding || 0,
            s = a ? a.widest.width + o : 0,
            l = a ? a.highest.height + o : 0;
          return t.isHorizontal()
            ? l * r > s * i
              ? s / r
              : l / i
            : l * i < s * r
            ? l / r
            : s / i;
        },
        _isVisible: function () {
          var t,
            e,
            n,
            r = this,
            i = r.chart,
            a = r.options.display;
          if ("auto" !== a) return !!a;
          for (t = 0, e = i.data.datasets.length; t < e; ++t)
            if (
              i.isDatasetVisible(t) &&
              ((n = i.getDatasetMeta(t)),
              n.xAxisID === r.id || n.yAxisID === r.id)
            )
              return !0;
          return !1;
        },
        _computeGridLineItems: function (t) {
          var e,
            n,
            r,
            i,
            a,
            o,
            s,
            l,
            u,
            c,
            d,
            h,
            f,
            p,
            g,
            v,
            m,
            b = this,
            y = b.chart,
            x = b.options,
            _ = x.gridLines,
            w = x.position,
            k = _.offsetGridLines,
            C = b.isHorizontal(),
            M = b._ticksToDraw,
            S = M.length + (k ? 1 : 0),
            A = fr(_),
            P = [],
            D = _.drawBorder ? lr(_.lineWidth, 0, 0) : 0,
            T = D / 2,
            O = ut._alignPixel,
            I = function (t) {
              return O(y, t, D);
            };
          for (
            "top" === w
              ? ((e = I(b.bottom)),
                (s = b.bottom - A),
                (u = e - T),
                (d = I(t.top) + T),
                (f = t.bottom))
              : "bottom" === w
              ? ((e = I(b.top)),
                (d = t.top),
                (f = I(t.bottom) - T),
                (s = e + T),
                (u = b.top + A))
              : "left" === w
              ? ((e = I(b.right)),
                (o = b.right - A),
                (l = e - T),
                (c = I(t.left) + T),
                (h = t.right))
              : ((e = I(b.left)),
                (c = t.left),
                (h = I(t.right) - T),
                (o = e + T),
                (l = b.left + A)),
              n = 0;
            n < S;
            ++n
          )
            (r = M[n] || {}),
              (or(r.label) && n < M.length) ||
                (n === b.zeroLineIndex && x.offset === k
                  ? ((p = _.zeroLineWidth),
                    (g = _.zeroLineColor),
                    (v = _.zeroLineBorderDash || []),
                    (m = _.zeroLineBorderDashOffset || 0))
                  : ((p = lr(_.lineWidth, n, 1)),
                    (g = lr(_.color, n, "rgba(0,0,0,0.1)")),
                    (v = _.borderDash || []),
                    (m = _.borderDashOffset || 0)),
                (i = cr(b, r._index || n, k)),
                void 0 !== i &&
                  ((a = O(y, i, p)),
                  C ? (o = l = c = h = a) : (s = u = d = f = a),
                  P.push({
                    tx1: o,
                    ty1: s,
                    tx2: l,
                    ty2: u,
                    x1: c,
                    y1: d,
                    x2: h,
                    y2: f,
                    width: p,
                    color: g,
                    borderDash: v,
                    borderDashOffset: m,
                  })));
          return (P.ticksLength = S), (P.borderValue = e), P;
        },
        _computeLabelItems: function () {
          var t,
            e,
            n,
            r,
            i,
            a,
            o,
            s,
            l,
            u,
            c,
            d,
            h = this,
            f = h.options,
            p = f.ticks,
            g = f.position,
            v = p.mirror,
            m = h.isHorizontal(),
            b = h._ticksToDraw,
            y = vr(p),
            x = p.padding,
            _ = fr(f.gridLines),
            w = -ut.toRadians(h.labelRotation),
            k = [];
          for (
            "top" === g
              ? ((a = h.bottom - _ - x), (o = w ? "left" : "center"))
              : "bottom" === g
              ? ((a = h.top + _ + x), (o = w ? "right" : "center"))
              : "left" === g
              ? ((i = h.right - (v ? 0 : _) - x), (o = v ? "left" : "right"))
              : ((i = h.left + (v ? 0 : _) + x), (o = v ? "right" : "left")),
              t = 0,
              e = b.length;
            t < e;
            ++t
          )
            (n = b[t]),
              (r = n.label),
              or(r) ||
                ((s = h.getPixelForTick(n._index || t) + p.labelOffset),
                (l = n.major ? y.major : y.minor),
                (u = l.lineHeight),
                (c = ar(r) ? r.length : 1),
                m
                  ? ((i = s),
                    (d =
                      "top" === g
                        ? ((w ? 1 : 0.5) - c) * u
                        : (w ? 0 : 0.5) * u))
                  : ((a = s), (d = ((1 - c) * u) / 2)),
                k.push({
                  x: i,
                  y: a,
                  rotation: w,
                  label: r,
                  font: l,
                  textOffset: d,
                  textAlign: o,
                }));
          return k;
        },
        _drawGrid: function (t) {
          var e = this,
            n = e.options.gridLines;
          if (n.display) {
            var r,
              i,
              a,
              o,
              s,
              l = e.ctx,
              u = e.chart,
              c = ut._alignPixel,
              d = n.drawBorder ? lr(n.lineWidth, 0, 0) : 0,
              h =
                e._gridLineItems ||
                (e._gridLineItems = e._computeGridLineItems(t));
            for (a = 0, o = h.length; a < o; ++a)
              (s = h[a]),
                (r = s.width),
                (i = s.color),
                r &&
                  i &&
                  (l.save(),
                  (l.lineWidth = r),
                  (l.strokeStyle = i),
                  l.setLineDash &&
                    (l.setLineDash(s.borderDash),
                    (l.lineDashOffset = s.borderDashOffset)),
                  l.beginPath(),
                  n.drawTicks &&
                    (l.moveTo(s.tx1, s.ty1), l.lineTo(s.tx2, s.ty2)),
                  n.drawOnChartArea &&
                    (l.moveTo(s.x1, s.y1), l.lineTo(s.x2, s.y2)),
                  l.stroke(),
                  l.restore());
            if (d) {
              var f,
                p,
                g,
                v,
                m = d,
                b = lr(n.lineWidth, h.ticksLength - 1, 1),
                y = h.borderValue;
              e.isHorizontal()
                ? ((f = c(u, e.left, m) - m / 2),
                  (p = c(u, e.right, b) + b / 2),
                  (g = v = y))
                : ((g = c(u, e.top, m) - m / 2),
                  (v = c(u, e.bottom, b) + b / 2),
                  (f = p = y)),
                (l.lineWidth = d),
                (l.strokeStyle = lr(n.color, 0)),
                l.beginPath(),
                l.moveTo(f, g),
                l.lineTo(p, v),
                l.stroke();
            }
          }
        },
        _drawLabels: function () {
          var t = this,
            e = t.options.ticks;
          if (e.display) {
            var n,
              r,
              i,
              a,
              o,
              s,
              l,
              u,
              c = t.ctx,
              d = t._labelItems || (t._labelItems = t._computeLabelItems());
            for (n = 0, i = d.length; n < i; ++n) {
              if (
                ((o = d[n]),
                (s = o.font),
                c.save(),
                c.translate(o.x, o.y),
                c.rotate(o.rotation),
                (c.font = s.string),
                (c.fillStyle = s.color),
                (c.textBaseline = "middle"),
                (c.textAlign = o.textAlign),
                (l = o.label),
                (u = o.textOffset),
                ar(l))
              )
                for (r = 0, a = l.length; r < a; ++r)
                  c.fillText("" + l[r], 0, u), (u += s.lineHeight);
              else c.fillText(l, 0, u);
              c.restore();
            }
          }
        },
        _drawTitle: function () {
          var t = this,
            e = t.ctx,
            n = t.options,
            r = n.scaleLabel;
          if (r.display) {
            var i,
              a,
              o = sr(r.fontColor, Q.global.defaultFontColor),
              s = ut.options._parseFont(r),
              l = ut.options.toPadding(r.padding),
              u = s.lineHeight / 2,
              c = n.position,
              d = 0;
            if (t.isHorizontal())
              (i = t.left + t.width / 2),
                (a =
                  "bottom" === c ? t.bottom - u - l.bottom : t.top + u + l.top);
            else {
              var h = "left" === c;
              (i = h ? t.left + u + l.top : t.right - u - l.top),
                (a = t.top + t.height / 2),
                (d = h ? -0.5 * Math.PI : 0.5 * Math.PI);
            }
            e.save(),
              e.translate(i, a),
              e.rotate(d),
              (e.textAlign = "center"),
              (e.textBaseline = "middle"),
              (e.fillStyle = o),
              (e.font = s.string),
              e.fillText(r.labelString, 0, 0),
              e.restore();
          }
        },
        draw: function (t) {
          var e = this;
          e._isVisible() && (e._drawGrid(t), e._drawTitle(), e._drawLabels());
        },
        _layers: function () {
          var t = this,
            e = t.options,
            n = (e.ticks && e.ticks.z) || 0,
            r = (e.gridLines && e.gridLines.z) || 0;
          return t._isVisible() && n !== r && t.draw === t._draw
            ? [
                {
                  z: r,
                  draw: function () {
                    t._drawGrid.apply(t, arguments),
                      t._drawTitle.apply(t, arguments);
                  },
                },
                {
                  z: n,
                  draw: function () {
                    t._drawLabels.apply(t, arguments);
                  },
                },
              ]
            : [
                {
                  z: n,
                  draw: function () {
                    t.draw.apply(t, arguments);
                  },
                },
              ];
        },
        _getMatchingVisibleMetas: function (t) {
          var e = this,
            n = e.isHorizontal();
          return e.chart._getSortedVisibleDatasetMetas().filter(function (r) {
            return (
              (!t || r.type === t) &&
              (n ? r.xAxisID === e.id : r.yAxisID === e.id)
            );
          });
        },
      });
      kr.prototype._draw = kr.prototype.draw;
      var Cr = kr,
        Mr = ut.isNullOrUndef,
        Sr = { position: "bottom" },
        Ar = Cr.extend({
          determineDataLimits: function () {
            var t,
              e = this,
              n = e._getLabels(),
              r = e.options.ticks,
              i = r.min,
              a = r.max,
              o = 0,
              s = n.length - 1;
            void 0 !== i && ((t = n.indexOf(i)), t >= 0 && (o = t)),
              void 0 !== a && ((t = n.indexOf(a)), t >= 0 && (s = t)),
              (e.minIndex = o),
              (e.maxIndex = s),
              (e.min = n[o]),
              (e.max = n[s]);
          },
          buildTicks: function () {
            var t = this,
              e = t._getLabels(),
              n = t.minIndex,
              r = t.maxIndex;
            t.ticks = 0 === n && r === e.length - 1 ? e : e.slice(n, r + 1);
          },
          getLabelForIndex: function (t, e) {
            var n = this,
              r = n.chart;
            return r.getDatasetMeta(e).controller._getValueScaleId() === n.id
              ? n.getRightValue(r.data.datasets[e].data[t])
              : n._getLabels()[t];
          },
          _configure: function () {
            var t = this,
              e = t.options.offset,
              n = t.ticks;
            Cr.prototype._configure.call(t),
              t.isHorizontal() || (t._reversePixels = !t._reversePixels),
              n &&
                ((t._startValue = t.minIndex - (e ? 0.5 : 0)),
                (t._valueRange = Math.max(n.length - (e ? 0 : 1), 1)));
          },
          getPixelForValue: function (t, e, n) {
            var r,
              i,
              a,
              o = this;
            return (
              Mr(e) || Mr(n) || (t = o.chart.data.datasets[n].data[e]),
              Mr(t) || (r = o.isHorizontal() ? t.x : t.y),
              (void 0 !== r || (void 0 !== t && isNaN(e))) &&
                ((i = o._getLabels()),
                (t = ut.valueOrDefault(r, t)),
                (a = i.indexOf(t)),
                (e = -1 !== a ? a : e),
                isNaN(e) && (e = t)),
              o.getPixelForDecimal((e - o._startValue) / o._valueRange)
            );
          },
          getPixelForTick: function (t) {
            var e = this.ticks;
            return t < 0 || t > e.length - 1
              ? null
              : this.getPixelForValue(e[t], t + this.minIndex);
          },
          getValueForPixel: function (t) {
            var e = this,
              n = Math.round(
                e._startValue + e.getDecimalForPixel(t) * e._valueRange
              );
            return Math.min(Math.max(n, 0), e.ticks.length - 1);
          },
          getBasePixel: function () {
            return this.bottom;
          },
        }),
        Pr = Sr;
      Ar._defaults = Pr;
      var Dr = ut.noop,
        Tr = ut.isNullOrUndef;
      function Or(t, e) {
        var n,
          r,
          i,
          a,
          o = [],
          s = 1e-14,
          l = t.stepSize,
          u = l || 1,
          c = t.maxTicks - 1,
          d = t.min,
          h = t.max,
          f = t.precision,
          p = e.min,
          g = e.max,
          v = ut.niceNum((g - p) / c / u) * u;
        if (v < s && Tr(d) && Tr(h)) return [p, g];
        (a = Math.ceil(g / v) - Math.floor(p / v)),
          a > c && (v = ut.niceNum((a * v) / c / u) * u),
          l || Tr(f)
            ? (n = Math.pow(10, ut._decimalPlaces(v)))
            : ((n = Math.pow(10, f)), (v = Math.ceil(v * n) / n)),
          (r = Math.floor(p / v) * v),
          (i = Math.ceil(g / v) * v),
          l &&
            (!Tr(d) && ut.almostWhole(d / v, v / 1e3) && (r = d),
            !Tr(h) && ut.almostWhole(h / v, v / 1e3) && (i = h)),
          (a = (i - r) / v),
          (a = ut.almostEquals(a, Math.round(a), v / 1e3)
            ? Math.round(a)
            : Math.ceil(a)),
          (r = Math.round(r * n) / n),
          (i = Math.round(i * n) / n),
          o.push(Tr(d) ? r : d);
        for (var m = 1; m < a; ++m) o.push(Math.round((r + m * v) * n) / n);
        return o.push(Tr(h) ? i : h), o;
      }
      var Ir = Cr.extend({
          getRightValue: function (t) {
            return "string" === typeof t
              ? +t
              : Cr.prototype.getRightValue.call(this, t);
          },
          handleTickRangeOptions: function () {
            var t = this,
              e = t.options,
              n = e.ticks;
            if (n.beginAtZero) {
              var r = ut.sign(t.min),
                i = ut.sign(t.max);
              r < 0 && i < 0 ? (t.max = 0) : r > 0 && i > 0 && (t.min = 0);
            }
            var a = void 0 !== n.min || void 0 !== n.suggestedMin,
              o = void 0 !== n.max || void 0 !== n.suggestedMax;
            void 0 !== n.min
              ? (t.min = n.min)
              : void 0 !== n.suggestedMin &&
                (null === t.min
                  ? (t.min = n.suggestedMin)
                  : (t.min = Math.min(t.min, n.suggestedMin))),
              void 0 !== n.max
                ? (t.max = n.max)
                : void 0 !== n.suggestedMax &&
                  (null === t.max
                    ? (t.max = n.suggestedMax)
                    : (t.max = Math.max(t.max, n.suggestedMax))),
              a !== o &&
                t.min >= t.max &&
                (a ? (t.max = t.min + 1) : (t.min = t.max - 1)),
              t.min === t.max && (t.max++, n.beginAtZero || t.min--);
          },
          getTickLimit: function () {
            var t,
              e = this,
              n = e.options.ticks,
              r = n.stepSize,
              i = n.maxTicksLimit;
            return (
              r
                ? (t = Math.ceil(e.max / r) - Math.floor(e.min / r) + 1)
                : ((t = e._computeTickLimit()), (i = i || 11)),
              i && (t = Math.min(i, t)),
              t
            );
          },
          _computeTickLimit: function () {
            return Number.POSITIVE_INFINITY;
          },
          handleDirectionalChanges: Dr,
          buildTicks: function () {
            var t = this,
              e = t.options,
              n = e.ticks,
              r = t.getTickLimit();
            r = Math.max(2, r);
            var i = {
                maxTicks: r,
                min: n.min,
                max: n.max,
                precision: n.precision,
                stepSize: ut.valueOrDefault(n.fixedStepSize, n.stepSize),
              },
              a = (t.ticks = Or(i, t));
            t.handleDirectionalChanges(),
              (t.max = ut.max(a)),
              (t.min = ut.min(a)),
              n.reverse
                ? (a.reverse(), (t.start = t.max), (t.end = t.min))
                : ((t.start = t.min), (t.end = t.max));
          },
          convertTicksToLabels: function () {
            var t = this;
            (t.ticksAsNumbers = t.ticks.slice()),
              (t.zeroLineIndex = t.ticks.indexOf(0)),
              Cr.prototype.convertTicksToLabels.call(t);
          },
          _configure: function () {
            var t,
              e = this,
              n = e.getTicks(),
              r = e.min,
              i = e.max;
            Cr.prototype._configure.call(e),
              e.options.offset &&
                n.length &&
                ((t = (i - r) / Math.max(n.length - 1, 1) / 2),
                (r -= t),
                (i += t)),
              (e._startValue = r),
              (e._endValue = i),
              (e._valueRange = i - r);
          },
        }),
        Fr = { position: "left", ticks: { callback: ir.formatters.linear } },
        Lr = 0,
        Er = 1;
      function Nr(t, e, n) {
        var r = [
          n.type,
          void 0 === e && void 0 === n.stack ? n.index : "",
          n.stack,
        ].join(".");
        return void 0 === t[r] && (t[r] = { pos: [], neg: [] }), t[r];
      }
      function Rr(t, e, n, r) {
        var i,
          a,
          o = t.options,
          s = o.stacked,
          l = Nr(e, s, n),
          u = l.pos,
          c = l.neg,
          d = r.length;
        for (i = 0; i < d; ++i)
          (a = t._parseValue(r[i])),
            isNaN(a.min) ||
              isNaN(a.max) ||
              n.data[i].hidden ||
              ((u[i] = u[i] || 0),
              (c[i] = c[i] || 0),
              o.relativePoints
                ? (u[i] = 100)
                : a.min < 0 || a.max < 0
                ? (c[i] += a.min)
                : (u[i] += a.max));
      }
      function zr(t, e, n) {
        var r,
          i,
          a = n.length;
        for (r = 0; r < a; ++r)
          (i = t._parseValue(n[r])),
            isNaN(i.min) ||
              isNaN(i.max) ||
              e.data[r].hidden ||
              ((t.min = Math.min(t.min, i.min)),
              (t.max = Math.max(t.max, i.max)));
      }
      var Br = Ir.extend({
          determineDataLimits: function () {
            var t,
              e,
              n,
              r,
              i = this,
              a = i.options,
              o = i.chart,
              s = o.data.datasets,
              l = i._getMatchingVisibleMetas(),
              u = a.stacked,
              c = {},
              d = l.length;
            if (
              ((i.min = Number.POSITIVE_INFINITY),
              (i.max = Number.NEGATIVE_INFINITY),
              void 0 === u)
            )
              for (t = 0; !u && t < d; ++t)
                (e = l[t]), (u = void 0 !== e.stack);
            for (t = 0; t < d; ++t)
              (e = l[t]),
                (n = s[e.index].data),
                u ? Rr(i, c, e, n) : zr(i, e, n);
            ut.each(c, function (t) {
              (r = t.pos.concat(t.neg)),
                (i.min = Math.min(i.min, ut.min(r))),
                (i.max = Math.max(i.max, ut.max(r)));
            }),
              (i.min = ut.isFinite(i.min) && !isNaN(i.min) ? i.min : Lr),
              (i.max = ut.isFinite(i.max) && !isNaN(i.max) ? i.max : Er),
              i.handleTickRangeOptions();
          },
          _computeTickLimit: function () {
            var t,
              e = this;
            return e.isHorizontal()
              ? Math.ceil(e.width / 40)
              : ((t = ut.options._parseFont(e.options.ticks)),
                Math.ceil(e.height / t.lineHeight));
          },
          handleDirectionalChanges: function () {
            this.isHorizontal() || this.ticks.reverse();
          },
          getLabelForIndex: function (t, e) {
            return this._getScaleLabel(this.chart.data.datasets[e].data[t]);
          },
          getPixelForValue: function (t) {
            var e = this;
            return e.getPixelForDecimal(
              (+e.getRightValue(t) - e._startValue) / e._valueRange
            );
          },
          getValueForPixel: function (t) {
            return (
              this._startValue + this.getDecimalForPixel(t) * this._valueRange
            );
          },
          getPixelForTick: function (t) {
            var e = this.ticksAsNumbers;
            return t < 0 || t > e.length - 1
              ? null
              : this.getPixelForValue(e[t]);
          },
        }),
        Vr = Fr;
      Br._defaults = Vr;
      var $r = ut.valueOrDefault,
        Wr = ut.math.log10;
      function jr(t, e) {
        var n,
          r,
          i = [],
          a = $r(t.min, Math.pow(10, Math.floor(Wr(e.min)))),
          o = Math.floor(Wr(e.max)),
          s = Math.ceil(e.max / Math.pow(10, o));
        0 === a
          ? ((n = Math.floor(Wr(e.minNotZero))),
            (r = Math.floor(e.minNotZero / Math.pow(10, n))),
            i.push(a),
            (a = r * Math.pow(10, n)))
          : ((n = Math.floor(Wr(a))), (r = Math.floor(a / Math.pow(10, n))));
        var l = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
        do {
          i.push(a),
            ++r,
            10 === r && ((r = 1), ++n, (l = n >= 0 ? 1 : l)),
            (a = Math.round(r * Math.pow(10, n) * l) / l);
        } while (n < o || (n === o && r < s));
        var u = $r(t.max, a);
        return i.push(u), i;
      }
      var Hr = {
        position: "left",
        ticks: { callback: ir.formatters.logarithmic },
      };
      function qr(t, e) {
        return ut.isFinite(t) && t >= 0 ? t : e;
      }
      var Ur = Cr.extend({
          determineDataLimits: function () {
            var t,
              e,
              n,
              r,
              i,
              a,
              o = this,
              s = o.options,
              l = o.chart,
              u = l.data.datasets,
              c = o.isHorizontal();
            function d(t) {
              return c ? t.xAxisID === o.id : t.yAxisID === o.id;
            }
            (o.min = Number.POSITIVE_INFINITY),
              (o.max = Number.NEGATIVE_INFINITY),
              (o.minNotZero = Number.POSITIVE_INFINITY);
            var h = s.stacked;
            if (void 0 === h)
              for (t = 0; t < u.length; t++)
                if (
                  ((e = l.getDatasetMeta(t)),
                  l.isDatasetVisible(t) && d(e) && void 0 !== e.stack)
                ) {
                  h = !0;
                  break;
                }
            if (s.stacked || h) {
              var f = {};
              for (t = 0; t < u.length; t++) {
                e = l.getDatasetMeta(t);
                var p = [
                  e.type,
                  void 0 === s.stacked && void 0 === e.stack ? t : "",
                  e.stack,
                ].join(".");
                if (l.isDatasetVisible(t) && d(e))
                  for (
                    void 0 === f[p] && (f[p] = []),
                      r = u[t].data,
                      i = 0,
                      a = r.length;
                    i < a;
                    i++
                  ) {
                    var g = f[p];
                    (n = o._parseValue(r[i])),
                      isNaN(n.min) ||
                        isNaN(n.max) ||
                        e.data[i].hidden ||
                        n.min < 0 ||
                        n.max < 0 ||
                        ((g[i] = g[i] || 0), (g[i] += n.max));
                  }
              }
              ut.each(f, function (t) {
                if (t.length > 0) {
                  var e = ut.min(t),
                    n = ut.max(t);
                  (o.min = Math.min(o.min, e)), (o.max = Math.max(o.max, n));
                }
              });
            } else
              for (t = 0; t < u.length; t++)
                if (((e = l.getDatasetMeta(t)), l.isDatasetVisible(t) && d(e)))
                  for (r = u[t].data, i = 0, a = r.length; i < a; i++)
                    (n = o._parseValue(r[i])),
                      isNaN(n.min) ||
                        isNaN(n.max) ||
                        e.data[i].hidden ||
                        n.min < 0 ||
                        n.max < 0 ||
                        ((o.min = Math.min(n.min, o.min)),
                        (o.max = Math.max(n.max, o.max)),
                        0 !== n.min &&
                          (o.minNotZero = Math.min(n.min, o.minNotZero)));
            (o.min = ut.isFinite(o.min) ? o.min : null),
              (o.max = ut.isFinite(o.max) ? o.max : null),
              (o.minNotZero = ut.isFinite(o.minNotZero) ? o.minNotZero : null),
              this.handleTickRangeOptions();
          },
          handleTickRangeOptions: function () {
            var t = this,
              e = t.options.ticks,
              n = 1,
              r = 10;
            (t.min = qr(e.min, t.min)),
              (t.max = qr(e.max, t.max)),
              t.min === t.max &&
                (0 !== t.min && null !== t.min
                  ? ((t.min = Math.pow(10, Math.floor(Wr(t.min)) - 1)),
                    (t.max = Math.pow(10, Math.floor(Wr(t.max)) + 1)))
                  : ((t.min = n), (t.max = r))),
              null === t.min &&
                (t.min = Math.pow(10, Math.floor(Wr(t.max)) - 1)),
              null === t.max &&
                (t.max =
                  0 !== t.min ? Math.pow(10, Math.floor(Wr(t.min)) + 1) : r),
              null === t.minNotZero &&
                (t.min > 0
                  ? (t.minNotZero = t.min)
                  : t.max < 1
                  ? (t.minNotZero = Math.pow(10, Math.floor(Wr(t.max))))
                  : (t.minNotZero = n));
          },
          buildTicks: function () {
            var t = this,
              e = t.options.ticks,
              n = !t.isHorizontal(),
              r = { min: qr(e.min), max: qr(e.max) },
              i = (t.ticks = jr(r, t));
            (t.max = ut.max(i)),
              (t.min = ut.min(i)),
              e.reverse
                ? ((n = !n), (t.start = t.max), (t.end = t.min))
                : ((t.start = t.min), (t.end = t.max)),
              n && i.reverse();
          },
          convertTicksToLabels: function () {
            (this.tickValues = this.ticks.slice()),
              Cr.prototype.convertTicksToLabels.call(this);
          },
          getLabelForIndex: function (t, e) {
            return this._getScaleLabel(this.chart.data.datasets[e].data[t]);
          },
          getPixelForTick: function (t) {
            var e = this.tickValues;
            return t < 0 || t > e.length - 1
              ? null
              : this.getPixelForValue(e[t]);
          },
          _getFirstTickValue: function (t) {
            var e = Math.floor(Wr(t)),
              n = Math.floor(t / Math.pow(10, e));
            return n * Math.pow(10, e);
          },
          _configure: function () {
            var t = this,
              e = t.min,
              n = 0;
            Cr.prototype._configure.call(t),
              0 === e &&
                ((e = t._getFirstTickValue(t.minNotZero)),
                (n =
                  $r(t.options.ticks.fontSize, Q.global.defaultFontSize) /
                  t._length)),
              (t._startValue = Wr(e)),
              (t._valueOffset = n),
              (t._valueRange = (Wr(t.max) - Wr(e)) / (1 - n));
          },
          getPixelForValue: function (t) {
            var e = this,
              n = 0;
            return (
              (t = +e.getRightValue(t)),
              t > e.min &&
                t > 0 &&
                (n = (Wr(t) - e._startValue) / e._valueRange + e._valueOffset),
              e.getPixelForDecimal(n)
            );
          },
          getValueForPixel: function (t) {
            var e = this,
              n = e.getDecimalForPixel(t);
            return 0 === n && 0 === e.min
              ? 0
              : Math.pow(
                  10,
                  e._startValue + (n - e._valueOffset) * e._valueRange
                );
          },
        }),
        Yr = Hr;
      Ur._defaults = Yr;
      var Gr = ut.valueOrDefault,
        Kr = ut.valueAtIndexOrDefault,
        Xr = ut.options.resolve,
        Qr = {
          display: !0,
          animate: !0,
          position: "chartArea",
          angleLines: {
            display: !0,
            color: "rgba(0,0,0,0.1)",
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0,
          },
          gridLines: { circular: !1 },
          ticks: {
            showLabelBackdrop: !0,
            backdropColor: "rgba(255,255,255,0.75)",
            backdropPaddingY: 2,
            backdropPaddingX: 2,
            callback: ir.formatters.linear,
          },
          pointLabels: {
            display: !0,
            fontSize: 10,
            callback: function (t) {
              return t;
            },
          },
        };
      function Zr(t) {
        var e = t.ticks;
        return e.display && t.display
          ? Gr(e.fontSize, Q.global.defaultFontSize) + 2 * e.backdropPaddingY
          : 0;
      }
      function Jr(t, e, n) {
        return ut.isArray(n)
          ? { w: ut.longestText(t, t.font, n), h: n.length * e }
          : { w: t.measureText(n).width, h: e };
      }
      function ti(t, e, n, r, i) {
        return t === r || t === i
          ? { start: e - n / 2, end: e + n / 2 }
          : t < r || t > i
          ? { start: e - n, end: e }
          : { start: e, end: e + n };
      }
      function ei(t) {
        var e,
          n,
          r,
          i = ut.options._parseFont(t.options.pointLabels),
          a = { l: 0, r: t.width, t: 0, b: t.height - t.paddingTop },
          o = {};
        (t.ctx.font = i.string), (t._pointLabelSizes = []);
        var s = t.chart.data.labels.length;
        for (e = 0; e < s; e++) {
          (r = t.getPointPosition(e, t.drawingArea + 5)),
            (n = Jr(t.ctx, i.lineHeight, t.pointLabels[e])),
            (t._pointLabelSizes[e] = n);
          var l = t.getIndexAngle(e),
            u = ut.toDegrees(l) % 360,
            c = ti(u, r.x, n.w, 0, 180),
            d = ti(u, r.y, n.h, 90, 270);
          c.start < a.l && ((a.l = c.start), (o.l = l)),
            c.end > a.r && ((a.r = c.end), (o.r = l)),
            d.start < a.t && ((a.t = d.start), (o.t = l)),
            d.end > a.b && ((a.b = d.end), (o.b = l));
        }
        t.setReductions(t.drawingArea, a, o);
      }
      function ni(t) {
        return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
      }
      function ri(t, e, n, r) {
        var i,
          a,
          o = n.y + r / 2;
        if (ut.isArray(e))
          for (i = 0, a = e.length; i < a; ++i)
            t.fillText(e[i], n.x, o), (o += r);
        else t.fillText(e, n.x, o);
      }
      function ii(t, e, n) {
        90 === t || 270 === t
          ? (n.y -= e.h / 2)
          : (t > 270 || t < 90) && (n.y -= e.h);
      }
      function ai(t) {
        var e = t.ctx,
          n = t.options,
          r = n.pointLabels,
          i = Zr(n),
          a = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max),
          o = ut.options._parseFont(r);
        e.save(), (e.font = o.string), (e.textBaseline = "middle");
        for (var s = t.chart.data.labels.length - 1; s >= 0; s--) {
          var l = 0 === s ? i / 2 : 0,
            u = t.getPointPosition(s, a + l + 5),
            c = Kr(r.fontColor, s, Q.global.defaultFontColor);
          e.fillStyle = c;
          var d = t.getIndexAngle(s),
            h = ut.toDegrees(d);
          (e.textAlign = ni(h)),
            ii(h, t._pointLabelSizes[s], u),
            ri(e, t.pointLabels[s], u, o.lineHeight);
        }
        e.restore();
      }
      function oi(t, e, n, r) {
        var i,
          a = t.ctx,
          o = e.circular,
          s = t.chart.data.labels.length,
          l = Kr(e.color, r - 1),
          u = Kr(e.lineWidth, r - 1);
        if ((o || s) && l && u) {
          if (
            (a.save(),
            (a.strokeStyle = l),
            (a.lineWidth = u),
            a.setLineDash &&
              (a.setLineDash(e.borderDash || []),
              (a.lineDashOffset = e.borderDashOffset || 0)),
            a.beginPath(),
            o)
          )
            a.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI);
          else {
            (i = t.getPointPosition(0, n)), a.moveTo(i.x, i.y);
            for (var c = 1; c < s; c++)
              (i = t.getPointPosition(c, n)), a.lineTo(i.x, i.y);
          }
          a.closePath(), a.stroke(), a.restore();
        }
      }
      function si(t) {
        return ut.isNumber(t) ? t : 0;
      }
      var li = Ir.extend({
          setDimensions: function () {
            var t = this;
            (t.width = t.maxWidth),
              (t.height = t.maxHeight),
              (t.paddingTop = Zr(t.options) / 2),
              (t.xCenter = Math.floor(t.width / 2)),
              (t.yCenter = Math.floor((t.height - t.paddingTop) / 2)),
              (t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2);
          },
          determineDataLimits: function () {
            var t = this,
              e = t.chart,
              n = Number.POSITIVE_INFINITY,
              r = Number.NEGATIVE_INFINITY;
            ut.each(e.data.datasets, function (i, a) {
              if (e.isDatasetVisible(a)) {
                var o = e.getDatasetMeta(a);
                ut.each(i.data, function (e, i) {
                  var a = +t.getRightValue(e);
                  isNaN(a) ||
                    o.data[i].hidden ||
                    ((n = Math.min(a, n)), (r = Math.max(a, r)));
                });
              }
            }),
              (t.min = n === Number.POSITIVE_INFINITY ? 0 : n),
              (t.max = r === Number.NEGATIVE_INFINITY ? 0 : r),
              t.handleTickRangeOptions();
          },
          _computeTickLimit: function () {
            return Math.ceil(this.drawingArea / Zr(this.options));
          },
          convertTicksToLabels: function () {
            var t = this;
            Ir.prototype.convertTicksToLabels.call(t),
              (t.pointLabels = t.chart.data.labels.map(function () {
                var e = ut.callback(
                  t.options.pointLabels.callback,
                  arguments,
                  t
                );
                return e || 0 === e ? e : "";
              }));
          },
          getLabelForIndex: function (t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          fit: function () {
            var t = this,
              e = t.options;
            e.display && e.pointLabels.display
              ? ei(t)
              : t.setCenterPoint(0, 0, 0, 0);
          },
          setReductions: function (t, e, n) {
            var r = this,
              i = e.l / Math.sin(n.l),
              a = Math.max(e.r - r.width, 0) / Math.sin(n.r),
              o = -e.t / Math.cos(n.t),
              s = -Math.max(e.b - (r.height - r.paddingTop), 0) / Math.cos(n.b);
            (i = si(i)),
              (a = si(a)),
              (o = si(o)),
              (s = si(s)),
              (r.drawingArea = Math.min(
                Math.floor(t - (i + a) / 2),
                Math.floor(t - (o + s) / 2)
              )),
              r.setCenterPoint(i, a, o, s);
          },
          setCenterPoint: function (t, e, n, r) {
            var i = this,
              a = i.width - e - i.drawingArea,
              o = t + i.drawingArea,
              s = n + i.drawingArea,
              l = i.height - i.paddingTop - r - i.drawingArea;
            (i.xCenter = Math.floor((o + a) / 2 + i.left)),
              (i.yCenter = Math.floor((s + l) / 2 + i.top + i.paddingTop));
          },
          getIndexAngle: function (t) {
            var e = this.chart,
              n = 360 / e.data.labels.length,
              r = e.options || {},
              i = r.startAngle || 0,
              a = (t * n + i) % 360;
            return ((a < 0 ? a + 360 : a) * Math.PI * 2) / 360;
          },
          getDistanceFromCenterForValue: function (t) {
            var e = this;
            if (ut.isNullOrUndef(t)) return NaN;
            var n = e.drawingArea / (e.max - e.min);
            return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n;
          },
          getPointPosition: function (t, e) {
            var n = this,
              r = n.getIndexAngle(t) - Math.PI / 2;
            return {
              x: Math.cos(r) * e + n.xCenter,
              y: Math.sin(r) * e + n.yCenter,
            };
          },
          getPointPositionForValue: function (t, e) {
            return this.getPointPosition(
              t,
              this.getDistanceFromCenterForValue(e)
            );
          },
          getBasePosition: function (t) {
            var e = this,
              n = e.min,
              r = e.max;
            return e.getPointPositionForValue(
              t || 0,
              e.beginAtZero ? 0 : n < 0 && r < 0 ? r : n > 0 && r > 0 ? n : 0
            );
          },
          _drawGrid: function () {
            var t,
              e,
              n,
              r = this,
              i = r.ctx,
              a = r.options,
              o = a.gridLines,
              s = a.angleLines,
              l = Gr(s.lineWidth, o.lineWidth),
              u = Gr(s.color, o.color);
            if (
              (a.pointLabels.display && ai(r),
              o.display &&
                ut.each(r.ticks, function (t, n) {
                  0 !== n &&
                    ((e = r.getDistanceFromCenterForValue(r.ticksAsNumbers[n])),
                    oi(r, o, e, n));
                }),
              s.display && l && u)
            ) {
              for (
                i.save(),
                  i.lineWidth = l,
                  i.strokeStyle = u,
                  i.setLineDash &&
                    (i.setLineDash(Xr([s.borderDash, o.borderDash, []])),
                    (i.lineDashOffset = Xr([
                      s.borderDashOffset,
                      o.borderDashOffset,
                      0,
                    ]))),
                  t = r.chart.data.labels.length - 1;
                t >= 0;
                t--
              )
                (e = r.getDistanceFromCenterForValue(
                  a.ticks.reverse ? r.min : r.max
                )),
                  (n = r.getPointPosition(t, e)),
                  i.beginPath(),
                  i.moveTo(r.xCenter, r.yCenter),
                  i.lineTo(n.x, n.y),
                  i.stroke();
              i.restore();
            }
          },
          _drawLabels: function () {
            var t = this,
              e = t.ctx,
              n = t.options,
              r = n.ticks;
            if (r.display) {
              var i,
                a,
                o = t.getIndexAngle(0),
                s = ut.options._parseFont(r),
                l = Gr(r.fontColor, Q.global.defaultFontColor);
              e.save(),
                (e.font = s.string),
                e.translate(t.xCenter, t.yCenter),
                e.rotate(o),
                (e.textAlign = "center"),
                (e.textBaseline = "middle"),
                ut.each(t.ticks, function (n, o) {
                  (0 !== o || r.reverse) &&
                    ((i = t.getDistanceFromCenterForValue(t.ticksAsNumbers[o])),
                    r.showLabelBackdrop &&
                      ((a = e.measureText(n).width),
                      (e.fillStyle = r.backdropColor),
                      e.fillRect(
                        -a / 2 - r.backdropPaddingX,
                        -i - s.size / 2 - r.backdropPaddingY,
                        a + 2 * r.backdropPaddingX,
                        s.size + 2 * r.backdropPaddingY
                      )),
                    (e.fillStyle = l),
                    e.fillText(n, 0, -i));
                }),
                e.restore();
            }
          },
          _drawTitle: ut.noop,
        }),
        ui = Qr;
      li._defaults = ui;
      var ci = ut._deprecated,
        di = ut.options.resolve,
        hi = ut.valueOrDefault,
        fi = Number.MIN_SAFE_INTEGER || -9007199254740991,
        pi = Number.MAX_SAFE_INTEGER || 9007199254740991,
        gi = {
          millisecond: { common: !0, size: 1, steps: 1e3 },
          second: { common: !0, size: 1e3, steps: 60 },
          minute: { common: !0, size: 6e4, steps: 60 },
          hour: { common: !0, size: 36e5, steps: 24 },
          day: { common: !0, size: 864e5, steps: 30 },
          week: { common: !1, size: 6048e5, steps: 4 },
          month: { common: !0, size: 2628e6, steps: 12 },
          quarter: { common: !1, size: 7884e6, steps: 4 },
          year: { common: !0, size: 3154e7 },
        },
        vi = Object.keys(gi);
      function mi(t, e) {
        return t - e;
      }
      function bi(t) {
        var e,
          n,
          r,
          i = {},
          a = [];
        for (e = 0, n = t.length; e < n; ++e)
          (r = t[e]), i[r] || ((i[r] = !0), a.push(r));
        return a;
      }
      function yi(t) {
        return ut.valueOrDefault(t.time.min, t.ticks.min);
      }
      function xi(t) {
        return ut.valueOrDefault(t.time.max, t.ticks.max);
      }
      function _i(t, e, n, r) {
        if ("linear" === r || !t.length)
          return [
            { time: e, pos: 0 },
            { time: n, pos: 1 },
          ];
        var i,
          a,
          o,
          s,
          l,
          u = [],
          c = [e];
        for (i = 0, a = t.length; i < a; ++i)
          (s = t[i]), s > e && s < n && c.push(s);
        for (c.push(n), i = 0, a = c.length; i < a; ++i)
          (l = c[i + 1]),
            (o = c[i - 1]),
            (s = c[i]),
            (void 0 !== o && void 0 !== l && Math.round((l + o) / 2) === s) ||
              u.push({ time: s, pos: i / (a - 1) });
        return u;
      }
      function wi(t, e, n) {
        var r,
          i,
          a,
          o = 0,
          s = t.length - 1;
        while (o >= 0 && o <= s) {
          if (((r = (o + s) >> 1), (i = t[r - 1] || null), (a = t[r]), !i))
            return { lo: null, hi: a };
          if (a[e] < n) o = r + 1;
          else {
            if (!(i[e] > n)) return { lo: i, hi: a };
            s = r - 1;
          }
        }
        return { lo: a, hi: null };
      }
      function ki(t, e, n, r) {
        var i = wi(t, e, n),
          a = i.lo ? (i.hi ? i.lo : t[t.length - 2]) : t[0],
          o = i.lo ? (i.hi ? i.hi : t[t.length - 1]) : t[1],
          s = o[e] - a[e],
          l = s ? (n - a[e]) / s : 0,
          u = (o[r] - a[r]) * l;
        return a[r] + u;
      }
      function Ci(t, e) {
        var n = t._adapter,
          r = t.options.time,
          i = r.parser,
          a = i || r.format,
          o = e;
        return (
          "function" === typeof i && (o = i(o)),
          ut.isFinite(o) ||
            (o = "string" === typeof a ? n.parse(o, a) : n.parse(o)),
          null !== o
            ? +o
            : (i ||
                "function" !== typeof a ||
                ((o = a(e)), ut.isFinite(o) || (o = n.parse(o))),
              o)
        );
      }
      function Mi(t, e) {
        if (ut.isNullOrUndef(e)) return null;
        var n = t.options.time,
          r = Ci(t, t.getRightValue(e));
        return (
          null === r || (n.round && (r = +t._adapter.startOf(r, n.round))), r
        );
      }
      function Si(t, e, n, r) {
        var i,
          a,
          o,
          s = vi.length;
        for (i = vi.indexOf(t); i < s - 1; ++i)
          if (
            ((a = gi[vi[i]]),
            (o = a.steps ? a.steps : pi),
            a.common && Math.ceil((n - e) / (o * a.size)) <= r)
          )
            return vi[i];
        return vi[s - 1];
      }
      function Ai(t, e, n, r, i) {
        var a, o;
        for (a = vi.length - 1; a >= vi.indexOf(n); a--)
          if (((o = vi[a]), gi[o].common && t._adapter.diff(i, r, o) >= e - 1))
            return o;
        return vi[n ? vi.indexOf(n) : 0];
      }
      function Pi(t) {
        for (var e = vi.indexOf(t) + 1, n = vi.length; e < n; ++e)
          if (gi[vi[e]].common) return vi[e];
      }
      function Di(t, e, n, r) {
        var i,
          a = t._adapter,
          o = t.options,
          s = o.time,
          l = s.unit || Si(s.minUnit, e, n, r),
          u = di([s.stepSize, s.unitStepSize, 1]),
          c = "week" === l && s.isoWeekday,
          d = e,
          h = [];
        if (
          (c && (d = +a.startOf(d, "isoWeek", c)),
          (d = +a.startOf(d, c ? "day" : l)),
          a.diff(n, e, l) > 1e5 * u)
        )
          throw (
            e +
            " and " +
            n +
            " are too far apart with stepSize of " +
            u +
            " " +
            l
          );
        for (i = d; i < n; i = +a.add(i, u, l)) h.push(i);
        return (i !== n && "ticks" !== o.bounds) || h.push(i), h;
      }
      function Ti(t, e, n, r, i) {
        var a,
          o,
          s = 0,
          l = 0;
        return (
          i.offset &&
            e.length &&
            ((a = ki(t, "time", e[0], "pos")),
            (s = 1 === e.length ? 1 - a : (ki(t, "time", e[1], "pos") - a) / 2),
            (o = ki(t, "time", e[e.length - 1], "pos")),
            (l =
              1 === e.length
                ? o
                : (o - ki(t, "time", e[e.length - 2], "pos")) / 2)),
          { start: s, end: l, factor: 1 / (s + 1 + l) }
        );
      }
      function Oi(t, e, n, r) {
        var i,
          a,
          o = t._adapter,
          s = +o.startOf(e[0].value, r),
          l = e[e.length - 1].value;
        for (i = s; i <= l; i = +o.add(i, 1, r))
          (a = n[i]), a >= 0 && (e[a].major = !0);
        return e;
      }
      function Ii(t, e, n) {
        var r,
          i,
          a = [],
          o = {},
          s = e.length;
        for (r = 0; r < s; ++r)
          (i = e[r]), (o[i] = r), a.push({ value: i, major: !1 });
        return 0 !== s && n ? Oi(t, a, o, n) : a;
      }
      var Fi = {
          position: "bottom",
          distribution: "linear",
          bounds: "data",
          adapters: {},
          time: {
            parser: !1,
            unit: !1,
            round: !1,
            displayFormat: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {},
          },
          ticks: { autoSkip: !1, source: "auto", major: { enabled: !1 } },
        },
        Li = Cr.extend({
          initialize: function () {
            this.mergeTicksOptions(), Cr.prototype.initialize.call(this);
          },
          update: function () {
            var t = this,
              e = t.options,
              n = e.time || (e.time = {}),
              r = (t._adapter = new rr._date(e.adapters.date));
            return (
              ci("time scale", n.format, "time.format", "time.parser"),
              ci("time scale", n.min, "time.min", "ticks.min"),
              ci("time scale", n.max, "time.max", "ticks.max"),
              ut.mergeIf(n.displayFormats, r.formats()),
              Cr.prototype.update.apply(t, arguments)
            );
          },
          getRightValue: function (t) {
            return (
              t && void 0 !== t.t && (t = t.t),
              Cr.prototype.getRightValue.call(this, t)
            );
          },
          determineDataLimits: function () {
            var t,
              e,
              n,
              r,
              i,
              a,
              o,
              s = this,
              l = s.chart,
              u = s._adapter,
              c = s.options,
              d = c.time.unit || "day",
              h = pi,
              f = fi,
              p = [],
              g = [],
              v = [],
              m = s._getLabels();
            for (t = 0, n = m.length; t < n; ++t) v.push(Mi(s, m[t]));
            for (t = 0, n = (l.data.datasets || []).length; t < n; ++t)
              if (l.isDatasetVisible(t))
                if (((i = l.data.datasets[t].data), ut.isObject(i[0])))
                  for (g[t] = [], e = 0, r = i.length; e < r; ++e)
                    (a = Mi(s, i[e])), p.push(a), (g[t][e] = a);
                else (g[t] = v.slice(0)), o || ((p = p.concat(v)), (o = !0));
              else g[t] = [];
            v.length &&
              ((h = Math.min(h, v[0])), (f = Math.max(f, v[v.length - 1]))),
              p.length &&
                ((p = n > 1 ? bi(p).sort(mi) : p.sort(mi)),
                (h = Math.min(h, p[0])),
                (f = Math.max(f, p[p.length - 1]))),
              (h = Mi(s, yi(c)) || h),
              (f = Mi(s, xi(c)) || f),
              (h = h === pi ? +u.startOf(Date.now(), d) : h),
              (f = f === fi ? +u.endOf(Date.now(), d) + 1 : f),
              (s.min = Math.min(h, f)),
              (s.max = Math.max(h + 1, f)),
              (s._table = []),
              (s._timestamps = { data: p, datasets: g, labels: v });
          },
          buildTicks: function () {
            var t,
              e,
              n,
              r = this,
              i = r.min,
              a = r.max,
              o = r.options,
              s = o.ticks,
              l = o.time,
              u = r._timestamps,
              c = [],
              d = r.getLabelCapacity(i),
              h = s.source,
              f = o.distribution;
            for (
              u =
                "data" === h || ("auto" === h && "series" === f)
                  ? u.data
                  : "labels" === h
                  ? u.labels
                  : Di(r, i, a, d),
                "ticks" === o.bounds &&
                  u.length &&
                  ((i = u[0]), (a = u[u.length - 1])),
                i = Mi(r, yi(o)) || i,
                a = Mi(r, xi(o)) || a,
                t = 0,
                e = u.length;
              t < e;
              ++t
            )
              (n = u[t]), n >= i && n <= a && c.push(n);
            return (
              (r.min = i),
              (r.max = a),
              (r._unit =
                l.unit ||
                (s.autoSkip
                  ? Si(l.minUnit, r.min, r.max, d)
                  : Ai(r, c.length, l.minUnit, r.min, r.max))),
              (r._majorUnit =
                s.major.enabled && "year" !== r._unit ? Pi(r._unit) : void 0),
              (r._table = _i(r._timestamps.data, i, a, f)),
              (r._offsets = Ti(r._table, c, i, a, o)),
              s.reverse && c.reverse(),
              Ii(r, c, r._majorUnit)
            );
          },
          getLabelForIndex: function (t, e) {
            var n = this,
              r = n._adapter,
              i = n.chart.data,
              a = n.options.time,
              o = i.labels && t < i.labels.length ? i.labels[t] : "",
              s = i.datasets[e].data[t];
            return (
              ut.isObject(s) && (o = n.getRightValue(s)),
              a.tooltipFormat
                ? r.format(Ci(n, o), a.tooltipFormat)
                : "string" === typeof o
                ? o
                : r.format(Ci(n, o), a.displayFormats.datetime)
            );
          },
          tickFormatFunction: function (t, e, n, r) {
            var i = this,
              a = i._adapter,
              o = i.options,
              s = o.time.displayFormats,
              l = s[i._unit],
              u = i._majorUnit,
              c = s[u],
              d = n[e],
              h = o.ticks,
              f = u && c && d && d.major,
              p = a.format(t, r || (f ? c : l)),
              g = f ? h.major : h.minor,
              v = di([g.callback, g.userCallback, h.callback, h.userCallback]);
            return v ? v(p, e, n) : p;
          },
          convertTicksToLabels: function (t) {
            var e,
              n,
              r = [];
            for (e = 0, n = t.length; e < n; ++e)
              r.push(this.tickFormatFunction(t[e].value, e, t));
            return r;
          },
          getPixelForOffset: function (t) {
            var e = this,
              n = e._offsets,
              r = ki(e._table, "time", t, "pos");
            return e.getPixelForDecimal((n.start + r) * n.factor);
          },
          getPixelForValue: function (t, e, n) {
            var r = this,
              i = null;
            if (
              (void 0 !== e &&
                void 0 !== n &&
                (i = r._timestamps.datasets[n][e]),
              null === i && (i = Mi(r, t)),
              null !== i)
            )
              return r.getPixelForOffset(i);
          },
          getPixelForTick: function (t) {
            var e = this.getTicks();
            return t >= 0 && t < e.length
              ? this.getPixelForOffset(e[t].value)
              : null;
          },
          getValueForPixel: function (t) {
            var e = this,
              n = e._offsets,
              r = e.getDecimalForPixel(t) / n.factor - n.end,
              i = ki(e._table, "pos", r, "time");
            return e._adapter._create(i);
          },
          _getLabelSize: function (t) {
            var e = this,
              n = e.options.ticks,
              r = e.ctx.measureText(t).width,
              i = ut.toRadians(
                e.isHorizontal() ? n.maxRotation : n.minRotation
              ),
              a = Math.cos(i),
              o = Math.sin(i),
              s = hi(n.fontSize, Q.global.defaultFontSize);
            return { w: r * a + s * o, h: r * o + s * a };
          },
          getLabelWidth: function (t) {
            return this._getLabelSize(t).w;
          },
          getLabelCapacity: function (t) {
            var e = this,
              n = e.options.time,
              r = n.displayFormats,
              i = r[n.unit] || r.millisecond,
              a = e.tickFormatFunction(t, 0, Ii(e, [t], e._majorUnit), i),
              o = e._getLabelSize(a),
              s = Math.floor(e.isHorizontal() ? e.width / o.w : e.height / o.h);
            return e.options.offset && s--, s > 0 ? s : 1;
          },
        }),
        Ei = Fi;
      Li._defaults = Ei;
      var Ni = {
          category: Ar,
          linear: Br,
          logarithmic: Ur,
          radialLinear: li,
          time: Li,
        },
        Ri = {
          datetime: "MMM D, YYYY, h:mm:ss a",
          millisecond: "h:mm:ss.SSS a",
          second: "h:mm:ss a",
          minute: "h:mm a",
          hour: "hA",
          day: "MMM D",
          week: "ll",
          month: "MMM YYYY",
          quarter: "[Q]Q - YYYY",
          year: "YYYY",
        };
      rr._date.override(
        "function" === typeof t
          ? {
              _id: "moment",
              formats: function () {
                return Ri;
              },
              parse: function (e, n) {
                return (
                  "string" === typeof e && "string" === typeof n
                    ? (e = t(e, n))
                    : e instanceof t || (e = t(e)),
                  e.isValid() ? e.valueOf() : null
                );
              },
              format: function (e, n) {
                return t(e).format(n);
              },
              add: function (e, n, r) {
                return t(e).add(n, r).valueOf();
              },
              diff: function (e, n, r) {
                return t(e).diff(t(n), r);
              },
              startOf: function (e, n, r) {
                return (
                  (e = t(e)),
                  "isoWeek" === n
                    ? e.isoWeekday(r).valueOf()
                    : e.startOf(n).valueOf()
                );
              },
              endOf: function (e, n) {
                return t(e).endOf(n).valueOf();
              },
              _create: function (e) {
                return t(e);
              },
            }
          : {}
      ),
        Q._set("global", { plugins: { filler: { propagate: !0 } } });
      var zi = {
        dataset: function (t) {
          var e = t.fill,
            n = t.chart,
            r = n.getDatasetMeta(e),
            i = r && n.isDatasetVisible(e),
            a = (i && r.dataset._children) || [],
            o = a.length || 0;
          return o
            ? function (t, e) {
                return (e < o && a[e]._view) || null;
              }
            : null;
        },
        boundary: function (t) {
          var e = t.boundary,
            n = e ? e.x : null,
            r = e ? e.y : null;
          return ut.isArray(e)
            ? function (t, n) {
                return e[n];
              }
            : function (t) {
                return { x: null === n ? t.x : n, y: null === r ? t.y : r };
              };
        },
      };
      function Bi(t, e, n) {
        var r,
          i = t._model || {},
          a = i.fill;
        if ((void 0 === a && (a = !!i.backgroundColor), !1 === a || null === a))
          return !1;
        if (!0 === a) return "origin";
        if (((r = parseFloat(a, 10)), isFinite(r) && Math.floor(r) === r))
          return (
            ("-" !== a[0] && "+" !== a[0]) || (r = e + r),
            !(r === e || r < 0 || r >= n) && r
          );
        switch (a) {
          case "bottom":
            return "start";
          case "top":
            return "end";
          case "zero":
            return "origin";
          case "origin":
          case "start":
          case "end":
            return a;
          default:
            return !1;
        }
      }
      function Vi(t) {
        var e,
          n = t.el._model || {},
          r = t.el._scale || {},
          i = t.fill,
          a = null;
        if (isFinite(i)) return null;
        if (
          ("start" === i
            ? (a = void 0 === n.scaleBottom ? r.bottom : n.scaleBottom)
            : "end" === i
            ? (a = void 0 === n.scaleTop ? r.top : n.scaleTop)
            : void 0 !== n.scaleZero
            ? (a = n.scaleZero)
            : r.getBasePixel && (a = r.getBasePixel()),
          void 0 !== a && null !== a)
        ) {
          if (void 0 !== a.x && void 0 !== a.y) return a;
          if (ut.isFinite(a))
            return (e = r.isHorizontal()), { x: e ? a : null, y: e ? null : a };
        }
        return null;
      }
      function $i(t) {
        var e,
          n,
          r,
          i,
          a,
          o = t.el._scale,
          s = o.options,
          l = o.chart.data.labels.length,
          u = t.fill,
          c = [];
        if (!l) return null;
        for (
          e = s.ticks.reverse ? o.max : o.min,
            n = s.ticks.reverse ? o.min : o.max,
            r = o.getPointPositionForValue(0, e),
            i = 0;
          i < l;
          ++i
        )
          (a =
            "start" === u || "end" === u
              ? o.getPointPositionForValue(i, "start" === u ? e : n)
              : o.getBasePosition(i)),
            s.gridLines.circular &&
              ((a.cx = r.x),
              (a.cy = r.y),
              (a.angle = o.getIndexAngle(i) - Math.PI / 2)),
            c.push(a);
        return c;
      }
      function Wi(t) {
        var e = t.el._scale || {};
        return e.getPointPositionForValue ? $i(t) : Vi(t);
      }
      function ji(t, e, n) {
        var r,
          i = t[e],
          a = i.fill,
          o = [e];
        if (!n) return a;
        while (!1 !== a && -1 === o.indexOf(a)) {
          if (!isFinite(a)) return a;
          if (((r = t[a]), !r)) return !1;
          if (r.visible) return a;
          o.push(a), (a = r.fill);
        }
        return !1;
      }
      function Hi(t) {
        var e = t.fill,
          n = "dataset";
        return !1 === e ? null : (isFinite(e) || (n = "boundary"), zi[n](t));
      }
      function qi(t) {
        return t && !t.skip;
      }
      function Ui(t, e, n, r, i) {
        var a, o, s, l;
        if (r && i) {
          for (t.moveTo(e[0].x, e[0].y), a = 1; a < r; ++a)
            ut.canvas.lineTo(t, e[a - 1], e[a]);
          if (void 0 === n[0].angle)
            for (t.lineTo(n[i - 1].x, n[i - 1].y), a = i - 1; a > 0; --a)
              ut.canvas.lineTo(t, n[a], n[a - 1], !0);
          else
            for (
              o = n[0].cx,
                s = n[0].cy,
                l = Math.sqrt(
                  Math.pow(n[0].x - o, 2) + Math.pow(n[0].y - s, 2)
                ),
                a = i - 1;
              a > 0;
              --a
            )
              t.arc(o, s, l, n[a].angle, n[a - 1].angle, !0);
        }
      }
      function Yi(t, e, n, r, i, a) {
        var o,
          s,
          l,
          u,
          c,
          d,
          h,
          f,
          p = e.length,
          g = r.spanGaps,
          v = [],
          m = [],
          b = 0,
          y = 0;
        for (t.beginPath(), o = 0, s = p; o < s; ++o)
          (l = o % p),
            (u = e[l]._view),
            (c = n(u, l, r)),
            (d = qi(u)),
            (h = qi(c)),
            a && void 0 === f && d && ((f = o + 1), (s = p + f)),
            d && h
              ? ((b = v.push(u)), (y = m.push(c)))
              : b &&
                y &&
                (g
                  ? (d && v.push(u), h && m.push(c))
                  : (Ui(t, v, m, b, y), (b = y = 0), (v = []), (m = [])));
        Ui(t, v, m, b, y), t.closePath(), (t.fillStyle = i), t.fill();
      }
      var Gi = {
          id: "filler",
          afterDatasetsUpdate: function (t, e) {
            var n,
              r,
              i,
              a,
              o = (t.data.datasets || []).length,
              s = e.propagate,
              l = [];
            for (r = 0; r < o; ++r)
              (n = t.getDatasetMeta(r)),
                (i = n.dataset),
                (a = null),
                i &&
                  i._model &&
                  i instanceof Kt.Line &&
                  (a = {
                    visible: t.isDatasetVisible(r),
                    fill: Bi(i, r, o),
                    chart: t,
                    el: i,
                  }),
                (n.$filler = a),
                l.push(a);
            for (r = 0; r < o; ++r)
              (a = l[r]),
                a &&
                  ((a.fill = ji(l, r, s)),
                  (a.boundary = Wi(a)),
                  (a.mapper = Hi(a)));
          },
          beforeDatasetsDraw: function (t) {
            var e,
              n,
              r,
              i,
              a,
              o,
              s,
              l = t._getSortedVisibleDatasetMetas(),
              u = t.ctx;
            for (n = l.length - 1; n >= 0; --n)
              (e = l[n].$filler),
                e &&
                  e.visible &&
                  ((r = e.el),
                  (i = r._view),
                  (a = r._children || []),
                  (o = e.mapper),
                  (s = i.backgroundColor || Q.global.defaultColor),
                  o &&
                    s &&
                    a.length &&
                    (ut.canvas.clipArea(u, t.chartArea),
                    Yi(u, a, o, i, s, r._loop),
                    ut.canvas.unclipArea(u)));
          },
        },
        Ki = ut.rtl.getRtlAdapter,
        Xi = ut.noop,
        Qi = ut.valueOrDefault;
      function Zi(t, e) {
        return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth;
      }
      Q._set("global", {
        legend: {
          display: !0,
          position: "top",
          align: "center",
          fullWidth: !0,
          reverse: !1,
          weight: 1e3,
          onClick: function (t, e) {
            var n = e.datasetIndex,
              r = this.chart,
              i = r.getDatasetMeta(n);
            (i.hidden = null === i.hidden ? !r.data.datasets[n].hidden : null),
              r.update();
          },
          onHover: null,
          onLeave: null,
          labels: {
            boxWidth: 40,
            padding: 10,
            generateLabels: function (t) {
              var e = t.data.datasets,
                n = t.options.legend || {},
                r = n.labels && n.labels.usePointStyle;
              return t._getSortedDatasetMetas().map(function (n) {
                var i = n.controller.getStyle(r ? 0 : void 0);
                return {
                  text: e[n.index].label,
                  fillStyle: i.backgroundColor,
                  hidden: !t.isDatasetVisible(n.index),
                  lineCap: i.borderCapStyle,
                  lineDash: i.borderDash,
                  lineDashOffset: i.borderDashOffset,
                  lineJoin: i.borderJoinStyle,
                  lineWidth: i.borderWidth,
                  strokeStyle: i.borderColor,
                  pointStyle: i.pointStyle,
                  rotation: i.rotation,
                  datasetIndex: n.index,
                };
              }, this);
            },
          },
        },
        legendCallback: function (t) {
          var e,
            n,
            r,
            i,
            a = document.createElement("ul"),
            o = t.data.datasets;
          for (
            a.setAttribute("class", t.id + "-legend"), e = 0, n = o.length;
            e < n;
            e++
          )
            (r = a.appendChild(document.createElement("li"))),
              (i = r.appendChild(document.createElement("span"))),
              (i.style.backgroundColor = o[e].backgroundColor),
              o[e].label && r.appendChild(document.createTextNode(o[e].label));
          return a.outerHTML;
        },
      });
      var Ji = mt.extend({
        initialize: function (t) {
          var e = this;
          ut.extend(e, t),
            (e.legendHitBoxes = []),
            (e._hoveredItem = null),
            (e.doughnutMode = !1);
        },
        beforeUpdate: Xi,
        update: function (t, e, n) {
          var r = this;
          return (
            r.beforeUpdate(),
            (r.maxWidth = t),
            (r.maxHeight = e),
            (r.margins = n),
            r.beforeSetDimensions(),
            r.setDimensions(),
            r.afterSetDimensions(),
            r.beforeBuildLabels(),
            r.buildLabels(),
            r.afterBuildLabels(),
            r.beforeFit(),
            r.fit(),
            r.afterFit(),
            r.afterUpdate(),
            r.minSize
          );
        },
        afterUpdate: Xi,
        beforeSetDimensions: Xi,
        setDimensions: function () {
          var t = this;
          t.isHorizontal()
            ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
            : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
            (t.paddingLeft = 0),
            (t.paddingTop = 0),
            (t.paddingRight = 0),
            (t.paddingBottom = 0),
            (t.minSize = { width: 0, height: 0 });
        },
        afterSetDimensions: Xi,
        beforeBuildLabels: Xi,
        buildLabels: function () {
          var t = this,
            e = t.options.labels || {},
            n = ut.callback(e.generateLabels, [t.chart], t) || [];
          e.filter &&
            (n = n.filter(function (n) {
              return e.filter(n, t.chart.data);
            })),
            t.options.reverse && n.reverse(),
            (t.legendItems = n);
        },
        afterBuildLabels: Xi,
        beforeFit: Xi,
        fit: function () {
          var t = this,
            e = t.options,
            n = e.labels,
            r = e.display,
            i = t.ctx,
            a = ut.options._parseFont(n),
            o = a.size,
            s = (t.legendHitBoxes = []),
            l = t.minSize,
            u = t.isHorizontal();
          if (
            (u
              ? ((l.width = t.maxWidth), (l.height = r ? 10 : 0))
              : ((l.width = r ? 10 : 0), (l.height = t.maxHeight)),
            r)
          ) {
            if (((i.font = a.string), u)) {
              var c = (t.lineWidths = [0]),
                d = 0;
              (i.textAlign = "left"),
                (i.textBaseline = "middle"),
                ut.each(t.legendItems, function (t, e) {
                  var r = Zi(n, o),
                    a = r + o / 2 + i.measureText(t.text).width;
                  (0 === e || c[c.length - 1] + a + 2 * n.padding > l.width) &&
                    ((d += o + n.padding), (c[c.length - (e > 0 ? 0 : 1)] = 0)),
                    (s[e] = { left: 0, top: 0, width: a, height: o }),
                    (c[c.length - 1] += a + n.padding);
                }),
                (l.height += d);
            } else {
              var h = n.padding,
                f = (t.columnWidths = []),
                p = (t.columnHeights = []),
                g = n.padding,
                v = 0,
                m = 0;
              ut.each(t.legendItems, function (t, e) {
                var r = Zi(n, o),
                  a = r + o / 2 + i.measureText(t.text).width;
                e > 0 &&
                  m + o + 2 * h > l.height &&
                  ((g += v + n.padding),
                  f.push(v),
                  p.push(m),
                  (v = 0),
                  (m = 0)),
                  (v = Math.max(v, a)),
                  (m += o + h),
                  (s[e] = { left: 0, top: 0, width: a, height: o });
              }),
                (g += v),
                f.push(v),
                p.push(m),
                (l.width += g);
            }
            (t.width = l.width), (t.height = l.height);
          } else t.width = l.width = t.height = l.height = 0;
        },
        afterFit: Xi,
        isHorizontal: function () {
          return (
            "top" === this.options.position ||
            "bottom" === this.options.position
          );
        },
        draw: function () {
          var t = this,
            e = t.options,
            n = e.labels,
            r = Q.global,
            i = r.defaultColor,
            a = r.elements.line,
            o = t.height,
            s = t.columnHeights,
            l = t.width,
            u = t.lineWidths;
          if (e.display) {
            var c,
              d = Ki(e.rtl, t.left, t.minSize.width),
              h = t.ctx,
              f = Qi(n.fontColor, r.defaultFontColor),
              p = ut.options._parseFont(n),
              g = p.size;
            (h.textAlign = d.textAlign("left")),
              (h.textBaseline = "middle"),
              (h.lineWidth = 0.5),
              (h.strokeStyle = f),
              (h.fillStyle = f),
              (h.font = p.string);
            var v = Zi(n, g),
              m = t.legendHitBoxes,
              b = function (t, e, r) {
                if (!(isNaN(v) || v <= 0)) {
                  h.save();
                  var o = Qi(r.lineWidth, a.borderWidth);
                  if (
                    ((h.fillStyle = Qi(r.fillStyle, i)),
                    (h.lineCap = Qi(r.lineCap, a.borderCapStyle)),
                    (h.lineDashOffset = Qi(
                      r.lineDashOffset,
                      a.borderDashOffset
                    )),
                    (h.lineJoin = Qi(r.lineJoin, a.borderJoinStyle)),
                    (h.lineWidth = o),
                    (h.strokeStyle = Qi(r.strokeStyle, i)),
                    h.setLineDash &&
                      h.setLineDash(Qi(r.lineDash, a.borderDash)),
                    n && n.usePointStyle)
                  ) {
                    var s = (v * Math.SQRT2) / 2,
                      l = d.xPlus(t, v / 2),
                      u = e + g / 2;
                    ut.canvas.drawPoint(h, r.pointStyle, s, l, u, r.rotation);
                  } else
                    h.fillRect(d.leftForLtr(t, v), e, v, g),
                      0 !== o && h.strokeRect(d.leftForLtr(t, v), e, v, g);
                  h.restore();
                }
              },
              y = function (t, e, n, r) {
                var i = g / 2,
                  a = d.xPlus(t, v + i),
                  o = e + i;
                h.fillText(n.text, a, o),
                  n.hidden &&
                    (h.beginPath(),
                    (h.lineWidth = 2),
                    h.moveTo(a, o),
                    h.lineTo(d.xPlus(a, r), o),
                    h.stroke());
              },
              x = function (t, r) {
                switch (e.align) {
                  case "start":
                    return n.padding;
                  case "end":
                    return t - r;
                  default:
                    return (t - r + n.padding) / 2;
                }
              },
              _ = t.isHorizontal();
            (c = _
              ? { x: t.left + x(l, u[0]), y: t.top + n.padding, line: 0 }
              : { x: t.left + n.padding, y: t.top + x(o, s[0]), line: 0 }),
              ut.rtl.overrideTextDirection(t.ctx, e.textDirection);
            var w = g + n.padding;
            ut.each(t.legendItems, function (e, r) {
              var i = h.measureText(e.text).width,
                a = v + g / 2 + i,
                f = c.x,
                p = c.y;
              d.setWidth(t.minSize.width),
                _
                  ? r > 0 &&
                    f + a + n.padding > t.left + t.minSize.width &&
                    ((p = c.y += w),
                    c.line++,
                    (f = c.x = t.left + x(l, u[c.line])))
                  : r > 0 &&
                    p + w > t.top + t.minSize.height &&
                    ((f = c.x = f + t.columnWidths[c.line] + n.padding),
                    c.line++,
                    (p = c.y = t.top + x(o, s[c.line])));
              var k = d.x(f);
              b(k, p, e),
                (m[r].left = d.leftForLtr(k, m[r].width)),
                (m[r].top = p),
                y(k, p, e, i),
                _ ? (c.x += a + n.padding) : (c.y += w);
            }),
              ut.rtl.restoreTextDirection(t.ctx, e.textDirection);
          }
        },
        _getLegendItemAt: function (t, e) {
          var n,
            r,
            i,
            a = this;
          if (t >= a.left && t <= a.right && e >= a.top && e <= a.bottom)
            for (i = a.legendHitBoxes, n = 0; n < i.length; ++n)
              if (
                ((r = i[n]),
                t >= r.left &&
                  t <= r.left + r.width &&
                  e >= r.top &&
                  e <= r.top + r.height)
              )
                return a.legendItems[n];
          return null;
        },
        handleEvent: function (t) {
          var e,
            n = this,
            r = n.options,
            i = "mouseup" === t.type ? "click" : t.type;
          if ("mousemove" === i) {
            if (!r.onHover && !r.onLeave) return;
          } else {
            if ("click" !== i) return;
            if (!r.onClick) return;
          }
          (e = n._getLegendItemAt(t.x, t.y)),
            "click" === i
              ? e && r.onClick && r.onClick.call(n, t.native, e)
              : (r.onLeave &&
                  e !== n._hoveredItem &&
                  (n._hoveredItem &&
                    r.onLeave.call(n, t.native, n._hoveredItem),
                  (n._hoveredItem = e)),
                r.onHover && e && r.onHover.call(n, t.native, e));
        },
      });
      function ta(t, e) {
        var n = new Ji({ ctx: t.ctx, options: e, chart: t });
        Ge.configure(t, n, e), Ge.addBox(t, n), (t.legend = n);
      }
      var ea = {
          id: "legend",
          _element: Ji,
          beforeInit: function (t) {
            var e = t.options.legend;
            e && ta(t, e);
          },
          beforeUpdate: function (t) {
            var e = t.options.legend,
              n = t.legend;
            e
              ? (ut.mergeIf(e, Q.global.legend),
                n ? (Ge.configure(t, n, e), (n.options = e)) : ta(t, e))
              : n && (Ge.removeBox(t, n), delete t.legend);
          },
          afterEvent: function (t, e) {
            var n = t.legend;
            n && n.handleEvent(e);
          },
        },
        na = ut.noop;
      Q._set("global", {
        title: {
          display: !1,
          fontStyle: "bold",
          fullWidth: !0,
          padding: 10,
          position: "top",
          text: "",
          weight: 2e3,
        },
      });
      var ra = mt.extend({
        initialize: function (t) {
          var e = this;
          ut.extend(e, t), (e.legendHitBoxes = []);
        },
        beforeUpdate: na,
        update: function (t, e, n) {
          var r = this;
          return (
            r.beforeUpdate(),
            (r.maxWidth = t),
            (r.maxHeight = e),
            (r.margins = n),
            r.beforeSetDimensions(),
            r.setDimensions(),
            r.afterSetDimensions(),
            r.beforeBuildLabels(),
            r.buildLabels(),
            r.afterBuildLabels(),
            r.beforeFit(),
            r.fit(),
            r.afterFit(),
            r.afterUpdate(),
            r.minSize
          );
        },
        afterUpdate: na,
        beforeSetDimensions: na,
        setDimensions: function () {
          var t = this;
          t.isHorizontal()
            ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
            : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
            (t.paddingLeft = 0),
            (t.paddingTop = 0),
            (t.paddingRight = 0),
            (t.paddingBottom = 0),
            (t.minSize = { width: 0, height: 0 });
        },
        afterSetDimensions: na,
        beforeBuildLabels: na,
        buildLabels: na,
        afterBuildLabels: na,
        beforeFit: na,
        fit: function () {
          var t,
            e,
            n = this,
            r = n.options,
            i = (n.minSize = {}),
            a = n.isHorizontal();
          r.display
            ? ((t = ut.isArray(r.text) ? r.text.length : 1),
              (e = t * ut.options._parseFont(r).lineHeight + 2 * r.padding),
              (n.width = i.width = a ? n.maxWidth : e),
              (n.height = i.height = a ? e : n.maxHeight))
            : (n.width = i.width = n.height = i.height = 0);
        },
        afterFit: na,
        isHorizontal: function () {
          var t = this.options.position;
          return "top" === t || "bottom" === t;
        },
        draw: function () {
          var t = this,
            e = t.ctx,
            n = t.options;
          if (n.display) {
            var r,
              i,
              a,
              o = ut.options._parseFont(n),
              s = o.lineHeight,
              l = s / 2 + n.padding,
              u = 0,
              c = t.top,
              d = t.left,
              h = t.bottom,
              f = t.right;
            (e.fillStyle = ut.valueOrDefault(
              n.fontColor,
              Q.global.defaultFontColor
            )),
              (e.font = o.string),
              t.isHorizontal()
                ? ((i = d + (f - d) / 2), (a = c + l), (r = f - d))
                : ((i = "left" === n.position ? d + l : f - l),
                  (a = c + (h - c) / 2),
                  (r = h - c),
                  (u = Math.PI * ("left" === n.position ? -0.5 : 0.5))),
              e.save(),
              e.translate(i, a),
              e.rotate(u),
              (e.textAlign = "center"),
              (e.textBaseline = "middle");
            var p = n.text;
            if (ut.isArray(p))
              for (var g = 0, v = 0; v < p.length; ++v)
                e.fillText(p[v], 0, g, r), (g += s);
            else e.fillText(p, 0, 0, r);
            e.restore();
          }
        },
      });
      function ia(t, e) {
        var n = new ra({ ctx: t.ctx, options: e, chart: t });
        Ge.configure(t, n, e), Ge.addBox(t, n), (t.titleBlock = n);
      }
      var aa = {
          id: "title",
          _element: ra,
          beforeInit: function (t) {
            var e = t.options.title;
            e && ia(t, e);
          },
          beforeUpdate: function (t) {
            var e = t.options.title,
              n = t.titleBlock;
            e
              ? (ut.mergeIf(e, Q.global.title),
                n ? (Ge.configure(t, n, e), (n.options = e)) : ia(t, e))
              : n && (Ge.removeBox(t, n), delete t.titleBlock);
          },
        },
        oa = {},
        sa = Gi,
        la = ea,
        ua = aa;
      for (var ca in ((oa.filler = sa),
      (oa.legend = la),
      (oa.title = ua),
      (Zn.helpers = ut),
      Jn(),
      (Zn._adapters = rr),
      (Zn.Animation = yt),
      (Zn.animationService = xt),
      (Zn.controllers = Pe),
      (Zn.DatasetController = St),
      (Zn.defaults = Q),
      (Zn.Element = mt),
      (Zn.elements = Kt),
      (Zn.Interaction = Ee),
      (Zn.layouts = Ge),
      (Zn.platform = Mn),
      (Zn.plugins = Sn),
      (Zn.Scale = Cr),
      (Zn.scaleService = An),
      (Zn.Ticks = ir),
      (Zn.Tooltip = Wn),
      Zn.helpers.each(Ni, function (t, e) {
        Zn.scaleService.registerScaleType(e, t, t._defaults);
      }),
      oa))
        oa.hasOwnProperty(ca) && Zn.plugins.register(oa[ca]);
      Zn.platform.initialize();
      var da = Zn;
      return (
        "undefined" !== typeof window && (window.Chart = Zn),
        (Zn.Chart = Zn),
        (Zn.Legend = oa.legend._element),
        (Zn.Title = oa.title._element),
        (Zn.pluginService = Zn.plugins),
        (Zn.PluginBase = Zn.Element.extend({})),
        (Zn.canvasHelpers = Zn.helpers.canvas),
        (Zn.layoutService = Zn.layouts),
        (Zn.LinearScaleBase = Ir),
        Zn.helpers.each(
          [
            "Bar",
            "Bubble",
            "Doughnut",
            "Line",
            "PolarArea",
            "Radar",
            "Scatter",
          ],
          function (t) {
            Zn[t] = function (e, n) {
              return new Zn(
                e,
                Zn.helpers.merge(n || {}, {
                  type: t.charAt(0).toLowerCase() + t.slice(1),
                })
              );
            };
          }
        ),
        da
      );
    });
  },
  "489f": function (t, e, n) {
    "use strict";
    var r = n("b57a"),
      i = n.n(r);
    i.a;
  },
  b57a: function (t, e, n) {},
  c32d: function (t, e) {
    if ("undefined" === typeof moment) {
      var n = new Error("Cannot find module 'moment'");
      throw ((n.code = "MODULE_NOT_FOUND"), n);
    }
    t.exports = moment;
  },
  c8ba: function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (r) {
      "object" === typeof window && (n = window);
    }
    t.exports = n;
  },
  d1e7: function (t, e, n) {},
  da61: function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n("2b0e"),
      i = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.showInterface
          ? n(
              "main",
              {
                staticClass:
                  "flex h-screen bg-opacity-50 bg-black items-center justify-center",
              },
              [
                n(
                  "div",
                  {
                    staticClass:
                      "w-full bg-white shadow-2xl rounded-md max-w-screen-xl",
                  },
                  [
                    n(
                      "m-app-bar",
                      [
                        n("m-icon", { staticClass: "mr-2" }, [t._v("storage")]),
                        n("span", [t._v("MySQL Explorer")]),
                        n("div", { staticClass: "flex-grow" }),
                        n(
                          "m-icon",
                          {
                            staticClass:
                              "\n          cursor-pointer rounded-full hover:bg-white hover:bg-opacity-10\n          transition duration-300 ease-in-out\n        ",
                            nativeOn: {
                              click: function (e) {
                                return t.close();
                              },
                            },
                          },
                          [t._v(" close ")]
                        ),
                      ],
                      1
                    ),
                    n(
                      "m-tabs",
                      [
                        n(
                          "m-tab-item",
                          {
                            attrs: { label: "Time-resolved", icon: "timeline" },
                          },
                          [
                            n(
                              "div",
                              {
                                staticClass: "p-2",
                                staticStyle: { height: "480px" },
                              },
                              [
                                n("m-chart", {
                                  attrs: {
                                    id: "time-graph",
                                    chartFontFamily:
                                      "'Fira Sans', 'sans-serif'",
                                    labels: t.timeLabels,
                                    datasets: t.timeData,
                                    height: 540,
                                  },
                                }),
                              ],
                              1
                            ),
                          ]
                        ),
                        n(
                          "m-tab-item",
                          { attrs: { label: "Resources", icon: "apps" } },
                          [
                            n(
                              "div",
                              {
                                staticClass: "p-2",
                                staticStyle: { height: "480px" },
                              },
                              [
                                n("m-chart", {
                                  attrs: {
                                    id: "resource-graph",
                                    chartFontFamily:
                                      "'Fira Sans', 'sans-serif'",
                                    labels: t.resourceLabels,
                                    datasets: t.resourceData,
                                    height: 540,
                                  },
                                }),
                              ],
                              1
                            ),
                          ]
                        ),
                        n(
                          "m-tab-item",
                          {
                            attrs: {
                              label: "Slowest Queries",
                              icon: "slow_motion_video",
                            },
                          },
                          [
                            n(
                              "div",
                              {
                                staticClass: "p-2",
                                staticStyle: { height: "480px" },
                              },
                              [
                                n("m-data-table", {
                                  attrs: {
                                    headers: t.headers,
                                    items: t.slowqueries,
                                    "items-per-page": 7,
                                  },
                                  scopedSlots: t._u(
                                    [
                                      {
                                        key: "row",
                                        fn: function (e) {
                                          return [
                                            n(
                                              "td",
                                              {
                                                staticClass: "text-center h-12",
                                              },
                                              [t._v(t._s(e.item.resource))]
                                            ),
                                            n(
                                              "td",
                                              { staticClass: "text-left h-12" },
                                              [t._v(t._s(e.item.sql))]
                                            ),
                                            n(
                                              "td",
                                              {
                                                staticClass: "text-center h-12",
                                              },
                                              [
                                                t._v(
                                                  t._s(e.item.queryTime) + "ms"
                                                ),
                                              ]
                                            ),
                                          ];
                                        },
                                      },
                                    ],
                                    null,
                                    !1,
                                    2546450369
                                  ),
                                }),
                              ],
                              1
                            ),
                          ]
                        ),
                        n(
                          "m-tab-item",
                          {
                            attrs: {
                              label: "Server Status",
                              icon: "settings_applications",
                            },
                          },
                          [
                            n(
                              "div",
                              {
                                staticClass: "p-2",
                                staticStyle: { height: "480px" },
                              },
                              [
                                n("m-server-status", {
                                  attrs: { resource: "ABCore-sql" },
                                }),
                              ],
                              1
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                    n("div", {
                      staticClass: "h-8 bg-black w-full rounded-b-md",
                    }),
                  ],
                  1
                ),
              ]
            )
          : t._e();
      },
      a = [],
      o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass:
              "bg-black text-gray-100 w-full py-1 px-3 rounded-t-md flex items-center h-8",
          },
          [t._t("default")],
          2
        );
      },
      s = [];
    function l(t, e, n, r, i, a, o, s) {
      var l,
        u = "function" === typeof t ? t.options : t;
      if (
        (e && ((u.render = e), (u.staticRenderFns = n), (u._compiled = !0)),
        r && (u.functional = !0),
        a && (u._scopeId = "data-v-" + a),
        o
          ? ((l = function (t) {
              (t =
                t ||
                (this.$vnode && this.$vnode.ssrContext) ||
                (this.parent &&
                  this.parent.$vnode &&
                  this.parent.$vnode.ssrContext)),
                t ||
                  "undefined" === typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                i && i.call(this, t),
                t && t._registeredComponents && t._registeredComponents.add(o);
            }),
            (u._ssrRegister = l))
          : i &&
            (l = s
              ? function () {
                  i.call(
                    this,
                    (u.functional ? this.parent : this).$root.$options
                      .shadowRoot
                  );
                }
              : i),
        l)
      )
        if (u.functional) {
          u._injectStyles = l;
          var c = u.render;
          u.render = function (t, e) {
            return l.call(e), c(t, e);
          };
        } else {
          var d = u.beforeCreate;
          u.beforeCreate = d ? [].concat(d, l) : [l];
        }
      return { exports: t, options: u };
    }
    var u = {},
      c = l(u, o, s, !1, null, null, null),
      d = c.exports,
      h = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("canvas", {
          attrs: { id: t.id, width: t.width, height: t.height },
        });
      },
      f = [],
      p = n("30ef"),
      g = n.n(p),
      v = {
        data() {
          return { myChart: null };
        },
        methods: {
          createChart(t) {
            g.a.defaults.global.defaultFontFamily = this.chartFontFamily;
            const e = document.getElementById(t);
            this.myChart = new g.a(e, {
              type: this.type,
              data: { labels: this.labels, datasets: this.datasets },
              options: {
                responsive: !0,
                lineTension: 1,
                scales: { yAxes: [{ ticks: { beginAtZero: !0 } }] },
              },
            });
          },
          arraysEqual(t, e) {
            if (t === e) return !0;
            if (null === t || null === e) return !1;
            if (t.length !== e.length) return !1;
            for (let n = 0; n < t.length; n += 1) if (t[n] !== e[n]) return !1;
            return !0;
          },
        },
        props: {
          id: { type: String, default: "line-chart" },
          type: { type: String, default: "line" },
          datasets: { type: Array, default: () => [] },
          labels: { type: Array, default: () => [] },
          height: { type: Number, default: 400 },
          width: { type: Number, default: 1600 },
          chartFontFamily: {
            type: String,
            default: "'Alegreya Sans', 'sans-serif'",
          },
        },
        mounted() {
          this.createChart(this.id);
        },
        watch: {
          datasets() {
            this.myChart &&
              ((this.myChart.data.datasets = this.datasets),
              this.myChart.update());
          },
          labels() {
            this.myChart &&
              (this.arraysEqual(this.myChart.data.labels, this.labels) ||
                ((this.myChart.data.labels = this.labels),
                this.myChart.update(0)));
          },
        },
      },
      m = v,
      b = l(m, h, f, !1, null, null, null),
      y = b.exports,
      x = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("table", { staticClass: "table-auto w-full" }, [
          n("thead", [
            n(
              "tr",
              { staticClass: "border-b border-black" },
              t._l(t.headers, function (e) {
                return n(
                  "th",
                  {
                    key: e.value,
                    class: t.computeHeadPointerClasses(e),
                    on: {
                      click: function (n) {
                        return t.sortData(e.value);
                      },
                    },
                  },
                  [
                    n(
                      "div",
                      {
                        staticClass: "flex items-center text-black h-12",
                        class: t.computeHeadClasses(e),
                      },
                      [
                        n(
                          "span",
                          { staticClass: "text-opacity-100 text-black" },
                          [t._v(" " + t._s(e.text) + " ")]
                        ),
                        !1 !== e.sortable
                          ? n(
                              "m-icon",
                              {
                                staticClass:
                                  "\n            rounded-full hover:bg-black hover:bg-opacity-10\n            transition duration-300 ease-in-out\n          ",
                                attrs: { small: "" },
                              },
                              [
                                t._v(
                                  " " +
                                    t._s(
                                      t.sortColumn !== e.value ||
                                        t.sortDescending
                                        ? "arrow_downward"
                                        : "arrow_upward"
                                    ) +
                                    " "
                                ),
                              ]
                            )
                          : t._e(),
                      ],
                      1
                    ),
                  ]
                );
              }),
              0
            ),
          ]),
          n(
            "tbody",
            t._l(t.tableItems, function (e, r) {
              return n(
                "tr",
                {
                  key: "row-" + r,
                  staticClass:
                    "hover:bg-black hover:bg-opacity-10 transition duration-300 ease-in-out",
                },
                [
                  t._t(
                    "row",
                    t._l(t.headers, function (i) {
                      return n(
                        "td",
                        {
                          key: r + "-" + i.value,
                          class: i.align ? "text-" + i.align : "text-center",
                        },
                        [t._v(" " + t._s(e[i.value]) + " ")]
                      );
                    }),
                    { item: e }
                  ),
                ],
                2
              );
            }),
            0
          ),
          n("tr", [
            n("td", { attrs: { colspan: t.headers.length } }, [
              n(
                "div",
                { staticClass: "flex items-center justify-end mr-8 h-12" },
                [
                  n("span", { staticClass: "mx-2" }, [
                    t._v(
                      " " +
                        t._s(this.fromIndex + 1) +
                        " - " +
                        t._s(this.toIndex + 1) +
                        " of " +
                        t._s(this.items.length) +
                        " "
                    ),
                  ]),
                  n(
                    "m-icon",
                    {
                      staticClass:
                        "\n            cursor-pointer rounded-full\n            transition duration-300 ease-in-out text-black\n          ",
                      class:
                        0 === t.currentPage
                          ? "text-opacity-25"
                          : "hover:bg-black hover:bg-opacity-10",
                      attrs: { small: "" },
                      nativeOn: {
                        click: function (e) {
                          return t.prevPage();
                        },
                      },
                    },
                    [t._v(" arrow_back_ios ")]
                  ),
                  n(
                    "m-icon",
                    {
                      staticClass:
                        "\n            cursor-pointer rounded-full\n            transition duration-300 ease-in-out text-black\n          ",
                      class: t.hasNextPage
                        ? "hover:bg-black hover:bg-opacity-10"
                        : "text-opacity-25",
                      attrs: { small: "" },
                      nativeOn: {
                        click: function (e) {
                          return t.nextPage();
                        },
                      },
                    },
                    [t._v(" arrow_forward_ios ")]
                  ),
                ],
                1
              ),
            ]),
          ]),
        ]);
      },
      _ = [],
      w = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "span",
          { staticClass: "inline-flex", class: t.computedClasses },
          [
            n(
              "i",
              {
                staticClass: "material-icons",
                style: "font-size: " + t.computedFontSize + "px;",
              },
              [t._t("default")],
              2
            ),
          ]
        );
      },
      k = [],
      C = {
        name: "m-icon",
        props: { small: Boolean },
        computed: {
          computedClasses() {
            return {
              "h-4": this.small,
              "w-4": this.small,
              "h-6": !this.small,
              "w-6": !this.small,
            };
          },
          computedFontSize() {
            return this.small ? 16 : 24;
          },
        },
      },
      M = C,
      S = l(M, w, k, !1, null, null, null),
      A = S.exports,
      P = {
        name: "m-data-table",
        components: { MIcon: A },
        props: {
          items: { type: Array, required: !0 },
          headers: { type: Array, required: !0 },
          itemsPerPage: { type: Number, default: 10 },
        },
        computed: {
          tableItems() {
            const t = [...this.items];
            return (
              null !== this.sortColumn && t.sort(this.compareFunction),
              t.slice(this.fromIndex, this.toIndex + 1)
            );
          },
          pages() {
            return Math.ceil(this.items.length / this.itemsPerPage);
          },
          fromIndex() {
            return this.currentPage * this.itemsPerPage;
          },
          toIndex() {
            return this.hasNextPage
              ? (this.currentPage + 1) * this.itemsPerPage - 1
              : this.items.length - 1;
          },
          hasNextPage() {
            return this.pages > this.currentPage + 1;
          },
        },
        data() {
          return { currentPage: 0, sortColumn: null, sortDescending: !0 };
        },
        methods: {
          computeHeadClasses(t) {
            return {
              "text-opacity-25": t.value !== this.sortColumn,
              "text-opacity-50": t.value === this.sortColumn,
              "hover:text-opacity-100": !0,
              "justify-center": !t.align || "center" === (t.align && t.align),
              "justify-start": t.align && "left" === t.align,
              "justify-end": t.align && "right" === t.align,
            };
          },
          computeHeadPointerClasses(t) {
            return {
              "cursor-default": !1 === t.sortable,
              "cursor-pointer": !1 !== t.sortable,
            };
          },
          compareFunction(t, e) {
            return t[this.sortColumn] > e[this.sortColumn]
              ? this.sortDescending
                ? -1
                : 1
              : t[this.sortColumn] < e[this.sortColumn]
              ? this.sortDescending
                ? 1
                : -1
              : 0;
          },
          nextPage() {
            this.hasNextPage && (this.currentPage += 1);
          },
          prevPage() {
            0 !== this.currentPage && (this.currentPage -= 1);
          },
          sortData(t) {
            this.sortColumn !== t
              ? ((this.sortDescending = !0), (this.sortColumn = t))
              : (this.sortDescending = !this.sortDescending);
          },
        },
      },
      D = P,
      T = l(D, x, _, !1, null, null, null),
      O = T.exports,
      I = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "overflow-y-scroll" },
          [
            t._m(0),
            t._l(t.issues, function (e) {
              return n("div", { key: e.title, staticClass: "my-2 px-3" }, [
                n("span", { staticClass: "block font-medium" }, [
                  t._v(t._s(e.title)),
                ]),
                n("span", { staticClass: "block" }, [t._v(t._s(e.message))]),
              ]);
            }),
            0 === t.issues.length
              ? n("div", [t._v(" No possible optimizations detected. ")])
              : t._e(),
          ],
          2
        );
      },
      F = [
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "px-1 mb-2 mt-1" }, [
            n("span", { staticClass: "block text-xl font-medium" }, [
              t._v("Database Optimization Recommendations"),
            ]),
            n("span", { staticClass: "block text-sm font-light" }, [
              t._v(
                " Note that these might change with uptime. Monitor your server when changing variables. "
              ),
            ]),
          ]);
        },
      ];
    class L {
      constructor(t) {
        (this.title = t), (this.message = ""), (this.display = !1);
      }
      get issue() {
        return this.display
          ? { title: this.title, message: this.message }
          : null;
      }
    }
    var E = L;
    class N extends E {
      constructor({ Connections: t, Uptime: e }) {
        super("Full Table Scan"),
          t / e > 0.25 && (this.display = !0),
          (this.message = `\n      ${((t / e) * 3600).toFixed(
            2
          )} / h --\n      Too many connections per hour, increase wait_timeout.`);
      }
    }
    var R = N;
    class z extends E {
      constructor({ Com_select: t, Select_scan: e, Uptime: n }) {
        super("Full Table Scan"),
          e > 0.05 * t && (this.display = !0),
          (this.message = `\n      ${((e / n) * 3600).toFixed(
            2
          )} / h --\n      ${((e / t) * 100).toFixed(
            2
          )}% of Selects are without an Index --\n      Add suitable indexes and optimize queries.`);
      }
    }
    var B = z;
    class V extends E {
      constructor({ Select_full_join: t, Uptime: e }) {
        super("Joins without Index"),
          t > 0 && (this.display = !0),
          (this.message =
            ((t / e) * 3600).toFixed(2) + " / h -- Add suitable indexes!");
      }
    }
    var $ = V;
    class W extends E {
      constructor({ Key_blocks_used: t }, { key_buffer_size: e }) {
        super("Key Buffer Size Used");
        const n = (1024 * t) / e;
        (n < 0.05 || n > 0.8) && (this.display = !0),
          (this.message = `\n      ${n.toFixed(
            2
          )}% --\n      The key buffer usage is either very low, or too high; you can adjust the key_buffer_size.`);
      }
    }
    var j = W;
    class H extends E {
      constructor({ Qcache_lowmem_prunes: t, Uptime: e }) {
        super("Query Cache Prunes"),
          t > 0 && (this.display = !0),
          (this.message = `\n      ${(t / e).toFixed(
            2
          )} / s --\n      You are running out of Query Cache, increase query_cache_size.`);
      }
    }
    var q = H;
    class U extends E {
      constructor({ Questions: t, Queries: e, Uptime: n }) {
        super("Queries per Second"),
          (t / n > 2e3 || e / n > 3e3) && (this.display = !0),
          (this.message = `\n      ${(t / n).toFixed(2)} / s or ${(
            e / n
          ).toFixed(
            2
          )} / s --\n      Too many queries per second, it might be stressing the server.`);
      }
    }
    var Y = U;
    const G = [R, B, $, j, q, Y];
    function K(t, e) {
      const n = [];
      return (
        G.forEach((r) => {
          const i = new r(t, e).issue;
          i && n.push(i);
        }),
        n
      );
    }
    var X = K,
      Q = {
        props: { resource: { type: String, default: "ghmattimysql" } },
        data() {
          return { rawStatus: [], rawVariables: [], issues: [] };
        },
        computed: {
          status() {
            return this.rawStatus.reduce(
              (t, e) => (
                e.Variable_name && e.Value && (t[e.Variable_name] = e.Value), t
              ),
              {}
            );
          },
          variables() {
            return this.rawVariables.reduce(
              (t, e) => (
                e.Variable_name && e.Value && (t[e.Variable_name] = e.Value), t
              ),
              {}
            );
          },
          hasChanged() {
            return this.rawStatus.length > 0 && this.rawVariables.length > 0;
          },
        },
        watch: {
          hasChanged() {
            this.hasChanged && (this.issues = X(this.status, this.variables));
          },
        },
        methods: {
          onStatusData({ status: t }) {
            this.rawStatus = t;
          },
          onVariableData({ variables: t }) {
            this.rawVariables = t;
          },
        },
        mounted() {
          (this.rawStatus = []),
            (this.rawVariables = []),
            fetch(`http://${this.resource}/request-server-status`, {
              method: "post",
              body: JSON.stringify({ request: !0 }),
            }).catch(() => !1),
            (this.listener = window.addEventListener("message", (t) => {
              const e = t.data || t.detail;
              e && this[e.type] && this[e.type](e);
            }));
        },
        destroyed() {
          window.removeEventListener("message", this.listener);
        },
      },
      Z = Q,
      J = l(Z, I, F, !1, null, null, null),
      tt = J.exports,
      et = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", [
          n(
            "ul",
            {
              staticClass:
                "\n      bg-gray-300\n      border-b-2 border-black border-opacity-25\n      flex flex-grow flex-shrink-0 justify-start\n    ",
            },
            t._l(t.tabs, function (e, r) {
              return n("li", { key: e + "-" + r, staticClass: "block" }, [
                n(
                  "a",
                  {
                    staticClass:
                      "\n          px-4 py-2 -mb-2px border-b-2 font-medium cursor-pointer\n          flex items-center\n          transition duration-300 ease-in-out\n        ",
                    class: t.calculateClasses(e.isActive),
                    on: {
                      click: function (e) {
                        return t.setActiveTab(r);
                      },
                    },
                  },
                  [
                    e.icon
                      ? n("m-icon", { staticClass: "mr-2" }, [
                          t._v(t._s(e.icon)),
                        ])
                      : t._e(),
                    n("span", { staticClass: "uppercase" }, [
                      t._v(t._s(e.label)),
                    ]),
                  ],
                  1
                ),
              ]);
            }),
            0
          ),
          n("div", [t._t("default")], 2),
        ]);
      },
      nt = [],
      rt = {
        name: "m-tabs",
        components: { MIcon: A },
        data() {
          return { activeItem: 0, tabItems: [] };
        },
        computed: {
          tabs() {
            return this.tabItems.map((t) => t.componentInstance);
          },
        },
        mounted() {
          this.parseNodes(), this.showChild();
        },
        methods: {
          calculateClasses(t) {
            return {
              "border-blue-600": t,
              "text-blue-600": t,
              "text-black": !t,
              "border-black": !t,
              "text-opacity-50": !t,
              "border-opacity-0": !t,
              "hover:text-opacity-75": !t,
              "hover:border-opacity-50": !t,
              "hover:bg-black": !t,
              "hover:bg-opacity-10": !t,
            };
          },
          parseNodes() {
            const t = this.$slots.default || [];
            this.tabItems = t.filter(
              (t) =>
                t.componentOptions &&
                "m-tab-item" === t.componentOptions.Ctor.options.name
            );
          },
          showChild() {
            this.tabs[this.activeItem].setActive();
          },
          hideChild() {
            this.tabs[this.activeItem].setActive(!1);
          },
          setActiveTab(t) {
            this.activeItem !== t &&
              (this.hideChild(), (this.activeItem = t), this.showChild());
          },
        },
      },
      it = rt,
      at = l(it, et, nt, !1, null, null, null),
      ot = at.exports,
      st = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.isActive ? n("div", [t._t("default")], 2) : t._e();
      },
      lt = [],
      ut = {
        name: "m-tab-item",
        data() {
          return { isActive: !1 };
        },
        props: { label: String, icon: String },
        created() {
          this.$parent.parseNodes && this.$parent.parseNodes();
        },
        beforeDestroy() {
          this.$parent.parseNodes && this.$parent.parseNodes();
        },
        methods: {
          setActive(t = !0) {
            this.isActive = t;
          },
        },
      },
      ct = ut,
      dt = l(ct, st, lt, !1, null, null, null),
      ht = dt.exports,
      ft = {
        components: {
          MAppBar: d,
          MChart: y,
          MDataTable: O,
          MIcon: A,
          MServerStatus: tt,
          MTabs: ot,
          MTabItem: ht,
        },
        data() {
          return {
            showInterface: !1,
            colorGraphLoad: {
              backgroundColor: ["rgba(54, 73, 93, 0.5)"],
              borderColor: ["#36495d"],
              borderWidth: 3,
            },
            colorGraphAvg: {
              backgroundColor: ["rgba(71, 183, 132, 0.5)"],
              borderColor: ["#47b784"],
              borderWidth: 3,
            },
            colorGraphCount: {
              backgroundColor: ["rgba(62, 128, 113, 0.5)"],
              borderColor: ["#3e8071"],
              borderWidth: 3,
            },
            resourceData: [],
            resourceLabels: [],
            timeLabels: [],
            timeData: [],
            slowqueries: [
              { resource: "memes", sql: "SELECT * FROM memes", queryTime: 5e3 },
            ],
            headers: [
              { text: "Resource", value: "resource" },
              { text: "Query", value: "sql", sortable: !1 },
              { text: "Execution Time (ms)", value: "queryTime" },
            ],
          };
        },
        destroyed() {
          window.removeEventListener("message", this.listener);
        },
        methods: {
          close() {
            fetch("http://ABCore-sql/close-explorer", {
              method: "post",
              body: JSON.stringify({ close: !0 }),
            });
          },
          onToggleShow() {
            this.showInterface = !this.showInterface;
          },
          onSlowQueryData({ slowQueries: t }) {
            Array.isArray(t) && (this.slowqueries = t);
          },
          onTimeData({ timeData: t }) {
            if (Array.isArray(t) && 3 === t.length) {
              this.timeData = [
                { ...this.colorGraphLoad, label: "Server Load (ms)", ...t[0] },
                {
                  ...this.colorGraphAvg,
                  label: "Average Query Time (ms)",
                  ...t[1],
                },
                { ...this.colorGraphCount, label: "Query Count", ...t[2] },
              ];
              const e = [];
              for (let n = t[0].data.length - 1; n > -1; n -= 1)
                0 !== n ? e.push(`-${5 * n}min`) : e.push("now");
              this.timeLabels = e;
            }
          },
          onResourceData({ resourceData: t }) {
            Array.isArray(t) &&
              3 === t.length &&
              (this.resourceData = [
                { ...this.colorGraphLoad, label: "Server Load (ms)", ...t[0] },
                {
                  ...this.colorGraphAvg,
                  label: "Average Query Time (ms)",
                  ...t[1],
                },
                { ...this.colorGraphCount, label: "Query Count", ...t[2] },
              ]);
          },
          onResourceLabels({ resourceLabels: t }) {
            this.resourceLabels = t;
          },
        },
        mounted() {
          this.listener = window.addEventListener("message", (t) => {
            const e = t.data || t.detail;
            e && this[e.type] && this[e.type](e);
          });
        },
        name: "app",
      },
      pt = ft,
      gt = (n("489f"), l(pt, i, a, !1, null, null, null)),
      vt = gt.exports;
    n("d1e7");
    (r["a"].config.productionTip = !1),
      new r["a"]({ render: (t) => t(vt) }).$mount("#app");
  },
});
