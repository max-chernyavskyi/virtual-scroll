'use strict';

module.exports = (function getSupport() {
    return {
        hasWheelEvent: 'onwheel' in document,
        hasMouseWheelEvent: 'onmousewheel' in document,
        hasTouch: 'ontouchstart' in document,
        hasTouchWin: (navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1)/* || navigator.maxTouchPoints > 1*/,
        hasPointer: (!!window.navigator.msPointerEnabled)/* || 'onpointerdown' in window*/,
        hasKeyDown: 'onkeydown' in document,
        isFirefox: navigator.userAgent.indexOf('Firefox') > -1
    };
})();
