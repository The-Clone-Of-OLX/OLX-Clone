function loadStyle(e, t) {
    for (var o = 0; o < document.styleSheets.length; o++)
        if (document.styleSheets[o].href == e) return;
    var a = document.getElementsByTagName("head")[0],
        r = document.createElement("link");
    r.rel = "stylesheet", r.type = "text/css", r.href = ''+e, t && (r.onload = function() {
        t()
    });
    var l = $(a).find('[href$="main.css"]');
    l.length !== 0? l[0].before(r) : a.appendChild(r)
}! function(e) {
    e().dropzone && (Dropzone.autoDiscover = !1);
    try {
        localStorage.setItem("dore-is-private-tab", !1);
        e("body").append('\n  <div class="theme-colors">\n    <div class="p-4">\n    <p class="text-muted mb-2">Light Theme</p>\n    <div class="d-flex flex-row justify-content-between mb-3">\n      <a href="#" data-theme="dore.light.bluenavy.min.css" class="theme-color theme-color-bluenavy"></a>\n      <a href="#" data-theme="dore.light.blueyale.min.css" class="theme-color theme-color-blueyale"></a>\n      <a href="#" data-theme="dore.light.blueolympic.min.css" class="theme-color theme-color-blueolympic"></a>\n      <a href="#" data-theme="dore.light.greenmoss.min.css" class="theme-color theme-color-greenmoss"></a>\n      <a href="#" data-theme="dore.light.greenlime.min.css" class="theme-color theme-color-greenlime"></a>\n    </div>\n    <div class="d-flex flex-row justify-content-between mb-4">\n      <a href="#" data-theme="dore.light.purplemonster.min.css" class="theme-color theme-color-purplemonster"></a>\n      <a href="#" data-theme="dore.light.orangecarrot.min.css" class="theme-color theme-color-orangecarrot"></a>\n      <a href="#" data-theme="dore.light.redruby.min.css" class="theme-color theme-color-redruby"></a>\n      <a href="#" data-theme="dore.light.yellowgranola.min.css" class="theme-color theme-color-yellowgranola"></a>\n      <a href="#" data-theme="dore.light.greysteel.min.css" class="theme-color theme-color-greysteel"></a>\n    </div>\n    <p class="text-muted mb-2">Dark Theme</p>\n    <div class="d-flex flex-row justify-content-between mb-3">\n      <a href="#" data-theme="dore.dark.bluenavy.min.css" class="theme-color theme-color-bluenavy"></a>\n      <a href="#" data-theme="dore.dark.blueyale.min.css" class="theme-color theme-color-blueyale"></a>\n      <a href="#" data-theme="dore.dark.blueolympic.min.css" class="theme-color theme-color-blueolympic"></a>\n      <a href="#" data-theme="dore.dark.greenmoss.min.css" class="theme-color theme-color-greenmoss"></a>\n      <a href="#" data-theme="dore.dark.greenlime.min.css" class="theme-color theme-color-greenlime"></a>\n    </div>\n    <div class="d-flex flex-row justify-content-between">\n    <a href="#" data-theme="dore.dark.purplemonster.min.css" class="theme-color theme-color-purplemonster"></a>\n    <a href="#" data-theme="dore.dark.orangecarrot.min.css" class="theme-color theme-color-orangecarrot"></a>\n    <a href="#" data-theme="dore.dark.redruby.min.css" class="theme-color theme-color-redruby"></a>\n    <a href="#" data-theme="dore.dark.yellowgranola.min.css" class="theme-color theme-color-yellowgranola"></a>\n    <a href="#" data-theme="dore.dark.greysteel.min.css" class="theme-color theme-color-greysteel"></a>\n  </div>\n  </div>\n  <div class="p-4">\n    <p class="text-muted mb-2">Border Radius</p>\n    <div class="custom-control custom-radio custom-control-inline">\n      <input type="radio" id="roundedRadio" name="radiusRadio" class="custom-control-input radius-radio" data-radius="rounded">\n      <label class="custom-control-label" for="roundedRadio">Rounded</label>\n    </div>\n    <div class="custom-control custom-radio custom-control-inline">\n      <input type="radio" id="flatRadio" name="radiusRadio" class="custom-control-input radius-radio" data-radius="flat">\n      <label class="custom-control-label" for="flatRadio">Flat</label>\n    </div>\n  </div>\n  <div class="p-4">\n    <p class="text-muted mb-2">Direction</p>\n    <div class="custom-control custom-radio custom-control-inline">\n    <input type="radio" id="ltrRadio" name="directionRadio" class="custom-control-input direction-radio" data-direction="ltr">\n    <label class="custom-control-label" for="ltrRadio">Ltr</label>\n  </div>\n  <div class="custom-control custom-radio custom-control-inline">\n    <input type="radio" id="rtlRadio" name="directionRadio" class="custom-control-input direction-radio" data-direction="rtl">\n    <label class="custom-control-label" for="rtlRadio">Rtl</label>\n  </div>\n</div>\n<a href="#" class="theme-button"> <i class="simple-icon-magic-wand"></i> </a>\n</div>\n')
    } catch (e) {}
    var t = "dore.light.bluenavy.min.css",
        o = "ltr",
        a = "rounded";
    try {
        localStorage.getItem("dore-theme-color") ? t = localStorage.getItem("dore-theme-color") : localStorage.setItem("dore-theme-color", t), localStorage.getItem("dore-direction") ? o = localStorage.getItem("dore-direction") : localStorage.setItem("dore-direction", o), localStorage.getItem("dore-radius") ? a = localStorage.getItem("dore-radius") : localStorage.setItem("dore-radius", a)
    } catch (e) {
        t = "dore.light.bluenavy.min.css", o = "ltr", a = "rounded"
    }

    function r() {
        e("body").addClass(o), e("html").attr("dir", o), e("body").addClass(a), e("body").dore()
    }
    e(".theme-color[data-theme='" + t + "']").addClass("active"), e(".direction-radio[data-direction='" + o + "']").attr("checked", !0), e(".radius-radio[data-radius='" + a + "']").attr("checked", !0), e("#switchDark").attr("checked", t.indexOf("dark") > 0), loadStyle("css/" + t, (function() {
        setTimeout(r, 300)
    })), e("body").on("click", ".theme-color", (function(t) {
        t.preventDefault();
        var o = e(this).data("theme");
        try {
            localStorage.setItem("dore-theme-color", o), window.location.reload()
        } catch (e) {}
    })), e("input[name='directionRadio']").on("change", (function(t) {
        var o = e(t.currentTarget).data("direction");
        try {
            localStorage.setItem("dore-direction", o), window.location.reload()
        } catch (e) {}
    })), e("input[name='radiusRadio']").on("change", (function(t) {
        var o = e(t.currentTarget).data("radius");
        try {
            localStorage.setItem("dore-radius", o), window.location.reload()
        } catch (e) {}
    })), e("#switchDark").on("change", (function(o) {
        var a = e(o.currentTarget)[0].checked ? "dark" : "light";
        "dark" == a ? t = t.replace("light", "dark") : "light" == a && (t = t.replace("dark", "light"));
        try {
            localStorage.setItem("dore-theme-color", t), window.location.reload()
        } catch (e) {}
    })), e(".theme-button").on("click", (function(t) {
        t.preventDefault(), e(this).parents(".theme-colors").toggleClass("shown")
    })), e(document).on("click", (function(t) {
        e(t.target).parents().hasClass("theme-colors") || e(t.target).parents().hasClass("theme-button") || e(t.target).hasClass("theme-button") || e(t.target).hasClass("theme-colors") || e(".theme-colors").hasClass("shown") && e(".theme-colors").removeClass("shown")
    }))
}(jQuery);