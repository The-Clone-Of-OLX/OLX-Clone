$.fn.addCommas = function(e) {
        for (var t = (e += "").split("."), a = t[0], n = t.length > 1 ? "." + t[1] : "", o = /(\d+)(\d{3})/; o.test(a);) a = a.replace(o, "$1,$2");
        return a + n
    },
    function(e) {
        e.fn.stateButton = function(t) {
            return this.length > 1 ? (this.each((function() {
                e(this).stateButton(t)
            })), this) : (this.initialize = function() {
                return this
            }, this.showSpinner = function() {
                return e(this).addClass("show-spinner"), e(this).addClass("active"), this
            }, this.hideSpinner = function() {
                return e(this).removeClass("show-spinner"), this
            }, this.showFail = function(t) {
                return e(this).addClass("show-fail"), e(this).removeClass("show-spinner"), t && e(this).find(".icon.fail").tooltip("show"), this
            }, this.showSuccess = function(t) {
                return e(this).addClass("show-success"), e(this).removeClass("show-spinner"), t && e(this).find(".icon.success").tooltip("show"), this
            }, this.reset = function() {
                this.hideTooltips(), this.hideSpinner(), e(this).removeClass("show-success"), e(this).removeClass("show-fail"), e(this).removeClass("active")
            }, this.hideTooltips = function() {
                return this.hideFailTooltip(), this.hideSuccessTooltip(), this
            }, this.showSuccessTooltip = function() {
                return e(this).find(".icon.success").tooltip("show"), this
            }, this.hideSuccessTooltip = function() {
                return e(this).find(".icon.success").tooltip("dispose"), this
            }, this.showFailTooltip = function() {
                return e(this).find(".icon.fail").tooltip("show"), this
            }, this.hideFailTooltip = function() {
                return e(this).find(".icon.fail").tooltip("dispose"), this
            }, this.initialize())
        }
    }(jQuery), $.shiftSelectable = function(e, t) {
        var a = this;
        t = $.extend({
            items: ".card"
        }, t);
        var n, o = $(e),
            i = null,
            r = o.find("input[type='checkbox']");

        function s(e, t) {
            if ($(e).prop("checked", !$(e).prop("checked")).trigger("change"), n || (n = e), n) {
                if (t) {
                    var a = r.index(e),
                        o = r.index(n);
                    r.slice(Math.min(a, o), Math.max(a, o) + 1).prop("checked", n.checked).trigger("change")
                }
                n = e
            }
            if (i) {
                var s = !1,
                    d = !0;
                r.each((function() {
                    $(this).prop("checked") ? s = !0 : d = !1
                })), s ? i.prop("indeterminate", s) : (i.prop("indeterminate", s), i.prop("checked", s)), d && (i.prop("indeterminate", !1), i.prop("checked", d))
            }
            document.activeElement.blur(), l()
        }

        function l() {
            r.each((function() {
                $(this).prop("checked") ? $(this).parents(".card").addClass("active") : $(this).parents(".card").removeClass("active")
            }))
        }
        o.data("checkAll") && (i = $("#" + o.data("checkAll"))).on("click", (function() {
            r.prop("checked", $(i).prop("checked")).trigger("change"), document.activeElement.blur(), l()
        })), o.on("click", t.items, (function(e) {
            $(e.target).is("a") || $(e.target).parent().is("a") || ($(e.target).is("input[type='checkbox']") && (e.preventDefault(), e.stopPropagation()), s($(this).find("input[type='checkbox']")[0], e.shiftKey))
        })), a.update = function() {
            r = o.find("input[type='checkbox']")
        }, a.selectAll = function() {
            i && (r.prop("checked", !0).trigger("change"), i.prop("checked", !0), i.prop("indeterminate", !1), l())
        }, a.deSelectAll = function() {
            i && (r.prop("checked", !1).trigger("change"), i.prop("checked", !1), i.prop("indeterminate", !1), l())
        }, a.rightClick = function(e) {
            var t = $(e).find("input[type='checkbox']")[0];
            $(t).prop("checked") || (a.deSelectAll(), s(t, !1))
        }
    }, $.fn.shiftSelectable = function(e) {
        return this.each((function() {
            if (null == $(this).data("shiftSelectable")) {
                var t = new $.shiftSelectable(this, e);
                $(this).data("shiftSelectable", t)
            }
        }))
    }, $.dore = function(e, t) {
        var a = {},
            n = this;
        n.settings = {};
        $(e), e = e;
        var o, i = !1;
        ! function() {
            Ce = Ce || {}, n.settings = $.extend({}, a, Ce),
                function() {
                    try {
                        localStorage.getItem("dore-direction") && (o = localStorage.getItem("dore-direction")), i = "rtl" == o && !0
                    } catch (e) {
                        i = !1
                    }
                }();
            var e = getComputedStyle(document.body),
                t = e.getPropertyValue("--theme-color-1").trim(),
                r = e.getPropertyValue("--theme-color-2").trim(),
                s = e.getPropertyValue("--theme-color-3").trim(),
                l = e.getPropertyValue("--theme-color-4").trim(),
                d = e.getPropertyValue("--theme-color-5").trim(),
                c = (e.getPropertyValue("--theme-color-6").trim(), e.getPropertyValue("--theme-color-1-10").trim()),
                p = e.getPropertyValue("--theme-color-2-10").trim(),
                u = e.getPropertyValue("--theme-color-3-10").trim(),
                h = e.getPropertyValue("--theme-color-4-10").trim(),
                m = e.getPropertyValue("--theme-color-5-10").trim(),
                g = (e.getPropertyValue("--theme-color-6-10").trim(), e.getPropertyValue("--primary-color").trim()),
                f = e.getPropertyValue("--foreground-color").trim(),
                b = e.getPropertyValue("--separator-color").trim();

            function C() {
                $(window).outerHeight();
                var e = $(window).outerWidth();
                $(".navbar").outerHeight(), parseInt($(".sub-menu .scroll").css("margin-top"), 10);
                $(".chat-app .scroll").length > 0 && me && ($(".chat-app .scroll").scrollTop($(".chat-app .scroll").prop("scrollHeight")), me.update()), e < 768 ? $("#app-container").addClass("menu-mobile") : e < 1440 ? ($("#app-container").removeClass("menu-mobile"), $("#app-container").hasClass("menu-default") && ($("#app-container").removeClass(k), $("#app-container").addClass("menu-default menu-sub-hidden"))) : ($("#app-container").removeClass("menu-mobile"), $("#app-container").hasClass("menu-default") && $("#app-container").hasClass("menu-sub-hidden") && $("#app-container").removeClass("menu-sub-hidden")), x(0, !0)
            }

            function w() {
                var e = $(".search input").val(),
                    t = $(".search").data("searchPath");
                "" != e && ($(".search input").val(""), window.location.href = t + e)
            }

            function y() {
                $(".search").hasClass("mobile-view") && ($(".search").removeClass("mobile-view"), $(".search input").val(""))
            }
            $(window).on("resize", (function(e) {
                e.originalEvent.isTrusted && C()
            })), C(), $(".search .search-icon").on("click", (function() {
                $(window).outerWidth() < 768 ? $(".search").hasClass("mobile-view") ? ($(".search").removeClass("mobile-view"), w()) : ($(".search").addClass("mobile-view"), $(".search input").focus()) : w()
            })), $(".search input").on("keyup", (function(e) {
                13 == e.which && w(), 27 == e.which && y()
            })), $(document).on("click", (function(e) {
                $(e.target).parents().hasClass("search") || y()
            })), $(".list").shiftSelectable();
            var v = 0,
                k = "menu-default menu-hidden sub-hidden main-hidden menu-sub-hidden main-show-temporary sub-show-temporary menu-mobile";

            function x(e, t, a) {
                v = e;
                var n = $("#app-container");
                if (0 != n.length) {
                    a = a || S();
                    if (0 == $(".sub-menu ul[data-link='" + a + "']").length && (2 == v || t) && $(window).outerWidth() >= 768 && B("menu-default")) return t ? ($("#app-container").removeClass(k), $("#app-container").addClass("menu-default menu-sub-hidden sub-hidden"), v = 0) : ($("#app-container").removeClass(k), $("#app-container").addClass("menu-default main-hidden menu-sub-hidden sub-hidden"), v = 0), void A();
                    if (0 == $(".sub-menu ul[data-link='" + a + "']").length && (1 == v || t) && $(window).outerWidth() >= 768 && B("menu-sub-hidden")) return t ? ($("#app-container").removeClass(k), $("#app-container").addClass("menu-sub-hidden sub-hidden"), v = 0) : ($("#app-container").removeClass(k), $("#app-container").addClass("menu-sub-hidden main-hidden sub-hidden"), v = -1), void A();
                    if (0 == $(".sub-menu ul[data-link='" + a + "']").length && (1 == v || t) && $(window).outerWidth() >= 768 && B("menu-hidden")) return t ? ($("#app-container").removeClass(k), $("#app-container").addClass("menu-hidden main-hidden sub-hidden"), v = 0) : ($("#app-container").removeClass(k), $("#app-container").addClass("menu-hidden main-show-temporary"), v = 3), void A();
                    e % 4 == 0 ? (B("menu-main-hidden") ? nextClasses = "menu-main-hidden" : B("menu-default") && B("menu-sub-hidden") ? nextClasses = "menu-default menu-sub-hidden" : B("menu-default") ? nextClasses = "menu-default" : B("menu-sub-hidden") ? nextClasses = "menu-sub-hidden" : B("menu-hidden") && (nextClasses = "menu-hidden"), v = 0) : e % 4 == 1 ? B("menu-default") && B("menu-sub-hidden") ? nextClasses = "menu-default menu-sub-hidden main-hidden sub-hidden" : B("menu-default") ? nextClasses = "menu-default sub-hidden" : B("menu-main-hidden") ? nextClasses = "menu-main-hidden menu-hidden" : B("menu-sub-hidden") ? nextClasses = "menu-sub-hidden main-hidden sub-hidden" : B("menu-hidden") && (nextClasses = "menu-hidden main-show-temporary") : e % 4 == 2 ? B("menu-main-hidden") && B("menu-hidden") ? nextClasses = "menu-main-hidden" : B("menu-default") && B("menu-sub-hidden") ? nextClasses = "menu-default menu-sub-hidden sub-hidden" : B("menu-default") ? nextClasses = "menu-default main-hidden sub-hidden" : B("menu-sub-hidden") ? nextClasses = "menu-sub-hidden sub-hidden" : B("menu-hidden") && (nextClasses = "menu-hidden main-show-temporary sub-show-temporary") : e % 4 == 3 && (B("menu-main-hidden") ? nextClasses = "menu-main-hidden menu-hidden" : B("menu-default") && B("menu-sub-hidden") ? nextClasses = "menu-default menu-sub-hidden sub-show-temporary" : B("menu-default") ? nextClasses = "menu-default sub-hidden" : B("menu-sub-hidden") ? nextClasses = "menu-sub-hidden sub-show-temporary" : B("menu-hidden") && (nextClasses = "menu-hidden main-show-temporary")), B("menu-mobile") && (nextClasses += " menu-mobile"), n.removeClass(k), n.addClass(nextClasses), A()
                }
            }

            function S() {
                var e = $(".main-menu ul li.active a").attr("href");
                return e ? e.replace("#", "") : ""
            }

            function B(e) {
                return $("#app-container").attr("class").split(" ").filter((function(e) {
                    return "" != e
                })).includes(e)
            }
            $(".menu-button").on("click", (function(e) {
                e.preventDefault(), x(++v)
            })), $(".menu-button-mobile").on("click", (function(e) {
                return e.preventDefault(), $("#app-container").removeClass("sub-show-temporary").toggleClass("main-show-temporary"), !1
            })), $(".main-menu").on("click", "a", (function(e) {
                e.preventDefault();
                var t = $(this).attr("href").replace("#", "");
                if (0 != $(".sub-menu ul[data-link='" + t + "']").length) {
                    T($(this).attr("href"));
                    $("#app-container");
                    return $("#app-container").hasClass("menu-mobile") ? $("#app-container").addClass("sub-show-temporary") : !$("#app-container").hasClass("menu-sub-hidden") || 2 != v && 0 != v ? !$("#app-container").hasClass("menu-hidden") || 1 != v && 3 != v ? !$("#app-container").hasClass("menu-default") || $("#app-container").hasClass("menu-sub-hidden") || 1 != v && 3 != v || x(0, !1, t) : x(2, !1, t) : x(3, !1, t), !1
                }
                var a = $(this).attr("target");
                null == $(this).attr("target") ? window.open(t, "_self") : window.open(t, a)
            })), $(document).on("click", (function(e) {
                if (!($(e.target).parents().hasClass("menu-button") || $(e.target).hasClass("menu-button") || $(e.target).parents().hasClass("sidebar") || $(e.target).hasClass("sidebar"))) {
                    if ($(e.target).parents("a[data-toggle='collapse']").length > 0 || "collapse" == $(e.target).attr("data-toggle")) return;
                    if ($("#app-container").hasClass("menu-sub-hidden") && 3 == v) x(S() == W ? 2 : 0);
                    else($("#app-container").hasClass("menu-main-hidden") && $("#app-container").hasClass("menu-mobile") || $("#app-container").hasClass("menu-hidden") || $("#app-container").hasClass("menu-mobile")) && x(0)
                }
            }));
            var W = "";

            function T(e) {
                if (0 != $(".main-menu").length) {
                    var t = e ? e.replace("#", "") : "";
                    if (0 == $(".sub-menu ul[data-link='" + t + "']").length) {
                        if ($("#app-container").removeClass("sub-show-temporary"), 0 == $("#app-container").length) return;
                        return v = B("menu-sub-hidden") || B("menu-hidden") ? 0 : 1, $("#app-container").addClass("sub-hidden"), $(".sub-menu").addClass("no-transition"), $("main").addClass("no-transition"), void setTimeout((function() {
                            $(".sub-menu").removeClass("no-transition"), $("main").removeClass("no-transition")
                        }), 350)
                    }
                    t != W && ($(".sub-menu ul").fadeOut(0), $(".sub-menu ul[data-link='" + t + "']").slideDown(100), $(".sub-menu .scroll").scrollTop(0), W = t)
                }
            }

            function A() {
                setTimeout((function() {
                    var e = document.createEvent("HTMLEvents");
                    e.initEvent("resize", !1, !1), window.dispatchEvent(e)
                }), 350)
            }

            function E(e) {
                var t = $(e.parents(".question"));
                t.toggleClass("edit-quesiton"), t.toggleClass("view-quesiton");
                var a = t.find(".question-collapse");
                a.hasClass("show") || (a.collapse("toggle"), t.find(".rotate-icon-click").toggleClass("rotate"))
            }
            if (T($(".main-menu ul li.active a").attr("href")), $(".app-menu-button").on("click", (function(e) {
                    e.preventDefault(), $(".app-menu").hasClass("shown") ? $(".app-menu").removeClass("shown") : $(".app-menu").addClass("shown")
                })), $(document).on("click", (function(e) {
                    $(e.target).parents().hasClass("app-menu") || $(e.target).parents().hasClass("app-menu-button") || $(e.target).hasClass("app-menu-button") || $(e.target).hasClass("app-menu") || $(".app-menu").hasClass("shown") && $(".app-menu").removeClass("shown")
                })), $(document).on("click", ".question .view-button", (function() {
                    E($(this))
                })), $(document).on("click", ".question .edit-button", (function() {
                    E($(this))
                })), $(document).on("click", ".rotate-icon-click", (function() {
                    $(this).toggleClass("rotate")
                })), "undefined" != typeof Chart) {
                Chart.defaults.global.defaultFontFamily = "'Nunito', sans-serif", Chart.defaults.LineWithShadow = Chart.defaults.line, Chart.controllers.LineWithShadow = Chart.controllers.line.extend({
                    draw: function(e) {
                        Chart.controllers.line.prototype.draw.call(this, e);
                        var t = this.chart.ctx;
                        t.save(), t.shadowColor = "rgba(0,0,0,0.15)", t.shadowBlur = 10, t.shadowOffsetX = 0, t.shadowOffsetY = 10, t.responsive = !0, t.stroke(), Chart.controllers.line.prototype.draw.apply(this, arguments), t.restore()
                    }
                }), Chart.defaults.BarWithShadow = Chart.defaults.bar, Chart.controllers.BarWithShadow = Chart.controllers.bar.extend({
                    draw: function(e) {
                        Chart.controllers.bar.prototype.draw.call(this, e);
                        var t = this.chart.ctx;
                        t.save(), t.shadowColor = "rgba(0,0,0,0.15)", t.shadowBlur = 12, t.shadowOffsetX = 5, t.shadowOffsetY = 10, t.responsive = !0, Chart.controllers.bar.prototype.draw.apply(this, arguments), t.restore()
                    }
                }), Chart.defaults.LineWithLine = Chart.defaults.line, Chart.controllers.LineWithLine = Chart.controllers.line.extend({
                    draw: function(e) {
                        if (Chart.controllers.line.prototype.draw.call(this, e), this.chart.tooltip._active && this.chart.tooltip._active.length) {
                            var t = this.chart.tooltip._active[0],
                                a = this.chart.ctx,
                                n = t.tooltipPosition().x,
                                o = this.chart.scales["y-axis-0"].top,
                                i = this.chart.scales["y-axis-0"].bottom;
                            a.save(), a.beginPath(), a.moveTo(n, o), a.lineTo(n, i), a.lineWidth = 1, a.strokeStyle = "rgba(0,0,0,0.1)", a.stroke(), a.restore()
                        }
                    }
                }), Chart.defaults.DoughnutWithShadow = Chart.defaults.doughnut, Chart.controllers.DoughnutWithShadow = Chart.controllers.doughnut.extend({
                    draw: function(e) {
                        Chart.controllers.doughnut.prototype.draw.call(this, e);
                        let t = this.chart.chart.ctx;
                        t.save(), t.shadowColor = "rgba(0,0,0,0.15)", t.shadowBlur = 10, t.shadowOffsetX = 0, t.shadowOffsetY = 10, t.responsive = !0, Chart.controllers.doughnut.prototype.draw.apply(this, arguments), t.restore()
                    }
                }), Chart.defaults.PieWithShadow = Chart.defaults.pie, Chart.controllers.PieWithShadow = Chart.controllers.pie.extend({
                    draw: function(e) {
                        Chart.controllers.pie.prototype.draw.call(this, e);
                        let t = this.chart.chart.ctx;
                        t.save(), t.shadowColor = "rgba(0,0,0,0.15)", t.shadowBlur = 10, t.shadowOffsetX = 0, t.shadowOffsetY = 10, t.responsive = !0, Chart.controllers.pie.prototype.draw.apply(this, arguments), t.restore()
                    }
                }), Chart.defaults.ScatterWithShadow = Chart.defaults.scatter, Chart.controllers.ScatterWithShadow = Chart.controllers.scatter.extend({
                    draw: function(e) {
                        Chart.controllers.scatter.prototype.draw.call(this, e);
                        let t = this.chart.chart.ctx;
                        t.save(), t.shadowColor = "rgba(0,0,0,0.2)", t.shadowBlur = 7, t.shadowOffsetX = 0, t.shadowOffsetY = 7, t.responsive = !0, Chart.controllers.scatter.prototype.draw.apply(this, arguments), t.restore()
                    }
                }), Chart.defaults.RadarWithShadow = Chart.defaults.radar, Chart.controllers.RadarWithShadow = Chart.controllers.radar.extend({
                    draw: function(e) {
                        Chart.controllers.radar.prototype.draw.call(this, e);
                        let t = this.chart.chart.ctx;
                        t.save(), t.shadowColor = "rgba(0,0,0,0.2)", t.shadowBlur = 7, t.shadowOffsetX = 0, t.shadowOffsetY = 7, t.responsive = !0, Chart.controllers.radar.prototype.draw.apply(this, arguments), t.restore()
                    }
                }), Chart.defaults.PolarWithShadow = Chart.defaults.polarArea, Chart.controllers.PolarWithShadow = Chart.controllers.polarArea.extend({
                    draw: function(e) {
                        Chart.controllers.polarArea.prototype.draw.call(this, e);
                        let t = this.chart.chart.ctx;
                        t.save(), t.shadowColor = "rgba(0,0,0,0.2)", t.shadowBlur = 10, t.shadowOffsetX = 5, t.shadowOffsetY = 10, t.responsive = !0, Chart.controllers.polarArea.prototype.draw.apply(this, arguments), t.restore()
                    }
                });
                var z = {
                    backgroundColor: f,
                    titleFontColor: g,
                    borderColor: b,
                    borderWidth: .5,
                    bodyFontColor: g,
                    bodySpacing: 10,
                    xPadding: 15,
                    yPadding: 15,
                    cornerRadius: .15,
                    displayColors: !1
                };
                if (document.getElementById("visitChartFull")) {
                    var D = document.getElementById("visitChartFull").getContext("2d");
                    new Chart(D, {
                        type: "LineWithShadow",
                        data: {
                            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                            datasets: [{
                                label: "Data",
                                borderColor: t,
                                pointBorderColor: t,
                                pointBackgroundColor: t,
                                pointHoverBackgroundColor: t,
                                pointHoverBorderColor: t,
                                pointRadius: 3,
                                pointBorderWidth: 3,
                                pointHoverRadius: 3,
                                fill: !0,
                                backgroundColor: c,
                                borderWidth: 2,
                                data: [180, 140, 150, 120, 180, 110, 160],
                                datalabels: {
                                    align: "end",
                                    anchor: "end"
                                }
                            }]
                        },
                        options: {
                            layout: {
                                padding: {
                                    left: 0,
                                    right: 0,
                                    top: 40,
                                    bottom: 0
                                }
                            },
                            plugins: {
                                datalabels: {
                                    backgroundColor: "transparent",
                                    borderRadius: 30,
                                    borderWidth: 1,
                                    padding: 5,
                                    borderColor: function(e) {
                                        return e.dataset.borderColor
                                    },
                                    color: function(e) {
                                        return e.dataset.borderColor
                                    },
                                    font: {
                                        weight: "bold",
                                        size: 10
                                    },
                                    formatter: Math.round
                                }
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            legend: {
                                display: !1
                            },
                            tooltips: z,
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        min: 0
                                    },
                                    display: !1
                                }],
                                xAxes: [{
                                    ticks: {
                                        min: 0
                                    },
                                    display: !1
                                }]
                            }
                        }
                    })
                }
                if (document.getElementById("visitChart")) {
                    var I = document.getElementById("visitChart").getContext("2d");
                    new Chart(I, {
                        type: "LineWithShadow",
                        options: {
                            plugins: {
                                datalabels: {
                                    display: !1
                                }
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            scales: {
                                yAxes: [{
                                    gridLines: {
                                        display: !0,
                                        lineWidth: 1,
                                        color: "rgba(0,0,0,0.1)",
                                        drawBorder: !1
                                    },
                                    ticks: {
                                        beginAtZero: !0,
                                        stepSize: 5,
                                        min: 50,
                                        max: 70,
                                        padding: 0
                                    }
                                }],
                                xAxes: [{
                                    gridLines: {
                                        display: !1
                                    }
                                }]
                            },
                            legend: {
                                display: !1
                            },
                            tooltips: z
                        },
                        data: {
                            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                            datasets: [{
                                label: "",
                                data: [54, 63, 60, 65, 60, 68, 60],
                                borderColor: t,
                                pointBackgroundColor: f,
                                pointBorderColor: t,
                                pointHoverBackgroundColor: t,
                                pointHoverBorderColor: f,
                                pointRadius: 4,
                                pointBorderWidth: 2,
                                pointHoverRadius: 5,
                                fill: !0,
                                borderWidth: 2,
                                backgroundColor: c
                            }]
                        }
                    })
                }
                if (document.getElementById("conversionChart")) {
                    var P = document.getElementById("conversionChart").getContext("2d");
                    new Chart(P, {
                        type: "LineWithShadow",
                        options: {
                            plugins: {
                                datalabels: {
                                    display: !1
                                }
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            scales: {
                                yAxes: [{
                                    gridLines: {
                                        display: !0,
                                        lineWidth: 1,
                                        color: "rgba(0,0,0,0.1)",
                                        drawBorder: !1
                                    },
                                    ticks: {
                                        beginAtZero: !0,
                                        stepSize: 5,
                                        min: 50,
                                        max: 70,
                                        padding: 0
                                    }
                                }],
                                xAxes: [{
                                    gridLines: {
                                        display: !1
                                    }
                                }]
                            },
                            legend: {
                                display: !1
                            },
                            tooltips: z
                        },
                        data: {
                            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                            datasets: [{
                                label: "",
                                data: [65, 60, 68, 54, 63, 60, 60],
                                borderColor: r,
                                pointBackgroundColor: f,
                                pointBorderColor: r,
                                pointHoverBackgroundColor: r,
                                pointHoverBorderColor: f,
                                pointRadius: 4,
                                pointBorderWidth: 2,
                                pointHoverRadius: 5,
                                fill: !0,
                                borderWidth: 2,
                                backgroundColor: p
                            }]
                        }
                    })
                }
                var R = {
                        layout: {
                            padding: {
                                left: 5,
                                right: 5,
                                top: 10,
                                bottom: 10
                            }
                        },
                        plugins: {
                            datalabels: {
                                display: !1
                            }
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        legend: {
                            display: !1
                        },
                        tooltips: {
                            intersect: !1,
                            enabled: !1,
                            custom: function(e) {
                                if (e && e.dataPoints) {
                                    var t = $(this._chart.canvas.offsetParent),
                                        a = e.dataPoints[0].yLabel,
                                        n = e.dataPoints[0].xLabel,
                                        o = e.body[0].lines[0].split(":")[0];
                                    t.find(".value").html("$" + $.fn.addCommas(a)), t.find(".label").html(o + "-" + n)
                                }
                            }
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: !0
                                },
                                display: !1
                            }],
                            xAxes: [{
                                display: !1
                            }]
                        }
                    },
                    L = {
                        afterInit: function(e, t) {
                            var a = $(e.canvas.offsetParent),
                                n = e.data.datasets[0].data[0],
                                o = e.data.labels[0],
                                i = e.data.datasets[0].label;
                            a.find(".value").html("$" + $.fn.addCommas(n)), a.find(".label").html(i + "-" + o)
                        }
                    };
                if (document.getElementById("smallChart1")) {
                    var F = document.getElementById("smallChart1").getContext("2d");
                    new Chart(F, {
                        type: "LineWithLine",
                        plugins: [L],
                        data: {
                            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                            datasets: [{
                                label: "Total Orders",
                                borderColor: t,
                                pointBorderColor: t,
                                pointHoverBackgroundColor: t,
                                pointHoverBorderColor: t,
                                pointRadius: 2,
                                pointBorderWidth: 3,
                                pointHoverRadius: 2,
                                fill: !1,
                                borderWidth: 2,
                                data: [1250, 1300, 1550, 921, 1810, 1106, 1610],
                                datalabels: {
                                    align: "end",
                                    anchor: "end"
                                }
                            }]
                        },
                        options: R
                    })
                }
                if (document.getElementById("smallChart2")) {
                    var M = document.getElementById("smallChart2").getContext("2d");
                    new Chart(M, {
                        type: "LineWithLine",
                        plugins: [L],
                        data: {
                            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                            datasets: [{
                                label: "Pending Orders",
                                borderColor: t,
                                pointBorderColor: t,
                                pointHoverBackgroundColor: t,
                                pointHoverBorderColor: t,
                                pointRadius: 2,
                                pointBorderWidth: 3,
                                pointHoverRadius: 2,
                                fill: !1,
                                borderWidth: 2,
                                data: [115, 120, 300, 222, 105, 85, 36],
                                datalabels: {
                                    align: "end",
                                    anchor: "end"
                                }
                            }]
                        },
                        options: R
                    })
                }
                if (document.getElementById("smallChart3")) {
                    var H = document.getElementById("smallChart3").getContext("2d");
                    new Chart(H, {
                        type: "LineWithLine",
                        plugins: [L],
                        data: {
                            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                            datasets: [{
                                label: "Active Orders",
                                borderColor: t,
                                pointBorderColor: t,
                                pointHoverBackgroundColor: t,
                                pointHoverBorderColor: t,
                                pointRadius: 2,
                                pointBorderWidth: 3,
                                pointHoverRadius: 2,
                                fill: !1,
                                borderWidth: 2,
                                data: [350, 452, 762, 952, 630, 85, 158],
                                datalabels: {
                                    align: "end",
                                    anchor: "end"
                                }
                            }]
                        },
                        options: R
                    })
                }
                if (document.getElementById("smallChart4")) {
                    var V = document.getElementById("smallChart4").getContext("2d");
                    new Chart(V, {
                        type: "LineWithLine",
                        plugins: [L],
                        data: {
                            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                            datasets: [{
                                label: "Shipped Orders",
                                borderColor: t,
                                pointBorderColor: t,
                                pointHoverBackgroundColor: t,
                                pointHoverBorderColor: t,
                                pointRadius: 2,
                                pointBorderWidth: 3,
                                pointHoverRadius: 2,
                                fill: !1,
                                borderWidth: 2,
                                data: [200, 452, 250, 630, 125, 85, 20],
                                datalabels: {
                                    align: "end",
                                    anchor: "end"
                                }
                            }]
                        },
                        options: R
                    })
                }
                if (document.getElementById("salesChart")) {
                    var _ = document.getElementById("salesChart").getContext("2d");
                    new Chart(_, {
                        type: "LineWithShadow",
                        options: {
                            plugins: {
                                datalabels: {
                                    display: !1
                                }
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            scales: {
                                yAxes: [{
                                    gridLines: {
                                        display: !0,
                                        lineWidth: 1,
                                        color: "rgba(0,0,0,0.1)",
                                        drawBorder: !1
                                    },
                                    ticks: {
                                        beginAtZero: !0,
                                        stepSize: 5,
                                        min: 50,
                                        max: 70,
                                        padding: 20
                                    }
                                }],
                                xAxes: [{
                                    gridLines: {
                                        display: !1
                                    }
                                }]
                            },
                            legend: {
                                display: !1
                            },
                            tooltips: z
                        },
                        data: {
                            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                            datasets: [{
                                label: "",
                                data: [54, 63, 60, 65, 60, 68, 60],
                                borderColor: t,
                                pointBackgroundColor: f,
                                pointBorderColor: t,
                                pointHoverBackgroundColor: t,
                                pointHoverBorderColor: f,
                                pointRadius: 6,
                                pointBorderWidth: 2,
                                pointHoverRadius: 8,
                                fill: !1
                            }]
                        }
                    })
                }
                if (document.getElementById("areaChart")) {
                    var N = document.getElementById("areaChart").getContext("2d");
                    new Chart(N, {
                        type: "LineWithShadow",
                        options: {
                            plugins: {
                                datalabels: {
                                    display: !1
                                }
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            scales: {
                                yAxes: [{
                                    gridLines: {
                                        display: !0,
                                        lineWidth: 1,
                                        color: "rgba(0,0,0,0.1)",
                                        drawBorder: !1
                                    },
                                    ticks: {
                                        beginAtZero: !0,
                                        stepSize: 5,
                                        min: 50,
                                        max: 70,
                                        padding: 0
                                    }
                                }],
                                xAxes: [{
                                    gridLines: {
                                        display: !1
                                    }
                                }]
                            },
                            legend: {
                                display: !1
                            },
                            tooltips: z
                        },
                        data: {
                            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                            datasets: [{
                                label: "",
                                data: [54, 63, 60, 65, 60, 68, 60],
                                borderColor: t,
                                pointBackgroundColor: f,
                                pointBorderColor: t,
                                pointHoverBackgroundColor: t,
                                pointHoverBorderColor: f,
                                pointRadius: 4,
                                pointBorderWidth: 2,
                                pointHoverRadius: 5,
                                fill: !0,
                                borderWidth: 2,
                                backgroundColor: c
                            }]
                        }
                    })
                }
                if (document.getElementById("areaChartNoShadow")) {
                    var q = document.getElementById("areaChartNoShadow").getContext("2d");
                    new Chart(q, {
                        type: "line",
                        options: {
                            plugins: {
                                datalabels: {
                                    display: !1
                                }
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            scales: {
                                yAxes: [{
                                    gridLines: {
                                        display: !0,
                                        lineWidth: 1,
                                        color: "rgba(0,0,0,0.1)",
                                        drawBorder: !1
                                    },
                                    ticks: {
                                        beginAtZero: !0,
                                        stepSize: 5,
                                        min: 50,
                                        max: 70,
                                        padding: 0
                                    }
                                }],
                                xAxes: [{
                                    gridLines: {
                                        display: !1
                                    }
                                }]
                            },
                            legend: {
                                display: !1
                            },
                            tooltips: z
                        },
                        data: {
                            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                            datasets: [{
                                label: "",
                                data: [54, 63, 60, 65, 60, 68, 60],
                                borderColor: t,
                                pointBackgroundColor: f,
                                pointBorderColor: t,
                                pointHoverBackgroundColor: t,
                                pointHoverBorderColor: f,
                                pointRadius: 4,
                                pointBorderWidth: 2,
                                pointHoverRadius: 5,
                                fill: !0,
                                borderWidth: 2,
                                backgroundColor: c
                            }]
                        }
                    })
                }
                if (document.getElementById("scatterChart")) {
                    var O = document.getElementById("scatterChart").getContext("2d");
                    new Chart(O, {
                        type: "ScatterWithShadow",
                        options: {
                            plugins: {
                                datalabels: {
                                    display: !1
                                }
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            scales: {
                                yAxes: [{
                                    gridLines: {
                                        display: !0,
                                        lineWidth: 1,
                                        color: "rgba(0,0,0,0.1)",
                                        drawBorder: !1
                                    },
                                    ticks: {
                                        beginAtZero: !0,
                                        stepSize: 20,
                                        min: -80,
                                        max: 80,
                                        padding: 20
                                    }
                                }],
                                xAxes: [{
                                    gridLines: {
                                        display: !0,
                                        lineWidth: 1,
                                        color: "rgba(0,0,0,0.1)"
                                    }
                                }]
                            },
                            legend: {
                                position: "bottom",
                                labels: {
                                    padding: 30,
                                    usePointStyle: !0,
                                    fontSize: 12
                                }
                            },
                            tooltips: z
                        },
                        data: {
                            datasets: [{
                                borderWidth: 2,
                                label: "Cakes",
                                borderColor: t,
                                backgroundColor: c,
                                data: [{
                                    x: 62,
                                    y: -78
                                }, {
                                    x: -0,
                                    y: 74
                                }, {
                                    x: -67,
                                    y: 45
                                }, {
                                    x: -26,
                                    y: -43
                                }, {
                                    x: -15,
                                    y: -30
                                }, {
                                    x: 65,
                                    y: -68
                                }, {
                                    x: -28,
                                    y: -61
                                }]
                            }, {
                                borderWidth: 2,
                                label: "Desserts",
                                borderColor: r,
                                backgroundColor: p,
                                data: [{
                                    x: 79,
                                    y: 62
                                }, {
                                    x: 62,
                                    y: 0
                                }, {
                                    x: -76,
                                    y: -81
                                }, {
                                    x: -51,
                                    y: 41
                                }, {
                                    x: -9,
                                    y: 9
                                }, {
                                    x: 72,
                                    y: -37
                                }, {
                                    x: 62,
                                    y: -26
                                }]
                            }]
                        }
                    })
                }
                if (document.getElementById("scatterChartNoShadow")) {
                    var U = document.getElementById("scatterChartNoShadow").getContext("2d");
                    new Chart(U, {
                        type: "scatter",
                        options: {
                            plugins: {
                                datalabels: {
                                    display: !1
                                }
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            scales: {
                                yAxes: [{
                                    gridLines: {
                                        display: !0,
                                        lineWidth: 1,
                                        color: "rgba(0,0,0,0.1)",
                                        drawBorder: !1
                                    },
                                    ticks: {
                                        beginAtZero: !0,
                                        stepSize: 20,
                                        min: -80,
                                        max: 80,
                                        padding: 20
                                    }
                                }],
                                xAxes: [{
                                    gridLines: {
                                        display: !0,
                                        lineWidth: 1,
                                        color: "rgba(0,0,0,0.1)"
                                    }
                                }]
                            },
                            legend: {
                                position: "bottom",
                                labels: {
                                    padding: 30,
                                    usePointStyle: !0,
                                    fontSize: 12
                                }
                            },
                            tooltips: z
                        },
                        data: {
                            datasets: [{
                                borderWidth: 2,
                                label: "Cakes",
                                borderColor: t,
                                backgroundColor: c,
                                data: [{
                                    x: 62,
                                    y: -78
                                }, {
                                    x: -0,
                                    y: 74
                                }, {
                                    x: -67,
                                    y: 45
                                }, {
                                    x: -26,
                                    y: -43
                                }, {
                                    x: -15,
                                    y: -30
                                }, {
                                    x: 65,
                                    y: -68
                                }, {
                                    x: -28,
                                    y: -61
                                }]
                            }, {
                                borderWidth: 2,
                                label: "Desserts",
                                borderColor: r,
                                backgroundColor: p,
                                data: [{
                                    x: 79,
                                    y: 62
                                }, {
                                    x: 62,
                                    y: 0
                                }, {
                                    x: -76,
                                    y: -81
                                }, {
                                    x: -51,
                                    y: 41
                                }, {
                                    x: -9,
                                    y: 9
                                }, {
                                    x: 72,
                                    y: -37
                                }, {
                                    x: 62,
                                    y: -26
                                }]
                            }]
                        }
                    })
                }
                if (document.getElementById("radarChartNoShadow")) {
                    var Z = document.getElementById("radarChartNoShadow").getContext("2d");
                    new Chart(Z, {
                        type: "radar",
                        options: {
                            plugins: {
                                datalabels: {
                                    display: !1
                                }
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            scale: {
                                ticks: {
                                    display: !1
                                }
                            },
                            legend: {
                                position: "bottom",
                                labels: {
                                    padding: 30,
                                    usePointStyle: !0,
                                    fontSize: 12
                                }
                            },
                            tooltips: z
                        },
                        data: {
                            datasets: [{
                                label: "Stock",
                                borderWidth: 2,
                                pointBackgroundColor: t,
                                borderColor: t,
                                backgroundColor: c,
                                data: [80, 90, 70]
                            }, {
                                label: "Order",
                                borderWidth: 2,
                                pointBackgroundColor: r,
                                borderColor: r,
                                backgroundColor: p,
                                data: [68, 80, 95]
                            }],
                            labels: ["Cakes", "Desserts", "Cupcakes"]
                        }
                    })
                }
                if (document.getElementById("radarChart")) {
                    var X = document.getElementById("radarChart").getContext("2d");
                    new Chart(X, {
                        type: "RadarWithShadow",
                        options: {
                            plugins: {
                                datalabels: {
                                    display: !1
                                }
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            scale: {
                                ticks: {
                                    display: !1
                                }
                            },
                            legend: {
                                position: "bottom",
                                labels: {
                                    padding: 30,
                                    usePointStyle: !0,
                                    fontSize: 12
                                }
                            },
                            tooltips: z
                        },
                        data: {
                            datasets: [{
                                label: "Stock",
                                borderWidth: 2,
                                pointBackgroundColor: t,
                                borderColor: t,
                                backgroundColor: c,
                                data: [80, 90, 70]
                            }, {
                                label: "Order",
                                borderWidth: 2,
                                pointBackgroundColor: r,
                                borderColor: r,
                                backgroundColor: p,
                                data: [68, 80, 95]
                            }],
                            labels: ["Cakes", "Desserts", "Cupcakes"]
                        }
                    })
                }
                if (document.getElementById("polarChart")) {
                    var Y = document.getElementById("polarChart").getContext("2d");
                    new Chart(Y, {
                        type: "PolarWithShadow",
                        options: {
                            plugins: {
                                datalabels: {
                                    display: !1
                                }
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            scale: {
                                ticks: {
                                    display: !1
                                }
                            },
                            legend: {
                                position: "bottom",
                                labels: {
                                    padding: 30,
                                    usePointStyle: !0,
                                    fontSize: 12
                                }
                            },
                            tooltips: z
                        },
                        data: {
                            datasets: [{
                                label: "Stock",
                                borderWidth: 2,
                                pointBackgroundColor: t,
                                borderColor: [t, r, s],
                                backgroundColor: [c, p, u],
                                data: [80, 90, 50]
                            }],
                            labels: ["Cakes", "Desserts", "Cupcakes"]
                        }
                    })
                }
                if (document.getElementById("polarChartNoShadow")) {
                    var G = document.getElementById("polarChartNoShadow").getContext("2d");
                    new Chart(G, {
                        type: "polarArea",
                        options: {
                            plugins: {
                                datalabels: {
                                    display: !1
                                }
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            scale: {
                                ticks: {
                                    display: !1
                                }
                            },
                            legend: {
                                position: "bottom",
                                labels: {
                                    padding: 30,
                                    usePointStyle: !0,
                                    fontSize: 12
                                }
                            },
                            tooltips: z
                        },
                        data: {
                            datasets: [{
                                label: "Stock",
                                borderWidth: 2,
                                pointBackgroundColor: t,
                                borderColor: [t, r, s],
                                backgroundColor: [c, p, u],
                                data: [80, 90, 70]
                            }],
                            labels: ["Cakes", "Desserts", "Cupcakes"]
                        }
                    })
                }
                if (document.getElementById("salesChartNoShadow")) {
                    var J = document.getElementById("salesChartNoShadow").getContext("2d");
                    new Chart(J, {
                        type: "line",
                        options: {
                            plugins: {
                                datalabels: {
                                    display: !1
                                }
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            scales: {
                                yAxes: [{
                                    gridLines: {
                                        display: !0,
                                        lineWidth: 1,
                                        color: "rgba(0,0,0,0.1)",
                                        drawBorder: !1
                                    },
                                    ticks: {
                                        beginAtZero: !0,
                                        stepSize: 5,
                                        min: 50,
                                        max: 70,
                                        padding: 20
                                    }
                                }],
                                xAxes: [{
                                    gridLines: {
                                        display: !1
                                    }
                                }]
                            },
                            legend: {
                                display: !1
                            },
                            tooltips: z
                        },
                        data: {
                            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                            datasets: [{
                                label: "",
                                data: [54, 63, 60, 65, 60, 68, 60],
                                borderColor: t,
                                pointBackgroundColor: f,
                                pointBorderColor: t,
                                pointHoverBackgroundColor: t,
                                pointHoverBorderColor: f,
                                pointRadius: 6,
                                pointBorderWidth: 2,
                                pointHoverRadius: 8,
                                fill: !1
                            }]
                        }
                    })
                }
                if (document.getElementById("productChart")) {
                    var j = document.getElementById("productChart").getContext("2d");
                    new Chart(j, {
                        type: "BarWithShadow",
                        options: {
                            plugins: {
                                datalabels: {
                                    display: !1
                                }
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            scales: {
                                yAxes: [{
                                    gridLines: {
                                        display: !0,
                                        lineWidth: 1,
                                        color: "rgba(0,0,0,0.1)",
                                        drawBorder: !1
                                    },
                                    ticks: {
                                        beginAtZero: !0,
                                        stepSize: 100,
                                        min: 300,
                                        max: 800,
                                        padding: 20
                                    }
                                }],
                                xAxes: [{
                                    gridLines: {
                                        display: !1
                                    }
                                }]
                            },
                            legend: {
                                position: "bottom",
                                labels: {
                                    padding: 30,
                                    usePointStyle: !0,
                                    fontSize: 12
                                }
                            },
                            tooltips: z
                        },
                        data: {
                            labels: ["January", "February", "March", "April", "May", "June"],
                            datasets: [{
                                label: "Cakes",
                                borderColor: t,
                                backgroundColor: c,
                                data: [456, 479, 324, 569, 702, 600],
                                borderWidth: 2
                            }, {
                                label: "Desserts",
                                borderColor: r,
                                backgroundColor: p,
                                data: [364, 504, 605, 400, 345, 320],
                                borderWidth: 2
                            }]
                        }
                    })
                }
                if (document.getElementById("productChartNoShadow")) {
                    var Q = document.getElementById("productChartNoShadow").getContext("2d");
                    new Chart(Q, {
                        type: "bar",
                        options: {
                            plugins: {
                                datalabels: {
                                    display: !1
                                }
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            scales: {
                                yAxes: [{
                                    gridLines: {
                                        display: !0,
                                        lineWidth: 1,
                                        color: "rgba(0,0,0,0.1)",
                                        drawBorder: !1
                                    },
                                    ticks: {
                                        beginAtZero: !0,
                                        stepSize: 100,
                                        min: 300,
                                        max: 800,
                                        padding: 20
                                    }
                                }],
                                xAxes: [{
                                    gridLines: {
                                        display: !1
                                    }
                                }]
                            },
                            legend: {
                                position: "bottom",
                                labels: {
                                    padding: 30,
                                    usePointStyle: !0,
                                    fontSize: 12
                                }
                            },
                            tooltips: z
                        },
                        data: {
                            labels: ["January", "February", "March", "April", "May", "June"],
                            datasets: [{
                                label: "Cakes",
                                borderColor: t,
                                backgroundColor: c,
                                data: [456, 479, 324, 569, 702, 600],
                                borderWidth: 2
                            }, {
                                label: "Desserts",
                                borderColor: r,
                                backgroundColor: p,
                                data: [364, 504, 605, 400, 345, 320],
                                borderWidth: 2
                            }]
                        }
                    })
                }
                var K = {
                    type: "LineWithShadow",
                    options: {
                        plugins: {
                            datalabels: {
                                display: !1
                            }
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    display: !0,
                                    lineWidth: 1,
                                    color: "rgba(0,0,0,0.1)",
                                    drawBorder: !1
                                },
                                ticks: {
                                    beginAtZero: !0,
                                    stepSize: 5,
                                    min: 50,
                                    max: 70,
                                    padding: 20
                                }
                            }],
                            xAxes: [{
                                gridLines: {
                                    display: !1
                                }
                            }]
                        },
                        legend: {
                            display: !1
                        },
                        tooltips: z
                    },
                    data: {
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        datasets: [{
                            borderWidth: 2,
                            label: "",
                            data: [54, 63, 60, 65, 60, 68, 60, 63, 60, 65, 60, 68],
                            borderColor: t,
                            pointBackgroundColor: f,
                            pointBorderColor: t,
                            pointHoverBackgroundColor: t,
                            pointHoverBorderColor: f,
                            pointRadius: 4,
                            pointBorderWidth: 2,
                            pointHoverRadius: 5,
                            fill: !1
                        }]
                    }
                };
                if (document.getElementById("contributionChart1")) new Chart(document.getElementById("contributionChart1").getContext("2d"), K);
                if (document.getElementById("contributionChart2")) new Chart(document.getElementById("contributionChart2").getContext("2d"), K);
                if (document.getElementById("contributionChart3")) new Chart(document.getElementById("contributionChart3").getContext("2d"), K);
                var ee = {
                    afterDatasetsUpdate: function(e) {},
                    beforeDraw: function(e) {
                        var t = e.chartArea.right,
                            a = e.chartArea.bottom,
                            n = e.chart.ctx;
                        n.restore();
                        var o = e.data.labels[0],
                            i = e.data.datasets[0].data[0],
                            r = e.data.datasets[0],
                            s = r._meta[Object.keys(r._meta)[0]],
                            l = s.total,
                            d = parseFloat((i / l * 100).toFixed(1));
                        d = e.legend.legendItems[0].hidden ? 0 : d, e.pointAvailable && (o = e.data.labels[e.pointIndex], i = e.data.datasets[e.pointDataIndex].data[e.pointIndex], l = (s = (r = e.data.datasets[e.pointDataIndex])._meta[Object.keys(r._meta)[0]]).total, d = parseFloat((i / l * 100).toFixed(1)), d = e.legend.legendItems[e.pointIndex].hidden ? 0 : d), n.font = "36px Nunito, sans-serif", n.fillStyle = g, n.textBaseline = "middle";
                        var c = d + "%",
                            p = Math.round((t - n.measureText(c).width) / 2),
                            u = a / 2;
                        n.fillText(c, p, u), n.font = "14px Nunito, sans-serif", n.textBaseline = "middle";
                        var h = o;
                        p = Math.round((t - n.measureText(h).width) / 2), u = a / 2 - 30;
                        n.fillText(h, p, u), n.save()
                    },
                    beforeEvent: function(e, t, a) {
                        var n = e.getElementAtEvent(t)[0];
                        n && (e.pointIndex = n._index, e.pointDataIndex = n._datasetIndex, e.pointAvailable = !0)
                    }
                };
                if (document.getElementById("categoryChart")) {
                    var te = document.getElementById("categoryChart");
                    new Chart(te, {
                        plugins: [ee],
                        type: "DoughnutWithShadow",
                        data: {
                            labels: ["Cakes", "Cupcakes", "Desserts"],
                            datasets: [{
                                label: "",
                                borderColor: [s, r, t],
                                backgroundColor: [u, p, c],
                                borderWidth: 2,
                                data: [15, 25, 20]
                            }]
                        },
                        draw: function() {},
                        options: {
                            plugins: {
                                datalabels: {
                                    display: !1
                                }
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            cutoutPercentage: 80,
                            title: {
                                display: !1
                            },
                            layout: {
                                padding: {
                                    bottom: 20
                                }
                            },
                            legend: {
                                position: "bottom",
                                labels: {
                                    padding: 30,
                                    usePointStyle: !0,
                                    fontSize: 12
                                }
                            },
                            tooltips: z
                        }
                    })
                }
                if (document.getElementById("categoryChartNoShadow")) {
                    var ae = document.getElementById("categoryChartNoShadow");
                    new Chart(ae, {
                        plugins: [ee],
                        type: "doughnut",
                        data: {
                            labels: ["Cakes", "Cupcakes", "Desserts"],
                            datasets: [{
                                label: "",
                                borderColor: [s, r, t],
                                backgroundColor: [u, p, c],
                                borderWidth: 2,
                                data: [15, 25, 20]
                            }]
                        },
                        draw: function() {},
                        options: {
                            plugins: {
                                datalabels: {
                                    display: !1
                                }
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            cutoutPercentage: 80,
                            title: {
                                display: !1
                            },
                            layout: {
                                padding: {
                                    bottom: 20
                                }
                            },
                            legend: {
                                position: "bottom",
                                labels: {
                                    padding: 30,
                                    usePointStyle: !0,
                                    fontSize: 12
                                }
                            },
                            tooltips: z
                        }
                    })
                }
                if (document.getElementById("pieChartNoShadow")) {
                    var ne = document.getElementById("pieChartNoShadow");
                    new Chart(ne, {
                        type: "pie",
                        data: {
                            labels: ["Cakes", "Cupcakes", "Desserts"],
                            datasets: [{
                                label: "",
                                borderColor: [t, r, s],
                                backgroundColor: [c, p, u],
                                borderWidth: 2,
                                data: [15, 25, 20]
                            }]
                        },
                        draw: function() {},
                        options: {
                            plugins: {
                                datalabels: {
                                    display: !1
                                }
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            title: {
                                display: !1
                            },
                            layout: {
                                padding: {
                                    bottom: 20
                                }
                            },
                            legend: {
                                position: "bottom",
                                labels: {
                                    padding: 30,
                                    usePointStyle: !0,
                                    fontSize: 12
                                }
                            },
                            tooltips: z
                        }
                    })
                }
                if (document.getElementById("pieChart")) ne = document.getElementById("pieChart"), new Chart(ne, {
                    type: "PieWithShadow",
                    data: {
                        labels: ["Cakes", "Cupcakes", "Desserts"],
                        datasets: [{
                            label: "",
                            borderColor: [t, r, s],
                            backgroundColor: [c, p, u],
                            borderWidth: 2,
                            data: [15, 25, 20]
                        }]
                    },
                    draw: function() {},
                    options: {
                        plugins: {
                            datalabels: {
                                display: !1
                            }
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        title: {
                            display: !1
                        },
                        layout: {
                            padding: {
                                bottom: 20
                            }
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: !0,
                                fontSize: 12
                            }
                        },
                        tooltips: z
                    }
                });
                if (document.getElementById("frequencyChart")) {
                    var oe = document.getElementById("frequencyChart");
                    new Chart(oe, {
                        plugins: [ee],
                        type: "DoughnutWithShadow",
                        data: {
                            labels: ["Adding", "Editing", "Deleting"],
                            datasets: [{
                                label: "",
                                borderColor: [t, r, s],
                                backgroundColor: [c, p, u],
                                borderWidth: 2,
                                data: [15, 25, 20]
                            }]
                        },
                        draw: function() {},
                        options: {
                            plugins: {
                                datalabels: {
                                    display: !1
                                }
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            cutoutPercentage: 80,
                            title: {
                                display: !1
                            },
                            layout: {
                                padding: {
                                    bottom: 20
                                }
                            },
                            legend: {
                                position: "bottom",
                                labels: {
                                    padding: 30,
                                    usePointStyle: !0,
                                    fontSize: 12
                                }
                            },
                            tooltips: z
                        }
                    })
                }
                if (document.getElementById("ageChart")) {
                    var ie = document.getElementById("ageChart");
                    new Chart(ie, {
                        plugins: [ee],
                        type: "DoughnutWithShadow",
                        data: {
                            labels: ["12-24", "24-30", "30-40", "40-50", "50-60"],
                            datasets: [{
                                label: "",
                                borderColor: [t, r, s, l, d],
                                backgroundColor: [c, p, u, h, m],
                                borderWidth: 2,
                                data: [15, 25, 20, 30, 14]
                            }]
                        },
                        draw: function() {},
                        options: {
                            plugins: {
                                datalabels: {
                                    display: !1
                                }
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            cutoutPercentage: 80,
                            title: {
                                display: !1
                            },
                            layout: {
                                padding: {
                                    bottom: 20
                                }
                            },
                            legend: {
                                position: "bottom",
                                labels: {
                                    padding: 30,
                                    usePointStyle: !0,
                                    fontSize: 12
                                }
                            },
                            tooltips: z
                        }
                    })
                }
                if (document.getElementById("genderChart")) {
                    var re = document.getElementById("genderChart");
                    new Chart(re, {
                        plugins: [ee],
                        type: "DoughnutWithShadow",
                        data: {
                            labels: ["Male", "Female", "Other"],
                            datasets: [{
                                label: "",
                                borderColor: [t, r, s],
                                backgroundColor: [c, p, u],
                                borderWidth: 2,
                                data: [85, 45, 20]
                            }]
                        },
                        draw: function() {},
                        options: {
                            plugins: {
                                datalabels: {
                                    display: !1
                                }
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            cutoutPercentage: 80,
                            title: {
                                display: !1
                            },
                            layout: {
                                padding: {
                                    bottom: 20
                                }
                            },
                            legend: {
                                position: "bottom",
                                labels: {
                                    padding: 30,
                                    usePointStyle: !0,
                                    fontSize: 12
                                }
                            },
                            tooltips: z
                        }
                    })
                }
                if (document.getElementById("workChart")) {
                    var se = document.getElementById("workChart");
                    new Chart(se, {
                        plugins: [ee],
                        type: "DoughnutWithShadow",
                        data: {
                            labels: ["Employed for wages", "Self-employed", "Looking for work", "Retired"],
                            datasets: [{
                                label: "",
                                borderColor: [t, r, s, l],
                                backgroundColor: [c, p, u, h],
                                borderWidth: 2,
                                data: [15, 25, 20, 8]
                            }]
                        },
                        draw: function() {},
                        options: {
                            plugins: {
                                datalabels: {
                                    display: !1
                                }
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            cutoutPercentage: 80,
                            title: {
                                display: !1
                            },
                            layout: {
                                padding: {
                                    bottom: 20
                                }
                            },
                            legend: {
                                position: "bottom",
                                labels: {
                                    padding: 30,
                                    usePointStyle: !0,
                                    fontSize: 12
                                }
                            },
                            tooltips: z
                        }
                    })
                }
                if (document.getElementById("codingChart")) {
                    var le = document.getElementById("codingChart");
                    new Chart(le, {
                        plugins: [ee],
                        type: "DoughnutWithShadow",
                        data: {
                            labels: ["Python", "JavaScript", "PHP", "Java", "C#"],
                            datasets: [{
                                label: "",
                                borderColor: [t, r, s, l, d],
                                backgroundColor: [c, p, u, h, m],
                                borderWidth: 2,
                                data: [15, 25, 20, 8, 25]
                            }]
                        },
                        draw: function() {},
                        options: {
                            plugins: {
                                datalabels: {
                                    display: !1
                                }
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            cutoutPercentage: 80,
                            title: {
                                display: !1
                            },
                            layout: {
                                padding: {
                                    bottom: 20
                                }
                            },
                            legend: {
                                position: "bottom",
                                labels: {
                                    padding: 30,
                                    usePointStyle: !0,
                                    fontSize: 12
                                }
                            },
                            tooltips: z
                        }
                    })
                }
            }
            if ($().fullCalendar) {
                var de = new Date((new Date).setHours((new Date).getHours()));
                de.getDate(), de.getMonth();
                $(".calendar").fullCalendar({
                    themeSystem: "bootstrap4",
                    height: "auto",
                    isRTL: i,
                    buttonText: {
                        today: "Today",
                        month: "Month",
                        week: "Week",
                        day: "Day",
                        list: "List"
                    },
                    bootstrapFontAwesome: {
                        prev: " simple-icon-arrow-left",
                        next: " simple-icon-arrow-right",
                        prevYear: " simple-icon-control-start",
                        nextYear: " simple-icon-control-end"
                    },
                    events: [{
                        title: "Account",
                        start: "2018-05-18"
                    }, {
                        title: "Delivery",
                        start: "2019-07-22",
                        end: "2019-07-24"
                    }, {
                        title: "Conference",
                        start: "2019-06-07",
                        end: "2019-06-09"
                    }, {
                        title: "Delivery",
                        start: "2019-09-03",
                        end: "2019-09-06"
                    }, {
                        title: "Meeting",
                        start: "2019-06-17",
                        end: "2019-06-18"
                    }, {
                        title: "Taxes",
                        start: "2019-08-07",
                        end: "2019-08-09"
                    }]
                })
            }
            if ($().DataTable) {
                $(".data-table-standard").DataTable({
                    bLengthChange: !1,
                    searching: !1,
                    destroy: !0,
                    info: !1,
                    sDom: '<"row view-filter"<"col-sm-12"<"float-left"l><"float-right"f><"clearfix">>>t<"row view-pager"<"col-sm-12"<"text-center"ip>>>',
                    pageLength: 6,
                    language: {
                        paginate: {
                            previous: "<i class='simple-icon-arrow-left'></i>",
                            next: "<i class='simple-icon-arrow-right'></i>"
                        }
                    },
                    drawCallback: function() {
                        $($(".dataTables_wrapper .pagination li:first-of-type")).find("a").addClass("prev"), $($(".dataTables_wrapper .pagination li:last-of-type")).find("a").addClass("next"), $(".dataTables_wrapper .pagination").addClass("pagination-sm")
                    }
                }), $(".data-tables-pagination").DataTable({
                    bLengthChange: !1,
                    searching: !1,
                    destroy: !0,
                    info: !1,
                    sDom: '<"row view-filter"<"col-sm-12"<"float-left"l><"float-right"f><"clearfix">>>t<"row view-pager"<"col-sm-12"<"text-center"ip>>>',
                    pageLength: 8,
                    language: {
                        paginate: {
                            previous: "<i class='simple-icon-arrow-left'></i>",
                            next: "<i class='simple-icon-arrow-right'></i>"
                        }
                    },
                    drawCallback: function() {
                        $($(".dataTables_wrapper .pagination li:first-of-type")).find("a").addClass("prev"), $($(".dataTables_wrapper .pagination li:last-of-type")).find("a").addClass("next"), $(".dataTables_wrapper .pagination").addClass("pagination-sm")
                    }
                }), $(".data-table-scrollable").DataTable({
                    searching: !1,
                    bLengthChange: !1,
                    destroy: !0,
                    info: !1,
                    paging: !1,
                    sDom: '<"row view-filter"<"col-sm-12"<"float-left"l><"float-right"f><"clearfix">>>t<"row view-pager"<"col-sm-12"<"text-center"ip>>>',
                    responsive: !0,
                    deferRender: !0,
                    scrollY: "calc(100vh - 400px)",
                    scrollCollapse: !0,
                    fnInitComplete: function() {
                        new PerfectScrollbar(".dataTables_scrollBody", {
                            suppressScrollX: !0
                        }).isRtl = !1
                    },
                    fnDrawCallback: function(e) {
                        new PerfectScrollbar(".dataTables_scrollBody", {
                            suppressScrollX: !0
                        }).isRtl = !1
                    }
                }), $(".data-table-feature").DataTable({
                    sDom: '<"row view-filter"<"col-sm-12"<"float-right"l><"float-left"f><"clearfix">>>t<"row view-pager"<"col-sm-12"<"text-center"ip>>>',
                    columns: [{
                        data: "name"
                    }, {
                        data: "position"
                    }, {
                        data: "office"
                    }, {
                        data: "age"
                    }, {
                        data: "start_date"
                    }, {
                        data: "salary"
                    }],
                    drawCallback: function() {
                        $($(".dataTables_wrapper .pagination li:first-of-type")).find("a").addClass("prev"), $($(".dataTables_wrapper .pagination li:last-of-type")).find("a").addClass("next"), $(".dataTables_wrapper .pagination").addClass("pagination-sm")
                    },
                    language: {
                        paginate: {
                            previous: "<i class='simple-icon-arrow-left'></i>",
                            next: "<i class='simple-icon-arrow-right'></i>"
                        },
                        search: "_INPUT_",
                        searchPlaceholder: "Search...",
                        lengthMenu: "Items Per Page _MENU_"
                    }
                });
                var ce = $("#datatableRows").DataTable({
                    bLengthChange: !10,
                    buttons: ["copy", "excel", "csv", "pdf"],
                    destroy: !0,
                    info: !1,
                    sDom: '<"row view-filter"<"col-sm-12"<"float-left"l><"float-right"f><"clearfix">>>t<"row view-pager"<"col-sm-12"<"text-center"ip>>>',
                    pageLength: 10,
                  
                    data: null,
                    language: {
                        paginate: {
                            previous: "<i class='simple-icon-arrow-left'></i>",
                            next: "<i class='simple-icon-arrow-right'></i>"
                        }
                    },
                    drawCallback: function() {
                        pe(), $("#checkAllDataTables").prop("checked", !1), $("#checkAllDataTables").prop("indeterminate", !1).trigger("change"), $($(".dataTables_wrapper .pagination li:first-of-type")).find("a").addClass("prev"), $($(".dataTables_wrapper .pagination li:last-of-type")).find("a").addClass("next"), $(".dataTables_wrapper .pagination").addClass("pagination-sm");
                        var e = $(this).dataTable().api();
                        $("#pageCountDatatable span").html("Displaying " + parseInt(e.page.info().start + 1) + "-" + e.page.info().end + " of " + e.page.info().recordsTotal + " items")
                    }
                });

                function pe() {
                    $("#datatableRows tbody tr").removeClass("selected"), $("#datatableRows tbody tr .custom-checkbox input").prop("checked", !1).trigger("change")
                }
                $("#dataTablesCopy").on("click", (function(e) {
                    e.preventDefault(), ce.buttons(0).trigger()
                })), $("#dataTablesExcel").on("click", (function(e) {
                    e.preventDefault(), ce.buttons(1).trigger()
                })), $("#dataTablesCsv").on("click", (function(e) {
                    e.preventDefault(), ce.buttons(2).trigger()
                })), $("#dataTablesPdf").on("click", (function(e) {
                    e.preventDefault(), ce.buttons(3).trigger()
                })), $("#datatableRows tbody").on("click", "tr", (function() {
                    $(this).toggleClass("selected");
                    var e = $(this).find(".custom-checkbox input");
                    e.prop("checked", !e.prop("checked")).trigger("change"),
                        function() {
                            var e = !1,
                                t = !0;
                            $("#datatableRows tbody tr .custom-checkbox input").each((function() {
                                $(this).prop("checked") ? e = !0 : t = !1
                            })), e ? $("#checkAllDataTables").prop("indeterminate", e) : ($("#checkAllDataTables").prop("indeterminate", e), $("#checkAllDataTables").prop("checked", e));
                            t && ($("#checkAllDataTables").prop("indeterminate", !1), $("#checkAllDataTables").prop("checked", t))
                        }()
                })), $("#checkAllDataTables").on("click", (function(e) {
                    $("#checkAllDataTables").prop("checked") ? ($("#datatableRows tbody tr").addClass("selected"), $("#datatableRows tbody tr .custom-checkbox input").prop("checked", !0).trigger("change")) : pe()
                })), $("#searchDatatable").on("keyup", (function(e) {
                    ce.search($(this).val()).draw()
                })), $("#pageCountDatatable .dropdown-menu a").on("click", (function(e) {
                    var t = $(this).text();
                    ce.page.len(parseInt(t)).draw()
                }));
                var ue = $("#addToDatatable").stateButton();
                $("#rightModal").on("shown.bs.modal", (function(e) {
                    $("#addToDatatableForm").validate({
                        rules: {
                            Sales: {
                                required: !0,
                                number: !0,
                                min: 3e3
                            },
                            Stock: {
                                required: !0,
                                number: !0
                            },
                            Category: {
                                required: !0
                            },
                            Name: {
                                required: !0
                            }
                        }
                    })
                })), $("#addToDatatable").on("click", (function(e) {
                    if ($("#addToDatatableForm").valid()) {
                        ue.showSpinner();
                        var t = $("#addToDatatableForm").find(":input"),
                            a = {};
                        t.each((function() {
                            a[$(this).attr("name")] = $(this).val()
                        })), a.Check = '<label class="custom-control custom-checkbox mb-1 align-self-center data-table-rows-check"><input type="checkbox" class="custom-control-input"><span class="custom-control-label">&nbsp;</span></label>', ce.row.add(a).draw(), setTimeout((function() {
                            ue.showSuccess(!0, "New row added!"), setTimeout((function() {
                                $("#rightModal").modal("toggle"), ue.reset(), t.each((function() {
                                    $(this).val("")
                                })), $("#addToDatatableForm").find("select").data("select2") && $("#addToDatatableForm").find("select").val("").trigger("change"), $("#addToDatatableForm").validate().resetForm()
                            }), 1e3)
                        }), 1e3)
                    }
                }))
            }
            $("body").on("click", ".notify-btn", (function(e) {
                var t, a, n;
                e.preventDefault(), t = $(this).data("from"), a = $(this).data("align"), n = "primary", $.notify({
                    title: "Bootstrap Notify",
                    message: "Here is a notification!",
                    target: "_blank"
                }, {
                    element: "body",
                    position: null,
                    type: n,
                    allow_dismiss: !0,
                    newest_on_top: !1,
                    showProgressbar: !1,
                    placement: {
                        from: t,
                        align: a
                    },
                    offset: 20,
                    spacing: 10,
                    z_index: 1031,
                    delay: 4e3,
                    timer: 2e3,
                    url_target: "_blank",
                    mouse_over: null,
                    animate: {
                        enter: "animated fadeInDown",
                        exit: "animated fadeOutUp"
                    },
                    onShow: null,
                    onShown: null,
                    onClose: null,
                    onClosed: null,
                    icon_type: "class",
                    template: '<div data-notify="container" class="col-11 col-sm-3 alert  alert-{0} " role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
                })
            })), $(".dropdown-as-select .dropdown-menu a").click((function() {
                var e = $(this).text();
                $(this).parents(".dropdown-as-select").find(".dropdown-toggle").html(e), $(this).parents(".dropdown-as-select").find("a").removeClass("active"), $(this).addClass("active")
            })), $().slick && ($(".slick.basic").slick({
                dots: !0,
                infinite: !0,
                speed: 300,
                rtl: i,
                slidesToShow: 3,
                slidesToScroll: 4,
                appendDots: $(".slick.basic").parents(".slick-container").find(".slider-dot-container"),
                prevArrow: $(".slick.basic").parents(".slick-container").find(".slider-nav .left-arrow"),
                nextArrow: $(".slick.basic").parents(".slick-container").find(".slider-nav .right-arrow"),
                customPaging: function(e, t) {
                    return '<button role="button" class="slick-dot"><span></span></button>'
                },
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: !0,
                        dots: !0
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            }), $(".slick.center").slick({
                dots: !0,
                infinite: !0,
                centerMode: !0,
                speed: 300,
                rtl: i,
                slidesToShow: 4,
                slidesToScroll: 4,
                appendDots: $(".slick.center").parents(".slick-container").find(".slider-dot-container"),
                prevArrow: $(".slick.center").parents(".slick-container").find(".slider-nav .left-arrow"),
                nextArrow: $(".slick.center").parents(".slick-container").find(".slider-nav .right-arrow"),
                customPaging: function(e, t) {
                    return '<button role="button" class="slick-dot"><span></span></button>'
                },
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: !0,
                        dots: !0,
                        centerMode: !1
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        centerMode: !1
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: !1
                    }
                }]
            }), $(".slick.single").slick({
                dots: !0,
                infinite: !0,
                rtl: i,
                speed: 300,
                appendDots: $(".slick.single").parents(".slick-container").find(".slider-dot-container"),
                prevArrow: $(".slick.single").parents(".slick-container").find(".slider-nav .left-arrow"),
                nextArrow: $(".slick.single").parents(".slick-container").find(".slider-nav .right-arrow"),
                customPaging: function(e, t) {
                    return '<button role="button" class="slick-dot"><span></span></button>'
                }
            }));
            var he = document.getElementsByClassName("needs-validation");
            Array.prototype.filter.call(he, (function(e) {
                e.addEventListener("submit", (function(t) {
                    !1 === e.checkValidity() && (t.preventDefault(), t.stopPropagation()), e.classList.add("was-validated")
                }), !1)
            })), $().tooltip && $('[data-toggle="tooltip"]').tooltip(), $().popover && $('[data-toggle="popover"]').popover({
                trigger: "focus"
            }), $().select2 && $(".select2-single, .select2-multiple").select2({
                theme: "bootstrap",
                dir: o,
                placeholder: "",
                maximumSelectionSize: 6,
                containerCssClass: ":all:"
            }), $().datepicker && ($("input.datepicker").datepicker({
                autoclose: !0,
                rtl: i,
                templates: {
                    leftArrow: '<i class="simple-icon-arrow-left"></i>',
                    rightArrow: '<i class="simple-icon-arrow-right"></i>'
                }
            }), $(".input-daterange").datepicker({
                autoclose: !0,
                rtl: i,
                templates: {
                    leftArrow: '<i class="simple-icon-arrow-left"></i>',
                    rightArrow: '<i class="simple-icon-arrow-right"></i>'
                }
            }), $(".input-group.date").datepicker({
                autoclose: !0,
                rtl: i,
                templates: {
                    leftArrow: '<i class="simple-icon-arrow-left"></i>',
                    rightArrow: '<i class="simple-icon-arrow-right"></i>'
                }
            }), $(".date-inline").datepicker({
                autoclose: !0,
                rtl: i,
                templates: {
                    leftArrow: '<i class="simple-icon-arrow-left"></i>',
                    rightArrow: '<i class="simple-icon-arrow-right"></i>'
                }
            })), $().dropzone && !$(".dropzone").hasClass("disabled") && $(".dropzone").dropzone({
                url: "https://httpbin.org/post",
                init: function() {
                    this.on("success", (function(e, t) {
                        console.log(t)
                    }))
                },
                thumbnailWidth: 160,
                previewTemplate: '<div class="dz-preview dz-file-preview mb-3"><div class="d-flex flex-row "><div class="p-0 w-30 position-relative"><div class="dz-error-mark"><span><i></i></span></div><div class="dz-success-mark"><span><i></i></span></div><div class="preview-container"><img data-dz-thumbnail class="img-thumbnail border-0" /><i class="simple-icon-doc preview-icon" ></i></div></div><div class="pl-3 pt-2 pr-2 pb-1 w-70 dz-details position-relative"><div><span data-dz-name></span></div><div class="text-primary text-extra-small" data-dz-size /><div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div><div class="dz-error-message"><span data-dz-errormessage></span></div></div></div><a href="#/" class="remove" data-dz-remove><i class="glyph-icon simple-icon-trash"></i></a></div>'
            });
            var me, ge = window.Cropper;
            if (void 0 !== ge) {
                function fe(e, t) {
                    var a, n = e.length;
                    for (a = 0; a < n; a++) t.call(e, e[a], a, e);
                    return e
                }
                var be = document.querySelectorAll(".cropper-preview"),
                    Ce = {
                        aspectRatio: 4 / 3,
                        preview: ".img-preview",
                        ready: function() {
                            var e = this.cloneNode();
                            e.className = "", e.style.cssText = "display: block;width: 100%;min-width: 0;min-height: 0;max-width: none;max-height: none;", fe(be, (function(t) {
                                t.appendChild(e.cloneNode())
                            }))
                        },
                        crop: function(e) {
                            var t = e.detail,
                                a = this.cropper.getImageData(),
                                n = t.width / t.height;
                            fe(be, (function(e) {
                                var o = e.getElementsByTagName("img").item(0),
                                    i = e.offsetWidth,
                                    r = i / n,
                                    s = t.width / i;
                                e.style.height = r + "px", o && (o.style.width = a.naturalWidth / s + "px", o.style.height = a.naturalHeight / s + "px", o.style.marginLeft = -t.x / s + "px", o.style.marginTop = -t.y / s + "px")
                            }))
                        },
                        zoom: function(e) {}
                    };
                if ($("#inputImage").length > 0) {
                    var we, ye = $("#inputImage")[0],
                        ve = $("#cropperImage")[0];
                    ye.onchange = function() {
                        var e, t = this.files;
                        t && t.length && (e = t[0], $("#cropperContainer").css("display", "block"), /^image\/\w+/.test(e.type) ? (uploadedImageType = e.type, uploadedImageName = e.name, ve.src = uploadedImageURL = URL.createObjectURL(e), we && we.destroy(), we = new ge(ve, Ce), ye.value = null) : window.alert("Please choose an image file."))
                    }
                }
            }
            "undefined" != typeof noUiSlider && ($("#dashboardPriceRange").length > 0 && noUiSlider.create($("#dashboardPriceRange")[0], {
                start: [800, 2100],
                connect: !0,
                tooltips: !0,
                direction: o,
                range: {
                    min: 200,
                    max: 2800
                },
                step: 10,
                format: {
                    to: function(e) {
                        return "$" + $.fn.addCommas(Math.floor(e))
                    },
                    from: function(e) {
                        return e
                    }
                }
            }), $("#doubleSlider").length > 0 && noUiSlider.create($("#doubleSlider")[0], {
                start: [800, 1200],
                connect: !0,
                tooltips: !0,
                direction: o,
                range: {
                    min: 500,
                    max: 1500
                },
                step: 10,
                format: {
                    to: function(e) {
                        return "$" + $.fn.addCommas(Math.round(e))
                    },
                    from: function(e) {
                        return e
                    }
                }
            }), $("#singleSlider").length > 0 && noUiSlider.create($("#singleSlider")[0], {
                start: 0,
                connect: !0,
                tooltips: !0,
                direction: o,
                range: {
                    min: 0,
                    max: 150
                },
                step: 1,
                format: {
                    to: function(e) {
                        return $.fn.addCommas(Math.round(e))
                    },
                    from: function(e) {
                        return e
                    }
                }
            })), $("#exampleModalContent").on("show.bs.modal", (function(e) {
                var t = $(e.relatedTarget).data("whatever"),
                    a = $(this);
                a.find(".modal-title").text("New message to " + t), a.find(".modal-body input").val(t)
            })), "undefined" != typeof PerfectScrollbar && $(".scroll").each((function() {
                if ($(this).parents(".chat-app").length > 0) {
                    var e = $(this)[0],
                        t = ($(this).find(".scroll-content"), !1);

                    function a() {
                        var a = 0;
                        $("main").length > 0 && (a += parseInt($("main").css("margin-top"))), $(".chat-input-container").length > 0 && (a += $(".chat-input-container").outerHeight(!0)), $(".chat-heading-container").length > 0 && (a += $(".chat-heading-container").outerHeight(!0)), $(".separator").length > 0 && (a += $(".separator").outerHeight(!0)), $(".chat-app .scroll").css("height", window.innerHeight - a + "px"), me && ($(".chat-app .scroll").scrollTop($(".chat-app .scroll").prop("scrollHeight")), me.update()), window.innerWidth < 576 ? (me && (me.destroy(), me = null), $(".chat-app .scroll-content > div:last-of-type").css("padding-bottom", $(".chat-input-container").outerHeight(!0) + "px"), t || (setTimeout((function() {
                            $("html, body").animate({
                                scrollTop: $(document).height() + 30
                            }, 100)
                        }), 300), t = !0)) : (me || ((me = new PerfectScrollbar(e, {
                            suppressScrollX: !0
                        })).isRtl = !1, t = !1), $(".chat-app .scroll-content > div:last-of-type").css("padding-bottom", 0))
                    }
                    return $(window).on("resize", (function(e) {
                        a()
                    })), void a()
                }
                new PerfectScrollbar($(this)[0], {
                    suppressScrollX: !0
                }).isRtl = !1
            })), $(".progress-bar").each((function() {
                $(this).css("width", $(this).attr("aria-valuenow") + "%")
            })), "undefined" != typeof ProgressBar && $(".progress-bar-circle").each((function() {
                var e = $(this).attr("aria-valuenow"),
                    a = $(this).data("color") || t,
                    n = $(this).data("trailColor") || "#d7d7d7",
                    o = $(this).attr("aria-valuemax") || 100,
                    i = $(this).data("showPercent");
                new ProgressBar.Circle(this, {
                    color: a,
                    duration: 20,
                    easing: "easeInOut",
                    strokeWidth: 4,
                    trailColor: n,
                    trailWidth: 4,
                    text: {
                        autoStyleContainer: !1
                    },
                    step: function(t, a) {
                        i ? a.setText(Math.round(100 * a.value()) + "%") : a.setText(e + "/" + o)
                    }
                }).animate(e / o)
            })), $().barrating && $(".rating").each((function() {
                var e = $(this).data("currentRating"),
                    t = $(this).data("readonly");
                $(this).barrating({
                    theme: "bootstrap-stars",
                    initialRating: e,
                    readonly: t
                })
            })), $().tagsinput && ($(".tags").tagsinput({
                cancelConfirmKeysOnEmpty: !0,
                confirmKeys: [13]
            }), $("body").on("keypress", ".bootstrap-tagsinput input", (function(e) {
                13 == e.which && (e.preventDefault(), e.stopPropagation())
            }))), "undefined" != typeof Sortable && ($(".sortable").each((function() {
                $(this).find(".handle").length > 0 ? Sortable.create($(this)[0], {
                    handle: ".handle"
                }) : Sortable.create($(this)[0])
            })), $(".sortable-survey").length > 0 && Sortable.create($(".sortable-survey")[0]));
            var $e = $("#successButton").stateButton();
            $e.on("click", (function(e) {
                e.preventDefault(), $e.showSpinner(), setTimeout((function() {
                    $e.showSuccess(!0), setTimeout((function() {
                        $e.reset()
                    }), 2e3)
                }), 3e3)
            }));
            var ke = $("#failButton").stateButton();

            function xe() {
                return document.fullscreenElement && null !== document.fullscreenElement || document.webkitFullscreenElement && null !== document.webkitFullscreenElement || document.mozFullScreenElement && null !== document.mozFullScreenElement || document.msFullscreenElement && null !== document.msFullscreenElement
            }
            if ($("#failButton").on("click", (function(e) {
                    e.preventDefault(), ke.showSpinner(), setTimeout((function() {
                        ke.showFail(!0), setTimeout((function() {
                            ke.reset()
                        }), 2e3)
                    }), 3e3)
                })), $().typeahead && $("#query").typeahead({
                    source: [{
                        name: "May",
                        index: 0,
                        id: "5a8a9bfd8bf389ba8d6bb211"
                    }, {
                        name: "Fuentes",
                        index: 1,
                        id: "5a8a9bfdee10e107f28578d4"
                    }, {
                        name: "Henderson",
                        index: 2,
                        id: "5a8a9bfd4f9e224dfa0110f3"
                    }, {
                        name: "Hinton",
                        index: 3,
                        id: "5a8a9bfde42b28e85df34630"
                    }, {
                        name: "Barrera",
                        index: 4,
                        id: "5a8a9bfdc0cba3abc4532d8d"
                    }, {
                        name: "Therese",
                        index: 5,
                        id: "5a8a9bfdedfcd1aa0f4c414e"
                    }, {
                        name: "Nona",
                        index: 6,
                        id: "5a8a9bfdd6686aa51b953c4e"
                    }, {
                        name: "Frye",
                        index: 7,
                        id: "5a8a9bfd352e2fd4c101507d"
                    }, {
                        name: "Cora",
                        index: 8,
                        id: "5a8a9bfdb5133142047f2600"
                    }, {
                        name: "Miles",
                        index: 9,
                        id: "5a8a9bfdadb1afd136117928"
                    }, {
                        name: "Cantrell",
                        index: 10,
                        id: "5a8a9bfdca4795bcbb002057"
                    }, {
                        name: "Benson",
                        index: 11,
                        id: "5a8a9bfdaa51e9a4aeeddb7d"
                    }, {
                        name: "Susanna",
                        index: 12,
                        id: "5a8a9bfd57dd857535ef5998"
                    }, {
                        name: "Beatrice",
                        index: 13,
                        id: "5a8a9bfd68b6f12828da4175"
                    }, {
                        name: "Tameka",
                        index: 14,
                        id: "5a8a9bfd2bc4a368244d5253"
                    }, {
                        name: "Lowe",
                        index: 15,
                        id: "5a8a9bfd9004fda447204d30"
                    }, {
                        name: "Roth",
                        index: 16,
                        id: "5a8a9bfdb4616dbc06af6172"
                    }, {
                        name: "Conley",
                        index: 17,
                        id: "5a8a9bfdfae43320dd8f9c5a"
                    }, {
                        name: "Nelda",
                        index: 18,
                        id: "5a8a9bfd534d9e0ba2d7c9a7"
                    }, {
                        name: "Angie",
                        index: 19,
                        id: "5a8a9bfd57de84496dc42259"
                    }]
                }), $("#fullScreenButton").on("click", (function(e) {
                    var t, a;
                    e.preventDefault(), xe() ? ($($(this).find("i")[1]).css("display", "none"), $($(this).find("i")[0]).css("display", "inline")) : ($($(this).find("i")[1]).css("display", "inline"), $($(this).find("i")[0]).css("display", "none")), t = xe(), a = document.documentElement, t ? document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen() : a.requestFullscreen ? a.requestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullScreen ? a.webkitRequestFullScreen() : a.msRequestFullscreen && a.msRequestFullscreen()
                })), "undefined" != typeof Quill) {
                var Se = [
                    ["bold", "italic", "underline", "strike"],
                    [{
                        list: "ordered"
                    }, {
                        list: "bullet"
                    }],
                    [{
                        size: ["small", !1, "large", "huge"]
                    }],
                    [{
                        color: []
                    }],
                    [{
                        direction: o
                    }],
                    [{
                        align: []
                    }]
                ];
                new Quill("#quillEditor", {
                    modules: {
                        toolbar: [
                            ["bold", "italic", "underline", "strike"],
                            ["blockquote", "code-block"],
                            [{
                                header: 1
                            }, {
                                header: 2
                            }],
                            [{
                                list: "ordered"
                            }, {
                                list: "bullet"
                            }],
                            [{
                                script: "sub"
                            }, {
                                script: "super"
                            }],
                            [{
                                indent: "-1"
                            }, {
                                indent: "+1"
                            }],
                            [{
                                direction: o
                            }],
                            [{
                                size: ["small", !1, "large", "huge"]
                            }],
                            [{
                                header: [1, 2, 3, 4, 5, 6, !1]
                            }],
                            [{
                                color: []
                            }, {
                                background: []
                            }],
                            [{
                                font: []
                            }],
                            [{
                                align: []
                            }],
                            ["clean"]
                        ]
                    },
                    theme: "snow"
                }), new Quill("#quillEditorBubble", {
                    modules: {
                        toolbar: Se
                    },
                    theme: "bubble"
                })
            }
            if ("undefined" != typeof ClassicEditor && ClassicEditor.create(document.querySelector("#ckEditorClassic")).catch((function(e) {})), $("body > *").css({
                    opacity: 0
                }), setTimeout((function() {
                    $("body").removeClass("show-spinner"), $("main").addClass("default-transition"), $(".sub-menu").addClass("default-transition"), $(".main-menu").addClass("default-transition"), $(".theme-colors").addClass("default-transition"), $("body > *").animate({
                        opacity: 1
                    }, 100)
                }), 300), "undefined" != typeof Mousetrap && (Mousetrap.bind(["ctrl+down", "command+down"], (function(e) {
                    var t = $(".sub-menu li.active").next();
                    return 0 == t.length && (t = $(".sub-menu li.active").parent().children().first()), window.location.href = t.find("a").attr("href"), !1
                })), Mousetrap.bind(["ctrl+up", "command+up"], (function(e) {
                    var t = $(".sub-menu li.active").prev();
                    return 0 == t.length && (t = $(".sub-menu li.active").parent().children().last()), window.location.href = t.find("a").attr("href"), !1
                })), Mousetrap.bind(["ctrl+shift+down", "command+shift+down"], (function(e) {
                    var t = $(".main-menu li.active").next();
                    0 == t.length && (t = $(".main-menu li:first-of-type"));
                    var a = t.find("a").attr("href").replace("#", ""),
                        n = $(".sub-menu ul[data-link='" + a + "'] li:first-of-type");
                    return window.location.href = n.find("a").attr("href"), !1
                })), Mousetrap.bind(["ctrl+shift+up", "command+shift+up"], (function(e) {
                    var t = $(".main-menu li.active").prev();
                    0 == t.length && (t = $(".main-menu li:last-of-type"));
                    var a = t.find("a").attr("href").replace("#", ""),
                        n = $(".sub-menu ul[data-link='" + a + "'] li:first-of-type");
                    return window.location.href = n.find("a").attr("href"), !1
                })), $(".list") && $(".list").length > 0 && (Mousetrap.bind(["ctrl+a", "command+a"], (function(e) {
                    return $(".list").shiftSelectable().data("shiftSelectable").selectAll(), !1
                })), Mousetrap.bind(["ctrl+d", "command+d"], (function(e) {
                    return $(".list").shiftSelectable().data("shiftSelectable").deSelectAll(), !1
                })))), $().contextMenu && $.contextMenu({
                    selector: ".list .card",
                    callback: function(e, t) {},
                    events: {
                        show: function(e) {
                            var t = e.$trigger.parents(".list");
                            t && t.length > 0 && t.data("shiftSelectable").rightClick(e.$trigger)
                        }
                    },
                    items: {
                        copy: {
                            name: "Copy",
                            className: "simple-icon-docs"
                        },
                        archive: {
                            name: "Move to archive",
                            className: "simple-icon-drawer"
                        },
                        delete: {
                            name: "Delete",
                            className: "simple-icon-trash"
                        }
                    }
                }), $().selectFromLibrary && ($(".sfl-multiple").selectFromLibrary(), $(".sfl-single").selectFromLibrary()), $(".feedback-container").on("click", "a", (function e(t) {
                    t.preventDefault(), $(".feedback-container").off("click", "a", e), $(".feedback-container a").tooltip("dispose"), $(".feedback-container a").animate({
                        opacity: 0
                    }, 300, (function() {
                        $(".feedback-container a").css("visibility", "hidden")
                    })), $(".feedback-container .feedback-answer").html($(t.currentTarget).data("message"))
                })), $().smartWizard) {
                function Be(e) {
                    return !!$().validate && !!$(e).valid()
                }
                $("#smartWizardDefault").smartWizard({
                    selected: 0,
                    theme: "default",
                    transitionEffect: "fade",
                    showStepURLhash: !1
                }), $("#smartWizardDot").smartWizard({
                    selected: 0,
                    theme: "dots",
                    transitionEffect: "fade",
                    showStepURLhash: !1
                }), $("#smartWizardCheck").smartWizard({
                    selected: 0,
                    theme: "check",
                    transitionEffect: "fade",
                    showStepURLhash: !1
                }), $("#smartWizardClickable").smartWizard({
                    selected: 0,
                    theme: "default",
                    transitionEffect: "fade",
                    showStepURLhash: !1,
                    anchorSettings: {
                        enableAllAnchors: !0
                    }
                }), $("#smartWizardCustomButtons").smartWizard({
                    selected: 0,
                    theme: "default",
                    transitionEffect: "fade",
                    showStepURLhash: !1,
                    toolbarSettings: {
                        toolbarPosition: "none"
                    }
                }), $("#smartWizardCustomButtons .prev-btn").on("click", (function() {
                    return $("#smartWizardCustomButtons").smartWizard("prev"), !0
                })), $("#smartWizardCustomButtons .next-btn").on("click", (function() {
                    return $("#smartWizardCustomButtons").smartWizard("next"), !0
                })), $("#smartWizardCustomButtons .reset-btn").on("click", (function(e) {
                    return $("#smartWizardCustomButtons").smartWizard("reset"), !0
                })), $("#smartWizardValidation").on("showStep", (function(e, t, a, n, o) {
                    "first" === o ? ($("#smartWizardValidation .prev-btn").addClass("disabled"), $("#smartWizardValidation .finish-btn").hide(), $("#smartWizardValidation .next-btn").show()) : "final" === o ? ($("#smartWizardValidation .next-btn").hide(), $("#smartWizardValidation .finish-btn").show(), $("#smartWizardValidation .prev-btn").removeClass("disabled")) : ($("#smartWizardValidation .finish-btn").hide(), $("#smartWizardValidation .next-btn").show(), $("#smartWizardValidation .prev-btn").removeClass("disabled"))
                })), $("#smartWizardValidation").smartWizard({
                    selected: 0,
                    theme: "check",
                    transitionEffect: "fade",
                    showStepURLhash: !1,
                    toolbarSettings: {
                        toolbarPosition: "none"
                    }
                }), $("#smartWizardValidation").on("leaveStep", (function(e, t, a, n) {
                    var o = $("#form-step-" + a);
                    if ("forward" === n && o) return Be(o)
                })), $("#smartWizardValidation .prev-btn").on("click", (function() {
                    return $("#smartWizardValidation").smartWizard("prev"), !0
                })), $("#smartWizardValidation .next-btn").on("click", (function() {
                    return $("#smartWizardValidation").smartWizard("next"), !0
                })), $("#smartWizardValidation .finish-btn").on("click", (function(e) {
                    return !Be($("#smartWizardValidation #form-step-1")) || (console.log("Form Done"), !1)
                }))
            }
            if ("undefined" != typeof Countdown) {
                var We = new Date((new Date).setMinutes((new Date).getMinutes() + 5e3));
                new Countdown({
                    selector: "#timer",
                    leadingZeros: !0,
                    msgBefore: "",
                    msgAfter: "",
                    msgPattern: ' <span class="timer-column"><p class="lead text-center">{days}</p><p>Days</p></span><span class="timer-column"><p class="lead text-center">{hours}</p><p>Hours</p></span><span class="timer-column"><p class="lead text-center">{minutes}</p><p>Minutes</p></span><span class="timer-column"><p class="lead text-center">{seconds}</p><p>Seconds</p></span>',
                    dateEnd: We
                })
            }
            if ("undefined" != typeof baguetteBox && (baguetteBox.run(".gallery"), baguetteBox.run(".lightbox")), $().ellipsis && $(".ellipsis").ellipsis({
                    live: !0
                }), "undefined" != typeof Glide) {
                if ($(".glide.details").length > 0) {
                    var Te = $(".glide.thumbs li").length,
                        Ae = Math.min(5, Te),
                        Ee = new Glide(".glide.details", {
                            bound: !0,
                            rewind: !1,
                            focusAt: 0,
                            perView: 1,
                            startAt: 0,
                            direction: o
                        }),
                        ze = new Glide(".glide.thumbs", {
                            bound: !0,
                            rewind: !1,
                            perView: Ae,
                            perTouch: 1,
                            focusAt: 0,
                            startAt: 0,
                            direction: o,
                            breakpoints: {
                                576: {
                                    perView: Math.min(4, Te)
                                },
                                420: {
                                    perView: Math.min(3, Te)
                                }
                            }
                        });

                    function De(e) {
                        $(".glide.thumbs li").removeClass("active"), $($(".glide.thumbs li")[e]).addClass("active"), e >= ze.index + Ae && ze.go(">"), e < ze.index && ze.go("<")
                    }
                    $(".glide.thumbs").css("width", 70 * Ae), De(0), $(".glide.thumbs li").on("click", (function(e) {
                        var t = $(e.currentTarget).index();
                        Ee.go("=" + t), De(t)
                    })), Ee.on(["swipe.end"], (function() {
                        De(Ee.index)
                    })), ze.on("resize", (function() {
                        Ae = Math.min(ze.settings.perView, Te), $(".glide.thumbs").css("width", 70 * Ae), Ae >= $(".glide.thumbs li").length ? $(".glide.thumbs .glide__arrows").css("display", "none") : $(".glide.thumbs .glide__arrows").css("display", "block")
                    })), ze.mount(), Ee.mount()
                }
                if ($(".glide.dashboard-numbers").length > 0 && new Glide(".glide.dashboard-numbers", {
                        bound: !0,
                        rewind: !1,
                        perView: 4,
                        perTouch: 1,
                        focusAt: 0,
                        startAt: 0,
                        direction: o,
                        gap: 7,
                        breakpoints: {
                            1800: {
                                perView: 3
                            },
                            576: {
                                perView: 2
                            },
                            320: {
                                perView: 1
                            }
                        }
                    }).mount(), $(".best-rated-items").length > 0 && new Glide(".best-rated-items", {
                        gap: 10,
                        perView: 1,
                        direction: o,
                        type: "carousel",
                        peek: {
                            before: 0,
                            after: 100
                        },
                        breakpoints: {
                            480: {
                                perView: 1
                            },
                            992: {
                                perView: 2
                            },
                            1200: {
                                perView: 1
                            }
                        }
                    }).mount(), $(".glide.basic").length > 0 && new Glide(".glide.basic", {
                        gap: 0,
                        rewind: !1,
                        bound: !0,
                        perView: 3,
                        direction: o,
                        breakpoints: {
                            600: {
                                perView: 1
                            },
                            1e3: {
                                perView: 2
                            }
                        }
                    }).mount(), $(".glide.center").length > 0 && new Glide(".glide.center", {
                        gap: 0,
                        type: "carousel",
                        perView: 4,
                        direction: o,
                        peek: {
                            before: 50,
                            after: 50
                        },
                        breakpoints: {
                            600: {
                                perView: 1
                            },
                            1e3: {
                                perView: 2
                            }
                        }
                    }).mount(), $(".glide.single").length > 0 && new Glide(".glide.single", {
                        gap: 0,
                        type: "carousel",
                        perView: 1,
                        direction: o
                    }).mount(), $(".glide.gallery").length > 0) {
                    var Ie = !0,
                        Pe = new Glide(".glide.gallery", {
                            gap: 10,
                            perTouch: 1,
                            perView: 1,
                            type: "carousel",
                            peek: {
                                before: 100,
                                after: 100
                            },
                            direction: o
                        });
                    Pe.on(["swipe.move"], (function() {
                        Ie = !1
                    })), Pe.on(["run.after"], (function() {
                        Ie = !0
                    })), Pe.mount(), $(".glide.gallery").get(0).addEventListener("click", (function(e) {
                        return !!Ie || (e.stopPropagation(), e.preventDefault(), !1)
                    }), !0)
                }
            }
            he = document.getElementsByClassName("needs-validation"), Array.prototype.filter.call(he, (function(e) {
                e.addEventListener("submit", (function(t) {
                    !1 === e.checkValidity() && (t.preventDefault(), t.stopPropagation()), $(e).find(".custom-control input").parents(".form-group").each((function() {
                        $(this).find(".custom-control input").parents(".form-group").removeClass("is-invalid"), $(this).find(".custom-control input:invalid").length == $(this).find(".custom-control input").length && $(this).find(".custom-control input:invalid").parents(".form-group").addClass("is-invalid")
                    })), e.classList.add("was-validated")
                }), !1), $(e).find("input").each((function() {
                    $(this).on("change", (function() {
                        $(this).parents(".form-group").removeClass("is-invalid")
                    }))
                }))
            })), $().validate && ($.validator.setDefaults({
                ignore: [],
                errorElement: "div",
                submitHandler: function() {
                    alert("submitted!")
                },
                errorPlacement: function(e, t) {
                    -1 != t.attr("class").indexOf("custom-control") ? e.insertAfter(t.parent()) : e.insertAfter(t)
                }
            }), $("#exampleForm").validate(), $("#exampleFormTopLabels").validate(), $("#exampleFormLabelsInInput").validate(), $("#tooltipPositions").validate(), $("#tooltipHelpers").validate(), $("#rulesForm").validate({
                rules: {
                    rulesName: {
                        required: !0,
                        lettersonly: !0
                    },
                    rulesEmail: {
                        required: !0,
                        email: !0
                    },
                    rulesId: {
                        required: !0,
                        minlength: 8,
                        maxlength: 8,
                        number: !0
                    },
                    rulesDetail: {
                        required: !0,
                        maxlength: 20
                    },
                    rulesPassword: {
                        required: !0,
                        minlength: 6
                    },
                    rulesPasswordConfirm: {
                        required: !0,
                        minlength: 6,
                        equalTo: "#rulesPassword"
                    },
                    rulesCreditCard: {
                        creditcard: !0,
                        nowhitespace: !0,
                        required: !0
                    },
                    rulesAge: {
                        number: !0,
                        min: 18,
                        required: !0
                    }
                },
                messages: {
                    rulesName: {
                        lettersonly: "Only letters are accepted!"
                    },
                    rulesEmail: {
                        email: "Your email address must be in correct format!"
                    },
                    rulesId: {
                        number: "Must be a number!",
                        minlength: "Id must be {0} characters!",
                        maxlength: "Id must be {0} characters!"
                    },
                    rulesPassword: {
                        minlength: "Password must be at least {0} characters!"
                    },
                    rulesPasswordConfirm: {
                        equalTo: "Passwords must match!",
                        minlength: "Password must be at least {0} characters!"
                    },
                    rulesDetail: {
                        maxlength: "Details must be maximum {0} characters!"
                    },
                    rulesCreditCard: {
                        creditcard: "Must be a valid credit card number!",
                        nowhitespace: "Must not contain whitespace!"
                    }
                }
            }), $("select, .tags-input, .datepicker").on("change", (function() {
                $(this).valid()
            })))
        }()
    }, $.fn.dore = function(e) {
        return this.each((function() {
            if (null == $(this).data("dore")) {
                var t = new $.dore(this, e);
                $(this).data("dore", t)
            }
        }))
    };