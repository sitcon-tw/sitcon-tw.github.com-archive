/*jslint browser: true*/
/*global jQuery,console,Modernizr*/

(function ($) {
    "use strict";

    $(function () {

        // Mobile Link Fix
        if (!Modernizr.touch) {
            $('#facebook a, #twitter a, #survey a').addClass('has-tip');
        }

        $(document).tooltips();
    });

}(jQuery));
