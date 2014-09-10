/*
 * Small Orange - sexyText.js
 *
 * Copyright 2014, Felipe Rohde
 * Released under the MIT license
 * http://smallorange.co
 *
 */

(function($) {

    $.fn.sexyText = function() {
        return this.each(function() {

            //get object
            var self = $(this);
            var resize_timer = 0;

            var options = {
                'compressor': self.data('compressor') || 1,
                'min_font': self.data('min-font') || Number.NEGATIVE_INFINITY,
                'max_font': self.data('max-font') || self.css('font-size'),
                'trigger': self.data('trigger') || Number.POSITIVE_INFINITY
            };

            var run = function() {
                if (window.innerWidth < options.trigger) {
                    self.css('font-size', Math.max(Math.min(self.width() / (options.compressor * 10), parseFloat(options.max_font)), parseFloat(options.min_font)));
                } else {
                    self.css('font-size', '');
                }
            };

            //Start the sexy machine
            run();

            //Run again 500ms after resize
            $(window).on('resize.sexytext orientationchange.sexytext', function() {
                clearTimeout(resize_timer);
                resize_timer = setTimeout(function() {
                    run();
                }, 200);
            });
        });

    };
})(jQuery);