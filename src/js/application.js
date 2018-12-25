;'use strict';

// preloader
$(window).on('load', function () {
    let $preloader = $('#preloader'),
        $svg_anm = $preloader.find('.preloader__svg');
    $svg_anm.fadeOut();
    $preloader.fadeOut();
});
// eof preloader


$(function () {

// header
    $('#toggleMenu').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass("on");
        $('.menu').addClass('menu-open').slideToggle();
        // $("body").children().not('header').toggleClass('blur'); // add blur filter to all elements
    });
    $(window).on('scroll', function() {
        $(this).scrollTop() >= 200 ? $('#header').addClass('scroll-menu')
                                    : $('#header').removeClass('scroll-menu');
    });
// eof header

// sliders
    $('#mainSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    });
    $('.slick-prev').html( '<i class="fas fa-angle-left"></i>' );
    $('.slick-next').html( '<i class="fas fa-angle-right"></i>' );
// eof sliders

// WOW
// new WOW().init();
// eof WOW


});
