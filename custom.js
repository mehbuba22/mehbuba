jQuery(function ($) {
    'use strict';

$('.slider').owlCarousel({
    items: 6,
		loop: true,
		margin: 20,
		nav: true,
		dots: false,
		smartSpeed: 1000,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: false,
});

}(jQuery))