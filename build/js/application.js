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
        $(this).scrollTop() >= 300 ? $('#header').addClass('scroll-menu')
                                    : $('#header').removeClass('scroll-menu');
    });
// eof header

// sliders
    $('#slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
    });
// eof sliders

// WOW
// new WOW().init();
// eof WOW


});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHBsaWNhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI7J3VzZSBzdHJpY3QnO1xuXG4vLyBwcmVsb2FkZXJcbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgJHByZWxvYWRlciA9ICQoJyNwcmVsb2FkZXInKSxcbiAgICAgICAgJHN2Z19hbm0gPSAkcHJlbG9hZGVyLmZpbmQoJy5wcmVsb2FkZXJfX3N2ZycpO1xuICAgICRzdmdfYW5tLmZhZGVPdXQoKTtcbiAgICAkcHJlbG9hZGVyLmZhZGVPdXQoKTtcbn0pO1xuLy8gZW9mIHByZWxvYWRlclxuXG5cbiQoZnVuY3Rpb24gKCkge1xuXG4vLyBoZWFkZXJcbiAgICAkKCcjdG9nZ2xlTWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwib25cIik7XG4gICAgICAgICQoJy5tZW51JykuYWRkQ2xhc3MoJ21lbnUtb3BlbicpLnNsaWRlVG9nZ2xlKCk7XG4gICAgICAgIC8vICQoXCJib2R5XCIpLmNoaWxkcmVuKCkubm90KCdoZWFkZXInKS50b2dnbGVDbGFzcygnYmx1cicpOyAvLyBhZGQgYmx1ciBmaWx0ZXIgdG8gYWxsIGVsZW1lbnRzXG4gICAgfSk7XG4gICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5zY3JvbGxUb3AoKSA+PSAzMDAgPyAkKCcjaGVhZGVyJykuYWRkQ2xhc3MoJ3Njcm9sbC1tZW51JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCgnI2hlYWRlcicpLnJlbW92ZUNsYXNzKCdzY3JvbGwtbWVudScpO1xuICAgIH0pO1xuLy8gZW9mIGhlYWRlclxuXG4vLyBzbGlkZXJzXG4gICAgJCgnI3NsaWRlcicpLnNsaWNrKHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICB9KTtcbi8vIGVvZiBzbGlkZXJzXG5cbi8vIFdPV1xuLy8gbmV3IFdPVygpLmluaXQoKTtcbi8vIGVvZiBXT1dcblxuXG59KTtcbiJdLCJmaWxlIjoiYXBwbGljYXRpb24uanMifQ==
