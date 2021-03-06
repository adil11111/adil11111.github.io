/*
    Spatial by TEMPLATED
    templated.co @templatedco
    Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
    */

(function($) {

    skel.breakpoints({
        xlarge:	'(max-width: 1680px)',
        large:	'(max-width: 1280px)',
        medium:	'(max-width: 980px)',
        small:	'(max-width: 736px)',
        xsmall:	'(max-width: 480px)'
    });

    $(function() {

        var	$window = $(window),
            $body = $('body');

        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function() {
            window.setTimeout(function() {
                $body.removeClass('is-loading');
            }, 100);
        });

        // Fix: Placeholder polyfill.
        $('form').placeholder();

        // Prioritize "important" elements on medium.
        skel.on('+medium -medium', function() {
            $.prioritize(
                '.important\\28 medium\\29',
                skel.breakpoint('medium').active
            );
        });

        // Off-Canvas Navigation.

        // Navigation Panel Toggle.
        $('<a href="#navPanel" class="navPanelToggle"></a>')
            .appendTo($body);

        // Navigation Panel.
        $(
            '<div id="navPanel">' +
            $('#nav').html() +
            '<a href="#navPanel" class="close"></a>' +
            '</div>'
        )
            .appendTo($body)
            .panel({
                delay: 500,
                hideOnClick: true,
                hideOnSwipe: true,
                resetScroll: true,
                resetForms: true,
                side: 'right'
            });

        // Fix: Remove transitions on WP<10 (poor/buggy performance).
        if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
            $('#navPanel')
                .css('transition', 'none');


    });

})(jQuery);

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

var videoUrls = ["https://www.youtube.com/embed/ED6Nv8-5wJM", "https://www.youtube.com/embed/iEWriN6kh3c", "https://www.youtube.com/embed/jicYbi-8ZNU"];
var vidIndex = 0;
var vidElement = document.getElementById("embedded-vid");
function backVid() {
    console.log("back vid");
    vidIndex--;
    if (vidIndex < 0) {
        vidIndex = 2;
    }
    vidElement.setAttribute("src", videoUrls[vidIndex]);
}
function nextVid() {
    console.log("next vid");
    vidIndex++
    if (vidIndex > 2) {
        vidIndex = 0;
    }
    vidElement.setAttribute("src", videoUrls[vidIndex]);
}
