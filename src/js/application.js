;'use strict';

/*
 * UI
 * ELEMENTS
 * HERE
 */


// productSlider
$('#productSlider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
});
// eof productSlider

// wow js activate
new WOW().init();
// eof wow js activate

// preloader
$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(200).fadeOut('slow');
});
// eof preloader

// swipebox
(function($) {
    // $('.swipebox').swipebox();
})(jQuery);
// eof swipebox

// noUiSlider

// var skipSlider = document.getElementById('skipstep');
// noUiSlider.create(skipSlider, {
//     range: {
//         'min': 0,
//         'max': 100
//     },
//     step: 1,
//     // snap: true,
//     start: [20, 90]
// });
// var skipValues = [
//     document.getElementById('skip-value-lower'),
//     document.getElementById('skip-value-upper')
// ];
// skipSlider.noUiSlider.on('update', function( values, handle ) {
//     skipValues[handle].innerHTML = values[handle];
// });

// eof noUiSlider


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


// cart
$(function () {
    // counter for cart
    let arrItemQuantity = $('.cart__flex .cart-item'); // add quantity of cart items
    let arrItemQuantityLength = arrItemQuantity.length + 1;
    for(let i = 1; i < arrItemQuantityLength; i++) {
        let itemQuantity = Number($('#itemQuantity' + i)[0].value);
        $('.cart__flex-row-' + i + ' .cart-plus').on('click', function () {
            itemQuantity += 1;
            $(this).prev()[0].value = itemQuantity;
        });
        $('.cart__flex-row-' + i + ' .cart-minus').on('click', function () {
            if(itemQuantity > 1) {
                itemQuantity -= 1;
                $(this).next()[0].value = itemQuantity;
            }
        });
    }
});
// eof cart