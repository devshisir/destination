$(document).ready(function() {
    var school = $(window);
    var page = $('html, body');





    // turust slider active
    $('.tourGuidesSlider').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: ["<i class='far fa-angle-left'></i>", "<i class='far active fa-angle-right'></i>"],
        smartSpeed: 900,
        autoPlay: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


    if ($(window).width() < 576) {
        $('.mobileSliderABout').addClass('owl-carousel');
    } else {
        $('.mobileSliderABout').removeClass('owl-carousel');
    }

    if ($(window).width() < 576) {
        $('.mobileSliderABout').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            navText: ["<i class='far fa-angle-left'></i>", "<i class='far active fa-angle-right'></i>"],
            smartSpeed: 900,
            autoPlay: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })
    }
    $('.tourGuidesSliderMobileSlider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ["<i class='far fa-angle-left'></i>", "<i class='far active fa-angle-right'></i>"],
        smartSpeed: 900,
        autoPlay: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    





    
});