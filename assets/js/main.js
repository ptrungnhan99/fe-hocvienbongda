$(document).ready(function () {
    var toggleMenu = $(
        ".header-main .main-navigation .box-wrapper .toggle-menu"
    );
    var topMenu = $("#top-menu");
    toggleMenu.click(function () {
        topMenu.toggleClass("active");
    });
});
