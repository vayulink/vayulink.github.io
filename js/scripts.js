/* External Links */

function externalLinks() {
    if (!document.getElementsByTagName) return;
    var anchors = document.getElementsByTagName("a");
    for (var i = 0; i < anchors.length; i++) {
        var anchor = anchors[i];
        if (anchor.getAttribute("href") && anchor.getAttribute("rel") == "external") anchor.target =
            "_blank";
    }
}
window.onload = externalLinks;

/** Add class to BODY if screen size is less than 768px - Uses CSS changing value of z-index on BODY to trigger **/

$(document)
    .ready(function() {
        "use strict";
        var $window = $(window),
            $html = $('body');
        $window.resize(function resize() {
                if ($("body")
                    .css("z-index") == "0") {
                    return $html.addClass('mobile');
                }
                $html.removeClass('mobile');
            })
            .trigger('resize');
        $("#content")
            .load("home.html");
    });

/** jQuery Easing **/

jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, a, c, b, d) {
        return jQuery.easing[jQuery.easing.def](e, a, c, b, d)
    },
    easeInQuad: function(e, a, c, b, d) {
        return b * (a /= d) * a + c
    },
    easeOutQuad: function(e, a, c, b, d) {
        return -b * (a /= d) * (a - 2) + c
    },
    easeInOutQuad: function(e, a, c, b, d) {
        if ((a /= d / 2) < 1) return b / 2 * a * a + c;
        return -b / 2 * (--a * (a - 2) - 1) + c
    },
    easeInCubic: function(e, a, c, b, d) {
        return b * (a /= d) * a * a + c
    },
    easeOutCubic: function(e, a, c, b, d) {
        return b * ((a = a / d - 1) * a * a + 1) + c
    },
    easeInOutCubic: function(e, a, c, b, d) {
        if ((a /= d / 2) < 1) return b /
            2 * a * a * a + c;
        return b / 2 * ((a -= 2) * a * a + 2) + c
    },
    easeInQuart: function(e, a, c, b, d) {
        return b * (a /= d) * a * a * a + c
    },
    easeOutQuart: function(e, a, c, b, d) {
        return -b * ((a = a / d - 1) * a * a * a - 1) + c
    },
    easeInOutQuart: function(e, a, c, b, d) {
        if ((a /= d / 2) < 1) return b / 2 * a * a * a * a + c;
        return -b / 2 * ((a -= 2) * a * a * a - 2) + c
    },
    easeInQuint: function(e, a, c, b, d) {
        return b * (a /= d) * a * a * a * a + c
    },
    easeOutQuint: function(e, a, c, b, d) {
        return b * ((a = a / d - 1) * a * a * a * a + 1) + c
    },
    easeInOutQuint: function(e, a, c, b, d) {
        if ((a /= d / 2) < 1) return b / 2 * a * a * a * a * a + c;
        return b / 2 * ((a -= 2) * a * a * a * a + 2) + c
    },
    easeInSine: function(e,
        a, c, b, d) {
        return -b * Math.cos(a / d * (Math.PI / 2)) + b + c
    },
    easeOutSine: function(e, a, c, b, d) {
        return b * Math.sin(a / d * (Math.PI / 2)) + c
    },
    easeInOutSine: function(e, a, c, b, d) {
        return -b / 2 * (Math.cos(Math.PI * a / d) - 1) + c
    },
    easeInExpo: function(e, a, c, b, d) {
        return a == 0 ? c : b * Math.pow(2, 10 * (a / d - 1)) + c
    },
    easeOutExpo: function(e, a, c, b, d) {
        return a == d ? c + b : b * (-Math.pow(2, -10 * a / d) + 1) + c
    },
    easeInOutExpo: function(e, a, c, b, d) {
        if (a == 0) return c;
        if (a == d) return c + b;
        if ((a /= d / 2) < 1) return b / 2 * Math.pow(2, 10 * (a - 1)) + c;
        return b / 2 * (-Math.pow(2, -10 * --a) + 2) + c
    },
    easeInCirc: function(e, a, c, b, d) {
        return -b * (Math.sqrt(1 - (a /= d) * a) - 1) + c
    },
    easeOutCirc: function(e, a, c, b, d) {
        return b * Math.sqrt(1 - (a = a / d - 1) * a) + c
    },
    easeInOutCirc: function(e, a, c, b, d) {
        if ((a /= d / 2) < 1) return -b / 2 * (Math.sqrt(1 - a * a) - 1) + c;
        return b / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + c
    },
    easeInElastic: function(e, a, c, b, d) {
        e = 1.70158;
        var f = 0,
            g = b;
        if (a == 0) return c;
        if ((a /= d) == 1) return c + b;
        f || (f = d * 0.3);
        if (g < Math.abs(b)) {
            g = b;
            e = f / 4
        } else e = f / (2 * Math.PI) * Math.asin(b / g);
        return -(g * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI /
            f)) + c
    },
    easeOutElastic: function(e,
        a, c, b, d) {
        e = 1.70158;
        var f = 0,
            g = b;
        if (a == 0) return c;
        if ((a /= d) == 1) return c + b;
        f || (f = d * 0.3);
        if (g < Math.abs(b)) {
            g = b;
            e = f / 4
        } else e = f / (2 * Math.PI) * Math.asin(b / g);
        return g * Math.pow(2, -10 * a) * Math.sin((a * d - e) * 2 * Math.PI / f) + b +
            c
    },
    easeInOutElastic: function(e, a, c, b, d) {
        e = 1.70158;
        var f = 0,
            g = b;
        if (a == 0) return c;
        if ((a /= d / 2) == 2) return c + b;
        f || (f = d * 0.3 * 1.5);
        if (g < Math.abs(b)) {
            g = b;
            e = f / 4
        } else e = f / (2 * Math.PI) * Math.asin(b / g); if (a < 1) return -0.5 * g *
            Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f) +
            c;
        return g * Math.pow(2, -10 * (a -= 1)) * Math.sin((a *
            d - e) * 2 * Math.PI / f) * 0.5 + b + c
    },
    easeInBack: function(e, a, c, b, d, f) {
        if (f == undefined) f = 1.70158;
        return b * (a /= d) * a * ((f + 1) * a - f) + c
    },
    easeOutBack: function(e, a, c, b, d, f) {
        if (f == undefined) f = 1.70158;
        return b * ((a = a / d - 1) * a * ((f + 1) * a + f) + 1) + c
    },
    easeInOutBack: function(e, a, c, b, d, f) {
        if (f == undefined) f = 1.70158;
        if ((a /= d / 2) < 1) return b / 2 * a * a * (((f *= 1.525) + 1) * a - f) + c;
        return b / 2 * ((a -= 2) * a * (((f *= 1.525) + 1) * a + f) + 2) + c
    },
    easeInBounce: function(e, a, c, b, d) {
        return b - jQuery.easing.easeOutBounce(e, d - a, 0, b, d) + c
    },
    easeOutBounce: function(e, a, c, b, d) {
        return (a /=
            d) < 1 / 2.75 ? b * 7.5625 * a * a + c : a < 2 / 2.75 ? b * (7.5625 * (
            a -= 1.5 / 2.75) * a + 0.75) + c : a < 2.5 / 2.75 ? b * (7.5625 * (a -=
            2.25 / 2.75) * a + 0.9375) + c : b * (7.5625 * (a -= 2.625 / 2.75) * a +
            0.984375) + c
    },
    easeInOutBounce: function(e, a, c, b, d) {
        if (a < d / 2) return jQuery.easing.easeInBounce(e, a * 2, 0, b, d) * 0.5 + c;
        return jQuery.easing.easeOutBounce(e, a * 2 - d, 0, b, d) * 0.5 + b * 0.5 + c
    }
});

