$(document).ready(function () {
    $('.team_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        autoplay: true,
        arrows: false,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]

    });

    $('.sadi_t').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        autoplay: true,
        fade: true,
        arrows: false,
    });

    $('.sadi_o').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        fade: true,
        autoplay: true,
        arrows: false,
    });


    // scroll to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('#scroll_top').fadeIn();
        } else {
            $('#scroll_top').fadeOut();
        }
    });
    $("#scroll_top").click(function () {
        $('html ,body').animate({
            scrollTop: 0
        }, 800);
    });


    //Wow js
    new WOW().init();

    //Sticky top
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var sticky = $('.sticky_top');

        if (scrolling >= 10) {
            sticky.addClass('sticky_bg');
        } else {
            sticky.removeClass('sticky_bg');
        }
    });

    //Preloder Code
    $(window).on('load', function () {

        $('#preloader').delay(2000).fadeOut(500);

    });
    
    
    
    // scroll spy
    // Smooths scrolling
    $('body').scrollspy({target: ".navbar", offset: 50});
    
    
    
    // Smoth scroll
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 45
                }, 1500);
                return false;
            }
        }
    });







});