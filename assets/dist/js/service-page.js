$(document).ready(function () {
    $('.list-item').matchHeight({
        byRow: false
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slider-nav',
        appendArrows: $('.holder-btn'),
        prevArrow: '<button type="button" id="prev-3" class="btn-arrow prev"><i class=" icon-up-open-1" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" id="next-3"class="btn-arrow next"><i class="  icon-down-open-1" aria-hidden="true"></i></button>',

    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        arrows: false,
        responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },

        ]
    });
})