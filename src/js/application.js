;'use strict';

/*
 * UI
 * ELEMENTS
 * HERE
 */


// slider
$('#productSlider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
});
// eof slider

// wow js activate
// new WOW().init();
// eof wow js activate

// preloader
$(window).on('load', function () {
    let $preloader = $('#p_prldr'),
        $svg_anm = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(200).fadeOut('slow');
});
// eof preloader


/*
 * EOF
 * UI
 * ELEMENTS
 */


// header
$('#toggle-menu').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass("on");
    $('.menu').addClass('menu-open').slideToggle();
    // $("body").children().not('header').toggleClass('blur'); // add blur filter to all elements
});
// eof header



const PI = 3;
console.log(PI);