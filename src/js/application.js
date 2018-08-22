;'use strict';

// slider
$('#slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
});

// wow js activate
// new WOW().init();

// preloader
$(window).on('load', function () {
    let $preloader = $('#p_prldr'),
        $svg_anm = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(200).fadeOut('slow');
});
// eof preloader

// header
$('#toggle-menu').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass("on");
    $('.menu').addClass('menu-open').slideToggle();
    // $("body").children().not('header').toggleClass('blur'); // add blur filter to all elements
});
// eof header