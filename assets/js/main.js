$(document).ready(function () {
    var toggleMenu = $(
        ".header-main .main-navigation .box-wrapper .toggle-menu"
    );
    var topMenu = $("#top-menu");
    toggleMenu.click(function () {
        $(this).find("i").toggleClass("fa-x fa-bars");
        topMenu.toggleClass("active");

    });
    $("#top-menu .btn-arrow").click(function () {
        $(this).next().toggle();
    });
    // -----Popup Gallery Image-----//
    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
    });
    // -----Popup Video-----//
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });
    // -----Slider Home-----//
    $('.slider-banner-home').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: [
            '<i class="fa-regular fa-chevron-left"></i>',
            '<i class="fa-regular fa-chevron-right"></i>',
        ],
        items: 1,
        dots: false,

    });
    // -----Fix Menu-----//
    $(window).scroll(function () {
        var scroll = $(this);
        $("#site-header").toggleClass(
            "sticky slideInDown animated",
            scroll[0].pageYOffset > 0
        );
    });
    /*-- Gallery --*/
    var galleryPopup = $('.gallery-popup');
    galleryPopup.magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    // -----Slider About-----//
    $('.slider-about').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
    $('.slider-coach, .slider-student').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: [
            '<i class="fa-regular fa-chevron-left"></i>',
            '<i class="fa-regular fa-chevron-right"></i>',
        ],
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
});
