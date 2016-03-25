+function ($) {
    "use strict";
    $.fn.pageResponseTimeCalculator = function () {
        var time = performance.timing.loadEventEnd - performance.timing.responseStart;
        $(this).text(time);
    }

}(window.jQuery);
