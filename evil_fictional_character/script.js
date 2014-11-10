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

    var winHeight = $(window).height();
    var winWidth = $(window).width();

    console.log(winHeight);
    console.log(winWidth);

    if(winWidth >= 1000 && winHeight >= 600){
        console.log("Larger than 1000 by 600");
        $('.container-fluid').height(850);
        $('.aboutMain').height(600);
        $('.aboutInfo').height(300);
    } else {
        console.log("Smaller");
    }

    $( ".btn-skill" ).click(function() {
        $('.jumbotron').hide();
        $('.skills').show();
    });
    
    $('.equip-btn').click(function(){
      $('.equip-btn, .skill-btn, .jumbotron').hide();
      $('.equipment, .back').show();
    });
    $('.skill-btn').click(function(){
      $('.equip-btn, .skill-btn, .jumbotron').hide();
      $('.skills, .back').show();
    });
    $('.back').click(function(){
      $('.equip-btn, .skill-btn, .jumbotron').show();
      $('.equipment, .skills, .back').hide();
    });
    
    $('.normal').click(function(){
      $(".koro").attr("src","http://img2.wikia.nocookie.net/__cb20140803220237/akamegakill/images/6/64/Coro.png");
    });
    $('.berserker').click(function(){
     $(".koro").attr("src","http://media.animevice.com/uploads/1/18405/777985-coro_berserker_mode.png");
    });
    
    document.onscroll = scroll;
    $("#carousel").carousel();

    $('.anchor').click(function(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
      return false;
  });
});

