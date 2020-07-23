!(function (e) {
    var t = {};
    function n(s) {
        if (t[s]) return t[s].exports;
        var o = (t[s] = { i: s, l: !1, exports: {} });
        return e[s].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, s) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s });
        }),
        (n.s = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if ((n.s(s), Object.defineProperty(s, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var o in e)
                    n.d(
                        s,
                        o,
                        function (t) {
                            return e[t];
                        }.bind(null, o)
                    );
            return s;
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = "/"),
        n((n.r = 384));
})({
    384: function (e, t, n) {
        e.exports = n(385);
    },
    385: function (e, t, n) {
        "use strict";
        n.s(t);
        n(386);
    },
    386: function (e, t) {
        !(function () {
            "use strict";
            !(function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "doughnut",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                n = Chart.helpers.merge(
                    {
                        cutoutPercentage: 75,
                        tooltips: {
                            callbacks: {
                                title: function (e, t) {
                                    return t.labels[e[0].index];
                                },
                                label: function (e, t) {
                                    return "" + '<span class="popover-body-value">' + t.datasets[0].data[e.index] + "%</span>";
                                },
                            },
                        },
                    },
                    n
                );
                var s = { labels: ["Scored above 75%", "Scored above 50%", "Scored above 30%", "Failed"], datasets: [{ data: [23, 45, 15, 27], backgroundColor: [], borderColor: settings.colors.white, hoverBorderColor: settings.colors.white }] };
                Charts.create(e, t, n, s);
            })("#attendanceDoughnutChart");
        })();
    },
});
!(function (e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var o = (t[r] = { i: r, l: !1, exports: {} });
        return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
        }),
        (n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var o in e)
                    n.d(
                        r,
                        o,
                        function (t) {
                            return e[t];
                        }.bind(null, o)
                    );
            return r;
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = "/"),
        n((n.s = 384));
})({
    384: function (e, t, n) {
        e.exports = n(385);
    },
    385: function (e, t, n) {
        "use strict";
        n.r(t);
        n(386);
    },
    386: function (e, t) {
        !(function () {
            "use strict";
            !(function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "doughnut",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                n = Chart.helpers.merge(
                    {
                        cutoutPercentage: 75,
                        tooltips: {
                            callbacks: {
                                title: function (e, t) {
                                    return t.labels[e[0].index];
                                },
                                label: function (e, t) {
                                    return "" + '<span class="popover-body-value">' + t.datasets[0].data[e.index] + "%</span>";
                                },
                            },
                        },
                    },
                    n
                );
                var r = { labels: ["In-time and satisfied", "In time and unsatified", "Late but satisfied", "Late and unsatisfied"], datasets: [{ data: [48,22,20,11], backgroundColor: [], borderColor: settings.colors.white, hoverBorderColor: settings.colors.white }] };
                Charts.create(e, t, n, r);
            })("#studentChart");
        })();
    },
});
