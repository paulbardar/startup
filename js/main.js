$( document ).ready(function() {
  console.log("READY!!!");


  // Slick nav
$(function(){
     $('.menu').slicknav(
       {
         prependTo: '.nav'
       }
     );
 });
 // slider

  $('.about-us__team').owlCarousel({
    loop: false,
    margin: 30,
    nav: true,
    dots: false,
    items: 4,
    smartSpeed: 500,
    navContainer: ('.team__nav'),
    responsiveClass: true,
    responsive:{
      0:{
        items: 1
      },
      450:{
        items: 2
      },
      638:{
        items: 4
      }
    }
  });

  $('.phrase-slider').owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    dots: true,
    items: 1,
    smartSpeed: 500
  });
});
