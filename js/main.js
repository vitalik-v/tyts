$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1500,
        responsive:{
            0:{
                items:1,
                nav:false,
                dots: true
            },
            600:{
                items:1,
                nav:false,
                dots: true
            },
            1000:{
                items:1,
                nav:false,
                loop:false,
                dots: true
            }
        }
    });
  });

  