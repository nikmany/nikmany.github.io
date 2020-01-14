$(function() {

  $('.header__hamburger').on('click', function() {
    $(this).toggleClass('active');
    $('.header__menu').toggleClass('active');
  });

  $('.section-three__slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000
  });


});
