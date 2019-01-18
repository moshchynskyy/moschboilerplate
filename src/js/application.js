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

// search page
    const showAdditionalSearchColumn = () => {
        $('#additionalSearch span').on('click', function(e) {
            e.preventDefault();
            $(this).prev().hasClass('fa-angle-up') ?
                $(this).prev().removeClass('fa-angle-up').addClass('fa-angle-down') :
                $(this).prev().removeClass('fa-angle-down').addClass('fa-angle-up');
            $('.search__column-toggle').slideToggle();
            $(this).text() === 'Расширенный поиск' ?
                $(this).text('Скрыть') :
                $(this).text('Расширенный поиск');
        })
    };
    showAdditionalSearchColumn();


    // jquery-UI for search block
    $( function() {

        $('.search__form select').niceSelect();

        $( ".search__form input.search__input").checkboxradio();

        $( "#priceRange" ).slider({
            range: true,
            min: 0,
            max: 500,
            values: [ 75, 300 ],
            slide: function( event, ui ) {
                $( "#priceInput" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $( "#priceInput" ).val( "$" + $( "#priceRange" ).slider( "values", 0 ) +
            " - $" + $( "#priceRange" ).slider( "values", 1 ) );


        let dateFormat = "mm/dd/yy",
            from = $( "#dateFrom" )
                .datepicker({
                    defaultDate: "+1w",
                    changeMonth: true,
                    numberOfMonths: 1
                })
                .on( "change", function() {
                    to.datepicker( "option", "minDate", getDate( this ) );
                }),
            to = $( "#dateTo" ).datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 1
            })
                .on( "change", function() {
                    from.datepicker( "option", "maxDate", getDate( this ) );
                });

        const getDate = ( element ) => {
            let date;
            try {
                date = $.datepicker.parseDate( dateFormat, element.value );
            } catch( error ) {
                date = null;
            }

            return date;
        }
    } );
    // EOF jquery-UI for search block

// eof search page

// register page
    $( function() {
        $('.reg-form select').niceSelect();
        $( ".reg-form input.reg-checkbox").checkboxradio();

        $('#setAddress').on('click', function (e) {
            e.preventDefault();
        })
    });

    const showUploadedImg = () => {
        $('input[type="file"]').on('change', function () {
            console.log( $(this).val() ); // TODO: change default img after uploading
        })
    };
    showUploadedImg();
// eof register page

    // masks for input 
    $('#series').mask('AA-000000');
    $('#issue_date').mask('00/00/0000');
    $('#birthday').mask('00/00/0000');

});
