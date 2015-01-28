$(document).ready(function(){

  localStorage.setItem("cart", 0);
  $('.badge').text(localStorage.clickcount);

  $('.back_to_top').hide();
  var origOffsetY = 1;
  function scroll() {
    if ($(window).scrollTop() >= origOffsetY) {
      $('.back_to_top').fadeIn(500);
    } else {
      $('.back_to_top').fadeOut(500);
    }
  }
    document.onscroll = scroll;

   $('.anchor').click(function(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
      return false;
    });

   var cart_btn = $('.badge'),
      cart = 0;

   $('.cart').on('click', function(){
      if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        $('.badge').text(localStorage.clickcount);
    }
  })
    $('.badge').on('click', function(){
        localStorage.clickcount = 0;
        $('.badge').text(localStorage.clickcount);
    })
});