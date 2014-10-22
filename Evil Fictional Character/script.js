$(document).ready(function () {

    $(window).on('beforeunload', function() {
    	$(window).scrollTop(0);
	});

    var menu = $('.nav');
    var origOffsetY = menu.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.menu').addClass('sticky');
            $('.container').addClass('menu-margin');
            $('.hiddenAnchor').addClass('visible');
        } else {
            $('.menu').removeClass('sticky');
            $('.container').removeClass('menu-margin');
            $('.hiddenAnchor').removeClass('visible');
        }
    }

    document.onscroll = scroll;
    $("#carousel").carousel();

    $('.anchor').click(function(){
    	$('html, body').animate({
        	scrollTop: $( $(this).attr('href') ).offset().top
    	}, 500);
    	return false;
	});
});

