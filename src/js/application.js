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
    $('#toggleMenu').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass("on");
        $('.menu').addClass('menu-open').slideToggle();
        // $("body").children().not('header').toggleClass('blur'); // add blur filter to all elements
    });
    $(window).on('scroll', function () {
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
    $('.slick-prev').html('<i class="fas fa-angle-left"></i>');
    $('.slick-next').html('<i class="fas fa-angle-right"></i>');

    $('#testimonialsSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    });
// eof sliders

// main page
    const setHeightForCustomColumn = () => {
        const height = $('.column-full-6.column-full-text').height();
        $('.column-full-6.column-full-img').height( height );
    };

    $(window).on('resize', () => {
        $(window).width() < 768 ? setHeightForCustomColumn() : $('.column-full-6.column-full-img').height( 'auto' );
    });

    $(window).width() < 768 ? setHeightForCustomColumn() : $('.column-full-6.column-full-img').height( 'auto' );

// eof main page

// card page
    const toggleDogsInfo = () => {
        $('.card__dogs .more').on('click', function () {
            $(this).parents('.card__dogs-wrap').toggleClass('open');
            $(this).text() === 'Подробнее' ?
                $(this).text('Скрыть') :
                $(this).text('Подробнее');
        });
    };
    toggleDogsInfo();

    const initSitterSliders = () => {
        $('#sitterMainSlider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: '#sitterNavSlider'
        });
        $('#sitterNavSlider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '#sitterMainSlider',
            dots: false,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 3,
                    }
                }
            ]
        });
        $('.slick-next').html('<i class="fas fa-angle-right"></i>');
    };
    initSitterSliders();
// card page

});
