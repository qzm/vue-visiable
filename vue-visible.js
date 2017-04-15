(function (Vue) {
    'use strict';
    var vueVisible = {};
    vueVisible.install = function (Vue) {
        var setVisible = function (el, visible) {
            if (visible.value) {
                el.style.visibility = 'visible';
            } else {
                el.style.visibility = 'hidden';
            }
        };
        Vue.directive('visible', {
            bind: setVisible,
            update: setVisible,
            unbind: function (el, visible) {
                el.style.visibility = 'visible';
            }
        })
    }

    if (typeof exports == "object") {
        module.exports = vueVisible
    } else if (typeof define == "function" && define.amd) {
        define([], function () { return vueVisible })
    } else if (window.Vue) {
        window.VueVisible = vueVisible
        Vue.use(vueVisible)
    }
})(Vue);