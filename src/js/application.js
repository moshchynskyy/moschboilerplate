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
            from = $( ".dateFrom" )
                .datepicker({
                    defaultDate: "+1w",
                    changeMonth: true,
                    numberOfMonths: 1
                })
                .on( "change", function() {
                    to.datepicker( "option", "minDate", getDate( this ) );
                }),
            to = $( ".dateTo" ).datepicker({
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
        $( '.reg-form input.reg-checkbox').checkboxradio();
        $( '.order input.reg-checkbox').checkboxradio();

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

    // messagex textarea autoheight
    $('.js-autoheight').on('keyup',function(){
        let height = this.scrollHeight;
        let elHeight = $('.js-autoheight').height();
        console.log(elHeight);
        if (height > elHeight) {
            $(this).css('height','auto');
            $(this).height(this.scrollHeight);
        }
    });

    // qtip
    const top200 = {
        position: {
            my: 'bottom center', // Position my top left...
            at: 'top center', // at the bottom right of...
        },
        style: {
            classes: 'qtip-bootstrap qtip-rounded',
            width: 200, // No set width
        }
    },
    top500 = {
        position: {
            my: 'bottom center', // Position my top left...
            at: 'top center', // at the bottom right of...
        },
        style: {
            classes: 'qtip-bootstrap qtip-rounded',
            width: 500, // No set width
        }
    },
    left_opt = {
        position: {
            my: 'center right', // Position my top left...
            at: 'center left', // at the bottom right of..
        },
        style: {
            classes: 'qtip-rounded qtip-bootstrap ',
            width: 250, // No set width
        },
        show: false
    },
    right_opt = {
        position: {
            my: 'center left', // Position my top left...
            at: 'center right', // at the bottom right of..
        },
        style: {
            classes: 'qtip-rounded qtip-bootstrap ',
            width: 250, // No set width
        },
    };

    if (window.screen.width > 992) {
        $('#logo-qtip').qtip($.extend({}, top200, {
            content: 'Для рассмотрения анкеты необходимо загрузить ваше настоящее фото, где видно ваше лицо'
        }));

        let adBodyQtipContentLi1 = 'Расскажите о вашем опыте ухода за собаками.';
        let adBodyQtipContentLi2 = 'Брали ли вы собак на передержку ранее?';
        let adBodyQtipContentLi3 = 'Почему вы любите собак?';
        let adBodyQtipContentLi4 = 'Есть ли у вас рядом парки и другие отличные места для прогулок?';
        let adBodyQtipContentLi5 = 'Сможете ли вы посылать фото и видео собаки, пока хозяин в отъезде?';
        let adBodyQtipContentLi6 = 'Будет ли кто-то постоянно находиться дома с собакой?';

        $('#ad-body-qtip').qtip($.extend({}, top500, {
            content: 'Не знаете, что стоит написать? Вот вспомогательные вопросы: <ul><li>'+adBodyQtipContentLi1+'</li><li>'+adBodyQtipContentLi2+'</li><li>'+adBodyQtipContentLi3+'</li><li>'+adBodyQtipContentLi4+'</li><li>'+adBodyQtipContentLi5+'</li><li>'+adBodyQtipContentLi6+'</li></ul>'
        }));
    }

    // content-page
    const animateScroll = () => {
        $(document).ready(function(){
            $('.content-page').on('click', 'a', function () {
                // e.preventDefault();
                let id  = $(this).attr('href'),
                    top = $(id).offset().top;
                $('body,html').animate({scrollTop: top}, 1500);
            });
        });
    };
    animateScroll();
    // eof content-page

    // order page
    $('#addDog').on('click', function (e) {
        e.preventDefault();
        console.log('add child');
    })
    // eof order page
});
