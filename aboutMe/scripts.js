$(document).ready(function () {

    $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

    var menu = $('.nav');
    var origOffsetY = menu.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.menu').addClass('sticky');
            $('.tab-content').addClass('menu-margin');
        } else {
            $('.menu').removeClass('sticky');
            $('.tab-content').removeClass('menu-margin');
        }
    }

    document.onscroll = scroll;

});
$("#carousel").carousel();