/** Responsive Menu **/

$(document)
    .ready(function() {
        $(".menutitle")
            .click(function() {
                $(".menu")
                    .slideToggle(350, 'easeInOutExpo', function() {
                        $(this)
                            .attr('style', '')
                            .toggleClass('open');
                        $('.menutitle p strong')
                            .text($(this)
                                .is(':visible') ? 'Close' : 'Menu');
                    });
                $(this)
                    .toggleClass("active");
            });
    });

/** Sticky Element - Waypoints **/

$(document)
    .ready(function() {
        "use strict";
        $('.stickydiv')
            .waypoint('sticky', {
                wrapper: '<div class="sticky-wrapper" />',
                stuckClass: 'stuck',
                offset: 0
            });
    });

/** WOW - Scroll Fade **/

$(document)
    .ready(function() {
        var wow = new WOW({
            boxClass: 'wow',
            offset: 0
        });
        wow.init();
    });

$(document)
    .ready(function() {
        $('.menu li a')
            .click(function(e) {
                var page = $(this)
                    .attr('href');
                var myhash = $(this)
                    .attr('href')
                    .substr(0, $(this)
                        .attr('href')
                        .length - 5);
                $('.menu li')
                    .removeClass('active');
                var $parent = $(this)
                    .parent();
                if (!$parent.hasClass('active')) {
                    $parent.addClass('active');
                }
                $(".menutitle")
                    .click();
                e.preventDefault();


                $("#content")
                    .load(page);
                if (history.pushState) {
                    history.pushState(null, null, $myhash);
                } else {
                    location.hash = $myhash;
                }
            });

    });

$(document)
    .ready(function() {
        setTimeout(function() {
            document.getElementById("myVideo")
                .play();
        }, 3000);
    });

$(document)
    .ready(function() {
        var owl = $('#owlc');
        owl.owlCarousel({
            margin: 0,
            responsiveClass: true,
            loop: true,
            nav: false,
            navText: ["<span class='fa fa-angle-left'></span>",
                "<span class='fa fa-angle-right'></span>"],
            stagePadding: 0,
            autoWidth: false,
            autoHeight: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            lazyLoad: true,
            items: 3,
            responsive: {
                0: {
                    items: 1,
                    slideBy: 2,
                    StartPosition: 3
                },
                560: {
                    items: 1,
                    slideBy: 2,
                    StartPosition: 3
                },
                768: {
                    items: 2,
                    slideBy: 2
                },
                1000: {
                    items: 3,
                    slideBy: 3
                },
                1200: {
                    items: 3,
                    slideBy: 3
                }
            }
        })
    });